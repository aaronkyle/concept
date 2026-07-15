# structured data for web discovery

“Structured data” has two related but different meanings in this repository. The [data-structures discussion](../data-structures/) concerns the internal model used to identify entities, validate records, preserve provenance, and connect information across applications. This page concerns machine-readable descriptions published with web pages so search engines, catalogs, and other consumers can understand what a page represents.

The earlier `data-structures/structured-data.md` linked to Google's search documentation. That material belongs here because search markup is a publication derived from the underlying record, not the record's authoritative schema.

## publish from the canonical model

Machine-readable markup should be generated from the same reviewed data that produces the visible page. Do not maintain an unrelated block of hand-entered metadata that can contradict the title, dates, people, or availability a visitor sees.

A static build is a useful boundary:

1. select the approved public fields from the canonical record;
2. map those fields to a documented publication vocabulary;
3. generate the visible HTML and machine-readable representation together;
4. validate both the syntax and the claims against the published page; and
5. preserve the build version and source record used for the release.

This follows the wider [W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/): provide descriptive and structural metadata, provenance, licenses, version information, persistent identifiers, documented formats, and appropriate access.

## Schema.org and JSON-LD

[Schema.org](https://schema.org/docs/documents.html) supplies a widely used vocabulary for describing web resources such as organizations, people, articles, datasets, events, places, and creative works. [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/) is a W3C-standard JSON serialization for linked data that can be embedded in an HTML `script` element.

Google Search supports JSON-LD, Microdata, and RDFa for documented search features and generally recommends JSON-LD when a site's implementation permits it. Eligibility and required properties are product behavior, not permanent features of Schema.org, so consult the current [Google Search structured-data documentation](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) for a particular result type.

An illustrative publication record might be:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": "https://example.org/datasets/places-2026-07-15",
  "name": "Reviewed places dataset",
  "description": "A dated public snapshot of reviewed place records.",
  "datePublished": "2026-07-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "application/vnd.apache.parquet",
    "contentUrl": "https://example.org/data/places-2026-07-15.parquet"
  }
}
</script>
```

The example is not a promise of a particular search appearance. Every property must describe the actual public dataset and distribution.

## dataset catalogs and DCAT

Search markup is not the only publication structure. [DCAT 3](https://www.w3.org/TR/vocab-dcat-3/) models datasets, distributions, data services, catalogs, and catalog records for exchange among data portals. It can express distinctions that are important in this project: one conceptual dataset may have several dated versions or distributions in CSV, Parquet, GeoJSON, or another format.

Schema.org may be sufficient for an ordinary public page. DCAT becomes useful when Archive, OpenGeo Tools, or another application participates in a data catalog or needs richer dataset exchange. A project can generate both from one canonical metadata profile rather than forcing the internal database to use either vocabulary as its complete schema.

## identifiers and linked entities

Use stable public URLs for resources intended to be referenced on the web. A public `@id` should resolve or remain documented over time. Link to verified external identifiers for people, organizations, places, licenses, and publications where that connection is part of the approved public record.

Do not turn every internal UUID, account record, storage object, or private source into a public URI. [Identifiers, names, and controlled values](../data-structures/identifiers-names-and-controlled-values.md) distinguishes internal identity, public identity, labels, external schemes, and locators.

## privacy and security

Structured markup is public page content even when it is not visibly rendered. It can expose names, precise locations, internal identifiers, unpublished dates, source relationships, contact details, or direct file URLs that the visible page intentionally omits.

Apply the same publication profile and review to HTML, JSON-LD, feeds, sitemaps, APIs, static JSON, and downloadable datasets. Never place access tokens, presigned URLs, private bucket keys, administrative identifiers, or hidden personal fields in markup. Removing a visible widget while leaving the data in JSON-LD does not protect it.

The [privacy](../data-privacy/) and [security](../data-security/) discussions apply to machine-readable publication in the same way they apply to visible content.

## validation and maintenance

Validation has several layers:

- JSON syntax and JSON-LD processing must succeed;
- vocabulary terms and value types must be used as documented;
- provider-specific required fields must be present for a desired feature;
- URLs and public distributions must resolve for the intended audience;
- markup must agree with visible content and the approved source record; and
- privacy, licensing, and publication rules must permit every exposed value.

Provider testing tools can verify current product requirements, but passing a rich-result test does not establish truth, accessibility, licensing, or long-term interoperability. Include structured publication in ordinary build tests and revisit mappings when the internal profile, vocabulary, or provider guidance changes.

## a publishing checklist

1. Which public entity does the page describe?
2. Which canonical record and version produced the page?
3. Does every machine-readable claim also have approved public meaning?
4. Is the selected vocabulary appropriate to the entity and audience?
5. Do visible HTML, JSON-LD, downloads, feeds, and APIs agree?
6. Are identifiers stable and public by design?
7. Have private metadata, infrastructure details, and temporary capabilities been excluded?
8. Can the markup be regenerated rather than edited independently?
9. Has it been tested syntactically, semantically, and against current consumer guidance?
10. Will corrections and withdrawals update every published representation?

Structured web data should make a truthful public record easier to discover and reuse. It should not become a second, less visible version of the truth.
