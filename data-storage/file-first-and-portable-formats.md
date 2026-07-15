# file-first data and portable formats

A file-first system treats files as durable information objects rather than temporary containers trapped behind an application. People should be able to locate a file, understand its role, inspect it with more than one tool, copy it without losing meaning, and preserve it after the interface that created it has disappeared.

The approach is intentionally modest. It does not claim that a directory can replace every database, or that text is always more efficient than a binary encoding. It establishes a portable foundation from which databases, indexes, APIs, and publications can be rebuilt.

## what we mean by open and cleartext

A cleartext file represents its content as readable characters, normally UTF-8, rather than an application-specific binary encoding. Markdown, CSV, JSON, GeoJSON, XML, SQL scripts, and many configuration formats meet this description. They are convenient for inspection, scripted transformation, search, and revision comparison.

Cleartext does **not** mean publicly accessible or stored without encryption. A private CSV can be encrypted at rest by the operating system or object store while remaining CSV after an authorized reader retrieves it. Access and encryption are security properties; text and binary describe representations.

An open format has a stable, public specification and independent implementations. Some of the best open formats are binary. Parquet stores typed analytical columns compactly; SQLite and GeoPackage provide self-contained queryable databases; NetCDF supports scientific arrays. Rejecting those formats simply because a text editor cannot display them would trade genuine interoperability for superficial readability.

Our preference is therefore:

1. preserve the original bytes exactly as received;
2. use a documented text representation as the editable or exchange form when it expresses the data faithfully;
3. use a documented binary format when it materially improves typing, scale, spatial capability, or performance;
4. retain the schema, metadata, provenance, and tools needed to interpret either form; and
5. maintain a tested export path from every application or managed service.

## layers of a file-based dataset

### received sources

An original spreadsheet, PDF, image, archive, API payload, or database export is evidence. Preserve it without silent normalization. Record the source, retrieval time, original name, media type, checksum, rights, and any request or export parameters needed to understand the capture. The [data-capture discussions](../data-capture/) develop this intake process.

### canonical working files

The canonical layer is the representation the team intentionally reviews and edits. For narrative this may be Markdown; for a simple table, CSV plus a schema; for nested records, JSON or newline-delimited JSON; for web vector features, GeoJSON. A canonical file should have stable identifiers and formatting rules so a revision shows a meaningful change rather than arbitrary reordering.

Canonical does not mean eternal. If the team changes formats, record the migration, preserve the previous version, and verify counts, identifiers, types, nulls, relationships, coordinate systems, and checksums as appropriate.

### optimized derivatives

Parquet files, DuckDB or SQLite databases, search indexes, vector tiles, TopoJSON, image pyramids, and static web bundles may be generated for analysis or delivery. They should be reproducible from identified sources and transformations. When a derivative contains irreplaceable human edits, it has quietly become a source and should be managed accordingly.

### published snapshots

Publication is a deliberate selection, not a synonym for the latest working directory. A published dataset should state its version or date, license, schema, provenance, limitations, and relationship to later corrections. Every file delivered through a static website must be treated as public unless a separate authorization layer demonstrably protects it.

## filenames are navigation, not identity

Preserve the filename supplied by a source as part of the intake record. A working or published copy may receive a shorter, safer name, but renaming should not erase the original name or become the only place where title, authorship, date, version, and classification are stored.

Earlier notes proposed bibliographic filenames such as journal initials followed by year, volume, issue, pages, and author names. These were readable in a folder but duplicated catalog data and became fragile when a citation changed. Prefer a stable managed identifier plus, where helpful, a short descriptive slug. Keep the complete bibliographic record in structured metadata and connect paths, object keys, and checksums through a manifest.

Names should work across the filesystems and tools the project supports. Avoid control characters, path separators, trailing spaces, and names distinguished only by case. Use a date prefix only when the date has a defined meaning and chronological sorting is useful. A filename remains a locator and label; [identifiers, names, and controlled values](../data-structures/identifiers-names-and-controlled-values.md) explains the durable identity model.

## choosing among table formats

### CSV and TSV

Delimited text is an excellent exchange format for one rectangular table. It is broadly supported, streams well, and produces understandable revision diffs when row order is stable. It does not reliably carry types, null semantics, character encoding, units, key constraints, or relationships among tables.

Accompany important delimited data with a machine-readable or clearly written schema that defines:

- the delimiter, quoting rules, line endings, and UTF-8 encoding;
- column names, meanings, types, units, and permitted values;
- how missing, unknown, withheld, zero, and empty values differ;
- primary identifiers and references to other tables; and
- row ordering, if ordering has meaning.

A spreadsheet can be the right human editing interface, especially for small collaborative tables. Preserve formulas, validation, comments, and multiple sheets when they matter, but export the underlying tables and definitions into open forms so the workbook is not the only usable copy. LibreOffice and OnlyOffice provide open-source interfaces; Microsoft Excel and Google Sheets remain common workplace tools with useful export paths.

### JSON and newline-delimited JSON

