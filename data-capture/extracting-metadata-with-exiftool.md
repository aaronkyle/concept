# extracting metadata with ExifTool

[ExifTool](https://exiftool.org/) reads and writes metadata across many image, audio, video, document, and archive formats. It is especially useful for examining EXIF, IPTC, XMP, GPS, camera, copyright, descriptive, and file-system fields without requiring a different first-pass tool for every format.

Part of [extracting text and data from files](extracting-text-and-data-from-files.md), this page treats embedded metadata as a source observation—not as an automatically trusted project record.

## inspecting a file

Display available fields with group names, duplicate tags, and short field labels:

```sh
exiftool -G -a -s "example.jpg"
```

Produce a structured JSON extraction that can be stored alongside the intake record:

```sh
exiftool -json -G -a -s "example.jpg" > "example.exiftool.json"
```

Inspect numeric GPS fields specifically:

```sh
exiftool -gps:all -n "example.jpg"
```

Preserve the exact command, ExifTool version, output, extraction time, and checksum of the unchanged source file. A later version of ExifTool may recognize more tags or interpret them differently, so the extraction event belongs in the record.

## interpreting the result

Metadata fields can conflict or repeat. A file may contain several creation dates, titles, author names, software identifiers, or location fields written by different applications. ExifTool's group names help show where a value was stored, but the tool cannot decide which field expresses the project's intended meaning.

Keep at least three layers distinct:

1. the original embedded fields;
2. normalized values used for search and comparison; and
3. curated values confirmed or corrected by a person.

The earlier repository page listed many possible JPEG tags. A fixed list quickly becomes misleading because actual fields vary by device, software, metadata standard, and file history. Capturing the observed fields and their groups is more useful than treating one long list as a universal schema.

The [document metadata model](../data-structures/document-metadata.md) places those layers within the wider relationships among a stored file, intellectual resource, extraction event, assertion, project, and publication.

## privacy and publication

Embedded metadata may reveal coordinates, device identifiers, names, organization details, editing history, or internal paths. These fields can be valuable provenance in a protected archive and inappropriate in a public derivative.

If a publication policy calls for removing GPS fields, work on a derivative rather than the only copy:

```sh
cp "intake/photo.jpg" "publication/photo.jpg"
exiftool -gps:all= -overwrite_original "publication/photo.jpg"
```

This example removes the GPS group; it is not proof that every identifying or location-related field has been removed. Reinspect the derivative, compare it with the publication policy, and retain a record of what was changed. Never describe metadata removal as anonymization without checking the visible content and other available identifiers.

## writing metadata

ExifTool can write or delete fields, but modification should be a separate, authorized curation or publication step. Preserve the source object, identify the intended metadata standard, test on a copy, and verify the result in more than one reader when interoperability matters.

The official [ExifTool documentation](https://exiftool.org/) provides format support, tag definitions, option details, and important notes about writing particular file types.
