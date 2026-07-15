# working with object storage

Object storage is the durable file layer for many contemporary data applications. It stores each object as bytes plus a key and metadata, addresses it through an API, and scales without requiring us to manage a filesystem server. Amazon S3 is our usual starting point. In Microsoft-oriented workplaces, Azure Blob Storage and Azure Data Lake Storage provide the corresponding foundation.

This page replaces an earlier tutorial that used `s3cmd`, permanent IAM-user keys, broad `s3:*` permissions, and public bucket policies. Those examples described a period of the project, but they are unsafe as current defaults. Use federated or temporary credentials, least-privilege roles, private origins, and deliberate publication.

## objects are not ordinary files

An object store presents containers and object keys rather than a POSIX filesystem. A key such as `canonical/places/2026-07-15/places.parquet` may look like a directory path, but its slashes are normally naming conventions rather than directories with ordinary file locking and rename behavior.

This difference matters:

- applications should use the object API instead of assuming local filesystem semantics;
- a large object is replaced as an object rather than edited safely in place by several users;
- concurrent writers need version, conditional-write, or application-level coordination;
- listing, copying, renaming, and deleting a large prefix may involve many object operations; and
- mounting a bucket as a filesystem can be useful for compatible read workflows but should not disguise these semantics from an application that needs transactional file access.

Store collaborative record state in a database when atomic multi-record changes or concurrent editing matter. Store source files, immutable versions, analytical snapshots, media, backups, and published assets in object storage.

## AWS and Azure concepts

The services are not identical, but the following concepts help translate an architecture:

| concern | AWS | Azure |
| --- | --- | --- |
| object service | Amazon S3 | Azure Blob Storage |
| analytical namespace | S3 with data-lake services and table formats | Azure Data Lake Storage capabilities on Blob Storage |
| top-level account boundary | AWS account and bucket ownership | subscription, resource group, and storage account |
| object container | bucket | container within a storage account |
| object name | key | blob name |
| human and workload identity | IAM Identity Center, IAM roles, and temporary credentials | Microsoft Entra ID, Azure RBAC, and managed identities |
| temporary delegated URL | S3 presigned URL | user-delegation SAS or other scoped SAS |
| archival or access class | S3 storage classes | Blob access tiers |
| immutable retention | S3 Object Lock | immutable storage policies for Blob Storage |
| event integration | S3 event notifications and EventBridge | Event Grid and storage events |

Use the provider's own terminology in implementation documentation. A conceptual mapping does not imply identical consistency, identity, retention, networking, replication, pricing, or recovery behavior.

## our storage layers

A project may separate responsibilities by bucket, account, storage account, or carefully governed prefix. Stronger boundaries are appropriate when access and lifecycle differ materially.

```text
received/     immutable original objects and capture manifests
canonical/    reviewed sources used by current transformations
derived/      reproducible Parquet, indexes, tiles, and previews
published/    files deliberately approved for public delivery
recovery/     protected exports and backup material
```

Do not make `received/` public because one derived output is public. Do not give a website build role permission to delete recovery objects. Use stable object names or version identifiers for sources and versioned snapshot paths for reproducible analysis. A `latest` pointer can aid convenience, but a published result should identify the immutable version it used.

## access without permanent keys

For people using AWS CLI v2, prefer organizational federation through [IAM Identity Center](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html):

```bash
aws configure sso
aws sso login --profile research-readonly
aws s3 ls s3://example-data/canonical/ --profile research-readonly
```

For AWS services, assign a narrowly scoped role to Lambda, the build runner, container, or instance. Do not place a person's access keys in application source, a `secret.py` file, an image, or a CI variable when workload identity is available.

