# data security

Data security is the continuing work of protecting information and the systems that create, transform, publish, and preserve it. A useful security program must protect more than secrecy. It should preserve **confidentiality**, so information is disclosed only to authorized people and processes; **integrity**, so changes are authorized and visible; and **availability**, so information and essential functions remain usable when they are needed. Authenticity, accountability, and the ability to recover help us determine who or what produced a change, investigate failures, and restore a trustworthy state.

Security and [privacy](../data-privacy/) overlap, but neither contains the other. A well-secured system can still collect or publish information in ways that harm people. A privacy-preserving system can still lose records, accept a forged update, or become unavailable. We therefore develop the two discussions together while asking different questions of each system.

Security is also not a feature that can be added after an application is complete. It is a set of decisions about assets, identities, dependencies, boundaries, failure, and recovery that must follow data from its source to a published result.

## what we need to protect

The visible dataset or web page is only one part of the system. For the data applications discussed here, important assets include:

- source documents, datasets, metadata, annotations, and derived files;
- personal identities, group membership, authorization rules, and recovery methods;
- source code, dependencies, build instructions, deployment configuration, and generated output;
- credentials, signing material, API keys, encryption keys, and temporary tokens;
- cloud accounts, storage, functions, logs, domain names, and content-delivery configuration; and
- the provenance needed to explain where information came from and whether it has changed.

A threat is a circumstance capable of harming one of these assets. A vulnerability is a weakness that makes the harm possible. Risk depends on the likelihood and consequence of that event in this particular context. This distinction keeps security work tied to the application: the same public object, unavailable service, or modified field can have very different consequences in a demonstration site, a research archive, and an operational workspace.

## security as a lifecycle

The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) organizes security work into six connected functions:

1. **Govern** establishes responsibilities, risk decisions, policies, and expectations for suppliers and collaborators.
2. **Identify** inventories data, systems, dependencies, identities, and likely consequences of failure.
3. **Protect** limits access, secures configuration, safeguards data, and prepares people and systems to resist an incident.
4. **Detect** makes abnormal access, unexpected changes, vulnerable dependencies, and failing controls visible.
5. **Respond** contains an incident, communicates decisions, preserves evidence, and removes an attacker's access.
6. **Recover** restores tested data and services, verifies their integrity, and carries lessons back into design.

These functions are concurrent, not a sequence completed once. A new data source, dependency, collaborator, deployment, or use of an AI service may change the inventory and the risks, even when the application code has not changed.

## current directions in security

### secure products by design and by default

Security guidance increasingly places responsibility on the producer of a system rather than expecting every user to compensate for unsafe defaults. CISA's [Secure by Design](https://www.cisa.gov/securebydesign) work emphasizes products that are secure out of the box, make consequential controls available without unnecessary cost, and provide evidence that security is improving. For this project, that means a private source should not become public because someone missed an obscure setting, and a routine deployment should not require a person to copy a permanent cloud key to a laptop.

### identity is a boundary, not a location

