# concept

The repository seeks to define a system for open digital communication toward aiding investigation of complex social and environmental phenomenon.

---

## design parameters 

Parameters for development toward a 'common public good':

1. **Systems should be free.**<br />[  The aim is for learning and performing social analysis should be constrained by 'entry costs' such as the need to purchase software licenses. Toward equal treatment and respect for all, and in an effort to alleviate poverty, the tools that we develop to for our work should be freely available for all others.

1. **System must help to manage collaborative research via revision control.** <br />[Revision control](http://en.wikipedia.org/wiki/Revision_control), also known as version control, is the management of changes to files, such documents, computer code, and other collections of information. Version control systems allow managers of collaborative projects to track when changes have been made to particular files, and--if necessary--to revert changes to a previous state.

1. **The system encourages use of 'text' files.** <br />To ensure that data can be accessed (and written to) by the greatest possible range of applications. , we try to to utilize file types that store data as 'text'--typically encoded either in [UTF-8](http://en.wikipedia.org/wiki/UTF-8) or [ASCII](http://en.wikipedia.org/wiki/ASCII). Files encoded in this way are considered ['human readable'](http://en.wikipedia.org/wiki/Human-readable_medium) in the sense that the presentation of information within the file can be opened by any basic text editor in a format that can be naturally read by humans. This differs from the way 'binary' files (such as MS Office *.doc, *.docx, and *.xml) save data, which is done as a sequence of bytes (binary digits (bits) grouped in eights) that require specific software applications to read, interpret, and re-present data in a human-readable format.

1. **The system should&mdash;to the greatest extent possible&mdash;encourage authors to utilize a single formatting language (HTML via. Markdown).** Social development involves interaction between advisory papers, research reports, and other types of textual data. In these (still) early years of the twenty-first century, a common office approaches to collaborative editing involves the circulation of document files via email (shared drives within an institution), and editing of these files with mainstream word processing software. The most prominent editing platform is [Microsoft Word](http://en.wikipedia.org/wiki/Microsoft_Word). Web- /browser environments (applications) tend to hvae some form of [WYSIWYG](http://en.wikipedia.org/wiki/WYSIWYG) text editors, which render HTML previews of how text will appear as 'printed'. Powerful as these software and text manipulation software are in allowing users to define custom formatting to help express themselves, their interoperability is imperfect--introducing (often hidden) formatting inconsistencies in for documents managed in 'traditional' collaborative authorship contexts. 

As research teams grow and offices work with people using different operating systems, one inevitably encounters bugs and conflicts in how formatting data is stored in document files and presented via word-processing applications. For example, even where work is carried out exclusively in Microsoft Word, formatting corruption seems to frequently occur on large files that are collaboratively edited between computers running Windows OS and Mac OSX.[[note1](# "[problems arise from different ways of writing and storing formatting information between the Windows version of MS Word and the Mac OSX version; docs above 40 pages.")] To avoid the hours of extra work cost by inconsistent formatting is a large part of our decisions to utilize only 'text' files (as defined above). To facilitate the printing our work and research stored in text files to different presentation formating (e.g., web, PDF, and even *.docx), we need a single formatting language.

Assumptions:
 - users expect both 'variety' (in terms of UIs) and 'standarization' (in terms of data organization)


## system components

1. web 'site' as basic inter-operability layer
2. users and roles within system
3. external / internal publication

## target features

  * integrated UI/UX
  * past / modern solutions to formatting, 'theming / skinning', application inter-activity.
 
 * from website as publication tool to 'software management interface'
 * core publication elements: static site pages + 'blog' pages (rotate in content)

* a tool for collaborative managment of file objects, with ganulated user- and group- permissions 
 * (Scientific) Web Publication
        - allow multiple authors to contribute textual, mathematical, and computational analysis
 * [gis-analysis](#) (vs. [publication](#))
 * team management & task [assignments](#)
 * version / revision control (incl. for large file systems)



### data management & administration


Team Management Utility:
* Users should be allowed to create their own project pages [groups / categories]
    - solved via customization of CMS
    
* Users should be able to request editorial permissions to existing project pages
    - solved via customization of CMS
 
* Users should be able to choose whether to work from an existing data repository, or to create a new one
    - by linking Git to CMS

* Users should be able to import their own data to the server
    - by linking Git to CMS / keeping separate, private database


### data presentation

 * Each dataset should have a single, master style sheet (with QGIS connected to edit GIS style sheets)
 * Users should be able to select which data views / mapping layers they would like to present in a web page
 * User should be able to present multiple map views within a single web page
 * Each map embedded within a web page should be able to allow for some amount of user interaction (toggling on and off layers, changing the base layer, etc.)


### (scientific) web publication 

** Web (and PDF) publication platform intended to allow multiple authors to contribute textual, mathematical, and computational analysis to investigating in complex social and environmental phenomenon.** 

 - GIS ‘enabled’ *the ability to link data to geographic locations is critical
     *  should allow for a narrative to be written that utilizes several 'embedded' maps as examples within a page [(like here)](http://boundlessgeo.com/2013/12/openlayers-3-and-google-maps-api/)
     *  embedded maps should allow for some direct data querrying, with possibility of linking out to 'detailed' maps, which allow greater capacity for manipulation (especially in desktop applications)
     *  maps should be 'simultaneously broadcast' over the network (affected how changes / updates are made to style sheets and data)
     *  platform should allow multiple means for allowing users to load in data and to manage data repositories
 - focused on visualizations
 - platform-aware (mobile orientation) 

2. Assumptions:
 - users expect both 'variety' (in terms of UIs) and 'standarization' (in terms of data organization)


### GIS integration

Seek to eliminate distinction between results publication (capable of user interaction) & analytics environment.

* [Leaflet](https://leafletjs.com/) -
* [Open Street Maps]() -
* [Boundless GIS Platform](http://boundlessgeo.com/products/opengeo-suite/)
 - web mapping stack - oriented toward GIS professionals
    * [QGIS](http://www.qgis.org/en/site/) – GIS desktop application akin to ArchGIS desktop
    * PostGIS – a spatial database extender for PostgreSQL
    * [GeoGig](http://geogig.org/) – version control / tracking edits to geospatial data
    * GeoServer – application server for sharing data as web services
    * GeoNode – web-based content management system for geospatial data
    * [OpenLayers](http://openlayers.org/) – library for building web applications
* [Observable]() - 
* [Django] - facilitates python-centric software stack and deployment framework; software and services reply on Django web framework; software applications deployable Django modules.
 - [django-wms-client](https://github.com/kartoza/django-wms-client)  facilitates  publication of QGIS Server (or any [WMN](http://en.wikipedia.org/wiki/Web_Map_Service)-based project) within a Django project framework (e.g. [Mezzanine CMS](http://mezzanine.jupo.org/)). This wms-client is configured as a standalone project (mainly for testing). For django integration,  it could be published to pypi and then deployed and run as a Django app.
    * note: Deployment within Django is achieved by adding django-wms-client to INSTALLED_APPS, doing a django sync / migration and then ​adding in your maps using the django admininistration panel. An overview of django-wms-client functionality is provided in the [README](https://github.com/kartoza/django-wms-client/blob/develop/README.md).
    * note:  some work needed to get QGIS server to work under [nginx](http://nginx.org/) [a task related to the server's internal configuration](https://github.com/cccs-web/core/tree/master/deploy/production).
    * note: challenge o present different maps for consumption to individual web pages (or map viewing frames); assuming that it be 'best' (or at least, 'possible') to serve multiple qgs projects without needing a separate server running for each one (i.e., per the methods described in Tim's 2012 blog entry, with the challenge for Django-integration being that the [QGIS Server](http://www.qgis.org/en/site/about/features.html?highlight=server#qgis-server) wont serve other *.qgs files even if we clone the wms-client for each.
* [Shiney Server](http://shiny.rstudio.com/) - oriented toward quantitative analysts
 - maps with UIs for defined queries [(example)](http://shiny.rstudio.com/gallery/superzip-example.html)



workflow

 * Each dataset should have a single, master style sheet (with QGIS connected to edit GIS style sheets)
 * Users should be able to select which data views / mapping layers they would like to present in a web page
 * User should be able to present multiple map views within a single web page
 * Each map embedded within a web page should be able to allow for some amount of user interaction (toggling on and off layers, changing the base layer, etc.)
