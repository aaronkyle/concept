Markdown refers to both:

1. a [markup syntax](http://en.wikipedia.org/wiki/Markup_language) that was designed as an "easy-to-read, easy-to-write plain text format"
1. a text-to-XHTML/HTML conversion tool, written in Perl 

The overriding design goal in initial formulation of Markdown’s formatting syntax was to make it as "readable" as possible. The idea is that any Markdown-formatted document can be publishable "as-is"--i.e., as plain text file that can be logically interpreted by an unfamiliar reader without having to process it's formatting syntax through some form of 'printing' application [unlike text formatted in other a markup languages, such as Rich Text Format (RTF) or HTML, which--in their raw form--are cluttered with tags and formatting instructions to an extent that makes them difficult for human consumption].

It is important to note that there is no clearly-defined Markdown standard.  The original writeup and implementation by John Gruber is referred to by some as 'vanilla' Markdown, with other "flavours" of the syntax being created as different vendors write their own variants of the language to correct flaws or add missing features.

Markdown can be [converted easily](Working-with-Pandoc) to other formatting and printing languages.  It is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

Markdown is free software, available under a [BSD-style open source license](http://daringfireball.net/projects/markdown/license).


### References:

* [Daring Fireball: Markdown](http://daringfireball.net/projects/markdown/)
* [Wikipedia: Markdown](http://en.wikipedia.org/wiki/Markdown)
* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
    * [Markdown Basics](https://help.github.com/articles/markdown-basics/)
    * [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


---

* [Markdown: continue numbered list](https://stackoverflow.com/questions/18088955/markdown-continue-numbered-list)
* [Support starting numbered lists with arbitrary number #211](https://github.com/gettalong/kramdown/issues/211#issuecomment-256508905)

With kramdown:

```
{:start="3"}
1. test
1. test
1. test
```

output:

```
3. test
4. test
5. test
```