[Zero trust architecture](https://csrc.nist.gov/pubs/sp/800/207/final) does not grant implicit trust merely because a request originates on an internal network or from a familiar device. It authenticates the actor and authorizes the requested action against the particular resource. Short-lived credentials, phishing-resistant multi-factor authentication, narrow roles, and repeated evaluation are replacing shared accounts, trusted network zones, and long-lived access keys.

### software supply chains are part of the application

A static site can have very little runtime code of its own and still inherit risk from a package registry, build action, container image, compromised maintainer account, or deployment token. NIST's [Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) and [cybersecurity supply-chain guide](https://csrc.nist.gov/pubs/sp/1305/final) treat provenance, protected build environments, dependency review, and response to vulnerable components as ordinary development responsibilities.

### resilience is a security outcome

Ransomware, destructive changes, accidental deletion, provider failure, and loss of an account can all make correct data unavailable. Version history, independent backups, protected recovery credentials, and practiced restoration are therefore security controls. A backup is not established merely because another copy exists: we must know which failures can reach it, how it is verified, who can restore it, and how long restoration takes.

### cryptography must be replaceable

Encryption protects data only within a larger system of key generation, access, rotation, recovery, and destruction. NIST finalized its first [post-quantum cryptography standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards) in 2024 and recommends beginning migration. We do not need to invent new cryptography for these applications; we do need an inventory of where cryptographic protocols and keys are used, managed services and reviewed implementations, and enough flexibility to replace an algorithm without rebuilding the information system.

### AI adds another set of inputs, outputs, and authorities

An AI-assisted application may send documents and prompts to another service, accept untrusted text into a model context, generate incorrect or hostile output, or allow a model to invoke tools. The useful response is not to abandon the established security model. It is to identify the additional data flow, distrust instructions carried in content, minimize tool permissions, validate consequential outputs, retain human approval for high-impact actions, and avoid placing secrets in prompts or model-visible configuration.

## approaches in our data applications

The applications in [`aaronkyle/framework`](https://github.com/aaronkyle/framework) demonstrate a useful starting pattern: Observable Framework builds Markdown, JavaScript, and data loaders into static output. Other projects add private object storage, narrow serverless operations, and authenticated workspaces. The following controls describe the direction we use or are establishing across those applications; a deployment should still be checked against its actual configuration.

### publish a bounded static state

Where an application can work from a reviewed snapshot, build the public pages and data ahead of time instead of giving every visitor a live path to a source system. This reduces the number of runtime services, credentials, queries, and mutable interfaces exposed to the internet.

Static does not mean secure by itself. Every HTML, JavaScript, source-map, and data file in a public build should be assumed readable. Data loaders and build jobs must keep credentials on the build side, and the generated directory should be inspected for private records, absolute paths, debug material, and secrets before deployment. The build environment, dependency lockfile, repository protections, and deployment identity become important security boundaries. Observable's [data-loader documentation](https://observablehq.com/framework/data-loaders) explains the boundary between build-time work and the resulting data snapshot.

### give each identity one clear purpose

Separate human administration, source ingestion, automated builds, deployment, and runtime access. Prefer federated or temporary credentials to permanent access keys, require strong multi-factor authentication for administrators, and give each workload its own role. An AWS Lambda function that reads one prefix in one bucket should not receive `s3:*` across the account merely because that policy is convenient during development.

AWS's [IAM security recommendations](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) provide the baseline: protect the root user, use temporary credentials, apply least privilege, review unused access, and validate policies. Resource policies, permission boundaries, conditions, and organization controls can add guardrails, but a guardrail does not replace a comprehensible role.

### keep dynamic operations small and explicit

When a static application needs a dynamic operation, place a narrow API or event-driven function around that operation rather than exposing a general-purpose server or storage credential to the browser. A function should validate its input, authorize the action and resource, use a least-privilege execution role, limit request and response sizes, and be safe to retry where possible.

For public HTTP operations, AWS recommends considering [API Gateway as the front door to Lambda](https://docs.aws.amazon.com/lambda/latest/dg/security-public-endpoints.html), where authentication, throttling, request controls, and AWS WAF can be applied. Function URLs are appropriate only when their simpler security model matches the risk. Concurrency and spending alarms matter too: an operation can be abused without being technically compromised.

### separate private sources from published objects

Keep source material, intermediate files, and public site output in distinct locations with distinct policies. Enable S3 Block Public Access unless public bucket access is an intentional and reviewed requirement. When CloudFront publishes content from a private bucket, use [Origin Access Control](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) rather than making the origin broadly readable.

Use transport encryption, appropriate encryption at rest, versioning, and protected deletion. For high-consequence records, consider replication and S3 Object Lock after deciding who may set retention and how errors can be corrected. AWS's [S3 security best practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html) explain these controls. Presigned URLs are bearer capabilities: restrict their lifetime and permitted operation, avoid logging them, and do not treat an unguessable URL as an authorization system.

### manage secrets and encryption keys outside the code

Do not commit credentials, place them in a static build, or store them as ordinary Lambda environment text when a secret store is appropriate. Use AWS Secrets Manager or Systems Manager Parameter Store for application secrets and AWS KMS for controlled key operations. [Envelope encryption](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html) lets a service encrypt data with a data key while KMS protects the key material and records authorized use.

Key recovery is a governance decision as much as a cryptographic one. Highly sensitive archives may justify distributing recovery authority among several people or organizations; [resilience through encryption and secret sharing](resilience-through-encryption-and-secret-sharing.md) explains when that specialized pattern helps and what it does not solve.

### make consequential activity observable

Record enough to investigate authentication, authorization changes, deployments, destructive operations, denied requests, and unusual access. Protect and retain those records according to their purpose. CloudTrail, CloudWatch metrics and alarms, S3 access information, and application events can contribute different evidence.

Logs are not permission to copy complete requests, documents, tokens, or personal fields into another long-lived store. Define a small event schema, redact sensitive values, restrict log access, set retention, and test that alarms reach someone able to respond.

### design and rehearse recovery

Document how to revoke a credential, roll back a deployment, restore a versioned object or independent backup, rebuild a static site, recover control of a domain, and communicate an incident. Test these paths. A recovery exercise often discovers missing source data, undocumented configuration, expired accounts, or a backup that was exposed to the same failure as the primary system.

## applying the model to current projects

The public applications let us test the same principles at different boundaries:

- [categori.se](https://categori.se/) can explain the shared model and make trust boundaries visible;
- [Archive](https://archive.categori.se/) and [Docs Repo](https://docs-repo.categori.se/) can separate original files, extracted observations, curated metadata, and public derivatives;
- [Team Spaces](https://team-spaces.categori.se/) and [Workspace Management](https://workspace.categori.se/) make identity, membership, authorization, and audit history central concerns; and
- [OpenGeo Tools](https://opengeo.tools/) can publish reusable static resources while keeping private sources and build credentials outside the delivered artifact.

These links describe the intended relationship among the projects, not a security certification of each deployment. Each service needs its own inventory, threat model, configuration review, incident contacts, and recovery test.

## a review checklist

For each application or substantial change, ask:

1. Which data, identities, services, and decisions would matter if disclosed, modified, deleted, forged, or made unavailable?
2. Which files and requests cross from a private source into a build, browser, third party, function, log, or public object?
3. Is every human and workload authenticated appropriately and authorized only for the required resource and action?
4. Can an attacker turn a public endpoint, expensive query, file upload, or model tool into a larger capability?
5. Can we identify the exact code, dependencies, configuration, and source data that produced the deployment?
6. Which events would reveal misuse or failure, where are they recorded, and who will act on them?
7. How are credentials and keys issued, stored, rotated, revoked, recovered, and eventually destroyed?
8. Which copies survive deletion or corruption, and has restoration from an independent copy been tested?
9. What security assumptions are carried by a cloud provider, package, external API, DNS registrar, or individual maintainer?
10. What evidence would allow us to say that the deployed system actually follows this description?

The answers should live close to the application and evolve with it. This page supplies common vocabulary and direction; it does not replace the shorter, testable security record that each deployment requires.

## related discussions

- [identity, permissions, and trusted operations](../application-architecture/identity-permissions-and-trusted-operations.md) develops the application boundary between interface guidance and authorization enforcement.
- [privacy by architecture](../data-privacy/privacy-by-architecture.md) follows personal and sensitive information through static builds, Lambda, IAM, storage, logs, and AI services.
- [resilience through encryption and secret sharing](resilience-through-encryption-and-secret-sharing.md) evaluates a distributed recovery pattern inspired by an earlier article.
- [working with S3](../data-storage/working-with-s3.md) preserves older project notes and is explicitly marked as historical where its credential and permission examples no longer represent current practice.
