# data structures

Data structures determine what the system can say about a file, source, person, place, project, observation, or decision—and which relationships among those things remain visible. A structure is never only a technical container. Its distinctions influence what people can find, compare, correct, protect, cite, and publish.

This section began as a field inventory, a few notes about JSON and database naming, and a mock metadata editor. Those materials expressed a real requirement, but they mixed several different concerns: storage format, database implementation, web-search markup, bibliographic description, file naming, and interface design. The renewed section concentrates on the conceptual model beneath those choices.

The central question is not “Which fields should every file have?” It is “Which things, observations, assertions, activities, and relationships must remain distinguishable as the project changes?”

## structure begins with distinctions

A useful model distinguishes at least:

- an **entity** we want to identify, such as a file object, intellectual work, dataset, person, organization, place, project, or publication;
- a **value**, such as a title string, byte size, date, language code, or review status;
- a **relationship** connecting identified entities, such as authorship, membership, citation, derivation, containment, or geographic coverage;
- an **activity or event**, such as capture, extraction, curation, transformation, review, or publication;
- an **assertion** that a particular source, tool, or person made about an entity; and
- a **rule** governing type, cardinality, required values, uniqueness, visibility, or validation.

These concepts can be serialized as JSON, arranged in tables, stored in PostgreSQL, exposed through an API, or rendered as an HTML form. Format, database, and interface matter, but they are implementations of the model rather than the model itself. [Modeling records and relationships](modeling-records-and-relationships.md) develops this vocabulary and compares tabular, nested, relational, graph, and event-oriented representations.

## model assertions, not only final values

A single editable field makes metadata appear more certain than it is. One document can have several plausible titles or dates:

- a filename or title embedded in the received file;
- a value extracted by a named tool and version;
- a value inferred from visible content;
- a normalized value selected for search;
- a correction supplied by a person;
- a bibliographic title imported from a catalog; and
- a shortened or redacted value prepared for publication.

The system may present one preferred value for convenience, but it should not erase the observations and decisions that support it. Important assertions need provenance: who or what made the assertion, when, by which method, from which source, with what confidence or review status, and for which audience it is visible.

The [document metadata model](document-metadata.md) applies this approach to files and bibliographic resources. The [data-capture discussion](../data-capture/extracting-text-and-data-from-files.md) describes extraction events and raw observations; [data analysis](../data-analysis/analysis-as-a-research-process.md) addresses the later transition from evidence to interpretation.

## identity is not a filename or label

Names change, paths change, spellings vary, and two people or places may share a label. A durable internal identifier should not depend on a current display name or storage location. Human-readable labels remain essential, but they are properties of an identified entity rather than the entity's identity.

External identifiers—such as a DOI, ORCID iD, ROR ID, ISBN, ISSN, or an authoritative geographic code—can connect records to wider systems. They should be stored with their scheme and source, not copied into one ambiguous `id` field. A checksum identifies a byte sequence; it does not identify the abstract work represented by those bytes. [Identifiers, names, and controlled values](identifiers-names-and-controlled-values.md) develops these distinctions and replaces the former scratch notes on SQL casing and article filenames.

## relationships carry meaning

Flattening relationships into strings loses structure. An `authors` value containing several names cannot reliably express order, roles, organizational authorship, identifiers, or uncertainty. A better model identifies the work and agents separately, then records an authorship relationship with its own role and order.

The same principle applies throughout the system:

- a file is one representation of a work, not necessarily the work itself;
- a project contains or uses a source through an explicit relationship, not because the file happens to sit in a project folder;
- a document concerns a place, was created at a place, was captured from a place, and is stored in a region through different relationships;
- an analysis was derived from identified sources through an activity; and
- a public snapshot is a version or distribution of a dataset, not the private dataset made accidentally visible.

Relationships need direction, meaning, and sometimes dates, roles, evidence, or confidence. Add a general-purpose “related item” only as an escape hatch; repeated relationships should acquire defined types.

## schemas and vocabularies have different jobs

A schema defines the shape and constraints of records: which properties exist, their types, whether they repeat, and which combinations are valid. A controlled vocabulary defines the concepts allowed in a particular property and gives each concept a stable code, preferred label, definition, status, and relationships to other concepts.

