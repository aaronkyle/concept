# building publications with Pandoc

[Pandoc](https://pandoc.org/) converts documents through a shared internal representation. It is particularly useful when maintained Markdown or reStructuredText needs to become HTML, DOCX, PDF, EPUB, a slide deck, or another institutional format. It is not a general PDF importer or a promise of identical layout across media; good results depend on structured source and output-specific templates.

Pandoc belongs in a reproducible publishing process. Record the command or defaults file, the Pandoc version, filters, templates, citation data, and external programs used to create an output. A generated file without those instructions is difficult to review or rebuild.

## start with an explicit conversion

Pandoc can often infer formats from filename extensions:

```bash
pandoc report.md --output report.html --standalone
```

For an important build, state the reader and writer so an extension or unusual filename cannot silently change the interpretation:

```bash
pandoc report.md \
  --from commonmark_x \
  --to html5 \
  --standalone \
  --output build/report.html
```

`--standalone` supplies the surrounding document structure rather than emitting an HTML fragment. `--toc`, `--number-sections`, and `--metadata` can add common publication features. Check the installed version with `pandoc --version` and the current options in the [Pandoc user’s guide](https://pandoc.org/MANUAL.html); command-line behavior evolves.

## metadata and defaults

Document metadata can live in a YAML block at the beginning of the source or in a separate metadata file:

```yaml
---
title: a publication title
author:
  - name: an author
lang: en
date: 2026-07-15
---
```

For repeatable builds, a defaults file is clearer than a long shell command:

```yaml
from: commonmark_x
to: html5
standalone: true
table-of-contents: true
metadata-files:
  - publication.yaml
resource-path:
  - .
  - assets
```

Run it with:

```bash
pandoc --defaults publication report.md --output build/report.html
```

Keep defaults, templates, styles, and filters with the source. Separate public metadata from private editorial notes and infrastructure details.

## generate several representations

One source can support different reading contexts:

```bash
pandoc report.md --standalone --output build/report.html
pandoc report.md --output build/report.docx
pandoc report.md --output build/report.epub
```

PDF creation requires an available PDF engine. Pandoc may produce PDF through LaTeX, HTML/CSS, Typst, or another supported route, each with different layout capabilities and dependencies:

```bash
pandoc report.md --pdf-engine=typst --output build/report.pdf
```

Do not assume that HTML, DOCX, EPUB, and PDF should look identical. Preserve the document’s meaning, hierarchy, citations, alternatives, and reading order, then adapt presentation to the medium.

## citations

Pandoc can format citations with its built-in citation processor. A bibliography file and Citation Style Language file can be declared in metadata or on the command line:

```yaml
bibliography: references.bib
csl: styles/chicago-author-date.csl
link-citations: true
```

The source can then cite an item with a key such as `[@doe2026]`. Preserve the bibliography, CSL file, and identifiers used to establish the reference. Review the rendered citations rather than assuming a successful build establishes bibliographic accuracy.

## templates, styles, and reference documents

Templates control the surrounding structure of text-based outputs. Inspect the current default before maintaining a custom copy:

```bash
pandoc --print-default-template=html > template.html
```

Custom templates may need changes when Pandoc changes. Prefer a small, documented override to an old full template whose origin is unclear.

For DOCX, `--reference-doc` supplies styles and document settings from a reference file:

```bash
pandoc report.md \
  --reference-doc=styles/reference.docx \
  --output build/report.docx
```

Use CSS for HTML and EPUB presentation. Keep semantic HTML and accessibility intact when styling; a visually polished output can still have broken heading order, missing alternative text, or unreadable tables.

## filters and transformations

Lua filters can inspect or transform Pandoc’s document model. They are useful for stable project rules that ordinary source syntax cannot express—for example, mapping a project-specific div to an output-specific component. A filter is application code: keep it short, test it against representative inputs, record its compatibility, and avoid hiding editorial meaning inside an undocumented transformation.

When a conversion loses information, first ask whether the source and destination formats can represent the same structure. More filters do not make a layout-oriented DOCX paragraph into a reliable semantic heading, nor can they recover reading order from an arbitrary PDF.

## a practical build pattern

```text
publication/
├── report.md
├── publication.yaml
├── references.bib
├── assets/
├── styles/
├── filters/
├── defaults/
└── build/
```

Source, configuration, and authored assets belong in version control. Generated outputs may be committed for a formal release or built by automation, depending on the audience and preservation policy. Temporary files and locally generated intermediates should be ignored.

A build should check at least:

- whether the command completes without unexpected warnings;
- whether links, images, citations, and cross-references resolve;
- whether headings, language, reading order, and alternatives survive;
- whether all included metadata is approved for publication;
- whether the output opens in the applications used by its audience; and
- whether another person or automated job can reproduce it from the recorded sources.

Pandoc is most valuable as a narrow, inspectable bridge between a well-structured source and several deliberate publications. It does not replace editorial review, browser testing, document accessibility checks, or release management.

## references

- [Pandoc user’s guide](https://pandoc.org/MANUAL.html)
- [installing Pandoc](https://pandoc.org/installing.html)
- [Pandoc defaults files](https://pandoc.org/MANUAL.html#defaults-files)
- [Pandoc Lua filters](https://pandoc.org/lua-filters.html)
