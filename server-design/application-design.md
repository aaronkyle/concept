
## Content Management 

* [Digital Ocean: CMS](https://www.digitalocean.com/community/tags/cms?type=tutorials)


A content management system (CMS) is an application or framework used to support the collaborative creation and revision of web content. For example, WordPress is the most popular content management system, by some measures it powers 30% of the web.[1] This page provides an overview for open source content management systems.

Categories of Content Management Systems
Traditional CMS - Also known as a coupled CMS, this kind of CMS handles both the management and the publication and rendering of the content to the end-user. Wordpress is an example of a traditional CMS.
Headless CMS - This kind of CMS focuses only on the management of content. When it comes to making the content available for consumption, a headless CMS only provides a RESTful API, and content still needs to be rendered by a static website generator or other tool before it can be read by the end-user. An example of a popular open-source headless CMS is Strapi
Traditional CMS Options

Wordpress - (PHP, MySQL/MariaDB) Originally started as a blogging platform, but has since been extended to work for general websites, e-commerce, forums, news platforms and more. Wordpress benefits from a rich plugin and theme ecosystem, and its popularity means a large number of developers are familiar with building Wordpress sites. Example Wordpress Sites
DigitalOcean provides a Wordpress One-Click Application that automates most of the installation and configuration of Wordpress on an Ubuntu 18.04 Droplet (DigitalOcean server)

Ghost - (Node.js, MySQL) Ghost is a powerful open-source publishing platform for creating professional blogs, magazines and websites. It consists of a Node.js core API, an Ember.js admin client, and a flexible Handlebars.js front-end theme SDK. Example Ghost Sites

DigitalOcean provides a Ghost One-Click Application that automatically installs the officially-recommended Ghost stack on a Ubuntu 18.04 Droplet.

Joomla - (PHP, MySQL/MariaDB/Postgres) Joomla is a highly customizable, free and open-source content management system on which websites and applications can be created.. Example Joomla Sites

Drupal -(PHP, MySQL/MariaDB/Postgres) Drupal is a popular content management system (CMS) used to run some of the largest blogs and websites across the internet. Due to the stability of the base, the adaptability of the platform, and its active community, Drupal remains a popular choice after more than a decade on the scene. Example Drupal Sites
Magento - (PHP, MySQL/MariaDB) Magento is a popular content management system for e-commerce websites. It is used by small businesses and large enterprise companies alike, and can be enhanced by thousands of extensions and themes. Magento uses the MySQL database system, the PHP programming language, and parts of the Zend Framework. Magento example sites, Magento2 code samples on github

MediaWiki - (PHP, MySQL) MediaWiki is a PHP wiki package, originally intended for use on WikiPedia, which allows anyone to create their own personal wiki site. It is used by a majority of the wikis on the Internet. Example MediaWiki Sites
Headless CMS Solutions
Footnotes

1. As of September 2018, Wordpress was found to power 31.8% of scanned sites. "Usage of content management systems for websites" - W3Techs https://w3techs.com/technologies/overview/content_management/all



---

[Drupal: Drupal OR Django/Python?](https://www.drupal.org/forum/support/before-you-start/2016-10-09/drupal-or-djangopython)

I started off working with Drupal 6, and have since seen drupal CMS evolve. Drupal definitely has a lot of great core features and third party modules that will help you get a site up and running fast without reinventing the wheels. A few years ago I decided to brush up my Python skills to enable me take on some AI and Machine Learning projects, then I met Django. Django is a Python framework for "perfectionists with a deadline". It uses Model View Template(MVT). It comes with "batteries included", so when you set up Django, you have the option to use it's admin backend or build out a custom admin yourself.  Just like Drupal, you can extend Django by writing custom apps (similar to drupal modules) or by installing third party apps from the Python Package Index(PyPI) using "pip install appname" command.

If you are new to Python, the learning curve for Django may be a bit steep, but it sure does offer great foundation for building great applications. I built an enterprise Content Management System (similar to Drupal) bundled with a RESTful API, a Machine Learning model that drives the Content Recommendation Engine, and a Sentiment Analysis layer,  all built on top of Django 1.11, Python 3.6, NLTK, Scikit-Learn, and Angular4. So, **if you want to build an application that can scale to become a SaaS application, I will go with Django**. I am sure there are ways to accomplish same in Drupal.

---

https://www.django-cms.org/en/blog/2017/03/14/headless-django-cms/

django CMS loses its head

We're working on a 'headless' mode for django CMS, that will give it even greater flexibility and meet more use-cases.
At present, django CMS works on the assumption that it will serve its content directly to a web browser.

However, web browsers are increasingly not the only consumers of content. Mobile applications, modern frontend frameworks such as React and Angular and even technology such as digital signage systems can also consume content.

We're working towards giving django CMS the ability to serve content via RESTful APIs to any suitable system.

Progress so far

Our work so far is available publicly on GitHub at django CMS REST API. SteelKiwi and Nephila have already contributed a great deal of effort to the project, and we're looking for further help.

Try it

You test it for yourself. Have a look at the README.txt and the example application inside the example_project. [Note: this appears to be inactive; last development 2 years ago](https://github.com/divio/djangocms-rest-api).

We are use Django Rest framework, so while running the project you have access to its interface by adding /api/ to your url.

Next steps

A next step will be to add a "Headless management mode" to the core of django CMS itself. This will decouple template rendering from content management, allowing for management of the django CMS plugin structure mode without using a web browser.

This should give you an idea of the power and possibilities offered by this project! 

We plan to make a first full release of django CMS Rest API alongside django CMS 3.5. As ever we need the help of our community to ensure that the first release is of high quality: functional, stable and useful. We ask django CMS users to test, report issues, offer improvements via pull requests and generally to give us feedback that will help us deliver our next step in this project.


* [Drupal Tutorials: What is Headless Drupal?](https://www.ostraining.com/blog/drupal/what-is-headless-drupal/)



## User Permissions

* [Managing user permissions in your React app](https://medium.com/dailyjs/managing-user-permissions-in-your-react-app-a93a94ff9b40)

* [Role based authorization in React](https://hackernoon.com/role-based-authorization-in-react-c70bb7641db4)

* [Access Control in a React UI](https://labnotes.panderalabs.com/access-control-in-a-react-ui-71f1df60f354)

* [Role-Based Access Control (RBAC) and React Apps](https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/)
