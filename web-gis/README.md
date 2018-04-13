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




