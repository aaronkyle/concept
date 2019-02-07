// URL: https://beta.observablehq.com/@aaronkyle/cao-fy-18-by-institution-region-sector
// Title: CAO FY 18 by Institution, Region & Sector
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 154
// Runtime version: 1

const m0 = {
  id: "a3b91b3cf0214d4d@154",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# CAO FY 18 by Institution, Region & Sector`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This notebooks uses [C3.js](https://c3js.org/) to produce some simple visualizations of CAO's FY17 caseload.`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`<div id="cao-cases-by-institition"></div>`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`<div id="regions-chart"></div>`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`<div id="cao-cases-by-sector"></div>`
)})
    },
    {
      name: "institution_chart",
      inputs: ["c3","d3"],
      value: (function(c3,d3)
{     
//Alternative means of re-formatting donut title
// per example at http://plnkr.co/edit/6eOJnMh6DE4mZejmPzc2?p=preview

    c3.generate({
      bindto: '#cao-cases-by-institition',
      data: {
        columns: [
          ["IFC", 86],
          ["MIGA", 4],
          ["IFC/MIGA", 10],
                 ],
        type: 'donut'
      },
      donut: {
          title: "Cases by Instituion"
      }
    });

    var label = d3.select('text.c3-chart-arcs-title');

    //label.html(''); // remove existant text
    //label.insert('tspan').text('Cases by Instituion').attr('dy', -10).attr('x', 0);
    //label.insert('tspan').text('FY17').attr('dy', 20).attr('x', 0);

    // More info on <tspan>: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Note that the labels change when a new chart is added (a bug to fix).`
)})
    },
    {
      name: "region_chart",
      inputs: ["c3","d3"],
      value: (function(c3,d3)
{  
//Alternative means of re-formatting donut title
// per example at http://plnkr.co/edit/6eOJnMh6DE4mZejmPzc2?p=preview

    c3.generate({
      bindto: '#regions-chart',
      data: {
        columns: [
          ["Latin America and Caribbean", 25],
          ["Sub-Saharan Africa", 23],
          ["Europe and Central Asia", 16],
          ["South Asia", 12],
          ["East Asia and the Pacific", 14],
          ["Middle East and North Africa", 8],
          ["World", 2],        ],
        type: 'donut'
      },
      donut: {
          title: "Cases by Region"
      }
    });

    var label = d3.select('text.c3-chart-arcs-title');

    //label.html(''); // remove existant text
    //label.insert('tspan').text('Cases by Region').attr('dy', -10).attr('x', 0);
    //label.insert('tspan').text('FY17').attr('dy', 20).attr('x', 0);

    // More info on <tspan>: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
}
)
    },
    {
      name: "sector_chart",
      inputs: ["c3","d3"],
      value: (function(c3,d3)
{  
  //Alternative means of re-formatting donut title
// per example at http://plnkr.co/edit/6eOJnMh6DE4mZejmPzc2?p=preview

    c3.generate({
      bindto: '#cao-cases-by-sector',
      data: {
        columns: [
          ["Infrastructure", 29],
          ["Oil, Gas, Mining and Chemicals", 25],
          ["Manufactoring", 16],
          ["Agribusiness", 14],
          ["Financial Markets", 14],
          ["Advisory Services", 2],
                 ],
        type: 'donut'
      },
      donut: {
          title: "Cases by Sector"
      }
    });

    var label = d3.select('text.c3-chart-arcs-title');

    //label.html(''); // remove existant text
    //label.insert('tspan').text('Cases by Sector').attr('dy', -10).attr('x', 0);
    //label.insert('tspan').text('FY17').attr('dy', 20).attr('x', 0);

    // More info on <tspan>: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
----

# Appendix`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Thanks to the team at Observable for helping me to work through [bringing C3.js to Observable](https://beta.observablehq.com/@mbostock/c3)!`
)})
    },
    {
      name: "css",
      value: (function()
{
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.css";
    return document.getElementsByTagName("head")[0].appendChild(link);    
}
)
    },
    {
      name: "c3",
      inputs: ["require"],
      value: (function(require){return(
require("https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.js")
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js")
)})
    }
  ]
};

const notebook = {
  id: "a3b91b3cf0214d4d@154",
  modules: [m0]
};

export default notebook;
