
* [Using IPython Notebook with Django](https://andrewbrookins.com/python/using-ipython-notebook-with-django/)
* [How to setup Jupyter/IPython notebook for Django?](https://stackoverflow.com/questions/35483328/how-to-setup-jupyter-ipython-notebook-for-django)

* [kramdown Syntax](https://kramdown.gettalong.org/syntax.html#math-blocks)

* [Math Engine MathJax](https://kramdown.gettalong.org/math_engine/mathjax.html)
* [Math on GitHub Pages](http://g14n.info/2014/09/math-on-github-pages/)


--
https://github.com/github/markup/issues/897

A workaround mentioned by @cyhsutw at education/classroom#675 (comment) :

Another hack is utilizing the Jupyter Notebook.

GitHub has built-in support for rendering .ipynb files. You can write inline and display LaTeX code in the notebook and GitHub will render it for you.

Here's a sample notebook file: https://gist.github.com/cyhsutw/d5983d166fb70ff651f027b2aa56ee4e

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
