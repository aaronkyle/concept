# platform hosting

Hosting is the set of systems and responsibilities that make a publication or application available to its audience. It includes more than a server: domain names, TLS certificates, object or database storage, content delivery, application runtimes, identities, secrets, logs, backups, monitoring, deployment automation, and incident response all become part of the operating boundary.

The original page contained two historical links: one to ZEIT/Now, which became Vercel, and one to an early Datasette publishing service. Both projects remain relevant examples, but a list of providers does not explain what we need to host or what control we retain. This section now begins with the application’s requirements and selects the least complex hosting model that can satisfy them.

## our usual approach

For the public [`/framework/` data applications](https://github.com/aaronkyle/framework), we generally prefer a static publication architecture:

1. authored pages, code, schemas, and configuration remain in a versioned repository;
2. [Observable Framework](https://observablehq.com/framework/) builds Markdown, JavaScript, and selected data into a static `dist` directory;
3. data loaders query or transform private sources during a controlled build rather than exposing those sources to every visitor;
4. the reviewed build artifact is deployed to Amazon S3 in an AWS account we control;
5. CloudFront provides HTTPS, caching, a custom domain, and a controlled path to a private S3 origin; and
6. narrowly scoped APIs or event handlers are added only when a requirement cannot be satisfied safely in the static build.

This is a preference, not a rule that every application must be static. [Archive](https://archive.categori.se/), [Docs Repo](https://docs-repo.categori.se/), [Team Spaces](https://team-spaces.categori.se/), and related applications may require authenticated editing, search, workflows, or private records. The preferred pattern is to keep the public reading surface static and bounded where practical, then isolate dynamic capabilities behind explicit identities and authorization.

## why build static publications

A static build produces a finite set of files that can be inspected before release. It removes the public application server, live template engine, visitor session, and production database from requests that only need to read approved content. It can also be cached efficiently, served inexpensively, reproduced from source, and moved to another static host.

This supports several goals in the [main application concept](../README.md):

- **data ownership:** canonical sources, build rules, and public artifacts remain in storage and repositories governed by the project;
- **data minimization:** the build can select, aggregate, or anonymize only what an audience needs;
- **security:** fewer public runtimes and administrative surfaces can mean fewer opportunities for compromise;
- **portability:** ordinary HTML, CSS, JavaScript, images, and data files can be served by many providers; and
- **accountability:** a release can be connected to its source commit, build process, review, and storage location.

Static does not mean private, secure, or independent by default. Every file delivered to the browser must be treated as public to that audience. The build system can leak source data, credentials, caches, source maps, or environment values. AWS remains an external provider, and our configuration, identities, logs, costs, backups, and recovery procedures remain our responsibility.

## separate build, storage, and delivery

It helps to treat three stages independently:

- the **build system** reads approved sources and creates the release artifact;
- the **origin** stores the exact files that constitute a release; and
- the **delivery layer** handles public requests, TLS, caching, domains, and protective controls.

Observable Framework is a build tool, not a hosting provider. S3 is object storage, not a complete website-delivery policy. CloudFront is a content-delivery service, not the canonical store. Keeping these roles distinct makes it possible to change one layer without redefining the content or data model.

## choose an approach from the workload

| approach | useful when | principal responsibility |
| --- | --- | --- |
| static files and object storage | readers consume reviewed snapshots and browser-side interaction | control the build, public artifact, cache behavior, and origin access |
| managed static platform | a team values integrated previews and deployments over direct infrastructure control | understand provider access, build execution, retention, limits, and exit |
| functions or serverless APIs | a bounded event or request needs trusted code, a secret, or authorization | constrain identity, input, output, duration, logs, and downstream permissions |
| managed application platform | a web process or container must run continuously with reduced infrastructure work | configure runtime, networking, identity, scaling, data services, and observability |
| virtual machine or self-hosted server | the application needs OS-level control or does not fit a managed runtime | patch and harden the entire host, proxy, runtime, network, backup, and recovery path |

Do not choose a dynamic platform merely because it can also serve static files. Do not force an editing or transaction system into a static build when it needs authenticated, concurrent state. The important choice is the boundary between material prepared for publication and operations that require a trusted runtime.

## control is a set of decisions

“Owning the data” does not mean that no provider processes or stores it. It means the project can identify the canonical copy, govern access and lifecycle, export it in usable formats, verify every published representation, and leave a provider without losing its records or meaning.

For each platform, establish:

1. which account and organization own the resources;
2. where source, build cache, release artifact, logs, backups, and secrets reside;
3. which human and machine identities can read, change, or publish them;
4. which visitor and operational data the provider records;
5. which regions, subprocessors, contracts, and retention rules apply;
6. how deployments are reviewed, identified, rolled back, and withdrawn;
7. how availability, cost, configuration drift, and security events are observed; and
8. how the application and its history can be restored or moved elsewhere.

These questions connect hosting to [application architecture](../application-architecture/), [data storage](../data-storage/), [privacy](../data-privacy/), [security](../data-security/), [digital publishing](../digital-publishing/), and [revision control](../digital-publishing/revision-control.md). A hosting selection is therefore part of the application concept, not an isolated purchasing decision.

## discussions in this section

- [static sites with Observable Framework and AWS](static-sites-with-observable-and-aws.md) develops the preferred build, storage, and delivery pattern.
- [managed hosting platforms](managed-hosting-platforms.md) compares source-connected services such as GitHub Pages, Cloudflare Pages, Netlify, Vercel, AWS Amplify Hosting, Azure Static Web Apps, and Firebase Hosting.
- [dynamic applications and self-hosting](dynamic-applications-and-self-hosting.md) considers functions, managed runtimes, containers, virtual machines, Datasette, and the obligations created by a live service.

Provider features and prices change. These pages describe architectural categories and selection questions, then link to maintained official documentation for current product behavior.
