# concept

This repository seeks to define a system for open digital communication that aids investigation of complex social and environmental phenomena.

It began as an inventory of what we wanted from a web-based data and knowledge management application. The notes ask how people can gather source material, organize data and documents, work together, retain a meaningful history of changes, carry out analysis, and publish what they learn. This README provides context for that inquiry and points toward the more detailed discussions collected throughout the repository.

The system may ultimately be a set of connected applications rather than a single, monolithic platform. What matters is that the parts share a coherent approach to data, metadata, identity, permissions, revision history, and publication.

## intentions

We want people to be able to move from collecting information to understanding and communicating it without repeatedly losing context along the way. A file, dataset, map, note, or web source should remain connected to where it came from, what has been done to it, who is responsible for it, and which projects or conclusions depend upon it.

The project is therefore concerned with both data management and knowledge management. Data management helps us store, describe, protect, transform, and retrieve information. Knowledge management helps a team relate that information to questions, decisions, interpretations, and published work.

Toward a 'common public good', we want the resulting system to make serious research and publication more accessible while respecting the privacy, security, licensing, and permissions that some work requires.

## design parameters

1. **systems should be free and, as much as possible, open source.**

   'Free' concerns more than price. People should be able to inspect the methods they rely upon, retain control of their information, move their work elsewhere, and avoid unnecessary dependence on a single vendor or software license. Open standards and documented export paths remain important even where a proprietary service is useful.

2. **the system should support collaborative research through revision history.**

   Collaborative work requires more than shared access to the latest copy of a file. A team should be able to see how material changed, understand why a revision was made, recover an earlier state, and connect a published result to the sources and decisions that produced it. Git and similar revision-control systems demonstrate this principle, though not every user should need to become a Git specialist.

3. **the system should encourage human-readable and portable information.**

   Plain-text formats such as Markdown, JSON, and CSV can be opened by many applications and inspected without specialized software. They are also well suited to comparison and revision tracking. Binary files will remain necessary, but they should be accompanied by useful metadata and should not become the only place where essential context is stored.

4. **the system should separate content from presentation wherever practical.**

   Authors should be able to write and structure material without binding it permanently to one website, theme, or publishing tool. Markdown and HTML provide a useful common layer for turning the same source material into web pages and other publication formats. This does not mean every kind of information must be forced into one file format; it means that content should remain reusable when its presentation changes.

5. **the system should connect private work with deliberate publication.**

   Research often begins within a private workspace and develops through team review before any part of it is made public. Projects therefore need clear user, group, and account permissions, along with an intentional path for publishing selected material without exposing protected sources or working files.

6. **specialized tools should remain interoperable.**

   People need different interfaces for writing, file management, project coordination, data analysis, visualization, and mapping. We expect variety in these interfaces, but greater standardization in how the underlying information is identified, described, related, secured, and exchanged. A useful result created in one part of the system should be available to another without being copied into an unrelated information silo.

## application context

The application should help people work across a connected sequence of activities:

1. capture or connect a source while preserving its origin;
2. store the source and describe it with useful metadata;
3. organize sources, files, questions, and responsibilities within projects;
4. grant people appropriate access to shared work;
5. review changes and preserve important decisions;
6. analyze data and develop interpretations; and
7. publish selected documents, data, maps, or visualizations for a wider audience.

These activities do not have to occur in a rigid order. Research is iterative: publication may reveal a missing source, analysis may change a project's questions, and new evidence may require an earlier conclusion to be revised. The system should make those relationships easier to see rather than pretending that knowledge develops in a straight line.

Geospatial information remains an important proving ground because it combines large files, structured metadata, permissions, analysis, visual design, and interactive publication. The more specific mapping and spatial-data requirements now belong in the [web GIS discussion](web-gis/README.md), where they can be developed without making GIS appear to define the whole application.

## privacy as a system property

Data privacy concerns more than protecting a database from intrusion. An ordinary website visit can create records in hosting, delivery, application, analytics, and third-party systems before a person submits a form. Companies may use explicit account information together with browsing, location, device, purchase, and inferred data for service operation, advertising, audience segmentation, brokerage, fraud decisions, or individualized offers. The commercial exchange is not always the sale of a recognizable customer file; value may move through advertising auctions, identity matching, analytics access, predictions, or the ability to act upon an audience.

