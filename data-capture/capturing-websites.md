# capturing websites

Capturing a website can mean saving one file, creating a locally browsable copy of a section, preserving a time-bounded research record, or collecting structured data made available through the site. These are different tasks and should not be hidden behind a generic instruction to “download the website.”

Part of [data capture](README.md), this page helps define the capture before choosing a tool.

## questions to answer first

1. What research, preservation, migration, or evidentiary purpose does the capture serve?
2. Is one resource sufficient, or is the relationship among linked pages important?
3. Does the site provide an API, feed, bulk download, sitemap, or export that better represents the information?
4. Is the material public, authenticated, licensed, personal, confidential, or otherwise restricted?
5. Is the site primarily static HTML, or does browser-side JavaScript assemble its content after loading?
6. What domains, paths, file types, languages, dates, and depth belong within scope?
7. How will we know whether the result is complete enough for its intended use?
8. How will the source be cited, and how will later readers distinguish the capture date from the source's publication date?

## choosing a method

| need | likely starting point | limitation |
| --- | --- | --- |
| one file or response | [Wget](using-wget.md) or `curl` | does not preserve surrounding context |
| a bounded set of linked static pages | [Wget](using-wget.md) | requires careful scope and link handling |
| an interactively configured site mirror | [HTTrack](using-httrack.md) | does not reproduce every dynamic application |
| machine-readable records | [the site's API or export](capturing-structured-data-from-apis.md) | may require pagination, credentials, or schema interpretation |
| replayable request and response history | a web-archive workflow using WARC | a folder mirror alone is not an archival record |
| JavaScript-rendered application state | a controlled browser-capture workflow | may capture a view rather than the underlying data |

[WARC](https://www.loc.gov/preservation/digital/formats/fdd/fdd000236.shtml) is designed to store web retrieval records and payloads together. It is worth considering when reproducible capture history matters more than simply browsing a copied folder.

## responsible retrieval

The [Robots Exclusion Protocol](https://datatracker.ietf.org/doc/html/rfc9309) gives site operators a standard way to state preferences for automated crawlers. A `robots.txt` rule is not a grant of permission, and its absence is not a statement that unrestricted capture is welcome. We should treat it as one relevant signal alongside terms of use, licenses, access controls, applicable law, and direct communication with the source owner.

Automated capture should use a descriptive user agent where practical, limit concurrency, pause between requests, retry carefully, and stop when the source reports errors or throttling. We should never make `robots=off` or an equivalent override the default instruction for routine capture.

Authenticated sessions require additional care. A tool may be technically able to replay cookies or tokens, but the resulting capture can contain private data and reusable credentials. Secrets should not be written into commands, logs, repositories, or publication bundles.

## fidelity and completeness

A mirror can appear complete while missing important content. Common gaps include:

- data loaded after the initial page request;
- API responses fetched by browser-side JavaScript;
- content requiring interaction, scrolling, or a logged-in session;
- fonts, maps, media, and assets hosted on other domains;
- forms and server-side search behavior;
- canonical URLs, redirects, and response headers; and
- information that changed while a long capture was running.

Validation should follow the purpose of the capture. A migration may require working internal links and all public assets; a research citation may require the exact response, timestamp, and headers; a data analysis may be better served by the underlying API than by the rendered page.

## minimum handoff

Along with the captured files, preserve the seed URLs, allowed and excluded scope, start and end times, tool version, command or configuration, retrieval log, error summary, and checksums or manifest. Record any known dependency on remote services so a locally browsable copy is not mistaken for a self-contained archive.
