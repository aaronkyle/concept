# using Wget

[GNU Wget](https://www.gnu.org/software/wget/manual/wget.html) is a non-interactive command-line program for retrieving resources over HTTP, HTTPS, and FTP. It is useful for repeatable downloads, bounded recursive retrieval, and static website mirrors that can be described in a script or capture record.

Wget follows links found in retrieved documents; it does not execute a website's JavaScript application. Before using it recursively, define the intended scope and review [capturing websites](capturing-websites.md).

## retrieving one file

Download a resource using the server-provided filename:

```sh
wget "https://example.org/files/report.pdf"
```

Give a single response a local filename:

```sh
wget --output-document="report.pdf" \
  "https://example.org/download?id=123"
```

Limit the transfer rate when appropriate:

```sh
wget --limit-rate=200k \
  "https://example.org/files/large-dataset.zip"
```

Use `--continue` when resuming an interrupted large-file transfer, but verify that the remote resource has not changed. Timestamp-based updating and continuation solve different problems and should not be combined without understanding how the server handles them.

## retrieving a bounded directory

For a directory listing or linked collection, `--no-parent` prevents recursive retrieval from ascending above the seed path. A small delay reduces load on the source:

```sh
wget \
  --recursive \
  --no-parent \
  --reject="index.html*" \
  --wait=1 \
  --random-wait \
  --directory-prefix="./capture" \
  "https://example.org/publications/2026/"
```

Rejecting generated index pages is appropriate only when they are navigation artifacts rather than meaningful evidence.

## creating a static mirror

The following is a starting point for a same-site, locally browsable mirror:

```sh
wget \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  --wait=1 \
  --random-wait \
  --output-file="capture.log" \
  --directory-prefix="./example-mirror" \
  "https://example.org/section/"
```

- `--mirror` enables recursive retrieval and timestamp-aware mirroring behavior;
- `--convert-links` adjusts links for local browsing after retrieval;
- `--adjust-extension` gives HTML and CSS responses suitable local extensions;
- `--page-requisites` retrieves resources needed to display each page;
- `--no-parent` keeps the crawl below the seed path; and
- the delay options make repeated requests less aggressive.

Compact forms such as `-rkpN` are difficult to review later. Long option names make the capture record easier to understand and reduce the risk of preserving a command whose effects no one remembers.

## scope and exclusions

Recursive retrieval can expand unexpectedly through calendars, search pages, generated parameters, duplicate paths, or downloadable files. Use accept/reject patterns, domain limits, recursion depth, quotas, and file-size limits appropriate to the source. Test on a small scope before starting a large capture.

Wget normally consults `robots.txt` during recursive retrieval. Do not carry forward the earlier `-e robots=off` example as a default. An override requires a documented reason and does not by itself resolve permission, contractual, privacy, or source-load concerns.

## what to preserve

Record the seed URL, exact command, `wget --version` output, start and end times, log, errors, checksums, and a short statement of intended scope. Open representative HTML pages locally, check important assets, and compare the observed result with the source before describing the mirror as complete.
