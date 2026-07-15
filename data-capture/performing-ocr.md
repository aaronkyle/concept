# performing OCR

Optical character recognition (OCR) estimates text from pixels in a scan or photograph. It is appropriate when a document does not contain a usable text layer; it should not replace reliable embedded text merely because OCR is available.

Part of [extracting text and data from files](extracting-text-and-data-from-files.md), OCR output is a derived interpretation of the source image. The image remains the evidence against which recognition errors must be reviewed.

## choosing an approach

| approach | useful when | principal concerns |
| --- | --- | --- |
| [Tesseract](https://tesseract-ocr.github.io/tessdoc/) | local processing, reproducible open-source workflows, supported printed languages | preprocessing, layout configuration, language data, and local compute |
| [Google Cloud Vision OCR](https://docs.cloud.google.com/vision/docs/ocr) | managed processing, difficult layouts, scale, or comparison with a local result | cost, network dependence, service terms, data location, and permission to transmit files |

A project may compare engines on a representative sample rather than assuming one performs best for every document family.

## using Tesseract

Recognize a single image and write text to standard output:

```sh
tesseract "scan.png" stdout -l eng
```

Create a searchable PDF derivative from an image:

```sh
tesseract "scan.png" "scan-searchable" -l eng pdf
```

Tesseract's official [command-line usage guide](https://tesseract-ocr.github.io/tessdoc/Command-Line-Usage.html) documents language selection, page-segmentation modes, output formats, and configuration. Record the engine version, trained-data version, languages, page-segmentation choice, preprocessing, and output format used for each extraction profile.

For a multipage scanned PDF, preserve the PDF, render or extract page images through a documented step, OCR those images, and associate each output with its source page. Do not imply that Tesseract directly recovered text already encoded in the PDF.

## preparing source images

Recognition quality depends heavily on the image. Before changing it, preserve the original. A derived OCR input may benefit from:

- correct orientation and deskewing;
- sufficient resolution;
- contrast adjustment and background cleanup;
- removal of unrelated borders or camera perspective;
- appropriate language and script selection; and
- layout settings suited to columns, tables, or sparse text.

Record preprocessing as a transformation. An aggressively cleaned image can remove punctuation, diacritics, faint annotations, or other meaningful evidence.

## using a managed OCR service

Google Cloud Vision distinguishes general text detection from document-oriented text detection. The suitable request depends on the source and desired layout detail. Preserve the request configuration and raw response before normalizing it into project text or page records.

Do not send a protected document to an external OCR service merely because the API is convenient. Confirm authorization, service terms, retention behavior, region and data-residency needs, credentials, expected cost, and whether local processing can meet the requirement.

## quality review

OCR can be wrong in ways that look plausible. Names, numbers, dates, tables, formulas, non-Latin scripts, handwriting, low-contrast text, and multi-column layouts deserve particular attention.

For repeated document families:

1. select a representative sample;
2. create or review trusted comparison text;
3. measure character and word errors where meaningful;
4. inspect critical fields separately from average accuracy;
5. record systematic errors and confidence limits; and
6. require human review where an error could change a decision, citation, or published claim.

Searchable text can improve discovery even when it is imperfect. The interface should make clear when text came from OCR and should provide a route back to the corresponding image or page.
