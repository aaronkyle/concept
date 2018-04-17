
* [Using IPython Notebook with Django](https://andrewbrookins.com/python/using-ipython-notebook-with-django/)
* [How to setup Jupyter/IPython notebook for Django?](https://stackoverflow.com/questions/35483328/how-to-setup-jupyter-ipython-notebook-for-django)

* [kramdown Syntax](https://kramdown.gettalong.org/syntax.html#math-blocks)

* [Math Engine MathJax](https://kramdown.gettalong.org/math_engine/mathjax.html)
* [Math on GitHub Pages](http://g14n.info/2014/09/math-on-github-pages/)


* [How to supported latex in github-pages](https://stackoverflow.com/questions/26275645/how-to-supported-latex-in-github-pages)


* [Django Pandoc Field](https://github.com/JaapJoris/django-pandocfield)


---


* [KaTeX](https://khan.github.io/KaTeX/)
    - The fastest math typesetting library for the web.

* [KaTeX](https://github.com/Khan/KaTeX)

* [kramdown: Math Engine MathJax](https://kramdown.gettalong.org/math_engine/mathjax.html)

* [kramdown: Math Blocks](https://kramdown.gettalong.org/syntax.html#math-blocks)
    - This syntax feature is not part of the original Markdown syntax. The idea comes from the Maruku and Pandoc packages.


---

https://github.com/github/markup/issues/897

A workaround mentioned by @cyhsutw at education/classroom#675 (comment) :

Another hack is utilizing the Jupyter Notebook.

GitHub has built-in support for rendering .ipynb files. You can write inline and display LaTeX code in the notebook and GitHub will render it for you.

Here's a sample notebook file: https://gist.github.com/cyhsutw/d5983d166fb70ff651f027b2aa56ee4e


NOTA BENE formulas are not rendered in the GitHub website but on your GitHub Pages website, emh like this one you are reading right now.

---

$$
M = \left( \begin{array}{ccc}
x_{11} & x_{12} & \ldots \\
x_{21} & x_{22} & \ldots \\
\vdots & \vdots & \ldots \\
\end{array} \right)
$$


<!-- testing Using MathJax -->
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>


---

http://g14n.info/2014/09/math-on-github-pages/

Using KaTeX
I am going to show how to render math snippets server side with KaTeX in order to import them in your GitHub Pages static web site using Jekyll include feature. Note that client side rendering is also possible, but it is not in the scope of this article, by now.

This is an updated version of the original article, that contained a different solution using MathJax and Redcarpet markdown. That solution is obsolete, I found KaTeX and server side rendering, a far better solution.

What is KaTeX?

KaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web.

Install katex cli, with npm do

npm install katex -g
Create two folders that will contain inline and display snippets

mkdir -p tex-snippets/inline
mkdir -p tex-snippets/display
An inline snippet, like ∀x∈R∀x∈R , does not break its row.

A snippet in display mode will be centered, usually it is a formula, for example


Create file tex-snippets/inline/for-any-real.tex with the following content

\forall x \in R
Create file tex-snippets/display/matrix.tex with the following content

M = \left( \begin{array}{ccc}
x_{11} & x_{12} & \ldots \\
x_{21} & x_{22} & \ldots \\
\vdots & \vdots & \ldots \\
\end{array} \right)
Create two folders that will contain inline and display rendered output in your Jekyll includes folder

mkdir -p _includes/math/inline
mkdir -p _includes/math/display
Generate html output

cat tex-snippets/display/matrix.tex | katex --display-mode > _includes/math/display/matrix.html
cat tex-snippets/inline/for-any-real.tex | katex > _includes/math/inline/for-any-real.html

Finally, add KaTeX CSS to your html page.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">

If you read KaTeX Usage, there is also a JavaScript tag to add, but it is required only for client side rendering.

Now you can include the snippets in your website using Jekyll include tags

{% include math/inline/for-any-real.html %}
{% include math/display/matrix.html %}


---

Rendering Math in GitHub using iPython notebooks

* [Grabbed from https://github.com/odewahn/ipynb-examples, converted to v3 for GitHub to render.](https://gist.github.com/cyhsutw/d5983d166fb70ff651f027b2aa56ee4e)

* [testing github](https://github.com/cben/sandbox)
* [testing github](https://github-cben-sandbox.anat-beni.net/README)
