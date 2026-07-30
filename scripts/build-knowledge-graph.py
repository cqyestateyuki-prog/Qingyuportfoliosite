#!/usr/bin/env python3
"""Build the public (portfolio) copy of the HexaEdge signal knowledge graph.

Strips every outcome number from the source graph (returns, hit/miss labels,
signal hit-rates, proprietary duanfa examples) and re-skins it onto the
HexaEdge case-study palette. Structure, frequency and search all survive.
"""
import json, re, sys, pathlib

SRC = pathlib.Path("/Users/qingyu/Desktop/My Stock Analysis/[2026 Stock]/六爻自动录入/docs/knowledge_graph_en.html")
DST = pathlib.Path("/Users/qingyu/Desktop/作品集网站/qingyu-portfolio-v3 claude/public/hexaedge-knowledge-graph/index.html")

s = SRC.read_text()
i = s.find("const DATA =")
j = s.find("\n", i)
data = json.loads(s[i + len("const DATA ="):j].rstrip().rstrip(";"))

TF_MAP = {"Weekly": "wk", "Monthly": "mo", "Earnings": "er", "Yearly": "yr",
          "Half-year": "yr", "Query": "q"}

clean_nodes = []
for n in data["nodes"]:
    if n["type"] == "case":
        parts = [p.strip() for p in n["tip"].split("|")]
        label = parts[0] if parts else n["label"]
        # "AMD AMD-2026巳月" -> "AMD-2026巳月"
        toks = label.split(" ", 1)
        if len(toks) == 2 and toks[1].startswith(toks[0]):
            label = toks[1]
        tf = parts[1] if len(parts) > 1 else "Query"
        keep = [label] + parts[1:4]
        tip = " | ".join(keep).replace("pred:", "tendency:")
        clean_nodes.append({"id": n["id"], "label": label, "type": "case",
                            "tf": TF_MAP.get(tf, "q"), "tip": tip})
    else:
        tip = "Signal: %s | %s cases" % (n["label"], n.get("n", 1))
        clean_nodes.append({"id": n["id"], "label": n["label"], "type": "signal",
                            "n": n.get("n", 1), "tip": tip})

clean = {"nodes": clean_nodes, "links": data["links"],
         "stats": {"cases": data["stats"]["cases"], "signals": data["stats"]["signals"],
                   "multi": data["stats"]["multi"], "links": len(data["links"])}}

# ---- sanity: no outcome numbers may survive -------------------------------
blob = json.dumps(clean, ensure_ascii=False)
bad = re.findall(r"(?:wk%|mo%|case-hits|待验证|\d+(?:\.\d+)?%|\b\d+/\d+\b)", blob)
if bad:
    sys.exit("LEAK: %s" % set(bad))

head = s[:i]
tail = s[j:]

# ---- palette: HexaEdge case-study tokens ---------------------------------
css = {
    "#0b0e1a": "#101A2B",   # canvas ground   (ink, darkColor #14233A family)
    "#141a2e": "#17263C",   # raised
    "#1d2438": "#243651",   # rule
    "#232c47": "#2C4260",   # rule strong
    "#1a2138": "#17263C",   # tooltip bg
    "#2e3a5c": "#3A5375",
    "#cfd6e6": "#D6DEE9",
    "#e8ecf5": "#EDF1F6",
    "#8892ab": "#95A3B8",
    "#5c6784": "#6C7C96",
    "#f5c518": "#C9A24D",   # gilt, replaces the alarm yellow
}
for k, v in css.items():
    head = head.replace(k, v)
    tail = tail.replace(k, v)

# hit/miss green/red carried financial meaning that clashes with the product's
# own red-up / green-down semantics. Cases are coloured by timeframe instead.
tail = tail.replace(
    'const COLOR = {signal:"#C9A24D", hit:"#2ecc71", miss:"#e74c3c", partial:"#f39c12", unverified:"#6C7C96"};',
    'const COLOR = {signal:"#C9A24D", wk:"#6E9BD1", mo:"#7FA98E", er:"#B4794C", yr:"#9B8BC4", q:"#6C7C96"};')
