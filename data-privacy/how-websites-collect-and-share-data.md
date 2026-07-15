# how websites collect and share data

A website begins producing records before a visitor submits a form. Loading a page normally reveals an IP address, time, requested path, protocol details, and characteristics of the connecting software to the hosting and delivery systems. The page may then cause the browser to contact additional domains or store identifiers locally. Taken separately, many of these observations appear ordinary; related over time and across services, they can describe a person's habits, interests, relationships, and circumstances.

## what an ordinary visit can reveal

### network and delivery records

The domain-name provider, content-delivery network, hosting provider, firewall, and application may each observe part of a request. Logs commonly contain the requested path, time, response, user-agent information, referrer, and network address. These records help with reliability and abuse response, but they can also identify patterns of reading or activity—especially when a URL itself contains a search, document name, account identifier, or access token.

### browser state and recognition

First-party cookies and browser storage can maintain a session, remember a choice, or save unfinished work. The same mechanisms can assign a durable identifier to activity. Third-party cookies have historically enabled recognition across unrelated sites; browsers increasingly restrict them, but tracking can also use first-party identifiers, link decoration, server-to-server matching, or device fingerprinting. MDN's [privacy guides](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides) explain the changing browser mechanisms and defenses.

### page dependencies

An embedded font, script, image, video, map, analytics library, support widget, or social button is also a network request. Its provider may receive the visitor's network address, browser information, page origin, and its own stored identifier. A site therefore shares data by choosing a dependency even when it never sends a separate customer database to that provider.

Self-hosting an asset can reduce third-party requests, but the dependency's code and update process still require review. A privacy-preserving site begins with no third-party browser requests and adds each one for an explicit purpose.

### accounts, forms, and activity

Accounts connect page activity to a stable identity. Forms add information a person knowingly supplies, while application events record what they opened, changed, searched, downloaded, or shared. Seemingly operational details can reveal health, employment, political activity, financial condition, or relationships when the application concerns sensitive work.

### inference and enrichment

Organizations may derive categories or predictions rather than receive them directly. Approximate location can be inferred from a network address; interests from reading; household or organizational relationships from shared identifiers; and sensitive characteristics from combinations of otherwise ordinary fields. Purchased records and identity-resolution services can connect these observations to information gathered elsewhere.

## how data becomes a commercial product

Companies use web and application data through several overlapping arrangements:

- a site uses its own records to operate, measure, personalize, or price its service;
- an analytics or advertising provider processes events for the site and may also use them for its own permitted purposes;
- an advertising exchange distributes information about an available impression so participants can decide whether and how much to bid;
- an identity service matches identifiers or devices across sources;
- a data broker obtains records from applications, public sources, commercial partners, or other brokers and licenses data, segments, scores, or access; and
- an intermediary uses personal or inferred characteristics to select an audience, rank an opportunity, detect fraud, or recommend an offer without handing the customer a conventional list of names.

Privacy policies and laws use terms such as *sell*, *share*, *controller*, *processor*, and *service provider* in specific ways. The economic and privacy question is broader: which other party gains access, influence, or benefit; for what purpose; and what can it do next? A contractual label does not by itself constrain the technical flow.

The FTC has documented the opacity of data brokerage for many years and continues to examine new uses. Its [surveillance-pricing inquiry](https://www.ftc.gov/news-events/features/surveillance-pricing) concerns intermediaries that combine direct, inferred, first-party, and third-party data to influence prices or offers. This does not establish that every personalized price is unlawful; it demonstrates why data sources and consequential uses need to be visible.

## common disclosure and leak paths

### URLs and referrers

URLs escape into browser history, bookmarks, copied messages, screenshots, server and proxy logs, analytics, and the `Referer` header. Do not place secrets or unnecessary personal information in a path or query string. Use an appropriate `Referrer-Policy`; MDN describes how [referrer policy controls cross-origin disclosure](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/Referrer_policy).

### pixels, scripts, and tag managers

A tracking pixel can communicate a page view because requesting the image itself generates a record. Scripts can observe substantially more, and a tag manager can change which third parties run without a new application release. Inventory the final browser requests, not only dependencies named in source code.

### client-side files and state

JavaScript bundles, source maps, static JSON, browser databases, and build-time snapshots are delivered to the user and can be inspected. Hiding a link or interface does not protect the underlying file. Browser storage is also exposed to scripts running in the same security context and may remain on a shared or lost device.

### cloud storage, APIs, and authorization

Buckets and APIs leak when public access, cross-origin access, object policies, or role permissions are broader than intended. An authenticated API can still expose another person's records if it checks that a caller is signed in but not that the caller may access the requested object. The [privacy by architecture](privacy-by-architecture.md) page develops these boundaries for static applications, AWS Lambda, IAM, S3, and CloudFront.

### logs, diagnostics, and support systems

Debug statements frequently copy complete requests, events, file metadata, errors, or tokens into systems with different access and retention. Session replay and support tools may reproduce what a person saw or typed. Logs should record what is necessary to operate and investigate the service, redact sensitive fields, restrict access, and expire according to a defined schedule.

### files, exports, and derived products

Uploaded documents and photographs may contain hidden text, authorship, revision history, device identifiers, or coordinates. Exports create portable copies outside the original permission model. Aggregation and pseudonymization can reduce risk, but unusual combinations, small groups, precise geography, and external data may permit re-identification. See [extracting metadata with ExifTool](../data-capture/extracting-metadata-with-exiftool.md#privacy-and-publication) and NIST's [de-identification guidance](https://csrc.nist.gov/Pubs/ir/8053/Final).

### AI and external processing

Sending a prompt, file, retrieved passage, embedding request, or evaluation example to an AI service is a data disclosure. The input, provider logs, model output, local conversation record, vector index, and feedback pipeline may each retain a form of the information. Before such processing, identify the provider and account terms, location, retention, access, model-training use, deletion path, and whether the purpose permits the material to leave its present boundary.

## constructing a page-level data-flow record

For each public page or application route, record:

1. the first-party requests made before and after authentication;
2. every third-party domain contacted and the feature that requires it;
3. cookies, local storage, caches, and other browser state created;
4. fields contained in paths, queries, headers, request bodies, and events;
5. hosting, CDN, function, application, analytics, and audit logs produced;
6. the organizations and roles that can access each resulting record;
7. retention, correction, deletion, and incident procedures; and
8. the user-facing explanation and control that correspond to the flow.

Browser developer tools and a network capture can verify part of this record. Cloud configuration, server-to-server transfers, contracts, and operational procedures must be reviewed separately. Repeat the inspection after dependency, analytics, authentication, or hosting changes.

## consent is not the only control

A clear choice is important where processing is optional or requires consent, but consent interfaces can become an excuse for excessive collection. A person cannot reasonably evaluate an indefinite list of future recipients and inferred uses. Prefer an architecture that works with less data, fewer third parties, shorter retention, and unsurprising purposes before asking the visitor to manage exceptions.

The [ICO's storage and access technologies guidance](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/04/final-storage-and-access-technologies-guidance-published/) covers cookies, tracking pixels, fingerprinting, and related mechanisms in the current UK context. Requirements vary across jurisdictions, but technical inspection of the actual data flow is useful everywhere.
