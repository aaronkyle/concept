# modeling records and relationships

A data model is a deliberate account of which things the system recognizes, what may be said about them, and how those statements connect. It should begin in the language of the work before it becomes a SQL schema, JSON document, or application class.

The aim is not to represent every nuance in advance. It is to preserve distinctions whose loss would make the information misleading, difficult to revise, or impossible to exchange.

## a working vocabulary

- An **entity** is something treated as having identity, such as a file object, document, person, organization, place, project, dataset, or publication.
- A **property** associates an entity with a value, such as a title, byte size, language, or status.
- A **relationship** associates one entity with another, such as authorship, membership, citation, derivation, or geographic coverage.
- An **activity or event** is something that occurs over time and may use, generate, or change entities, such as capture, extraction, review, transformation, and publication.
- An **assertion** records that an agent or process stated a value or relationship, with source and context.
- A **schema** defines the permitted shape, types, repetitions, and constraints of records.
- A **controlled vocabulary** defines the permitted concepts used as values in selected properties.
- A **serialization** is a representation of the model in JSON, CSV, RDF, SQL, Parquet, or another format.
- A **storage system** preserves and retrieves those representations; it is not itself the conceptual model.

The same model can have several serializations, and one application can use several storage systems. Interoperability depends on preserving meaning across those boundaries, not merely producing syntactically valid files.

## begin with questions and decisions

Before defining fields, collect representative questions and operations:

- Which original file produced this text or metadata observation?
- Which person or organization created, published, captured, reviewed, or approved the resource?
- Which version of a dataset and transformation produced this chart?
- Which projects use this source, and for what purpose?
- Which title is preferred for display, and which other titles were observed?
- Which records may this user see, edit, approve, or publish?
- If two records appear to describe the same person or place, who may merge them and can the merge be reversed?

These questions reveal entities, relationships, events, and authority. Starting instead with a universal `documents` table tends to accumulate ambiguous columns whose meanings change from row to row.

## common structural shapes

### tabular records

A table works well when records share a stable set of fields and each row represents the same kind of thing. It supports scanning, filtering, type validation, and relational import. CSV provides little schema by itself, so important tables need definitions for types, identifiers, nulls, units, codes, and references.

Do not place repeated authors, subjects, places, or project relationships in comma-separated cells merely to preserve one row per document. A second relationship table may express the information more accurately.

### nested documents

JSON and document databases can keep an aggregate together: a capture event with request headers and observations, or a map configuration with layers and styles. Nest a value when it is owned by the parent, normally retrieved with it, and does not require an independent lifecycle.

Reference rather than embed an entity that is shared, independently updated, permissioned differently, or meaningful in its own right. Duplicating a person's complete profile inside every authored document makes correction and identity resolution difficult.

### relational models

A relational model separates entity types into tables and represents references with keys. Constraints can enforce uniqueness, required values, valid references, and transactions. Many-to-many relationships such as documents used by projects usually require an association table, which can also carry role, order, date, or notes.

Normalization reduces ambiguous duplication, but maximum normalization is not the goal. A stable snapshot or publication view may intentionally denormalize information for reading. Preserve its derivation and do not confuse that view with the operational source.

### graph models

A graph treats relationships as a primary query surface. It can be appropriate for citation networks, organizational relationships, provenance chains, or knowledge graphs whose questions repeatedly traverse several kinds of connection. Relational tables can represent graphs too; a graph database becomes useful when traversal and graph semantics justify a specialized system.

A graph does not correct weak identity or vague relationship types. A dense network of `related_to` edges may be less meaningful than a small relational model with well-defined predicates.

### event and assertion histories

Current-state records answer “What do we believe now?” An event or assertion history also answers “What was observed, who changed our preferred value, and what did we publish at the time?” This is particularly important for extracted metadata, entity merges, classifications, permissions, and research decisions.

Not every keystroke needs to become a domain event. Preserve events that explain consequential state or support recovery, accountability, and reproducibility. Separate a technical audit log from human-readable provenance while connecting them where appropriate.

## separate entities that change independently

The old metadata inventory placed file properties, bibliographic description, review notes, and project classifications in one prospective record. A more durable model recognizes different lifecycles:

| entity | what gives it identity | examples of change |
| --- | --- | --- |
| file object | a stored byte sequence or managed object | new location, integrity check, replacement, access decision |
| intellectual work or resource | the content being described | corrected title, contributor relationship, external identifier |
| version or expression | a particular revision, language, edition, or realization | translation, revised report, accepted manuscript |
| extraction event | one tool run against one input | tool upgrade, new options, later rerun |
| assertion | a value or relationship stated in context | review, acceptance, rejection, supersession |
| annotation or analysis note | an agent's commentary on a target | revision, resolution, response, publication |
| project relationship | how a project uses or interprets a resource | role, relevance, status, removal |
| publication or distribution | a selected form made available to an audience | new release, correction, withdrawal, access change |

