# mathematical notation

Mathematical notation is part of the publication, not an ornamental interface
feature. A formula should remain connected to its explanation, variables, units,
assumptions, source, and result. Rendering TeX attractively does not by itself make
an analysis reproducible or understandable.

The older notes combined Django, Jupyter, kramdown, GitHub Pages, MathJax, and
KaTeX workarounds. Our Observable Framework applications now have a direct path
for most web notation.

## use the Framework TeX integration

Observable Framework provides [`tex`](https://observablehq.com/framework/lib/tex)
as a recommended npm library. A fenced `tex` block creates display mathematics,
while the `tex` tagged template can place a formula inline with explanatory text.
This keeps the source readable in Markdown and includes the rendering library,
styles, and supporting fonts in the Framework build.

Use display math for an equation that needs its own visual line and inline math
for a short expression that belongs grammatically in a sentence. Define symbols
near their first use, give equations identifiers only when the discussion refers
back to them, and avoid turning an entire paragraph into notation.

## source, calculation, and display are different

TeX source expresses notation. It is not normally the calculation that produced a
number. Keep executable analysis in a tested data loader, notebook, SQL query, or
JavaScript module; preserve its inputs and environment; and use the page to
explain the method and display selected results.

Where a reader needs to reuse an equation, consider showing the TeX source or a
plain-text definition alongside the rendered form. Where a formula represents a
model, link it to the variables and data fields used by the application rather
than allowing labels to drift independently.

## accessibility and resilient meaning

Introduce important equations in prose and explain what the result means. Test
the rendered mathematics with the browsers and assistive technologies supported
by the project; do not assume visual rendering establishes an equivalent spoken
or navigable representation. Avoid encoding essential distinctions through color
or precise two-dimensional position alone.

For a simple expression, ordinary text or semantic HTML may be clearer than a
math renderer. For a complex derivation, a downloadable accessible document or a
specialized math workflow may be needed in addition to the web page.

## when another renderer is appropriate

[KaTeX](https://katex.org/) remains a focused, fast TeX renderer, and
[MathJax](https://www.mathjax.org/) remains a broader web mathematics system.
Choose another integration when the required notation, accessibility behavior,
document pipeline, or host environment is not adequately served by Framework’s
default. Pin the implementation, self-host supporting assets where practical, and
test the actual formulas: TeX dialects and supported commands differ.

Jupyter notebooks can remain useful for executable exploration, while Pandoc can
produce math-bearing HTML, PDF, DOCX, or other formats from maintained sources.
Their roles belong to [data analysis](../data-analysis/) and [digital
publishing](../digital-publishing/); they do not need to be coupled to Django or a
CMS merely to place an equation on a web page.