tail = tail.replace('COLOR[n.hit]', 'COLOR[n.tf] || COLOR.q')

# stats row: structure only
tail = tail.replace(
    '`<div><b>${vc}/${s.cases}</b> cases</div><div><b>${s.verified}</b> verified</div>`+\n'
    '    `<div><b>${vs}/${s.signals}</b> signals</div><div><b>${s.multi}</b> signals ≥2 cases</div>`;',
    '`<div><b>${vc}/${s.cases}</b> cases</div><div><b>${vs}/${s.signals}</b> signals</div>`+\n'
    '    `<div><b>${s.multi}</b> signals ≥2 cases</div><div><b>${s.links}</b> links</div>`;')

# ---- fit the whole graph into the viewport until the user takes over ------
tail = tail.replace(
    'let nodes=[], links=[], byId={}, view={x:0,y:0,k:1}, drag=null, panning=null, hover=null, focusId=null;',
    'let nodes=[], links=[], byId={}, view={x:0,y:0,k:1}, drag=null, panning=null, hover=null, focusId=null;\n'
    'let autofit = true;')
# centre on the bounding box rather than the centroid: a lopsided layout used to
# push half the graph off-canvas, and the jump when autofit released was visible.
tail = tail.replace(
    '''  cen.x=0; cen.y=0; nodes.forEach(n=>{cen.x+=n.x; cen.y+=n.y;});
  cen.x/=nodes.length||1; cen.y/=nodes.length||1;''',
    '''  let bx0=1e9, by0=1e9, bx1=-1e9, by1=-1e9;
  nodes.forEach(n=>{ if(n.x-n.r<bx0) bx0=n.x-n.r; if(n.y-n.r<by0) by0=n.y-n.r;
                     if(n.x+n.r>bx1) bx1=n.x+n.r; if(n.y+n.r>by1) by1=n.y+n.r; });
  if (nodes.length){ cen.x=(bx0+bx1)/2; cen.y=(by0+by1)/2; }
  if (autofit && nodes.length){
    const mx = Math.min(400, w*0.22), my = Math.min(90, h*0.12);
    const fit = Math.min((w-mx)/Math.max(bx1-bx0,1), (h-my)/Math.max(by1-by0,1));
    view.k = Math.min(1.15, Math.max(0.15, fit)); view.x = 0; view.y = 0;
    if (alpha < 0.008) autofit = false;
  }''')
HANDOVER = [
    ('if(n){ drag={n}; alpha=Math.max(alpha,0.3); }',
     'if(n){ drag={n}; alpha=Math.max(alpha,0.3); autofit=false; }'),
    ('cv.onwheel = e=>{ e.preventDefault();',
     'cv.onwheel = e=>{ e.preventDefault(); autofit=false;'),
    ('  if(n){ focusId=n.id; view.x=-(n.x-cen.x)*view.k; view.y=-(n.y-cen.y)*view.k; }',
     '  if(n){ autofit=false; focusId=n.id; view.x=-(n.x-cen.x)*view.k; view.y=-(n.y-cen.y)*view.k; }'),
    ('    focusId=n.id; view.x=-(n.x-cen.x)*view.k; view.y=-(n.y-cen.y)*view.k;',
     '    autofit=false; focusId=n.id; view.x=-(n.x-cen.x)*view.k; view.y=-(n.y-cen.y)*view.k;'),
    ('else panning={x:e.offsetX-view.x, y:e.offsetY-view.y};',
     'else { panning={x:e.offsetX-view.x, y:e.offsetY-view.y}; autofit=false; }'),
]
for old, new in HANDOVER:
    if old not in tail:
        sys.exit("patch target missing: %r" % old[:60])
    tail = tail.replace(old, new, 1)

