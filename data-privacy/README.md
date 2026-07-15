# data privacy

Data privacy concerns the power people and institutions gain by collecting, relating, retaining, and acting upon information about others. Security is part of privacy, but the two are not identical. Security asks whether data and systems are protected from unauthorized access or change. Privacy also asks whether the collection was necessary, whether a use is fair and expected, whether a person can understand or challenge it, and what harm may follow even when every system behaves as designed.

This discussion provides a general orientation rather than legal advice. Privacy law differs by place, sector, type of data, and relationship among the parties. A project that processes personal or sensitive information should identify the rules and obligations that actually apply to it.

## the changing data economy

Websites once appeared to collect data mainly when a person completed a form or opened an account. Contemporary data systems also observe ordinary activity: pages and links visited, searches, approximate or precise location, device and browser properties, purchases, social relationships, and the timing and sequence of interactions. Companies combine these observations with account records, public sources, purchased data, and predictions about interests or circumstances.

Much of this collection supports recognizable functions such as authentication, fraud prevention, remembering preferences, measuring reliability, or improving a service. The same infrastructure can also support cross-site advertising, audience segmentation, data brokerage, individualized offers, political influence, or differential pricing. The commercial transfer is not always a literal sale of a named record. Value may move through access to an audience, a matching service, an advertising auction, an analytics feed, a shared identifier, or a prediction produced from several sources.

