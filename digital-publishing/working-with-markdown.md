# writing with Markdown

Markdown is a plain-text notation for structured documents. Its great advantage is not that it can reproduce every visual detail of a word processor, but that a source file remains legible, searchable, comparable, and editable without special software. A publishing system can then transform that source into HTML, PDF, DOCX, or another representation.

There is no single universal Markdown implementation. [CommonMark](https://spec.commonmark.org/) provides an unambiguous core specification. [GitHub Flavored Markdown](https://github.github.com/gfm/) adds features used in GitHub content, including tables, task lists, strikethrough, and extended autolinks. Pandoc, static-site generators, notebooks, and content systems may add their own metadata, citations, footnotes, math, or directives. Name the expected dialect when those differences matter.

## a useful core

The most portable documents rely on a small set of structural elements:

````markdown
# a document title

An introductory paragraph with *emphasis*, **strong emphasis**,
and a [descriptive link](https://example.org/).

## a section

- one item
- another item

1. a first step
2. a second step

> A short quotation, followed by its source in the surrounding text.

![A concise description of the image](images/example.png)

`inline code` belongs within a sentence.

```text
A fenced block preserves preformatted text.
```
````

Use headings to express hierarchy rather than visual size. A page should normally have one first-level title, followed by second-level sections without skipping levels. Lists should contain genuinely parallel items; a sequence of paragraphs is often clearer when the relationship is not a list.

Link text should identify its destination or purpose. Image descriptions should convey the information the image contributes, not repeat “image of.” Decorative images generally need empty alternative text in the final HTML, while complex charts may need a nearby explanation or data table.

## paragraphs and line breaks

A blank line separates paragraphs. A single newline inside a paragraph is usually treated as a space, which lets authors wrap source lines without forcing visual line breaks. Avoid manual line breaks for visual spacing; presentation belongs in the output style.

Indentation has structural meaning in lists and code blocks. Use spaces consistently and preview nested content in the actual target renderer, because edge cases differ among dialects.

## tables, notes, and other extensions

GitHub-style tables are convenient for small comparisons:

```markdown
| format | useful for |
| --- | --- |
| Markdown | portable prose |
| CSV | simple tabular data |
```

They are a poor fit for long prose, complex relationships, or layouts. Tables also need meaningful headers and a sensible reading order in the rendered publication.

Footnotes, definition lists, citations, attributes, mathematics, diagrams, and callouts are extensions rather than a dependable Markdown core. Use them when the publishing pipeline explicitly supports them, and document the dependency. If an extension carries important meaning, confirm that fallback outputs retain that meaning.

## metadata and assets

Many tools recognize a YAML metadata block at the start of a file:

```yaml
---
title: a reviewed publication
date: 2026-07-15
lang: en
---
```

This is not part of CommonMark or GFM. Treat the accepted fields as a project schema: define their meaning, validate them, and avoid exposing private workflow metadata when the source is published.

Prefer relative links for files that travel with the repository and stable absolute URLs for external resources. Give assets descriptive, durable filenames. Do not paste generated binary data, temporary signed links, or local filesystem paths into source documents.

## raw HTML

Some Markdown processors permit raw HTML, while others sanitize or omit it. HTML can be appropriate for a semantic element the selected dialect cannot express, but it reduces portability and may introduce accessibility or security problems. A large amount of embedded HTML is usually evidence that the document needs a template, component, or different source format.

## an editorial practice

Markdown works best when the source is treated as writing rather than abbreviated web design:

1. state the purpose and audience near the beginning;
2. give each section one conceptual job;
3. prefer direct sentences and concrete terms;
4. cite the source of claims and distinguish evidence from interpretation;
5. keep filenames, heading style, and terminology consistent;
6. review the plain text as well as every important rendered output; and
7. use [Git](working-with-git.md) to make changes reviewable rather than silently replacing files.

The source should be comfortable to read in a text editor and structurally rich enough to publish elsewhere. [Pandoc](working-with-pandoc.md) can convert maintained Markdown into several delivery formats, but the conversion will only be as coherent as the source structure.

## references

- [CommonMark specification](https://spec.commonmark.org/)
- [GitHub Flavored Markdown specification](https://github.github.com/gfm/)
- [GitHub: basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Pandoc Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown)
