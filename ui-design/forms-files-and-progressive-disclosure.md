# forms, files, and progressive disclosure

Forms translate a person’s understanding into application state. Their quality
depends less on the number of available widgets than on whether questions are
clear, relationships are visible, constraints are honest, and a person can tell
what has and has not been saved.

The original scratch page explored file uploaders and conditional fields. Those
remain central to Archive, Docs Repo, Team Spaces, and the long assessment forms
developed in Observable Framework.

## define the field before choosing the control

For each value, identify its meaning, source, responsible editor, allowed values,
units, requiredness, privacy, and validation. Then choose a control suited to the
answer:

- radio buttons or a select for one value from a known set;
- checkboxes for several independent values;
- text fields for short free text and text areas for considered narrative;
- native date, time, number, URL, and email controls when their semantics fit;
- search or autocomplete for a large governed vocabulary; and
- a relationship picker when the answer is another identified record rather than
  a copied label.

Placeholder text is not a label and disappears when a person begins typing.
Provide persistent labels, concise instructions, examples where ambiguity is
likely, and text that identifies and explains validation errors. The [WAI forms
tutorial](https://www.w3.org/WAI/tutorials/forms/) provides the shared
accessibility foundation.

## Observable Inputs as the first toolkit

[`@observablehq/inputs`](https://observablehq.com/framework/inputs/) provides
buttons, toggles, checkboxes, radio buttons, ranges, selects, text, text areas,
dates, files, search, tables, and forms. Passing an input to `view` connects its
value to the page’s reactive model, which is often enough for filtering, a local
calculation, a preview, or a linked explanation.

The local `socdev-explorations` project already uses this pattern extensively for
applicability choices, narrative analysis, evidence files, conditional sections,
and local JSON state. Repeated field groups should now become domain components
with a consistent label, help text, state model, and validation contract.

An input value is browser state. It is not durable merely because another part of
the page reacts to it. The interface must say whether a value is unsaved, saved
locally, submitted, accepted by the service, under review, or published.

## selecting a file is not uploading it

[`Inputs.file`](https://observablehq.com/framework/inputs/file) lets a person
choose one or more local files and provides convenient methods for reading common
formats. This supports private, browser-side inspection: a page can parse a CSV,
JSON, ZIP, XLSX, image, or text file and show a preview without necessarily
sending the file elsewhere.

An upload begins only when code transmits bytes to a service. Make that boundary
explicit. Before upload, show the selected name, type, size, intended destination,
and any local validation. At submission:

1. authenticate the person and authorize creation in the destination project;
2. enforce size, count, and format limits on the trusted service as well as in the
   browser;
3. avoid trusting the filename, extension, browser MIME type, or client checksum;
4. create a durable file identity and preserve the original intake facts;
5. scan, quarantine, extract, and derive through controlled workflows; and
6. report progress and final acceptance without implying that selection alone
   saved the file.

The [data-capture discussion](../data-capture/extracting-text-and-data-from-files.md)
develops what happens after intake. Archive and Docs Repo are the current
application surfaces for these responsibilities.

## conditional questions need an explicit rule

Progressive disclosure can reduce noise when a question is relevant only after a
particular answer. Define the dependency in domain language, not only as a DOM
selector or a CSS `:checked` trick. For example:

```text
if a requirement is applicable,
show its evidence, analysis, and determination fields
```

Decide what happens when the controlling answer changes. A hidden answer may be
retained, cleared, marked inapplicable, or submitted with an explanation; each
choice has different audit and privacy consequences. Do not silently submit stale
hidden values or destroy substantial work without warning.

When content appears or an error occurs, keep focus predictable and expose the
change programmatically where needed. Conditional sections should retain logical
heading order and should not make keyboard users traverse invisible controls.

## validation is a conversation

Use immediate validation for constraints that can help while typing, such as a
required format or impossible range. Use submission or trusted-service validation
for rules that depend on other records, authorization, current workflow state, or
concurrency. Never accept a consequential change merely because browser-side
validation was bypassed.

An error should:

- identify the affected field in text;
- state what is wrong and, where possible, how to correct it;
- preserve the person’s other answers;
- be connected programmatically to the control;
- remain visible without relying on color alone; and
- provide a summary when several errors are difficult to locate.

Keep warnings distinct from errors that prevent submission. If the system changes
or normalizes an answer, show the result before a person approves it.

## saving, conflicts, and recovery

Long forms need an explicit persistence strategy. A local download or browser
store can support a private draft, but it needs a clear file format, version,
privacy warning, and import path. A server-backed draft needs authorization,
autosave status, conflict handling, and retention. Do not let a green “saved”
message refer only to browser memory.

For a substantial origin-local draft or offline cache, the browser’s
[IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
can store structured values and files. It remains device- and browser-specific
state that may be cleared or become inaccessible; it is not automatically a team
record, synchronization mechanism, or backup. Version its schema, handle failed
migrations and storage limits, give people a visible export and deletion path,
and avoid retaining sensitive material merely because storage is available.

For collaborative records, preserve who changed what and detect a stale edit
rather than silently overwriting another person’s work. Separate draft, submit,
review, approve, and publish transitions. Provide a practical way to resume after
a network failure, expired session, validation error, or accidental navigation.

## metadata editing requires provenance

The historical [metadata editor demonstration](../data-structures/ui-concept.html)
correctly anticipated the need to expose and edit file information. The active
interfaces in Archive and Docs Repo should go further by distinguishing intake
facts, extracted observations, inferred values, human assertions, project
relationships, and publication fields. A text box alone cannot explain which
kind of value is being changed or what prior evidence it supersedes.