# 小尺寸(页内嵌)时标签会糊成一团: 缩得越小,只留连边最多的那些信号名。
tail = tail.replace(
    'if (n.type==="signal" && (n.n>=3 || (hl&&hl.has(n.id)) || view.k>1.8)){',
    'const minN = view.k < 0.35 ? 9 : view.k < 0.55 ? 6 : 3;\n'
    '    if (n.type==="signal" && (n.n>=minN || (hl&&hl.has(n.id)) || view.k>1.8)){')

# rank table: drop the hit-rate column
tail = tail.replace(
    '<td>${s.n}</td><td>${esc(s.rate)}</td></tr>`',
    '<td>${s.n}</td></tr>`')

# ---- sidebar chrome ------------------------------------------------------
head = head.replace(
    "<title>YaoSignal Knowledge Graph — Signal × Case × Verification</title>",
    "<title>HexaEdge · Signal Knowledge Graph</title>")

OLD_SIDE_START = '<div id="side">'
OLD_SIDE_END = '</div>\n<div id="wrap">'
a = head.find(OLD_SIDE_START)
b = head.find(OLD_SIDE_END)
NEW_SIDE = '''<div id="side">
  <h1>Signal Knowledge Graph</h1>
  <div class="sub">HexaEdge · generated from the case archive, not drawn by hand</div>
  <div id="stats"></div>
  <input id="q" placeholder="Search a signal or a case…">
  <label class="ck"><input type="checkbox" id="lone"> Show signals that appear in only one case</label>
  <div class="legend">
    <span><i style="background:#C9A24D"></i>Signal</span>
    <span><i style="background:#6E9BD1"></i>Weekly</span>
    <span><i style="background:#7FA98E"></i>Monthly</span>
    <span><i style="background:#B4794C"></i>Earnings</span>
    <span><i style="background:#9B8BC4"></i>Yearly</span>
    <span><i style="background:#6C7C96"></i>Ad-hoc</span>
  </div>
  <table><thead><tr><th>Signal (≥2 cases)</th><th>cases</th></tr></thead><tbody id="rank"></tbody></table>
  <div class="sub" style="margin-top:10px">Drag a node to pin it, click to isolate its neighbourhood, scroll to zoom.</div>
</div>
'''
head = head[:a] + NEW_SIDE + head[b + len('</div>\n'):]

head = head.replace(
    '<div id="foot">in-sample showcase · not trading advice · generated from real case records</div>',
    '<div id="foot">Outcomes are withheld from this public copy: the graph shows how the method is '
    'structured, not a track record. Not investment advice. · '
    '<a href="https://hexaedge.vercel.app" target="_blank" rel="noopener">hexaedge.vercel.app</a></div>')

# The canvas was a flex item with min-width:auto, so once resize() sized it the
# wrap could no longer shrink and the graph was drawn off the right edge.
head = head.replace("  #wrap { flex:1; position:relative; }",
                    "  #wrap { flex:1; position:relative; min-width:0; overflow:hidden; }")
head = head.replace("  canvas { display:block; cursor:grab; }",
                    "  canvas { display:block; position:absolute; top:0; left:0; cursor:grab; }")

# footer link styling + phone layout
head = head.replace("</style>", '''  #foot a { color:#C9A24D; text-decoration:none; }
  #foot a:hover { text-decoration:underline; }
  @media (max-width: 760px) {
    body { flex-direction:column; }
    #side { width:100%; min-width:0; max-height:46vh; border-right:0; border-bottom:1px solid #243651; }
    #wrap { flex:1; min-height:54vh; }
  }
</style>''')

DST.parent.mkdir(parents=True, exist_ok=True)
DST.write_text(head + "const DATA = " + json.dumps(clean, ensure_ascii=False) + tail)
print("wrote", DST, DST.stat().st_size, "bytes")
print("cases", len([n for n in clean_nodes if n['type'] == 'case']),
      "signals", len([n for n in clean_nodes if n['type'] == 'signal']),
      "links", len(clean['links']))
