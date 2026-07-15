# data storage

Data storage is not only the place where bytes remain. A storage choice determines who can inspect information, which tools can use it, how changes are recorded, how quickly it can be queried, what it costs to retain, and whether the work can move when an application or vendor changes.

Our general preference is to begin with files in open, documented formats and add a database or managed service when the work has a clear need for transactions, concurrent editing, specialized queries, scale, or controlled access. We usually prefer AWS for cloud infrastructure because it is the environment used across much of our current development. In workplace settings, however, Azure is often the required or best-integrated environment. The underlying data model and portable representation should remain intelligible in either cloud.

There is no single storage system for every part of a project. Original documents, curated tables, application state, geospatial features, analytical derivatives, published snapshots, and backups have different access patterns and responsibilities. A coherent system can use several stores while making the authoritative copy, transformation path, and export route explicit.

## begin with the information, not the product

Before selecting a format, database, or cloud service, ask:

1. Is this an original source, an editable record, application state, a derived dataset, a cache, or a publication artifact?
2. Must people read or edit it directly, or will software be its primary user?
3. Is the workload mostly sequential reading, analytical scanning, lookup by key, full-text or spatial search, or transactional updates?
4. How many writers act concurrently, and which changes must succeed or fail together?
5. What volume, request rate, and growth are credible rather than merely imaginable?
6. Which fields, files, and versions must remain private, immutable, or recoverable?
7. What schema, units, coordinate reference system, vocabulary, and provenance are required to interpret it?
8. Can the project export a complete, documented copy without the original application or vendor?
9. Who will operate, monitor, migrate, and pay for the system over its useful life?

These questions often point to a simpler answer than beginning with a list of available cloud products.

## a file-first approach

File-first means that a durable, inspectable file is the starting point and, where practical, the canonical representation of information. Plain UTF-8 text such as Markdown, CSV, JSON, GeoJSON, and simple configuration files can be opened by many programs, compared with ordinary revision tools, processed without a running service, and preserved independently of the interface that created it.

This preference is about openness and control, not a rule that every byte must be printable. **Open** means that the format is publicly documented and supported by independent implementations; it does not mean that the data are public or unencrypted. **Binary** does not necessarily mean proprietary. Parquet, Arrow, SQLite, GeoPackage, NetCDF, and similar formats are open and portable, and they can preserve types or support efficient access that a text file cannot. Sensitive cleartext files still require access control and encryption at the storage boundary.

A good file-first workflow commonly preserves several layers:

```text
data/
├── received/     original bytes and capture records
├── canonical/    reviewed, editable open representations
├── derived/      reproducible transformations and indexes
├── published/    deliberately released snapshots
└── manifests/    schemas, checksums, provenance, licenses, and inventories
```

These names describe responsibilities, not a required directory structure. The important distinction is that an extraction does not replace its source, an optimized derivative does not silently become the editable record, and a public file does not expose the private working collection. [File-first data and portable formats](file-first-and-portable-formats.md) develops this approach in detail.

## common portable formats

The smallest format that faithfully expresses the information is usually the easiest to preserve. Each choice also has limits.

| format | useful for | principal caution |
| --- | --- | --- |
| plain text and Markdown | narrative, notes, documentation, configuration, and small lists | conventions and relationships need to be documented |
| CSV or TSV | simple rectangular tables and exchange with spreadsheets | types, nulls, encodings, delimiters, and multiple tables require an accompanying schema |
| JSON or newline-delimited JSON | nested records, API payloads, event streams, and web publication | JSON alone does not define field meaning, precision, or a project schema |
| GeoJSON | interoperable web exchange of vector features in WGS 84 coordinates | repetition makes large or detailed datasets expensive to store and transmit |
| TopoJSON | compact web cartography whose features share boundaries | it is an encoded publication or interchange form, not usually the easiest editing format |
| Parquet | typed, compressed, column-oriented analytical tables | binary inspection needs capable software; many small files and unmanaged schema changes cause problems |
| Arrow IPC | efficient exchange of typed columnar data among analytical processes | it is primarily an interchange and memory-oriented format, not a complete governance system |
| SQLite or GeoPackage | portable, queryable multi-table or geospatial datasets in one file | concurrent network writes and line-by-line version comparison are poor fits |
| NetCDF or Zarr | multidimensional scientific arrays and chunked cloud analysis | interpretation still depends on conventions, coordinate metadata, chunking, and codec support |

