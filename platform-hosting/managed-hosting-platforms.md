# managed hosting platforms

Managed web platforms connect a source repository or uploaded artifact to a build system, deployment history, content-delivery network, TLS certificate, custom domain, and often serverless functions or storage. They can make previews and routine releases remarkably convenient. They also place more of the build and delivery control plane inside a provider account.

The original platform-hosting note linked to ZEIT/Now. That service became [Vercel](https://vercel.com/docs/deployments), one of several current source-connected platforms. We no longer use this category as the automatic home for `/framework/` sites because Observable Framework already gives us a portable static artifact, and our normal AWS pattern gives us direct control over the origin, IAM, retention, delivery configuration, and related data. A managed platform can still be the right choice when its operational convenience meets the project’s governance needs.

## what the platform manages

A typical managed deployment may:

1. receive repository access through an application or OAuth grant;
2. clone source and dependencies into a provider build environment;
3. expose configured environment variables and secrets to that build;
4. retain logs, caches, artifacts, and preview deployments;
5. publish files or functions through the provider’s network; and
6. record visitor, account, deployment, and operational events.

This is not inherently less secure than an AWS deployment we assemble ourselves. It is a different allocation of responsibility. The convenience is valuable only when we understand the provider’s identities, data flows, defaults, limits, and exit path.

## representative platforms

The following examples illustrate the category rather than a permanent ranking:

| platform | characteristic fit | questions to examine |
| --- | --- | --- |
| [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) | straightforward static project or documentation site connected to a GitHub repository | repository visibility, build workflow permissions, Pages limits, visitor logging, and lack of a general private application backend |
| [Cloudflare Pages](https://developers.cloudflare.com/pages/) | static or full-stack site closely integrated with Cloudflare delivery and Workers | repository access, build and function limits, bindings, logs, data locations, and growing dependence on Cloudflare services |
| [Netlify](https://docs.netlify.com/deploy/create-deploys/) | source-connected builds, deploy previews, forms, functions, and edge behavior | build plugins, environment variables, third-party integrations, function portability, retention, and plan limits |
| [Vercel](https://vercel.com/docs/deployments) | preview-oriented deployment and frameworks that use Vercel’s runtime features | framework coupling, function and edge behavior, build output, regions, observability data, and cost at scale |
| [AWS Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html) | Git-based static, single-page, or supported server-rendered applications within AWS | generated resources, IAM ownership, build roles, backend coupling, branch access, logs, and migration to ordinary AWS services |
| [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) | repository-driven static applications with Azure Functions, Entra ID, and Azure DevOps integration | repository and Entra permissions, managed API behavior, staging environments, regions, logs, and enterprise policy |
| [Firebase Hosting](https://firebase.google.com/docs/hosting) | static and single-page applications integrated with Firebase and Google Cloud services | project ownership, security rules, analytics defaults, function and database coupling, regions, quotas, and export |

Other providers can offer the same general pattern. A feature matrix ages quickly; evaluate the current service against a written workload and governance profile.

## previews are publications too

Branch and pull-request previews are useful for review, but they can quietly publish unapproved data. A difficult-to-guess URL is not access control. Determine whether previews are public, authenticated, indexed, retained, and built with production secrets.

Use separate data, credentials, and service identities for preview work. Do not allow code from an untrusted contribution to execute in a build environment that can read production secrets. Delete previews and build artifacts according to a documented retention rule, while preserving the review evidence actually required by the project.

## repository and build access

Grant the provider access only to the repositories and organizations it needs. Review what its installed application can read and write, who can connect a new repository, and which events trigger a production build.

Build-time credentials should be short-lived or narrowly scoped where the platform supports them. An environment variable is not safe merely because it is masked in a dashboard: build scripts and dependencies may read it, and code may accidentally copy it into logs or the public bundle. Separate source retrieval, private-data retrieval, artifact publication, and infrastructure administration rather than placing all authority in one token.

## portability

A static `dist` directory is highly portable. Provider-specific redirects, image services, functions, middleware, databases, identity, queues, and edge APIs are not. Before adopting one, identify:

- which behavior follows open web standards or a documented portable artifact;
- which behavior exists only in provider configuration or generated resources;
- how domains, certificates, redirects, and release history will move;
- whether function code can run in another standard runtime;
- how databases, uploaded files, logs, and account records can be exported; and
- how the service will be reproduced if the provider changes limits or discontinues a feature.

Portability does not require avoiding every useful managed feature. It requires making the dependency intentional and maintaining a proportionate exit plan.

## privacy and security review

Review the provider as a participant in the application’s data flow:

1. What source, secrets, and private dependencies enter its build environment?
2. What build logs, caches, previews, artifacts, and metadata does it retain?
3. What visitor request data and application telemetry does it collect?
4. Which people, teams, support staff, integrations, and machine identities can access the project?
5. Which regions, subprocessors, contracts, and deletion procedures apply?
6. Which security headers, authentication rules, firewalls, and rate limits are defaults, and which remain our work?
7. How are provider incidents, account takeover, a compromised dependency, and an erroneous deployment detected and recovered?

The [privacy](../data-privacy/) and [security](../data-security/) principles apply whether infrastructure is assembled directly or presented through a convenient dashboard. A managed platform reduces some operational work; it does not transfer accountability for the content, people, and data we choose to place there.

## when to choose a managed platform

A managed platform is attractive when preview collaboration, integrated deployment, or a supported runtime materially reduces project risk and work; when the team can govern the provider account; and when the data and exit requirements are compatible with the service.

Our default remains [a static Observable Framework build deployed through AWS](static-sites-with-observable-and-aws.md). We depart from it for a stated requirement, not because a service offers a one-click deployment.
