# open geospatial formats

There is no single best spatial format. The useful question is what role a representation plays: preservation, interchange, editing, analysis, transactional storage, or delivery. An open specification and several independent implementations make it more likely that the data will remain usable, but openness does not remove the need for documentation, validation, and export.

## choosing by role

| role | useful representations | considerations |
| --- | --- | --- |
| source preservation | the original package plus sidecars and metadata | retain unchanged bytes, checksum, license, and acquisition context |
| small vector interchange | [GeoJSON](https://www.rfc-editor.org/rfc/rfc7946), CSV with documented coordinates | readable and broadly supported; large or highly detailed files become inefficient |
| topology-aware web derivation | [TopoJSON](https://github.com/topojson/topojson-specification) | shares arcs between geometries and supports simplification; usually derived, not the editing master |
| portable vector editing | [GeoPackage](https://www.geopackage.org/) | one SQLite-based file can hold features, attributes, tiles, and related tables; binary but open and widely supported |
| analytical vector data | [GeoParquet](https://geoparquet.org/) | compact columnar storage for larger scans and cloud analytics; less suitable for manual inspection or row-by-row edits |
| range-readable vector delivery | [FlatGeobuf](https://flatgeobuf.org/) | spatially indexed binary features that can support partial reads; useful where a full tile pyramid is unnecessary |
| raster preservation and analysis | [GeoTIFF](https://www.ogc.org/standards/geotiff/) | established raster container with georeferencing; confirm compression, nodata, overviews, and metadata |
| range-readable raster delivery | [Cloud Optimized GeoTIFF](https://www.ogc.org/standards/ogc-cloud-optimized-geotiff/) | internal tiling and overviews permit efficient HTTP range access from object storage |
| static tile delivery | [PMTiles](https://docs.protomaps.com/pmtiles/) | a single read-only tile archive for S3 or another range-capable host; rebuild it when source data changes |
| local tile package | [MBTiles](https://github.com/mapbox/mbtiles-spec) | SQLite container with broad tooling support; commonly used for transfer and offline work |
| transactional shared editing | [PostGIS](https://postgis.net/) or another spatial database | appropriate for queries, constraints, concurrent writes, and services; require a documented export path |

Formats in the right column may coexist. A source GeoPackage might produce GeoParquet for analysis, a simplified GeoJSON for a small figure, and PMTiles for a large public map. The manifest should connect each derivative to its input, method, and release.

## GeoJSON and TopoJSON

[RFC 7946](https://www.rfc-editor.org/rfc/rfc7946) defines GeoJSON around WGS 84 longitude and latitude. It is approachable, diffable in small quantities, easy to inspect in developer tools, and accepted by most browser mapping libraries. It is a good interchange and publication format when the geometry is not too large.

GeoJSON’s simplicity can also encourage mistakes: it has no built-in schema for properties, coordinates are easy to reverse, duplicated shared boundaries inflate files, and every property embedded in a public file is disclosed. Validate coordinate order, geometry type, property types, and output fields.

TopoJSON encodes shared boundary arcs once. It can reduce duplication and preserve adjacency for thematic maps, but quantization and simplification make it a derived display representation. Keep the canonical features and the conversion parameters.

## GeoPackage, shapefile, and portable editing

GeoPackage is a useful portable working format because geometry, attributes, coordinate systems, and related tables can travel in one file. It is not cleartext, but it is an open SQLite-based standard with mature support in QGIS, GDAL, and other tools. Use it when the integrity of a multi-table or editable spatial package matters more than line-by-line diffs.

The Esri shapefile remains common intake material, but it is a legacy multi-file format with constrained field names and types, ambiguous text encoding, and no modern null or schema model. Preserve a received shapefile as a complete package; do not keep only the `.shp`. For new canonical data, prefer GeoPackage, GeoParquet, or another representation suited to the lifecycle.

## GeoParquet and FlatGeobuf

GeoParquet adds interoperable geometry metadata to Apache Parquet. Columnar encoding, compression, and selective reads make it useful for analytical work with DuckDB, Python, and other data engines. Because the binary is not meaningfully reviewed in Git, pair it with a schema, generation code, statistics, and a small human-readable sample or report.

FlatGeobuf is a compact, spatially indexed feature format designed for streaming and range requests. It can be a good static delivery option when a reader needs features within an extent and vector tiles would add needless preprocessing. Browser and server support should be tested against the application’s actual access pattern.

## GeoTIFF and cloud-optimized rasters

GeoTIFF is the durable baseline for many georeferenced rasters. A Cloud Optimized GeoTIFF is arranged so a client can request relevant tiles and overviews without downloading the whole object. COG describes organization and access, not whether the pixels are analytically sound. Retain band definitions, units, nodata meaning, acquisition time, processing level, resolution, and source provenance.

Large raster collections may also be cataloged with the [SpatioTemporal Asset Catalog](https://www.ogc.org/standards/stac/) specification, which describes items and assets without inventing a new raster encoding.

## vector tiles, PMTiles, and map styles

Vector tiles divide generalized features into zoom-addressed pieces. They make large maps responsive and permit client-side styling, but they often omit attributes, simplify geometry, clip features, and generate identifiers differently from the source. Store the tile recipe and retain a stable join key when a user must reach the canonical record.

PMTiles stores a tile pyramid in one file. A browser can request only the relevant byte ranges from S3-compatible storage, avoiding a dedicated tile server. The archive is intentionally read-only; changing a feature means updating the source and rebuilding the archive. A PMTiles file therefore belongs with derived or published artifacts, not in place of an editable dataset.

A [MapLibre style](https://maplibre.org/maplibre-style-spec/) is another versioned artifact. It describes sources, layers, filters, zoom ranges, and visual properties. Keep it with the data release and application configuration, including attribution and any external glyph or sprite dependencies.

## coordinate reference systems and geometry

Format conversion does not by itself resolve coordinate meaning. Record the source coordinate reference system with a recognized identifier when one exists, plus axis order and units. Do not assign a CRS merely because the numbers look plausible. Reprojection changes coordinates; it should be a declared transformation, not a silent repair.

Validation should cover empty and invalid geometry, duplicates, ring orientation where relevant, dimensionality, antimeridian behavior, unexpected extents, and topology required by the domain. “Valid” geometry can still be inaccurate, over-precise, or inappropriate for a map’s scale.

## open formats as an exit strategy

Databases and proprietary applications can be useful working environments. The safeguard is an automated, tested export into documented formats that retain geometry, attributes, identifiers, relationships, and provenance. Periodically open those exports in an independent implementation. Portability that has never been tested is only an assumption.

See [spatial data lifecycle](spatial-data-lifecycle.md) for the role of canonical and derived artifacts and [static spatial applications](static-spatial-applications.md) for browser delivery.
