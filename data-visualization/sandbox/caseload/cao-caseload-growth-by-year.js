// URL: https://beta.observablehq.com/@aaronkyle/cao-caseload-growth-by-year
// Title: CAO Caseload Growth by Year
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 344
// Runtime version: 1

const m0 = {
  id: "8344b336e6d367c2@344",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# CAO Caseload Growth by Year

Data: [Compliance Advisor Ombudsman](http://www.cao-ombudsman.org/).`
)})
    },
    {
      name: "viewof year",
      inputs: ["slider"],
      value: (function(slider){return(
slider({ min: 2000, max: 2018, value: 2001, step: 1 })
)})
    },
    {
      name: "year",
      inputs: ["Generators","viewof year"],
      value: (G, _) => G.input(_)
    },
    {
      name: "chart",
      inputs: ["d3","projection","color","width","DOM","height","location","year","topojson","world","total_case","format"],
      value: (function(d3,projection,color,width,DOM,height,location,year,topojson,world,total_case,format)
{
  const path = d3.geoPath();
  const ticks = [0, 5, 10, 15, 20];

  path.projection(projection);

  const x = d3
    .scaleLinear()
    .domain(d3.extent(color.domain()))
    .rangeRound([width / 2 - 70, width / 2 + 70]);

  const svg = d3
    .select(DOM.svg(width, height))
    .style("width", "100%")
    .style("height", "auto");

  const defs = svg.append("defs");

  const g = svg.append("g").attr("transform", `translate(0,${height - 30})`);

  const linearGradient = defs
    .append("linearGradient")
    .attr("id", "linear-gradient");

  linearGradient
    .selectAll("stop")
    .data(
      ticks.map((t, i, n) => ({
        offset: `${(160 * i) / n.length}%`,
        color: color(t)
      }))
    )
    .enter()
    .append("stop")
    .attr("offset", d => d.offset)
    .attr("stop-color", d => d.color);

  g.append("rect")
    .attr("height", 8)
    .attr("x", x(0))
    .attr("width", x(20) - x(0))
    .style("fill", `url(${location}#linear-gradient)`);

  g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text(`Total CAO Cases as of ${year}.`);

  g.call(
    d3
      .axisBottom(x)
      .tickSize(13)
      .tickValues(ticks)
  )
    .select(".domain")
    .remove();

  svg
    .append("g")
    .selectAll("path")
    .data(topojson.feature(world, world.objects.countries).features)
    .enter()
    .append("path")
    .attr("fill", d =>
      total_case.has(d.id) && total_case.get(d.id)[year]
        ? color(+total_case.get(d.id)[year])
        : "#eee"
    )
    .attr("d", path)
    .append("title")
    .text(d =>
      total_case.has(d.id) && total_case.get(d.id)[year]
        ? format(total_case.get(d.id))
        : "Unknown"
    );

  svg
    .append("path")
    .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path);

  svg
    .append("path")
    .datum({ type: "Sphere" })
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("stroke-linejoin", "round")
    .attr("d", path);

  return svg.node();
}
)
    },
    {
      name: "height",
      inputs: ["width"],
      value: (function(width){return(
width / 2 + 50
)})
    },
    {
      name: "projection",
      inputs: ["d3","width","height"],
      value: (function(d3,width,height){return(
d3
  .geoEqualEarth()
  .rotate([-10, 0])
  .fitExtent([[1, 1], [width - 1, height - 50]], { type: "Sphere" })
  .precision(0.1)
)})
    },
    {
      name: "total_case",
      inputs: ["d3"],
      value: (async function(d3)
{
  let [data, codes] = await Promise.all([
    d3.csv(
      "https://gist.githubusercontent.com/aaronkyle/ff95c97adc95524575f823cab234eeea/raw/3ee0faefab2597ae971190f90a84941220f41ccb/cao-aggregate.csv"
    ),
    d3.csv(
      "https://gist.githubusercontent.com/aaronkyle/ff95c97adc95524575f823cab234eeea/raw/7ccd0d24ef50b3152ce848e7c3f9ce21a0d75af6/country-codes.csv"
    )
  ]);
  const lookup = new Map(codes.map(d => [d["alpha-3"], d["country-code"]]));
  return new Map(
    data
      .filter(d => lookup.has(d["Country Code"]))
      .map(d => [lookup.get(d["Country Code"]), d])
  );
}
)
    },
    {
      name: "color",
      inputs: ["d3"],
      value: (function(d3){return(
d3.scaleSequential(d3.interpolateSpectral).domain([20, 1])
)})
    },
    {
      name: "format",
      inputs: ["year"],
      value: (function(year){return(
function format(d) {
  return `${d["Country Name"]}: ${Math.round(+d[year])}`;
}
)})
    },
    {
      name: "world",
      value: (function(){return(
fetch("https://unpkg.com/world-atlas@1/world/110m.json").then(
  response => response.json()
)
)})
    },
    {
      name: "topojson",
      inputs: ["require"],
      value: (function(require){return(
require("topojson-client@3")
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    },
    {
      from: "@jashkenas/inputs",
      name: "slider",
      remote: "slider"
    }
  ]
};

const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "slider",
      inputs: ["input"],
      value: (function(input){return(
function slider(config = {}) {
  let {value, min = 0, max = 1, step = "any", precision = 2, title, description, getValue, format, display, submit} = config;
  if (typeof config == "number") value = config;
  if (value == null) value = (max + min) / 2;
  precision = Math.pow(10, precision);
  if (!getValue) getValue = input => Math.round(input.valueAsNumber * precision) / precision;
  return input({
    type: "range", title, description, submit, format, display,
    attributes: {min, max, step, value},
    getValue
  });
}
)})
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  if (!form)
    form = html`<form>
	<input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
  );
  if (title)
    form.prepend(
      html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`
    );
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
        ? "onclick"
        : type == "checkbox" || type == "radio"
          ? "onchange"
          : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output)
        form.output.value = display
          ? display(value)
          : format
            ? format(value)
            : value;
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      input.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  return form;
}
)})
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format")
)})
    }
  ]
};

const notebook = {
  id: "8344b336e6d367c2@344",
  modules: [m0,m1]
};

export default notebook;
