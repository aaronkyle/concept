# retrospective working parameters

> status: living document<br>
> started: 2026-07-15<br>
> working branch: `agent/retrospective-review`

## purpose

This document records the parameters we use while revisiting `concept`. It is a working agreement, not a fixed style guide. We will revise it as the purpose of the project becomes clearer and as decisions made during the page-by-page review reveal better rules.

The immediate task is to bring the project up to date without erasing the questions, values, or voice that gave rise to it. Age alone is not a reason to remove something. A historical note may still explain why a requirement matters, even when the tool discussed in that note is no longer a practical choice.

## confirmed direction

- revisit the project as an inventory of needs for a web-based data and knowledge management application;
- reconsider claims, tools, links, and assumptions in light of developments over roughly the past ten years;
- improve consistency, clarity, research depth, grammar, spelling, and navigation;
- preserve Aaron's voice rather than replacing it with a generic technical or institutional voice;
- use lowercase titles by default, retaining normal capitalization for proper nouns and acronyms; and
- evolve these parameters in the repository as we work.

## editorial stance

### preserve the inquiry

Much of the writing thinks in public: it gathers possibilities, states values, poses unresolved questions, and tests connections between tools and larger goals. That exploratory character is part of the project. Editing should clarify the inquiry, not make an unfinished investigation sound falsely settled.

### preserve the voice

Voice characteristics observed in the current material include:

- a values-led concern with the common public good, equitable access, and freedom from unnecessary entry costs;
- an emphasis on open source, human-readable information, revision history, interoperability, and collaboration;
- first-person and collective language when explaining experience, belief, uncertainty, or intent;
- the recurring use of *toward* to frame work as a direction rather than a finished answer;
- direct, sometimes playful enthusiasm for useful ideas and tools;
- explanations that connect technical choices to their social or practical consequences; and
- deliberate use of quoted terms, parentheses, slashes, ampersands, and dashes to qualify or connect ideas.

These are cues, not a formula. We should read each proposed revision against the surrounding page and avoid manufacturing mannerisms that are not already there.

### distinguish voice from error or inheritance

We can correct spelling, grammar, broken syntax, accidental repetition, and incomplete sentences without treating those features as voice. We should also avoid learning Aaron's voice from text copied or closely adapted from tutorials, product documentation, Wikipedia, Stack Overflow, or other authors. Adapted material must be clearly bounded, attributed, checked for licensing, and either updated from its source or replaced with an original summary.

### prefer requirements before products

The project often moves quickly from a need to a named product or software stack. During revision, we should first recover the underlying requirement, constraint, or use case. We can then evaluate current approaches without merely substituting a new product name for an old one.

For example, a passage about a discontinued hosting service may still express durable requirements concerning cost, portability, deployment, or access. Those requirements should survive even if the product-specific discussion is archived.

## language and presentation

- Use lowercase page and section titles, except where a proper noun or acronym requires capitals.
- Prefer descriptive titles over labels such as “notes” when the page has developed a clear purpose.
- Preserve first-person singular or plural when it identifies genuine experience, intent, or responsibility.
- Do not silently change *I* to *we*, or *we* to an impersonal institutional voice.
- Explain specialized terms at first use when the intended reader may not know them.
- Use one spelling for recurring project terms after we confirm the preferred form. Candidate terms needing decisions include *open source*, *website*, *web-based*, *user interface*, *geospatial*, *metadata*, and *provenance*.
- Reserve quotation marks for quotations, deliberately provisional terms, or concepts being examined; remove only accidental or distracting quotation marks.
- Prefer readable Markdown over embedded HTML unless HTML provides a capability Markdown cannot.
- Keep line-level cleanup separate from changes of meaning whenever practical, so substantive revisions remain visible in the history.
- Do not normalize the writing merely to satisfy an automated linter.

## research and evidence

### source standards

