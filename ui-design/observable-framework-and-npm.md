# Observable Framework and npm

Observable Framework gives our data applications a useful middle ground between
a static publication and a custom single-page application. Pages remain
versioned Markdown and JavaScript files, data can be prepared during the build,
and the resulting site can contain responsive, reactive browser interfaces
without requiring a live application server for every reader.

The important distinction is among Framework itself, its standard library, its
recommended npm libraries, and our own components. They solve different problems
and should not become one undifferentiated “Observable” dependency.

## the layers we normally use

| layer | useful capabilities | responsibility we retain |
| --- | --- | --- |
| Observable Framework | Markdown pages, routing, navigation, themes, grids, cards, reactive code, data loaders, builds, and previews | information architecture, content, accessible use of the layout, and publication boundaries |
| Framework runtime and standard library | `display`, reactive `view`, `FileAttachment`, `Generators`, `Mutable`, and `resize` | state meaning, lifecycle, error handling, and whether browser state should persist |
| recommended npm libraries | inputs, tables, charts, data transformation, browser databases, maps, diagrams, TeX, and DOM construction | selecting the smallest adequate library and testing its output in context |
| local modules and components | reusable categori.se records, controls, views, and workflows | stable interfaces, tests, documentation, and coordinated changes across applications |
| project CSS and assets | identity, typography, tokens, specialized layout, icons, and interaction states | accessibility, performance, licensing, and long-term maintenance |

