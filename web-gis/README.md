# web GIS

Web GIS should make spatial information easier to collect, preserve, understand, question, and share. A map is one useful interface to that information, but it is not the system itself. The system also includes the source files, identifiers, attributes, coordinate reference systems, documentation, transformations, styles, permissions, and decisions that make a spatial claim intelligible.

Our aim is to build a static web application from open-source technology for collecting, archiving, managing, sharing, creating, editing, and visualizing spatial data. It should be possible to understand where the data came from, work with it using more than one application, reproduce the published result, and recover the underlying records when a particular interface is no longer available.

This extends the broader application concept described in the [repository README](../README.md). Spatial data brings additional concerns—geometry, scale, projection, topology, tiling, and location privacy—but it should follow the same file-first, versioned, and documented lifecycle as other research material.

## what we are trying to make possible

The application should help a person or team to:

- collect files, service responses, field observations, coordinates, and drawn geometry without losing the original material;
- describe sources, licenses, dates, coordinate systems, geographic extents, methods, quality, and restrictions;
- inspect spatial records as a map, table, chart, or documented file rather than making the map the only route to the data;
- clean, transform, join, classify, generalize, and analyze data with reproducible methods;
- create and edit points, lines, polygons, attributes, layer order, and styles while preserving who changed what and why;
- review changes before they become canonical or public;
- publish responsive maps and linked views without requiring a continuously running application server;
- provide accessible summaries, tables, legends, source notes, downloads, and printable outputs alongside interactive maps; and
- move data and methods between browser, desktop, command-line, notebook, database, and cloud environments without being locked into one vendor.

These goals do not imply one enormous mapping interface. A focused map answering a clear question is usually more useful than a universal viewer with every available layer. Shared data, styles, and components can support many small applications while each application retains an intelligible purpose.

## an open, static-first architecture

