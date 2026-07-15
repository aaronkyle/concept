# content workflows and publication boundaries

The earlier server-design notes compared traditional and “headless”
content-management systems. The lasting question was not which CMS to install.
It was how authors, structured records, review decisions, and public
representations should relate when the same material may appear in a website, a
data application, a document, an API, or another interface.

## separate the responsibilities

A content workflow usually combines at least four responsibilities:

1. **authoring and editing** — helping people create and revise material;
2. **modeling and storage** — preserving the content, fields, relationships,
   media, versions, and provenance;
3. **review and governance** — deciding whether a change is valid, approved, and
   appropriate for a particular audience; and
4. **representation and delivery** — turning approved source material into web
   pages, feeds, downloads, search indexes, or application data.

A single product can provide all four, but the responsibilities should still be
visible. Otherwise a theme change can alter canonical content, an API response
can expose an internal field, or a draft can become public merely because it is
stored in the same system as published material.

## several useful patterns

### repository-first publishing

Markdown, structured files, data, and code live in revision control. Review uses
commits and pull requests, and a reproducible build creates the public
representation. This fits technical documentation and data applications whose
contributors can work comfortably with files and Git. It gives us a portable,
inspectable source and a strong relationship between revision and release.

Repository-first does not by itself provide a friendly editor, granular record
permissions, complex approvals, or concurrent structured editing. Those needs
may justify a purpose-built interface while the repository remains a publication
source or export.

### coupled content management

A coupled CMS provides editing, storage, templates, and public rendering in one
application. This can make a conventional editorial website easy to operate, but
content models and workflows may become entangled with its themes, plugins, and
runtime. We should confirm export, revision history, field-level modeling,
authorization, dependency maintenance, and provider exit before making it the
canonical home for broader project knowledge.

### headless content service

A headless CMS manages content and provides it through an API while another
application renders the experience. This supports several representations and
lets public delivery be built separately, including as static pages. It also adds
contracts, credentials, cache invalidation, preview behavior, and synchronization
that must be designed and operated. “Headless” changes the delivery boundary; it
does not automatically provide portability or a coherent information model.

### domain application

Archive, Docs Repo, and Team Spaces are not merely content editors. They model
files, projects, tasks, sources, decisions, access, and lifecycle rules specific
to the work. A domain application is appropriate when those relationships and
trusted operations are the point of the system. Its approved records can still
feed a static publication process or a CMS where that is the better editorial
surface.

### hybrid workflow

A hybrid can use a domain application for records and governance, a repository
for reviewed narrative and build logic, and a static site for public delivery.
This is often the practical shape of our current work. It succeeds only when each
kind of information has one accountable canonical home and each transfer has a
defined direction. Unspecified two-way synchronization creates conflicts that no
choice of product can resolve.

## APIs, events, and webhooks

An API should expose a deliberate capability or representation, not every field
that happens to exist in a database. Define its audience, resource identifiers,
schemas, permissions, error behavior, and version policy. A publication API may
contain fewer fields and coarser records than the internal application because
its purpose and audience differ.

Events and webhooks can tell another component that a record was approved or a
release was created. Receivers must authenticate the sender, tolerate retries and
out-of-order delivery, process an event idempotently, and retrieve the canonical
state when the notification is not sufficient. A webhook payload should not
quietly become a permanent, competing copy of the record.

## publication is an explicit transition

The public site should consume an approved publication profile rather than query
all live working data and decide what looks public. A profile can define allowed
records, fields, media, aggregation, licenses, update cadence, and redactions for
a named audience. The resulting build is a distribution with its own identifier,
date, source revision, correction path, and retention requirements.

This boundary also makes preview meaningful. A preview represents a proposed
release using the same transformation rules, but it remains access-controlled and
visibly distinct from the public release. Preview URLs, build logs, and retained
artifacts must be treated as possible disclosures rather than as harmless
developer conveniences.

## choosing an approach

Begin with the people and the work:

- Who authors, reviews, approves, and corrects the material?
- Is the canonical source primarily narrative files, structured records, binary
  media, or relationships among them?
- Which audiences and representations are required?
- Does a contributor need a web editor, offline work, bulk changes, or concurrent
  editing?
- Which permissions apply to a project, record, field, file, draft, or release?
- Can the complete source and history be exported in documented, reusable forms?
- What must remain available if a product, provider, plugin, or theme disappears?

The answer may involve a CMS, but it should follow these requirements. Product
categories are implementation choices, not the content architecture.

## related discussions

- [application architecture](README.md)
- [digital publishing](../digital-publishing/)
- [working with Ghost](../digital-publishing/working-with-ghost.md)
- [revision control](../digital-publishing/revision-control.md)
- [data structures](../data-structures/)
- [static sites with Observable Framework and AWS](../platform-hosting/static-sites-with-observable-and-aws.md)
- [privacy by architecture](../data-privacy/privacy-by-architecture.md)
