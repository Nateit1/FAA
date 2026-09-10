/* ---------- data ---------- */
const DASH_DATA = {"cityTotals": [{"city": "Atlanta", "total": 346836}, {"city": "Chicago", "total": 285884}, {"city": "Dallas-Fort Worth", "total": 239551}, {"city": "Denver", "total": 196055}, {"city": "Los Angeles", "total": 194673}, {"city": "San Francisco", "total": 148008}, {"city": "Phoenix", "total": 146815}, {"city": "Houston", "total": 146622}, {"city": "Las Vegas", "total": 133181}, {"city": "Minneapolis", "total": 112117}], "slices": {"All Airports": {"label": "All Airports", "total": 1949742, "delayed": 376056, "canceled": 28570, "ontime": 1545116, "pctOntime": 79.2, "pctDelayed": 19.3, "pctCanceled": 1.5, "airlines": [{"name": "Spirit Air Lines", "pct": 32.0, "total": 49482}, {"name": "Frontier Airlines Inc.", "pct": 26.2, "total": 44135}, {"name": "JetBlue Airways", "pct": 22.9, "total": 17575}, {"name": "Hawaiian Airlines Inc.", "pct": 22.3, "total": 3368}, {"name": "United Air Lines Inc.", "pct": 21.8, "total": 259497}, {"name": "Southwest Airlines Co.", "pct": 21.2, "total": 276585}, {"name": "Skywest Airlines Inc.", "pct": 20.7, "total": 224404}, {"name": "American Eagle Airlines Inc.", "pct": 20.7, "total": 118426}, {"name": "Atlantic Southeast Airlines", "pct": 19.2, "total": 195999}, {"name": "Virgin America", "pct": 18.8, "total": 32887}, {"name": "American Airlines Inc.", "pct": 18.3, "total": 296131}], "reasons": [{"name": "Weather", "value": 16372, "pct": 57.3}, {"name": "Airline/Carrier", "value": 8084, "pct": 28.3}, {"name": "National Air System", "value": 4112, "pct": 14.4}, {"name": "Security", "value": 2, "pct": 0.0}], "months": [{"month": 1, "pct": 1.8}, {"month": 2, "pct": 4.1}, {"month": 3, "pct": 1.7}, {"month": 4, "pct": 0.9}, {"month": 5, "pct": 1.2}, {"month": 6, "pct": 1.8}, {"month": 7, "pct": 0.8}, {"month": 8, "pct": 0.9}, {"month": 9, "pct": 0.4}, {"month": 11, "pct": 1.0}, {"month": 12, "pct": 1.9}]}, "Atlanta": {"label": "Atlanta", "total": 346836, "delayed": 54315, "canceled": 2557, "ontime": 289964, "pctOntime": 83.6, "pctDelayed": 15.7, "pctCanceled": 0.7, "airlines": [{"name": "Spirit Air Lines", "pct": 36.2, "total": 4369}, {"name": "Frontier Airlines Inc.", "pct": 33.0, "total": 4494}, {"name": "American Eagle Airlines Inc.", "pct": 27.9, "total": 1295}, {"name": "United Air Lines Inc.", "pct": 22.4, "total": 3405}, {"name": "Skywest Airlines Inc.", "pct": 20.7, "total": 4230}, {"name": "Atlantic Southeast Airlines", "pct": 19.8, "total": 56959}, {"name": "Southwest Airlines Co.", "pct": 19.3, "total": 39513}, {"name": "American Airlines Inc.", "pct": 14.8, "total": 7498}, {"name": "US Airways Inc.", "pct": 14.6, "total": 2939}, {"name": "Alaska Airlines Inc.", "pct": 13.8, "total": 429}, {"name": "Delta Air Lines Inc.", "pct": 13.0, "total": 221705}], "reasons": [{"name": "Weather", "value": 1707, "pct": 66.8}, {"name": "Airline/Carrier", "value": 695, "pct": 27.2}, {"name": "National Air System", "value": 155, "pct": 6.1}], "months": [{"month": 1, "pct": 0.9}, {"month": 2, "pct": 3.4}, {"month": 3, "pct": 0.8}, {"month": 4, "pct": 0.3}, {"month": 5, "pct": 0.5}, {"month": 6, "pct": 0.9}, {"month": 7, "pct": 0.3}, {"month": 8, "pct": 0.3}, {"month": 9, "pct": 0.1}, {"month": 11, "pct": 0.2}, {"month": 12, "pct": 0.9}]}, "Chicago": {"label": "Chicago", "total": 285884, "delayed": 64655, "canceled": 8548, "ontime": 212681, "pctOntime": 74.4, "pctDelayed": 22.6, "pctCanceled": 3.0, "airlines": [{"name": "Spirit Air Lines", "pct": 36.6, "total": 9965}, {"name": "Frontier Airlines Inc.", "pct": 34.2, "total": 4611}, {"name": "United Air Lines Inc.", "pct": 25.7, "total": 59538}, {"name": "Skywest Airlines Inc.", "pct": 25.0, "total": 37858}, {"name": "JetBlue Airways", "pct": 24.1, "total": 2256}, {"name": "American Airlines Inc.", "pct": 20.3, "total": 50741}, {"name": "Virgin America", "pct": 20.1, "total": 1380}, {"name": "Atlantic Southeast Airlines", "pct": 20.0, "total": 44243}, {"name": "American Eagle Airlines Inc.", "pct": 19.9, "total": 63130}, {"name": "Delta Air Lines Inc.", "pct": 18.8, "total": 6962}, {"name": "US Airways Inc.", "pct": 16.8, "total": 3452}], "reasons": [{"name": "Weather", "value": 4769, "pct": 55.8}, {"name": "National Air System", "value": 2334, "pct": 27.3}, {"name": "Airline/Carrier", "value": 1445, "pct": 16.9}], "months": [{"month": 1, "pct": 4.8}, {"month": 2, "pct": 7.8}, {"month": 3, "pct": 2.7}, {"month": 4, "pct": 2.0}, {"month": 5, "pct": 1.1}, {"month": 6, "pct": 4.4}, {"month": 7, "pct": 1.7}, {"month": 8, "pct": 2.0}, {"month": 9, "pct": 1.1}, {"month": 11, "pct": 3.1}, {"month": 12, "pct": 3.4}]}, "Dallas-Fort Worth": {"label": "Dallas-Fort Worth", "total": 239551, "delayed": 48673, "canceled": 6254, "ontime": 184624, "pctOntime": 77.1, "pctDelayed": 20.3, "pctCanceled": 2.6, "airlines": [{"name": "Spirit Air Lines", "pct": 26.1, "total": 8519}, {"name": "Frontier Airlines Inc.", "pct": 25.8, "total": 1288}, {"name": "Skywest Airlines Inc.", "pct": 23.4, "total": 4131}, {"name": "Atlantic Southeast Airlines", "pct": 23.4, "total": 24112}, {"name": "JetBlue Airways", "pct": 22.4, "total": 598}, {"name": "American Eagle Airlines Inc.", "pct": 21.4, "total": 53603}, {"name": "American Airlines Inc.", "pct": 19.3, "total": 134270}, {"name": "United Air Lines Inc.", "pct": 19.0, "total": 3505}, {"name": "US Airways Inc.", "pct": 15.6, "total": 3082}, {"name": "Delta Air Lines Inc.", "pct": 13.9, "total": 5095}, {"name": "Alaska Airlines Inc.", "pct": 10.8, "total": 1348}], "reasons": [{"name": "Weather", "value": 4664, "pct": 74.6}, {"name": "Airline/Carrier", "value": 1455, "pct": 23.3}, {"name": "National Air System", "value": 135, "pct": 2.2}], "months": [{"month": 1, "pct": 2.3}, {"month": 2, "pct": 9.6}, {"month": 3, "pct": 4.9}, {"month": 4, "pct": 1.6}, {"month": 5, "pct": 3.6}, {"month": 6, "pct": 1.6}, {"month": 7, "pct": 0.4}, {"month": 8, "pct": 0.5}, {"month": 9, "pct": 0.2}, {"month": 11, "pct": 1.0}, {"month": 12, "pct": 3.1}]}, "Denver": {"label": "Denver", "total": 196055, "delayed": 41798, "canceled": 2123, "ontime": 152134, "pctOntime": 77.6, "pctDelayed": 21.3, "pctCanceled": 1.1, "airlines": [{"name": "Spirit Air Lines", "pct": 28.1, "total": 3691}, {"name": "JetBlue Airways", "pct": 27.1, "total": 958}, {"name": "Frontier Airlines Inc.", "pct": 23.1, "total": 21175}, {"name": "Atlantic Southeast Airlines", "pct": 22.5, "total": 5507}, {"name": "Skywest Airlines Inc.", "pct": 22.2, "total": 44633}, {"name": "United Air Lines Inc.", "pct": 21.7, "total": 46218}, {"name": "American Airlines Inc.", "pct": 20.4, "total": 7107}, {"name": "Southwest Airlines Co.", "pct": 20.4, "total": 55768}, {"name": "Delta Air Lines Inc.", "pct": 15.5, "total": 7080}, {"name": "US Airways Inc.", "pct": 15.5, "total": 2329}, {"name": "Alaska Airlines Inc.", "pct": 11.0, "total": 1589}], "reasons": [{"name": "Weather", "value": 1383, "pct": 65.1}, {"name": "Airline/Carrier", "value": 538, "pct": 25.3}, {"name": "National Air System", "value": 202, "pct": 9.5}], "months": [{"month": 1, "pct": 1.6}, {"month": 2, "pct": 2.6}, {"month": 3, "pct": 0.8}, {"month": 4, "pct": 0.8}, {"month": 5, "pct": 0.6}, {"month": 6, "pct": 1.1}, {"month": 7, "pct": 0.6}, {"month": 8, "pct": 0.4}, {"month": 9, "pct": 0.1}, {"month": 11, "pct": 1.3}, {"month": 12, "pct": 2.2}]}, "Los Angeles": {"label": "Los Angeles", "total": 194673, "delayed": 38642, "canceled": 2164, "ontime": 153867, "pctOntime": 79.0, "pctDelayed": 19.8, "pctCanceled": 1.1, "airlines": [{"name": "Spirit Air Lines", "pct": 34.1, "total": 4344}, {"name": "Southwest Airlines Co.", "pct": 26.0, "total": 37511}, {"name": "Frontier Airlines Inc.", "pct": 23.0, "total": 1382}, {"name": "JetBlue Airways", "pct": 21.8, "total": 4108}, {"name": "American Eagle Airlines Inc.", "pct": 21.2, "total": 184}, {"name": "Skywest Airlines Inc.", "pct": 19.9, "total": 36691}, {"name": "Virgin America", "pct": 19.3, "total": 11801}, {"name": "US Airways Inc.", "pct": 19.3, "total": 3688}, {"name": "United Air Lines Inc.", "pct": 18.5, "total": 27429}, {"name": "Delta Air Lines Inc.", "pct": 17.7, "total": 25171}, {"name": "Hawaiian Airlines Inc.", "pct": 17.6, "total": 1555}], "reasons": [{"name": "Airline/Carrier", "value": 1298, "pct": 60.0}, {"name": "Weather", "value": 609, "pct": 28.1}, {"name": "National Air System", "value": 257, "pct": 11.9}], "months": [{"month": 1, "pct": 1.4}, {"month": 2, "pct": 2.1}, {"month": 3, "pct": 1.0}, {"month": 4, "pct": 0.6}, {"month": 5, "pct": 0.5}, {"month": 6, "pct": 1.5}, {"month": 7, "pct": 1.5}, {"month": 8, "pct": 1.3}, {"month": 9, "pct": 0.6}, {"month": 11, "pct": 0.6}, {"month": 12, "pct": 1.1}]}, "San Francisco": {"label": "San Francisco", "total": 148008, "delayed": 28508, "canceled": 2148, "ontime": 117352, "pctOntime": 79.3, "pctDelayed": 19.3, "pctCanceled": 1.5, "airlines": [{"name": "Frontier Airlines Inc.", "pct": 28.5, "total": 1946}, {"name": "Hawaiian Airlines Inc.", "pct": 28.1, "total": 668}, {"name": "JetBlue Airways", "pct": 21.5, "total": 4928}, {"name": "Skywest Airlines Inc.", "pct": 21.1, "total": 34994}, {"name": "United Air Lines Inc.", "pct": 19.6, "total": 45587}, {"name": "Southwest Airlines Co.", "pct": 19.6, "total": 14236}, {"name": "Alaska Airlines Inc.", "pct": 18.1, "total": 5177}, {"name": "Virgin America", "pct": 17.5, "total": 15940}, {"name": "American Airlines Inc.", "pct": 16.3, "total": 12216}, {"name": "Delta Air Lines Inc.", "pct": 16.0, "total": 9701}, {"name": "US Airways Inc.", "pct": 12.1, "total": 2615}], "reasons": [{"name": "Weather", "value": 900, "pct": 41.9}, {"name": "Airline/Carrier", "value": 878, "pct": 40.9}, {"name": "National Air System", "value": 369, "pct": 17.2}, {"name": "Security", "value": 1, "pct": 0.0}], "months": [{"month": 1, "pct": 2.3}, {"month": 2, "pct": 3.0}, {"month": 3, "pct": 1.2}, {"month": 4, "pct": 0.9}, {"month": 5, "pct": 1.0}, {"month": 6, "pct": 1.8}, {"month": 7, "pct": 1.2}, {"month": 8, "pct": 1.0}, {"month": 9, "pct": 0.5}, {"month": 11, "pct": 0.7}, {"month": 12, "pct": 2.6}]}, "Phoenix": {"label": "Phoenix", "total": 146815, "delayed": 26205, "canceled": 902, "ontime": 119708, "pctOntime": 81.5, "pctDelayed": 17.8, "pctCanceled": 0.6, "airlines": [{"name": "Hawaiian Airlines Inc.", "pct": 29.0, "total": 334}, {"name": "JetBlue Airways", "pct": 27.0, "total": 663}, {"name": "Spirit Air Lines", "pct": 26.7, "total": 966}, {"name": "Frontier Airlines Inc.", "pct": 26.5, "total": 1870}, {"name": "Southwest Airlines Co.", "pct": 20.9, "total": 53765}, {"name": "US Airways Inc.", "pct": 17.2, "total": 27781}, {"name": "American Airlines Inc.", "pct": 16.4, "total": 28214}, {"name": "United Air Lines Inc.", "pct": 15.1, "total": 5469}, {"name": "Skywest Airlines Inc.", "pct": 14.9, "total": 18552}, {"name": "Delta Air Lines Inc.", "pct": 10.0, "total": 6918}, {"name": "Alaska Airlines Inc.", "pct": 9.6, "total": 2275}], "reasons": [{"name": "Airline/Carrier", "value": 463, "pct": 51.3}, {"name": "Weather", "value": 376, "pct": 41.7}, {"name": "National Air System", "value": 63, "pct": 7.0}], "months": [{"month": 1, "pct": 0.7}, {"month": 2, "pct": 1.4}, {"month": 3, "pct": 0.6}, {"month": 4, "pct": 0.4}, {"month": 5, "pct": 0.4}, {"month": 6, "pct": 0.8}, {"month": 7, "pct": 0.4}, {"month": 8, "pct": 0.7}, {"month": 9, "pct": 0.3}, {"month": 11, "pct": 0.5}, {"month": 12, "pct": 0.8}]}, "Houston": {"label": "Houston", "total": 146622, "delayed": 29582, "canceled": 2130, "ontime": 114910, "pctOntime": 78.4, "pctDelayed": 20.2, "pctCanceled": 1.5, "airlines": [{"name": "Spirit Air Lines", "pct": 36.9, "total": 5096}, {"name": "Frontier Airlines Inc.", "pct": 25.7, "total": 1529}, {"name": "Skywest Airlines Inc.", "pct": 24.4, "total": 15381}, {"name": "United Air Lines Inc.", "pct": 23.2, "total": 53985}, {"name": "American Airlines Inc.", "pct": 15.8, "total": 6501}, {"name": "US Airways Inc.", "pct": 15.8, "total": 2465}, {"name": "Atlantic Southeast Airlines", "pct": 15.6, "total": 58330}, {"name": "Delta Air Lines Inc.", "pct": 14.9, "total": 2927}, {"name": "Alaska Airlines Inc.", "pct": 11.0, "total": 381}], "reasons": [{"name": "Weather", "value": 1200, "pct": 56.3}, {"name": "Airline/Carrier", "value": 483, "pct": 22.7}, {"name": "National Air System", "value": 447, "pct": 21.0}], "months": [{"month": 1, "pct": 1.0}, {"month": 2, "pct": 1.9}, {"month": 3, "pct": 1.3}, {"month": 4, "pct": 1.5}, {"month": 5, "pct": 2.5}, {"month": 6, "pct": 2.6}, {"month": 7, "pct": 0.9}, {"month": 8, "pct": 1.2}, {"month": 9, "pct": 0.3}, {"month": 11, "pct": 0.6}, {"month": 12, "pct": 2.0}]}, "Las Vegas": {"label": "Las Vegas", "total": 133181, "delayed": 26207, "canceled": 936, "ontime": 106038, "pctOntime": 79.6, "pctDelayed": 19.7, "pctCanceled": 0.7, "airlines": [{"name": "Spirit Air Lines", "pct": 26.7, "total": 9037}, {"name": "Frontier Airlines Inc.", "pct": 25.9, "total": 4327}, {"name": "Hawaiian Airlines Inc.", "pct": 23.9, "total": 811}, {"name": "JetBlue Airways", "pct": 23.4, "total": 4064}, {"name": "Virgin America", "pct": 22.2, "total": 3766}, {"name": "Southwest Airlines Co.", "pct": 21.3, "total": 68520}, {"name": "United Air Lines Inc.", "pct": 16.7, "total": 11153}, {"name": "Skywest Airlines Inc.", "pct": 16.4, "total": 2421}, {"name": "American Airlines Inc.", "pct": 15.7, "total": 11359}, {"name": "US Airways Inc.", "pct": 13.1, "total": 3024}, {"name": "Delta Air Lines Inc.", "pct": 11.5, "total": 10626}], "reasons": [{"name": "Airline/Carrier", "value": 511, "pct": 54.6}, {"name": "Weather", "value": 365, "pct": 39.0}, {"name": "National Air System", "value": 59, "pct": 6.3}, {"name": "Security", "value": 1, "pct": 0.1}], "months": [{"month": 1, "pct": 0.7}, {"month": 2, "pct": 1.6}, {"month": 3, "pct": 0.9}, {"month": 4, "pct": 0.4}, {"month": 5, "pct": 0.6}, {"month": 6, "pct": 1.0}, {"month": 7, "pct": 0.5}, {"month": 8, "pct": 0.7}, {"month": 9, "pct": 0.3}, {"month": 11, "pct": 0.4}, {"month": 12, "pct": 0.7}]}, "Minneapolis": {"label": "Minneapolis", "total": 112117, "delayed": 17471, "canceled": 808, "ontime": 93838, "pctOntime": 83.7, "pctDelayed": 15.6, "pctCanceled": 0.7, "airlines": [{"name": "American Eagle Airlines Inc.", "pct": 41.2, "total": 187}, {"name": "Spirit Air Lines", "pct": 37.6, "total": 3495}, {"name": "Frontier Airlines Inc.", "pct": 28.2, "total": 1513}, {"name": "Atlantic Southeast Airlines", "pct": 21.4, "total": 6840}, {"name": "United Air Lines Inc.", "pct": 18.7, "total": 3208}, {"name": "American Airlines Inc.", "pct": 16.5, "total": 5487}, {"name": "Southwest Airlines Co.", "pct": 15.3, "total": 7272}, {"name": "Alaska Airlines Inc.", "pct": 15.0, "total": 587}, {"name": "Skywest Airlines Inc.", "pct": 14.4, "total": 25513}, {"name": "US Airways Inc.", "pct": 13.8, "total": 2086}, {"name": "Delta Air Lines Inc.", "pct": 13.4, "total": 55929}], "reasons": [{"name": "Weather", "value": 399, "pct": 49.4}, {"name": "Airline/Carrier", "value": 318, "pct": 39.4}, {"name": "National Air System", "value": 91, "pct": 11.3}], "months": [{"month": 1, "pct": 1.2}, {"month": 2, "pct": 1.8}, {"month": 3, "pct": 1.0}, {"month": 4, "pct": 0.3}, {"month": 5, "pct": 0.5}, {"month": 6, "pct": 1.0}, {"month": 7, "pct": 0.4}, {"month": 8, "pct": 0.4}, {"month": 9, "pct": 0.2}, {"month": 11, "pct": 0.4}, {"month": 12, "pct": 0.9}]}}};