- Prefer primary and authoritative sources: standards bodies, official documentation, original research, maintainers, and clearly responsible institutions.
- Use secondary sources when they add interpretation, comparison, or practical experience that a primary source does not provide.
- Record a version or date for claims that depend on a particular software release, policy, price, market share, service, or standard.
- Treat vendor claims as claims, not independent evidence.
- Distinguish observed fact, sourced claim, inference, personal experience, and project preference.
- Check whether copied or adapted material can lawfully remain, and preserve attribution and compatible license terms.
- Prefer a concise synthesis to a long excerpt. Link to the source so a reader can inspect it directly.

### currency checks

For each substantive page, verify:

1. whether the named tool, organization, service, or standard still exists;
2. whether its role, ownership, license, terminology, and supported workflow have changed;
3. whether the linked guidance still describes a supported version;
4. whether newer standards or approaches changed the underlying decision; and
5. whether the passage is current guidance, historical context, or an unresolved research lead.

An old source can remain when it is historically important. It should be labeled as historical rather than presented as current guidance.

### links

- Replace links with canonical HTTPS sources where possible.
- Do not replace a dead link until we understand what evidence or example it was meant to support.
- Use an archived copy when the historical page itself matters.
- Remove empty and placeholder links only after capturing the unfinished thought they represent.
- Review remote images for durability, attribution, license, and accessibility.

## content roles

Every page should eventually have one primary role. A page can link to supporting material, but it should not quietly change roles halfway through.

| role | purpose |
| --- | --- |
| principle | explains a durable value, requirement, or constraint |
| concept | develops the application model, information architecture, or workflow |
| decision | records a choice, its evidence, alternatives, and consequences |
| question | frames an unresolved issue and the evidence needed to answer it |
| research note | synthesizes sources around a defined question |
| reference | provides stable definitions, commands, fields, or other lookup material |
| tutorial | gives a tested sequence for completing a task |
| demonstration | preserves an executable example, prototype, or visual experiment |
| lead | records an unassessed link, quotation, tool, or idea for later investigation |
| history | preserves superseded context that still explains the project's development |

Long collections of unassessed links should remain leads until reviewed; they should not be presented as recommendations.

## review states

We will use the following decisions during the walkthrough. They describe what should happen next without prejudging the value of the original work.

| state | meaning |
| --- | --- |
| retain | sound and relevant; only light editing is expected |
| revise | purpose remains relevant, but the writing or organization needs work |
| research | a claim, tool, comparison, or workflow needs current evidence |
| merge | useful material overlaps another page and should have one clear home |
| separate | a page combines distinct roles that should be split |
| archive | historically useful, but no longer current guidance |
| remove | no continuing value, legal basis, or recoverable purpose has been identified |

Nothing should be removed merely because it is old, incomplete, or awkward. A removal should state what was considered and why it no longer serves the project.

## page review questions

For each page, we will ask:

1. What was this page trying to accomplish, and who was it for?
2. Does that purpose still belong in `concept`?
3. Which passages sound most like Aaron, and which appear imported or situational?
4. What remains true at the level of values, requirements, or user needs?
5. Which claims, links, examples, commands, or products require research?
6. Is the page a principle, concept, decision, question, research note, reference, tutorial, demonstration, lead, or history?
7. Does it duplicate or depend on another page?
8. What privacy, security, accessibility, licensing, maintenance, or governance concerns are absent?
9. What is the smallest revision that would make the page coherent and useful?
10. Should the result be retained, revised, researched, merged, separated, archived, or removed?

## initial repository assessment

This is an editorial snapshot, not a verdict on individual pages.

### shape of the repository

At the start of the retrospective, the inherited `master` snapshot contained 132 tracked files totaling about 79 MB. Before this working document was added, its principal text corpus contained 58 Markdown files, one reStructuredText file, five HTML files, and approximately 6,895 lines of prose, reference material, and demonstrations.

| area | text or demonstration files | approximate lines |
| --- | ---: | ---: |
| root `README.md` | 1 | 119 |
| data analysis | 2 | 11 |
| data capture | 1 | 70 |
| data privacy | 1 | 1 |
| data security | 1 | 1 |
| data storage | 3 | 461 |
| data structures | 4 | 528 |
| data visualization | 10 | 789 |
| digital publishing | 9 | 1,677 |
| platform hosting | 1 | 9 |
| server design | 3 | 158 |
| user-interface design | 7 | 602 |
| web GIS | 21 | 2,469 |

