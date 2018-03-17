WORK IN PROGRESS

Objective: To present complex annotated maps on the Internet.

Requirements: Include interactive features akin to google maps where layers are shown/hidden, features are highlighted and spatial analysis may be performed.

Solutions:

[QGIS](http://www.qgis.org/en/site/) is a tool that creates interactive map projects. The maps are presented and analysed within the QGIS tool. Its presentation is adequate for CCCS presentation but it needs to be presented on a web page rather than within the QGIS desktop.


---



----

## Toward a Coherent System of Managing and Publishing Geospatial Information

### Managing Spatial Data Repositories

#### Concept

I maintains separate geospatial data repositories for publicly-available data that can be displayed on the public website and distinct from data specific to client projects (which typically include a mixture of of both public and proprietary data sources).


Our first, most fundamental, challenge with regard to data management related to how to store and link GIS data (and databases) to best ensure that data are appropriately managed, version-controlled, stored and shared across projects. We wish to avoid excessive and un-tracked branching of information. Related to this challenge are decisions about data storage formats. Most GIS data we receive come in the form of shapefiles. To archive these data (and to preserve along with them the associated meta-data, including 'original' file names and name of the data source), CCCS is currently using [postgreSQL](http://www.postgresql.org/).  Our idea is that using databases to manage shapefiles will also facilitate better interoperability and referential integration with other data types. Among other database applications, postgreSQL is arguably best suited for management of spatial data. The merits of the added efforts of database utilization, however, are not a matter about which CCCS is sufficiently informed at this moment in time.


#### Initial Approach and Current Standing


**Repositories and GeoSpatial Data Management**

My early development work utilized GitHub to version-control both the web mapping software application as well as the spatial data that we intended to referenced by that application: [/cccs-web/soc-maps/](https://github.com/cccs-web/soc-maps).  While this approach made it convenient for simultaneously sharing both spatial data and the applications' code base within one repository to our various developers and application users, both CCCS' IT expert, [Paul Whipp](http://www.paulwhippconsulting.com/), and our GIS consultants, [Kartoza Pty.](http://kartoza.com/), recommended against this 'combined' approach. Factors cited in their recommendations include: 1) the Git version-control system is non-optimal for management of spatial data unless it is in some plain text format like GML (geographic markup language) or CSV, 2) repository size for spatial data tends to grow too large for Git manage effectively [e.g., one tends to start encountering timeout errors when cloning and pulling larger repositories, and the system may not be able to manage any single file over 2 gigabytes in size (such as a a dump of a spatial database)].

Following the advice of our consultants, I adopted an alternative system for sharing spatial data using [BTSync](https://www.btsync.com/en/).  While this approach has the advantage of allowing us to share larger-sized repositories of spatial data outside of Git, it has the disadvantage of creating parallel data sources (i.e., the shared BTSync repository on the client side and the sever-side 'production' repository).  Another disadvantage of the BTSync approach is that data are not version controlled.  We therefore view the BTSync data-management approach as a 'temporary' solution.

I worked with Kartoza Pty on using the ['GeoGig'](http://geogig.org/) platform (formerly GeoGit) for distributed version-control of shapefile data&mdash;for the vector datasets. The GeoGig software allows users to import raw geospatial data (currently from Shapefiles, PostGIS or SpatiaLite).



**Data Storage Formats**

With regard to the creation and management of geospatial data in a [postgreSQL](http://www.postgresql.org/) database format, the current standing is is as follows:

Kartoza Pty. created [scripts to load both CCCS' public geospatial data repository](https://github.com/cccs-web/soc-maps/blob/master/public_loader.sh) and [that of our clients](http://gitlab.crossculturalconsult.com/abadi/esms-maps/blob/master/loader.sh) into postgreSQL.

As introduced above, these script reference data that is currently stored in BTSync repositories.

My 'public' data resides on our local machines and on the server at `/home/sync/maps/public/` [15.0 GB]. 

Our client projects are organized by name within an umbrella directory `/home/sync/cccs-maps/private/`.


In their current formulation, the data import scripts load shapefiles into a [postgreSQL](http://www.postgresql.org/) that is embedded within a [Docker container](https://www.docker.com/) [^1] 


[**NOTE^1:** Docker is a software application that CCCS has requested be eliminated from our software application stack.]

[NOTE^2: The Docker-oriented data import scripts for my public repository appear to have worked fine. [Those for our client project](http://gitlab.crossculturalconsult.com/abadi/esms-maps/blob/master/loader.sh), by contrast, [return many errors](http://gitlab.crossculturalconsult.com/abadi/esms-maps/blob/master/error-report.txt).  

Also, our client project had a record of numerous `*.lyr`.  CCCS has recently converted these to a non-proprietary format so that they can also be loaded. We raise these points here for context; they are elaborated in the [respective client project wiki]()].


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

I needs to create separate GeoGig repositories for 'public' data and for each of our 'client' projects (focusing initially on 'abadi'. The GeoGig repositories must have their 'MASTER' branch hosted on CCCS' servers. 

Progress with regard to enabling GeoGig on our server for shared team access:

   1. We installed GeoGig to our data server:<br />

		geogig@ip-10-167-186-14:/home/aaron$ geogig version

		Project Version : 1.0-beta1
		Build Time : August 14, 2014 at 17:44:46 ART
		Build User Name : Gabriel Roldan
		Build User Email : gabriel.roldan@gmail.com
		Git Branch : r1.0-beta1
		Git Commit ID : 9aae709f4f451802a09c14293c92a46372c868bd
		Git Commit Time : August 14, 2014 at 17:43:33 ART
		Git Commit Author Name : Gabriel Roldan
		Git Commit Author Email : gabriel.roldan@gmail.comG
		Git Commit Message : Set version to 1.0-beta1


   1.  We created a 'geogig' user added the appropriate the PATH variable to the user's `/bashrc` file to allow the user to call the geogig application
   1. We created a DNS entry to link traffic coming in from http://geogig.crossculturalconsult.com to our desired geogig server

**Remaining tasks** to get the GeoGig set-up "working" for our current map-production needs are:

   1. We need to configure nginx appropriately to allow us to push and pull data to each GeoGig project

   1. Once GeoGig is up on the server, we then need to import all our existing data (this is an issue for Kartoza, @timlinux).  In addition to shapefiles, [it is possible to import postgreSQL data into GeoGig](http://geogig.org/workshop/workshop.html).
   * It remains unclear to CCCS what is occurring in [the GeoGig 'import' process](http://geogig.org/docs/data/import.html).  That is: What happens if we import both a postgreSQL database as well as shapefiles?  Are each of these "objects" a unique GeoGig entity, meaning that--as with our current Git-managed repositories--the shapefiles are managed *in situ* and would remain separate and distinct from any postgreSQL database entities? Or does GeoGig re-structure the data as part of its 'import' process (such as when importing data into postgresSQL] so that neither 'source'file object is relevant to GeoGig after the initial import? If the later is the case, are the challenges of importing multiple and different PostregreSQL databases into GeoGig the same as they would be for merging databases within PostregreSQL (e.g. conflicting schema names)?  Does GeoGig allow us to re-export its data as a single postgreSQL database, or does it keep each file entity separate?

[*Tangentially related:* Is GeoGig linked to its own database back-end? To what extent does GeoGig system act as the database, and how does it version control changes to it's own database?]

IMPORTANT: With respect to the data uploaded to postgreSQL, please remember to keep track of meta-data, including the project file name. [@pwhipp ideally, we'd also want some for of a script that would allow us to upload shapefile data into the [document management system](https://github.com/cccs-web/docmeta).]

   1. We'll need to improve our documentation and team understanding about GeoGig database management. As the several questions raised above indicate, CCCS current understanding of how GeoGig manages data is limited. We would like to learn more about the extent to which it is possible (and recommended) to use GeoGig to manage and version-control other data (such as census data of socio-economic indicators). We should spend some time to identify and prioritize needed tutorials and coaching sessions of data management using GeoGig as our version-control system.

*Next Steps for Integrating Git-annex*

The git-annex documentation suggests that people are using it with files stored on S3 [[ex. 1](http://git-annex.branchable.com/special_remotes/S3/), [ex. 2](http://git-annex.branchable.com/tips/using_Amazon_S3/)], which can be utilized as a [VCS](http://en.wikipedia.org/wiki/Revision_control).  The challenge for our use case, I suspect, is to have raster data stored in S3 be accessible to data manipulation software such as QGIS without too much hassle (especially given that all client data must be kept private. and requiring the use of permission rules). One option that may help in this regard is to [mount S3 as a file system directory](http://juliensimon.blogspot.com/2013/08/howto-aws-mount-s3-buckets-from-linux.html). Greater investigation into the implications is needed before pursuing this option.


