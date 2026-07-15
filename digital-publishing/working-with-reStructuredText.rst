writing with reStructuredText
=============================

`reStructuredText <https://docutils.sourceforge.io/rst.html>`_ is a plain-text
markup language designed for technical documentation. It is closely associated
with Docutils and Sphinx, and is widely encountered in Python documentation.
Like Markdown, it keeps prose readable in source form; unlike basic Markdown,
it provides a more explicit system of directives, roles, cross-references, and
document fields.

Use reStructuredText when the surrounding toolchain already expects it or when
its documentation features solve a clear project need. Markdown is usually the
simpler choice for GitHub-facing discussion in this repository. Mixing the two
without a documented build system creates needless formatting differences.

a structural core
-----------------

Section levels are indicated by consistent adornment characters. The choice of
characters is flexible, but their order establishes the hierarchy within a
document::

   a document title
   ================

   an introductory paragraph with *emphasis*, **strong emphasis**, and
   ``inline code``.

   a section
   ---------

   A paragraph in the section.

Do not choose a heading level for its visual size. Use the order to communicate
structure, and let the output style control presentation.

Lists use familiar markers::

   - one item
   - another item

     - a nested item

   1. a first step
   2. a second step

A blank line and consistent indentation are important. Indentation establishes
which paragraphs and blocks belong to a list item or directive.

links, images, and references
-----------------------------

An inline external link can be written as::

   Read the `Docutils documentation <https://docutils.sourceforge.io/>`_.

Named targets keep repeated or lengthy URLs out of the prose::

   The `Docutils documentation`_ explains the processing model.

   .. _Docutils documentation: https://docutils.sourceforge.io/

Internal targets support stable references within a document::

   .. _publication-checklist:

   a publication checklist
   ------------------------

   See the publication-checklist_ before release.

Images use a directive::

   .. image:: images/example.png
      :alt: A concise description of the image
      :width: 640px

Alternative text should communicate the image's purpose. A complex diagram or
chart may also need a nearby long description, table, or link to its data.

literal blocks and code
-----------------------

A paragraph ending in two colons introduces an indented literal block::

   The basic command is::

      python -m docutils input.rst output.html

The ``code-block`` directive can add a language for syntax highlighting::

   .. code-block:: python

      def publish(document):
          return document.validate()

Syntax highlighting is presentation, not evidence that the example is correct.
Test code separately when it is intended to run.

directives and roles
--------------------

Directives create block-level structures. Roles mark inline content. Their
availability depends on the processor and its extensions, so distinguish core
Docutils features from Sphinx or project-specific additions.

For example, Docutils supports admonitions::

   .. note::

      The generated HTML must still be reviewed for accessibility and privacy.

Sphinx adds domain-aware roles and directives for API objects, source code, and
cross-project references. These can make a large documentation system coherent,
but they also couple the source to that system. Document required extensions in
the build configuration.

tables and structured fields
-----------------------------

Simple tables work for compact values with uncomplicated cells::

   ================  =========================
   source            common publication
   ================  =========================
   reStructuredText  HTML documentation
   Markdown          repository discussion
   ================  =========================

Grid tables can represent more complex cells, but become difficult to edit. A
list or linked data file is often a better source for substantial information.
Whatever the notation, rendered tables need meaningful headers and a logical
reading order.

Field lists can express document metadata::

   :title: a reviewed publication
   :date: 2026-07-15
   :language: en

Their interpretation is application-specific. Define a metadata profile rather
than assuming every processor assigns the same meaning to a field.

build and review
----------------

Docutils can produce HTML from a standalone source, while Sphinx coordinates a
collection of documents, navigation, indexes, cross-references, and themes.
Pandoc can also read and write reStructuredText, although a conversion may not
preserve every processor-specific directive or role.

Before publication:

1. identify the Docutils or Sphinx version and enabled extensions;
2. resolve warnings, duplicate targets, and broken cross-references;
3. inspect the rendered heading structure, links, images, code, and tables;
4. confirm that raw directives and includes cannot expose unapproved files;
5. test the output with keyboard and assistive-technology needs in mind; and
6. preserve the source, configuration, theme changes, and build command in
   version control.

Raw HTML and other pass-through content reduce portability and can bypass
ordinary safety checks. Use them only when the publication boundary explicitly
permits them.

references
----------

- `reStructuredText overview <https://docutils.sourceforge.io/rst.html>`_
- `quick reStructuredText <https://docutils.sourceforge.io/docs/user/rst/quickref.html>`_
- `reStructuredText markup specification <https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html>`_
- `Sphinx reStructuredText primer <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_
- `Pandoc reStructuredText options <https://pandoc.org/MANUAL.html#restructuredtext>`_