The [U.S. Federal Trade Commission's work on surveillance pricing](https://www.ftc.gov/news-events/features/surveillance-pricing) illustrates a current concern: location, demographics, browsing, purchase history, and inferred characteristics may influence the price or offer shown to a person. Its action concerning [Mobilewalla and sensitive location data](https://www.ftc.gov/news-events/news/press-releases/2024/12/ftc-takes-action-against-mobilewalla-collecting-selling-sensitive-location-data) also shows how data emitted through real-time advertising systems can be collected and reused far from the context in which a person encountered an app or website.

Regulation and public discourse are consequently moving beyond a narrow model of notice and consent. There is growing emphasis on limiting collection, specifying purposes, constraining later uses, making organizations accountable, and giving people practical rights over information about them. The [OECD privacy principles](https://www.oecd.org/en/topics/privacy-principles.html) provide an enduring international foundation. The European Commission's summary of [data-protection principles](https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/overview-principles/what-data-can-we-process-and-under-which-conditions_en) similarly emphasizes fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, and safeguards.

Artificial intelligence intensifies rather than replaces these questions. Models and services may receive prompts, documents, images, metadata, and feedback; infer attributes that were never directly supplied; or reproduce information contained in source material. The [European Data Protection Board's opinion on AI models](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en) makes clear that a model should not be assumed anonymous merely because its training records are not presented as a conventional database.

## how privacy is lost

Privacy failures occur through both deliberate data practices and technical mistakes. Common paths include:

- placing advertising, analytics, font, video, map, support, or social-media resources on a page, causing a visitor's browser to contact another organization;
- using cookies, browser storage, tracking pixels, mobile advertising identifiers, or device fingerprinting to recognize activity over time;
- including names, tokens, search terms, document identifiers, or other sensitive values in URLs that reach browser history, referrer headers, analytics, screenshots, and logs;
- exposing storage buckets, database backups, administrative interfaces, source maps, client-side configuration, or APIs more broadly than intended;
- granting staff, contractors, applications, or cloud roles more access than their work requires;
- recording complete requests, uploaded content, authentication material, or personal fields in application, function, CDN, and audit logs;
- retaining old exports, caches, derived datasets, previews, and backups after the primary record has been corrected or deleted;
- publishing files whose embedded metadata reveals authorship, device details, revision history, or precise location; and
- treating pseudonymous or aggregated data as anonymous when it can be related to other information and re-identified.

The companion discussion, [how websites collect and share data](how-websites-collect-and-share-data.md), follows these flows from an ordinary page visit into advertising, analytics, brokerage, and organizational records. [Extracting metadata with ExifTool](../data-capture/extracting-metadata-with-exiftool.md#privacy-and-publication) addresses one important file-level leak, while NIST's work on [de-identification](https://csrc.nist.gov/Pubs/ir/8053/Final) explains why removing obvious identifiers does not eliminate every identification risk.

## fundamental privacy concepts

### begin with purpose

State the purpose before collecting data. A broad desire to keep information because it may become useful does not define a meaningful boundary. The purpose should determine which fields are necessary, who may use them, what later uses are compatible, how long they should remain, and what explanation a person receives.

### minimize the entire data flow

Collect the least sensitive information that will accomplish the purpose, at the least precise level and for the shortest practical period. Apply this not only to the main database but also to browser state, events, analytics, logs, test fixtures, exports, caches, backups, and derived data. The FTC's [guide for protecting personal information](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business) begins with taking stock, scaling down, protecting what remains, disposing of what is no longer needed, and preparing for incidents.

### separate identity from content and activity

Do not attach a stable personal identifier to every record merely because the system can. Where identity is necessary, separate account, profile, content, and activity data so that each can have different access, retention, and publication rules. Pseudonyms and internal identifiers reduce casual exposure but remain personal data when the organization can reconnect them to a person.

### make boundaries visible

Document where information enters, each service or organization that receives it, where it is stored, which transformations create new copies or inferences, and how it is removed. This data-flow record should include infrastructure logs and third-party resources, not only the application database. A privacy notice should accurately describe this architecture; it cannot compensate for an architecture that collects more than the service needs.

### limit access and retain accountability

Give people and workloads only the access required for a defined task. Authenticate the actor, authorize the particular action and resource, and retain an appropriately protected record of consequential access or change. Audit records should be useful without becoming a second, indefinitely retained store of sensitive content.

### support participation and correction

People should be able to learn what is held about them, correct inaccurate information, withdraw optional participation, and request deletion where applicable. These operations must reach replicas, search indexes, generated snapshots, and downstream systems rather than changing only the visible profile.

### plan for failure and change

Assume that links will be forwarded, credentials will be mishandled, dependencies will change, and a once-acceptable use may become inappropriate. Define incident response, revocation, deletion, recovery, and review procedures before they are needed. Privacy is a continuing property of a system, not a one-time compliance exercise.

## privacy through architecture

The [privacy by architecture](privacy-by-architecture.md) discussion applies these principles to patterns used across our work:

- generating static data applications and public snapshots at build time;
- keeping private source data and credentials outside the published artifact;
- placing narrow dynamic operations behind AWS Lambda or a comparable function boundary;
- using separate, least-privilege IAM roles and temporary credentials;
- controlling S3 and CloudFront access rather than assuming an unlisted URL is private; and
- treating logs, caches, build products, and presigned URLs as part of the privacy surface.

The public [`aaronkyle/framework`](https://github.com/aaronkyle/framework) repository provides examples of Observable Framework projects that compile Markdown, JavaScript, and data into static output. Observable's [data-loader documentation](https://observablehq.com/framework/data-loaders) explains how build-time snapshots can aggregate and minimize data before it reaches a visitor's browser. This pattern can reduce live access to source systems, but every file in the published build must be treated as public unless a separate access control demonstrably protects it.

## application context

The current applications provide different surfaces on which to test these principles:

- [archive](https://archive.categori.se/) must protect original documents, extracted text and metadata, source relationships, and access decisions throughout intake and curation;
- [docs repo](https://docs-repo.categori.se/) must account for file revisions, previews, generated derivatives, search, and deliberate publication;
- [team spaces](https://team-spaces.categori.se/) must keep membership, tasks, internal reports, and shared documents within appropriate team and project boundaries;
- [workspace management](https://workspace.categori.se/) must make relationships among people, accounts, projects, sources, decisions, and requirements visible without exposing the complete graph to every participant;
- [OpenGeo.Tools](https://opengeo.tools/) must consider how precise location, property, infrastructure, and community data can identify people or expose sensitive places; and
- the wider [categori.se development hub](https://categori.se/) should help a person understand which application is responsible for information and where a privacy request should be directed.

These descriptions express design questions, not a claim that the deployed applications have completed a privacy or legal review. Each application should maintain its own data inventory, access model, third-party register, retention schedule, and public explanation.

## working review questions

For each feature or data flow, ask:

1. What purpose requires this information, and can the purpose be met without it?
2. Is the information personal, sensitive, confidential, inferred, or capable of identifying someone when combined with other data?
3. What does the person reasonably expect, and what choice or legal basis applies?
4. Which browsers, services, organizations, roles, and people receive it?
5. What is placed in client code, URLs, logs, caches, exports, backups, and generated files?
6. How are access, correction, deletion, and revocation carried through derived systems?
7. What harm could processing cause even without a security breach?
8. How will we verify that the implementation still matches the stated purpose after it changes?

The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) offers a broader, voluntary structure for identifying and managing privacy risk. Specific security controls and incident practices should be developed alongside the [data-security discussion](../data-security/), without reducing privacy to security alone.
