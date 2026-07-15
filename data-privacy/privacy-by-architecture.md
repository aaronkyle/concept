# privacy by architecture

Privacy should shape where computation occurs, what crosses each boundary, and which copies survive. A notice or access policy written after an application is built cannot remove data that the design never needed to collect.

This page applies the general principles in the [data-privacy overview](README.md) to static data applications and small serverless operations. These patterns can reduce exposure, but no service or cloud product supplies privacy automatically.

## static-state data applications

The public [`aaronkyle/framework`](https://github.com/aaronkyle/framework) repository contains Observable Framework projects that compile source pages and data into static sites. Observable describes Framework as an [open-source static site generator for data applications](https://observablehq.com/framework/). Its [data loaders](https://observablehq.com/framework/data-loaders) can query and transform sources during a build, producing static snapshots rather than issuing the same source query for every visitor.

This pattern provides useful privacy properties when used deliberately:

- the public application does not need credentials for the source system;
- aggregation, suppression, and field removal can happen before publication;
- a release is a bounded collection of files that can be inspected before deployment;
- visitors do not need individual access to a warehouse merely to view an approved result; and
- the public site can operate without recording accounts, preferences, or detailed interaction events.

Static does not mean private. Every HTML, JavaScript, source map, image, and data file sent in the build should be assumed downloadable and reusable. Client-side filtering hides rows from an interface but does not remove them from the dataset. A static host and CDN still receive requests, and third-party scripts can still observe visitors.

### treat the build as a publication boundary

Separate source data, build workspace, loader cache, and published output. Review the output itself—not only the page displayed in a browser—for unexpected fields, small groups, precise coordinates, comments, metadata, source maps, credentials, and unused data files. Ensure that CI logs and build artifacts do not preserve protected inputs longer or more broadly than intended.

Prefer an aggregate designed for the public question over a row-level source with names removed. When a record must be corrected or deleted, identify every generated snapshot and rebuild, invalidate, or retire the affected publication.

### keep browser requests intentional

Host stable assets directly where practical. Avoid third-party fonts, scripts, maps, analytics, and embeds unless their value justifies the data flow. Set browser security and privacy headers, including a restrictive Content Security Policy and `Referrer-Policy`, and inspect the deployed network requests. Static generation reduces server-side state; it does not prevent browser-side tracking.

## use dynamic functions for narrow operations

Some applications require an authenticated upload, metadata update, search, permission check, or signed download. A function such as AWS Lambda can provide a small boundary for that operation without turning the public site into a broadly privileged server.

Give each function a specific purpose and validate its caller, input, requested action, and resource. Authentication answers who the caller is; authorization must still determine whether that caller may act on this project, document, or object. Limit request size, type, rate, and processing time where appropriate. Design retryable operations to be idempotent so that a repeated event does not duplicate or corrupt a privacy-relevant change; AWS includes idempotency in its [Lambda best practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html).

A smaller runtime surface does not eliminate downstream copies. Lambda sends function output written to standard logging streams to CloudWatch Logs when its role permits it. AWS documents this default in [sending Lambda logs to CloudWatch](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html). Do not log complete request events, authorization headers, document contents, presigned URLs, or personal records. Define log retention, redaction, access, and deletion as part of the function design.

## use IAM as a boundary, not as a privacy policy

An AWS Lambda execution role determines which AWS resources the function may call. AWS recommends [temporary credentials for workloads and least-privilege permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html), and its Lambda guide explains how to [grant least privilege to an execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).

For these applications:

1. give each function or closely related function group its own runtime role;
2. allow only the required actions on specifically named resources and prefixes;
3. separate human administration, deployment, build, and runtime identities;
4. use roles and temporary credentials rather than placing long-lived access keys in code, client bundles, repositories, or build output;
5. constrain invocation with resource policies, conditions, account, distribution, API, or source identifiers where supported;
6. use IAM Access Analyzer and access history to find public, cross-account, wildcard, and unused permissions; and
7. review permissions whenever the function's purpose or data flow changes.

Infrastructure permission is only one layer. A role that permits a function to read every project object does not establish which application user may receive a particular object. Enforce that relationship in an auditable authorization layer and test attempts to cross account, team, project, and object boundaries.

## separate public and protected objects

Do not mix public build output and protected source documents merely because both fit in S3. Use distinct buckets or clearly governed access boundaries, block public access to protected storage, and avoid permissions that turn a naming convention into the only control.

For a CloudFront distribution backed by a private S3 origin, AWS recommends [origin access control](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) so the bucket can reject direct public retrieval. Use signed URLs or cookies for bounded delivery where appropriate, while remembering that a recipient can forward a usable link or retain the downloaded content.

Amazon S3 [presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html) grant time-limited operations using the permissions of the principal that generated them. Treat them like bearer capabilities:

- generate them only after application authorization;
- scope the method, bucket, object key, content constraints, and lifetime as tightly as practical;
- do not record the full URL in analytics, support tickets, chat, or logs;
- prevent an upload from replacing an existing object unless replacement is intended; and
- understand that expiry prevents a new request after the deadline but does not revoke a copy already downloaded.

## keep secrets and protected inputs out of the client

Anything in a static bundle or browser environment is available to the person receiving it. API keys that must remain secret belong behind a server-side boundary. A Lambda function should obtain only the secrets it needs through a managed, access-controlled mechanism; source code and general-purpose environment files should not become informal secret stores.

Build-time loaders may need private credentials, but their output and cache require separate review. Confirm that loader errors, standard output, generated files, CI artifacts, and source maps do not reproduce the credential or protected source record.

## design observability with retention

Operational evidence is necessary for detecting abuse, investigating failures, and reviewing consequential actions. Collect events that answer defined operational or accountability questions rather than complete content by default.

For each CDN, API, function, storage, identity, and application log, document:

- which fields it receives and which are redacted;
- whether network addresses, user identifiers, object keys, or query strings are necessary;
- who can search or export it;
- its retention and disposal schedule;
- alerts for unusual access or permission changes; and
- how an incident hold temporarily changes ordinary deletion.

Audit access to protected data without copying the protected data into the audit event. Separate a stable event identifier and necessary actor/action/resource facts from free-form diagnostic text.

## include AI services in the data-flow boundary

AI-assisted search, extraction, summarization, or drafting can create additional copies in prompts, provider logs, outputs, feedback, embeddings, and indexes. Route only the minimum necessary context. Separate public, internal, confidential, and restricted sources before retrieval; enforce access before selecting context, not after a model has generated a response.

Record the provider, model or service class, account controls, region where relevant, retention, training-use terms, subprocessors, and deletion behavior. Do not assume that a model or vector representation is anonymous. The [EDPB opinion on AI models](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en) calls for a case-specific assessment of whether people can be identified or personal data extracted.

## apply the pattern to current applications

- For [archive](https://archive.categori.se/) and [docs repo](https://docs-repo.categori.se/), keep originals and private derivatives in protected storage; authorize each preview, extraction, and signed download; and keep public publishing a separate action.
- For [team spaces](https://team-spaces.categori.se/) and [workspace management](https://workspace.categori.se/), test authorization across accounts, teams, projects, tasks, documents, and relationship queries rather than relying on a single signed-in state.
- For [OpenGeo.Tools](https://opengeo.tools/), publish intentionally generalized or approved geographic snapshots while protecting precise coordinates, contributor identity, unpublished infrastructure, or restricted community information.
- For static reports reached through [categori.se](https://categori.se/), precompute only the fields and precision required for the public view, inspect the built files, and avoid adding visitor tracking merely because a third-party dashboard service includes it by default.

These are review parameters for the architecture, not verified statements about every present deployment.

## a release gate for privacy

Before deploying a feature or static build, confirm:

1. the purpose and required data are documented;
2. public, internal, confidential, and restricted inputs are separated;
3. the published artifact contains only reviewed fields and files;
4. browser requests and third-party recipients are inventoried;
5. authentication and object-level authorization tests pass;
6. runtime and deployment roles have distinct, least-privilege policies;
7. protected buckets reject unintended public and direct-origin access;
8. logs exclude secrets and unnecessary personal content and have retention rules;
9. correction, deletion, cache invalidation, and credential revocation have been exercised; and
10. the user-facing explanation matches the observed data flow.
