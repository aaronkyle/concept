# parsing documents with Apache Tika

[Apache Tika](https://tika.apache.org/) detects file types and extracts text and metadata from many common document formats through a consistent interface. It is useful as a broad intake parser when the system must accept PDFs, office documents, HTML, email, archives, and other file families without building a separate first-pass parser for each one.

Part of [extracting text and data from files](extracting-text-and-data-from-files.md), Tika provides a common first look. It does not make every format semantically equivalent.

## a basic command-line pass

After downloading the current Tika application jar from the official site, a local filename can be used for repeatable commands:

```sh
java -jar tika-app.jar --text "example.pdf"
```

Extract metadata separately:

```sh
java -jar tika-app.jar --metadata "example.pdf"
```

In a capture workflow, direct output to files associated with the extraction event and record the Tika and Java versions. Do not overwrite the source document with parsed output.

The versioned [Tika 3.2.3 getting started guide](https://tika.apache.org/3.2.3/gettingstarted.html) describes its command-line application, server, and library options. Documentation should always be matched to the version actually used.

## what a general parser can provide

- probable media type and file-family identification;
- document text in a common representation;
- embedded author, title, date, language, and application fields;
- selected structure and embedded-resource information; and
- a common intake interface across otherwise different file formats.

This common layer is valuable for indexing and triage. It should not be mistaken for a lossless conversion.

## when to use a specialized parser

A format-specific tool may be needed when the work depends on:

- tables, formulas, comments, tracked changes, or spreadsheet cell types;
- exact page coordinates, reading order, fonts, or visual layout;
- embedded files, macros, signatures, or revision histories;
- geographic structures or domain-specific schemas; or
- document features the general output flattened or omitted.

Compare the extracted result with representative source files before relying on it at scale. Record known losses as part of the extraction profile.

## OCR and fallback behavior

Tika can participate in workflows that invoke OCR, including Tesseract, but OCR should remain an explicit decision. First determine whether a document already contains usable text. If only selected pages are image-based, applying OCR everywhere can add noise and make it harder to distinguish source text from recognized text.

See [performing OCR](performing-ocr.md) for quality and provenance requirements.

## processing untrusted files

Parsers work on complex, sometimes malformed inputs. Run document extraction with current dependencies, constrained permissions, time and memory limits, archive expansion limits, and isolation appropriate to the sensitivity of the environment. Intake services should treat uploaded files as untrusted and should not expose parser processes directly to unrestricted network or filesystem access.

Preserve parser failures as useful observations. A failed extraction should not cause the original file or its intake record to disappear.
