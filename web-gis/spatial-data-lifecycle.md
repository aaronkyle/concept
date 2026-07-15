# spatial data lifecycle

Spatial data is not finished when it appears on a map. A durable workflow must account for how the material was acquired, what was changed, who reviewed it, which representation is authoritative, and how a reader can understand or reuse the result.

The lifecycle here adapts the repository’s general [data capture](../data-capture/README.md), [data structures](../data-structures/README.md), [data storage](../data-storage/README.md), [data analysis](../data-analysis/README.md), and [digital publishing](../digital-publishing/README.md) discussions to spatial material.

## collect and register

Collection may begin with a downloaded archive, an API response, a field survey, a GPS track, a spreadsheet of coordinates, a service layer, a digitized paper map, or geometry drawn in a browser. At intake we should record, at minimum:

- a stable internal identifier;
- the original filename and source URL or transfer context;
- the source organization and contact, where relevant;
- acquisition date and source publication or observation date;
- checksum and file size;
- stated license, attribution, and access restrictions;
- declared and detected format;
- coordinate reference system, axis order, and units;
- geographic and temporal extent; and
- a short explanation of why the material was collected.

Keep the original bytes unchanged. A shapefile, for example, is a group of related files rather than a `.shp` file alone; preserving only one member destroys attributes or indexing information. Service responses should be saved with the request parameters and retrieval time when the terms permit it.

## inspect and preserve

Before transformation, inspect whether the file opens, whether its geometry and attributes agree with the documentation, and whether it contains information that should not be published. Generate a human-readable inventory, but do not confuse extracted metadata with source-supplied metadata.

An archived item should be content-addressable or checksum-verifiable. Copies may live in versioned object storage rather than Git when they are large, sensitive, or binary, but their manifests and provenance can still be reviewed with the project. The archive should retain previous source releases when geographic boundaries or observations change over time.

## normalize without erasing the source

Create a documented canonical representation for recurring use. Typical normalization includes:

- assigning stable record identifiers that do not depend on row order;
- standardizing attribute names, types, dates, units, and missing values;
- validating geometry and explaining any repair;
- identifying or transforming the coordinate reference system;
- retaining original names and codes alongside harmonized values;
- separating display labels from durable identifiers; and
- preserving source fields or an explicit field-level mapping when practical.

Administrative names are not reliable keys: spellings, languages, transliterations, boundaries, and political status change. Use source identifiers and documented crosswalks. For countries and areas, consult the current [UN M49 overview](https://unstats.un.org/unsd/methodology/m49/overview/) and [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) rather than copying a table that will silently become stale.

## work, analyze, and propose changes

Working artifacts may contain geometry edits, corrected attributes, annotations, joins, classifications, or alternate interpretations. A proposed change should identify its parent version, author, time, method, and reason. Geometry changes also benefit from a before-and-after extent, a feature-level summary, and validation results.

Derived data should be reproducible from source or canonical inputs. Keep scripts, SQL, loader code, parameters, and software versions close to the analysis. A generalized boundary, spatial join, raster classification, or tile archive should not become the undocumented master merely because it is convenient to display.

## review and release

Review asks more than whether the map looks right. It should cover:

- source and license eligibility;
- schema and identifier stability;
- coordinate reference system and positional expectations;
- invalid, empty, duplicate, or implausible geometry;
- joins, filters, exclusions, and aggregation;
- disclosure risks and location sensitivity;
- cartographic choices and accessible alternatives; and
- whether every published artifact can be traced to a reviewed input and method.

A release binds together the canonical data version, derived representations, style, layer configuration, narrative, source notes, license, and build identifier. Keeping these artifacts in revision control lets a team recover the state behind a published map even when the canonical dataset itself is stored elsewhere.

## publish and maintain

Publish only the minimum data needed for the application. A public static site can still expose every field embedded in a GeoJSON, Parquet, or tile archive, even when the interface does not show those fields. Inspect build outputs, remove private attributes, and consider whether precise geometry creates risk.

Maintenance includes monitoring source updates, broken services, changing licenses, boundary revisions, dependency security, and the continuing relevance of the map’s claims. A release should state its date rather than presenting an old snapshot as live data. When a project ends, the documentation and portable published files should remain understandable without its original interface.

## artifact relationships

A practical manifest can make the chain explicit:

```text
source item
  -> canonical dataset and schema
      -> working branch or proposed change
          -> reviewed canonical release
              -> analytical result
              -> generalized geometry
              -> tiles or cloud-optimized raster
                  -> map style and application release
```

These relationships should be recorded as data rather than inferred from filenames. The archive and documentation concepts at [archive.categori.se](https://archive.categori.se/) and [docs-repo.categori.se](https://docs-repo.categori.se/) are intended to make that history visible, while [team-spaces.categori.se](https://team-spaces.categori.se/) can support the review boundary between working and released material.

See [open geospatial formats](open-geospatial-formats.md) for representations at each stage and [spatial editing and collaboration](spatial-editing-and-collaboration.md) for the structure of a change.
