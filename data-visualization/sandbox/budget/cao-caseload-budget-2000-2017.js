// URL: https://beta.observablehq.com/@aaronkyle/cao-caseload-budget-2000-2017
// Title: CAO Caseload & Budget, 2000 - 2017 <br/> as C3.js Dual-Axis Bar and Line Chart
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 75
// Runtime version: 1

const m0 = {
  id: "fe5685ca13881043@75",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# CAO Caseload & Budget, 2000 - 2017 <br/> as C3.js Dual-Axis Bar and Line Chart`
)})
    },
    {
      name: "cao_budget",
      inputs: ["c3"],
      value: (function(c3){return(
c3({
  data: {
    x: 'x',
    columns: [
      ['x', 'FY00', 'FY01', 'FY02', 'FY03', 'FY04', 'FY05', 'FY06', 'FY07', 'FY08', 'FY09', 'FY10', 'FY11', 'FY12', 'FY13', 'FY14', 'FY15', 'FY16', 'FY17'],
      //['open cases', 0, 7, 10, 12, 14, 19, 12, 17, 19, 18, 23, 24, 33, 42, 54, 63, 52, 51],//
      ['new eligible cases', 0, 7, 3, 10, 9, 17, 6, 10, 7, 11, 16, 12, 19, 26, 38, 46, 43, 41],
      ['carry-over cases', 0, 0, 7, 2, 5, 2, 6, 7, 12, 7, 7, 12, 14, 16, 16, 17, 9, 10],
      ['complex cases', 0, 6, 7, 7, 8, 11, 6, 3, 6, 8, 11, 15, 24, 33, 38, 46, 43, 45],
      ['total budget (constant USD)', 0, 1359300, 1700900, 2248200, 2417400, 2966850, 2966850, 2658700, 3009100, 3930000, 4212200, 4320000, 4883000, 5026800, 5671300, 5059600, 5896200, 6289700],
      ['expensed contingency budget', null, null, null, null, 317500, 451500, 428700, 0, 287700, 613100, 768000, 743600, 706800, 753800, 80000, 732580, 877500, 911800] //VALUES ARE GENERALIZED AND ARE NOT 'OFFICAL' STATISTICS FROM CAO.
      //In building this visualization I generalized the values based on analysis of the chart.  I provide this for illustrative purposes.
    ],
    axes: {
      'total budget (constant USD)': 'y2',
      'expensed contingency budget': 'y2'
    },
    groups: [
        ['carry-over cases', 'new eligible cases']
    ],
    types: {
      //'open cases': 'bar',//
      'carry-over cases': 'bar',
      'new eligible cases': 'bar', // ADD
    }
  },
  legend: {
     position: 'inset'
          },
  axis: {
    x: {
    type: 'category',
        tick: {
                rotate: -45,
                multiline: false
              },
        height: 40
      },
    y: {
      label: {
        text: 'open cases',
        position: 'outer-middle'
      }
    },
    y2: {
      show: true,
      max: 12000000,
      min: 0,
      padding: {top:0, bottom:0},
      label: {
        text: 'total budget',
        position: 'outer-middle'
      }
    }
  },
})
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This chart is an interactive re-creation of the [CAO](http://www.cao-ombudsman.org/)'s 'Caseload and Budget' dual-axis bar chart from a [2017 Annual Report](http://cao-ar17.org/), created using [C3.js](https://c3js.org/).`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`VALUES ARE GENERALIZED AND ARE NOT OFFICAL STATISTICS FROM CAO. In building this visualization I generalized the values based on analysis of [CAO's chart](http://cao-ar17.org/).  I provide this conversion to illustrate interactivity. C3.js provides some nice defaults.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Special thanks to [Mike Bostock](https://beta.observablehq.com/@mbostock) for [responding to my questions on getting this chart to load correctly](https://talk.observablehq.com/t/why-will-a-graph-render-after-running-function-but-not-on-load/1033/2), as well as for [creating an elegant port to Observable](https://beta.observablehq.com/@mbostock/c3).`
)})
    },
    {
      name: "c3",
      inputs: ["require","html"],
      value: (async function(require,html)
{
  window.d3 = await require("d3@5");
  const c3 = await require("c3@0.6.10/c3.min.js");
  const link = html`<link rel=stylesheet href=${await require.resolve("c3@0.6/c3.min.css")}>`;
  if (c3._link) c3._link.remove();
  document.body.append(c3._link = link);
  return function(spec) {
    const div = html`<div>`;
    document.body.appendChild(div);
    c3.generate(Object.assign({bindto: div}, spec));
    document.body.removeChild(div);
    return div;
  };
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`

**alternatively:** \`import {c3} from "@mbostock/c3"\`
`
)})
    }
  ]
};

const notebook = {
  id: "fe5685ca13881043@75",
  modules: [m0]
};

export default notebook;
