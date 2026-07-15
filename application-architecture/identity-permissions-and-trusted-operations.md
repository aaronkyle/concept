# identity, permissions, and trusted operations

An interface should show people the actions available to them, but the interface
cannot decide whether an action is allowed. Browser code and requests can be
changed by the person operating the browser. Every protected operation must
therefore be authorized again at a trusted boundary that controls the resource.

This is the durable requirement behind the former notes about permissions in
React applications. React—or any other interface framework—can make permissions
legible and prevent confusing dead ends. It cannot protect a record when the API,
function, object store, or database accepts an unauthorized request.

## authentication and authorization

Authentication establishes evidence about an identity. Authorization decides
whether that identity may perform a particular action on a particular resource
under the present conditions. A valid session answers the first question, not the
second.

For each protected request, the application should be able to evaluate:

```text
subject + action + resource + context -> allow or deny
```

The resource must be the actual object being changed or disclosed—not merely a
route name or a resource identifier supplied by the client. Context may include
project membership, record state, audience, time, authentication strength, or a
verified organizational boundary.

The [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
recommends least privilege, deny-by-default behavior, validation on every request,
and authorization tests. Its guidance helps turn “user permissions” from an
interface feature into a system-wide control.

## combine roles, attributes, and relationships deliberately

Different rules call for different models:

- a **role** can grant a stable bundle of abilities, such as project reader,
  editor, reviewer, or administrator;
- an **attribute** can constrain a decision using record status, organization,
  sensitivity, geography, or another verified property; and
- a **relationship** can express that a person owns this record, belongs to this
  project, was assigned this task, or may act for this team.

The categori.se applications often need all three. “Editor” alone does not answer
whether a person may edit every project, approve their own contribution, see an
embargoed source, or publish a restricted field. Keep policy understandable:
name the rule in domain language, centralize repeated decisions, and record why a
high-impact decision was allowed or denied without logging sensitive content
unnecessarily.

## human and workload identities

People are not the only actors. Builds, functions, importers, scheduled jobs, and
services also need identities. Each workload should receive only the actions and
resources needed for its task, through short-lived credentials where possible.
It should not inherit an individual developer's broad credentials or share one
long-lived secret with unrelated processes.

In the AWS pattern used by our framework projects, an IAM role can grant a Lambda
function access to a narrow set of objects or actions. That is a useful
enforcement mechanism only when the policy, resource boundary, invoking identity,
logs, failure path, and deployment permissions have all been reviewed. The
service name does not supply the application rule.

This resource-centered view is consistent with [NIST's zero trust
architecture](https://csrc.nist.gov/pubs/sp/800/207/final): network location or
ownership of a device should not create implicit trust. Access is evaluated for
the identity and resource involved.

## place trusted operations behind narrow boundaries

A trusted operation may validate and accept an upload, issue a time-limited file
request, write an approved metadata change, create a release, or retrieve a
restricted record. Give it a small interface and a precise purpose. Validate the
identity, authorization, input, current resource state, and expected side effects
before acting.

Narrow functions can reduce the authority exposed by a public application, but
fragmentation has costs. If many functions duplicate policy or independently
change the same records, the authorization model becomes harder to understand
and test. Keep a cohesive application boundary until a separate trust, ownership,
scaling, or lifecycle requirement justifies another service.

## permissions must follow the information

Authorization does not stop at the canonical database. Consider every derived
representation:

- extracted text and thumbnails;
- search and analytics indexes;
- cached API responses;
- static build data and source maps;
- previews and retained build artifacts;
- exports, backups, and logs; and
- prompts, responses, and files sent to an AI service.

A restricted source can leak through any of these even when its primary record is
well protected. Publication should select approved fields for a named audience;
it should not copy a working record and depend on the interface to hide sensitive
parts. Once a file is included in a public static build, assume it is public even
if no visible page links to it.

## make enforcement reviewable

For each important resource and operation:

1. define the default-deny rule and the identities that can receive access;
2. enforce the decision on the trusted side of the interface for every request;
3. test both allowed and denied paths, including access to another project's
   object and changes in record state;
4. audit high-impact actions with enough context to investigate them;
5. review role grants, workload policies, dormant accounts, and exceptional
   access regularly;
6. provide time-bounded delegation and an accountable recovery or “break-glass”
   path; and
7. revoke access and credentials when a person, integration, or deployment no
   longer needs them.

The interface should explain unavailable actions and current responsibility where
that is safe to disclose. Clear interface behavior supports the policy; repeated
trusted enforcement protects the data.

## related discussions

- [application architecture](README.md)
- [data security](../data-security/)
- [privacy by architecture](../data-privacy/privacy-by-architecture.md)
- [dynamic applications and self-hosting](../platform-hosting/dynamic-applications-and-self-hosting.md)
- [data structures](../data-structures/)
- [user-interface design](../ui-design/)