The corpus is therefore weighted heavily toward web GIS, digital publishing, visualization, and user-interface research. Privacy, security, and data analysis are placeholders rather than developed parts of the concept. Those gaps matter for a contemporary data and knowledge management application and should be discussed early, even if their pages are written later.

### age and currentness

The latest commit on `master` is dated 2021-01-30, while many product notes, tutorials, commands, and linked examples explicitly refer to material from roughly 2012–2018. Age is especially visible in discussions of hosting, content management, JavaScript libraries, cloud configuration, QGIS, GeoGig, OpenGeo/Boundless, and application deployment. These passages require evidence-based triage rather than bulk word replacement.

The repository contains about 1,177 HTTP or HTTPS URL occurrences, including about 557 plain-HTTP occurrences, as well as numerous empty or placeholder links. A page-by-page link audit will be more useful than a mechanical replacement because some links are evidence, some are examples, and some are unfinished reminders.

### organization and consistency

- `README.md` contains the core values and application ambitions, but it moves between manifesto, requirements, feature list, workflow, and software-stack notes.
- Scratch files range from short reminders to large research collections. Their level of assessment is not consistently visible.
- Several very short files are placeholders; several long files combine multiple documents or purposes.
- At the initial inventory, `web-gis/README.md` and `web-gis/software-stacks/data-management-concept-and-context.md` contained substantial duplicate material. The web GIS reconstruction replaced that duplication with a lifecycle-centered section and removed the obsolete parallel page.
- Some resources appear in more than one topical scratch file, which makes their intended home unclear.
- The corpus uses `README.md` both as a directory introduction and as a substantive article.
- Filename and heading conventions vary. A simple heading count found many more capitalized than lowercase headings, so lowercase titles should become an explicit forward-looking rule rather than an assumed description of all existing files.
- There are malformed filenames, placeholder anchors, remote images, embedded HTML, old commands, and a few Markdown structures that render ambiguously.

### authorship and attribution

Some pages clearly acknowledge adaptation from QGIS documentation or tutorials. Other pages shift abruptly into a different first-person voice or reproduce product and tutorial language without a clear boundary. Before line editing, we should identify what is original, what is quoted, and what is adapted. This is necessary both for voice preservation and for responsible attribution and licensing.

### branches and demonstrations

The remote `gh-pages` branch is not a simple published copy of `master`. It has diverged substantially: `master` and `gh-pages` have 64 and 408 branch-specific commits, respectively, and `gh-pages` contains about 345 files totaling roughly 148 MB. It includes many generated assets, site layouts, visualizations, and user-interface demonstrations that are absent from `master`, while omitting some prose found on `master`.

We should treat `gh-pages` as a separate experimental artifact until its relationship to the renewed project is decided. It should not be merged wholesale into the retrospective branch.

## provisional walkthrough order

1. Start with the root `README.md` to agree on purpose, audience, values, and the meaning of “application.”
2. Review the reconstructed geospatial narrative beginning with `web-gis/README.md`, then the lifecycle, formats, static application, editing, cartography, governance, and supporting-tool discussions linked there.
3. Follow the data lifecycle through capture, storage, structures and metadata, analysis, privacy, and security.
4. Review publication and knowledge-work needs: Markdown, Pandoc, JavaScript, revision control, content management, and collaborative authorship.
5. Review application structure: application architecture, platform hosting, user interfaces, permissions, accessibility, and deployment.
6. Review visualization and GIS references, separating durable principles from tool- or version-specific tutorials.
7. Inventory demonstrations, geospatial data, generated assets, and the `gh-pages` branch after the renewed concept tells us which experiments still matter.

The order may change after the root README discussion.

## open questions for the walkthrough

