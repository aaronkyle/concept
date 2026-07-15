# data capture

Data capture is the process of bringing source material into the system while preserving enough context to understand and use it responsibly. A capture may be a downloaded file, a website mirror, an API response, extracted document text, embedded metadata, or OCR produced from a scan.

The captured material is not automatically trustworthy merely because a tool retrieved it. We need to know where it came from, when and how it was obtained, what may have changed during capture, and which permissions or license terms govern its use.

## a common capture record

Every method in this section should produce a small record containing, where applicable:

- the source URL, path, system, or person;
- the date and time of capture;
- the responsible person, account, or automated process;
- the tool, version, command, and relevant configuration;
- the original filename, media type, size, and checksum;
- request and response details for network sources;
- the stated license, access conditions, and publication limits;
- known omissions, errors, transformations, or scope limits; and
- links to later extraction, curation, analysis, and publication records.

The record should describe what happened without pretending that a technical log can replace judgment about provenance, consent, or accuracy.

## capturing web sources

- [capturing websites](capturing-websites.md) explains scope, responsibility, fidelity, and how to choose a method;
- [using Wget](using-wget.md) covers controlled command-line retrieval of files and linked web resources;
- [using HTTrack](using-httrack.md) covers bounded website mirroring with explicit filters; and
- [capturing structured data from APIs](capturing-structured-data-from-apis.md) covers machine-readable responses, schemas, pagination, and retrieval manifests.

## extracting from files

- [extracting text and data from files](extracting-text-and-data-from-files.md) provides the shared principles and intake sequence;
- [extracting metadata with ExifTool](extracting-metadata-with-exiftool.md) covers embedded technical, descriptive, and location metadata;
- [parsing documents with Apache Tika](parsing-documents-with-apache-tika.md) covers broad text, metadata, and file-type extraction; and
- [performing OCR](performing-ocr.md) covers Tesseract, Google Cloud Vision, and quality review for image-based text.

## boundaries

Data capture should be scoped to a defined research or operational purpose. Public availability does not automatically grant permission to copy, republish, or process material without limit. Before capture, consider copyright, contract terms, access controls, personal information, community expectations, source-system load, and whether a less invasive source—such as a documented API or data export—already exists.
