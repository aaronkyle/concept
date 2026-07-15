# publishing with JavaScript

Ahh, JavaScript: language of the web. It once felt elusive; interactive notebooks and data-driven documents made its usefulness much easier to see.

JavaScript can turn a static explanation into an explorable publication. It can load a dataset, filter a table, render a map, connect a chart to an input, or reveal supporting detail without a round trip to an application server. That power should extend a clear document rather than conceal the document inside an opaque program.

## start with the publication

Begin with semantic HTML that establishes the title, sections, sources, summary, and any essential values. Add CSS for presentation. Add JavaScript where interaction helps a reader ask a question or understand a relationship.

This [progressive-enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) approach gives the publication a useful baseline when scripts fail, a dependency is blocked, a browser is constrained, or assistive technology encounters the page. “Works without JavaScript” does not mean every interactive capability must have a static equivalent. It means the page should still identify itself, explain its purpose, and provide access to essential conclusions or source data.

## browser-first and static-state applications

Many of the `/framework/` projects favor a static-state publication model:

1. private or computationally expensive work happens before release;
2. a build selects and transforms the approved public data;
3. HTML, JavaScript modules, styles, and data snapshots are deployed as files;
4. the browser performs presentation and bounded interaction; and
5. server-side functions are added only for operations that truly require a trusted runtime.

Static hosting can reduce the number of servers, sessions, databases, and administrative endpoints exposed to visitors. It does not make a site automatically private or secure. Every delivered file is public to its audience, and client-side code cannot safely hold credentials or enforce authorization over data it has already downloaded.

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) can publish HTML, CSS, and JavaScript from a repository. [Observable Framework](https://observablehq.com/framework/) builds static data applications from Markdown, JavaScript, and data loaders, preserving the useful connection between an explanation and the code that supports it. Archive, Docs Repo, Team Spaces, and [OpenGeo Tools](https://opengeo.tools/) let us test variations of these patterns.

## load public data deliberately

Browser APIs can request JSON, CSV, text, and other published resources:

```js
const response = await fetch("./data/places.json");

if (!response.ok) {
  throw new Error(`Could not load places: ${response.status}`);
}

const places = await response.json();
```

Receiving a successful response does not validate the data. Check the fields and types the page depends on, handle missing values, and display a useful failure state. CSV parsers return text unless a library or row function performs type conversion; dates, numbers, booleans, and identifiers need explicit interpretation.

For larger or sensitive sources, publish a purpose-built snapshot rather than sending an entire operational dataset and hiding fields in the interface. Consider file size, parsing cost, mobile devices, caching, and whether the same data needs a stable download with schema and provenance.

## make interaction understandable

An interaction should have a visible purpose and state. Use native elements such as buttons, links, inputs, and disclosure widgets before recreating their behavior with generic containers. Preserve keyboard access, focus order, labels, status messages, reduced-motion preferences, and a sensible reading order. The [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) connects these needs to testable criteria.

Carousels, modals, infinite scrolling, and animated transitions are not neutral decorations. They can hide content, move focus, consume bandwidth, and make citation difficult. Adopt them only when their benefit survives an accessibility, performance, and editorial review.

For a visualization, include the question, units, source, relevant caveats, and a textual account of the important pattern. Where practical, offer the underlying data or an accessible table. The [data-visualization section](../data-visualization/) addresses visual encodings in more detail.

## dependencies and browser security

Modern browsers support modules, promises, `fetch`, and many DOM APIs directly. A library remains valuable when it provides a well-tested abstraction—D3 for selections, scales, shapes, and data utilities, for example—but every dependency adds code, update work, and supply-chain exposure.

For each client dependency:

- identify the capability it provides;
- pin or lock the reviewed version through the build process;
- remove unused packages and code;
- prefer maintained packages with intelligible provenance;
- test the built site, not only the development server; and
- plan how the publication behaves if the dependency is unavailable.

Avoid runtime scripts from third parties when a local, reviewed build is adequate. If a third-party CDN is justified, understand its logging and availability consequences and use supported integrity controls. A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) can constrain where scripts and other resources load from, but it must be designed and tested as part of the application.

Never put AWS credentials, API secrets, private keys, administrative tokens, or unrestricted signed URLs in browser code. Environment variables substituted into a public bundle are public. Use a narrowly scoped server-side function when an operation requires a secret, and authorize the operation at that trusted boundary. The [security](../data-security/) and [privacy](../data-privacy/) discussions develop this architecture.

## preserve and test the result

An interactive publication depends on more than its source module. Preserve the public data snapshot, schema, assets, dependency lockfile, build configuration, and source commit. Test:

- the baseline document before enhancement;
- successful, empty, slow, and failed data loads;
- keyboard and screen-reader behavior;
- small screens, zoom, reflow, and reduced motion;
- links and deep-linkable state where readers may cite a view;
- privacy boundaries in HTML, bundles, source maps, and data files; and
- the production build under its actual path and security policy.

JavaScript is most convincing when it helps a reader investigate the published evidence while leaving the source, assumptions, and public boundary clear.

## references

- [MDN: what is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)
- [MDN: using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [D3 API reference](https://d3js.org/api)
- [Observable Framework documentation](https://observablehq.com/framework/)
