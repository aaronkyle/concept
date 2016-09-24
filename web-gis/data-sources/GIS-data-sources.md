SRC' publicly-available maps rely on publicly-available data [logical, right?].  The licences for most of these datasets prohibit us from sharing them directly, so SRC limits access to our own GIS repository (comprised of datasets we compile for different purposes).  We do, however, make an effort to ensure that all data provenience information is clearly identified for each map we produce.

This wiki page compiles all data sources utilized by SRC. Any given map produced is likely to only use a sub-set of these data.

#### World Maps


[Natural Earth - world maps](http://www.naturalearthdata.com/features/) - World shapefile maps with national boundaries, first order admin (provinces, states, etc.), disputed areas, coastlines, populated areas and more at various scale levels.



We developed Natural Earth as a convenient resource for making custom maps. Unlike other map data intended for scientific analysis or military mapping, Natural Earth is designed to meet the needs of production cartographers using a variety of software applications. Maximum flexibility is a goal.


http://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-boundary-lines/

https://github.com/nvkelso/natural-earth-vector/blob/master/CHANGELOG



#### Political and Administrative Boundaries

[United Nations International and Administrative Boundaries Resources](http://www.ungiwg.org/content/united-nations-international-and-administrative-boundaries-resources)


[Global Administrative Areas](http://nwww.gadm.org/)

 GADM database of Global Administrative Areas

GADM is a spatial database of the location of the world's administrative areas (or adminstrative boundaries) for use in GIS and similar software. Administrative areas in this database are countries and lower level subdivisions such as provinces, departments, bibhag, bundeslander, daerah istimewa, fivondronana, krong, landsvæðun, opština, sous-préfectures, counties, and thana. GADM describes where these administrative areas are (the "spatial features"), and for each area it provides some attributes, such as the name and variant names.

The current version is 2.0 (January 2012)

Compared to Version 1, GADM Version 2 has, among other things, more detailed data for Belgium, Bosnia and Herzegovina, Croatia, Cuba, Dominican Republic, Luxembourg, Estonia, France, Hungary, Nepal, Turkey, Switzerland, Syria, Uzbekistan, and Venezuela. Sudan was split in two and a few Caribbean islands were split or rearranged. With only a few exceptions, the second level subdivision has now been mapped for all countries (see these maps by level of subdivision). The current version of GADM delimits 556,049 administrative areas (or 218,238 if you count only the lowest level for each country).
 
The data are available as shapefile, ESRI geodatabase, RData, and Google Earth kmz format. Shapefiles can be used for most mapping and "GIS" software. You can download a free program such as Q-GIS or DIVA-GIS. The RData files can be used in R with the 'sp' package loaded.

You can download the data by country or for the whole whole world.

Our goal is to map the administrative areas of all countries, at all levels. We use a high spatial resolution, and of a extensive set of attributes for each spatial feature. This is a never ending project, but we are happy to share what we have so far. Please contribute in whatever way you can by sending us a message to point out errors, or even better, to send an improved file for a country of your interest.


*[FAO: Global Administrative Unit Layers (GAUL)](http://www.fao.org/geonetwork/srv/en/metadata.show?id=12691)

 	

The Global Administrative Unit Layers (GAUL) is an initiative implemented by FAO within the Bill & Melinda Gates Foundation, Agricultural Market Information System (AMIS) and AfricaFertilizer.org projects.

The GAUL compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. The GAUL always maintains global layers with a unified coding system at country, first (e.g. departments) and second administrative levels (e.g. districts). Where data is available, it provides layers on a country by country basis down to third, fourth and lowers levels. The overall methodology consists in a) collecting the best available data from most reliable sources, b) establishing validation periods of the geographic features (when possible), c) adding selected data to the global layer based on the last country boundaries map provided by the UN Cartographic Unit (UNCS), d) generating codes using GAUL Coding System and e) distribute data to the users (see TechnicalaspectsGAUL2015.pdf).

Because GAUL works at global level, unsettled territories are reported. The approach of GAUL is to deal with these areas in such a way to preserve national integrity for all disputing countries (see TechnicalaspectsGAUL2015.pdf and G2015_DisputedAreas.dbf).

GAUL is released once a year and the target beneficiary of GAUL data is the UN community and other authorized international and national partners. Data might not be officially validated by authoritative national sources and cannot be distributed to the general public. A disclaimer should always accompany any use of GAUL data.

5 territories have been updated respect to the previous release. Moreover, the coastline of American countries or other special areas have been updated using Open Street Map (see ReleaseNoteGAUL2015.pdf).

GAUL keeps track of administrative units that has been changed, added or dismissed in the past for political causes. Changes implemented in different years are recorded in GAUL on different layers. For this reason the GAUL product is not a single layer but a group of layers, named "GAUL Set" (see ReleaseNoteGAUL2015.pdf). 


