# working with Git

[Git](https://git-scm.com/) records snapshots of a set of files and the relationships among those snapshots. For a publishing project, it makes prose, data, templates, and build instructions reviewable together. It also lets us develop a discussion on a branch, compare it with the current publication, and preserve an intelligible history when it is accepted.

Git is not itself a writing interface, backup policy, public release system, or permission model. Those capabilities may be built around it, but they need their own decisions.

## understand the working states

A file in a working copy may be untracked, tracked and unchanged, modified, or staged for the next commit. The basic review cycle is:

```bash
git status --short
git diff
git add path/to/file.md
git diff --staged
git commit
```

`git add` selects a particular version of a file for the next commit; it does not merely “turn Git on” for that filename. If the file changes again after staging, review and stage the new change intentionally.

Before staging broad paths, inspect untracked files and local configuration. Credentials, exports, caches, generated bundles, and private research material can be difficult to remove after they are shared. A `.gitignore` file reduces noise but is not a security boundary: an already tracked file remains tracked, and an ignored secret is still a secret on the filesystem.

## make a focused branch

The repository's default branch represents its accepted line of development. Its name is a repository choice—often `main`, but it should not be assumed. Create a short-lived branch for a coherent change:

```bash
git switch --create retrospective/digital-publishing
```

A branch should make the review easier to understand, not encode a universal branching philosophy. Keep unrelated work separate when it would require different reviewers, evidence, or release timing. Bring the current default branch into a long-running branch according to the project’s chosen merge or rebase practice, and do not rewrite history that other people are already using without coordination.

## write commits as editorial records

A useful commit captures one meaningful state and explains why it exists. Review both the content and scope before recording it:

```bash
git diff --check
git diff --staged
git commit -m "Clarify the digital publication lifecycle"
```

The subject should complete the thought “this change will …”. The body can record important evidence, tradeoffs, migrations, or follow-up work. Avoid messages that merely say “updates”; the diff already shows that something changed.

Text-oriented options can help with prose:

```bash
git diff --word-diff
git log --stat
git log -p -- path/to/discussion.md
git blame path/to/discussion.md
```

`git blame` identifies the last commit to touch each line, not the original author or final authority on a claim. Follow the commit history and discussion before drawing conclusions.

## review before integration

A pull request or equivalent review should explain:

- the purpose and intended audience of the change;
- important files, relocations, or deletions;
- sources used to update technical or factual claims;
- previews or generated outputs that need visual review;
- privacy, accessibility, compatibility, and migration consequences; and
- questions that remain intentionally unresolved.

Automated checks can catch broken links, malformed markup, spelling variants, or a failed build. They complement a human review of argument, voice, evidence, and public meaning.

## connect history to publication

A merge records accepted source history, but readers also need to know which state produced a publication. A release may use an annotated tag, a release record, a deployment identifier, or a dated dataset version:

```bash
git tag --annotate v1.0.0 --message "First reviewed public release"
git show v1.0.0
```

Do not tag every deployment mechanically unless that label helps someone identify, reproduce, support, or cite it. For a static site, record the source commit with the build and deployment logs. For a downloadable report or dataset, include a human-meaningful version and a durable path to its release context.

## use remotes deliberately

A remote is a named location for exchanging repository objects:

```bash
git remote --verbose
git fetch origin
git push --set-upstream origin retrospective/digital-publishing
```

Fetching updates local knowledge without modifying the working branch. Pulling combines fetching with an integration action whose behavior depends on configuration. In shared work, explicit fetch, inspect, and integrate steps are often easier to reason about.

Use authenticated HTTPS or SSH according to the hosting service and organization policy. Never place credentials in a remote URL that will be stored in repository configuration or copied into logs.

## know what does not fit ordinary Git

Git is strongest with reasonably sized text files. Frequently changing binaries and large datasets make clones and history expensive, while line-oriented diffs reveal little about their meaning. [Revision control and publication history](revision-control.md) considers Git LFS, git-annex, object storage, manifests, and release snapshots for these cases.

The practical test is not whether a file can be committed. It is whether collaborators can review, retrieve, verify, and preserve the versions the project promises.

## references

- [Pro Git: recording changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [Pro Git: branching workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- [Git reference documentation](https://git-scm.com/docs)
- [GitHub: about pull request reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
