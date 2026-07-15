# cartography and map interfaces

A map is a designed argument about place. It selects a geographic extent, projection, scale, classification, visual hierarchy, and context. A clear interface makes those decisions visible enough for a reader to understand what the map can and cannot support.

## begin with the question

Before choosing a library or basemap, write the question the map should help answer. Identify the audience, relevant geographic and temporal scale, comparison, and expected action. This determines whether the useful result is an interactive explorer, a fixed thematic figure, a linked map and chart, a field editor, a locator, or a printable report.

Avoid the old pattern of one master project containing every possible layer. Shared canonical datasets and styles can feed several focused applications. Each application can have its own layer order, annotations, filters, and narrative while retaining links to the same reviewed records.

## choose the view

Observable Plot is well suited to thematic and analytical maps that participate in a larger explanation. Leaflet provides a simple conventional map for modest overlays and controls. MapLibre supports rich vector-tile styling, larger datasets, pitch, terrain, and continuous zoom. QGIS remains valuable for authoring, inspection, analysis, and print layouts.

The choice is not a hierarchy. A static SVG figure may communicate an argument more precisely than an interactive globe. Interaction should reveal useful comparisons or detail, not compensate for an unclear map.

## projection, scale, and generalization

Every flat map distorts. Select a projection appropriate to the extent and task, state it when the choice affects interpretation, and avoid comparing areas in a projection that severely distorts them. Web Mercator is convenient for tiled navigation but should not become the unquestioned projection for every analytical figure.

Data also has a scale of collection and intended use. Zooming in does not create accuracy. Generalize geometry and labels for the display scale, and explain when boundaries are approximate or disputed. If geometry changes by zoom, keep identifiers stable and make derived simplification reproducible.

## visual encoding

Match symbols to the data:

- use position for location and avoid implying false precision;
- distinguish totals from rates before creating a choropleth;
- use ordered color or size for ordered quantities and qualitative color for categories;
- state classification thresholds and keep comparisons consistent;
- show missing, suppressed, and not-applicable values distinctly;
- limit basemap detail so it supports rather than competes with the subject; and
- test palettes for common forms of color-vision deficiency and in grayscale when print matters.

A legend should explain the actual marks on the map, including units, classification, missingness, and time. Source, date, and attribution belong in the visible composition rather than a distant legal page.

## linked information

Selection should connect the same stable record across map, table, chart, document, and download. A popup can provide a concise summary, but it should not be the only way to reach attributes or source context. Filters should state what has been excluded and update totals, legends, and annotations consistently.

For data exploration, coordinated views can reveal distributions and relationships that a map alone obscures. Observable Plot and [Mosaic](https://observablehq.com/framework/lib/mosaic) can support linked analytical views; MapLibre or Leaflet can provide geographic navigation where appropriate.

## layers, styles, and map projects

Three kinds of state should remain distinct:

- **feature state** — geometry and attributes of the underlying records;
- **style state** — symbols, labels, filters, classifications, and zoom rules; and
- **project state** — layer order, visibility, extent, annotations, and application-specific configuration.

A spatial database can manage features, but it should not be assumed to own every visual decision. Version styles and project configuration alongside the application or data release. A canonical style may provide a shared default while a thematic project makes an explicit, documented variation.

## accessibility and alternatives

Interactive maps are difficult for keyboard, screen-reader, low-vision, motor-impaired, and small-screen users. Follow the renderer’s accessibility guidance, use semantic controls and visible focus, avoid hover-only information, and provide text instructions that do not rely solely on spatial direction.

Every important map should have an alternative appropriate to its claim: a data table, ranked list, narrative summary, downloadable file, or static image with meaningful alternative text. Complex exploratory maps need a concise explanation of what the reader should notice and how to operate the controls. Do not describe every decorative boundary in alternative text; communicate the purpose and finding.

## print, export, and citation

Printing is a separate composition problem, not a screenshot afterthought. A useful export includes a title, legend, scale where meaningful, projection or coordinate notes where needed, source, date, attribution, and release identifier. High-resolution or vector output may require a controlled server-side rendering process when browser export is insufficient.

When the exact view matters, provide a stable link or small view-state file containing dataset and style versions, extent, filters, and selected records. The underlying data release should remain independently citable.

See [static spatial applications](static-spatial-applications.md) for renderer roles and [spatial data sources and governance](spatial-data-sources-and-governance.md) for source and attribution requirements.
