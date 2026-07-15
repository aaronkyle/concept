# choosing and interacting with databases

A database is a service or embedded engine that manages data according to a model and an access pattern. It can enforce relationships, coordinate concurrent changes, accelerate queries, and protect operations behind an authorization boundary. It does not by itself supply trustworthy definitions, provenance, privacy, backup, or an exit strategy.

The earlier version of this page collected examples of connecting D3 directly to MySQL-oriented web applications. The durable requirement is to move selected data from managed storage into an analysis or visualization. A browser should not receive database credentials or unrestricted query access. It should receive a reviewed static file or call a bounded API that authenticates the request, authorizes the operation, validates parameters, and limits the result.

## SQL is shared vocabulary, not one product

SQL describes and queries relational tables, but PostgreSQL, SQLite, DuckDB, MySQL, MariaDB, SQL Server, and cloud warehouses implement different types, extensions, operational models, and dialects. Portable SQL helps, but portability also depends on restrained use of vendor-specific behavior, explicit schemas and migrations, and tested exports.

Relational data is a strong default when records have stable identities and meaningful relationships. Primary keys, foreign keys, uniqueness constraints, checks, transactions, and joins allow the database to protect invariants that would otherwise live only in application code.

Database engines also differ in how they treat the case of quoted and unquoted names. Use one portable convention and avoid schema objects distinguished only by capitalization. The wider distinction among stable IDs, labels, filenames, paths, and field names belongs in [identifiers, names, and controlled values](../data-structures/identifiers-names-and-controlled-values.md).

## embedded databases

An embedded database runs within a local process instead of requiring a separate server.

### SQLite for application state and portable collections

