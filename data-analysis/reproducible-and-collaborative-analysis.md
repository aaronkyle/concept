# reproducible and collaborative analysis

An analysis is reproducible when another person can understand how its reported result was produced from identified source material and, where practical, run the process again. Reproducibility does not prove that the source is accurate, the method is appropriate, or the interpretation is sound. It creates a stronger basis for finding errors, testing assumptions, discussing choices, and revising the work.

Collaboration adds a related requirement: people should be able to contribute without losing track of which version they reviewed, why a change was made, or how an output relates to the analysis that produced it.

## preserve the connected parts

A reproducible project connects several kinds of material:

1. **sources** — original files, responses, records, or references with provenance and access conditions;
2. **extraction** — machine-produced text, metadata, structure, and quality observations;
3. **prepared data** — corrected, normalized, joined, or classified material;
4. **analysis** — queries, code, formulas, model specifications, or documented interpretive procedures;
5. **environment** — software, package versions, settings, and external services that affect execution;
6. **outputs** — tables, figures, maps, models, and intermediate checks;
7. **narrative** — the explanation of methods, findings, uncertainty, and limitations; and
8. **decisions** — reviews, approvals, rejected alternatives, and reasons for meaningful changes.

These parts need not live in one file or application. They do need stable identities and explicit relationships. The repository's [application context](../README.md#application-context) describes the broader movement from source capture through analysis and deliberate publication.

## retain source and provenance

Begin from an identified capture rather than an undocumented working copy. The [common capture record](../data-capture/README.md#a-common-capture-record) provides a useful minimum, and the discussions of [API retrieval](../data-capture/capturing-structured-data-from-apis.md) and [file extraction](../data-capture/extracting-text-and-data-from-files.md) explain additional records for those sources.

If a source may change, preserve or identify the exact version used. A download date alone may not be sufficient; a checksum, source-system identifier, version, query, or immutable snapshot may be needed. When the source cannot be redistributed, retain a description and retrieval procedure while keeping credentials and protected data outside the public project.

## make transformations inspectable

Whenever practical, express repeated transformations as code, queries, or ordered instructions rather than undocumented manual edits. Preserve the source values and create corrected or derived values in a way that exposes their origin. A person should be able to see why a record disappeared, why a category changed, or how a summary was calculated.

Not every analytical act can or should be automated. Coding a passage, resolving an identity, or deciding whether two records refer to the same event may depend upon human judgment. In those cases, record the decision rule, reviewer, source context, and unresolved disagreement. A documented judgment is more reproducible than a hidden click even if it cannot be mechanically repeated.

## describe the environment

Code without its environment may not produce the same result later. Record the language and software versions, dependencies, configuration that changes behavior, and required external services. Fix dependency versions where stability matters, while allowing deliberate updates to be tested as new revisions.

A notebook can combine prose, executable code, and visible results; the repository contains an early [Jupyter notebook example](../data-visualization/test.ipynb). Notebooks are useful research surfaces, but execution order and stored output can conceal state. They should be restartable from a documented environment, with important inputs and generated outputs identified outside the notebook where necessary.

## use revision history as research context

Revision control can connect changes to authors, dates, and explanations. The notes on [working with Git](../digital-publishing/working-with-git.md) introduce commits and branches, while the wider [revision-control discussion](../digital-publishing/revision-control.md) considers large research files that may not fit ordinary Git workflows.

Useful revisions should describe a meaningful change to data, method, interpretation, or presentation. A commit history does not replace an analysis record: filenames and code differences rarely explain why an analytical choice was defensible. Link important revisions to questions, reviews, issues, or decisions in the surrounding project.

Do not place secrets, personal data, or restricted source material in a repository simply because versioning would be convenient. Access, retention, and publication rules must follow the material across source files, working data, logs, and generated outputs.

## keep narrative near the work

Plain-text documentation is portable, searchable, and easy to compare. [Markdown](../digital-publishing/working-with-markdown.md) can keep questions, methods, and limitations close to an analysis, while [Pandoc](../digital-publishing/working-with-pandoc.md) demonstrates how structured source can support more than one publication format. [JavaScript](../digital-publishing/working-with-javascript.md) and visualization libraries can support interactive results, but the essential claim and context should not be recoverable only by executing a fragile interface.

Generated tables and figures should identify the analysis revision that produced them. Avoid manually repairing a generated output without also correcting its source or transformation; otherwise the next run may silently restore the error.

## an illustrative analysis manifest

A small manifest can connect the parts without forcing them into a single application:

```yaml
analysis_id: change-over-time-001
question: How did the reported measure change between the selected periods?
sources:
  - capture_id: agency-api-2026-07-15
    checksum: "sha256:..."
prepared_data: data/prepared/measure-by-period.csv
method: analysis/change-over-time.ipynb
environment: environment/requirements.lock
outputs:
  - results/change-over-time.csv
  - figures/change-over-time.svg
limitations: notes/limitations.md
review: decisions/review-2026-07-15.md
```

The particular format is less important than the relationships. Paths may be replaced with persistent identifiers or application links, and sensitive components may live in controlled storage. What matters is that an output does not become detached from its sources, method, limitations, and review.

## review before release

Before sharing a result, a collaborator should be able to follow the analysis record, rerun automated steps where authorized, compare key outputs, and inspect a sample of transformed records. Review should also consider whether the question, categories, and communication are fair to the people represented.

The page on [analysis as a research process](analysis-as-a-research-process.md) provides the corresponding questions about evidence and interpretation. Reproducibility supports that inquiry; it does not substitute technical repeatability for judgment.
