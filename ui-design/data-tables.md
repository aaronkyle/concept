# data tables

Tables are one of the clearest ways to compare records across shared fields. The
older notes explored sorting, responsive layouts, nested JSON, complex headers,
row details, keyboard movement, and the DataTables plugin. Those requirements
remain; Observable Inputs now provides a simpler default for many of them.

## begin with a readable table

Use a table for genuinely tabular information, not page layout. Give it a concise
caption or nearby introduction, meaningful column labels, appropriate row and
column headers, units, consistent missing-value behavior, and an intelligible
default order. Preserve actual identifiers separately from clickable labels and
formatted display values.

For a small published table, semantic HTML may be all that is required. The
[HTML table guidance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
explains captions, header cells, scope, and relationships in complex tables.

## use Observable Inputs for ordinary exploration

[`Inputs.table`](https://observablehq.com/framework/inputs/table) supports lazy
row rendering, column selection and order, sorting, formatting, sizing, and
optional row selection. A table wrapped in `view` can expose selected records to
another table, map, chart, or detail panel. `Inputs.search`, `Inputs.select`, and
other controls can provide linked filtering without introducing a separate grid
framework.

This fits many categori.se views:

- browsing files or records in Archive;
- filtering documents within a Docs Repo project;
- selecting projects or tasks in Team Spaces;
- comparing requirements and decisions in Workspace Management; and
- linking a catalog table to a map in OpenGeo.Tools.

Configure the columns for the task rather than exposing every property in the
source object. Formatting can return a DOM node for a link, status, or compact
graphic, but the underlying value should remain available for sorting, export,
and assistive interpretation.

## responsive tables preserve context

Wide tables are difficult because comparison depends on keeping row and column
context together. Choose among several honest responses:

- allow horizontal scrolling while keeping headers visible;
- begin with the most relevant columns and let people choose additional ones;
- provide a compact table linked to a complete record-detail view;
- split genuinely different comparisons into separate tables; or
- offer a downloadable dataset for work that exceeds the browser view.

Do not hide columns solely by viewport width if their absence changes the meaning
of a row. Transforming every row into a card can work for record lookup but often
destroys the comparisons that justified a table. Test zoom, keyboard movement,
screen readers, touch, long labels, translated text, and unusually large values.

## nested records and row details

A nested JSON object should not automatically become a nested visual table.
Identify the repeated entity represented by each row, choose the fields needed
for comparison, and link to related entities or a detail view. An expandable row
can reveal context without overwhelming the scan, but its control needs an
accessible name, expanded state, keyboard behavior, and a stable reading order.

Complex multi-level headers are appropriate only when the grouped relationship is
important and can be expressed programmatically. Several focused tables are often
clearer than one matrix with ambiguous merged cells.

## scale changes the interface

Inputs.table renders rows lazily, but the data available to browser JavaScript
still occupies memory and may already have crossed a publication boundary. For a
large public snapshot, prepare a smaller table, Parquet dataset, or purpose-built
SQLite database and query it with DuckDB or SQLite in the browser. For private or
rapidly changing records, filter and authorize on a trusted service and return
only the needed page or result set.

Search should explain its scope and matching behavior. Preserve the active query,
filters, sort, selected columns, and result count in a form that can be understood
and, where useful, linked or exported.

## browsing and editing are different responsibilities

A selectable table is not automatically a spreadsheet or record editor. Editing
needs field definitions, validation, permissions, conflicts, save status,
provenance, and a review path. Prefer a focused editor for the selected record or
a deliberate bulk-change workflow that previews the affected rows and records
one accountable operation.

The interface can show that a person lacks edit access; the service must still
authorize every write. See [forms, files, and progressive disclosure](forms-files-and-progressive-disclosure.md)
and [identity, permissions, and trusted operations](../application-architecture/identity-permissions-and-trusted-operations.md).

## when a specialized grid is justified

[DataTables](https://datatables.net/) remains a maintained option with extensive
extensions, server-side processing, complex headers, row details, export tools,
and an editor product. Its current implementation retains jQuery as a dependency
even when initialized with vanilla JavaScript. Add it only when those capabilities
justify a second table model, styling layer, bundle, and accessibility review.

Other specialized grids may fit high-volume editing or application-specific
keyboard behavior. Evaluate their license, semantic output, focus model, mobile
behavior, server integration, export fidelity, and upgrade path against the
simpler Inputs and native-HTML starting points.
