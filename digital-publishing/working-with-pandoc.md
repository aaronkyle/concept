
## About pandoc

[Pandoc](http://johnmacfarlane.net/pandoc/) is a free software, released by John MacFarlane under the [GNU General Public License](http://www.gnu.org/copyleft/gpl.html), that converts files from one [markup format](http://en.wikipedia.org/wiki/Markup_language) into another.  Pandoc supports conversions between a tremendous variety of formats, including markdown, reStructuredText, textile, HTML, DocBook, LaTeX, MediaWiki markup, TWiki markup, OPML, Emacs Org-Mode, Txt2Tags, Microsoft Word docx, EPUB, and Haddock markup:


**Pandoc-supported Conversions:**
![](http://johnmacfarlane.net/pandoc/diagram.png)

For more information, check out the [pandoc project website](http://pandoc.org/).


## Installing pandoc

Installing pandoc is straightforward:

**Windows**

Windows users can utilize a package installer, available from [pandoc’s download page](https://github.com/jgm/pandoc/releases). To produce PDF output, you’ll also need to install LaTeX. Pandoc recommends [MiKTeX](http://miktex.org/).

**Mac OS X**

Mac OSX users can also install pandoc via a package installer from [pandoc’s download page](https://github.com/jgm/pandoc/releases). If you later want to uninstall the package, you can do so by downloading [this script](https://raw.githubusercontent.com/jgm/pandoc/master/osx/uninstall-pandoc.pl) and running it from your terminal with `perl uninstall-pandoc.pl`.

For PDF output, you’ll also need LaTeX. Because a full MacTeX installation takes more than a gigabyte of disk space, Pandoc recommends installing [BasicTeX](http://www.tug.org/mactex/morepackages.html) (64M), and using the `tlmgr` tool to install additional packages as needed. If you get errors warning of fonts not found, try:

`tlmgr install collection-fontsrecommended`


**Linux**

For 64-bit Debian and Ubuntu, pandoc provides package installer via their [download page](https://github.com/jgm/pandoc/releases). This will install the pandoc and pandoc-citeproc executables and man pages. Users of other Linux flavors can check if installation is possible using your package manager. Pandoc is in the Debian, Ubuntu, Slackware, Arch, Fedora, NiXOS, and gentoo repositories. Note, however, that versions in the repositories are often old. so you may be better off just installing from source. Check out [pandoc's installation instructions](http://pandoc.org/installing.html) for details

For PDF output, you’ll need LaTeX. Pandoc recommends installing [TeX Live](http://www.tug.org/texlive/)


## Using pandoc

**PLEASE NOTE** : This section is intended as a 'quick-and-dirty' CCCS reference for using pandoc to implement a few of the basic conversions that we run most often. The [pandoc website](http://pandoc.org/) provides comprehensive usage instructions and examples, including a great ['Getting Started'](http://johnmacfarlane.net/pandoc/getting-started.html) page to help users who are not familiar with command line operations to understand how to navigate around your file system and to execute basic pandoc commands.  Their ['User's Guide'](http://johnmacfarlane.net/pandoc/README.html) elaborates detailed usage information and instructions.  Please refer to the official pandoc documentation if you wish to run  specific (or complicated) conversions that are not addressed here.

### Understanding and Implementing Basic Conversion Operations

#### Accessing the command line

Pandoc is a [command-line](http://en.wikipedia.org/wiki/Command-line_interface) tool; there is no [graphical user interface](http://en.wikipedia.org/wiki/Graphical_user_interface). In other words, to use pandoc, you need to work through a [terminal interface](http://en.wikipedia.org/wiki/Command-line_interface) [or ['virtual console'](http://en.wikipedia.org/wiki/Virtual_console)].

**Deploying the terminal in Windows:**

Windows users can use either the classic command prompt or the more modern PowerShell terminal. If you use Windows in desktop mode, you can access the your terminal by typing either `cmd` or `powershell` into the Start menu's 'search' tool and double click the application icon to run it.

**Deploying the terminal in Mac OSX:**

On OS X, the 'Terminal' application can be found in `/Applications/Utilities`. You can access the terminal via the 'Finder' window, navigating first to 'Applications' and then to 'Utilities'. Once again, double click the 'Terminal' icon to run it.

**Deploying the terminal in Linux:**

Most Linux users will be comfortable launching the terminal application. For those who are not, accessing your terminal will vary according to your distro. Usually, you can launch it using key command such as `ctrl+alt+t` (or something close to it). To find the terminal via your GUI, try clicking the 'start' icon for your distro and entering `terminal` into the field.

#### Basic operations

Operating pandoc is accomplished by entering commands into the terminal. To start, let’s verify that pandoc is installed by issuing the following command:

`pandoc --version`

You should see a message telling you which version of pandoc is installed, and giving you some additional information.

**Converting a file**

Basic conversion requires only specifying a 'source' file and an 'output' file, such as follows:

        pandoc input.txt -o output.html

In the example above, the one 'option' tag (also known as a 'flag') is used: `-o`.  This tag means "output (and it can also be spelled out as a full word: `--output`. 

The command entry syntax is rather flexible in the sense that the order of operations can vary as long as appropriate option flags
are used. Thus, the following two command will produce the same result:

        pandoc -o output.html input.txt 

[NOTE: If  no  input-file  is specified, input is read from `stdin`. If multiple input files are given, pandoc  will  concatenate  them  all (with blank lines between them) before parsing. Output goes to `stdout` by default.]


A document's format can be specified explicitly.  The input format  is specified  using  the `-r` / `--read`  or `-f` / `--from` options. The output format is specified using the `-w` / `--write`  or `-t` / `--to` options. Thus, to convert hello.txt from markdown to LaTeX, you could type:

        pandoc -f markdown -t latex example.txt -o example.pdf

*also*

        pandoc example.txt -f markdown -t latex -o example.pdf

If the input or output format is not specified explicitly, pandoc  will attempt  to  guess it from the extensions of the input and output file‐names.  Thus, the command:

        pandoc -o example.md example.pdf

will convert `example.md` from markdown to a LaTeX-generated pdf document.

[NOTE: If the input files' extensions are unknown, the input format will  be  assumed to be markdown unless explicitly specified.]

IMPORTANT: Pandoc uses the [UTF-8 character encoding](http://en.wikipedia.org/wiki/UTF-8) for both input and output.  If your local character encoding [is not UTF-8](http://www.iana.org/assignments/character-sets/character-sets.xhtml), you will need to  pipe `input` and `output` through `iconv`:

        iconv -t utf-8 input.txt | pandoc | iconv -f utf-8


**Referencing and Templating for Stylized File Conversions**


When the -s/--standalone option is used, pandoc uses a template to add header and footer material that is needed for a self-standing document. To see the default template that is used, just type

`pandoc -D FORMAT`

where `FORMAT` is the name of the output format. 


*Referencing .docx filetypes*


Pandoc has a unique code command for referencing the custom styles in a `*.docx` file: `--reference-docx`


The pandoc documentation referencs this example command string :

`pandoc -S --reference-docx twocolumns.docx -o UsersGuide.docx README`

Here's the breakdown:

[[call to pandoc]][[--standalone print signifier]][[--reference-docx identifying style template]][[--output identifier]][[name-of-output-file.docsx]][[source-file-name]]

Again, be encouraged to play around a bit with the syntax; Pandoc is very flexible in this regard.  For example, you can attempt to issue the command when your are operating from the folder containing the target document and calling a template file stored in a different folder location:

`cd ~/cccs/blog-preparation`  [##Here I am switching to my blog folder]

`pandoc -o defining_FPIC-demo.docx defining_FPIC.md -S --reference-docx /home/aaron/cccs/admin-cccs/doc_templates/standard_prose.docx`

Using this code:

`pandoc` - calls programme

`-o` defines output file, given as `defining_FPIC-demo.docx`

`defining_FPIC.md` is then specified as source

`-S` specifies that we want to print a "standalone" document

`--reference-docx` calls the template, which is identified by path: `~/cccs/admin-cccs/doc_templates/standard_prose.docx`


Here's a slightly different command syntax, where i call on the source material by specifying its path and print into the folder containing the template document:

`cd ~/cccs/admin-cccs/doc_templates`

`&&`

`pandoc ~/cccs/blog-preparation/defining_FPIC.md -S --reference-docx standard_prose-TEST.docx -o demo.docx`


*Templating*

A custom template can be specified using the `--template` option. You can also override the system default templates for a given output format `FORMAT` by putting a file `templates/default.FORMAT` in the user data directory (see `--data-dir`, above). Exceptions: For `odt` output, customize the `default.opendocument` template. For `pdf` output, customize the `default.latex` template.

Templates may contain 'variables'. Variable names are sequences of alphanumerics, -, and _, starting with a letter. A variable name surrounded by $ signs will be replaced by its value. For example, the string `$title$` in

`<title>$title$</title>`

will be replaced by the document title.

To write a literal $ in a template, use `$$`.

Some variables are set automatically by pandoc. These vary somewhat depending on the output format, but include metadata fields (such as `title`, `author`, and `date`) as well as the following:

|||
|---|---|
|`header-includes`|contents specified by -H/--include-in-header (may have multiple values)|
|`toc`|non-null value if --toc/--table-of-contents was specified|
|`body`|body of document|
|`lang`|language code for HTML or LaTeX documents|
|`theme`|reveal.js or LaTeX beamer theme
|`fontsize`|font size (10pt, 11pt, 12pt) for LaTeX documents|
|`documentclass`|document class for LaTeX documents|
|`classoption`|option for LaTeX documentclass, e.g. oneside; may be repeated for multiple options|
|`geometry`|options for LaTeX geometry class, e.g. margin=1in; may be repeated for multiple options|
|`linestretch`|adjusts line spacing (requires the setspace package)|
|`fontfamily`|font package to use for LaTeX documents (with pdflatex): TeXLive has bookman (Bookman), utopia or fourier (Utopia), fouriernc (New Century Schoolbook), times or txfonts (Times), mathpazo or pxfonts or mathpple (Palatino), libertine (Linux Libertine), arev (Arev Sans), and the default lmodern, among others.|
|`mainfont, sansfont, monofont, mathfont`|fonts for LaTeX documents (works only with xelatex and lualatex)|
|`colortheme`|colortheme for LaTeX beamer documents|
|`fonttheme`|fonttheme for LaTeX beamer documents|
|`linkcolor`|color for internal links in LaTeX documents (red, green, magenta, cyan, blue, black)|
|`urlcolor`|color for external links in LaTeX documents|
|`citecolor`|color for citation links in LaTeX documents|
|`links-as-notes`|causes links to be printed as footnotes in LaTeX documents|
|`toc`|include table of contents in LaTeX documents|
|`toc-depth`|level of section to include in table of contents in LaTeX documents|
|`lof`|include list of figures in LaTeX documents|
|`lot`|include list of tables in LaTeX documents|
|`biblio-style`|bibliography style in LaTeX, when used with --natbib|
|`biblio-files`|bibliography files to use in LaTeX, with --natbib or --biblatex|

Variables may be set at the command line using the -V/--variable option. Variables set in this way override metadata fields with the same name.

Templates may contain conditionals. The syntax is as follows:

```
$if(variable)$
X
$else$
Y
$endif$
```

This will include X in the template if variable has a non-null value; otherwise it will include Y. X and Y are placeholders for any valid template text, and may include interpolated variables or other conditionals. The $else$ section may be omitted.

When variables can have multiple values (for example, author in a multi-author document), you can use the $for$ keyword:

```
$for(author)$
<meta name="author" content="$author$" />
$endfor$
```

You can optionally specify a separator to be used between consecutive items:

`$for(author)$$author$$sep$, $endfor$`

A dot can be used to select a field of a variable that takes an object as its value. So, for example:

`$author.name$ ($author.affiliation$)`

If you use custom templates, you may need to revise them as pandoc changes. We recommend tracking the changes in the default templates, and modifying your custom templates accordingly. An easy way to do this is to fork the pandoc-templates repository (http://github.com/jgm/pandoc-templates) and merge in changes after each pandoc release.




#### Example Conversions


LaTeX:

`pandoc -s README -o example4.tex`

From LaTeX to markdown:

`pandoc -s example4.tex -o example5.text`

Rich text format (RTF):

`pandoc -s README -o example7.rtf`

Beamer slide show:

`pandoc -t beamer SLIDES -o example8.pdf`

Converting a web page to markdown:

`pandoc -s -r html http://www.gnu.org/software/make/ -o example12.text`

From markdown to PDF:

`pandoc README -o example13.pdf`

PDF with numbered sections and a custom LaTeX header:

`pandoc -N --template=mytemplate.tex --variable mainfont=Georgia --variable sansfont=Arial --variable monofont="Bitstream Vera Sans Mono" --variable fontsize=12pt --variable version=1.10 README --latex-engine=xelatex --toc -o example14.pdf`

HTML slide shows:

`pandoc -s --mathml -i -t dzslides SLIDES -o example16a.html`
`pandoc -s --webtex -i -t slidy SLIDES -o example16b.html`
`pandoc -s --mathjax -i -t revealjs SLIDES -o example16d.html`

TeX math in HTML:

`pandoc math.text -s -o mathDefault.html`
`pandoc math.text -s --mathml -o mathMathML.html`
`pandoc math.text -s --webtex -o mathWebTeX.html`
`pandoc math.text -s --mathjax -o mathMathJax.html`
`pandoc math.text -s --latexmathml -o mathLaTeXMathML.html`

Syntax highlighting of delimited code blocks:

`pandoc code.text -s --highlight-style pygments -o example18a.html`
`pandoc code.text -s --highlight-style kate -o example18b.html`
`pandoc code.text -s --highlight-style monochrome -o example18c.html`
`pandoc code.text -s --highlight-style espresso -o example18d.html`
`pandoc code.text -s --highlight-style haddock -o example18e.html`
`pandoc code.text -s --highlight-style tango -o example18f.html`
`pandoc code.text -s --highlight-style zenburn -o example18g.html`

OpenDocument XML:

`pandoc README -s -t opendocument -o example20.xml`

ODT (OpenDocument Text, readable by OpenOffice):

`pandoc README -o example21.odt`

MediaWiki markup:

`pandoc -s -S -t mediawiki --toc README -o example22.wiki`

Markdown citations:

`pandoc -s -S --biblio biblio.bib --csl chicago-author-date.csl CITATIONS -o example24a.html`
`pandoc -s -S --biblio biblio.bib --csl chicago-fullnote-bibliography.csl CITATIONS -o example24b.html`
`pandoc -s -S --biblio biblio.bib --csl ieee.csl CITATIONS -t man -o example24c.1`


Word docx:

`pandoc -s -S README -o example29.docx`

LaTeX math to docx:

`pandoc -s math.tex -o example30.docx`

MediaWiki to html5:

`pandoc -f mediawiki -t html5 -s haskell.wiki -o example32.html`

Docx with a reference docx:

`pandoc -S --reference-docx twocolumns.docx -o UsersGuide.docx README`

Docx to markdown, including math:

`pandoc -s example30.docx -t markdown -o example35.md`



## Conversion Options: Quick Reference Guide

The following 'General Options' should cover most use cases. A more comprehensive list of options is available via the [pandoc 'User's Guide'](http://johnmacfarlane.net/pandoc/README.html)

**General File Definition**

`-f FORMAT, -r FORMAT, --from=FORMAT, --read=FORMAT`

Specify input format. Markdown syntax extensions can be individually enabled or disabled by appending `+EXTENSION` or `-EXTENSION` to the format name. So, for example, `markdown_strict+footnotes+definition_lists` is strict markdown with footnotes and definition lists enabled, and `markdown-pipe_tables+hard_line_breaks` is pandoc’s markdown without pipe tables and with hard line breaks. See [Pandoc’s markdown](http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown), for a list of extensions and their names.

`-t FORMAT, -w FORMAT, --to=FORMAT, --write=FORMAT`

Specify output format. Note that `odt`, `epub`, and `epub3` output will not be directed to stdout; an output filename must be specified using the `-o`/`--output` option. If `+lhs` is appended to `markdown`, `rst`, `latex`, `beamer`, `html`, or `html5`, the output will be rendered as literate Haskell source (see [Literate Haskell support](http://johnmacfarlane.net/pandoc/README.html#literate-haskell-support)]. Markdown syntax extensions can be individually enabled or disabled by appending `+EXTENSION` or `-EXTENSION` to the format name, as described above under `-f`, above.

`-o FILE, --output=FILE`

Write output to `FILE` instead of `stdout`. If `FILE` is `-` (blank or absent), output will go to `stdout`. (Exception: if the output format is `odt`, `docx`, `epub`, or `epub3`, output to `stdout` is disabled.)

`--data-dir=DIRECTORY`

Specify the user data directory to search for pandoc data files. If this option is not specified, the default user data directory will be used. For UNIX or UNIX-like systems, this is

        $HOME/.pandoc

For Windows XP, the path is

        C:\Documents And Settings\USERNAME\Application Data\pandoc

For Windows 7, the path is

        C:\Users\USERNAME\AppData\Roaming\pandoc

[NOTE: You can find the default user data directory on your system by looking at the output of pandoc --version. A reference.odt, reference.docx, default.csl, epub.css, templates, slidy, slideous, or s5 directory placed in this directory will override pandoc’s normal defaults.]


**Reader Options**

`-R, --parse-raw`

Parse untranslatable HTML codes and LaTeX environments as raw HTML or LaTeX, instead of ignoring them. Affects only HTML and LaTeX input. Raw HTML can be printed in markdown, reStructuredText, HTML, Slidy, Slideous, DZSlides, reveal.js, and S5 output; raw LaTeX can be printed in markdown, reStructuredText, LaTeX, and ConTeXt output. The default is for the readers to omit untranslatable HTML codes and LaTeX environments. (The LaTeX reader does pass through untranslatable LaTeX commands, even if -R is not specified.)

`-S, --smart`

Produce typographically correct output, converting straight quotes to curly quotes, --- to em-dashes, -- to en-dashes, and ... to ellipses. Nonbreaking spaces are inserted after certain abbreviations, such as “Mr.” (Note: This option is significant only when the input format is markdown, markdown_strict, textile or twiki. It is selected automatically when the input format is textile or the output format is latex or context, unless --no-tex-ligatures is used.)

`--old-dashes`

Selects the pandoc <= 1.8.2.1 behavior for parsing smart dashes: - before a numeral is an en-dash, and -- is an em-dash. This option is selected automatically for textile input.

`--base-header-level=NUMBER`

Specify the base level for headers (defaults to 1).

`--default-image-extension=EXTENSION`

Specify a default extension to use when image paths/URLs have no extension. This allows you to use the same source for formats that require different kinds of images. Currently this option only affects the markdown and LaTeX readers.

`--normalize`

Normalize the document after reading: merge adjacent Str or Emph elements, for example, and remove repeated Spaces.

`-p, --preserve-tabs`

Preserve tabs instead of converting them to spaces (the default). Note that this will only affect tabs in literal code spans and code blocks; tabs in regular text will be treated as spaces.

`--tab-stop=NUMBER`

Specify the number of spaces per tab (default is 4).

`--track-changes=accept|reject|all`

Specifies what to do with insertions and deletions produced by the MS Word “track-changes” feature. accept (the default), inserts all insertions, and ignores all deletions. reject inserts all deletions and ignores insertions. all puts in both insertions and deletions, wrapped in spans with insertion and deletion classes, respectively. The author and time of change is included. all is useful for scripting: only accepting changes from a certain reviewer, say, or before a certain date. This option only affects the docx reader.

`--extract-media=DIR`

Extract images and other media contained in a docx or epub container to the path DIR, creating it if necessary, and adjust the images references in the document so they point to the extracted files. This option only affects the docx and epub readers.


**Writer Options**


**Citation Rendering**


**Math Rendering**

