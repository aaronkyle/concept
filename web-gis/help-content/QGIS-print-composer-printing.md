**ACKNOWLEDGEMENT**

Tutorial Adapted from Ujaval Gandhi's *[QGIS Tutorials and Tips](http://www.qgistutorials.com/en/docs/making_a_map.html)*  Orignally published at [Quantum GIS (QGIS) Tutorials](http://qgis.spatialthoughts.com/2012/06/making-maps-for-print-using-qgis.html).

Download this tutorial from it's original source as a PDF in either [A4 format](http://www.qgistutorials.com/en/pdf/making_a_map_a4.pdf) of ['letter' format](http://www.qgistutorials.com/en/pdf/making_a_map_letter.pdf).

----

**Here's another great resource!**  Check out Tim Sutton's *[The Free Quantum GIS Training Manual]()* :["1. Lesson: Using Map Composer"](http://manual.linfiniti.com/en/map_composer/map_composer.html)


---

## Printing a Map 

QGIS Print Composer allows you to take your GIS layers and package them to create maps. The tutorial shows how to create a map of Japan with standard map elements like north arrow, scale bar, legend and label.

### Data

Data used in this tutorial comes from the Natural Earth dataset - specifically the Natural Earth Quick Start Kit, which provides styled global layers.  During the tutorial, we will load these layers directly into QGIS.

[Download the Natural Earth Quickstart Kit.]

### Procedure

Download and extract the Natural Earth Quick Start Kit data. Open QGIS. Click on File ‣ Open Project.

![](http://www.qgistutorials.com/en/_images/190.png)

Browse to the directory when you had extracted the natural earth data. You should see a file named Natural_Earth_quick_start_for_QGIS.qgs. This is the project file that contains styled layers in QGIS Document format. Click Open.

![](http://www.qgistutorials.com/en/_images/234.png)

You would see a lot of layers in the table of content and a styled world map in the QGIS canvas. If you see errors displayed at the top of the canvas, click on the cross to close it.

![](http://www.qgistutorials.com/en/_images/323.png)

In this tutorial, we will make a map of Japan. Click the Zoom In button and draw a rectangle around Japan to zoom to the area.

![](http://www.qgistutorials.com/en/_images/417.png)

Before we make a map suitable for printing, we need to choose an appropriate projection. This dataset comes in Geographic Coordinate System (GCS) where the units are degrees. This is not appropriate for a map where you want the distances to be in kilometers or miles. We need to use a Projected Coordinate System that minimizes distortions for our region of interest and has units in meters. Universal Transverse Mercator (UTM) is a decent choice for a projected coordinate system. It is also global, so it’s a good default that you can rely on and choose a UTM zone that contains your area of interest to minimize distortions for your region. In our case, we will use UTM Zone 54N. Click the CRS Status button at the bottom-right of the QGIS window.

**Note**: For Japan, Japan Plane Rectangular CS is a projected coordinate reference system (CRS) that is designed for minimum distortions. It is divided in 18 zones and if you are working for a smaller region in Japan, using this CRS will be better.

![](http://www.qgistutorials.com/en/_images/517.png)

Check the Enable on-the-fly CRS Transformation box. Type Tokyo utm zone54n in the Filter search box. Once you see the results, select Tokyo / UTM Zone 54N - EPSG:3095. Click Apply.

![](http://www.qgistutorials.com/en/_images/616.png)

Zoom and Pan to keep Japan at the center of your map canvas. At this point, you can check the box next to 10m_admin_0_map_units layer to turn off the labels from that layer.

![](http://www.qgistutorials.com/en/_images/715.png)

Once you are centered around the area of interest, click on the New Print Composer button. It is also accessible by Project ‣ New Print Composer.

![](http://www.qgistutorials.com/en/_images/815.png)

You will be prompted to enter a title for the composer. Enter ‘Japan map’ and click Ok.

![](http://www.qgistutorials.com/en/_images/1014.png)

In the Print Composer window, click on Zoom full to display the full extent of the Layout.

![](http://www.qgistutorials.com/en/_images/1118.png)

Now we would have to bring the map view that we see in the QGIS Canvas to this layer. Click on the Add Map button. This tool can also be access from Layout ‣ Add Map.

![](http://www.qgistutorials.com/en/_images/1216.png)

Once the Add Map button is active, hold the left mouse button and drag a rectangle where you want to insert the map.

![](http://www.qgistutorials.com/en/_images/1315.png)

You will see that the rectangle window will be rendered with the map from the main QGIS canvas. Since we want our map to be covering the full extent of the layout, drag the corners of the rectangle to the edges.

![](http://www.qgistutorials.com/en/_images/1413.png)

The rendered map may not be covering the full extent of our interest area. Click the Move item content button to pan the map in the window and center it in the composer.
![](
http://www.qgistutorials.com/en/_images/1513.png)

Let us adjust the zoom level for the given map. Click on the Item Properties tab and enter 5000000 for Scale value.

![](http://www.qgistutorials.com/en/_images/1315.png)

Now we will add a North Arrow to the map. Print Composer comes with a nice collection of map-related images - including many types of North Arrows. Click Layout ‣ Add Image.

![](http://www.qgistutorials.com/en/_images/1711.png)

Holding your left mouse button, draw a rectangle on the top-right corner of the map canvas. On the right-hand panel, click on the Item Properties tab and expand the Search directories section and select the North Arrow image of your liking.

![](http://www.qgistutorials.com/en/_images/1811.png)

Next, scroll down below and un-check the Background option. This will make the image transparent.

![](http://www.qgistutorials.com/en/_images/199.png)

You can drag the North Arrow and move it around in the composer window to a suitable position.

![](http://www.qgistutorials.com/en/_images/206.png)

Now we will add a scale bar. Click on Layout ‣ Add Scalebar.

![](http://www.qgistutorials.com/en/_images/293.png)

Click on the layout where you want the scalebar to appear. From the Item Properties tab, choose the Style that fit your requirement. You should also set the transparency by un-cecking the Background option.

![](http://www.qgistutorials.com/en/_images/303.png)

Now we will add a legend to the map. Click on Layout ‣ Add Legend.

![](https://lh6.googleusercontent.com/io95g7CWkai_znLf3hCIP2GLcWr2s4imXovcbTV5UXcMqGciwK2pzcvz5JaOKdGDfNnMGVqFcAn4P3RQdLd3Nk2qKvzkrox1ZB-ro0W4yfhaHESX2QM)

Click on the layout where you want the legend to appear. Since our layer list is huge, you will see a big box with all the layers appear. Click on the Item Properties tab and select the layers which we do not want in the legend. Click the - button to remove it from the legend.

![](https://lh3.googleusercontent.com/lC5LwmjSSOiPJWifcMI32wCCqaEbDgFnR-EwsBz7ZX5buRIOoMChkswPUBYGKiW1TwcJxEgafFr1niuPio_SvVe3_8rI5mFkE7ifEG65X9jo4Jgv258)

For the purpose of this map, we will keep legend information only for the five layers as seen below.

![](https://lh5.googleusercontent.com/C2EcqnegmzR_uLJFHiH7GuIWRrxRFTia0xPUyYPZhxYwSYgPF3Pme2XLrRkhMQeZ7tJOw8VwvOiCkJJ7VR3jcKXw5fUigbxnXGLIudRk9_CPR1t5iug)

Now time to label our map. Click on Layout ‣ Add Label.

![](http://www.qgistutorials.com/en/_images/3111.png)

Click on the map and draw a box where the label should be. In the Item Properties tab, expand the Label section and enter the text as shown below. We can enter the text as HTML as well. Check the box Render as Html so the composer will interpret the HTML tags.

![](http://www.qgistutorials.com/en/_images/324.png)

Once you are satisfied with the map, you can export it as Image, PDF or SVG. For this tutorial, let’s export it as an image. Click Composer ‣ Export as Image.

![](http://www.qgistutorials.com/en/_images/342.png)

Save the image in the format of your liking. Below is the exported PNG image.

<div align=center>
<h1>Map of Japan</h1>
<p>Created using Natural Earth data in QGIS</p>
</div>

![](https://lh3.googleusercontent.com/xFd0XjaSRDwJ09s91c0wkwZ9o4XBW5JKmcK_QgxEmTiOKCdWnanr9BGtjGAQFCTsfrDUODAdPk7dQ548On256dhSr16iWc9llWkf_HHk8WrxmUOfC-Q)

## Licensing

This tutorials is copyright 2013, © [Ujaval Gandhi](https://plus.google.com/+UjavalGandhi). Mr. Gandhi's [website](http://www.qgistutorials.com/)[s](http://qgis.spatialthoughts.com/2012/06/making-maps-for-print-using-qgis.html) reserve no rights for the use and re-use of his tutorial. CCCS assumes his materials follow the same licensing as QGIS, namely [Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA)](http://creativecommons.org/licenses/by-sa/3.0/). 