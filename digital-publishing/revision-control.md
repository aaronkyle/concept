# revision control and publication history

Revision control answers a broader question than “which Git command should I use?” It establishes which materials are versioned, what a version means, who can propose and approve change, and how a published state can be reconstructed or corrected. Git is the primary mechanism for text and code in these projects, but a complete publication may also depend on databases, object storage, external sources, build environments, and hosted configuration.

## distinguish development from release

A commit identifies a repository state. A branch identifies a moving line of work. A tag identifies a chosen commit. None automatically tells a reader whether the content was reviewed, deployed, superseded, or withdrawn.

Define public states in terms meaningful to the work:

- a **draft** is open to substantive change and is not authoritative;
- a **reviewed source** has passed the project’s editorial and technical checks;
- a **release** is a named set of representations made available to an audience;
- a **correction** replaces or annotates an erroneous release without obscuring what changed; and
- a **withdrawal** states that a publication should no longer be used and explains the disposition of its identifiers and files.

The repository history provides evidence for these states. A release record provides their public meaning.

## version what is required to reproduce meaning

For a text publication, that usually includes source documents, authored assets, metadata, templates, styles, filters, dependency declarations, and build configuration. For a data publication, it may also include the query or transformation, schema, provenance, validation report, license, and a cryptographic digest of the released data.

Do not preserve outputs without their sources, or sources without the rules needed to interpret them. At the same time, avoid committing caches, local credentials, temporary exports, and rebuildable dependencies merely because a build touched them.

## text, binaries, and large data

Ordinary Git stores complete repository history locally and is optimized around content-addressed snapshots. It handles source text exceptionally well. Large files and frequently changing binary formats can make every clone expensive while providing poor review visibility.

Several patterns address different needs:

- **Git LFS** keeps small pointer files in Git while storing large content in an LFS service. It integrates with familiar Git hosting but depends on that service, its quotas, and the continued availability of every referenced object.
- **git-annex** lets Git track file identity and location without requiring all file content in every clone. It is useful for distributed collections and multiple storage remotes, but adds concepts and operational work collaborators must understand.
- **object storage plus a manifest** keeps datasets or media in S3, Azure Blob Storage, or another object service while versioning checksums, object identifiers, schemas, and provenance in Git. Bucket versioning and retention policies may preserve objects, but a mutable key is not by itself a publication version.
- **versioned release snapshots** place an immutable or retention-protected copy at a stable, dated location and record its digest in the release. This is often clearest for public datasets and reports.

[Git LFS](https://git-lfs.com/) replaces selected files with pointers and stores their content separately. [git-annex](https://git-annex.branchable.com/) tracks files through content keys and known locations. Neither removes the need to document storage ownership, access, retention, cost, backup, integrity checking, and exit procedures.

## databases and changing applications

A database cannot usually be versioned usefully by periodically committing its binary files. Instead, version its schema migrations, controlled reference data, transformation code, and export definitions. Create dated or numbered snapshots when an application or publication must be reproduced, and record the database engine and migration state.

An audit log records events within an application; a backup restores operational data after loss; a version-control history supports review and reconstruction; and an archive preserves evidence over time. A resilient system may need all four because they answer different questions.

## corrections, removals, and secrets

Git history is intentionally durable. Deleting a file in a later commit does not remove it from earlier commits, existing clones, build artifacts, caches, or published downloads. Sensitive material should be excluded before commit through publication profiles, secret scanning, review, and least-privilege access.

If a credential is exposed, revoke or rotate it first; rewriting repository history cannot make the credential safe again. If personal or restricted data is published, involve the responsible privacy, security, and records processes, then identify every representation and downstream copy the project controls.

Ordinary corrections should preserve an intelligible trail. Replace the public page when necessary, state what changed, update feeds and machine-readable metadata, and maintain redirects or tombstones where a stable identifier has already circulated.

## a revision plan

For each publication, record:

1. the canonical sources and their maintainers;
2. which changes require review and by whom;
3. the relationship among commit, build, release, and deployment identifiers;
4. where large files and database snapshots live;
5. how integrity and completeness are verified;
6. retention, backup, access, and preservation responsibilities;
7. how a prior release is reproduced;
8. how corrections and withdrawals reach every representation; and
9. how the project can leave a hosting or storage provider without losing history.

Revision control is successful when a future collaborator can explain not only what changed, but which public state was intended, what evidence produced it, and how to repair it responsibly.

## related discussions

- [working with Git](working-with-git.md)
- [file-first storage and portable formats](../data-storage/file-first-and-portable-formats.md)
- [reproducible and collaborative analysis](../data-analysis/reproducible-and-collaborative-analysis.md)
- [privacy by architecture](../data-privacy/privacy-by-architecture.md)
- [data security](../data-security/)