Privacy can be lost through intended collection as well as a security failure. Third-party page resources, cookies, tracking pixels, URLs, referrer headers, browser storage, overly broad APIs and cloud roles, public object storage, logs, exports, embedded file metadata, build artifacts, and AI-service requests can all carry information beyond the context in which a person expected to provide it. Retained copies and derived data also matter: correcting or deleting a primary record does little if the earlier value survives in a search index, snapshot, cache, backup, model input, or published file.

The system should therefore begin with a defined purpose, collect the least sensitive information necessary, separate identity from content and activity where practical, limit access for both people and workloads, record consequential decisions, and establish retention, correction, deletion, revocation, and incident procedures. Privacy notices and consent choices should describe real data flows; they cannot substitute for an architecture that avoids unnecessary collection and sharing.

Our use of static-state data applications can reduce live access to source systems and provide a bounded publication artifact, but every file shipped to a browser must be treated as public unless a separate access control protects it. Narrow AWS Lambda functions and least-privilege IAM roles can isolate necessary dynamic operations, while S3, CloudFront, logs, build caches, presigned URLs, and third-party services remain part of the privacy boundary. The [data-privacy overview](data-privacy/README.md) develops the global discourse and fundamental principles; [how websites collect and share data](data-privacy/how-websites-collect-and-share-data.md) follows common commercial and technical flows; and [privacy by architecture](data-privacy/privacy-by-architecture.md) applies the discussion to patterns used in `framework`, AI-assisted work, and the applications linked below.

## current prototypes

Recent work in `framework` and `framework/ai` develops working examples of several ideas first collected here. The [categori.se development hub](https://categori.se/) provides an entry point to this wider family of information systems, knowledge tools, maps, documents, data, and AI-assisted workflows.

- [archive](https://archive.categori.se/) explores durable document intake, immutable file identity, metadata extraction and curation, connected sources, and controlled access;
- [docs repo](https://docs-repo.categori.se/) explores project-oriented file management, editing, previews, metadata, and revision workflows;
- [team spaces](https://team-spaces.categori.se/) explores portfolios, projects, tasks, documents, reporting, and collaboration within shared workspaces;
- [workspace management](https://workspace.categori.se/) explores relationships among projects, external files, source pages, decisions, requirements, teams, and accounts; and
- [OpenGeo.Tools](https://opengeo.tools/) explores a browser-first spatial data catalog and GIS workspace.

These prototypes are not presented as a final architecture. They give us practical surfaces on which to test older assumptions, discover missing requirements, and compare the benefits and costs of different boundaries between applications.

## resources and further discussion

The repository expands the concept through several related areas:

- [data capture](data-capture/) considers how information enters the system;
- [data storage](data-storage/) and [data structures](data-structures/) consider how information is stored, described, and made retrievable;
- [data analysis](data-analysis/) and [data visualization](data-visualization/) consider how people examine and communicate evidence;
- [digital publishing](digital-publishing/) considers formats, revision practices, and publication workflows;
- [privacy](data-privacy/) and [security](data-security/) identify protections that must be developed alongside the application;
- [application architecture](application-architecture/), [platform hosting](platform-hosting/), and [user-interface design](ui-design/) consider responsibilities and trust boundaries, our preferred Observable Framework and AWS static-publication pattern, deployment environments, and the interfaces through which people use the system; and
- [web GIS](web-gis/) develops the specialized case of managing, analyzing, and publishing geospatial information.

Many of these pages began as scratch notes, tutorials, or collections of possible tools. Some references are historical, some discussions are incomplete, and some named products have changed or disappeared. We are revisiting them to distinguish durable requirements from dated implementation choices, improve the depth and clarity of the research, and preserve useful history without presenting it as current guidance.

## how this repository will evolve

The [retrospective working parameters](retrospective/working-parameters.md) record the editorial and research principles guiding this review. Each page will be evaluated for its purpose, voice, evidence, current relevance, and relationship to the rest of the concept before it is revised, merged, archived, or removed.

The aim is not to make the old inquiry look as though it had already reached today's conclusions. It is to show what we were trying to solve, what we have learned since, and what a more coherent system should now make possible.
