// URL: https://observablehq.com/@mbostock/saving-svg
// Title: Saving SVG
// Author: Mike Bostock (@mbostock)
// Version: 108
// Runtime version: 1

const m0 = {
  id: "576f8943dbfbd395@108",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Saving SVG

Say we have a dynamically-generated SVG, like this contour plot. Here’s how might you save it to a file in Observable using DOM.download.`
)})
    },
    {
      from: "@d3/contours",
      name: "chart",
      remote: "chart"
    },
    {
      inputs: ["chart"],
      value: (function(chart){return(
chart
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`You can serialize the SVG element as a string, and then download it as an SVG file.`
)})
    },
    {
      inputs: ["DOM","serialize","chart"],
      value: (function(DOM,serialize,chart){return(
DOM.download(() => serialize(chart), undefined, "Save as SVG")
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
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Alternatively, you can render the SVG to a canvas to generate a PNG.`
)})
    },
    {
      inputs: ["DOM","rasterize","chart"],
      value: (function(DOM,rasterize,chart){return(
DOM.download(() => rasterize(chart), undefined, "Save as PNG")
)})
    },
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
      inputs: ["md"],
      value: (function(md){return(
md`To use this in your own notebook, import from this notebook:

\`\`\`js
import {rasterize} from "@mbostock/saving-svg"
\`\`\`

Happy downloading!`
)})
    }
  ]
};

const m1 = {
  id: "@d3/contours",
  variables: [
    {
      name: "chart",
      inputs: ["d3","DOM","width","height","contours","color","xAxis","yAxis"],
      value: (function(d3,DOM,width,height,contours,color,xAxis,yAxis)
{
  const svg = d3.select(DOM.svg(width + 28, height))
      .style("display", "block")
      .style("margin", "0 -14px")
      .style("width", "calc(100% + 28px)");

  svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-opacity", 0.5)
    .selectAll("path")
    .data(contours)
    .join("path")
      .attr("fill", d => color(d.value))
      .attr("d", d3.geoPath());

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  return svg.node();
}
)
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    },
    {
      name: "height",
      value: (function(){return(
600
)})
    },
    {
      name: "contours",
      inputs: ["d3","grid","thresholds","transform"],
      value: (function(d3,grid,thresholds,transform){return(
d3.contours()
    .size([grid.n, grid.m])
    .thresholds(thresholds)
  (grid)
    .map(transform)
)})
    },
    {
      name: "color",
      inputs: ["d3","thresholds"],
      value: (function(d3,thresholds){return(
d3.scaleLog()
    .domain(d3.extent(thresholds))
    .interpolate(d => d3.interpolateMagma)
)})
    },
    {
      name: "xAxis",
      inputs: ["height","d3","x","width"],
      value: (function(height,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisTop(x).ticks(width / height * 10))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick").filter(d => x.domain().includes(d)).remove())
)})
    },
    {
      name: "yAxis",
      inputs: ["d3","y"],
      value: (function(d3,y){return(
g => g
    .attr("transform", "translate(-1,0)")
    .call(d3.axisRight(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick").filter(d => y.domain().includes(d)).remove())
)})
    },
    {
      name: "grid",
      inputs: ["width","height","value","x","y"],
      value: (function(width,height,value,x,y)
{
  const q = 4; // The level of detail, e.g., sample every 4 pixels in x and y.
  const x0 = -q / 2, x1 = width + 28 + q;
  const y0 = -q / 2, y1 = height + q;
  const n = Math.ceil((x1 - x0) / q);
  const m = Math.ceil((y1 - y0) / q);
  const grid = new Array(n * m);
  for (let j = 0; j < m; ++j) {
    for (let i = 0; i < n; ++i) {
      grid[j * n + i] = value(x.invert(i * q + x0), y.invert(j * q + y0));
    }
  }
  grid.x = -q;
  grid.y = -q;
  grid.k = q;
  grid.n = n;
  grid.m = m;
  return grid;
}
)
    },
    {
      name: "thresholds",
      inputs: ["d3"],
      value: (function(d3){return(
d3.range(1, 20).map(i => Math.pow(2, i))
)})
    },
    {
      name: "transform",
      inputs: ["grid"],
      value: (function(grid){return(
({type, value, coordinates}) => {
  return {type, value, coordinates: coordinates.map(rings => {
    return rings.map(points => {
      return points.map(([x, y]) => ([
        grid.x + grid.k * x,
        grid.y + grid.k * y
      ]));
    });
  })};
}
)})
    },
    {
      name: "x",
      inputs: ["d3","width"],
      value: (function(d3,width){return(
d3.scaleLinear([-2, 2], [0, width + 28])
)})
    },
    {
      name: "y",
      inputs: ["d3","height"],
      value: (function(d3,height){return(
d3.scaleLinear([-2, 1], [height, 0])
)})
    },
    {
      name: "value",
      value: (function(){return(
(x, y) =>
  (1 + (x + y + 1) ** 2 * (19 - 14 * x + 3 * x ** 2 - 14 * y + 6 * x * y + 3 * y ** 2))
  * (30 + (2 * x - 3 * y) ** 2 * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y ** 2))
)})
    }
  ]
};

const notebook = {
  id: "576f8943dbfbd395@108",
  modules: [m0,m1]
};

export default notebook;