- Is `concept` primarily a product definition, a research notebook, a public knowledge base, a record of design history, or some combination with clearly separated parts?
- Who should be able to read and use the renewed material?
- Is geospatial work still central to the overall application, or one important domain among several?
- Which organizational names, client contexts, server paths, and past implementation details should remain as history, and which should be generalized or removed?
- When the project says *free*, which dimensions matter: price, software freedom, data ownership, portability, self-hosting, open standards, or all of these?
- How should private or sensitive research data relate to the stated goal of open digital communication?
- Should tutorials teach current practice, preserve historical practice, or be split into current and archival sections?
- What relationship should the renewed prose have to the experiments on `gh-pages`?

## working method

For each review session:

1. Aaron explains the page's original intent, current value, and any phrases or choices that should be protected.
2. We assign a content role and review state.
3. We list claims and technologies that require research before rewriting them.
4. We agree on a proposed structure.
5. We draft in small, reviewable changes, separating cleanup from changes of meaning where practical.
6. We inspect the rendered page and the diff together.
7. We update this document when the work reveals a reusable parameter or overturns a provisional assumption.

## decision log

| date | decision or observation | status |
| --- | --- | --- |
| 2026-07-15 | Use lowercase titles by default while preserving proper nouns and acronyms. | confirmed |
| 2026-07-15 | Preserve voice while correcting errors; do not infer voice from imported material. | confirmed |
| 2026-07-15 | Treat web GIS as the spatial specialization of the shared data lifecycle, not as a separate monolithic software stack. | confirmed |
| 2026-07-15 | Prefer a static public reading path built from reviewed open-format artifacts; add authenticated services only for operations that must change shared state. | confirmed |
| 2026-07-15 | Distinguish source, canonical, working, derived, and published spatial artifacts. Tiles and static application files are rebuildable publication products, not canonical data. | confirmed |
| 2026-07-15 | Choose spatial formats by lifecycle role. Preserve complete received packages, and maintain tested exports from databases or proprietary working environments. | confirmed |
| 2026-07-15 | Treat geometry, attributes, styles, and project configuration as related but distinct versioned state. | confirmed |
| 2026-07-15 | MapLibre, Leaflet, and Observable Plot have complementary roles: tiled interactive maps, compact conventional maps, and analytical geographic figures respectively. | confirmed |
| 2026-07-15 | A spatial release must preserve source, license, attribution, CRS, extent, time, quality, sensitivity, transformation, and review context. | confirmed |
| 2026-07-15 | Do not retain copied version-specific GIS manuals, obsolete vendor installation recipes, static country-code tables, or unexplained sample datasets as current guidance. Link to maintained primary documentation and preserve only demonstrations whose role is explicit. | confirmed |
| 2026-07-15 | Treat old material according to purpose and evidence, not age alone. | provisional |
| 2026-07-15 | Begin the walkthrough with the root README and use it to refine the remaining order. | provisional |
| 2026-07-15 | Use the root README as a domain-general front door that explains intent and links to deeper discussions. | confirmed |
| 2026-07-15 | Link current prototypes as practical tests of the concept, not as a settled final architecture. | confirmed |
| 2026-07-15 | Keep GIS visible as an important proving ground while moving its specialized requirements into `web-gis/README.md`. | confirmed |
| 2026-07-15 | Treat extraction as part of data capture: preserve the source, record raw machine observations, and keep human curation separate. | confirmed |
| 2026-07-15 | Consolidate OCR, document parsing, and embedded metadata in `data-capture/extracting-text-and-data-from-files.md`; remove the OCR scratch page and misplaced EXIF field list. | confirmed |
| 2026-07-15 | Organize `data-capture` as linked overview and topic pages so purpose, responsibility, commands, and tool limitations remain distinct. | confirmed |
| 2026-07-15 | Prefer a documented API or export to scraping when it represents the needed information, and preserve request context with the payload. | confirmed |
| 2026-07-15 | Do not recommend bypassing `robots.txt` as a routine capture setting; define scope, source load, permission, and publication limits before recursive retrieval. | confirmed |
| 2026-07-15 | Begin data-analysis discussions with questions, evidence, and interpretation rather than treating analysis as a catalog of tools. | confirmed |
| 2026-07-15 | Treat reproducibility as a relationship among sources, transformations, environments, decisions, outputs, and narrative; technical repeatability does not by itself establish truth. | confirmed |
| 2026-07-15 | Treat privacy as the management of harms and power created by data processing, not only as protection against unauthorized access. | confirmed |
| 2026-07-15 | Prefer privacy-preserving architecture before notice and consent: minimize data and third parties, make publication boundaries explicit, and carry retention and deletion through derived copies. | confirmed |
| 2026-07-15 | Use static data snapshots to reduce live access where appropriate, while treating every published build artifact as public unless a separate control demonstrably protects it. | confirmed |
| 2026-07-15 | Treat IAM roles, Lambda functions, object policies, browser requests, logs, build caches, and AI services as explicit boundaries in the application data flow. | confirmed |
| 2026-07-15 | Preserve `data-structures/ui-concept.html` as a historical demonstration of visible and editable file metadata, while referring its active requirements to Archive and Docs Repo. | confirmed |
| 2026-07-15 | Model file metadata in layers—intake facts, extracted observations, inference, human curation, project relationships, and publication—so an edit does not silently replace provenance. | confirmed |
| 2026-07-15 | Summarize privacy in the root README as a system property and use the `data-privacy` section for the detailed commercial, technical, and architectural discussions. | confirmed |
| 2026-07-15 | Treat security as a lifecycle spanning governance, identification, protection, detection, response, and recovery rather than as a list of software products. | confirmed |
| 2026-07-15 | Use bounded static builds to reduce the runtime attack surface while treating build systems, dependencies, deployment identities, and every published artifact as security boundaries. | confirmed |
| 2026-07-15 | Describe IAM, Lambda, S3, CloudFront, secrets, logging, and recovery as controls whose effectiveness must be verified in each deployment, not as security conferred by the choice of cloud service. | confirmed |
| 2026-07-15 | Preserve secret sharing as an advanced option for distributing exceptional recovery authority; do not present it as a replacement for managed keys, least privilege, independent backups, or recovery tests. | confirmed |
| 2026-07-15 | Prefer file-first storage: preserve original bytes, use open and inspectable canonical representations where practical, and add database or cloud complexity only for a demonstrated workload. | confirmed |
| 2026-07-15 | Do not equate binary with proprietary or text with insecurely unencrypted; judge a format by its specification, independent implementations, fidelity, portability, and the controls around it. | confirmed |
| 2026-07-15 | Use AWS as the usual cloud reference while documenting Azure equivalents needed in workplace settings; keep data models, schemas, manifests, and exports portable across either environment. | confirmed |
| 2026-07-15 | Treat databases, search indexes, object stores, warehouses, and lakehouse tables as distinct tools with explicit authoritative and derived roles rather than as interchangeable places to put data. | confirmed |
| 2026-07-15 | Prefer progressive storage complexity: open files, then embedded SQLite or DuckDB, then shared relational or object storage, and specialized distributed stores only when measured requirements justify them. | confirmed |
| 2026-07-15 | Center `data-structures` on entities, values, relationships, activities, assertions, schemas, and vocabularies; treat JSON, SQL, databases, files, and interfaces as implementations of that conceptual model. | confirmed |
| 2026-07-15 | Distinguish file objects, intellectual resources, versions, extraction events, curated assertions, project annotations, and publication distributions where their identity, provenance, authority, or lifecycle differs. | confirmed |
| 2026-07-15 | Separate durable identifiers from labels, filenames, storage paths, checksums, and external identifier schemes; preserve merges, splits, replacements, and vocabulary changes as accountable events. | confirmed |
| 2026-07-15 | Move search-oriented Schema.org and JSON-LD guidance to digital publishing, move filename conventions to file-first storage, and retire structure scratch pages after their durable content has a maintained home. | confirmed |
| 2026-07-15 | Preserve the historical metadata editor as an interface artifact while annotating why raw observations, curated values, identifiers, and dates cannot remain a flat collection of equivalent text inputs. | confirmed |
| 2026-07-15 | Treat digital publishing as a controlled transition from canonical, reviewed sources into audience-specific representations, followed by validation, release, observation, correction, and preservation. | confirmed |
| 2026-07-15 | Separate publication content, structure, presentation, behavior, metadata, and delivery so one reviewed source can support several outputs without becoming dependent on a single interface. | confirmed |
| 2026-07-15 | Prefer semantic documents and progressive enhancement: essential meaning and sources should remain available before JavaScript adds bounded interaction. | confirmed |
| 2026-07-15 | Keep maintained discussions focused on purpose, fit, practice, and risks; link to official manuals for exhaustive syntax rather than preserving copied, version-specific reference material. | confirmed |
| 2026-07-15 | Move Bootstrap and component-framework guidance to interface design, and retire the digital-publishing scratch inventory after its durable static-site, CMS, data-document, and revision concepts have maintained homes. | confirmed |
| 2026-07-15 | Distinguish commits and branches from reviewed public releases; every publication needs an intelligible version, status, correction path, and relationship to its sources and build. | confirmed |
| 2026-07-15 | Treat hosting as the combined build, origin, delivery, identity, logging, monitoring, backup, and recovery boundary rather than as a list of website providers. | confirmed |
| 2026-07-15 | Prefer a portable Observable Framework static artifact deployed to S3 through CloudFront for public data applications, with narrowly scoped dynamic services added only for demonstrated trusted operations. | confirmed |
| 2026-07-15 | Keep S3 origins private through CloudFront Origin Access Control where that architecture applies; do not confuse public delivery with a requirement for public bucket access. | confirmed |
| 2026-07-15 | Describe data ownership as accountable control of canonical sources, access, lifecycle, export, public representations, and provider exit—not as the absence of cloud providers. | confirmed |
| 2026-07-15 | Evaluate managed hosting by its repository access, build environment, previews, identities, retained artifacts, visitor data, platform coupling, and exit path rather than by deployment convenience alone. | confirmed |
| 2026-07-15 | Progress hosting complexity from static files to bounded functions, managed processes or containers, and administered virtual machines only as required behavior justifies the additional operating surface. | confirmed |
| 2026-07-15 | Retire `server-design` as a section because it mixed application responsibility, hosting, storage, and workstation maintenance; preserve its durable questions under application architecture and related maintained discussions. | confirmed |
| 2026-07-15 | Use application architecture to describe responsibilities, state, interfaces, and trust boundaries; use platform hosting to describe how those components are built, deployed, delivered, operated, and recovered. | confirmed |
| 2026-07-15 | Separate authoring, content authority, review, and public representation even when one product provides all four; require a canonical home and a defined direction for every transfer. | confirmed |
| 2026-07-15 | Treat interface permissions as an explanation of available actions, never as the enforcement boundary; authorize every protected operation where the resource is controlled. | confirmed |
| 2026-07-15 | Split components or services only when data ownership, trust, lifecycle, or measured operating requirements justify the additional contracts and failure modes. | confirmed |
| 2026-07-15 | Preserve the durable UI requirements in the former link inventories—responsive tables, progressive disclosure, file intake, forms, notation, linked views, and reusable components—while replacing copied and version-specific examples with maintained guidance. | confirmed |
| 2026-07-15 | Use Observable Framework, its standard library, recommended npm libraries, themes, grids, cards, and Inputs as the usual interface foundation for `/framework/` data applications. | confirmed |
| 2026-07-15 | Add another CSS or component framework only for a demonstrated requirement that the Observable foundation, semantic HTML, project CSS, and focused local components do not meet. | confirmed |
| 2026-07-15 | Treat browser input as transient state until a defined local-save or trusted-service workflow confirms persistence; distinguish selecting a file from uploading it. | confirmed |
| 2026-07-15 | Develop shared components around stable categori.se concepts and state transitions, not merely repeated styling or framework wrappers. | confirmed |
| 2026-07-15 | Retire the UI scratch and Semantic UI link pages after moving their durable concerns to maintained topic pages, data visualization, and data structures. | confirmed |