Our `/framework/` projects increasingly use [Observable Framework](https://observablehq.com/framework/) to compile Markdown, JavaScript, data loaders, and prepared data into static applications. For spatial work, that pattern can be expressed as:

1. **preserve source material.** Keep an unchanged original, its sidecar files, acquisition date, checksum, source URL, license, and access restrictions.
2. **create a documented working representation.** Normalize identifiers, attribute names, dates, geometry, and coordinate systems without erasing the source.
3. **validate and transform.** Run repeatable checks and build only the representations needed for analysis or publication.
4. **approve a release.** Separate working material from the reviewed dataset, style, narrative, and configuration that belong together.
5. **publish static artifacts.** Build HTML, JavaScript, styles, images, and formats such as GeoJSON, GeoParquet, Cloud Optimized GeoTIFF, or PMTiles; place approved outputs in object storage such as Amazon S3; and let the browser do the reading and rendering.
6. **add narrow services only where state must change.** Uploading a protected source, saving a shared edit, geocoding private records, or coordinating concurrent editors may need authentication and a server-side operation. A small API or AWS Lambda function with a narrowly scoped IAM role is preferable to giving the public application broad access to a database or storage account.

Static-first does not mean that all data is public or that all computation happens in the browser. It means the public reading path is made of reviewable, cacheable files and has no standing authority to modify source systems. Private inputs can be transformed during a controlled build, and sensitive material should remain outside the published artifact entirely.

The [static spatial applications](static-spatial-applications.md) page develops this architecture. [Spatial editing and collaboration](spatial-editing-and-collaboration.md) explains the boundary between local browser work, exported change sets, and authenticated persistence.

## complementary open-source tools

No single library needs to own the entire workflow. We can choose small tools according to the problem:

- [MapLibre GL JS](https://maplibre.org/projects/gl-js/) provides GPU-accelerated browser rendering for vector tiles, raster sources, data-driven styles, terrain, and larger interactive maps. It is a strong default when a map needs continuous zoom, rich basemap styling, or tiled data.
- [Leaflet](https://leafletjs.com/) provides a compact and approachable interface for interactive maps, markers, GeoJSON, image overlays, WMS, and a broad plugin ecosystem. It remains useful when the map and data are modest and clarity matters more than a full vector-tile renderer.
- [Observable Plot](https://observablehq.com/plot/) supports projected GeoJSON marks and makes maps easy to compose with tables, charts, and other analytical views. It is often the better choice for a thematic figure or research argument that happens to be geographic.
- [PMTiles](https://docs.protomaps.com/pmtiles/) packages a tile pyramid in one read-only file whose parts can be fetched with HTTP range requests. It fits S3-backed static publication well, but it is a delivery artifact—not the canonical editable dataset.
- [Terra Draw](https://www.osgeo.org/projects/terra-draw/) adds open-source geometry drawing and editing through adapters for MapLibre and Leaflet. The visible editing control is only one part of the required workflow; validation, provenance, review, and safe persistence still have to be designed.
- [GeoLibre](https://geolibre.app/) is a promising open-source project bringing file import, browser and desktop mapping, local analysis, and many modern spatial formats into a common interface. Because it is newer and changing quickly, we should evaluate it as a useful experiment and possible component rather than make the concept depend on it.
- [QGIS](https://qgis.org/), [GDAL](https://gdal.org/), [DuckDB Spatial](https://duckdb.org/docs/stable/core_extensions/spatial/overview.html), and [PostGIS](https://postgis.net/) remain important for inspection, conversion, desktop editing, repeatable processing, large analytical queries, and transactional spatial data.

Choosing open-source software is only part of openness. We also need portable formats, explicit licenses, complete attribution, documented transformations, replaceable components, and a useful export path. The [open geospatial formats](open-geospatial-formats.md) page describes which representations are appropriate at different stages.

## information, maps, and evidence

A published map is an interpretation. Projection, extent, classification, color, omitted records, label priority, aggregation, and base-map detail all affect what a reader perceives. Every application should therefore expose enough context to assess the claim:

- title, purpose, and intended audience;
- source organization and source link;
- geographic and temporal coverage;
- date acquired, date updated, and release identifier;
- methods and transformations;
- definitions, units, and category meanings;
- uncertainty, missingness, limitations, and known boundary disputes;
- license, attribution, and reuse conditions; and
- a table or download where disclosure is safe and permitted.

The interface should connect a selected geometry to its attributes and documentation, and connect a chart or table selection back to the map. It should not conceal records merely because they are difficult to draw. See [cartography and map interfaces](cartography-and-map-interfaces.md).

## a spatial data lifecycle

We distinguish five related kinds of artifact:

- **source** — the unchanged material as received;
- **canonical** — the team’s reviewed representation of a dataset and its stable identifiers;
- **working** — branches, proposed corrections, annotations, and draft geometry;
- **derived** — joins, summaries, generalized geometry, tiles, and analytical results that can be rebuilt; and
- **published** — the approved subset, map style, narrative, configuration, and downloadable files released together.

This distinction prevents a tile archive or web map from quietly becoming the only remaining copy of the data. It also permits more than one application to present the same canonical records without forcing every project to share the same layer order, annotation, or visual argument. The [spatial data lifecycle](spatial-data-lifecycle.md) page describes this model in detail.

## relationship to the categori.se applications

The current categori.se applications each address part of this longer-term spatial workflow:

- [archive.categori.se](https://archive.categori.se/) develops the archive, inventory, file-metadata, and provenance concepts needed to retain source spatial material;
- [docs-repo.categori.se](https://docs-repo.categori.se/) connects files and records to documentation, review, and versioned knowledge;
- [team-spaces.categori.se](https://team-spaces.categori.se/) explores controlled collaboration and the boundary between a team’s working material and a public release;
- [workspace.categori.se](https://workspace.categori.se/) develops workspace and project organization; and
- [opengeo.tools](https://opengeo.tools/) is the natural place to demonstrate open geospatial utilities and the evolving spatial application.

These are related applications, not claims that one deployment already implements the whole concept. The web GIS discussion provides a common direction: preserve the evidence, make transformations reproducible, minimize privileged services, and publish useful spatial views through open files and open technology.

## discussions in this section

- [spatial data lifecycle](spatial-data-lifecycle.md) — the movement from acquisition through preservation, review, derivation, and release;
- [open geospatial formats](open-geospatial-formats.md) — choosing editable, analytical, archival, and delivery representations;
- [static spatial applications](static-spatial-applications.md) — building map-centered applications with Observable Framework, object storage, and narrowly scoped services;
- [spatial editing and collaboration](spatial-editing-and-collaboration.md) — drawing, validation, change records, review, and safe persistence;
- [cartography and map interfaces](cartography-and-map-interfaces.md) — creating clear, accessible, and accountable spatial arguments;
- [spatial data sources and governance](spatial-data-sources-and-governance.md) — evaluating sources, licenses, identifiers, sensitive locations, and change; and
- [desktop, database, and service tools](desktop-database-and-service-tools.md) — where QGIS, GDAL, DuckDB, PostGIS, GeoServer, MapServer, and OGC APIs fit.

The old installation recipes, vendor stack inventories, copied country-code tables, and version-specific QGIS tutorials have been removed. Their durable requirements are incorporated here, while current installation and reference details are left to each project’s maintained documentation.