[JSON](https://www.rfc-editor.org/rfc/rfc8259) expresses objects, arrays, strings, numbers, booleans, and null in a portable text syntax. It suits API responses, metadata records, nested structures, and web applications. A JSON Schema or project data dictionary can define constraints the syntax itself does not supply.

A large JSON array generally must be parsed as one document. Newline-delimited JSON places one complete JSON value on each line, making append, streaming, failure recovery, and record-oriented processing easier. Neither representation should depend on the order of object properties, and numeric precision beyond interoperable software limits needs an explicit convention.

### Parquet and Arrow

[Apache Parquet](https://parquet.apache.org/docs/overview/) is an open, compressed, column-oriented file format. Analytical queries can read only needed columns and use file metadata to avoid scanning irrelevant groups. It is well suited to typed tables that are larger than convenient CSV files or repeatedly analyzed by DuckDB, Python, R, Spark, and cloud query engines.

Parquet should normally be a validated canonical analytical snapshot or a reproducible derivative, not the only unexplained copy. Keep schemas stable, avoid producing thousands of tiny files, choose partitions from real query patterns, and preserve the transformation that created them.

[Apache Arrow](https://arrow.apache.org/overview/) defines a language-independent columnar representation and IPC formats for exchanging data efficiently among processes. Arrow often reduces serialization between analytical tools; Parquet is generally the more familiar choice for durable compressed analytical files. The technologies complement rather than replace one another.

## choosing among geospatial formats

### GeoJSON

[GeoJSON](https://www.rfc-editor.org/rfc/rfc7946) is the clearest general web interchange for vector features and their properties. It is text-based and supported across browsers, GIS tools, and databases. RFC 7946 uses WGS 84 longitude and latitude, and large detailed collections repeat coordinates and property names. Validate coordinate order, geometry, and the assumptions made when transforming a source coordinate reference system.

### TopoJSON

[TopoJSON](https://github.com/topojson/topojson-specification) represents shared boundaries as common arcs and can quantize and delta-encode coordinates. It is useful for compact thematic maps and for keeping adjacent boundaries together. Because it may simplify or quantize geometry and is less direct to edit, retain the source GeoJSON, GeoPackage, or database layer and record the conversion settings.

### GeoPackage and PostGIS

[GeoPackage](https://www.geopackage.org/) is an OGC standard built on SQLite. It can hold multiple vector or raster tables, indexes, coordinate reference information, and metadata in one portable file. It is a strong exchange and field-work format where GeoJSON or a Shapefile would lose capability.

PostGIS extends PostgreSQL for shared, transactional spatial data and advanced spatial queries. It is a database rather than an interchange file. Preserve schema and migration definitions and produce GeoPackage, GeoJSON, Parquet, or other appropriate exports for use outside that service.

Shapefiles remain common exchange material but split a layer across several files and impose old limits on fields, text, nulls, and geometry. Preserve an original Shapefile when it is the source; do not select it as the default new canonical format when GeoPackage or another open format meets the need.

## multidimensional and scientific data

Large rasters and scientific arrays should not be forced into CSV or JSON. NetCDF and HDF5 are established binary containers; Cloud Optimized GeoTIFF supports range-based raster access; and [Zarr](https://zarr-specs.readthedocs.io/) divides multidimensional arrays into chunks suited to filesystems and object stores. These formats remain understandable only when coordinate variables, units, nodata values, chunk layout, compression, and domain conventions are preserved.

## query files without surrendering them

DuckDB can query CSV, JSON, and Parquet directly, including files in object storage, and can materialize a single-file database when repeated work benefits from indexes or managed tables. It is designed for analytical scans and joins rather than a networked application with many concurrent writers.

SQLite provides transactional local application storage and a stable single-file container. Because it emphasizes row-oriented application access, it and DuckDB solve different problems despite their similar embedded operation. Neither should be opened for concurrent writes through an ordinary network filesystem.

This middle layer is important: a project does not have to choose between fragile spreadsheet manipulation and operating a database server. It can retain open data files, query them locally with SQL, and publish only bounded outputs.

## metadata that travels with the data

Every durable dataset should carry or link to:

- a title, description, responsible party, license, and sensitivity or publication status;
- stable identifiers for the dataset, version, records, and related sources;
- a schema or data dictionary, including units, code lists, coordinate systems, and null semantics;
- provenance describing capture, cleaning, joins, exclusions, and derived fields;
- checksums and byte sizes for fixed files;
- software and format versions where compatibility depends upon them;
- validation rules and the result of the last validation; and
- retention, correction, and replacement procedures.

Embedded metadata is useful but not sufficient when only one specialized program can expose it. A small README, manifest, schema file, and checksums stored beside the data can keep essential context available across tools.

## revision control and large files

Git works well for modest text files because it can compare lines and reconstruct history. It is less suitable for frequently changing binary files and very large datasets: a repository retains old objects, clones become expensive, and a meaningful row- or feature-level difference may not be visible.

Keep code, schemas, small canonical data, manifests, and transformation recipes in Git. Store large source and derivative objects in versioned object storage or a purpose-built data repository, referenced by stable identifiers and checksums. Git LFS can improve transfer of large files but does not turn Git into a database, data catalog, or preservation policy.

## a portability test

Before accepting a storage format or application as authoritative, perform the exit exercise:

1. Export all records, files, relationships, metadata, permissions where appropriate, and revision history that the project claims to preserve.
2. Open the export with an independent tool.
3. compare record counts, identifiers, checksums, types, nulls, geometries, and representative relationships;
4. rebuild one useful analysis or publication without access to the original application; and
5. document information that could not be exported and decide whether the resulting dependence is acceptable.

A promised export button is not yet an exit path. A tested, documented, and repeatable export is.
