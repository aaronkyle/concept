* [Georeferencing Satellite Imagery from Google Earth using QGIS](http://www.gistutor.com/quantum-gis/20-intermediate-quantum-gis-tutorials/60-georeferencing-satellite-imagery-from-google-earth-using-qgis.html)

### Obtaining the Google Earth Satellite Imagery

### Georeference imagery in QGIS 

### Tidying up: clipping the raster


* [How to draw a Circle with a set radius?](http://gis.stackexchange.com/questions/29509/how-to-draw-a-circle-with-a-set-radius)

> make a point in layer and then buffer it into a new layer. 
  - Drop a point (x,y), buffer the point 5km. // create the point in a Memory Layer, create the buffer into a shapefile saved in a temporary location, then copy and paste the polygon into the final layer.

----


With mmqgis plugin you can convert your geometry type to centroids :

Plugins > mmqgis > modify > convert geometry type

And then just create buffers on shapes (through Vector > Geoprocessing tools) and precise the desired radius.

* [http://gis.stackexchange.com/questions/49153/how-to-create-different-diameter-circles-round-points](http://gis.stackexchange.com/questions/49153/how-to-create-different-diameter-circles-round-points)

This can be easily achieved using Advanced - Size scale field (instead of calculating buffers which have to be recalculated every time a value changes).

The idea is to have a simple point symbol of size 1 map unit. (Map units are defined by the project CRS.) If you measure the diameter of the tree top in meters, you can simply use this diameter field as the size scale field.

Size scaling can only be applied to the symbol as a whole. If you want to visualize tree top and root protection area at once, you'll have to add the layer twice and change the size scale field to the other field.

---


You're probably fine in your methodology. I would advise you to create an attribute field containing the correct diameter (in m) for each of your tree points. Just create a new double field in the attribute table and insert the size ( like 1,5m or 0,9m ).

In the end you could use this field for styling (increase the size of your tree points proportional to the canopy diameter) or for creating a buffer around your tree point (QGis vector geometry tools -> Buffer -> select your attribute field as source. If this results in to small buffers, just make another attribute field and scale them up -> multiply with 10 ).

----


In GIS you can do something called buffering. Any vector feature can be buffered and in most cases the quality/resolution of the buffer can be controlled - in most cases this a parameter to control the number of segments. The approach I would take would be:

Create the point layer for your tree survey data
Add two fields to store the canopy and root protection distances
Capture the data
In QGIS create a buffer of all points using the value stored in the canopy field
Save the buffer objects out to a new layer called canopy
Repeat the process for the root protection
** You will need to store the radius value and not the diameter otherwise the buffers will be double the actual size

You will then end up with three layers. A point layer with locations of your trees, a polygon layer showing the canopies for each of your trees, and another polygon layer for the root protection areas. Now you will be able to visualise the three components on the map and also do further analysis. For example, calculate the amount of canopy overlap of different species of tree.

An important thing to remember will be to make sure you assign a unique ID to each tree so hat when you generate the buffers and store them to a separate layer you have a means for linking them again.


Creating additional shapefiles also has the advantage the graphical representation is retained should you want to export the shapefile to CAD (I do this practically 100% of the time). Since the tree measurements are used for the edification of engineers and the like, a CAD product is more valuable and easy to work with for them.

I would also discourage you from adding to the attribute table wherever possible. Depending on the size of your inventory, this can be very tedious and increases the likelihood of error. Instead, collect relevant data in the field, transcribe it to a digital format (if you're not collecting it digitally via PDA, tablet, GPS, etc.), and import it to QGIS as a .csv. Most of the other data can be added using the field calculator, including protection zone radii (which in Ontario are either based on the trunk diameter or dripline

----




* [Reading AfriPop data](http://geospaced.blogspot.com/search?updated-min=2011-01-01T00:00:00Z&updated-max=2012-01-01T00:00:00Z&max-results=8)
 - this appears to relate to the method Scott Cawrse described for calculating population from raster data.





### Raster Mosaicing and Clipping

Anotehr one of Ujaval Gandhi's wonderful tutorials: ["Raster Mosaicing and Clipping"](http://www.qgistutorials.com/en/docs/raster_mosaicing_and_clipping.htm)