JSON Schema can validate JSON documents, SQL constraints can protect relational state, and domain-specific profiles can constrain broader standards. Validation establishes conformance to declared rules; it does not establish that the information is true.

The W3C's [Data on the Web Best Practices](https://www.w3.org/TR/dwbp/) connects these structural concerns to publication: descriptive and structural metadata, provenance, quality, versions, persistent identifiers, machine-readable formats, vocabularies, access, preservation, and feedback all contribute to understandable and reusable data.

For subjects, document types, workflow states, roles, and similar categories, use a maintained vocabulary rather than letting spelling variants become accidental categories. [SKOS](https://www.w3.org/TR/skos-reference/) supplies a standard model when vocabularies need multilingual labels, broader and narrower concepts, notes, or mappings across schemes. Begin with a small governed list when that is sufficient; do not build an ontology merely because the software permits it.

## structure should preserve change

Schemas and vocabularies evolve. A sustainable model:

- assigns versions to schemas and controlled lists;
- adds fields compatibly where possible and documents changed meaning;
- migrates data through reviewed, repeatable transformations;
- preserves the source value when normalization changes it;
- distinguishes absence, unknown, not applicable, withheld, and empty values where the difference matters;
- records replacement, merge, split, and deprecation rather than silently reusing identifiers; and
- validates existing records before and after a migration.

Revision history is not the same as provenance. A database log may show that a row changed; provenance explains which source, activity, person, or rule supported the new assertion and how it relates to a published result. The [W3C PROV-O model](https://www.w3.org/TR/prov-o/) offers standard vocabulary for entities, activities, agents, and derivation when interoperability justifies that formalization.

## interface follows provenance and authority

The historical [file metadata editor concept](ui-concept.html) tried to place technical properties and human descriptions beside a file preview. Its important requirement survives, but a current interface should not render every observed value as an equally editable text box.

An editor should communicate:

- whether a value is embedded, extracted, inferred, imported, curated, computed, or published;
- which source, tool, or person supplied it;
- whether it is read-only, controlled, reviewable, or editable;
- the previous values and reason for a correction;
- uncertainty, conflict, validation, and review state;
- which relationships and downstream publications use it; and
- who is authorized to view, change, approve, or publish it.

[Archive](https://archive.categori.se/) and [Docs Repo](https://docs-repo.categori.se/) are the active places to test these requirements. Archive explores intake, immutable file identity, extraction, curation, relationships, and controlled access. Docs Repo explores project-oriented files, previews, editing, metadata, and revision history. Their interfaces can change while the structural distinctions remain stable.

## boundaries with other discussions

Several earlier notes now have clearer homes:

- storage formats, file-first practice, SQL engines, Parquet, DuckDB, and cloud services belong in [data storage](../data-storage/);
- extraction commands and raw tool output belong in [data capture](../data-capture/);
- file naming and paths are storage and human-navigation conventions, while durable identifiers remain a structural concern;
- Schema.org markup and Google search features belong in [structured data for web discovery](../digital-publishing/structured-data-for-web-discovery.md); and
- widgets, forms, previews, and interaction patterns belong in user-interface discussions once their underlying authority and provenance rules are understood.

The boundaries are permeable. This section specifies what must remain distinguishable; neighboring sections explain how information enters the system, where representations are stored, how people edit them, and what is deliberately published.

## discussions in this section

- [modeling records and relationships](modeling-records-and-relationships.md) introduces entities, values, assertions, schemas, constraints, and several common structural shapes;
- [identifiers, names, and controlled values](identifiers-names-and-controlled-values.md) separates durable identity from labels, paths, external identifiers, and classification codes;
- [document metadata](document-metadata.md) turns the old field inventory into a layered model for files, works, agents, bibliographic description, provenance, review, and publication; and
- [file metadata editor concept](ui-concept.html) preserves the historical interface experiment with a current interpretation of its requirements.

Together, these pages provide a conceptual narrative rather than a proposed universal database schema. Application schemas should implement the smallest model that preserves the distinctions required by their actual work, then expose documented exports that retain those meanings outside the application.
