# user-interface design

The user interface is where the application explains what it knows, what remains
uncertain, what a person may do, and what will happen next. It is not merely a
visual layer over the “real” system. Labels, grouping, sequence, defaults,
validation, and feedback all influence whether people can understand the data and
act responsibly upon it.

The original notes collected frameworks, table libraries, upload examples,
responsive layouts, conditional form fields, mathematical notation, and DOM
tutorials. Most of those needs remain. What has changed is that our
[`/framework/` applications](https://github.com/aaronkyle/framework) generally
begin with [Observable Framework](https://observablehq.com/framework/), whose
Markdown pages, reactive JavaScript, standard library, recommended npm libraries,
themes, grids, cards, inputs, and data loaders provide much of the common
interface foundation.

That foundation reduces the amount of interface infrastructure we need to invent.
It does not decide what a record means, which fields should be shown, whether an
action is authorized, or whether a workflow is understandable.

## begin with the work

An interface should make the application model usable without requiring people
to learn its database or deployment architecture. For each view, identify:

1. the person and task the view supports;
2. the records and relationships needed for that task;
3. which values are observed, inferred, curated, or calculated;
4. which actions are available and who is responsible for them;
5. what is saved locally, submitted to a service, or published;
6. the empty, loading, partial, error, conflict, and completed states; and
7. how a person can recover from an incorrect action.

This approach keeps a dashboard from becoming a wall of available charts and a
form from becoming a direct rendering of every database field.

## core interface principles

### make structure and state visible

Use headings, landmarks, labels, tables, lists, and grouped controls to expose the
relationships in the work. Distinguish a source value from a human correction, a
draft from an approved release, and a warning from an error that prevents
continuation. Do not rely on color, position, or an icon alone to carry important
meaning.

### reveal complexity in context

Progressive disclosure can show a specialized field or detailed explanation when
it becomes relevant. It should not conceal consequences or make people hunt for
essential information. When a choice changes later questions, explain the
relationship, preserve valid answers, and announce the change to assistive
technology where needed.

### prefer direct, reversible actions

Use clear verbs, show the object an action affects, and distinguish “save draft,”
“submit for review,” and “publish.” Provide confirmation for difficult-to-reverse
actions, but do not use confirmation dialogs as a substitute for good labels and
safe defaults. A visible history and practical undo path are often more useful
than asking a person to be certain in advance.

### design for more than one viewport or input method

Responsive design is not the act of hiding difficult columns on a small screen.
Reading order, touch target size, keyboard navigation, zoom and reflow, text
length, and the task’s minimum useful context all matter. A complex table may
need horizontal scrolling or a focused record view; a map may need an equivalent
list or search path; a dense editing workflow may honestly require a larger
workspace while still providing essential review on a phone.

### keep the basic meaning resilient

Start with semantic HTML and a logical document. Add reactive inputs, linked
views, maps, charts, and other behavior where they improve understanding. Public
explanations and essential sources should not disappear merely because a script,
animation, pointer interaction, or third-party service fails.

### treat accessibility as ordinary design

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) provides shared success criteria, but
conformance cannot be inferred from a framework or automated score. Test keyboard
operation, focus order and visibility, accessible names, headings, reflow,
contrast, reduced motion, errors, status messages, tables, charts, and actual task
completion with people and assistive technologies.

## Observable as the usual foundation

Observable Framework is especially well suited to our reports, catalogs,
dashboards, maps, and browser-side data tools. Its built-in page structure,
responsive grid and card classes, themes, `display`, reactive `view`,
`FileAttachment`, `resize`, Observable Inputs, and recommended visualization and
data libraries cover many needs in the older notes.

We should use that foundation before adding a second global CSS or component
framework. Shared local components can express categori.se-specific records and
workflows; focused npm packages can add a map, diagram, database engine, or other
specialized capability. [Observable Framework and npm](observable-framework-and-npm.md)
describes these layers and the dependency decisions they create.

## public views and stewardship views

The same information may need different interfaces:

- a **public view** explains approved material and supports reading, exploration,
  citation, and download without exposing working records;
- a **stewardship view** supports intake, metadata correction, relationships,
  review, access decisions, and publication preparation; and
- an **administrative view** manages identities, vocabularies, policies,
  integrations, and recovery with additional safeguards.

These are audience and responsibility boundaries, not themes applied to one
unfiltered dataset. The interface may omit an unavailable action, but the trusted
service must still enforce authorization as described in [identity, permissions,
and trusted operations](../application-architecture/identity-permissions-and-trusted-operations.md).

## current application surfaces

- [Archive](https://archive.categori.se/) tests file intake, metadata, source
  identity, extraction, curation, and access.
- [Docs Repo](https://docs-repo.categori.se/) tests project navigation, document
  editing, previews, file relationships, and revision workflows.
- [Team Spaces](https://team-spaces.categori.se/) tests portfolios, projects,
  tasks, reporting, and collaboration.
- [Workspace Management](https://workspace.categori.se/) tests relationships among
  accounts, teams, requirements, decisions, and external sources.
- [OpenGeo.Tools](https://opengeo.tools/) tests catalogs, maps, spatial files, and
  browser-first geospatial work.

These applications are where shared patterns should be observed and tested. They
need not look identical, but the same concept, action, status, or risk should not
quietly acquire a different meaning in each interface.

## discussions in this section

- [Observable Framework and npm](observable-framework-and-npm.md) identifies the
  usual interface foundation and the focused libraries available within it.
- [interface frameworks and design systems](ui-frameworks.md) explains when
  Framework styles, project CSS, shared components, or another framework fit.
- [understanding the DOM](understanding-the-DOM.md) connects semantic HTML,
  reactive values, components, and direct browser manipulation.
- [data tables](data-tables.md) considers responsive browsing, filtering,
  selection, scale, and editing boundaries.
- [forms, files, and progressive disclosure](forms-files-and-progressive-disclosure.md)
  considers data entry, local file selection, validation, conditional questions,
  persistence, and submission.
- [mathematical notation](math-integrations.md) considers readable formulas in
  Observable pages and exported publications.

[Data visualization](../data-visualization/) develops chart, dashboard, and
storytelling choices; [web GIS](../web-gis/) develops specialized map interfaces;
[data structures](../data-structures/) defines the concepts an interface presents;
and [application architecture](../application-architecture/) defines the trusted
operations behind it.