* [SALB](http://www.unsalb.org/) (ADM-2, formally approved by countries, high quality, but only for selected countries)


COUNTRY shapefile maps:

    [DIVA-GIS](http://www.diva-gis.org/Data) - Shapefile maps for all countries, including administrative boundaries, roads, railroads, altitude and land cover.

   - Country Data: http://www.diva-gis.org/gdata

    [United Nations - UN-SALB](http://www.unsalb.org/) (Second Administrative Level Boundaries) data set project. These maps are free but copyright rests with the UN. The maps are validated by the National Mapping Agencies (NMA) of each UN Member State. This website requires registration to download the maps.
    [World Bank](http://maps.worldbank.org/) - Country shapefiles can be downloaded through the World Bank's Mapping platform as follows: Click on 'explore countries' to select a country, click on 'download' in the top-right corner, and select 'Indicators (shapefile)'. This option is not available for all countries.
    [Map Library](http://www.maplibrary.org/) - Country shapefile maps for Africa in the public domain.
 [StatSilk](http://www.statsilk.com/maps/download-free-shapefile-maps#download-country-shapefile-maps) - Interactive country-level shapefile maps



---


www.naturalearthdata.com/downloads/110m-cultural-vectors/

Admin 0 – Countries
countries_thumb
There are 247 countries in the world. Greenland as separate from Denmark.

Download countries (184.14 KB) version 2.0.0
Download without boundary lakes (185.88 KB) version 2.0.0

About | Issues | Version History »
Admin 0 – Details
group_thumb
When countries aren’t good enough: there are 197 sovereign states in the world. Country subdivisions and the smallest map units.
Download sovereignty (182.44 KB) version 2.0.0
Download map units (185.84 KB) version 2.0.0
Download scale ranks (145.05 KB) version 2.0.0
Download tiny country points (15.37 KB) version 2.0.0

About | Issues | Version History »
Admin 0 – Boundary Lines
home_image_3
Country boundaries on land and offshore.

Download country boundaries (43.68 KB) version 2.0.0
Download Pacific grouping lines (17.59 KB) version 2.0.0

About | Issues | Version History »





Populated Places
pop_thumb
City and town points, from Tokyo to Cairo

Download populated places (80.05 KB) version 2.0.0
Download simple (less columns) (37.34 KB) version 2.0.0

About | Issues | Version History »


http://www.naturalearthdata.com/downloads/110m-physical-vectors/




Coastline
coast_thumb
Includes major islands.

Download coastline (82.3 KB) version 2.0.0

About | Issues | Version History »
Land
land_thumb
Land polygons including major islands.

Download land (67.05 KB) version 2.0.0

About | Issues | Version History »
Ocean
water_thumb
Ocean polygon split into contiguous pieces.

Download ocean (64.99 KB) version 2.0.0

About | Issues | Version History »
Rivers, Lake Centerlines
rivers_lake_centerlines_thumbSingle-line drainages including optional lake centerlines.

Download rivers and lake centerlines (24.69 KB) version 2.0.0

About | Issues | Version History »
Lakes + Reservoirs
lakes_thumb
Natural and artificial lakes.

Download lakes (14.19 KB) version 2.0.0

About | Issues | Version History »
Physical Labels
phys_labels_thumb2
Area and point labels of major physical features.

Download label areas (772.64 KB) version 2.0.0
Download label points (7.47 KB) version 2.0.0
Download elevation points (8.75 KB) version 2.0.0
Download marine areas (351.76 KB) version 2.0.0

About | Issues | Version History »
Glaciated Areas
glaciated_thumbIncludes glaciers and recently de-glaciated areas.

Download glaciated areas (18.2 KB) version 2.0.0

About | Issues | Version History »
Geographic Lines
geog_thumb




## Other references

[GGIM - United Nations Group of Experts on Geographical Names](http://unstats.un.org/unsd/geoinfo/UNGEGN/geonames.html)



    [StatSilk](http://www.statsilk.com/maps/download-free-shapefile-maps#download-country-shapefile-maps) - Interactive country-level shapefile maps

[Geocommons](http://www.geocommons.com/) - A huge database of user submitted maps. Search for any kind of map, then click on the "shapefile" button to the right of the map (if available) to download the shapefiles.

[Open Street Map](http://wiki.openstreetmap.org/wiki/Shapefiles) - A growing collection of shapefile map downloads by continent, region and country. These maps are community edited and are not always complete. Shapefiles by country are also available from VDS tech.

[US Census Bureau](http://www.census.gov/geo/maps-data/index.html)  - USA County and District Cartographic Boundary Files.




