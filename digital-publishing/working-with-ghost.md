






*[How to Create A Tags List Page in Your Ghost Theme](https://aspirethemes.com/blog/ghost-tags-page)

Enable the Ghost Public API
Create the Tags Static Page
Create the Tags Page Theme File


*[Get primary_tag name when in tag.hbs](https://forum.ghost.org/t/get-primary-tag-name-when-in-tag-hbs/759)

You can definitely filter posts by tag using the {{has}} helper:

    {{#foreach posts}}
      {{#has tag="news"}}
          {{> post}}
      {{/has}}
    {{/foreach}}

You could add this code to a `home.hbs` file and it would only be used on your homepage.

Use the api: https://github.com/TryGhost/Ghost/wiki/%5BWIP%5D-API-Documentation

*[How to remove link to Ghost](https://forum.ghost.org/t/how-to-remove-link-to-ghost/2043)

* Remove it from your theme - Assuming you’re using Casper (the default theme), you need to edit `default.hbs:36` 

*[How to Add a Custom Page Template to Your Ghost Theme](https://codehangar.io/custom-page-template-ghost-theme-tutorial/)
*[How to Add a Custom Page to Your Ghost Theme](https://bironthemes.com/blog/how-to-add-a-custom-page-to-your-ghost-theme/)


*[]()
*[]()
*[]()
*[]()
*[]()


*[]()
*[]()
*[]()
*[]()
*[]()
