## Toward a Coherent System of Managing and Publishing Geospatial Information

My early development work utilized GitHub to version-control both the web mapping software application as well as spatial data .  While this approach made it convenient for simultaneously sharing both spatial data and the applications' code base within one repository, various [developers](http://www.paulwhippconsulting.com/ "Paul Whipp") and [GIS speacialists](http://kartoza.com/ "Kartoza Pty."), recommended against theis 'combined' approach for the reasons: 1) the Git version-control system is non-optimal for management of spatial data unless it is in some plain text format like GML (geographic markup language) or CSV, 2) repository size for spatial data tends to grow too large for Git manage effectively [e.g., one tends to start encountering timeout errors when cloning and pulling larger repositories, and the system may not be able to manage any single file over 2 gigabytes in size (such as a a dump of a spatial database)].

I adopted an alternative system for sharing spatial data using [BTSync](https://www.btsync.com/en/).  While this approach has the advantage of allowing us to share larger-sized repositories of spatial data outside of Git, it has the disadvantage of creating parallel data sources (i.e., the shared BTSync repository on the client side and the sever-side 'production' repository).  Another disadvantage of the BTSync approach is that data are not version controlled.  We therefore view the BTSync data-management approach as a 'temporary' solution. I subsequently worked with Kartoza Pty on using the ['GeoGig'](http://geogig.org/) platform (formerly GeoGit) for distributed version-control of shapefile data&mdash;for the vector datasets. 

### Managing Spatial Data Repositories

I currently maintain separate geospatial data repositories for publicly-available data that can be displayed on a public website. This material I keep distinct from data specific to client projects (which typically include a mixture of of both public and proprietary data).

A fundamental challenge for data management is how to store and link GIS data (and databases) to best ensure that data are appropriately managed, version-controlled, stored and shared across projects. 

I wish to avoid excessive and un-tracked branching of information. Related to this challenge are decisions about data storage formats.

GIS data may come in a variety of formats, from an assemblage of file types, known as shapefiles, to other budles and file types developed for spatial software.

To archive data, I wish preserve along with them the associated meta-data, including 'original' file names and name of the data source.

Our idea is that using databases to manage shapefiles will also facilitate better interoperability and referential integration with other data types.

Among other database applications, postgreSQL is arguably best suited for management of spatial data. The merits of the added efforts of database utilization, however, are not a matter about which I feel sufficiently informed at this moment in time.


### Visualizing Spatial Data

**Objective** To present complex annotated maps on the Internet.

**Requirements** Include interactive features akin to google maps where layers are shown/hidden, features are highlighted and spatial analysis may be performed.

**Solutions**

* Design via QGIS

[QGIS](http://www.qgis.org/en/site/) is a cartographic tool that can be used to design  interactive map projects. Maps presented and analysed within QGIS can also be publised to a web page from within the QGIS desktop. To do this at a basic level, and within dedicated server instances is relatively trival.  Storing and managing data 

* Split GeoServer and GeoWebCache

GeoWebCache can act as a proxy between GeoServer and a client. It may be advantageous to place GeoWebCache in an public facing servlet container, as it only hosts images and contains no data. You can then host GeoServer in a non-public facing implementation such that only GeoWebCache can access it. This provides a level of isolation for your data, limiting direct data access.

* Multiple GeoServers

It is possible to deploy multiple copies of GeoServer in the same application server. This may be used to implement a “round robin” strategy for handling requests. You could go further and use multiple application servers to host GeoServer instances, making your system more fault tolerant.

For information on this approach see the section on Clustering.

* Separate PostGIS and GeoServer

A recommended installation strategy is to ensure PostGIS and GeoServer are not installed on the same server. This is primarily for security reasons, to prevent PostGIS from being accessed via the web. Give that PostGIS is a separate installation from the WAR bundle, this configuration is straightforward to implement.


### Data Management Workflow

Toward a common workflow for obtaining, indexing, sharing, and version-controlling geospatial data:

This workflow should function at the 'project' level, meaning that the data management occurs within the context of a single client project. 

Sites should be inter-operable; able to call and serve data between instances according to permissions. 

Developments should be easily 'pluggable' across infrastructure [i.e. each application is an extensible 'template']. 

Focus development of map application. Keep site and mapping applications as de-linked as possible. 

Geospatial data needs to be stored and shared in a separate and dedicated repository.

* Git for deployment of the core application architecture [intial set-up and config files]

* Git or GeoGig for version control and sharing of shapefiles / vector data

* Git-annex sitting on top of S3 for for version control and sharing of raster data

This git-centric constellation of data management utilities should afford us fine-grained control over data access and allow us to retain detailed records of when and how data are changed and edited. 

A choice must be made between Git and GeoGig for shapefiles.  Geogig is best when considering plugging into data using QGIS.  The advantage of saving in and out of Git is that is is more accessible to less technical users (and data is maintained and version controlled in the same format as source materials). The GeoGig software allows users to import raw geospatial data (currently from Shapefiles, PostGIS or SpatiaLite).

This set-up would be our "canonical" point of truth for all data types.  Should a project wish to change source data for their specific purposes without wishing for their changes to affect all other maps relying on those data, then the source data would need to be "forked" for that specific project.


#### Team Workflow Needs / Considerations for Entering Data into the VCS 

Data relevant to geospatial analysis may come in a variety of formats, including spatial data (like shapefiles and geo-referenced images) as well as statistical data like demographic measurements and socio-economic indicator data.

Anyone who obtains new data should prioritize getting it loaded into a [VCS](http://en.wikipedia.org/wiki/Revision_control)-enabled repository ASAP. 

When adding new data, it is imperative to 'track' the following metadata:

* original file name
* who supplied the data
* who received the data
* data data was received
* initial location where data was entered into the file system [directory location / path]


**Supplying New Data as a Non-Technical User**

Any team member who receives or obtains geospatial data can give it to a [data administrator](# "") for loading into the appropriate repositories. 

**NOTE**: If using Git rather than GeoGig to maintain a working directory of shapefile data, non-technical users could upload data directly to the repository on their own.

Using GeoGig may preclude this option depending on the level of technical complexity involved.


**Supplying New Data as a Mapper**

Mappers should also upload data new data into a version-controlled repository [Git / GeoGig] in the format that it was received from the data originator (i.e. indexing shapefiles in their original formats in a VCS 'source' directory).

If a mapper wishes to choose how and where data are structured in postgreSQL / [PostGIS](http://postgis.net/), then the appropriate work flow is for that 

mapper to ensure that her or his local database is synced to the master

write a custom loading script that can be executed on the server to load in the source data set from the location where it was entered in the VCS
    - work through GeoGig (potentially via post-deployment hooks) can decrease or eliminate direct interaction with the database when entering new materials into the repository


### Initial Approach and Current Standing




**Data Storage Formats**

With regard to the creation and management of geospatial data in a [postgreSQL](http://www.postgresql.org/) database format, the current standing is is as follows:

Kartoza Pty. created [scripts to load both public geospatial data repository](https://github.com/cccs-web/soc-maps/blob/master/public_loader.sh) and that of clients.

As introduced above, these script reference data that is currently stored in BTSync repositories.

My 'public' data resides on our local machines and on the server at `/home/sync/maps/public/` [15.0 GB]. 

Our client projects are organized by name within an umbrella directory `/home/sync/maps/private/`.


In their current formulation, the data import scripts load shapefiles into a [postgreSQL](http://www.postgresql.org/) that is embedded within a [Docker container](https://www.docker.com/) [^1] 


[**NOTE^1:** Docker is a software application that CCCS has requested be eliminated from our software application stack.]

[NOTE^2: The Docker-oriented data import scripts for my public repository appear to have worked fine. [Those for our client project](http://gitlab.crossculturalconsult.com/abadi/esms-maps/blob/master/loader.sh), by contrast, [return many errors](http://gitlab.crossculturalconsult.com/abadi/esms-maps/blob/master/error-report.txt).  

Clients project will sometimes utilize `*.lyr` file format.  This is difficult to convert these to a non-proprietary format so that they can also be loaded. 

#### Overcoming Challenges&mdash;Next Steps


**Toward a Revised Software Stack for GeoSpatial Repository Management**

As indicated above, ...would like to revise our current stack of software applications for geospatial data management. The tools we would like to use are:

1. [Git-annex](http://git-annex.branchable.com/)
2. ['GeoGig'](http://geogig.org/)
3. [postgreSQL](http://www.postgresql.org/) 


This is our current vision for a data management workflow:

1. Geospatial data is obtained from public sources and clients either as vector data [such as shapefiles] or as raster data [such as high-resolution satellite imagery]. These data are initially stored in a 'regular', non-version-controlled file system (i.e. downloaded to your local hard drive upon receiving the data).
1. Vector data are loaded into a [postgreSQL](http://www.postgresql.org/) database that is version-controlled using ['GeoGig'](http://geogig.org/)
1. Raster data are loaded into [S3](http://aws.amazon.com/s3/) and version-controlled using [git-annex](https://git-annex.branchable.com/) [NOTE: This solution may not be feasible. See further discussion, below.].

This proposed software stack and workflow *should* allow us the capacity to share and manage data without the many challenges associated with reliance on both Git and BTSync (both of which require that users download the full contents of a data repository, even if they are only interested in using a limited sub-set of that data). Use of postgresSQL and S3 have the added advantage of allowing us to free ourselves from constantly changing import scripts to account for revisions to our file directory structure.


*Next Steps for Integrating GeoGig*

With regard to moving forward with ['GeoGig'](http://geogig.org/) in particular:

I needs to create separate GeoGig repositories for 'public' data and for each of our 'client' projects (focusing initially on 'client'). The GeoGig repositories must have their 'MASTER' branch hosted on company servers. 

Progress with regard to enabling GeoGig on our server for shared team access:

   1.  Establish database 'geogig' user and add PATH variable to the user's `/bashrc` file to allow the user to call the geogig application.

1. Created a DNS entry to link traffic coming in from http://geogig.url.com to our desired geogig server

**Remaining tasks** to get the GeoGig set-up "working" for our current map-production needs are:

   1. Configure nginx appropriately to allow us to push and pull data to each GeoGig project

   1. Once GeoGig is up on the server, we then need to import all our existing data.
   
   Data sources:
   
   ...
   
   1. We'll need to improve our documentation and team understanding about GeoGig database management.
   

---


We would like to learn more about the extent to which it is possible (and recommended) to use GeoGig to manage and version-control other data (such as census data of socio-economic indicators).

We should spend some time to identify and prioritize needed tutorials and coaching sessions of database version-control systems.


## Next Steps for Integrating Git-Annex

The git-annex documentation suggests that people are using it with files stored on S3 [[ex. 1](http://git-annex.branchable.com/special_remotes/S3/), [ex. 2](http://git-annex.branchable.com/tips/using_Amazon_S3/)], which can be utilized as a [VCS](http://en.wikipedia.org/wiki/Revision_control).  The challenge for our use case, I suspect, is to have raster data stored in S3 be accessible to data manipulation software such as QGIS without too much hassle (especially given that all client data must be kept private. and requiring the use of permission rules). One option that may help in this regard is to [mount S3 as a file system directory](http://juliensimon.blogspot.com/2013/08/howto-aws-mount-s3-buckets-from-linux.html). Greater investigation into the implications is needed before pursuing this option.


---




<!--
https://mapschool.io/
https://github.com/mapschool/mapschool/edit/gh-pages/index.md

# map school

What is a map? Until the 1980s, maps were painstaking documents created by hand. These days maps are almost always made with the help of a computer. Maps today are commonplace, interspersed in driving directions, visualizations, and political boundary disputes. Let's look deeper and think about the fundamental elements of maps from the eye of the creator.

Computer maps are fundamentally composed of data. Data is in the abstract, composed of billions of points or just a few polygons, or a photo-like recording of colors and temperature. It is important that data is not specific to a certain usage.

From data, we make numbers, pictures, and decisions. Most commonly we make pictures, in a process called 'symbolization' - deciding what visual elements will represent what different parts of a dataset. We analyze data, which means we transform, aggregate, and summarize it to give different answers and represent different aspects of knowledge. The two tasks of symbolization and analysis are often combined, with symbolization forming the limits of what we can represent and analysis defining the aspects of data we focus on.

# Data

Fundamentally, geographical data is either **raster** or **vector** - composed of pixels, or of geometry. The two types are often combined, like when vector road data is overlaid over raster satellite data.

## Raster

![](img/raster.png)

**Raster** data is like a picture that you would take with a digital camera: at the lowest level of abstraction, it is a list of pixels with values. When you 'zoom in' and look closer at raster data, at some point you'll see these discrete pixels, and it will look pixelated.

Raster data is used in pictures of the Earth, like those taken by satellites - but that is just the beginning. Pixels don't need to have colors - instead, each pixel can have a number that represents height and the raster data as a whole stores elevation data. Or pixels can store temperature or reflection data and be useful for environmental work.

##### Raster Bands

The pixels in raster data are not necessarily just filled color: we call its contents 'bands'. A normal image has three familiar bands: Red, Green, and Blue. Combined, they make a picture we're familiar with. Some raster data can have fewer bands, like just one for elevation, or some can have a lot more - not just visible colors, but wavelengths we can't see, like infrared and ultraviolet. When raster data is analyzed and displayed, you can combine and pick bands to use to suit what you're looking for.

##### Raster Formats

Raster formats aim to compact data and make it accessible fast for analysis and display. Some of them are geospatially-enabled versions of common image formats, [GeoTIFF](http://trac.osgeo.org/geotiff/) and JPEG2000.

Internally, raster data formats manage two tasks - packing data into pixels, and then storing the relationship between those pixels and actual places on the globe - the 'extent' of the data.

## Vector

![](img/vector_types.png)

**Vector** data stores basic geometries rather than pixel data. No matter how much you 'zoom in' on vector data, you won't see pixels: the data stored is composed of geometric points and lines, and only converted into an image when necessary.

Vector data is used to store roads, buildings, points of interest, and other things that have some place in the world.

##### Attributes in vector data

Pixels in raster data will usually have attributes like color, opacity, or height. Vector data can contain much more: shapes often have rich data associated with them, usually called properties or attributes. This information can include additional numbers that describe the feature, like the number of people who live in that province, text data like the name of the town represented by a polygon, or other values like true and false.

##### Vector Formats

The most established vector format is the [Shapefile](http://en.wikipedia.org/wiki/Shapefile) - a simple, file-based format that awkwardly spreads the necessary data between four separate files - `.shp` (where actual geometry data resides), `.prj` (a string describing the projection used), `.shx` (an index enabling faster searches), and `.dbf` (a database file containing all the data associated with a geometry of the .shp file). Most of these files are binary data, so opening them in a text editor won't show anything accessible, apart from the .prj file, which defines the projection in plain text. The .dbf database file can be read from LibreOffice Calc because its format is derived from an old database specification. However, the old database specification limits the attribute data you can store in a shapefile. For example: the size of the .dbf can't exceed 2 GB, field names can't contain spaces and can't exceed 10 characters, NULL values are not supported, nor are many special characters, [etc.](http://en.wikipedia.org/wiki/Shapefile#Limitations)

[GeoJSON](http://geojson.org/), [TopoJSON](https://github.com/mbostock/topojson), and [KML](http://developers.google.com/kml) are newer formats based on [JSON](http://www.json.org/) and [XML](http://en.wikipedia.org/wiki/XML) text encoding, respectively. Being text-based, they tend to be simpler to implement in software than Shapefiles, and combined with additional flexibility and features, they have become the standard in new web software. The drawback to GeoJSON is that there are fewer tools built for comparing properties across records easily, so data cleaning and analysis is challenging.

### Topology

In addition to storing places and shapes, some vector data keeps track of topology, the relationships between different shapes. For instance, political borders often touch - you can stand with one foot in Arizona and another in New Mexico. A lot of geospatial data, though, will have one shape that represents Arizona and another that represents New Mexico, with two borders that precisely overlap, but have no other association.

This gets tricky when you want to do something like ask 'which states touch?' or simplify the shapes of objects while preserving borders lined up. We use the concept of topology: some vector data, instead of storing a shape of Arizona and another of New Mexico, saves a bunch of lines and keeps track of which ones form the boundary of which object. So, the border between Arizona and New Mexico is a single line that's used to draw the border of both states, and if you modify the line, it changes the shape of both states.

## Geocoding

Some geographic data is neither vector nor raster: instead of being composed of the numbers that computers understand, it is stored as text data, including references to place names, streets, addresses, and other means of identification.

Unfortunately, it's not possible to simply put this data on a map. There's an indirect and often inaccurate process involved in transforming words like 'United States' into points like `-120, 40`. This process is what we call **geocoding**. Geocoding relies on databases of street names, countries, and more, along with geographical locations, and algorithms that attempt to find the closest match for imprecise input.

### Reverse Geocoding

The opposite process is **reverse geocoding**. This transforms geographic data like points into human readable text, like `United States` or `1714 14th Street`. Like forward geocoding, it is approximate - one place on Earth can be inside of overlapping and conflicting boundaries or between address points.

Geocoding and reverse geocoding are difficult: coordinate position errors, poorly formatted address data, and an ever-changing grid of streets and buildings contribute to the difficulty in turning addresses into coordinates, or vice versa.

<a class='further-reading' href='/geocoding.html'>read more about geocoding</a>

## Data Collection

Map data has been collected in countless ways through the years - everything from sailors' logs to geocoded Tweets. Currently, there are a few major sources that merit discussion:

![](img/gps.jpg)

**GPS**, the satellite constellation that gives your cell phone a blue dot on the map, is the foundation of collecting accurate vector data. Surveyors will drive with highly accurate GPS units and combine their results into something trustworthy.

Observational **satellites and airplanes** collect most raster data we have today, constantly taking photos from different altitudes and combining them into something that looks a little like a picture of the world. The same sensors also capture what we call 'non-visible spectrums', like infrared light that's useful for mapping agriculture and deforestation. Some tricked-out rigs include [LiDAR](http://en.wikipedia.org/wiki/Lidar), a kind of laser sensor that measures altitude and yields us raster altitude data.

**Corporations, governments, and communities** maintain different world maps of varying detail. For instance, [Google](http://maps.google.com) and [OpenStreetMap](http://www.openstreetmap.org/) focus on mapping all roads and details about them, and sources like the [CIA World Factbook](https://www.cia.gov/library/publications/the-world-factbook/) and [Natural Earth](http://www.naturalearthdata.com/) keep track of political borders.

### Storage

There are many ways to store geographic data. Data can be stored as printouts, but recently it became more popular to store it in a way easily accessed and shared, digitally.

There are many different filetypes and conventions for storing geographical data, and thus a variety of tools to translate among different representations. Data is stored in databases or in individual files, but the practical difference between the two is not necessarily important.

# Information

Maps are visualized information: At one end lie the issues of datums, numbers, and storage - the nuts and bolts of how we record and differentiate different places on Earth. Between data and visualization is a transformation we call 'projection' - in which places on Earth become places on usually flat surfaces, like printouts or computer screens. And then finally, we decide the details of color, tone, and symbolism that try to translate details about data into pictures that people can understand and interpret.

## Latitude & Longitude

The most common way to store places on Earth is with latitude and longitude values. Historically latitude and longitude are sometimes represented in sexagesimal notation, like `38° 12'`, but the new standard is to represent them as simple numbers, like `38.2`, that are easy for computers to understand.

![](img/latlon.png)

**Latitude** values range from -90 at the South Pole to 90 at the North Pole. All along the equator the latitude value is 0.

**Longitude** values range from -180 to 180, and the line where these meet, which cuts through the Pacific in north/south direction, is called the antimeridian. The value of 0 is defined as the Prime Meridian, which cuts through Africa and Europe (specifically the Royal Observatory, in Greenwich, London).

The combination of latitude and longitude is usually called a coordinate, and can be represented as 'latitude, longitude', or 'longitude, latitude': historically, the former was standard, but 'longitude, latitude' has recently gained popularity because it mirrors the 'X, Y' ordering of coordinates in math's euclidean space.

Coordinate ordering can cause some confusion, as browser based mapping software often expects 'latitude, longitude', whereas many wire formats specify 'longitude, latitude'.

Sometimes more than just the latitude, longitude position is recorded as data: altitude can also be included, as well as time of capture and other factors. In the case of including altitude, it's usually stored as a third coordinate, like 'longitude, latitude, altitude.'

## The Shape of the Earth

![](img/earth-shapes.jpg)

Storing and presenting the world brings us to the question of what shape it is - can latitude and longitude values be mapped to a perfect sphere and back, and retain their accuracy spatially?

Since the Earth is a spinning object and its components can change shape, it bulges at the middle - so instead of being a sphere, it's actually more similar in shape to a [oblate spheroid](http://en.wikipedia.org/wiki/Oblate_spheroid). If you look even closer, that isn't entirely true either - the Earth is covered in [elevation differences](http://en.wikipedia.org/wiki/Topography) like mountains and valleys, and even manmade changes like cities.

For day-to-day work, we use different estimates of this shape: standards like [WGS84](http://en.wikipedia.org/wiki/WGS84) define precise values for the length of both of the Earth's axes, so we can estimate for a [reference ellipsoid](http://en.wikipedia.org/wiki/Reference_ellipsoid) rather than a sphere. Local measurements and science that relies on precise surface values can also use [geoid models](https://en.wikipedia.org/wiki/Geoid), which are three-dimensional calculations of theoretical ocean heights.

This branch of Earth sciences, called [geodesy](https://en.wikipedia.org/wiki/Geodesy), is a continuing project since our ability to model and measure the Earth moves quickly and the Earth itself changes in shape.

## Projection

![](img/projections.jpg)

Projections are what we call the mathematical equations that do the trick of turning the world into some flat shape that fits on a printout or a computer screen. It's a messy task to do, this transformation - there's no way to smoosh the world onto a screen without distorting it in some way. You either lose direction, or relative size, or come out with something very weird looking.

<a class='further-reading' href='/datum.html'>read more about datums</a>

<a class='further-reading' href='/projections.html'>read more about projections</a>

## Symbolization

Symbolization is a fancy word for the particular ways that data is transformed into graphics in the world of maps.

Fundamentally, data doesn't look like anything: a list of pixel values or road lines is just as well represented in a spreadsheet or a chart as it is on a map. Thus to 'convert' is not the right word for what we do with data: The decision is more about how to render it.

Symbolic techniques include anything representable in graphics or even 3D, so let's only look at a few:

## Sequential & Categorical

![](img/scales.jpg)

Symbolization tends to highlight two different characteristics of data: sequential and categorical. Sequential, or continuous data could also be called linear - it tends to be number values within a set range, like graduation rates between 0 and 100, or elevation. Categorical, or discrete data is, instead, one of a set number of values - like 'true', 'false', 'democrat' or 'republican'.

This division between data is one of the main concerns for symbolization - a sequential datasource would fit with a scaled point map or a gradient color ramp on a raster, whereas categorical data generally is displayed using multiple symbols for markers, or discrete bucketing of colors.

### Choropleth

Choropleth maps preserve the existing boundaries and shapes of places and represent data by changing their colors, patterns or textures. A familiar example of this kind of map is in election results or demographic makeup, in which data is percentage values for some fixed piece of land - a value per voting precinct or census area.

Choropleth maps are a natural fit for data like rates, densities, or percentages. They aren't recommended for absolute values: since they keep the area of shapes the same, they tend to over-emphasize large features. Also, since choropleth maps rely on color differences to represent information, it's important that the colors are well-chosen to be colorblind-safe, understandable, and consistent.

<a class='further-reading' href='/colors.html'>read more about colors</a>

### Point

Point maps are a better alternative for absolute values - the only geometry that they preserve is a single point for each feature.

The specific point or marker used in this style varies tremendously - Coloring points based on their sequential or categorical value can be useful, but points can also be scaled to different sizes to show their relative value. These scaled symbols can be any shape or image, such as circles, squares, or pictures of what they represent. In cases where there are multiple values that total up, scaled pie charts can be a terrific way to visualize what would otherwise be a complex dataset.

Care must be taken to not show too many points at once, as this will make a map difficult to read. In cases where there are too many points, a choropleth with aggregated values from the points may be a good alternative. Another alternative is to use clustering, where crowded points are grouped together until the map is zoomed in closer.

## Publishing

## Analysis

Raster & vector analysis as aggregation & transformation

### Vector to Raster

It's possible to move between the two types of map data, as disparate as they might seem, and it's actually quite common: it's just not direct.

Typically vector data always becomes raster - what we call 'rasterized' or 'rendered' when it is displayed: computer screens and printers operate on the level of pixels, not lines or shapes. This conversion is imperfect: remember that vector data is not pixel-based, so you can never zoom in and see fuzzy features. Thus, generally, when vector data is converted into a raster format, you can't transform that raster representation back into exactly the source.

Sometimes we convert vector data to raster ahead of time - in order to run some kinds of analysis, it's easier to do the math on a pixel basis.

### Raster to Vector

Likewise, raster data can be vectorized in a number of ways. On raster satellite images of the Earth, people draw, or 'trace', lines for streets, points for houses, or polygons for buildings. This lets us have a version of the data upon which we can do more things - you can figure out driving routes from vector data of streets, but can't do that with a satellite image of streets.

### Simulation

With geographic data, it's possible to simulate certain natural processes, and this simulation is a big part of what working mappers do. Given elevation data for a mountain range, it's possible to simulate highlights and shadows for those mountains in light, in a process called hillshading.

More complex processes are also possible, like determining where water will collect after rainfall, called a 'watershed', or determining everywhere on the map that will be visible if you're standing at a mountaintop, called a 'viewshed'.

### Aggregation

The most common form of aggregation is the idea of a sum - given a large group of numbers, you can add them together to get an idea of them all at once. For instance, the GDP of a country is more immediately informative than simply listing every individual contribution to an economy.

Aggregation in maps is similarly used. Given granular data, like millions of individual household incomes, you can use mapping algorithms to sum or average the values inside of specific areas of the world, to show average income per town or city.

![](img/binning-wide.jpg)

Aggregation is also used along with a technique called **binning**: given many discrete points, you can draw arbitrary shapes on the map, like squares or hexagons, and total all of the points that fall in each shape. That way, instead of having millions of tiny points that are difficult to grasp at a glance, you can style the map as a choropleth.

### Interpolation

Whereas aggregation takes lots of data and distills it into something simpler to analyze and visualize, interpolation 'fills in the blanks' between values. Interpolation is often used for datasets like elevation, where you have raster data values that records the height of every inch of a mountain, but there are a few places missing from the data - what programmers call `null` values.

Interpolation looks at the values around the 'blanks' and assumes that the missing values are basically similar to what's around them - a missing pixel at the top of a mountain will be assumed to be pretty high, while one in a valley is assumed to be low.

There are many ways to interpolate point data:

![](img/voronoi.png)

**Voronoi diagrams** take a set of points and turn them into polygons of all of the area around them.
This example [is of airports](https://www.jasondavies.com/maps/voronoi/airports/).

![](img/heatmap.png)

**Heatmaps** assign each point a weight and represent density of point values in "hotter" colors.
This example is [from the Leaflet.heat plugin for web maps](https://github.com/Leaflet/Leaflet.heat).

- **Contour lines** take point sample data and draw lines around them that represent a continuous estimated value. Elevation maps often use this technique.
- A **TIN** (Triangulated Irregular Network) draws triangles between points that can be used to visualize terrains.

## Afterword

We hope this has been an enlightening and inspiring read: there is so much potential in this field and so many unanswered questions. Maps are a connected topic, stretching into art, mathematics, physics, ecology, and so much more.

We'd love if you can [report any issues or file any suggestions](https://tmcw.wufoo.com/forms/mapschool-feedback/) that came to mind in your read.

### License

[Creative Commons Zero](http://creativecommons.org/publicdomain/zero/1.0/)
-->
