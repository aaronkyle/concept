# document metadata

This page began as a field inventory for bibliographic references and a proposed file metadata editor. It identified important concerns: original names and locations, authors and publishers, geographic coverage, annotations, review notes, and domain-specific document types. Its limitation was structural. It placed facts about stored bytes, descriptions of intellectual works, classifications, and project commentary into one prospective record.

The current model preserves those concerns while separating entities and histories. Its active proving grounds are [Archive](https://archive.categori.se/), for intake, immutable file identity, extraction, curation, and controlled access, and [Docs Repo](https://docs-repo.categori.se/), for project files, previews, editing, metadata, and revisions.

This discussion is a conceptual profile, not a finalized application schema. [Modeling records and relationships](modeling-records-and-relationships.md) provides the general vocabulary; [identifiers, names, and controlled values](identifiers-names-and-controlled-values.md) addresses identity, labels, filenames, and classification.

## distinguish the file from the resource

A file is a particular sequence of bytes in a format. A resource or intellectual work is the report, article, photograph, dataset, agreement, or other content being described. One work may have several files: an original word-processing document, a PDF edition, an OCR derivative, a translated version, and a redacted publication copy. One file may also contain several resources, such as an archive or collected proceedings.

The model should distinguish at least when required:

- **file object:** received bytes, checksum, media type, size, storage history, and technical observations;
- **work or resource:** title, subjects, creators, abstract, genre, and stable external identity;
- **version or expression:** edition, revision, language, translation, accepted manuscript, or dated release;
- **representation or distribution:** PDF, CSV, GeoPackage, web page, thumbnail, OCR text, or another available form; and
- **collection or project context:** how the resource is grouped, used, reviewed, or interpreted in a particular body of work.

An application can combine layers in a convenient view, but it should not use a changed filename to imply a new work or overwrite an original file when creating a public derivative.

## metadata is a set of assertions

Metadata values come from different authorities and methods. The same property may have several assertions:

| layer | example | usual authority |
| --- | --- | --- |
| intake fact | received filename, source URL, capture time | capture process or uploader |
| technical observation | media type, byte size, page count | identified tool run |
| embedded observation | PDF title, XMP creator, EXIF coordinates | source file interpreted by a tool |
| imported description | DOI title and creators | named external registry or catalog |
| inference | detected language or predicted document type | model and version |
| curated assertion | corrected title, identified organization, approved genre | responsible person or workflow |
| project assertion | relevance, evidence role, task relationship | project member in that context |
| publication assertion | public title, abstract, rights, distribution URL | publisher or release process |

The interface may select a preferred current value, but important underlying assertions should retain source, method, agent, time, confidence or review status, and visibility. An extraction rerun should add new observations rather than silently rewrite what the earlier tool reported.

The [file-extraction workflow](../data-capture/extracting-text-and-data-from-files.md) and [ExifTool discussion](../data-capture/extracting-metadata-with-exiftool.md) explain how raw technical and embedded observations enter this model.

## core descriptive groups

### identity and labels

Record an internal stable ID for each managed entity. Preserve original, preferred, alternate, translated, abbreviated, and former titles as separate assertions where useful. Store external identifiers with their scheme: DOI, ISBN, ISSN, report number, catalog ID, or another authoritative identifier.

A checksum identifies exact bytes, not the intellectual work. A URL may identify a resource, locate a representation, or record where a file was captured; state which role it plays.

### technical file information

Technical properties may include media type, format and version, byte size, checksum, page count, dimensions, duration, character encoding, encryption state, and format-validation result. Record the observation tool and version when interpretation depends upon software.

Directory, object key, and storage provider are locators or administrative state rather than descriptive identity. Their detailed security and lifecycle belong in [data storage](../data-storage/working-with-s3.md), while the metadata record retains a controlled reference appropriate to the user's authorization.

### provenance and custody

Provenance can include source URL or system, source record identifier, acquisition method, uploader or capturing workload, capture time, original name and path, checksum event, custody transfer, extraction activities, transformations, and relationships among originals and derivatives.

Do not place a secret storage path, access token, or private source URL into a public descriptive record. Provenance has its own visibility and retention rules.

### creators, contributors, and organizations

Identify people and organizations separately from their display names, then relate them to the resource through roles such as author, editor, translator, photographer, compiler, reviewer, publisher, sponsoring organization, or rights holder. Preserve order when citation or responsibility depends upon it.

A single `author` string may remain a useful imported observation. Curated authorship should not require parsing that string every time or inventing one person record from an uncertain name.

### bibliographic description

Bibliographic properties can include title, container title, edition, publication date, publisher, volume, issue, pages or article number, series, report number, language, abstract, and persistent identifiers. Which properties apply depends on the resource type.

BibTeX remains useful for exchange with citation workflows, but its entry types and fields should not define the internal model. It is optimized for rendering citations and carries historical conventions that do not cover every contemporary resource or relationship. CSL JSON, RIS, and BibTeX can be generated or imported at the boundary while the application preserves identified agents, typed dates, external identifiers, and relationships.

For broader interoperability:

- [Dublin Core Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) provide general descriptive and relationship properties;
- [DataCite Metadata Schema](https://schema.datacite.org/) supports identification and citation of research outputs and datasets;
- the Library of Congress [BIBFRAME](https://www.loc.gov/bibframe/) model offers a richer linked-data approach for library description; and
- [DCAT](https://www.w3.org/TR/vocab-dcat-3/) distinguishes datasets, distributions, data services, and catalogs.

These standards are reference points, not a requirement to combine every field. Define an application profile that states which concepts are used, how they map, and what the project adds.

### spatial and temporal context

Separate several meanings that the old “country / region” and “year” fields could not express:

- where the content is **about** or the dataset has spatial coverage;
- where a photograph, observation, interview, or event was created;
- where a file was captured, stored, or published;
- when a work was created, issued, revised, captured, or modified;
- the period described by the content or observations; and
- the precision, uncertainty, source, and coordinate reference system of spatial values.

Relate resources to identified places or geometries when those places recur. Preserve the source wording as an assertion when mapping it to an authoritative place requires judgment.

### rights, sensitivity, and access

Record copyright or license, rights holder, source terms, sensitivity classification, embargo, retention, and intended audience where known. Separate the descriptive statement from enforcement: metadata may say a resource is restricted, while IAM and application authorization must actually prevent access.

Access decisions can vary by representation. A private original may support a redacted public derivative. Publication should select approved metadata rather than serialize every internal field.

### subjects, genres, and document types

The earlier inventory proposed useful domain categories including policy, operational guide, evaluation study, case study, loan agreement, project agreement, operational update, impact assessment, technical assistance report, brochure, proposal, and terms of reference. These remain possible seeds for a project vocabulary, not hard-coded universal types.

Keep separate:

- general resource form, such as journal article, report, dataset, image, agreement, or presentation;
- domain genre, such as evaluation study or impact assessment;
- subject concepts describing what the resource concerns;
- project role, such as evidence, background, deliverable, or working material; and
- workflow state, such as received, under review, approved, published, or withdrawn.

Each controlled value needs a code, label, definition, vocabulary version, and governance process. A classifier's prediction is an assertion pending review, not an automatic change to the curated type.

### annotations, review, and analysis

The old inventory placed “reviewer notes” and “attribute tags” in the bibliographic record. Notes and analytical judgments should normally be identified annotations with an author, creation time, target, motivation or type, visibility, revision history, and resolution state.

An annotation may target the whole resource, a page, passage, table, image region, metadata assertion, or relationship. Project-specific relevance and interpretation should remain in project context so one team's assessment does not become an unqualified universal description.

The [data-analysis discussion](../data-analysis/analysis-as-a-research-process.md) develops the relationship among sources, observations, transformations, interpretations, and conclusions.

### relationships and versions

Useful relationships include:

- is a representation of / has representation;
- is version of / has version;
- is translation of;
- is derived from;
- cites / is cited by;
- is part of / contains;
- supplements / is supplemented by;
- corrects, replaces, or withdraws;
- describes or is about;
- belongs to a collection; and
- is used by a project, task, analysis, or publication.

Use typed, directional relationships and identify both ends. Preserve source and review status where the relationship is asserted rather than mechanically known.

## a minimal assertion example

The following JSON is illustrative, not a proposed API contract:

```json
{
  "assertion_id": "0198a7d5-cc46-7a29-8c7c-a0133b4cd512",
  "subject_id": "0198a7d3-c77c-71d5-a3c6-293bc60cc6fc",
  "property": "title",
  "value": "A reviewed title",
  "language": "en",
  "basis": {
    "source_file_id": "0198a7d1-2cf0-72bd-a819-f51a30e05d5d",
    "method": "human_review"
  },
  "asserted_by": "person:0198a7d0-13e6-70da-9c52-32f1a10b0400",
  "asserted_at": "2026-07-15T16:20:00-04:00",
  "status": "accepted",
  "visibility": "team"
}
```

A real schema may represent properties and values more strictly. The example shows the important shift: the curated title is an accountable assertion about an identified subject, not an unexplained string that overwrote an embedded title.

## metadata profiles and required fields

Do not make every available field required. Define small profiles for actual operations:

- **intake profile:** managed file ID, original name, source or responsible uploader, capture time, media type, size, checksum, sensitivity, and custody state;
- **discovery profile:** preferred title, description, resource type, responsible agents, subjects, dates, language, and access summary;
- **bibliographic profile:** resource and container titles, contributors and roles, publication details, identifiers, and locator information;
- **dataset profile:** description, creators, publisher, temporal and spatial coverage, schema, license, version, distributions, and provenance;
- **publication profile:** approved public labels, description, rights, release version, public distributions, and contact; and
- **preservation profile:** fixity, format, provenance, custody, representation relationships, retention, and recovery information.

Fields may be required at a workflow transition rather than at initial capture. A received scan can enter with minimal facts, while approval for publication may require title, rights, accessibility review, and a safe public derivative.

## interface implications

The historical [metadata editor](ui-concept.html) placed technical and descriptive fields together, which remains useful, but each value now needs visual context. Current interfaces should:

- group values by entity and purpose rather than file-format tag name alone;
- show raw observations beside—but not inside—the curated field;
- expose provenance, conflict, confidence, and review history;
- distinguish read-only technical facts from controlled and free-text curation;
- support people, organizations, places, and vocabularies as linked entities;
- show which fields will be public before publication; and
- make corrections reversible without modifying the original file.

Archive and Docs Repo should implement only the complexity required by their current workflows, but exports should preserve the distinctions that the interface exposes.

## questions for the working schema

1. Which entities have identities independent of a file and which can remain embedded values?
2. Which source, tool, or person supports each preferred value?
3. Can conflicting observations coexist until a responsible review resolves them?
4. Which external standards or identifiers materially improve exchange?
5. Which domain classifications need governed vocabularies rather than free tags?
6. Which annotations belong to the general resource and which belong to a project?
7. Which metadata can be public, and which reveals private sources, people, locations, or infrastructure?
8. Which profiles and workflow transitions determine required information?
9. Can a user see the consequence of editing or publishing a value?
10. Can the resource, its versions, representations, assertions, and relationships be exported without losing their history?

The field inventory asked what we might want to see. The renewed model asks what each value means, who may assert it, and how it survives correction and reuse.
