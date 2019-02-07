// URL: https://beta.observablehq.com/@aaronkyle/cao-case-handling-process-pathways
// Title: CAO Case Handling: Process & Pathways
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 702
// Runtime version: 1

const m0 = {
  id: "b97e17a1e39fb994@702",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# CAO Case Handling: Process & Pathways`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This notebook presents vizualizations of [CAO](http://www.cao-ombudsman.org/)'s case handling process.  The intention is to illustrate avenues through which a complaint received by CAO move from though the office's different functions.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`*Disclaimer* - This is a conceptual drafting of CAO's process.  I do not officially represent CAO. This work seeks to explore avenues open to within a case handling process.  This process is defined in CAO's Operational Handbook and realized through a body of practice.  This work analyses pathways open within CAO's case handling process.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
Thanks to [Mike Bostock](https://beta.observablehq.com/@mbostock) for the [Graph-o-Matic ](https://beta.observablehq.com/@mbostock/graph-o-matic) implementation of [Graphviz](http://www.graphviz.org/). I found this to be a helpful way of drafting diagrams, as it easily lets me reactively muck around with chart information without actually editing cell values. I also appreciate being able to download each diagram as a \`.png\` or \`.svg\` file.
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`While my intention here is to quickly draft out a vizual description of CAO's case handling process, hopefully this notebook will also encourage you (the potential human reader) to experiement with organization and presentation of CAO's information or otherwise enjoy the view!`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Overview of CAO Phases`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`

CAO's case handing process is grouped into six main *phases*:

1. Intake
2. Eligibility
3. Assessment
4. Ombudsman [generally referred to as 'Dispute Resolution']
5. Compliance
6. Closure

`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Movement through CAO's process is sequentially ordered.`
)})
    },
    {
      name: "phases_chart",
      inputs: ["dot","phases"],
      value: (function(dot,phases){return(
dot`${phases}`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`*By the way:* If you're from my office and reading this&mdash;thank you! Check it out: you can manipulate the code below and generate an image of your adjusted design. The coding language used here is terrifically self-descriptive:`
)})
    },
    {
      name: "viewof phases",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>

digraph {
	rankdir = LR;
	node [shape = doublecircle]; Intake Eligibility Assessment Ombudsman Compliance Closure;
	Intake -> Eligibility [ label = " validity screening" ];
	Eligibility -> Assessment;
	Assessment -> Ombudsman;
	Assessment -> Compliance;
	Ombudsman -> Compliance;
	Ombudsman -> Closure;
	Compliance -> Closure;
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "phases",
      inputs: ["Generators","viewof phases"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["html","DOM","rasterize","phases_chart","serialize"],
      value: (async function(html,DOM,rasterize,phases_chart,serialize){return(
html`
${DOM.download(await rasterize(phases_chart), null, "Download as PNG")}
${DOM.download(await serialize(phases_chart), null, "Download as SVG")}
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Compliants pass first through an 'intake' process, during which a basic validity screening occurs (e.g. is the complaint 'real', or some form of spam), after which the eligibility of the compliance is assessed by a dedicated team.

An eligible compliance becomes a 'case'.  Cases enter into an assessment phase during which parties to the complaint decide whether to engage in a voluntary process of mediation and dispute resolution, or whether to initiate a compliance review.

While a case can transfer from assessment direct into compliance&mdash;a case received by the compliance function generally cannot be referred back in to the ombudsman function.

Cases may be closed out from either the ombudsman or compliance phases.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Phase and Sub-Phase Details`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Two of CAO's main phases are further divided into sub-phases.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Ombudsman / Dispute Resolution Phase`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`The Ombudsman phase has two sub-phases: 

1. Dispute Resolution
2. Dispute Resolution Monitoring`
)})
    },
    {
      name: "ombudsman_chart",
      inputs: ["dot","ombudsman"],
      value: (function(dot,ombudsman){return(
dot`${ombudsman}`
)})
    },
    {
      inputs: ["html","DOM","rasterize","ombudsman_chart","serialize"],
      value: (async function(html,DOM,rasterize,ombudsman_chart,serialize){return(
html`
${DOM.download(await rasterize(ombudsman_chart), null, "Download as PNG")}
${DOM.download(await serialize(ombudsman_chart), null, "Download as SVG")}
`
)})
    },
    {
      name: "viewof ombudsman",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>

digraph {
	rankdir = LR;
	node [shape = doublecircle]; "Ombudsman";
	node [shape = circle]; "Dispute Resolution" "DR Monitoring";
	Ombudsman -> "Dispute Resolution" [ label = "sub-phase" ];
	Ombudsman -> "DR Monitoring" [ label = "sub-phase" ];
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "ombudsman",
      inputs: ["Generators","viewof ombudsman"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Ombudsman / Dispute Resolution Sub-Phases`
)})
    },
    {
      name: "ombudsman_detail_chart",
      inputs: ["dot","ombudsman_detail"],
      value: (function(dot,ombudsman_detail){return(
dot`${ombudsman_detail}`
)})
    },
    {
      inputs: ["html","DOM","rasterize","ombudsman_detail_chart","serialize"],
      value: (async function(html,DOM,rasterize,ombudsman_detail_chart,serialize){return(
html`
${DOM.download(await rasterize(ombudsman_detail_chart), null, "Download as PNG")}
${DOM.download(await serialize(ombudsman_detail_chart), null, "Download as SVG")}
`
)})
    },
    {
      name: "viewof ombudsman_detail",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>

digraph {
	rankdir = G;
	node [shape = doublesquare]; Incoming;
	node [shape = circle]; "Dispute Resolution" "DR Monitoring";
	node [shape = doublesquare]; "full agreement" "partial agreement" "no agreement" "fully settled" "partially settled" "no settlement";
	node [shape = tab]; "Transfer to Compliance";
	node [shape = doublecircle]; Closure;
	Incoming -> "Dispute Resolution" [ label = "from assessment, DR, or VP trigger" ];
	"no agreement" -> "Transfer to Compliance";
	"partial agreement" -> "Dispute Resolution";
	"Dispute Resolution" -> "Transfer to Compliance" [ label = "partial transfer" ];
	"Dispute Resolution" -> "full agreement";
  "full agreement" -> "DR Monitoring" ;
	"Dispute Resolution" -> "partial agreement";
  "partial agreement" -> "DR Monitoring" ;
  "partial agreement" -> "Transfer to Compliance" ;
	"Dispute Resolution" -> "no agreement";
	"DR Monitoring" -> "fully settled";
  "DR Monitoring" -> "partially settled";
  "DR Monitoring" -> "no settlement";
	"fully settled" -> Closure ;
	"partially settled" -> "DR Monitoring";
	"partially settled" -> "Transfer to Compliance" [label = "partial transfer"];
	"partially settled"-> "Closure" [label = "partial closure" ];
  "no settlement" -> "Transfer to Compliance";
	"DR Monitoring" -> "Transfer to Compliance" [ label = "partial transfer" ];
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "ombudsman_detail",
      inputs: ["Generators","viewof ombudsman_detail"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`

Case movement from within the DR subphase:

1. **Partial Transfer** - A case can transfer some issues to Compliance while remaining open in Dispute Resolution
2. **Full Agreement** - Case moves to DR Monitoring
3. **Partial Agreement & Partial Tranasfer** - Case moves to DR Monitoring and Compliance
4. **No Agreement** - Case moves to Compliance

`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`

Case movement from within the DR Monitoring subphase:

1. **Partial Transfer** - Case stays open at DR Monitoring, with some issues transferred to Compliance
2. **Full Implementation** - Case closes.
3. **Partial Implementation  & Partial Tranasfer** - Case closes at DR Monitoring and transfers to Compliance
4. **No Implementation** - Case closes at DR Monitoring and transfers to Compliance

`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`*Note:* CAOs practice around case handling is flexible, as the process direction is shaped according to the parties' preference.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
The following chart examines 13 potential avenues for case status and case routing under CAO's DR process:
`
)})
    },
    {
      name: "dr_phase_pathways",
      inputs: ["dot","dr_phase_pathways_detail"],
      value: (function(dot,dr_phase_pathways_detail){return(
dot`${dr_phase_pathways_detail}`
)})
    },
    {
      name: "viewof dr_phase_pathways_detail",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>

digraph {
    rankdir = LR;
node [shape = doublecircle]; "Dispute Resolution" "DR Monitoring" "Compliance" "Closed";
node [shape = doublesquare];
"Dispute Resolution" -> "Fully Settled" -> "Closed" [ label = "1" ]
"Dispute Resolution" -> "Fully Settled" -> "DR Monitoring" -> "Not Implemented" -> "Compliance" [ label = "2" ]
"Dispute Resolution" -> "Fully Settled" -> "DR Monitoring" -> "Partially Implemented" -> "Compliance" [ label = "3" ]
"Dispute Resolution" -> "Fully Settled" -> "DR Monitoring" -> "Fully Implemented" -> "Closed" [ label = "4" ]
"Dispute Resolution" -> "Partially Settled" -> "Closed" [ label = "5" ]
"Dispute Resolution" -> "Partially Settled" -> "DR Monitoring" -> "Fully Implemented" -> "Closed" [ label = "6" ]
"Dispute Resolution" -> "Partially Settled" -> "DR Monitoring" -> "Partially Implemented" -> "Closed" [ label = "7" ]
"Dispute Resolution" -> "Partially Settled" -> "DR Monitoring" -> "Partially Implemented" -> "Compliance" [ label = "8" ]
"Dispute Resolution" -> "Partially Settled" -> "DR Monitoring" -> "Not Implemented" -> "Compliance" [ label = "9" ]
"Dispute Resolution" -> "Partially Settled" -> "DR Monitoring" -> "Not Implemented" -> "Closed" [ label = "11" ]
"Dispute Resolution" -> "Partially Settled" -> "Compliance" [ label = "10" ]
"Dispute Resolution" -> "Not Settled" -> "Compliance" [ label = "12" ]
"Dispute Resolution" -> "Not Settled" -> "Closed" [ label = "13" ]
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "dr_phase_pathways_detail",
      inputs: ["Generators","viewof dr_phase_pathways_detail"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Compliance Phase`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`The Compliance phase has two sub-phases: 

1. Appraisal
2. Investigation
3. Monitoring
`
)})
    },
    {
      name: "compliance_chart",
      inputs: ["dot","compliance"],
      value: (function(dot,compliance){return(
dot`${compliance}`
)})
    },
    {
      inputs: ["html","DOM","rasterize","compliance_chart","serialize"],
      value: (async function(html,DOM,rasterize,compliance_chart,serialize){return(
html`
${DOM.download(await rasterize(compliance_chart), null, "Download as PNG")}
${DOM.download(await serialize(compliance_chart), null, "Download as SVG")}
`
)})
    },
    {
      name: "viewof compliance",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>

digraph {
	rankdir = LR;
	node [shape = doublecircle]; Compliance;
	node [shape = circle]; Appraisal Investigation Monitoring;
	Compliance -> Appraisal [ label = "sub-phase" ];
	Compliance -> Investigation [ label = "sub-phase" ];
	Compliance -> Monitoring [ label = "sub-phase" ];
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "compliance",
      inputs: ["Generators","viewof compliance"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Compliance Sub-Phases`
)})
    },
    {
      name: "compliance_detail_chart",
      inputs: ["dot","compliance_detail"],
      value: (function(dot,compliance_detail){return(
dot`${compliance_detail}`
)})
    },
    {
      inputs: ["html","DOM","rasterize","compliance_detail_chart","serialize"],
      value: (async function(html,DOM,rasterize,compliance_detail_chart,serialize){return(
html`
${DOM.download(await rasterize(compliance_detail_chart), null, "Download as PNG")}
${DOM.download(await serialize(compliance_detail_chart), null, "Download as SVG")}
`
)})
    },
    {
      name: "viewof compliance_detail",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>

digraph {
	rankdir = G;
	node [shape = doublesquare]; incoming;
	node [shape = circle]; Appraisal Investigation Monitoring;
	node [shape = doublesquare]; satisfactory unsatisfactory;
	node [shape = doublecircle]; Closure;
	incoming -> Appraisal [ label = "from assessment, DR, or VP trigger" ];
	Appraisal -> Investigation;
	Appraisal -> Monitoring [ label = "appraisal may be merged into monitoring" ];
	Appraisal -> Closure;
  Investigation -> Monitoring;
	Investigation -> Closure ;
	Monitoring -> satisfactory;
	Monitoring -> unsatisfactory;
	unsatisfactory -> Monitoring [ label = "outstanding issues" ];
	satisfactory -> Closure ;
	unsatisfactory -> Closure;
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "compliance_detail",
      inputs: ["Generators","viewof compliance_detail"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Full Case Handling Process`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`While this reaches a point at which the process flow becomes a bit too complex / detailed to render beautifully as a chart, here are all the case handling pathways mapped to together:`
)})
    },
    {
      name: "phase_subphase_detail_chart",
      inputs: ["dot","phase_subphase_detail"],
      value: (function(dot,phase_subphase_detail){return(
dot`${phase_subphase_detail}`
)})
    },
    {
      inputs: ["html","DOM","rasterize","phase_subphase_detail_chart","serialize"],
      value: (async function(html,DOM,rasterize,phase_subphase_detail_chart,serialize){return(
html`
${DOM.download(await rasterize(phase_subphase_detail_chart), null, "Download as PNG")}
${DOM.download(await serialize(phase_subphase_detail_chart), null, "Download as SVG")}
`
)})
    },
    {
      name: "viewof phase_subphase_detail",
      inputs: ["html"],
      value: (function*(html)
{
  const textarea = html`<textarea>


digraph {
	rankdir = G;
	node [shape = doublecircle]; Intake Eligibility Assessment Ombudsman Compliance Closure;
	node [shape = circle]; "Dispute Resolution" "DR Monitoring" Appraisal Investigation Monitoring;
	node [shape = doublesquare]; agreement "partial agreement" "no agreement" "fully settled" "partially settled" "no settlement" satisfactory unsatisfactory;
	node [shape = tab]; Closure "Transfer to Compliance";
	Intake -> Eligibility [ label = " validity screening" ];
	Eligibility -> Assessment;
	Assessment -> Ombudsman;
	Assessment -> Compliance;
	Ombudsman -> "Dispute Resolution" ;
	"no agreement" -> "Transfer to Compliance";
	"Dispute Resolution" -> agreement ;
	"Dispute Resolution" -> "partial agreement" ;
  "partial agreement" -> "DR Monitoring" ;
  "partial agreement" -> "Dispute Resolution" ;
  agreement -> "DR Monitoring" ;
	"Dispute Resolution" -> "no agreement" ;
	"DR Monitoring" -> "fully settled" ;
  "DR Monitoring" -> "partially settled" ;
  "DR Monitoring" -> "no settlement" ;
	"fully settled" -> Closure ;
	"partially settled" -> "DR Monitoring" ;
	"partially settled" -> "Closure" ;
	"partially settled" -> "Transfer to Compliance" ;
	"no settlement" -> "Transfer to Compliance" ;
  "Transfer to Compliance" -> Compliance;
  Compliance -> Appraisal ;
  Appraisal -> Investigation ;
	Appraisal -> Monitoring [ label = "appraisal may be merged into monitoring" ];
	Appraisal -> Closure;
  Investigation -> Monitoring;
	Investigation -> Closure ;
	Monitoring -> satisfactory;
	Monitoring -> unsatisfactory;
	unsatisfactory -> Monitoring [ label = "outstanding issues" ];
	satisfactory -> Closure ;
	unsatisfactory -> Closure;
}`;
  textarea.style.display = "block";
  textarea.style.boxSizing = "border-box";
  textarea.style.width = "calc(100% + 28px)";
  textarea.style.font = "var(--mono_fonts)";
  textarea.style.minHeight = "60px";
  textarea.style.border = "none";
  textarea.style.padding = "4px 10px";
  textarea.style.margin = "0 -14px";
  textarea.style.background = "rgb(247,247,249)";
  textarea.style.tabSize = 2;
  textarea.oninput = () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  yield textarea;
  textarea.oninput();
  yield textarea;
}
)
    },
    {
      name: "phase_subphase_detail",
      inputs: ["Generators","viewof phase_subphase_detail"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`---

## Appendix`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`For more informaiton on this vizualization, see the [DOT language documentation](https://graphviz.gitlab.io/_pages/doc/info/lang.html) and the [Graphviz gallery](http://www.graphviz.org/gallery/).`
)})
    },
    {
      name: "dot",
      inputs: ["require"],
      value: (function(require){return(
require("@observablehq/graphviz@0.2")
)})
    },
    {
      from: "@mbostock/saving-svg",
      name: "rasterize",
      remote: "rasterize"
    },
    {
      from: "@mbostock/saving-svg",
      name: "serialize",
      remote: "serialize"
    }
  ]
};

