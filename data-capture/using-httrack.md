# using HTTrack

[HTTrack](https://www.httrack.com/html/index.html) creates local copies of websites by retrieving a starting page, following permitted links, and rewriting paths for offline browsing. Its interactive configuration and URL filters can be convenient when a capture is easier to define as a browsing boundary than as a list of individual resources.

HTTrack is a mirroring tool, not a complete browser or preservation system. It cannot reproduce every authenticated, database-backed, or JavaScript-rendered application.

## starting with a bounded mirror

Running `httrack` without arguments opens its guided command-line setup. A scripted capture can also name the output directory and filters explicitly:

```sh
httrack "https://example.org/section/" \
  -O "./example-mirror" \
  "+*.example.org/section/*" \
  "-*.example.org/section/search*" \
  "-*.example.org/logout*" \
  -v
```

Filters beginning with `+` include matching URLs; filters beginning with `-` exclude them. The exact filters should be tested before a long run. A broad wildcard can retrieve far more than the seed section suggests.

The official [command-line manual](https://www.httrack.com/html/httrack.man.html) and [user guide](https://www.httrack.com/html/fcguide.html) document limits for depth, transfer rate, connections, file types, and URL patterns. We should retain the settings used for each capture rather than relying on defaults that may change or be forgotten.

## when HTTrack is useful

- creating a locally browsable copy of a mostly static site;
- interactively refining inclusion and exclusion rules;
- updating an earlier mirror when the purpose and scope remain the same; and
- migrating content when no structured export is available and the site owner permits retrieval.

## where it falls short

HTTrack may not capture content assembled by JavaScript, server-side search, form submissions, streaming media, remote map services, or APIs that are not linked as ordinary resources. Rewritten pages can also continue to depend on remote domains. Validate the result with networking disabled if self-contained offline use is a requirement.

For evidentiary or preservation work, a folder mirror may omit response headers, redirects, and request history. Consider a WARC-based capture when those records matter.

## capture discipline

Start with the smallest useful scope. Respect robots instructions, licenses, access restrictions, and source capacity. Limit request rates and connections, review the transfer log, and record failed or excluded URLs. Never embed passwords, cookies, or session tokens in a saved project or repository.

After capture, preserve the seed URL, filters, command or project configuration, HTTrack version, log, timestamps, and a manifest of retrieved files. Describe the mirror as a time-bounded copy, not a replacement for the live source.
