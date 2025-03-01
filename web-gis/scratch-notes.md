## About Geo-Mapping (for web and print)

* [Command-Line Cartography, Part 1](https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c)

### A Caveat:

This repository focuses on OpenSource solutions to web mapping.

There are, of course, other means of quickly creating production-quality maps, such as Mapbox, CartoDB, QGIS Cloud [which is based on an OpenSource stack], LizMaps and others.  While promoted as 'free', the un-paid licences for these systems only give users a rather meager amount of space or don’t include helpful tools. These services are terrific for learning web mapping and starting to build a portfoloi, but for full control one really needs to build a system from scratch.



* [Combine Several Fields into One Using a Single Line of Python Code](http://www.esri.com/news/arcwatch/0211/tip.html)
* [redo: Combine Several Fields into One.](https://gist.github.com/tmcw/5078699)

* [Spatial data and web mapping with Python](https://www.youtube.com/watch?v=qmgh14LUOjQ&feature=youtu.be)


* [Using Maps API with OpenLayers](https://mapsapidocs.digitalglobe.com/docs/maps-api-openlayers)
* [Using Maps API with QGIS](https://platform.digitalglobe.com/using-maps-api-with-qgis/)


## Resources




* [OpenLayers and Maps API: Global Imagery for the Global Community](https://platform.digitalglobe.com/openlayers-and-maps-api-global-imagery-for-the-global-community/)

* [Discover Digital Globe](https://discover.digitalglobe.com/)
* [Digital Globe - Gallery](https://www.digitalglobe.com/gallery)

## Boundless OpenGeo

* [Boundless: Have questions? We are here to help!](http://info.boundlessgeo.com/speak-with-sales-request.html?mkt_tok=eyJpIjoiTjJNeU5EUTBPVE5tTkRrMCIsInQiOiJRUVVmME5pNTRoWHdNTkpqeGpmbzcyOFZWSm43ekNPeW5IbW45d2VnQTdCREpVcTdSTFRuQ3I1NVFweTZGdm5mUXZ4c2hjWDEyQ3U0UEltdkRPM2pWVHNPK08zazhYaCtmQUxkcUZZaHBkMlhjK0xxRXh4TStkU2tWRzlMSytlaCJ9)

* [The Complete Guide to Understanding: SECURITY IN OPEN SOURCE](http://info.boundlessgeo.com/rs/242-IZP-883/images/WP003-Security-Open-Source-Software.pdf)
* [How to Unlock the Value of Your Geospatial
Big Data with Open GIS Solutions](http://info.boundlessgeo.com/rs/242-IZP-883/images/WP002-Unlock-Value-Geospatial-Big-Data.pdf)

* [Modern Playbook for GIS Business Transformation with Hybrid Architecture](http://info.boundlessgeo.com/rs/242-IZP-883/images/WP001-Boundless-Modern-Playbook-GIS-Hybrid-Architecture.pdf)


* [Boundless Server: Deployment](http://suite.opengeo.org/docs/latest/sysadmin/deploy/index.html)

---

* [D3 Workshop Series: Mapping Data with D3](http://duspviz.mit.edu/d3-workshop/mapping-data-with-d3/)

* [D3 Workshop Series: Geocoding Using QGIS](http://duspviz.mit.edu/tutorials/geocoding/)



---

* [Creating and deploying apps with Boundless SDK](http://suite.opengeo.org/ee/docs/4.5/webapps/sdk.html)

* [MapServer and GeoServer (and tilecache) comparison serving Ordnance Survey raster maps](https://www.esdm.co.uk/mapserver-and-geoserver-and-tilecache-comparison-serving-ordnance-survey-raster-maps)

* [Mapserver or Geoserver … that is the question](http://www.xyht.com/spatial-itgis/web-mapping-for-dummies-my-personal-experience/)

* [OpenGeo Suite  » Using QGIS with OpenGeo Suite » OpenGeo Explorer plugin for QGIS » Tutorial](https://connect.boundlessgeo.com/docs/suite/4.7/qgis/explorer/tutorial/index.html)

* [Boundless Server User Manual](https://suite.boundlessgeo.com/docs/latest/)

* [OpenLayers in QGIS Without Writing Code – Part 1](https://boundlessgeo.com/2015/06/building-openlayers-3-web-app-without-writing-code/)

* [Geographic Information Systems Stack Exchange](https://gis.stackexchange.com/questions/175462/seeking-tutorial-for-boundless-web-app-builder)

* [US map of states with populations by ethnicity](https://bl.ocks.org/SuYoungHong/f4a4d387ead290850e58bf92a6c4dbb6)

* [Nextzen: Long-term support for Mapzen maps, vector & terrain tiles](https://www.nextzen.org/)
* [Tangram](https://github.com/tangrams)
* [Long-term support for Mapzen maps, vector & terrain tiles](https://mapzen.com/blog/long-term-support-mapzen-maps/)
* [nextzen.js](https://github.com/nextzen/nextzen.js)

* [GIS with Python, Shapely, and Fiona](https://macwright.org/2012/10/31/gis-with-python-shapely-fiona.html)
    - Shapely and Fiona are essential Python tools for geospatial programming written by Sean Gillies. Use them instead of ESRI’s Python toolchain. They are free, stable, and mean you can post your code on GitHub and nonrich people will be able to run it.
    
* [More than you ever wanted to know about GeoJSON](https://macwright.org/2015/03/23/geojson-second-bite.html)

* [lon lat lon lat](https://macwright.org/lonlat/)

* [The case for open-source GIS](http://millermountain.com/geospatialblog/2018/01/16/open-source-gis/)

* [map school](https://mapschool.io/)


* [COURSES](http://millermountain.com/geospatialblog/gis-courses/)
* [CATEGORY: ARTICLES](http://millermountain.com/geospatialblog/category/article/)
* [Tales from the golden age of geospatial.](http://millermountain.com/geospatialblog/2018/02/23/tales-golden-age-geospatial/#more-409)
* [CATEGORY: TUTORIALS](http://millermountain.com/geospatialblog/category/tutorial/)
* [Quick start to publishing your data to the web with QGIS2Web](http://millermountain.com/geospatialblog/2017/11/13/quick-start-publishing-data-web-qgis2web/)
* []()
* []()




* [D3.js JSON and TopoJSON](https://gist.github.com/nkhine/3150901)

D3.js JSON and TopoJSON

To download the .shp files use http://www.gadm.org/download

use ogr2ogr to convert shape files to .json

☺ ogr2ogr -f "GeoJSON" /tmp/world.json ~/Downloads/world_borders.shp world_borders Use the TopoJSON to reduce the size of these, see https://github.com/mbostock/topojson/

Command to convert to a topojson format, preserving Name and Type and are also simplified with the -s 10e-9 precision threshold for Visvalingam simplification, in steradians setting.

☺ topojson -o public/topo/USA_adm1.json -p NAME_1=country -p TYPE_1 -s 10e-9 /tmp/USA_adm1.json


* [GeoPython](https://github.com/bentrm/geopython/tree/8e52062d9545f4b7c1f04a3516354a5a9155e31f)
* []()