const m1 = {
  id: "@mbostock/saving-svg",
  variables: [
    {
      name: "rasterize",
      inputs: ["DOM","serialize"],
      value: (function(DOM,serialize){return(
function rasterize(svg) {
  let resolve, reject;
  const promise = new Promise((y, n) => (resolve = y, reject = n));
  const image = new Image;
  image.onerror = reject;
  image.onload = () => {
    const rect = svg.getBoundingClientRect();
    const context = DOM.context2d(rect.width, rect.height);
    context.drawImage(image, 0, 0, rect.width, rect.height);
    context.canvas.toBlob(resolve);
  };
  image.src = URL.createObjectURL(serialize(svg));
  return promise;
}
)})
    },
    {
      name: "serialize",
      inputs: ["NodeFilter"],
      value: (function(NodeFilter)
{
  const xmlns = "http://www.w3.org/2000/xmlns/";
  const xlinkns = "http://www.w3.org/1999/xlink";
  const svgns = "http://www.w3.org/2000/svg";
  return function serialize(svg) {
    svg = svg.cloneNode(true);
    const fragment = window.location.href + "#";
    const walker = document.createTreeWalker(svg, NodeFilter.SHOW_ELEMENT, null, false);
    while (walker.nextNode()) {
      for (const attr of walker.currentNode.attributes) {
        if (attr.value.includes(fragment)) {
          attr.value = attr.value.replace(fragment, "#");
        }
      }
    }
    svg.setAttributeNS(xmlns, "xmlns", svgns);
    svg.setAttributeNS(xmlns, "xmlns:xlink", xlinkns);
    const serializer = new window.XMLSerializer;
    const string = serializer.serializeToString(svg);
    return new Blob([string], {type: "image/svg+xml"});
  };
}
)
    }
  ]
};

const notebook = {
  id: "b97e17a1e39fb994@702",
  modules: [m0,m1]
};

export default notebook;
