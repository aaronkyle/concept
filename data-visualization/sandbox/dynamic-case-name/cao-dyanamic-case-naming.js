// URL: https://beta.observablehq.com/@aaronkyle/cao-dyanamic-case-naming
// Title: CAO Dyanamic Case Naming
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 97
// Runtime version: 1

const m0 = {
  id: "56418dcdf8807ad1@97",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# CAO Dyanamic Case Naming`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This notebook is intended to model a programmatic interface for dynamically generating case names, according to CAO's established naming conventions.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This notebook borrows a lot from Jeremy Ashkenas's ['Inputs'](https://beta.observablehq.com/@jashkenas/inputs) notebook. <br/>Thanks [Jeremy](https://beta.observablehq.com/@jashkenas)!`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Rendered Name`
)})
    },
    {
      name: "case_short_name",
      inputs: ["md","project_client_cao","case_count"],
      value: (function(md,project_client_cao,case_count){return(
md`${project_client_cao}-${case_count}`
)})
    },
    {
      name: "case_short_name_ext",
      inputs: ["md","project_client_cao","case_count","project_location_cao"],
      value: (function(md,project_client_cao,case_count,project_location_cao){return(
md`${project_client_cao}-${case_count}/${project_location_cao}`
)})
    },
    {
      name: "case_name",
      inputs: ["md","project_country_cao","project_client_cao","case_count","project_location_cao"],
      value: (function(md,project_country_cao,project_client_cao,case_count,project_location_cao){return(
md`${project_country_cao}: ${project_client_cao}-${case_count}/${project_location_cao}`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## User Inputs`
)})
    },
    {
      name: "viewof project_country_cao",
      inputs: ["text"],
      value: (function(text){return(
text({title: "CAO Complaint / Project Country", placeholder: "Enter country of complaint.", value: "Indonesia", description: "Note: Default country value is inhereited from IFC/MIGA project country."})
)})
    },
    {
      name: "project_country_cao",
      inputs: ["Generators","viewof project_country_cao"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof project_location_cao",
      inputs: ["text"],
      value: (function(text){return(
text({title: "CAO Complaint Locality", placeholder: "Enter complaint locality.", value: "Weda Bay", description: "Note: This is the region / area from which the complaint orginates."})
)})
    },
    {
      name: "project_location_cao",
      inputs: ["Generators","viewof project_location_cao"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof project_client_cao",
      inputs: ["text"],
      value: (function(text){return(
text({title: "CAO Project Client", placeholder: "Enter client / project name", value: "PT Weda Bay Nickel", description: "Note: This is the name of the client being financed/guaranteed by IFC/MIGA."})
)})
    },
    {
      name: "project_client_cao",
      inputs: ["Generators","viewof project_client_cao"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof case_count",
      inputs: ["text"],
      value: (function(text){return(
text({title: "CAO Case Count", placeholder: "Enter the CAO case number.", value: "01", description: "Note: This number reflects how many complaints CAO has received regarding this project."})
)})
    },
    {
      name: "case_count",
      inputs: ["Generators","viewof case_count"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## JavaScript`
)})
    },
    {
      name: "text",
      inputs: ["input"],
      value: (function(input){return(
function text(config = {}) {
  const {value, title, description, autocomplete, maxlength, minlength, pattern, placeholder, size, submit} = config;
  if (typeof config == "string") value = config;
  const form = input({
    type: "text", title, description, submit,
    attributes: {value, autocomplete, maxlength, minlength, pattern, placeholder, size}
  });
  form.output.remove();
  form.input.style.fontSize = "1em";
  return form;
}
)})
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {form, type = "text", attributes = {}, action, getValue, title, description, format, display, submit, options} = config;
  if (!form) form = html`<form>
	<input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit) form.append(html`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof submit == 'string' ? submit : 'Submit'}" />`);
  form.append(html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`);
  if (title) form.prepend(html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`);
  if (description) form.append(html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`);
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit ? "onsubmit" : type == "button" ? "onclick" : type == "checkbox" || type == "radio" ? "onchange" : "oninput";
    form[verb] = (e) => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output) form.output.value = display ? display(value) : format ? format(value) : value;
      form.value = value;
      if (verb !== "oninput") form.dispatchEvent(new CustomEvent("input"));
    };
    if (verb !== "oninput") input.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = (e) => e && e.preventDefault();
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
  id: "56418dcdf8807ad1@97",
  modules: [m0]
};

export default notebook;
