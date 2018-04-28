Markdown refers to both:

1. a [markup syntax](http://en.wikipedia.org/wiki/Markup_language) that was designed as an "easy-to-read, easy-to-write plain text format"
1. a text-to-XHTML/HTML conversion tool, written in Perl 

The overriding design goal in initial formulation of Markdown’s formatting syntax was to make it as "readable" as possible. The idea is that any Markdown-formatted document can be publishable "as-is"--i.e., as plain text file that can be logically interpreted by an unfamiliar reader without having to process it's formatting syntax through some form of 'printing' application [unlike text formatted in other a markup languages, such as Rich Text Format (RTF) or HTML, which--in their raw form--are cluttered with tags and formatting instructions to an extent that makes them difficult for human consumption].

It is important to note that there is no clearly-defined Markdown standard.  The original writeup and implementation by John Gruber is referred to by some as 'vanilla' Markdown, with other "flavours" of the syntax being created as different vendors write their own variants of the language to correct flaws or add missing features.

Markdown can be [converted easily](Working-with-Pandoc) to other formatting and printing languages.  It is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

Markdown is free software, available under a [BSD-style open source license](http://daringfireball.net/projects/markdown/license).

---

Adapted from the introductary post of [Ghost](https://ghost.org/) blogging software:



## Getting Started

Writing in markdown is designed to be easy, using minimat *formatting* to style content.


### Headers

Headers are done with `#`:

```
### Here's a third-level sub-header

```

### Here's a third-level sub-header


Lists are stated with `*`:

```
* Item number one
* Item number two
    * A nested item
* A final item
```

* Item number one
* Item number two
    * A nested item
* A final item

### Numbered Lists


For a numbered list:

```
1. Remember to buy some milk
2. Drink the milk
3. Tweet that I remembered to buy the milk, and drank it
```

1. Remember to buy some milk
2. Drink the milk
3. Tweet that I remembered to buy the milk, and drank it


### Links

Want to link to a source? No problem. If you paste in url, like http://ghost.org - it'll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here's a link to [the Ghost website](http://ghost.org). Neat.

### What about Images?

Images work too! Already know the URL of the image you want to include in your article? Simply paste it in like this to make it show up:

{<1>}![The Ghost Logo](http://tryghost.org/ghost.png)

Not sure which image you want to use yet? That's ok too. Leave yourself a descriptive placeholder and keep writing. Come back later and drag and drop the image in to upload:

{<2>}![A bowl of bananas]


### Quoting

Sometimes a link isn't enough, you want to quote someone on what they've said. It was probably very wisdomous. Is wisdomous a word? Find out in a future release when we introduce spellcheck! For now - it's definitely a word.

> Wisdomous - it's definitely a word.

### Working with Code

Got a streak of geek? We've got you covered there, too. You can write inline `<code>` blocks really easily with back ticks. Want to show off something more comprehensive? 4 spaces of indentation gets you there.

    .awesome-thing {
        display: block;
        width: 100%;
    }

### Ready for a Break? 

Throw 3 or more dashes down on any new line and you've got yourself a fancy new divider. Aw yeah.

---


### Advanced Usage

There's one fantastic secret about Markdown. If you want, you can  write plain old HTML and it'll still work! Very flexible.

<input type="text" placeholder="I'm an input field!" />

That should be enough to get you started. Have fun - and let us know what you think :)

---



* [kramdown Syntax](https://kramdown.gettalong.org/syntax.html#math-blocks)
    - fast, pure-Ruby Markdown-superset converter

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

---



### References:

* [Daring Fireball: Markdown](http://daringfireball.net/projects/markdown/)
* [Wikipedia: Markdown](http://en.wikipedia.org/wiki/Markdown)
* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
    * [Markdown Basics](https://help.github.com/articles/markdown-basics/)
    * [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


