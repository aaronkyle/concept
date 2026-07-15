# extracting text and data from files

Files often contain more information than a person can see when opening them in their usual application. A PDF may contain an accessible text layer beneath its printed appearance. A photograph may carry camera settings, dates, a caption, and precise coordinates. A word-processing file may contain both its visible text and embedded properties identifying how it was created.

Extracting this information makes files easier to search, compare, cite, analyze, and connect to other parts of a project. The extraction process should add context without replacing the original file or treating machine-produced output as unquestionably correct.

Part of [data capture](README.md), this page provides the common workflow for three focused discussions:

- [extracting metadata with ExifTool](extracting-metadata-with-exiftool.md);
- [parsing documents with Apache Tika](parsing-documents-with-apache-tika.md); and
- [performing OCR](performing-ocr.md) with Tesseract or a managed service.

## what we may extract

- **text** already encoded in a PDF, word-processing file, presentation, web page, or other document;
- **optical character recognition (OCR)** generated from a scan, photograph, or image-only PDF;
- **embedded metadata**, such as title, author, creation date, camera model, software, or geographic coordinates;
- **structure**, such as headings, pages, tables, worksheet names, archive members, and media attachments; and
- **technical properties**, such as file type, media type, dimensions, duration, character encoding, and checksums.

These are different kinds of evidence. A filename supplied by a user, a title embedded by software, and a title inferred from the first line of a document should not be collapsed into one field without recording where each value came from.

The [document metadata model](../data-structures/document-metadata.md) shows how these observations can remain distinct from managed file identity, bibliographic description, human curation, project annotations, and public metadata.

## working principles

1. Preserve the original file and calculate a stable checksum before extraction.
2. Record the extraction tool, version, time, and relevant options.
3. Store the raw extracted result separately from normalized or human-edited metadata.
4. Prefer embedded text to OCR when a reliable text layer already exists.
5. Treat OCR and inferred structure as provisional; retain enough context to review errors against the source.
6. Do not publish embedded metadata automatically. Review it for private, identifying, licensed, or misleading information first.
7. Allow a later extraction pass to improve the record without overwriting the history of an earlier pass.

## a practical intake sequence

1. Receive the file and preserve its original name and path as intake facts.
2. Calculate a checksum and identify the probable file and media type.
3. Run a general metadata and text extraction pass.
4. Apply a format-specific parser where the general pass loses important structure.
5. Apply OCR only to pages or regions that do not already contain usable text.
6. Store raw results with their extraction provenance.
7. Normalize selected values into searchable fields without discarding the raw values.
8. Allow a person to correct, redact, or supplement the extracted record through a separate curated layer.

The [archive](https://archive.categori.se/) and [docs repo](https://docs-repo.categori.se/) prototypes explore different parts of this sequence. Their implementation can change, but the separation between the original object, an extraction event, raw observations, and human curation is a durable requirement.

## relationship to analysis and publication

Extraction prepares information for use; it is not the analysis itself. Once text and data have been recovered, the [data-analysis discussion](../data-analysis/) can consider methods for interpreting them. Before publication, the extracted record should also be reviewed for accuracy, attribution, accessibility, and sensitive metadata.
