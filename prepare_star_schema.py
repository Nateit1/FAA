"""
prepare_star_schema.py

Cleans raw FAA flight data and builds a star-schema set of CSVs
(one fact table + supporting dimension tables) ready to import into
Power BI for the ColorStack Summer Data Pipeline dashboard.

Usage:
    python prepare_star_schema.py --input raw_flights.csv --outdir star_schema/

Expected raw columns (rename in RAW_COLUMN_MAP below if your source differs):
    flight_date, carrier_code, carrier_name, origin_airport, dest_airport,
    scheduled_dep, actual_dep, scheduled_arr, actual_arr,
    cancelled, cancellation_code, diverted
"""

import argparse
import os
import sys

import pandas as pd


RAW_COLUMN_MAP = {
    "flight_date": "flight_date",
    "carrier_code": "carrier_code",
    "carrier_name": "carrier_name",
    "origin_airport": "origin_airport",
    "dest_airport": "dest_airport",
    "scheduled_dep": "scheduled_dep",
    "actual_dep": "actual_dep",
    "scheduled_arr": "scheduled_arr",
    "actual_arr": "actual_arr",
    "cancelled": "cancelled",
    "cancellation_code": "cancellation_code",
    "diverted": "diverted",
}

CANCELLATION_CODE_LOOKUP = {
    "A": "Carrier",
    "B": "Weather",
    "C": "National Air System",
    "D": "Security",
}


def load_raw(path: str) -> pd.DataFrame:
    """Load the raw FAA extract and normalize column names."""
    df = pd.read_csv(path, low_memory=False)
    df = df.rename(columns=RAW_COLUMN_MAP)
    missing = set(RAW_COLUMN_MAP.values()) - set(df.columns)
    if missing:
        raise ValueError(f"Raw file is missing expected columns: {sorted(missing)}")
    return df


def clean_flights(df: pd.DataFrame) -> pd.DataFrame:
    """Apply data-cleaning standards: types, dates, dedupe, and flags."""
    df = df.copy()

    df["flight_date"] = pd.to_datetime(df["flight_date"], errors="coerce")
    df = df.dropna(subset=["flight_date", "carrier_code", "origin_airport", "dest_airport"])

    for col in ("scheduled_dep", "actual_dep", "scheduled_arr", "actual_arr"):
        df[col] = pd.to_numeric(df[col], errors="coerce")

    df["cancelled"] = df["cancelled"].fillna(0).astype(int).astype(bool)
    df["diverted"] = df["diverted"].fillna(0).astype(int).astype(bool)
    df["cancellation_code"] = df["cancellation_code"].where(df["cancelled"], other=pd.NA)

    df["dep_delay_minutes"] = df["actual_dep"] - df["scheduled_dep"]
    df["arr_delay_minutes"] = df["actual_arr"] - df["scheduled_arr"]
    df["is_delayed"] = df["arr_delay_minutes"].fillna(0) > 15

    df = df.drop_duplicates(
        subset=["flight_date", "carrier_code", "origin_airport", "dest_airport", "scheduled_dep"]
    )
    return df.reset_index(drop=True)


def build_dim_date(df: pd.DataFrame) -> pd.DataFrame:
    dates = pd.DataFrame({"date": pd.to_datetime(df["flight_date"].unique())})
    dates = dates.sort_values("date").reset_index(drop=True)
    dates["date_key"] = dates.index + 1
    dates["year"] = dates["date"].dt.year
    dates["month"] = dates["date"].dt.month
    dates["month_name"] = dates["date"].dt.strftime("%B")
    dates["day_of_week"] = dates["date"].dt.day_name()
    dates["is_weekend"] = dates["date"].dt.dayofweek >= 5
    return dates[["date_key", "date", "year", "month", "month_name", "day_of_week", "is_weekend"]]


def build_dim_airline(df: pd.DataFrame) -> pd.DataFrame:
    airlines = df[["carrier_code", "carrier_name"]].drop_duplicates().reset_index(drop=True)
    airlines["airline_key"] = airlines.index + 1
    return airlines[["airline_key", "carrier_code", "carrier_name"]]


def build_dim_airport(df: pd.DataFrame) -> pd.DataFrame:
    codes = pd.unique(pd.concat([df["origin_airport"], df["dest_airport"]]))
    airports = pd.DataFrame({"airport_code": sorted(codes)})
    airports["airport_key"] = airports.index + 1
    return airports[["airport_key", "airport_code"]]


def build_dim_cancellation_code(df: pd.DataFrame) -> pd.DataFrame:
    codes = sorted(df["cancellation_code"].dropna().unique())
    rows = [{"cancellation_code": c, "description": CANCELLATION_CODE_LOOKUP.get(c, "Unknown")} for c in codes]
    dim = pd.DataFrame(rows)
    dim["cancellation_key"] = dim.index + 1
    return dim[["cancellation_key", "cancellation_code", "description"]]


def build_fact_flights(df, dim_date, dim_airline, dim_airport, dim_cancellation) -> pd.DataFrame:
    fact = df.copy()

    fact = fact.merge(dim_date[["date_key", "date"]], left_on="flight_date", right_on="date", how="left")
    fact = fact.merge(dim_airline[["airline_key", "carrier_code"]], on="carrier_code", how="left")
    fact = fact.merge(
        dim_airport.rename(columns={"airport_key": "origin_airport_key", "airport_code": "origin_airport"}),
        on="origin_airport", how="left",
    )
    fact = fact.merge(
        dim_airport.rename(columns={"airport_key": "dest_airport_key", "airport_code": "dest_airport"}),
        on="dest_airport", how="left",
    )
    fact = fact.merge(
        dim_cancellation[["cancellation_key", "cancellation_code"]], on="cancellation_code", how="left"
    )

    return fact[[
        "date_key", "airline_key", "origin_airport_key", "dest_airport_key", "cancellation_key",
        "dep_delay_minutes", "arr_delay_minutes", "is_delayed", "cancelled", "diverted",
    ]]


def main():
    parser = argparse.ArgumentParser(description="Build star-schema CSVs from raw FAA flight data.")
    parser.add_argument("--input", required=True, help="Path to the raw FAA flight CSV.")
    parser.add_argument("--outdir", default="star_schema", help="Directory to write the output CSVs to.")
    args = parser.parse_args()

    if not os.path.exists(args.input):
        sys.exit(f"Input file not found: {args.input}")
    os.makedirs(args.outdir, exist_ok=True)

    print(f"Loading raw data from {args.input} ...")
    raw = load_raw(args.input)

    print("Cleaning flight records ...")
    flights = clean_flights(raw)
    print(f"  {len(raw):,} raw rows -> {len(flights):,} cleaned rows")

    print("Building dimension tables ...")
    dim_date = build_dim_date(flights)
    dim_airline = build_dim_airline(flights)
    dim_airport = build_dim_airport(flights)
    dim_cancellation = build_dim_cancellation_code(flights)

    print("Building fact table ...")
    fact_flights = build_fact_flights(flights, dim_date, dim_airline, dim_airport, dim_cancellation)

    outputs = {
        "dim_date.csv": dim_date,
        "dim_airline.csv": dim_airline,
        "dim_airport.csv": dim_airport,
        "dim_cancellation_code.csv": dim_cancellation,
        "fact_flights.csv": fact_flights,
    }
    for filename, table in outputs.items():
        path = os.path.join(args.outdir, filename)
        table.to_csv(path, index=False)
        print(f"  wrote {path} ({len(table):,} rows)")

    print("Done. Import the CSVs in", args.outdir, "into Power BI as the star-schema model.")


if __name__ == "__main__":
    main()