[SQLite](https://www.sqlite.org/whentouse.html) is well suited to local applications, devices, modest websites with an application server, caches, interchange packages, and self-contained data collections. It is transactional, widely supported, and stored in one stable cross-platform file. GeoPackage builds a spatial interchange standard on this foundation.

SQLite permits many readers but only one writer at a time. It should not be treated as a shared database file opened for concurrent writes by many computers over a network filesystem. When several application servers or write-intensive clients need to coordinate, use a client/server database.

### DuckDB for analytical work

[DuckDB](https://duckdb.org/why_duckdb) is an embedded relational engine designed for analytical queries that scan, join, and aggregate substantial portions of a dataset. It can query Parquet, CSV, JSON, Arrow, data frames, and remote object storage, often without first importing everything into a managed server.

DuckDB is a good bridge between file-first storage and repeatable analysis. A transformation can read canonical files, execute SQL, and write a documented Parquet or CSV result. Its native single-file database is useful for local working state, but the source files, schema, and transformation should remain available when reproducibility or long-term portability matters.

SQLite and DuckDB are complementary: SQLite is primarily row-oriented and transactional; DuckDB is columnar and analytical. Neither is our default for a multi-user operational database with many concurrent writers.

## shared relational databases

### PostgreSQL and PostGIS

[PostgreSQL](https://www.postgresql.org/about/) is our general open-source preference for shared relational application state. It provides mature transactions, constraints, indexing, JSON support, full-text capabilities, extensibility, replication options, and a broad tool ecosystem. [PostGIS](https://postgis.net/) adds spatial types, indexes, transformation, and analysis.

PostgreSQL is appropriate when Archive, Docs Repo, Team Spaces, Workspace Management, or a related service must coordinate edits and relationships that cannot be expressed safely as independent file writes. It should hold operational state behind an application or carefully controlled administrative connection, while object storage holds large source files and generated artifacts.

On AWS, [Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) or Aurora PostgreSQL can handle much of the infrastructure operation. In Azure workplaces, [Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/) provides the corresponding managed open-source engine. A managed database reduces patching and replication work; the project still owns schema quality, access, migration, monitoring, cost, and recovery tests.

### MySQL, MariaDB, and SQL Server

MySQL and MariaDB remain sensible when an established application, CMS, or team is built around that ecosystem. SQL Server and Azure SQL are sensible in Microsoft-centered organizations with existing skills, integration, and governance. We should not migrate a functioning system merely to satisfy a generic preference, but every system should retain documented schemas and validated exports that avoid unnecessary lock-in.

## non-relational and specialized stores

Non-relational does not mean unstructured. These systems normally require more deliberate modeling around their particular access paths.

| model | appropriate pressure | examples |
| --- | --- | --- |
| key-value | known keys, predictable lookups, high scale, or ephemeral state | DynamoDB, Azure Cosmos DB key-value models, Valkey or Redis-compatible services |
| document | records naturally travel as aggregates with flexible nested fields | MongoDB, Azure Cosmos DB for NoSQL, Amazon DocumentDB with compatibility limits understood |
| graph | traversing relationships is the central workload | Neo4j, Amazon Neptune, graph models in Cosmos DB |
| time series | high-volume timestamped measurements, retention, and window queries | TimescaleDB, Amazon Timestream options, Azure Data Explorer |
| search | full-text relevance, facets, and secondary discovery indexes | OpenSearch, Elasticsearch, Azure AI Search |
| vector | nearest-neighbor retrieval over embeddings is a demonstrated requirement | pgvector, managed search or database vector capabilities |
| in-memory | a cache, session, queue, or extremely low-latency working set | Valkey or Redis-compatible services |

Use a specialized store when its access pattern is central and measured. A search or vector index is usually a derived, rebuildable view of authoritative records rather than the only copy. A cache must tolerate expiration and loss. Compatibility claims among document or Redis-like services should be tested against the features the application actually uses.

AWS's [database decision guide](https://docs.aws.amazon.com/databases-on-aws-how-to-choose/) and Microsoft's [Azure data-store model guide](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/understand-data-store-models) provide current service mappings, but they cannot choose the data model for us.

## analytical files, warehouses, and lakehouses

An operational database answers current application questions and accepts transactions. Analytical systems are optimized to scan history, combine sources, and calculate aggregates. Running unbounded analytical work against a production database can degrade the application and produce results that change during the query.

For many of our projects, Parquet files in S3 or Azure Data Lake Storage queried with DuckDB provide a simple analytical layer. Athena, Redshift, Azure Data Explorer, Microsoft Fabric, Databricks, BigQuery, Snowflake, and similar services become relevant when data size, concurrency, governance, or organizational reporting exceeds that model.

Open table formats such as [Apache Iceberg](https://iceberg.apache.org/docs/latest/) add table metadata, snapshots, schema and partition evolution, and coordinated writes over data files in object storage. They solve real problems for large analytical tables, but add catalogs, maintenance, compatibility decisions, and operational state. A directory of Parquet snapshots is often enough before those pressures appear.

## connect applications through a bounded interface

A web page or visualization should use one of three patterns:

1. **static publication:** a build queries private sources and writes a reviewed CSV, JSON, GeoJSON, Parquet, or other public snapshot;
2. **bounded API:** an authenticated service accepts documented parameters and returns only authorized records and fields; or
3. **local analytical execution:** DuckDB or another approved engine queries files in a trusted local or browser context whose accessible data are already suitable for that user.

Do not place a database password in browser JavaScript, a repository, a downloadable configuration file, or a public build. Do not expose a generic SQL endpoint when the application needs three defined operations. Parameterize queries, validate types and limits, authorize the requested records rather than only the endpoint, paginate large results, and apply timeouts and cost controls.

For our static-state applications, the first pattern should be the default when the data change slowly enough. It minimizes runtime infrastructure and exposes a publication artifact that can be reviewed. It also makes the artifact public, so private data must be removed before the build rather than hidden by the interface.

## schemas, migrations, and durable exports

Database structure is part of the source code. Keep ordered migrations or another declarative schema history under revision control. A migration should identify constraints, indexes, reference data, and data transformations rather than relying on the undocumented current state of one server.

A durable database plan includes:

- logical exports in open or broadly implemented formats, not only provider snapshots;
- native backups for efficient point-in-time operational recovery;
- versioned schemas, migrations, and reference vocabularies;
- checks that compare row counts, identifiers, nulls, relationships, and representative queries after restoration or migration;
- a record of engine and extension versions;
- explicit ownership for accounts, upgrades, monitoring, retention, and cost; and
- a tested procedure for rebuilding derived search, cache, tile, and vector stores.

Provider snapshots are valuable but may be restorable only within that provider, account, region, or engine family. Keep them for operational recovery while maintaining a separate, tested path for portability.

## a selection sequence

Use the least complex store that satisfies the real workload:

1. Can open canonical files and their metadata meet the requirement?
2. Can DuckDB query those files or can SQLite manage the local transactional state?
3. Do concurrent writers, relational constraints, controlled access, or a long-running service justify PostgreSQL or another client/server relational engine?
4. Does a measured access pattern justify a specialized non-relational store?
5. Do analytical scale and concurrency justify a warehouse or lakehouse table system?
6. Can the data still be exported, interpreted, verified, and rebuilt outside the selected product?

Starting with the last category tends to convert imagined scale into immediate operational complexity. Progressive storage lets the system grow while its information remains understandable.
