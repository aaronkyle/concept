# desktop, database, and service tools

Static publication does not eliminate desktop GIS, spatial databases, or web services. It gives each a narrower and more intelligible role. We choose a component because the workflow needs its capabilities, not because an old “GIS stack” diagram placed it in every deployment.

## desktop and command-line processing

[QGIS](https://qgis.org/) is the principal open-source desktop environment for inspecting, editing, styling, analyzing, and laying out spatial data. It is valuable for expert review and tasks where a web interface would be needlessly constrained. QGIS project files, processing models, styles, and exported layouts can be versioned as part of a reproducible workflow, while current installation and feature guidance should come from the maintained [QGIS documentation](https://docs.qgis.org/).

[GDAL](https://gdal.org/) provides command-line and library support for reading, writing, transforming, and inspecting many raster and vector formats. Scripts built around `gdal`, `ogr`, and related libraries can make conversions and validation repeatable in local development and continuous builds.

QGIS and GDAL do not remove the need to preserve the original input or document a transformation. A manually repaired geometry or changed export setting is part of the provenance.

## embedded analysis

[DuckDB](https://duckdb.org/) and its [spatial extension](https://duckdb.org/docs/stable/core_extensions/spatial/overview.html) can query local or remote analytical files without establishing a persistent database service. This fits file-first research, build-time loaders, and browser analysis through DuckDB-WASM. GeoParquet is a particularly useful companion for larger vector tables.

Use an embedded analytical database when the application needs joins, aggregations, or scans, but not many concurrent transactional writers. Preserve the SQL and the input versions so the result can be rebuilt.

## shared transactional data

[PostgreSQL](https://www.postgresql.org/) with [PostGIS](https://postgis.net/) is appropriate when a team needs spatial indexes, constraints, complex queries, concurrent edits, permissions, and transactions against a shared current state. It can be the canonical operational store for a heavily edited dataset.

A database should still have:

- stable feature identifiers and schema migrations;
- least-privilege roles separated by read, propose, approve, and administer operations;
- backups and tested restoration;
- an audit or change model appropriate to the data;
- automated exports into open, documented representations; and
- a clear distinction between canonical tables and rebuildable publication tables or tiles.

PostGIS does not need to sit behind every public map. Build approved static artifacts where freshness and interaction permit it, reducing public query load and privileged network paths.

## map and feature services

[GeoServer](https://geoserver.org/) and [MapServer](https://mapserver.org/) remain open-source options for standards-based map, feature, coverage, and tile services. QGIS Server can publish maps using QGIS project configuration. These services are useful when clients require server-rendered cartography, standards interoperability, large dynamic queries, or frequently changing protected data.

The durable distinction is:

- a rendered map response communicates a server-controlled portrayal;
- a feature response sends geometry and attributes that the client can inspect or style; and
- a tile response trades feature completeness for responsive, scale-dependent delivery.

Do not expose a feature service when a rendered map is the only permitted disclosure. Conversely, do not rely on an image service when readers need the actual records. [OGC API standards](https://ogcapi.ogc.org/) provide resource-oriented interfaces for features, maps, tiles, records, and related capabilities; older WMS, WFS, WCS, and WMTS services remain common and may be required for interoperability.

## narrow application services

Some workflows need an application endpoint without a full GIS server: submit a proposed edit, start a controlled build, sign a private download, validate a file, or resolve an identifier. A small function can provide that capability with a limited input schema and narrowly scoped authority.

On AWS, Lambda and IAM can support this pattern. Separate roles by operation and environment, restrict actions to exact resources, validate on both sides of the trust boundary, and never place durable cloud credentials in browser code. Static clients should receive only the data and temporary capability required for the current action.

## choosing the least complicated adequate system

Use:

- files and a reproducible build for reviewed snapshots and public reading;
- browser-local processing for private exploration and draft interaction;
- DuckDB for embedded analytical queries;
- QGIS for expert desktop editing and cartography;
- PostGIS for concurrent transactional spatial state;
- GeoServer, MapServer, QGIS Server, or OGC APIs when interoperable dynamic services are a real requirement; and
- a narrow authenticated function for a small state-changing operation.

Systems can be combined, but every additional service adds credentials, patching, monitoring, failure modes, and data-governance obligations. The [static spatial applications](static-spatial-applications.md) page describes our default publication path, and [spatial editing and collaboration](spatial-editing-and-collaboration.md) identifies when the workflow genuinely crosses into shared state.
