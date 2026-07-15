# interface frameworks and design systems

An interface framework supplies reusable layout rules, styles, and components. A
design system goes further by connecting those elements to shared language,
interaction patterns, accessibility requirements, content guidance, and
governance. Either can speed implementation, but neither determines whether an
interface is coherent or usable.

## our default foundation

For `/framework/` data applications, begin with Observable Framework’s page
shell, [themes](https://observablehq.com/framework/themes), responsive grids,
cards, Markdown, semantic HTML, Observable Inputs, and local components. Import
the default stylesheet into project CSS when extending it, and use its theme
custom properties rather than duplicating light and dark values throughout the
application.

This usually removes the need for Bootstrap, Semantic UI, or another global
framework. It also keeps the built artifact smaller and reduces conflicts among
layout, theme, focus, and component conventions. Add custom CSS for a demonstrated
project need, not simply to make every application look more “designed.”

The earlier Bootstrap and Semantic UI notes remain useful evidence of required
patterns—responsive grids, navigation, attached content, accordions, menus,
tables, dropdowns, and input groups. Those patterns now have a more direct home in
Framework, native HTML, or focused local components.

## choose from requirements

Before adding or replacing a framework, identify:

- supported browsers, devices, zoom levels, and input methods;
- typography, spacing, color, layout, and responsive behavior;
- required navigation, form, disclosure, dialog, table, and feedback patterns;
- accessibility targets and testing capacity;
- compatibility with Framework’s reactive rendering and page lifecycle;
- JavaScript, CSS, font, icon, and transitive-dependency costs;
- theming and organizational identity;
- expected lifespan, maintenance, and upgrade effort; and
- which patterns several categori.se applications genuinely share.

A broad framework can make a prototype consistent quickly. It can also introduce
unused code, recognizable defaults, migrations, and components whose
accessibility still depends on correct content and context.

## prefer native elements and small components

Use native links, buttons, details and summary, dialogs, forms, and tables where
their built-in behavior fits. A custom accordion, combobox, menu, or dialog has a
behavioral contract extending beyond CSS:

- an appropriate element, role, and accessible name;
- keyboard operation and visible focus;
- exposed state and relationships;
- predictable focus movement;
- readable content when scripting or styling fails; and
- behavior under zoom, reflow, touch, and reduced motion.

Consult the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/)
when a native element cannot provide the required pattern. ARIA can describe a
custom widget; it does not implement its behavior.

## develop a categori.se vocabulary

Where decisions recur across Archive, Docs Repo, Team Spaces, Workspace
Management, and OpenGeo.Tools:

1. define shared terms and state labels before styling them;
2. define tokens for type, spacing, color, borders, elevation, and motion;
3. document the purpose and limits of each component;
4. include empty, loading, partial, validation, conflict, error, and completed
   states;
5. include accessible examples and behavioral tests;
6. version consequential changes and explain migrations; and
7. review the pattern in real workflows, not only an isolated component gallery.

Do not wrap every Framework class or Observable Input in a project abstraction.
Own the elements that express a domain rule or provide a stable shared contract;
use the underlying tool directly where another layer would only make it harder to
understand or upgrade.

## when another framework fits

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) remains
a maintained option for conventional sites and applications that benefit from its
grid, utilities, forms, and component ecosystem. Current Bootstrap does not
require jQuery. It may fit a non-Observable application or an established
organizational standard, but combining its global styles with Framework should be
a deliberate integration rather than the default.

React may fit a deeply stateful application component or a required third-party
ecosystem. Web components may fit a shared element used across different hosts.
In either case, keep the boundary narrow and make ownership of DOM, styles, state,
and cleanup clear.

The goal is not to make every page identical. It is to make recurring concepts
and actions understandable, accessible, and maintainable while allowing each
application to reflect the work it supports.

## related discussions

- [Observable Framework and npm](observable-framework-and-npm.md)
- [understanding the DOM](understanding-the-DOM.md)
- [data tables](data-tables.md)
- [forms, files, and progressive disclosure](forms-files-and-progressive-disclosure.md)
- [mathematical notation](math-integrations.md)
- [digital publishing](../digital-publishing/)
