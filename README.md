# concept
trying to spell out what I want from the Internet


----


Web publication platform intended to allow multiple authors to contribute textual, mathematical, and computational analysis to investigating complex social and environmental phenomenon.

1. Platform basics:
 - all text in Markdown
 - GIS ‘enabled’ *the ability to link data to geographic locations is critical
     *  should allow for a narrative to be written that utilizes several 'embedded' maps as examples within a page [(like here)](http://boundlessgeo.com/2013/12/openlayers-3-and-google-maps-api/)
     *  embedded maps should allow for some direct data querrying, with possibility of linking out to 'detailed' maps, which allow greater capacity for manipulation (especially in desktop applications)
 - focused on visualizations
 - platform-aware (mobile orientation) 

2. Assumptions:
 - users expect both 'variety' (in terms of UIs) and 'standarization' (in terms of data organization)

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

Target Features:

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

