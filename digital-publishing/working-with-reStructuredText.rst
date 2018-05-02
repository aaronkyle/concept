***********************
reStructuredText Format
***********************

:date: 2016-04-07
:modified: 2016-04-16 21:40
:tags: rst
:category: demo
:slug: restructuredtext-format
:summary: Test rst format

Inline Markup
=============

- ``*emphasis*`` --> *emphasis* (tag <em>)
- ``**strong emphasis**`` --> **strong emphasis** (tag <strong>)
- ```interpreted text``` --> `interpreted text` (tag <cite>)
- ````inline literal```` --> ``inline literal`` (tag <code>)

中文 Inline Markup
------------------

- 這是\ *強調*\ 用法
- 這是\ **強調**\ 用法
- 這是\ `解譯文`\ 用法
- 這是\ ``行內``\ 用法

Lists
=====

.. code-block:: rst

    - This is item 1 
    - This is item 2

Result :

- This is item 1 
- This is item 2

.. code-block:: rst

    3. This is the first item 
    4. This is the second item
    #. This item is auto-enumerated

Result :

3. This is the first item 
4. This is the second item
#. This item is auto-enumerated

Definition Lists :
------------------

.. code-block:: rst

    what 
      Definition lists associate a term with 
      a definition. 

Result :

what 
  Definition lists associate a term with 
  a definition. 

Field Lists :
-------------

.. code-block:: rst

    :Authors: 
        Tony J. (Tibs) Ibbs, 
        David Goodger
        (and sundry other good-natured folks)

    :Version: 1.0 of 2001/08/08 
    :Dedication: To my father.

Result :

:Authors: 
    Tony J. (Tibs) Ibbs, 
    David Goodger
    (and sundry other good-natured folks)

:Version: 1.0 of 2001/08/08 
:Dedication: To my father.

Hyper Link
==========

.. code-block:: rst

    http://docutils.sf.net/ : A standalone hyperlink.

    External hyperlinks, like Python_.

    .. _Python: http://www.python.org/

    External hyperlinks (embedded URIs), like `Python <http://www.python.org/>`_.

Result :

http://docutils.sf.net/ : A standalone hyperlink.

External hyperlinks, like Python_.

.. _Python: http://www.python.org/

External hyperlinks (embedded URIs), like `Python <http://www.python.org/>`_.

.. code-block:: rst

    `phrase reference`_

    inline internal target _`phrase reference` 。

    Internal crossreferences, like example_.

    .. _example:

    This is an example crossreference target.

Result :

`phrase reference`_

inline internal target _`phrase reference` 。

Internal crossreferences, like example_.

.. _example:

This is an example crossreference target.

Footnote References
-------------------

.. code-block:: rst

    Footnote references, like [5]_. 
    Note that footnotes may get 
    rearranged, e.g., to the bottom of 
    the "page".

    .. [5] A numerical footnote. Note 
       there's no colon after the ``]``.

Result :

Footnote references, like [5]_. 
Note that footnotes may get 
rearranged, e.g., to the bottom of 
the "page".

.. [5] A numerical footnote. Note 
   there's no colon after the ``]``.

