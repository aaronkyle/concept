# static spatial applications

A static spatial application moves expensive or privileged work out of the anonymous page request. Data is acquired, checked, transformed, and approved during a controlled process; the deployed site consists of files that a browser can read from object storage or a content-delivery network. The result can still be highly interactive.

This model fits our [Observable Framework and npm](../ui-design/observable-framework-and-npm.md) approach and the [AWS static hosting](../platform-hosting/static-sites-with-observable-and-aws.md) discussion.

## the build boundary

```text
private or authoritative sources
  -> loaders and reproducible spatial processing
      -> validation and disclosure review
          -> approved data, tiles, styles, and documentation
              -> Observable Framework build
                  -> S3 and a content-delivery layer
                      -> browser maps, plots, tables, and downloads
```

Loaders can use GDAL, QGIS processing, Python, R, SQL, or DuckDB to create exactly the artifacts needed by the page. Credentials remain in the build environment rather than the browser. The build should fail when required sources, schemas, coordinate systems, validation checks, or attributions are missing.

Static outputs can be cached, mirrored, checksum-verified, and served without giving each visitor a path to a production database. They also make a release concrete: a particular application build can point to particular data and style versions.

## browser rendering roles

The renderer should follow the map’s purpose:

- Use **Observable Plot** for thematic maps, small multiples, projected figures, and coordinated analytical views. Plot makes geography part of the same grammar as dots, lines, bars, and text.
- Use **Leaflet** for straightforward pan-and-zoom maps, modest GeoJSON, image overlays, markers, popups, and conventional map controls.
- Use **MapLibre GL JS** for vector-tile basemaps, larger tiled layers, continuous zoom, data-driven styling, terrain, and GPU-accelerated interaction.
- Use **D3** when the spatial view requires a custom projection or interaction that higher-level tools do not express clearly.

One application can use more than one renderer, but the interfaces should remain coordinated and purposeful. A Plot overview and MapLibre detail view may share filters and selected identifiers without forcing all visualizations into a single canvas.

## delivery formats

Small reviewed datasets may be emitted as GeoJSON or CSV. GeoParquet can support client-side analytical queries with DuckDB-WASM. A COG can serve raster windows, and PMTiles can serve raster or vector tile pyramids through HTTP range requests. These patterns work well with object storage, provided content types, range responses, cache behavior, cross-origin rules, and attribution are configured correctly.

Do not send data merely because the browser can process it. Minimize fields and geographic precision, pre-aggregate where individual records are unnecessary, and inspect the built files for disclosure. Client-side filters are not access controls.

## state without an application server

Many useful interactions are local state: choosing layers, filtering records, measuring, drawing a draft feature, changing a classification, or loading a file from the user’s device. The browser can perform these operations without uploading the data. A shareable URL can encode a small, non-sensitive view configuration; larger work can be exported as a documented project or change file.

Durable shared edits are different. They require identity, authorization, validation, concurrency handling, an audit trail, and a canonical destination. Add the smallest authenticated service that satisfies those requirements. On AWS this might be an API endpoint backed by Lambda and a narrow IAM execution role, writing proposed changes to a restricted prefix or queue. It should not expose bucket credentials or grant anonymous writes to canonical data.

See [spatial editing and collaboration](spatial-editing-and-collaboration.md) for that workflow and [privacy by architecture](../data-privacy/privacy-by-architecture.md) for the security reasoning.

## basemaps and external services

A static application can still depend on remote basemaps, geocoders, fonts, sprites, or APIs. Those dependencies create availability, privacy, licensing, and cost obligations. Record them in the application manifest and ask:

- Does opening the page send a visitor’s IP address or map view to a third party?
- Are API keys restricted by origin, operation, and quota?
- May the tiles or results be cached or archived?
- Is attribution visible at every relevant scale?
- Can the application still communicate its main result if the service fails?

Where feasible, publish an approved open basemap or focused contextual layer with the application. OpenStreetMap data is available under the [Open Data Commons Open Database License](https://www.openstreetmap.org/copyright/en), but that does not make the public OpenStreetMap tile servers a free production hosting service. Data licensing and service usage policies are separate questions.

## deployment and release checks

Before publishing:

1. pin and audit dependencies;
2. verify source licenses and rendered attribution;
3. run schema, geometry, and output-size checks;
4. scan built artifacts for secrets and excluded attributes;
5. test keyboard use, color contrast, responsive layout, tables, and non-map summaries;
6. test range requests and cross-origin behavior for COG or PMTiles;
7. record the source, data, style, code, and build versions; and
8. deploy immutably before changing the public pointer.

The same artifact can be previewed locally with Observable Framework, reviewed in a team space, and then published to S3. [opengeo.tools](https://opengeo.tools/) can become the focused demonstration of this spatial pattern, while [archive.categori.se](https://archive.categori.se/) and [docs-repo.categori.se](https://docs-repo.categori.se/) retain the source and explanatory record.