For Azure, authenticate people through Microsoft Entra ID and workloads through managed identities. Microsoft recommends [authorizing blob access with Entra ID](https://learn.microsoft.com/en-us/azure/storage/blobs/authorize-access-azure-active-directory) rather than distributing storage-account keys:

```bash
az login
az storage blob list \
  --account-name examplestorage \
  --container-name canonical \
  --auth-mode login \
  --output table
```

Grant access at the smallest practical resource and operation scope. Separate read, write, publish, retention administration, and deletion. A function that reads `canonical/project-a/` and writes `derived/project-a/` does not need administrative access to every bucket or storage account.

## ordinary transfers

With an approved AWS profile, explicit copies are easy to review:

```bash
aws s3 cp ./data/places.parquet \
  s3://example-data/derived/places/2026-07-15/places.parquet \
  --profile research-writer

aws s3 cp \
  s3://example-data/derived/places/2026-07-15/places.parquet \
  ./data/places.parquet \
  --profile research-readonly
```

Azure CLI provides the equivalent blob operations with `--auth-mode login`:

```bash
az storage blob upload \
  --account-name examplestorage \
  --container-name derived \
  --name places/2026-07-15/places.parquet \
  --file ./data/places.parquet \
  --auth-mode login
```

Use provider documentation for current command behavior. Test a transfer against a non-production location before using recursive copy or synchronization. Options that mirror deletion can remove valid remote versions quickly; versioning and recovery procedures should be in place before automation is allowed to delete.

For large or repeated transfers, prefer checksummed, resumable provider tools or maintained libraries, record the transfer manifest, and compare object counts, byte sizes, and checksums where supported. Copy completion does not establish that an application can interpret the result.

## secure publication

Keep buckets and containers private by default. For an AWS static site, place CloudFront in front of a private S3 origin and use [Origin Access Control](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html). Publish only the reviewed build prefix. For Azure, use an appropriate private-origin delivery design and verify which identity the CDN or front-door service uses to reach Blob Storage.

Every file downloaded by a browser should be treated as public to that visitor. Client-side JavaScript cannot protect a private JSON or Parquet file it must download. Authorization must occur before the object is returned.

Presigned S3 URLs and Azure shared access signatures are bearer capabilities. Anyone who obtains a still-valid URL may exercise its permitted operation. Restrict the resource, method, and lifetime; prefer user-delegation SAS on Azure where appropriate; avoid placing these URLs in durable logs or analytics; and make revocation and incident response part of the design.

## encryption, metadata, and integrity

Both providers encrypt managed storage, but encryption settings do not decide who is allowed to request decryption. Use IAM or Azure RBAC as the primary authorization model and customer-managed keys only when their control, audit, residency, or separation benefits justify the additional recovery and availability responsibilities.

Object metadata is useful for content type, encoding, cache behavior, or a small stable identifier. Do not rely on provider metadata as the only copy of a rich data description: tools may omit it during download or migration. Store a manifest or sidecar file containing schema, provenance, rights, sensitivity, checksums, and relationships.

Validate checksums at intake and after migrations. Remember that an ETag is not universally a simple content checksum, particularly for multipart or encrypted uploads. Use the provider's explicit checksum features or a project manifest whose algorithm is recorded.

## versions, retention, and recovery

Enable versioning where accidental overwrite or deletion matters, then define lifecycle rules for noncurrent versions. Versioning can increase storage cost indefinitely if retention is left unspecified. Object Lock or Azure immutable storage can protect selected records from alteration, but governance and compliance modes have consequential differences; test retention design before applying it to irreplaceable or regulated data.

Replication improves availability but can also reproduce unwanted changes. It is not automatically an independent backup. Decide which deletions and version states replicate, protect recovery administration separately from production, and rehearse restoration into an isolated location.

Lifecycle policies should follow the information's expected use rather than simply moving every older object to the cheapest tier. Archival tiers may have minimum durations, retrieval charges, delayed access, or regional constraints. Record acceptable recovery time and cost before selecting them.

AWS's [S3 security best practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html), [storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html), and [Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html) documentation provide current implementation detail. Microsoft's [Azure Storage introduction](https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction), [Blob access tiers](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview), and [immutable storage](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview) cover the corresponding Azure choices.

## analytical datasets in object storage

Object storage works especially well for immutable analytical snapshots. Partitioned Parquet can be queried by DuckDB, Athena, Spark, Trino, Azure services, and other engines without loading the whole collection into a transactional database.

Design the dataset rather than merely uploading files:

- choose partitions from common filters and keep individual files large enough for efficient scans;
- maintain an explicit schema and consistent types across snapshots;
- prevent readers from observing a partially written release by writing to a versioned path and publishing a manifest or pointer only after validation;
- compact small files and expire abandoned intermediate uploads;
- distinguish immutable source snapshots from mutable table formats; and
- record the engine and query that produced every published result.

When several writers must update a very large analytical table, an open table format such as Apache Iceberg can coordinate snapshots and schema evolution. That is a further system—with catalog and maintenance responsibilities—not a property gained by placing Parquet files in a bucket.

## operational checklist

Before an object-storage area becomes authoritative, confirm:

1. the account, region, residency, ownership, and responsible administrators;
2. whether objects are received, canonical, derived, published, cached, or recovery material;
3. separate identities and least-privilege policies for intake, processing, publication, and recovery;
4. public-access blocks and the exact private-origin publication path;
5. encryption, key ownership, rotation, and recovery decisions;
6. versioning, immutable-retention, replication, lifecycle, and deletion behavior;
7. inventory, manifest, schema, checksum, provenance, and validation procedures;
8. access, configuration, cost, capacity, and failed-operation monitoring;
9. a tested restore and provider-exit procedure; and
10. a documented mapping if the same architecture must operate in both AWS and Azure.

Object storage makes durable bytes readily available. The project must still make those bytes intelligible, governed, secure, and recoverable.
