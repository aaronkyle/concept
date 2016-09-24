# concept
trying to spell out what I want from the Internet

----

** Web (and PDF) publication platform intended to allow multiple authors to contribute textual, mathematical, and computational analysis to investigating complex social and environmental phenomenon.** 

1. Platform basics:
 - all text in Markdown
 - GIS ‘enabled’ *the ability to link data to geographic locations is critical
     *  should allow for a narrative to be written that utilizes several 'embedded' maps as examples within a page [(like here)](http://boundlessgeo.com/2013/12/openlayers-3-and-google-maps-api/)
     *  embedded maps should allow for some direct data querrying, with possibility of linking out to 'detailed' maps, which allow greater capacity for manipulation (especially in desktop applications)
     *  maps should be 'simultaneously broadcast' over the network (affected how changes / updates are made to style sheets and data)
     *  platform should alow multiple means for allowing users to load in data and to manage data repositories
 - focused on visualizations
 - platform-aware (mobile orientation) 

2. Assumptions:
 - users expect both 'variety' (in terms of UIs) and 'standarization' (in terms of data organization)

---

**Target Features**

1. Data Management & Administration
    * Users should be allowed to create their own project pages
    * Users should be able to request editorial permissions to existing project pages
    * Users should be able to choose whether to work from an existing data repository, or to create a new one
    * Users should be able to import their own data to the server

2. Data Presentation
    * Each dataset should have a single, master style sheet that can be edited with QGIS
    * Users should be able to select which layers they would like to present in a web page
    * User should be able to present multiple map views within a single web page
    * Each map embedded within a web page should be able to allow for some amount of user interaction (toggling on and off layers, changing the base layer, etc.)

---

Considerations in the use of tools and interfaces for producing geo-spatial visualization:

* [Shiney Server](http://shiny.rstudio.com/) - oriented toward quantitative analysts
 - maps with UIs for defined queries [(example)](http://shiny.rstudio.com/gallery/superzip-example.html)
* [Boundless GIS Platform](http://boundlessgeo.com/products/opengeo-suite/)
 - web mapping stack - oriented toward GIS professionals
    * [QGIS](http://www.qgis.org/en/site/) – GIS desktop application akin to ArchGIS desktop
    * PostGIS – a spatial database extender for PostgreSQL
    * [GeoGig](http://geogig.org/) – version control / tracking edits to geospatial data
    * GeoServer – application server for sharing data as web services
    * GeoNode – web-based content management system for geospatial data
    * [OpenLayers](http://openlayers.org/) – library for building web applications
* [Django] - facilitates python-centric software stack and deployment framework; software and services reply on Django web framework; software applications deployable Django modules.
 - [django-wms-client](https://github.com/kartoza/django-wms-client)  facilitates  publication of QGIS Server (or any [WMN](http://en.wikipedia.org/wiki/Web_Map_Service)-based project) within a Django project framework (e.g. [Mezzanine CMS](http://mezzanine.jupo.org/)). This wms-client is configured as a standalone project (mainly for testing). For django integration,  it could be published to pypi and then deployed and run as a Django app.
    * note: Deployment within Django is achieved by adding django-wms-client to INSTALLED_APPS, doing a django sync / migration and then ​adding in your maps using the django admininistration panel. An overview of django-wms-client functionality is provided in the [README](https://github.com/kartoza/django-wms-client/blob/develop/README.md).
    * note:  some work needed to get QGIS server to work under [nginx](http://nginx.org/) [a task related to the server's internal configuration](https://github.com/cccs-web/core/tree/master/deploy/production).
    * note: challenge o present different maps for consumption to individual web pages (or map viewing frames); assuming that it be 'best' (or at least, 'possible') to serve multiple qgs projects without needing a separate server running for each one (i.e., per the methods described in Tim's 2012 blog entry, with the challenge for Django-integration being that the [QGIS Server](http://www.qgis.org/en/site/about/features.html?highlight=server#qgis-server) wont serve other *.qgs files even if we clone the wms-client for each.


---
*Clarifications / Notes*

Tim Sutton has clarified that QGIS server presents a series of QGIS projects using the standard web services : [Web Mapping Service](http://en.wikipedia.org/wiki/Web_Map_Service) (WMS) and [Web Feature Service](http://en.wikipedia.org/wiki/Web_Feature_Service) (WFS). These services can be consumed by various clients including [OpenLayers](http://openlayers.org/) and [Leaflet](http://leafletjs.com/). The WFS specification allow one to ask for available layers to and selectively display all or a subset thereof.​ Tim also explained that each [QGIS-Web-Client](https://github.com/qgis/QGIS-Web-Client) can serve only a single QGIS project (i.e. a `*.qgs` file) due to how the web client is tied into the specific QGIS project it renders.

To use QGIS Web Client as the platform for map delivery we would need to update the [QGIS-Web-Client](https://github.com/qgis/QGIS-Web-Client) to automatically generate and deploy WMS client configuration files. The advantage of QGIS-Web-Client is that it supports some nice-to-have extended features, including 'print-to-PDF' capacity on server side which will be difficult to otherwise replicate

@timlinux notes, however, that the QGIS Web Client is a 'heavy' app that is essentially trying to replicate a read only experience of the original desktop QGIS project. 



Tim also clarified that his concept for web publication architecture did not include the QGIS web client.  He noted that our initial discussions were centered around using a 'pure' OpenLayers3 or Leaflet implementation with some added 'extras' for managing layer ordering. This is the underlying logic in the development of the [django-wms-client](https://github.com/kartoza/django-wms-client). Following this approach, a user would would publish your projects via QGIS server and then register those projects in the django-wms-client app, which would then deliver them as a Leaflet (or Openlayers) project. Tim notes that the app already does a decent job of service discovery when you point it to a WMS [URL](http://en.wikipedia.org/wiki/Uniform_resource_locator).

One could further extend the django-wms-client to achieve the following:

1. allow the inclusion of multiple WMS services into a single map
2. to provide a legend widget where layers can be drag-dropped to reorder them and a checkbox is provided to hide / show objects

unresolved:  I recall some aspect of our discussion that explained how each application was built on top of a different code base: one that was open-source code base and another that was proprietary.  Without knowing more, it's hard to evaluate the merits of either approach.

---


The [Boundless](http://boundlessgeo.com/) team [actively argue against having over-large mapping application](https://www.youtube.com/watch?v=01yrhqCro7I), encouraging instead targeted map application creation and deployment. This fits with SRC-ITS' current workflow [*discussion below*]. OpenGeo Suite is intended to facilitates such a development and deployment processes&mdash;with [GeoExplorer replacing QGIS Server and the related presentation technology](http://suite.opengeo.org/opengeo-docs/geoexplorer/) (either qgis-web-client or django-wms-client). Map applications are initially built using [Boundless](http://boundlessgeo.com/) templates, but these can be modified and extended.

QGIS continues in much the same role, but supplies data to [GeoServer](http://suite.opengeo.org/opengeo-docs/geoserver/)&mdash;fulfilling the need for a GIPOT (Graphical Information Point of Truth). It appears that QGIS can be used to publish layers and styling to GeoServer, and also that GeoServer can be used as a source of styling data and styling for both QGIS Server (or GeoExplorer, the equivalent web UI for their deployment framework). As such, it appears that GeoServer may be the functional equivalent (and alternative) to [GeoGig](http://geogig.org/) [though Boundless also maintains GeoGig, so perhaps it's another part of the stack?]. It is unclear how [GeoServer](http://suite.opengeo.org/opengeo-docs/geoserver/) preserves and supplies presentation parameters and symbology from QGIS (icons, layer transparency, etc.). 



---

*Unresolved Questions*

1. Architecture of Socifware Environment

 > Do we build as a stack software components, with each component bundled as an individual [Docker](https://www.docker.com/) application? 
 
* a suite of individual docker applications, each wrapping a pre-configured application entity (e.g. postgreSQL, QGIS Server)
  - **note** in the past, it was challenging to conceptulize how different application are configured to communicate with one another; e.g. how, within docker, the system is configured to pass data manipulated with QGIS to update web style sheets  
  - **question** how to point the Docker application to the specific *.qgis file that we wish to serve? (it is only hard coded into the loader via file import, or can different applications be pointed to 'external' *.qgis source files?) [Do we have to re-load the docker app each time we make a change to the qgis file in the source repo?  How is docker referencing a source repo outside of its own container?  Via ssh / html paths?  What happens when these paths change?]
  - **concern** - how to address the large size of each Docker app (or, app suite). Each  Docker repository is rather large in size.  [%%% NOTE SIZES %%%] While this is managable from the standpoint of sharing a development environment for web mappers (allowing them to see how the web mapping application presents data), it makes less sense for other  purposes, such as serving multiple maps for consumption on the site.  With only a few maps online, one would quickly start incurring unnecessary costs for excessive utilization of storage space.
    - 
* scripts pass configurations into Docker
    - **note** scripting the psql data import means maintaining bundles of import scripts, each of which must be assiduously tracked kept up-to-date in order for the script to work (degree of maintenance ) scripts for tutorials and examples is fine; difficulty is maintaining scripts and ensuring appropriate cautions are declared to end users?


>  Do we instead build as a complete application, so that component admin can be accomplished directly on the host server?

- direct access and exposure to the application system architecture and direct communication with applications directly rather than via a virtualization layer.


---

Further Use Case:




## SRC-ITS' Considerations, Usage Scenarios, and Usability Priorities

With regard to the "need" (or potential need) for printing multiple `*.qgis` files:

People often need to produce reports for client-sponsored research projects. Mappers use `*.qgis` to print maps for these reports

Map printing need to conform to a general templates[^1], which includes identification of the map creators, specification of map topic, attribution of data sources, scale, regional view indicators, and general legend. Presentation of web maps will differ from the printed template standards, but it's important to maintain and present appropriate provenience records for data sources.

[NOTE^1: We are developing such template.]

While it came up in discussion of presenting multiple `*.qgis` files. A point that Tim raised concerning the presentation of maps with QGIS server that confused me. Tim noted that QGIS has a feature allowing one to embed layers and groups from other projects.  This feature would allow us to create numerous small projects [each focused on a particular theme (e.g. infrastructure)], which would be nested into projects on an *ad hoc* basis. Tim write, "With this approach you can 'pick and mix' different thematic elements into a master project and then publish that master project. There is an added benefit in that you have a canonical instance of each layer that propagates its changes into all projects where it is embedded."

When creating maps, however, some cartographers prefer to work the opposite direction. That is, one might compile all data into a single "master" qgis file that we use to establish a 'template' color scheme, to assign styles and symbols, to define and populate meta data, etc. This `*.qgs` file is linked to the same underlying shapefile data as all other `*.qgs` files produced for a given client to illustrate specific points or to present targted data.  To produce customized, issue-oriented maps, we usually start by coping the 'master' file, and then stripping from it any excessive data layers.

The first priority usage scenario for our online mapping tool is for it to allow our users to click on and off different data layers (and potentially to re-order these layers) and then to "print" their selection of visible layers (as well as any custom style adjustments that we allow, like layer transparency) to a PDF file referencing custom-defined templates. We would like for these maps to print at a suitably high level of resolution to allow viewers to zoom in a bit (e.g. to more easily read data labels) without rapid deterioration of image quality. We would also like for these maps to contain appropriate legends / keys. [NOTE: Example template files can be accessed here.] In sum, the purpose of this "master template" [which includes all project layers] is to allow any SRC-ITS user with access to the maps to to create a customized PDF map that is printed into a SRC-ITS template.

Once that sort of a "project master" map is in place, our team could also go about the business of creating and publishing specific maps to illustrate specific points, such as would be embedded within Django as a page-level illustration.  We can discuss specific needs and requirements later, and we can add capabilities like map querying, dynamic overlays, layer switchers, etc on an *ad hoc* basis&mdash;ideally we would do this in a generic and re-usable way.  I envisions the end results may be something like these examples from the Word Resources Institute (WRI)[]:

* [forest-cover-analyzer](http://www.wri.org/applications/maps/forest-cover-analyzer/)
* [suitability-mapper](http://www.wri.org/applications/maps/suitability-mapper/#v=suitability)

[OpenGeo Suite](http://suite.opengeo.org/dashboard/) is especially intriguing because it is an OpenSource software stack that neatly packages together all the components that we need--though it also means abandoning a lot of our current efforts. Your considered evaluation of the software and recommendations for a way forward would be highly appreciated.


[Repository Management and Version Control](data-management-concept-and-context)

A discussion on data repository management and version control can be found [here](data-management-concept-and-context).  SRC-ITS is awaiting an update from Admire about the work carried out to-date on GeoGig integration of shapefiles and our PostGIS database. SRC-ITS would also like some clarification about the advantages of GeoGig (e.h. the "feature-level diffs" referenced by Tim).
