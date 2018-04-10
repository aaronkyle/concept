**PLEASE NOTE** : A working file of these tables in available on [Google Drive](https://docs.google.com/a/crossculturalconsult.com/spreadsheets/d/1CI3RIp-CbQcVJ32JwRGfL1_VpPDQa4SISH7Zj3aeLSo/edit?usp=sharing)


##  Bibliographic Reference & Provenience Data

### Provenience Data

<table>
<tr>
<td width="20%"> URL </td>
<td> maps to BibTex `url`; the WWW address</td>
</tr>
<tr>
<td>URL-alt</td>
<td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>  folder - orig</td><td></td>
</tr>
<tr>
<td>sub-folder - orig</td>
<td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>original file name</td><td></td>
</tr>
<tr>
<td>original file name -alt</td><td></td>
</tr>
<tr>
<td>revised file name</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
</table>

### Locational Data

<table>
<tr>
<td>Country / Countries</td><td></td>
</tr>
<tr>
<td>Region(s)</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
</table>

### Bibliographic Data

<table>
<tr>
<td>BIBTEX entry type</td><td></td>
</tr>
<tr>
<td> entry type</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Year</td><td>maps to BibTex `year`; the year of publication (or, if unpublished, the year of creation)</td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Author(s)</td><td>maps to BibTex `author`; the name(s) of the author(s) (in the case of more than one author, separated by and) QUESTION: How does BibTex handle multiple authors? How to distinguish between multiple authors</td>
</tr>
<tr>
<td>Editor(s)</td><td>maps to BibTex `editor`; the name(s) of the editor(s)</td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Book Title</td><td>maps to BibTex `booktitle` the title of the book, if only part of it is being cited; (NOTE: would need to be either 'book' or 'journal')</td>
</tr>
<tr>
<td>Book Chapter</td><td>maps to BibTex `chapter` the chapter number</td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Article Title</td><td>maps to BibTex `title`; the title of the work</td>
</tr>
<tr>
<td>Journal / Publication</td><td>maps to BibTex `journal`; the journal or magazine the work was published in</td>
</tr>
<tr>
<td>Vol</td><td>maps to BibTex `volume` the volume of a journal or multi-volume book</td>
</tr>
<tr>
<td>Issue</td><td>maps to BibTex `number`; the "(issue) number" of a journal, magazine, or tech-report, if applicable. (Most publications have a "volume", but no "number" field.)</td>
</tr>
<tr>
<td>Pages</td><td>maps to BibTex `pages`; page numbers, separated either by commas or double-hyphens.</td>
</tr>
<tr>
<td>Series</td><td>maps to BibTex `series`; the series of books the book was published in (e.g. "The Hardy Boys" or "Lecture Notes in Computer Science")</td>
</tr>
<tr>
<td></td><td>maps to BibTex `crossref`; the key of the cross-referenced entry</td>
</tr>
<tr>
<td>Language</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Publishing Agency</td><td>maps to BibTex `institution`; the institution that was involved in the publishing, but not necessarily the publisher</td>
</tr>
<tr>
<td>Publishing House</td><td>maps to BibTex `publisher`; the publisher's name </td>
</tr>
<tr>
<td>Publisher's City </td><td>maps to BibTex `; publisher's address (usually just the city, but can be the full address for lesser-known publishers)</td>
</tr>
<tr>
<td>Publisher's Address</td><td>maps to BibTex ` (**NOTE**: relationship may need to be re-evaluated);</td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Doc ID#</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>ISSN / ISBN</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td>Abstract</td><td></td>
</tr>
<tr>
<td>Bibliographic Annotation</td><td>maps to BibTex `annote`; an annotation for annotated bibliography styles (not typical)</td>
</tr>
</table>

##  Review and Analysis Data
<table>
<tr>
<td>attribute tag</td><td></td>
</tr>
<tr>
<td></td><td></td>
</tr>
<tr>
<td width="20%">Reviewer Notes</td><td>maps to BibTex `note`; miscellaneous extra information</td>
</tr>
</table>

## Currently Non-Utilized BibTex Data Field Values

 isn't currently referencing articles with these values, but we would like to enable the field by default

| | |
|---|---|
| edition | the edition of a book, long form (such as "First" or "Second") |
| eprint | a specification of an electronic publication, often a preprint or a technical report |
| howpublished`; how it was published, if the publishing method is nonstandard |
| key | a hidden field used for specifying or overriding the alphabetical order of entries (when the "author" and "editor" fields are missing). Note that this is very different from the key (mentioned just after this list) that is used to cite or cross-reference the entry. |
| month| the month of publication (or, if unpublished, the month of creation) |
| organization | the conference sponsor |
| school | the school where the thesis was written |
| series | the series of books the book was published in (e.g. "The Hardy Boys" or "Lecture Notes in Computer Science") |
| type | the field overriding the default type of publication (e.g. "Research Note" for techreport, "{PhD} dissertation" for phdthesis, "Section" for inbook/incollection) |



## BibTex Entry Types

| VALUE | DESCRIPTION | REQUIRED | OPTIONAL | Notes |
|---|---|---|---|---|
| article | An article from a journal or magazine. | Required fields: author, title, journal, year | Optional fields: volume, number, pages, month, note, key |  |
| book | A book with an explicit publisher. | Required fields: author/editor, title, publisher, year | Optional fields: volume/number, series, address, edition, month, note, key |  |
| booklet | A work that is printed and bound, but without a named publisher or sponsoring institution. | Required fields: title | Optional fields: author, howpublished, address, month, year, note, key |  |
| conference | The same as inproceedings, included for Scribe compatibility. |  |  |  |
| inbook | A part of a book, usually untitled. May be a chapter (or section, etc.) and/or a range of pages. | Required fields: author/editor, title, chapter/pages, publisher, year | Optional fields: volume/number, series, type, address, edition, month, note, key |  |
| incollection | A part of a book having its own title. | Required fields: author, title, booktitle, publisher, year | Optional fields: editor, volume/number, series, type, chapter, pages, address, edition, month, note, key |  |
| inproceedings | An article in a conference proceedings. | Required fields: author, title, booktitle, year | Optional fields: editor, volume/number, series, pages, address, month, organization, publisher, note, key |  |
| manual | Technical documentation. | Required fields: title | Optional fields: author, organization, address, edition, month, year, note, key | using 'manual' as indicator for policy documents, including both actual policy and 'good practice' notes |
| mastersthesis | A Master's thesis. | Required fields: author, title, school, year | Optional fields: type, address, month, note, key |  |
| misc | For use when nothing else fits. | Required fields: none | Optional fields: author, title, howpublished, month, year, note, key |  |
| phdthesis | A Ph.D. thesis. | Required fields: author, title, school, year | Optional fields: type, address, month, note, key |  |
| proceedings | The proceedings of a conference. | Required fields: title, year | Optional fields: editor, volume/number, series, address, month, publisher, organization, note, key |  |
| techreport | A report published by a school or other institution, usually numbered within a series. | Required fields: author, title, institution, year | Optional fields: type, number, address, month, note, key | includes ADB 'special evaluation studies' |
| unpublished | A document having an author and title, but not formally published. | Required fields: author, title, note | Optional fields: month, year, key |  |


##  Entry Types
<table>
<tr>
<td width="20%">type</td><td>the field overriding the default type of publication (e.g. "Research Note" for techreport, "{PhD} dissertation" for phdthesis, "Section" for inbook/incollection)</td>
</tr>
</table>

| VALUE | DESCRIPTION |
|---|---|
| policy | associated primarily with 'manual' |
| operational guide | associated primarily with 'manual'; sometimes with 'book' |
| evaluation study | associated primarily with 'tech report' |
| case study |  |
| loan agreement | associated primarily with 'manual' |
| project agreement | associated primarily with 'manual' |
| operational update | associated primarily with 'tech report' |
| impact assessment | associated primarily with 'tech report' |
| technical assistance report | associated primarily with 'tech report' |
| brochure | associated primarily with 'misc' |
| proposal | associated primarily with 'misc' |
| terms of reference | associated primarily with 'misc' |
