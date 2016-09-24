## Notes on SRC' Software Stack

QGIS

​Among other functionality, QGIS is a tool that creates interactive map projects. Maps can be presented and analysed within QGIS using a variety of tools.


...


OpenLayers (OL) is a javascript appliction that presents data from map services. It can present complex interactive maps in layers. SRC web maps will be presented using OL3.


​Correct. Leaflet performs a similar function too.​

...

QGIS and OL are not related but they process similar data. Both deal with aggregations of maps (layers) and their associated styling.


​In terms of our architecture, QGIS Server provides a backend service, OL/Leaflet provides a client side front end to that service. They both 'speak' WMS as their interoperability layer.​


....

There are three layer aspects of interest:

Features: Vector layer features and attributes
These need to be handled using a database so that the features draw on a common SRC set and projects may extend and modify that set over time. For this we need a single online SRC POT for features. This POT will be a PostGIS database service.
​Yes. Though in our proposed architecture you would run two databases: one for public data, one for 'private' data.​

...

Styling: Symbology
The coloring, associated graphics and annotation of a layer. If developed in QGIS, this information needs to be represented within the PostGIS database service so that it can be transformed for appropriate presentation using OL.

​The styling can be store in the database by QGIS, but typically also resides in the .qgs project file. When using the WMS service, the styling defined on the server side is rendered into map images on the server and sent pre-styled to the client. When using the WFS service, the client (e.g. OL3) would be completely responsible for styling. Typically any more complex styling activities would be done server side.​


...


Layer Attributes
Layer visibility, extent, precedence (for ordering). If developed in QGIS, this information needs to be represented within the PostGIS database service so that it can be transformed for appropriate presentation using OL. 

​No - these are purely artifacts of the QGIS project file and or the OL/Leaflet client. For example a QGIS  project may define layers A, B, C but the WMS client may request them in order A, C, B and they will be rendered as such.

Its best to think of PostGIS as a 'smart data store' and it is not it's responsibility to do any styling of data. QGIS does have the ability to store styling information in the database, but PostGIS isn't intrinsically aware of this (it considers it to be just a stored xml document).​


...



To effectively present project data as interactive maps in browsers, SRC needs to operate at least one map service which will supply the data to browsers running javascript that extends OL.


​Correct. In our proposed architecture you would run at least two (one for public, one for private) map services. In the OL/Leaflet client you can combine any number of these services into a single map. I would expect that over time you would actually host a number of QGIS projects, separated thematically or regionally. IMHO it is better to have a number of smaller thematic projects than one massive great big one with everything in it.​ 


...


To prepare the data for presentation, tools such as QGIS will remain very useful. However a pipeline needs to be established to migrate the QGIS features, styling and layer attributes into the form needed to serve via the map service.

​QGIS Server does this for us. It also distributes attribute data via the 'getFeatreInfo' WMS API.​

...


Legacy QGIS projects have created shapefiles. These will need to be individually handled and imported into PostGIS. New QGIS projects should be able to create PostGIS layers via a SRC PostGIS service. This PostGIS service will be related to the Map Service making the features immediately available over the map service.

​Correct. An update to e.g. an attribute for a kabapaten made on the database would immediately be visible on refresh of the map either in terms of styling (if styling is linked to that attribute) or in terms of the raw attribute data returned to the client.​

...



I am not yet sure how/whether it can also make the styling and layer attributes available. This is a possibility which is likely to involve some PyQGIS plugin work.

​No, QGIS Server returns rendered layers according to the style rules in the QGIS project.​


...
====


http://vers.io/
Versio is a "hosted service built on GeoGig that provides easier toolks for data authors to collaborate on spatial data while streamlining the creation, maintenance, and distribution of spatial data."

====

Git

Git logoBy way of background Git is a distributed revision control and source code management (SCM) system.  Git was initially designed and developed by Linus Torvalds for Linux kernel development in 2005.  It is free open source software distributed under the GNU General Public License (GPL)  V 2.

Every Git working directory is a full-fledged repository with complete history and full version tracking capabilities. Each local repository is standalone and is not dependent on network access to a central server. Git is known for very fast performance and for scalability.

