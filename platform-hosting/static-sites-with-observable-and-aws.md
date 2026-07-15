# static sites with Observable Framework and AWS

Our usual public-data publication pattern builds a static site with [Observable Framework](https://observablehq.com/framework/) and deploys the result to Amazon S3 behind Amazon CloudFront. The important feature is not a particular command or AWS console sequence. It is a reviewable boundary between private source work and a finite set of public files.

## the publication flow

```text
canonical sources
       │
       ▼
versioned pages, loaders, schemas, and build configuration
       │
       ▼
controlled build and validation
       │
       ▼
versioned static artifact in S3
       │
       ▼
CloudFront, TLS, domain, and cache policy
       │
       ▼
reader's browser
```

The build is the publication gate. It may read source files, query a database, call an API, or calculate derived values, but its output should contain only data approved for the target audience.

## build with Observable Framework

Observable Framework compiles Markdown pages, JavaScript, styles, and referenced files into a static output directory. Its [data loaders](https://observablehq.com/framework/data-loaders) run during preview or build and create static snapshots that pages can load without connecting a visitor to the original database or API.

This is useful for data applications because a loader can:

- select only fields intended for publication;
- aggregate small groups or sensitive values;
- convert a source into CSV, JSON, Parquet, an image, or another efficient representation;
- attach a release date, schema, provenance, or quality note; and
- fail the build when retrieval or validation does not succeed.

The loader is trusted application code. It may have access to credentials and private data, so review its query, dependencies, logs, temporary files, cache, and output. A secret that is written to `dist`, substituted into browser JavaScript, or exposed in a source map is public regardless of where the source repository lives.

The normal local checks are:

```bash
npm ci
npm run dev
npm run build
```

The preview supports editorial and interface review. The production build is the artifact to inspect and deploy. Record the source commit, dependency lockfile, build environment, validation results, and a digest or manifest for important releases.

## store the release in S3

S3 stores objects as bytes, keys, and metadata. Use a dedicated location for public build output rather than mixing it with canonical sources, uploads, backups, or intermediate data. The [object-storage discussion](../data-storage/working-with-s3.md) covers versioning, encryption, checksums, lifecycle rules, and AWS-to-Azure equivalents.

A defensible release process should:

1. build into a clean output directory;
2. inventory and scan the complete artifact;
3. upload to a versioned release prefix or staging location;
4. verify object metadata and cache policy by file type;
5. promote or switch delivery to the complete release atomically where practical;
6. invalidate only paths that cannot wait for their previous cache lifetime; and
7. retain or expire prior releases according to the correction and recovery policy.

Avoid a deployment that deletes the current site before the replacement is complete. Hashed framework assets can normally be cached for a long time; HTML and mutable data entry points need shorter or explicitly revalidated cache behavior.

## keep the S3 origin private

For this architecture, prefer a regular S3 bucket origin with S3 Block Public Access enabled. Place CloudFront in front and grant it only the required access through [Origin Access Control](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html). AWS recommends OAC over the legacy Origin Access Identity mechanism.

This differs from enabling the S3 “static website” endpoint. AWS documents that CloudFront OAC does not work with an S3 website endpoint, which must be treated as a custom origin. A private bucket origin therefore needs CloudFront behavior for index documents, not-found responses, and any single-page-application routing the publication requires.

Do not grant public bucket access merely because the files are intended for public delivery. A private origin preserves one reviewed delivery path and makes it harder to bypass CloudFront headers, domain policy, or access logging. It does not make the delivered content confidential.

## use CloudFront as the delivery layer

CloudFront can provide a custom domain, TLS, caching, compression, and a distributed public endpoint. Its configuration is part of the release and should be represented as infrastructure as code where practical.

Review at least:

- the exact origin and allowed methods;
- OAC and the S3 bucket policy;
- default root object and error behavior;
- redirects and stable URLs;
- cache keys, cache lifetimes, and invalidation practice;
- response security headers and content types;
- access logging, log protection, retention, and analysis;
- DNS and certificate ownership and renewal;
- optional firewall, geographic, or signed-request controls; and
- budgets, quotas, and alarms.

CloudFront signed URLs or cookies can bound delivery for some cases, but anything a permitted browser downloads can be retained or shared. Sensitive record-level authorization normally needs a dynamic application that checks the caller and requested resource.

## the Azure counterpart

In Microsoft-oriented workplaces, the same portable Observable Framework output can be deployed through Azure. [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) provides repository-driven builds, globally distributed static assets, preview environments, optional managed functions, and integrated authentication. [Azure Blob Storage static websites](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website) provide a more direct file-hosting model.

The services do not map control-for-control onto the AWS pattern. Microsoft documents that files served through Blob Storage's `$web` static website endpoint use anonymous read requests and that authentication and authorization are not supported there. Custom headers and domains also require an additional delivery service. Select Static Web Apps, Blob Storage with an appropriate Azure delivery design, or another pattern from the organization’s identity, network, public-origin, and governance requirements; do not translate service names and assume the security boundary remained the same.

## deployment identity

Humans and build jobs should not use long-lived administrator credentials. Give the deployment process a dedicated IAM role with permission only to the intended artifact location, required invalidations, and related release operations. Prefer short-lived credentials obtained through the CI system’s supported federation mechanism.

Separate roles for building, deploying, and administering infrastructure where the risk justifies it. A build that can read private sources does not automatically need permission to change public DNS or delete prior releases. CloudTrail and other logs should make significant changes attributable without recording secrets or unnecessary personal data.

## add dynamic capabilities narrowly

Static pages cannot safely hold a secret, authorize a private record, receive a protected upload, or perform a privileged mutation. When one of those operations is required, add a small trusted boundary—often API Gateway and Lambda in our AWS-oriented work—with a dedicated IAM role and explicit input, identity, and output rules.

Keep the static reading surface independent where possible. A failed search, contact form, or editing function should not necessarily prevent readers from reaching public documentation. Do not turn a bounded function into an unexamined general backend.

## privacy, security, and recovery checks

Before release, ask:

1. Does the artifact contain only approved public values and assets?
2. Do HTML, JavaScript, JSON, maps, downloads, structured metadata, and source maps agree on that boundary?
3. Can the build reach more source data than it needs?
4. Are build and deployment identities separate and least-privileged?
5. Are the origin, logs, caches, prior releases, and backups governed deliberately?
6. Can a named release be reproduced and restored without the developer's workstation?
7. Can a correction or withdrawal reach cached and downloadable representations?
8. Could the site be redeployed to another static host from its documented sources and artifact?

Static publication reduces the live system exposed to ordinary readers. It does not replace the [privacy](../data-privacy/privacy-by-architecture.md), [security](../data-security/), [storage](../data-storage/), or [digital-publishing](../digital-publishing/) reviews that make the boundary trustworthy.

## references

- [Observable Framework deployment](https://observablehq.com/framework/deploying)
- [Observable Framework data loaders](https://observablehq.com/framework/data-loaders)
- [AWS: restrict access to an S3 origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
- [AWS: block public access to S3 storage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
- [AWS: CloudFront response headers policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html)
- [Microsoft: Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)
- [Microsoft: static website hosting in Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
