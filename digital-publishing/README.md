# digital publishing

Digital publishing is the work of turning reviewed source material into a public representation that people and machines can find, understand, use, and cite. It includes websites, reports, documentation, datasets, maps, presentations, feeds, and downloadable files. The publishing system is not merely the last step in a project: its constraints affect how information should be written, structured, reviewed, and preserved from the beginning.

This project generally favors publication from portable, versioned sources. A Markdown document, a structured data file, or a reproducible query can be inspected without a particular vendor and transformed into several useful outputs. A content management system or interactive application may still be the right interface, but it should not become the only place where the underlying knowledge can be recovered.

## separate the layers

A clear publishing system keeps related concerns connected without collapsing them into one artifact:

- **content** is what we intend to communicate;
- **structure** identifies headings, records, relationships, and other meaningful parts;
- **presentation** determines how those parts look in a particular medium;
- **behavior** adds search, filtering, visualization, editing, and other interaction;
- **metadata** describes the publication to catalogs, search engines, and future maintainers; and
- **delivery** determines where the result is hosted, cached, secured, and made available.

When these layers are separable, the same reviewed source can produce an accessible web page, a printable report, a machine-readable record, or a preserved snapshot. Corrections can be made at the source and propagated deliberately rather than repeated by hand in every output.

## a publication lifecycle

Publication is a controlled transition, not a file-copying operation:

1. **select** the material and fields approved for an audience;
2. **transform** canonical sources into the required representations;
3. **validate** links, data, markup, accessibility, and privacy rules;
4. **review** the complete result, including generated and machine-readable content;
5. **release** a named or otherwise identifiable version;
6. **observe** availability, errors, and unintended disclosure; and
7. **correct, replace, archive, or withdraw** every affected representation when necessary.

The source, transformation rules, dependencies, and release identifier together form part of the publication record. A page without this context may still look complete while being difficult to reproduce or correct.

## choose the simplest adequate form

Different forms serve different needs:

- A **static site** prebuilds public files and can be inexpensive, fast, cacheable, and comparatively easy to secure. It is a strong default when content changes through a reviewed release rather than a private session.
- A **content management system** provides an editorial interface, roles, scheduling, and previews. It is valuable when nontechnical authors need to publish frequently, but introduces application maintenance, database, plugin, and account-security concerns.
- An **interactive or data-driven document** can connect explanation directly to filtering, computation, maps, or charts. Its essential argument and sources should remain understandable when interaction fails or is unavailable.
- A **generated document** such as PDF, DOCX, EPUB, or a slide deck is useful for printing, formal exchange, offline reading, or a specific institutional workflow. It should be treated as a representation of maintained source rather than an untraceable final copy.
- A **feed, API, or data download** supports reuse by machines and other projects. Its schema, license, version, provenance, and change policy are part of the publication.

[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) is one example of static hosting from a repository. [Observable Framework](https://observablehq.com/framework/) extends the static approach to data loaders and reactive JavaScript pages. The appropriate tool matters less than preserving a clear source-to-publication boundary.

## publication principles

### keep a canonical, portable source

Prefer readable text and documented open formats where they adequately represent the material. Generated HTML, PDF, or application bundles should normally be reproducible outputs, not the only editable copy. The [file-first storage discussion](../data-storage/file-first-and-portable-formats.md) develops this principle for documents and datasets.

### publish deliberately

A public build should contain only information selected for that audience. Hiding a field with CSS, omitting it from the visible page, or relying on an obscure URL does not make information private if it remains in HTML, JavaScript, JSON, source maps, structured metadata, or a downloadable file. The [privacy](../data-privacy/) and [security](../data-security/) sections address this boundary in detail.

### make the basic meaning resilient

Start with semantic HTML and a logical reading order. Add CSS for presentation and JavaScript for capabilities that genuinely benefit the reader. This form of [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) helps a publication survive slow networks, blocked scripts, assistive technology, and future changes in the interface.

### treat accessibility as a publication requirement

Headings, landmarks, link text, alternatives for non-text content, keyboard behavior, contrast, reflow, captions, and document language all contribute to whether the work can be perceived and operated. [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) provides the current shared framework, but automated checks alone cannot establish that a discussion is clear or an interaction is usable.

### preserve identity and history

Use stable URLs and identifiers for resources that others may cite. Record meaningful releases and keep redirect, correction, and withdrawal behavior explicit. Git history is useful evidence of development, but a public release needs an intelligible version and status of its own.

### minimize dependencies and third parties

Every framework, analytics service, font host, embed, tag, and client-side package adds operational, privacy, security, performance, and preservation consequences. Use dependencies because they solve a known problem, pin and review them where practical, and avoid making an essential explanation depend on an unnecessary external service.

## current applications

The ideas in this section are being tested through related `/framework/` projects and their public representations:

- [Archive](https://archive.categori.se/) explores file and record discovery;
- [Docs Repo](https://docs-repo.categori.se/) explores repository-based documents and metadata;
- [Team Spaces](https://team-spaces.categori.se/) explores collaborative workspaces; and
- [OpenGeo Tools](https://opengeo.tools/) publishes focused geospatial tools and guidance.

These applications are examples, not a single prescribed platform. They help us compare static publication, data-driven pages, repository workflows, metadata profiles, and more conventional application services against the same principles.

## discussions in this section

- [writing with Markdown](working-with-markdown.md) introduces the plain-text format used by most of this repository.
- [writing with reStructuredText](working-with-reStructuredText.rst) describes a more explicit documentation format used in Python and Sphinx ecosystems.
- [building publications with Pandoc](working-with-pandoc.md) treats format conversion as a reproducible publishing pipeline.
- [working with Git](working-with-git.md) presents the practical edit, review, and release workflow.
- [revision control and publication history](revision-control.md) considers version meaning, large files, corrections, and preservation.
- [publishing with JavaScript](working-with-javascript.md) frames browser behavior and data-driven documents around progressive enhancement.
- [publishing with Ghost](working-with-ghost.md) considers when a managed editorial application is worth its added operational surface.
- [structured data for web discovery](structured-data-for-web-discovery.md) connects public pages to Schema.org, JSON-LD, DCAT, and safe metadata publication.

Presentation systems and component libraries belong in [interface design](../ui-design/). Visual explanation belongs in [data visualization](../data-visualization/); internal schemas belong in [data structures](../data-structures/); acquiring source material belongs in [data capture](../data-capture/); [content authority and workflow boundaries](../application-architecture/content-workflows-and-publication-boundaries.md) belong in application architecture; and the build, origin, and delivery environment belongs in [platform hosting](../platform-hosting/). Those areas meet at publication, but keeping their responsibilities visible makes the whole system easier to reason about.