[JSON](https://www.rfc-editor.org/rfc/rfc8259) and [GeoJSON](https://www.rfc-editor.org/rfc/rfc7946) have IETF specifications. [Apache Parquet](https://parquet.apache.org/docs/overview/) and [Apache Arrow](https://arrow.apache.org/overview/) provide open columnar formats. A file's extension is not sufficient evidence of interoperability: preserve its schema, encoding, software version where relevant, and a small validation example.

## structured datasets and SQL

As a collection grows, structure should become more explicit rather than more proprietary. A structured dataset defines records, fields, types, identifiers, allowed values, missing values, relationships, and validation rules. CSV and JSON can carry structured data, but the schema usually lives elsewhere. Parquet, Arrow, SQLite, and relational databases can carry more type information, though they still need domain definitions and provenance.

SQL is a language and family of conventions for defining and querying relational data; it is not one portable file format. An SQL dump may help restore a particular engine, but it should not be the only durable export. Important relational data should also have documented schemas and, where practical, stable exports into CSV or Parquet with identifiers and relationships preserved.

For local analysis, [DuckDB](https://duckdb.org/why_duckdb) is especially useful because it is an embedded analytical database that can query Parquet, CSV, JSON, and other sources directly. [SQLite](https://www.sqlite.org/whentouse.html) is a strong application and interchange format when the workload is local, transactional, and has limited concurrent writing. These tools complement file-first storage: they can query the files or produce a self-contained working database without first requiring a database server.

## when a database becomes useful

A database is justified when it provides a property the file collection cannot safely or conveniently supply:

- multiple people or services must update shared state concurrently;
- several changes must be validated and committed as one transaction;
- relationships, uniqueness, or other constraints must be enforced centrally;
- applications need low-latency indexed queries or controlled row-level access;
- change streams, audit events, search indexes, or specialized spatial operations are required; or
- the dataset and query pattern need an analytical engine beyond individual files.

PostgreSQL is our general-purpose open relational preference, with PostGIS when spatial storage and queries are central. SQLite remains useful for local application state; DuckDB for local and batch analytics; MySQL or MariaDB where an application ecosystem expects them. Key-value, document, graph, time-series, search, vector, and in-memory stores should follow a demonstrated access pattern rather than a desire to adopt a specialized product.

The [choosing and interacting with databases](interacting-with-databases.md) discussion compares these roles and explains why a browser-facing visualization should normally receive a bounded API response or static export rather than direct database credentials.

## cloud storage and managed services

Cloud platforms separate several storage models that were once supplied by one server:

- **object storage** holds independently addressed files and immutable data objects at large scale;
- **shared file storage** provides filesystem protocols for software that truly requires mounted directories;
- **block storage** provides low-level volumes for a virtual machine or database engine;
- **managed databases** provide transactions, indexes, replication, backups, and service-specific query models; and
- **warehouses and lakehouses** organize large analytical datasets across object storage and compute engines.

For new file-based data applications on AWS, S3 is usually the durable object layer. PostgreSQL on RDS or Aurora is a familiar default for shared relational state; DynamoDB is appropriate for deliberately modeled key-value access; EFS serves workloads that actually require a shared filesystem; and Athena or Redshift may serve larger analytical workloads. AWS's [storage-services overview](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/storage-services.html) and [database decision guide](https://docs.aws.amazon.com/databases-on-aws-how-to-choose/) describe the wider service portfolio.

In Microsoft-oriented workplaces, Azure Blob Storage and Data Lake Storage fill the object and analytical-lake roles, while Azure Files supplies managed SMB or NFS shares. Azure Database for PostgreSQL preserves a portable open-source relational foundation; Azure SQL fits organizations and applications standardized on SQL Server; and Cosmos DB serves particular distributed non-relational models. Microsoft's [Azure Storage overview](https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction) and [data-store model guide](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models) help distinguish these services.

Google Cloud Storage, Cloud SQL, and BigQuery provide another managed cloud family. S3-compatible object services, self-hosted PostgreSQL, and open-source storage systems can reduce dependence on a hyperscale provider or satisfy local-control requirements. The relevant question is not whether one vendor is universally best, but whether the selected service satisfies residency, identity, network, procurement, recovery, cost, and operational constraints while retaining a credible exit path.

## current storage philosophies

Several approaches now coexist:

- **file-first** keeps durable source and canonical data in inspectable, portable files;
- **local-first** allows useful work without continuous network access and reconciles shared changes deliberately;
- **database-first** treats a transactional database as the operational source of truth and produces documented exports for preservation and analysis;
- **data-lake** storage retains varied source and analytical objects cheaply, but requires catalogs, schemas, lifecycle rules, and governance to avoid becoming an unsearchable accumulation;
- **lakehouse** table formats add schema evolution, snapshots, and transactions over analytical files in object storage; [Apache Iceberg](https://iceberg.apache.org/docs/latest/) is one open example;
- **warehouse** systems curate modeled analytical data for repeatable reporting and organizational access; and
- **polyglot persistence** uses different stores for genuinely different workloads, while accepting the cost of synchronizing, securing, monitoring, and recovering each one.

Our preference is progressive complexity: begin with an open file and its metadata; add an embedded query engine; introduce shared relational or object storage when collaboration and scale require it; and adopt specialized distributed systems only when measured needs justify their operational burden.

## storage responsibilities that follow every option

No format or provider removes the need to:

- preserve provenance, schemas, identifiers, checksums, licenses, and retention decisions;
- define which copy is authoritative and which files are derived, cached, or published;
- encrypt and authorize private data without confusing an obscure path with access control;
- version important records and test restoration from an independent copy;
- monitor cost, capacity, failed writes, unexpected access, and lifecycle transitions;
- validate exports and migrations before the original system is retired; and
- document deletion across replicas, snapshots, indexes, caches, and backups.

The [data-security discussion](../data-security/) covers IAM, encryption, logging, and recovery. The [privacy-by-architecture discussion](../data-privacy/privacy-by-architecture.md) follows sensitive data through object storage, static builds, functions, logs, and publication.

## discussions in this section

- [file-first data and portable formats](file-first-and-portable-formats.md) develops the canonical-file approach and compares textual, columnar, geospatial, and scientific formats;
- [choosing and interacting with databases](interacting-with-databases.md) distinguishes embedded analytics, transactional relational systems, specialized stores, and safe application access; and
- [working with object storage](working-with-s3.md) modernizes the former S3 tutorial and maps AWS S3 practices to Azure Blob Storage.