[Framework’s import documentation](https://observablehq.com/framework/imports)
lists its implicit recommended libraries. They load only when referenced, so a
project’s `package.json` may list only `@observablehq/framework` even while pages
use `Inputs`, `Plot`, `d3`, `html`, or other npm packages. That convenience makes
it especially important to understand and record the resolved build dependencies.

## use the built-in page foundation first

Framework provides responsive `grid` and `card` classes, documentation and
dashboard layouts, light and dark themes, sidebars, tables of contents, headers,
footers, and page-level configuration. The `resize` helper can render a chart or
component against the actual width of its container.

These capabilities replace much of the older Bootstrap and Semantic UI layout
research. They are a starting point, not a complete categori.se design system.
Use semantic headings and landmarks, test the collapsed grid and sidebar, inspect
reading order, and add project CSS only where the information or interaction
requires it.

## standard-library building blocks

- `FileAttachment` loads versioned project files and build outputs using methods
  appropriate to CSV, JSON, Parquet, Arrow, SQLite, images, text, ZIP, XLSX, and
  other supported formats.
- `resize` observes a container and re-renders width-dependent content without a
  project-specific resize listener.
- `Generators` connects events and other changing browser values to Framework’s
  reactive model.
- `Mutable` provides explicitly mutable reactive state. Use it sparingly: a named
  state object or input often makes ownership and transitions easier to follow.
- `display` places a value or DOM node in the page, while `view` displays a
  compatible input and exposes its value reactively.

These tools help coordinate browser behavior, but the state still needs a defined
scope. A value held in a page is not automatically saved, shared, reviewed, or
authorized.

## recommended npm libraries

Framework makes a broad set of libraries conveniently available. A practical
default toolkit for our projects includes:

| need | usual starting point | use it for |
| --- | --- | --- |
| controls and tabular exploration | [`@observablehq/inputs`](https://observablehq.com/framework/inputs/) | selects, checkboxes, text, files, search, tables, buttons, and grouped forms |
| declarative charts | [`@observablehq/plot`](https://observablehq.com/plot/) | concise statistical graphics with scales, facets, marks, and interaction |
| lower-level data and graphics work | [`d3`](https://d3js.org/) | arrays, scales, shapes, geography, hierarchy, formatting, and custom interaction |
| safe DOM and SVG construction | [`htl`](https://observablehq.com/framework/lib/htl) | semantic elements and components with context-aware interpolation |
| browser-side querying | [`@observablehq/duckdb`](https://observablehq.com/framework/sql) and DuckDB-Wasm | querying bounded Parquet, CSV, JSON, or Arrow data without a public database server |
| coordinated data views | [Mosaic vgplot](https://observablehq.com/framework/lib/mosaic) | linking filters, tables, plots, and selections over DuckDB-backed data |
| tabular transformation | [`arquero`](https://observablehq.com/framework/lib/arquero) | filtering, grouping, deriving, and reshaping data in JavaScript |
| columnar interchange | [`apache-arrow`](https://observablehq.com/framework/lib/arrow) | efficient typed data shared among loaders, DuckDB, and browser tools |
| compact embedded databases | [`@observablehq/sqlite`](https://observablehq.com/framework/lib/sqlite) | querying a purpose-built SQLite publication in the browser |
| maps and geographic data | [`leaflet`](https://observablehq.com/framework/lib/leaflet), `mapbox-gl`, and `topojson-client` | interactive maps and compact boundary geometry when the project requires them |
| diagrams | [`@observablehq/mermaid`](https://observablehq.com/framework/lib/mermaid) and `@observablehq/dot` | maintained flow, relationship, and architecture diagrams |
| mathematical notation | [`@observablehq/tex`](https://observablehq.com/framework/lib/tex) | inline and display TeX rendered through the built-in page workflow |

This table is a set of starting points, not a requirement to load every library.
Observable Plot often avoids custom D3 rendering; Inputs and native HTML often
avoid a component framework; DuckDB or Arquero may replace a large bespoke
filtering layer. Mosaic directly addresses many of the linked-view and
crossfiltering experiments collected in the old UI scratch page. Choose one clear
owner for each transformation or interaction.

React and ReactDOM are also available when a genuinely stateful component or an
existing React library justifies them. Introducing React creates another component
and lifecycle model inside the page, so it should not be the default wrapper for
controls that Inputs or native HTML already express well.

## local components are the shared application language

Framework treats a function returning a DOM element as a component. Move repeated
logic from page code into local JavaScript or TypeScript modules. Shared
categori.se components might include:

- a source or file identity summary;
- a metadata assertion showing value, source, confidence, and review state;
- project and account navigation;
- workflow status and next actions;
- a publication or sensitivity indicator;
- consistent empty, loading, error, and conflict states; and
- downloads with clear format, version, size, and license information.

Share a component because it expresses a stable project concept or interaction,
not merely to remove a few repeated lines. Its public options, returned DOM,
events, loading behavior, and error states form a contract that several pages or
applications may come to depend upon.

## dependency and delivery practice

Framework can resolve an `npm:` import during preview or build, cache it, and copy
the referenced package into the static output. This avoids a runtime dependency
on a third-party CDN for that module. It does not remove supply-chain risk or make
an unspecified latest version reproducible.

For every added package:

1. state which requirement it satisfies and why existing tools are insufficient;
2. inspect its license, maintenance, transitive dependencies, output size, and
   browser support;
3. pin or constrain the version through a reviewed package lock or explicit
   import policy;
4. import only the capability needed and lazily load unusually heavy optional
   features where useful;
5. test keyboard behavior, accessible output, reduced motion, reflow, errors, and
   build behavior;
6. confirm that supporting files, workers, WebAssembly, fonts, and styles are
   included in the built artifact; and
7. retain a simpler export or reading path when the library supplies an enhanced
   view of essential information.

Remote URL imports remain runtime third-party requests and deserve additional
privacy, reliability, and security review. Prefer Framework-resolved npm imports
or reviewed local modules when practical.

## observed direction in our work

The local `socdev-explorations` project demonstrates repeated use of `Inputs`,
`view`, `Inputs.file`, `FileAttachment`, conditional displays, Plot, D3, HTL, and
a reusable download component. This is evidence that the older interface notes
were identifying real requirements. The next step is to turn repeated domain
patterns into smaller components and documented state transitions rather than
continuing to assemble each long form directly in a page.

[Archive](https://archive.categori.se/), [Docs Repo](https://docs-repo.categori.se/),
[Team Spaces](https://team-spaces.categori.se/), [Workspace Management](https://workspace.categori.se/),
and [OpenGeo.Tools](https://opengeo.tools/) give us different contexts in which to
test that shared language.
