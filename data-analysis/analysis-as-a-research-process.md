# analysis as a research process

Data analysis is sometimes described as the stage that begins once a clean dataset is ready. In practice, it is part of a larger and more iterative inquiry. A preliminary result may expose a missing source, an ambiguous category, or a question that was framed too broadly. The analyst then returns to capture, description, or preparation with a clearer sense of what the evidence can support.

This process should leave a path from a question to the material examined, the choices made, the result produced, and the interpretation offered. That path does not make an analysis neutral or final. It makes the work available for informed review.

## begin with a question

A useful analytical question identifies what we want to understand and why it matters. It also gives us a basis for deciding which observations are relevant, what comparisons are defensible, and when the available evidence is insufficient.

Before selecting a tool or method, record:

- the question or decision the analysis is intended to inform;
- the people, places, events, documents, or processes it concerns;
- the unit of observation and the period covered;
- important terms whose meanings must be made explicit;
- the expected audience and consequences of the work; and
- what evidence could complicate or overturn an initial explanation.

A question will often change as the work proceeds. Record that change rather than quietly rewriting the history of the inquiry.

## understand the evidence

Data are not simply found; they are produced by people, institutions, instruments, and software for particular purposes. A field may express a legal category, an administrative convenience, a measurement, a judgment, or a value inferred by a later process. Missing values may reflect absence, refusal, exclusion, collection failure, or a rule that made the question inapplicable.

The [data-capture overview](../data-capture/README.md) describes the provenance that should accompany acquired material. More specific discussions address [structured responses from APIs](../data-capture/capturing-structured-data-from-apis.md) and [text, metadata, and structure extracted from files](../data-capture/extracting-text-and-data-from-files.md). The [document metadata discussion](../data-structures/document-metadata.md) distinguishes files, intellectual resources, extracted observations, curated assertions, bibliographic description, project review, and publication metadata.

Before analysis, ask who or what is represented, who or what is absent, how values were recorded, and whether collection conditions changed over time. Access to a large quantity of data does not correct a narrow or biased account of the world.

## prepare without erasing

Most analysis requires selecting records, reconciling formats, correcting errors, deriving variables, or joining sources. These transformations are part of the argument. A seemingly simple choice—such as treating blank values as zero or grouping several categories together—can change a result.

Keep the acquired source apart from prepared data. Give transformations an order, describe their purpose, and retain rejected or unresolved records where they can be reviewed. The source should remain connected to its [capture record](../data-capture/README.md#a-common-capture-record), while prepared tables and files should follow the portable, human-readable approach described in the repository's [design parameters](../README.md#design-parameters).

## examine from more than one direction

Analysis may combine several modes of attention:

- **description** asks what is present, how values are distributed, and which records differ;
- **comparison** asks how groups, places, sources, or periods relate;
- **relationship** asks whether observations vary together and what alternative explanations remain;
- **classification** develops or applies categories while keeping their definitions visible;
- **spatial analysis** examines location, distance, adjacency, scale, and geographic pattern; and
- **temporal analysis** examines sequence, duration, recurrence, and change.

Maps and timelines are not merely final illustrations; they may reveal patterns or omissions during inquiry. The [web GIS discussion](../web-gis/README.md) develops spatial data as a specialized case, while [time and process](../data-visualization/time-and-process.md) collects approaches to temporal representation. Each method brings assumptions that should be tested against simpler summaries and individual records.

## distinguish a result from an interpretation

An output may be a table, statistic, model, classification, map, or set of selected passages. An interpretation explains what that output means in context. The two should remain connected but distinguishable.

Interpretation should state uncertainty, plausible alternatives, known limitations, and the range over which a finding applies. An observed association does not alone establish cause. A model's precision does not ensure that its categories or source material are appropriate. Qualitative judgments also require a visible basis: readers should be able to understand how examples were selected and how themes were developed.

## communicate as part of the inquiry

Publication is not decoration added after the reasoning is complete. Choosing a table, map, narrative sequence, or interactive view determines what a reader can compare and which qualifications remain visible. The repository's collections on [digital storytelling](../data-visualization/digital-storytelling.md), [D3](../data-visualization/d3.md), and [Plotly](../data-visualization/plotly.md) contain historical examples and possible techniques. They should be evaluated according to the question and audience rather than treated as a menu of effects.

The [digital-publishing discussion](../digital-publishing/) considers how source material can remain separate from presentation. Where analysis informs a public claim, the publication should link to an appropriate account of sources and methods without exposing protected people or information. Privacy and security therefore belong in the analytical process, not only at the point of release.

## a minimum analysis record

An analysis record should make it possible for a collaborator—or a future version of ourselves—to answer:

1. What question was asked, and how did it change?
2. Which sources and versions were used?
3. What did those sources originally represent?
4. Which records, fields, or passages were included or excluded, and why?
5. What corrections, transformations, classifications, or joins were made?
6. Which methods and assumptions produced the result?
7. What checks, comparisons, or reviews were performed?
8. What limitations and competing interpretations remain?
9. Which files or publications depend upon the result?
10. Who reviewed the work, and what decisions followed?

The companion page on [reproducible and collaborative analysis](reproducible-and-collaborative-analysis.md) develops how this record can remain connected to the files, code, environments, decisions, and outputs it describes.
