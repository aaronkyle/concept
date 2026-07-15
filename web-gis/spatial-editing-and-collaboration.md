# spatial editing and collaboration

Drawing a point or moving a polygon vertex is easy to demonstrate. Building a trustworthy editing system is harder: the application must preserve identity, coordinate meaning, attribute rules, provenance, review, and recovery while remaining understandable to someone who is not a GIS specialist.

Our goal is not to reproduce every desktop GIS control in a browser. It is to make focused spatial tasks—collecting a location, correcting a boundary, describing a feature, reviewing a proposal, and publishing an approved revision—safe and legible.

## begin with a task and a schema

An editing interface should know what kind of record it is creating. A field observation, building footprint, administrative boundary, route, and research annotation need different geometry, attributes, validation, precision, and review.

Define before drawing:

- allowed geometry types and whether multipart or empty geometry is valid;
- required fields, types, units, controlled values, and identifiers;
- coordinate reference system and expected geographic extent;
- snapping, overlap, containment, adjacency, or minimum-size rules;
- temporal meaning: observed at, valid from/to, or edited at;
- source and evidence fields;
- sensitivity and publication rules; and
- who may propose, review, approve, and publish a change.

The form and map should enforce the same schema. A feature is not complete merely because its geometry renders.

## local-first collection

The browser can read a user-selected file, inspect it, and display it without uploading it. It can also create draft geometry and attributes in memory or local storage. This local-first path is valuable for private data, exploratory work, intermittent connectivity, and quick format conversion.

The interface should state clearly whether data remains on the device. If the page contacts a basemap, geocoder, analytics service, or remote processor, that traffic is part of the privacy explanation even when the uploaded file itself stays local.

Local drafts need an export path. Export a complete change package containing the features, schema version, parent dataset or release, editor-supplied evidence, validation results, coordinate system, creation time, and application version. GeoJSON may suit a small proposal; GeoPackage is often better for a portable multi-layer project.

## drawing and modifying geometry

[Terra Draw](https://www.osgeo.org/projects/terra-draw/) can provide drawing and editing modes through adapters for MapLibre and Leaflet. MapLibre and Leaflet also have their own plugin ecosystems. These libraries supply interaction mechanics, not the whole data model.

A good focused editor should:

- make the active layer and geometry type unmistakable;
- show coordinates, scale, and snapping state where relevant;
- support undo and redo without silently discarding attributes;
- distinguish a selected feature from an approved feature;
- validate during editing but permit an explained exception where the domain requires one;
- preserve stable feature identifiers across geometry changes;
- warn when simplification, reprojection, or precision loss will occur; and
- present a table or form for attributes, not hide them in popups alone.

For precise or topology-intensive work, QGIS may remain the better editor. The web application can still package the source, schema, and project context; accept a documented export; validate it; and place the result into the same review workflow.

## changes, not silent replacement

A proposed edit should be a first-class record. It needs:

- change identifier and parent dataset version;
- feature identifier;
- operation such as create, modify, split, merge, or retire;
- previous and proposed geometry and attributes, or a reproducible patch;
- author, timestamp, reason, and evidence;
- validation status and warnings; and
- review decision and reviewer notes.

This makes it possible to show a meaningful spatial diff: added, removed, and changed features; movement or area change; altered attributes; and the geographic extent affected. File-level version control alone may say that a binary changed without explaining the feature-level consequence.

Concurrent editing also needs an explicit policy. Optimistic concurrency can reject or rebase a proposal whose parent version is no longer current. A shared transactional database may be warranted when many editors must update the same features in real time. Otherwise, branch-and-review change packages can keep the system simpler and the history clearer.

## review and publication

Reviewers need synchronized map, table, evidence, and diff views. They should be able to accept a complete proposal, request correction, or—when the data model supports it—approve individual changes without severing their provenance.

Approval should produce a new canonical release, not mutate the only known copy. Derived outputs such as GeoParquet, generalized GeoJSON, COG, or PMTiles are then rebuilt from that release. Published applications can point to the new immutable artifacts after validation and disclosure review.

The [spatial data lifecycle](spatial-data-lifecycle.md) describes these artifact classes. [team-spaces.categori.se](https://team-spaces.categori.se/) and [docs-repo.categori.se](https://docs-repo.categori.se/) suggest how working proposals, supporting discussion, and reviewed documentation can remain connected.

## safe persistence

A public static application should have no ambient write access. If a user signs in and saves a shared proposal, the service should authorize the specific dataset and operation, validate the payload again on the server, assign an immutable change identifier, and write to a staging location or change store—not overwrite the canonical release.

On AWS, a small Lambda-backed endpoint can assume or use an IAM role limited to the necessary actions and resource prefix. Logs should identify the operation without unnecessarily copying sensitive geometry or attributes. Short-lived credentials, size limits, content validation, rate limits, encryption, retention rules, and an incident-recovery path remain necessary.

See [privacy by architecture](../data-privacy/privacy-by-architecture.md) and the [data security](../data-security/README.md) discussion for the broader controls.

## an incremental path

An achievable sequence is:

1. read and inspect a local open-format file;
2. connect map selection to a schema-driven attribute form;
3. draw and edit draft features with undo, validation, and export;
4. compare an exported proposal with a known parent release;
5. add authenticated submission into a review queue;
6. approve changes into a versioned canonical dataset; and
7. rebuild and publish static spatial artifacts.

This produces useful tools at every stage without pretending that browser drawing alone has solved collaborative spatial data management.
