# understanding the DOM

The Document Object Model (DOM) is the browser’s in-memory representation of a
document. HTML is parsed into nodes with properties and relationships; scripts
can read or change those nodes and respond to events. The lasting lesson from the
older DOM notes is not that JavaScript can modify every element. It is that the
structure we create becomes the interface available to the browser, assistive
technology, tests, styles, and application code.

## semantic HTML comes first

Use the element that expresses the content or action: headings for sections,
links for navigation, buttons for actions, labels and controls for input, tables
for tabular data, lists for collections, and landmarks for major page regions.
Native elements provide behavior and accessibility semantics that a generic
`div` does not acquire merely because it looks similar.

The DOM should preserve a logical reading and focus order independent of a wide
screen layout. CSS can rearrange presentation, but a visually attractive grid
does not repair a confusing source order.

## Observable’s reactive model

Observable Framework ordinarily removes the need to query a node and imperatively
rewrite it whenever an input changes. A value exposed through `view` can feed a
table, chart, calculation, conditional section, or component; Framework updates
the dependent expressions when that value changes.

This makes the relationship among state and displays more visible than a web of
selectors and mutation callbacks. It does not eliminate application state. Name
the source of each value, distinguish derived from editable state, and decide
whether the value exists only for this page visit or must be persisted elsewhere.

## construct DOM safely and clearly

Markdown and literal HTML are appropriate for stable page structure. For dynamic
elements, [Hypertext Literal](https://observablehq.com/framework/lib/htl) provides
the built-in `html` and `svg` tagged templates, with context-aware interpolation
and support for event listeners, styles, and other DOM nodes. Prefer it to
assembling markup with string concatenation or assigning untrusted strings to
`innerHTML`.

Context-aware escaping is not permission to render arbitrary stored HTML. If the
application accepts HTML, Markdown, SVG, or rich text from an untrusted source,
define an allowed format and sanitize the rendered result using a maintained,
tested boundary.

## components return meaningful elements

In Framework, a component can be a function that accepts data and options and
returns a DOM element. Components are useful for repeated project concepts such
as a source card, status, file summary, metadata assertion, warning, or chart.

A good component contract defines:

- the data and options it accepts;
- the semantic element and accessible name it returns;
- its empty, loading, partial, and error behavior;
- the events or value it exposes;
- focus and keyboard behavior for interactive content; and
- whether rerendering preserves or replaces internal state.

Avoid components that merely rename a CSS class. Own the components that carry a
categori.se concept or stabilize behavior used across several pages.

## direct DOM work still has a place

Some behavior requires direct browser APIs: measuring a container, integrating a
map or editor, managing a dialog’s focus, observing intersection, drawing to
canvas, or creating a temporary download URL. Keep this code inside a component
with a cleanup path. Remove event listeners and observers, revoke object URLs,
and avoid leaving detached nodes or duplicated controls after a reactive rerun.

Use Framework’s `resize` helper before implementing a general resize listener.
Use `view` and Observable Inputs before building a parallel input event system.
When a specialized npm library owns part of the DOM, let it own one bounded
container rather than competing with reactive rendering for the same nodes.

## conditional DOM changes affect people

Adding, removing, or replacing content can change focus, reading order, scroll
position, and the set of available controls. When a conditional section appears,
give it a meaningful heading and preserve the relationship to the choice that
revealed it. When an action completes, announce the result where a screen-reader
user can encounter it. Do not use DOM removal as authorization; a hidden action
can still be requested directly from an API.

The [HTML Living Standard](https://html.spec.whatwg.org/) defines the platform;
[WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the [ARIA Authoring Practices
Guide](https://www.w3.org/WAI/ARIA/apg/) help evaluate the structure and behavior
we create upon it.