.. code-block:: rst

    Autonumbered footnotes are 
    possible, like using [#]_ and [#]_.

    .. [#] This is the first one. 
    .. [#] This is the second one.

Result :

Autonumbered footnotes are 
possible, like using [#]_ and [#]_.

.. [#] This is the first one. 
.. [#] This is the second one.

.. code-block:: rst

    They may be assigned 'autonumber 
    labels' - for instance, 
    [#fourth]_ and [#third]_.

    .. [#third] a.k.a. third_

    .. [#fourth] a.k.a. fourth_

Result :

They may be assigned 'autonumber 
labels' - for instance, 
[#fourth]_ and [#third]_.

.. [#third] a.k.a. third_

.. [#fourth] a.k.a. fourth_

.. code-block:: rst

    Citation references, like [CIT2002]_. 
    Note that citations may get 
    rearranged, e.g., to the bottom of 
    the "page".

    .. [CIT2002] A citation 
       (as often used in journals).

Result :

Citation references, like [CIT2002]_. 
Note that citations may get 
rearranged, e.g., to the bottom of 
the "page".

.. [CIT2002] A citation 
   (as often used in journals).

.. code-block:: rst

    Citation labels contain alphanumerics, 
    underlines, hyphens and fullstops. 
    Case is not significant.

    Given a citation like [this]_, one 
    can also refer to it like this_.

    .. [this] here.

Result :

Citation labels contain alphanumerics, 
underlines, hyphens and fullstops. 
Case is not significant.

Given a citation like [this]_, one 
can also refer to it like this_.

.. [this] here.


Implicit Hyperlink Targets :
----------------------------

- section titles `中文 Inline Markup`_
- footnotes 5_
- citations this_

Blocks
======

Block quotes are just :
-----------------------

.. code-block:: rst

    Block quotes

        Indented paragraphs,

            and they may nest.

Result :

Block quotes

    Indented paragraphs,

        and they may nest.

.. code-block:: rst

    A paragraph containing only two colons 
    indicates that the following indented 
    or quoted text is a **literal block**. 

    :: 

      Whitespace, newlines, blank lines, and 
      all kinds of markup (like *this* or 
      \this) is preserved by literal blocks. 

      The paragraph containing only '::' 
      will be omitted from the result. 

Result :

A paragraph containing only two colons 
indicates that the following indented 
or quoted text is a **literal block**. 

:: 

  Whitespace, newlines, blank lines, and 
  all kinds of markup (like *this* or 
  \this) is preserved by literal blocks. 

  The paragraph containing only '::' 
  will be omitted from the result. 

.. code-block:: rst

    | Line blocks are useful for addresses,
    | verse, and adornment-free lists.
    | 
    | Each new line begins with a
    | vertical bar ("|").
    |     Line breaks and initial indents
    |     are preserved.
    | Continuation lines are wrapped

Result :

| Line blocks are useful for addresses,
| verse, and adornment-free lists.
| 
| Each new line begins with a
| vertical bar ("|").
|     Line breaks and initial indents
|     are preserved.
| Continuation lines are wrapped

Tables
======

Grid table :
------------

.. code-block:: rst

    +------------+------------+-----------+ 
    | Header 1   | Header 2   | Header 3  | 
    +============+============+===========+ 
    | body row 1 | column 2   | column 3  | 
    +------------+------------+-----------+ 
    | body row 2 | Cells may span columns.| 
    +------------+------------+-----------+ 
    | body row 3 | Cells may  | - Cells   | 
    +------------+ span rows. | - contain | 
    | body row 4 |            | - blocks. | 
    +------------+------------+-----------+

Result :

+------------+------------+-----------+ 
| Header 1   | Header 2   | Header 3  | 
+============+============+===========+ 
| body row 1 | column 2   | column 3  | 
+------------+------------+-----------+ 
| body row 2 | Cells may span columns.| 
+------------+------------+-----------+ 
| body row 3 | Cells may  | - Cells   | 
+------------+ span rows. | - contain | 
| body row 4 |            | - blocks. | 
+------------+------------+-----------+

Simple table :
--------------

.. code-block:: rst

    =====  =====  ======
       Inputs     Output
    ------------  ------
      A      B    A or B
    =====  =====  ======
    False  False  False
    True   False  True
    False  True   True
    =====  =====  ======

Result :

=====  =====  ======
   Inputs     Output
------------  ------
  A      B    A or B
=====  =====  ======
False  False  False
True   False  True
False  True   True
=====  =====  ======

Interpreted Text Role (inline)
==============================

Code :
------

:code:`for i in range(10)`

.. role:: python(code)
   :language: python

:python:`for i in range(10)`

.. role:: raw-html(raw)
   :format: html

If there just *has* to be a line break here,
:raw-html:`<br />`
it can be accomplished with a "raw"-derived role.
But the line block syntax should be considered first.

- E = mc\ :sup:`2`

math :
------

The math role marks its content as mathematical notation (inline formula).
The input format is LaTeX math syntax without the “math delimiters“ ($ $), for example:

Trigonometric functions : :math:`\cos (2\theta) = \cos^2 \theta - \sin^2 \theta`

Block Directive
===============

Code Block
----------

.. code-block:: rst

    .. code-block:: python

        @task
        def build():
            """Build local version of site"""
            run('pelican -s pelicanconf.py')

Result :

.. code-block:: python

    @task
    def build():
        """Build local version of site"""
        run('pelican -s pelicanconf.py')

Line Numbers :

.. code-block:: rst

    .. code-block:: python
        :linenos: table

        @task
        def build():
            """Build local version of site"""
            run('pelican -s pelicanconf.py')

Result :

.. code-block:: python
    :linenos: table

    @task
    def build():
        """Build local version of site"""
        run('pelican -s pelicanconf.py')

.. code-block:: rst

    .. note:: This is a note admonition.
       This is the second line of the first paragraph.

       - The note contains all indented body elements
         following.
       - It includes this bullet list.

Result :

.. note:: This is a note admonition.
   This is the second line of the first paragraph.

   - The note contains all indented body elements
     following.
   - It includes this bullet list.

.. code-block:: rst

    .. figure:: https://snap-photos.s3.amazonaws.com/img-thumbs/960w/DLIRRCCYBR.jpg
       :scale: 25 %
       :alt: map to buried treasure

       This is the caption of the figure (a simple paragraph).

Result :

.. figure:: https://snap-photos.s3.amazonaws.com/img-thumbs/960w/DLIRRCCYBR.jpg
   :scale: 25 %
   :alt: map to buried treasure

   This is the caption of the figure (a simple paragraph).

Other
=====

Substitution References and Definitions
---------------------------------------

.. code-block:: rst

    Substitutions are like inline directives, allowing graphics and arbitrary constructs within text.

    The |biohazard| symbol must be used on containers used to dispose of medical waste.

    .. |biohazard| image:: http://docutils.sourceforge.net/docs/user/rst/images/biohazard.png

Result :

Substitutions are like inline directives, allowing graphics and arbitrary constructs within text.

The |biohazard| symbol must be used on containers used to dispose of medical waste.

.. |biohazard| image:: http://docutils.sourceforge.net/docs/user/rst/images/biohazard.png

Transitions
-----------

A transition marker is a horizontal line of 4 or more repeated punctuation characters.

.. code-block:: rst

    ----

Result :

----

Comments :
----------

.. code-block:: rst

    .. This text will not be shown 
       (but, for instance, in HTML might be 
       rendered as an HTML comment)

Result :

.. This text will not be shown 
   (but, for instance, in HTML might be 
   rendered as an HTML comment)