The project need not implement every row as a separate service or table. It should avoid collapsing them where independent history, authority, or meaning matters.

## model roles as relationships

“Aaron is the author of a report” is not merely a text value. It relates an identified agent to an identified work through an authorship role. The relationship may have order, dates, source, confidence, or a distinction between personal and organizational responsibility.

The same pattern supports:

- editor, translator, reviewer, uploader, rights holder, and publisher roles;
- membership of a person in a team or organization during a period;
- a source used as evidence by a project or analysis;
- a dataset derived from another through a transformation;
- a file representing a particular version of a work; and
- an assertion supplied by a tool and accepted by a curator.

Representing roles explicitly avoids creating a new field for every combination and keeps the agent reusable across resources.

## make time explicit

A field named `date` is rarely sufficient. Distinguish the date of the event from the date the system learned about it; creation from publication; capture from file modification; temporal subject coverage from storage retention; and a precise instant from an uncertain or approximate period.

Store timestamps in a consistent machine-readable form with timezone or offset where an instant is intended. Preserve the original source string when normalization involved judgment. Model intervals with starts and ends, and permit uncertainty explicitly rather than inventing precision.

## preserve source, method, and authority

An assertion record may need:

- the subject entity and property or relationship being asserted;
- the value or referenced object;
- the source file, catalog, API, visible passage, or prior assertion;
- the agent or software responsible;
- the method, tool version, and relevant configuration;
- creation and review times;
- confidence, validation, and review status;
- visibility and sensitivity; and
- replacement, rejection, or publication relationships.

This resembles the W3C [PROV-O](https://www.w3.org/TR/prov-o/) distinction among entities, activities, and agents. A project can adopt those concepts without storing RDF or implementing the entire ontology. Formal PROV exchange becomes useful when provenance must interoperate outside our applications.

## use schemas at the right boundary

Different schema tools protect different boundaries:

- [JSON Schema](https://json-schema.org/specification) validates the shape and values of JSON documents;
- SQL data definitions, keys, checks, and transactions protect relational state;
- CSV table schemas and data dictionaries make text tables interpretable;
- Parquet carries physical and logical types but not the complete domain meaning;
- [DCAT](https://www.w3.org/TR/vocab-dcat-3/) describes datasets, distributions, services, and catalogs for exchange; and
- domain vocabularies define the concepts that general syntax cannot supply.

Do not maintain several handwritten schemas that drift independently. Choose one authoritative model or generation path where possible, then test the actual database, API contract, files, and interface against it.

Validation should report useful, located errors and should not silently coerce an invalid value into something different. Preserve a raw observation when cleanup or mapping changes its meaning.

## evolve without rewriting history

Schema changes are information changes. For each change:

1. state the problem and intended meaning;
2. identify affected fields, relationships, exports, and interfaces;
3. decide whether the change is additive, corrective, breaking, or a vocabulary revision;
4. write and review a repeatable migration;
5. preserve original values and identifiers where required;
6. validate representative and exceptional records before and after migration;
7. version the schema and update its documentation; and
8. rebuild or invalidate derived views and publications deliberately.

Never reuse an identifier for a newly defined entity because the old record is inconvenient. Record merges, splits, redirects, replacements, and deprecations so existing references remain explainable.

## an example through the application

Consider a PDF report uploaded to Archive and used in a Team Spaces project:

1. A **file object** records received name, size, media type, checksum, and protected storage location.
2. A **capture activity** relates the file to its source URL, uploader, and time.
3. An **extraction activity** produces raw title, author, date, text, and page-count observations with tool provenance.
4. A curator creates or links a **work** and accepts, corrects, or rejects selected observations as curated assertions.
5. Identified **agents**, **places**, and **subjects** connect through typed relationships rather than delimited strings.
6. A **project relationship** records why the source matters to a question or task without modifying its general bibliographic record.
7. An **analysis activity** uses the source and generates a dataset or note.
8. A **publication** selects a safe metadata view and derivative file for a defined audience while retaining its connection to the private history.

This model can begin simply. The important achievement is not the number of tables; it is that later editing and publication do not erase the chain from received evidence to curated knowledge.

## a model review checklist

Before accepting a structure, ask:

1. What real-world or project entity does each record represent?
2. Which values are observations, curated assertions, computed results, or publication choices?
3. Which names are labels and which values are durable identifiers?
4. Which repeated strings should become referenced entities or controlled concepts?
5. Can relationships carry their own role, order, dates, evidence, and history where needed?
6. Are missing, unknown, withheld, not applicable, and empty distinguishable when necessary?
7. Which constraints can the schema or database enforce, and which require human review?
8. Can a schema change preserve old references and explain migrations?
9. Can the complete meaning be exported without the original interface or vendor?
10. Can a person trace a published value back to its source and decision history?

If the answers remain intelligible outside the chosen database and interface, the structure is serving the information rather than trapping it.
