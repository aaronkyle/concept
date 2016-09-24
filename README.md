# concept
trying to spell out what I want from the Internet

----

** Web publication platform intended to allow multiple authors to contribute textual, mathematical, and computational analysis to investigating complex social and environmental phenomenon.** 

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


---

Questions:

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

