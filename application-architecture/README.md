# application architecture

Application architecture describes how the system divides responsibility: which
component owns a record, where a rule is enforced, how one activity leads to the
next, and which representations may cross a publication boundary. It should help
us reason about the application before a hosting platform or software framework
makes those decisions for us.

This discussion replaces the former `server-design` section. Those notes mixed
content-management systems, browser permissions, AWS commands, containers,
infrastructure templates, and workstation disk repair under an assumption that a
web application would revolve around a persistent server. The useful questions
remain, but a server is now only one possible runtime. A public experience may be
a static build, a trusted operation may run in a short-lived function, and a
stateful workspace may use a managed application service. The architecture is the
relationship among those responsibilities, not the machine on which they happen
to run.

## begin with responsibilities

The categori.se projects explore a connected set of responsibilities:

- [Archive](https://archive.categori.se/) accepts source material, preserves file
  identity, extracts observations, and supports metadata curation;
- [Docs Repo](https://docs-repo.categori.se/) organizes files within projects and
  supports editing, previews, revision, and publication preparation;
- [Team Spaces](https://team-spaces.categori.se/) connects projects, tasks,
  documents, decisions, and people in collaborative work;
- [Workspace Management](https://workspace.categori.se/) develops the wider
  relationships among accounts, teams, requirements, sources, and project work;
  and
- [OpenGeo.Tools](https://opengeo.tools/) tests catalog, map, and spatial-data
  workflows in the browser.

These names are useful working boundaries, not an instruction that every concern
must become an independent service. A component should own a coherent set of
rules and state. We should split it when a distinct trust boundary, lifecycle,
data owner, or operating requirement justifies the cost—not merely because two
screens have different names.

## four boundaries to make visible

| boundary | question to answer |
| --- | --- |
| information | What is the canonical source, and which indexes, previews, extracts, and publications are derived from it? |
| responsibility | Which component may create, interpret, revise, approve, publish, or delete each kind of record? |
| trust | Which identity may perform an action on this particular resource, and where is that decision enforced? |
| execution | Can the work happen in a static build or browser, or does it require trusted code, protected credentials, or durable state? |

The boundaries overlap, but they are not interchangeable. Moving a file into an
S3 bucket changes its storage location. Publishing a reviewed representation of
that file changes its audience and obligations. Giving a Lambda function access
to it changes the identities and actions in the trust model. Each transition
should be deliberate and observable.

## a working application shape

At a high level, information moves through a sequence such as:

```text
sources
  -> intake and extraction
  -> preserved files and canonical records
  -> project relationships, review, and decisions
  -> approved publication profile
  -> static or interactive public representation
```

Identity, authorization, provenance, validation, logging, retention, and recovery
run across the sequence. They are not finishing steps that can be added after the
interfaces work.

The arrows do not imply that each stage must copy all the data into a new system.
They identify changes in responsibility. For example, extraction produces a
machine observation about a preserved file; curation may accept or correct that
observation; publication selects an approved value for a defined audience. Those
states should remain distinguishable even when one database stores them all.

## static reading and dynamic stewardship

Most public reading does not require a live application server. A reviewed build
can turn approved content and data into static HTML, JavaScript, styles, and
bounded data files. This reduces the public runtime surface, supports caching and
preservation, and makes the published state easier to inspect. Our current
[hosting approach](../platform-hosting/static-sites-with-observable-and-aws.md)
uses Observable Framework with an AWS S3 origin and CloudFront delivery where
that pattern fits.

Stewardship remains dynamic. Signing in, uploading a source, changing metadata,
approving a release, or requesting access requires a trusted decision and often
durable state. Those operations can be provided through focused functions or an
application service without turning every public page request into a database
transaction. Static and dynamic are therefore complementary architectural
choices, not competing identities for the whole system.

## state and sources of truth

Every important kind of information needs an accountable home. An architecture
description should name:

1. its canonical representation and responsible component;
2. the identifiers and schema that allow other components to refer to it;
3. which changes are accepted, rejected, or require review;
4. which copies are indexes, caches, previews, backups, or public distributions;
5. how changes and deletions propagate to those copies; and
6. how the system detects and repairs divergence.

“Source of truth” should not mean that one database silently owns every meaning.
A preserved file may be authoritative for its bytes, an extraction event for a
machine observation, a curator for an approved title, and a release record for
what was published. The [data-structures discussion](../data-structures/) develops
these distinctions; the architecture assigns responsibility for maintaining
them.

## interfaces and contracts

Components can communicate through files, direct library calls, database
transactions, HTTP APIs, queues, or events. The interface should match the
required coupling and failure behavior. A local function call is often simpler
and safer inside one application. An API or event becomes useful when a boundary
must be independently deployed, secured, observed, or used by more than one
consumer.

Whatever the mechanism, document the contract: identifiers, schema, allowed
actions, validation, error behavior, versioning, authorization, retry behavior,
and ownership. The [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
provides a machine-readable description for HTTP APIs, but a generated API schema
does not replace decisions about meaning or authority. Webhooks and events should
announce a change and carry enough identity for safe processing; they should not
become an undocumented second canonical record.

## describe the system at several scales

One diagram cannot answer every architectural question. A small, maintained set
is more useful:

- a system-context view shows people, external systems, and the application
  boundary;
- a component view shows responsibilities and interfaces inside that boundary;
- a data-flow and trust-boundary view follows sensitive information and the
  identities that can act on it;
- a deployment view maps those responsibilities to builds, functions, services,
  stores, networks, and providers; and
- short decision records explain consequential choices, alternatives, and what
  would cause us to reconsider them.

The [C4 model](https://c4model.com/) offers one practical vocabulary for context,
container, component, and code views. We do not need to adopt its notation
rigidly; the important practice is to keep conceptual responsibility distinct
from deployment topology.

## section map

- [content workflows and publication boundaries](content-workflows-and-publication-boundaries.md)
  considers repository-first publishing, content-management systems, domain
  applications, and the boundaries among editing, review, and delivery.
- [identity, permissions, and trusted operations](identity-permissions-and-trusted-operations.md)
  considers authentication, authorization, roles, relationships, workload
  identities, and enforcement outside the browser.
- [platform hosting](../platform-hosting/) considers where components run and how
  they are built, delivered, monitored, backed up, and recovered.
- [data storage](../data-storage/) considers files, object stores, databases, and
  portable representations.
- [data privacy](../data-privacy/) and [data security](../data-security/) consider
  harms, controls, incidents, and lifecycle obligations.
- [user-interface design](../ui-design/) considers how the system makes its model,
  state, actions, and permissions understandable to people.