const MONTH_LABELS = { 1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec" };
const REASON_COLORS = { "Weather": "var(--teal)", "Airline/Carrier": "var(--ink)", "National Air System": "#CFC9BB", "Security": "var(--mute)" };

let selectedCity = null;

function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(n >= 100000 ? 0 : 1) + "K";
  return String(n);
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function donutSlicePath(cx, cy, innerR, outerR, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const startInner = polarToCartesian(cx, cy, innerR, endAngle);
  const endInner = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    "M", startOuter.x, startOuter.y,
    "A", outerR, outerR, 0, largeArc, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerR, innerR, 0, largeArc, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ");
}

function buildDonutSVG(reasons, size) {
  const cx = size / 2, cy = size / 2, outerR = size * 0.32, innerR = size * 0.19;
  const total = reasons.reduce((s, d) => s + d.value, 0) || 1;
  let angle = 0;
  let paths = "";
  reasons.forEach(d => {
    const sweep = (d.value / total) * 360;
    const start = angle, end = angle + sweep;
    angle = end;
    const color = REASON_COLORS[d.name] || "var(--mute)";
    paths += `<path d="${donutSlicePath(cx, cy, innerR, outerR, start, end)}" fill="${color}" stroke="var(--paper)" stroke-width="2"><title>${d.name}: ${d.value.toLocaleString()} (${d.pct}%)</title></path>`;
  });
  return `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%">${paths}</svg>`;
}

function buildMonthBarsSVG(months, height) {
  const max = Math.max(...months.map(d => d.pct), 0.1);
  const barW = 100 / months.length;
  let bars = "";
  months.forEach((d, i) => {
    const h = (d.pct / max) * (height - 14);
    const x = i * barW + barW * 0.18;
    const w = barW * 0.64;
    bars += `<rect x="${x}" y="${height - 14 - h}" width="${w}" height="${h}" rx="1" fill="var(--teal)"><title>${d.month}: ${d.pct}%</title></rect>`;
    bars += `<text x="${x + w / 2}" y="${height - 3}" font-size="4.5" fill="var(--mute)" text-anchor="middle">${d.month}</text>`;
  });
  return `<svg viewBox="0 0 100 ${height}" width="100%" height="${height}" preserveAspectRatio="none">${bars}</svg>`;
}

function render() {
  const key = selectedCity || "All Airports";
  const slice = DASH_DATA.slices[key];
  const cityMax = DASH_DATA.cityTotals[0].total;
  const airlines = slice.airlines.slice(0, 11).map(a => ({
    name: a.name.replace(" Inc.", "").replace(" Co.", ""), pct: a.pct
  }));
  const airlineMax = Math.max(...airlines.map(a => a.pct), 1);
  const months = [...slice.months].sort((a, b) => a.month - b.month)
    .map(m => ({ month: MONTH_LABELS[m.month], pct: m.pct }));

  const cityBarsHTML = DASH_DATA.cityTotals.map(c => {
    const isSel = c.city === selectedCity;
    const w = Math.max(6, (c.total / cityMax) * 100);
    return `
      <div class="bar-row" data-city="${c.city}">
        <div class="bar-label ${isSel ? 'sel' : ''}">${c.city}</div>
        <div class="bar-track">
          <div class="bar-fill ${isSel ? 'sel' : ''}" style="width:${w}%">
            <span class="bar-fill-text">${c.total.toLocaleString()}</span>
          </div>
        </div>
      </div>`;
  }).join("");

  const airlineBarsHTML = airlines.map(a => {
    const w = Math.max(8, (a.pct / airlineMax) * 100);
    return `
      <div class="airline-row">
        <div class="airline-label">${a.name}</div>
        <div class="airline-track">
          <div class="airline-fill" style="width:${w}%">
            <span class="airline-fill-text">${a.pct}%</span>
          </div>
        </div>
      </div>`;
  }).join("");

  const legendHTML = slice.reasons.map(r => `
    <span class="legend-item">
      <span class="legend-dot" style="background:${REASON_COLORS[r.name] || 'var(--mute)'}"></span>${r.name}
    </span>`).join("");

  document.getElementById("app").innerHTML = `
    <div class="header-row">
      <div>
        <div class="title">Flight Status Dashboard</div>
        <div class="subtitle">${DASH_DATA.slices["All Airports"].total.toLocaleString()} FAA domestic flight records · click an airport bar to filter</div>
      </div>
      ${selectedCity ? `<button class="clear-btn" id="clearBtn">← Clear filter (${selectedCity})</button>` : ""}
    </div>

    <div class="kpi-row">
      <div class="kpi">
        <div class="kpi-label">TOTAL FLIGHTS</div>
        <div class="kpi-value" style="color:#F2EFE6">${fmt(slice.total)}</div>
        <div class="kpi-sub">${key === "All Airports" ? "Across 10 hub airports" : "Originating at " + key}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">DELAYED FLIGHTS</div>
        <div class="kpi-value" style="color:var(--yellow)">${fmt(slice.delayed)}</div>
        <div class="kpi-sub">${slice.pctDelayed}% of departures</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">CANCELED FLIGHTS</div>
        <div class="kpi-value" style="color:var(--teal)">${slice.canceled.toLocaleString()}</div>
        <div class="kpi-sub">${slice.pctCanceled}% of departures</div>
      </div>
    </div>

    <div class="grid">
      <div>
        <div class="panel-title">TOTAL FLIGHTS BY AIRPORT</div>
        ${cityBarsHTML}
      </div>
      <div>
        <div class="panel-title">% DELAYED BY AIRLINE${selectedCity ? " · " + selectedCity : ""}</div>
        ${airlineBarsHTML}
      </div>
      <div>
        <div class="panel-title">CANCELLATION REASONS${selectedCity ? " · " + selectedCity : ""}</div>
        <div class="legend">${legendHTML}</div>
        <div class="donut-wrap">
          ${buildDonutSVG(slice.reasons, 170)}
          <div class="donut-center">
            <div class="donut-center-value">${slice.canceled.toLocaleString()}</div>
            <div class="donut-center-sub">canceled</div>
          </div>
        </div>
        <div class="month-caption">Cancellation rate by month</div>
        ${buildMonthBarsSVG(months, 70)}
      </div>
    </div>

    <div class="status-row">
      <div class="panel-title">FLIGHT STATUS${selectedCity ? " · " + selectedCity : ""}</div>
      <div class="status-flex">
        <div class="status-card">
          <div class="status-stat">
            <div class="status-num" style="color:#F2EFE6">${slice.pctOntime}%</div>
            <div class="status-cap">ON-TIME</div>
          </div>
          <div class="status-stat">
            <div class="status-num" style="color:var(--yellow)">${slice.pctDelayed}%</div>
            <div class="status-cap">DELAYED</div>
          </div>
          <div class="status-stat">
            <div class="status-num" style="color:var(--teal)">${slice.pctCanceled}%</div>
            <div class="status-cap">CANCELED</div>
          </div>
        </div>
        <div class="status-bar">
          <div class="status-seg" style="width:${slice.pctOntime}%; background:#EAE6DA"></div>
          <div class="status-seg" style="width:${slice.pctDelayed}%; background:var(--yellow)"></div>
          <div class="status-seg" style="width:${slice.pctCanceled}%; background:var(--teal)"></div>
        </div>
      </div>
    </div>

    <div class="footnote">
      Demo recreation of the Power BI report, computed live from the ~1.95M-row FAA flights dataset · standard on-time definition (arrival delay &gt; 15 min counts as delayed)
    </div>
  `;

  document.querySelectorAll(".bar-row").forEach(el => {
    el.addEventListener("click", () => {
      const city = el.getAttribute("data-city");
      selectedCity = (city === selectedCity) ? null : city;
      render();
    });
  });
  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) clearBtn.addEventListener("click", () => { selectedCity = null; render(); });
}

render();
