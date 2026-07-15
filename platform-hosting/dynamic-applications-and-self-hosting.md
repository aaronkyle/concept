# dynamic applications and self-hosting

A dynamic application runs trusted code in response to requests or events. It may authenticate a person, authorize access to a record, accept an upload, perform a search, write to a database, call a protected service, or coordinate a workflow. These capabilities cannot be secured by a static browser bundle alone because code and data sent to the browser are under the visitor’s control.

Use a live service when the application concept requires one. Keep the boundary narrow: public reading can often remain a static publication while editing, private search, account management, and mutations use authenticated APIs or workspaces.

## functions for bounded operations

Serverless functions execute code without requiring the project to maintain a continuously running server. [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html), Azure Functions, and Cloud Run functions are common examples.

They fit operations such as:

- validating and recording a small form submission;
- issuing a constrained query after authorization;
- processing an object-storage event;
- generating a temporary derived file;
- receiving a verified webhook; or
- starting a controlled background workflow.

“Serverless” does not mean infrastructure-free. Define the function’s runtime, deployment package, network access, timeout, concurrency, retry behavior, identity, secrets, logs, and downstream permissions. An event may be delivered more than once, and a retry can repeat a side effect; handlers should be idempotent where the workflow requires it.

In our AWS-oriented architecture, give each Lambda function a narrowly scoped IAM role rather than sharing a general application role. Put authentication and resource-level authorization at the trusted boundary. Limit input size and type, validate every field, avoid returning internal errors, and prevent logs from becoming a second store of submitted or sensitive data.

## managed web runtimes

A managed application service runs a web process while the provider handles much of the host operating system and scaling. Examples include [Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/overview), Heroku, Render, and DigitalOcean App Platform. These are useful for conventional Python, Node.js, Java, .NET, PHP, or similar applications that expect a long-running HTTP process.

The platform may simplify deployment, TLS, health checks, scaling, and logs. The project still owns application dependencies, authentication, authorization, data migrations, secrets, configuration, availability design, and recovery. Verify filesystem persistence: many managed runtimes treat the local application filesystem as ephemeral, so uploads and canonical records belong in a documented database or object store.

## managed containers

Containers package an application and its user-space dependencies behind a consistent process interface. [AWS ECS on Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html), [Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/overview), and [Google Cloud Run](https://cloud.google.com/run/docs/overview/what-is-cloud-run) run containers without requiring the project to administer the underlying cluster or virtual machines.

Containers are useful when a function is too constrained, the runtime has system dependencies, or the same image should run in local and hosted environments. They improve packaging portability but do not make the entire service portable: identity, networking, load balancing, secret management, databases, logs, autoscaling, and deployment policies remain platform-specific.

Pin and scan base images, rebuild them for security updates, run as a non-root user where possible, use a read-only filesystem and dropped capabilities where supported, and publish only required ports. A container boundary does not excuse an overprivileged cloud identity or a publicly reachable database.

## virtual machines and self-hosted servers

A virtual machine or physical server provides the most OS-level control and the largest maintenance surface. The project becomes responsible for:

- operating-system and runtime patching;
- user and SSH access;
- firewall, network, and exposed-port configuration;
- reverse proxy, TLS, domains, and certificate renewal;
- service supervision and restart behavior;
- host, application, and audit logs;
- storage, database, and backup consistency;
- monitoring, alerting, capacity, and denial-of-service exposure; and
- replacement and restoration when the host fails.

This approach is justified for unusual system dependencies, a required network location, data-residency constraints, or an established operations team. It is rarely the simplest way to serve a static site. “Self-hosted” also does not necessarily mean “on premises”: a project can administer its own application stack on an AWS EC2, Azure Virtual Machine, or another rented server.

Infrastructure should be reproducible from configuration rather than remembered console changes. Separate immutable application releases from mutable data, test backups through restoration, and avoid treating a single server disk as the canonical archive.

## Datasette as a data application

The former section linked to “Datasette Publish,” an early service for turning CSV files into online databases. [Datasette](https://docs.datasette.io/en/stable/) remains a useful open-source application for exploring and publishing SQLite data, with HTML views, a JSON API, filtering, facets, full-text search, metadata, permissions, and plugins.

Datasette is dynamic even when its SQLite database is read-only: a live process receives queries and renders results. Its current [deployment documentation](https://docs.datasette.io/en/stable/deploying.html) covers managed providers, buildpacks, `systemd`, and reverse proxies.

Use it when readers need query and exploration behavior that would be awkward or too large to ship to every browser. Before publication, create a purpose-built database with only approved tables and columns; configure query limits, permissions, metadata, CORS, plugins, caches, and downloads; and determine whether arbitrary SQL or expensive requests could disclose or exhaust resources. A static extract or Observable Framework page is preferable when it fully meets the audience’s need.

## state changes the hosting problem

Once an application accepts accounts, edits, uploads, comments, subscriptions, or other state, define:

1. the authoritative database or object store;
2. identity proofing, session management, and authorization rules;
3. concurrency, validation, and conflict behavior;
4. audit events and their privacy limits;
5. retention, export, correction, and deletion across derived copies;
6. schema migrations and application-version compatibility;
7. backup consistency, recovery objectives, and restoration tests; and
8. incident response for both unauthorized access and destructive mistakes.

A platform can provide building blocks, but it cannot infer the project’s meaning of “may this person edit this record?” or “must this derived file be deleted too?” Those rules come from the [main application concept](../README.md), [data structures](../data-structures/), [privacy](../data-privacy/), and [security](../data-security/).

## a progressive hosting decision

Prefer the first adequate level:

1. static files for reviewed public reading;
2. a narrowly scoped function for a bounded trusted operation;
3. a managed web process or container for sustained application behavior; and
4. an administered virtual machine only when OS-level control is a real requirement.

Complexity should follow demonstrated behavior, not precede it. Every additional runtime, identity, database, queue, network, and administrative interface must be operated for as long as the application depends on it.

## related discussions

- [platform hosting](README.md)
- [static sites with Observable Framework and AWS](static-sites-with-observable-and-aws.md)
- [application architecture](../application-architecture/)
- [working with object storage](../data-storage/working-with-s3.md)
- [privacy by architecture](../data-privacy/privacy-by-architecture.md)
- [data security](../data-security/)
