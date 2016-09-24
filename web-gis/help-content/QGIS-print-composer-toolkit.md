**ACKNOWLEDGEMENT.**  This page is adapted from [QGIS 1.8 Documentation](http://docs.qgis.org/1.8/en/docs/index.html) article entitled. '[Print Composer](http://docs.qgis.org/1.8/en/docs/user_manual/print_composer/print_composer.html)'. Content is licensed under [Creative Commons Attribution-ShareAlike 3.0 licence (CC BY-SA)](http://creativecommons.org/licenses/by-sa/3.0/).

---

## Using QGIS Print Composer

Figure_composer_1 shows the initial view of the print composer with an activated checkbox Snap to grid mode but before any elements are added.

Figure Composer 1:

../../../_images/print_composer_blank.png


The print composer provides three tabs:

1. The Composition tab allows you to set paper size, orientation, the print quality for the output file in dpi and to activate snapping to a grid of a defined resolution. Please note, the checkbox Snap to grid feature only works, if you define a grid resolution > 0. Furthermore you can also activate the checkbox Print as raster checkbox. This means all elements will be rastered before printing or saving as Postscript of PDF.

2. The Item Properties tab displays the properties for the selected map element. Click the mActionSelectPan Select/Move item icon to select an element (e.g. legend, scalebar or label) on the canvas. Then click the Item Properties tab and customize the settings for the selected element.


3. The Command history tab displays a history of all changes applied to the print composer layout. With a mouse click it is possible to undo and redo layout steps back and forth to a certain status.


You can add multiple elements to the composer. It is also possible to have more than one map view or legend or scalebar in the print composer canvas. Each element has its own properties and in the case of the map, its own extent. If you want to remove any elements from the composer canvas you can do that with the Delete or the Backspace key.

Adding a current QGIS map canvas to the Print Composer

Click on the mActionAddMap Add new map toolbar button in the print composer toolbar, to add the QGIS map canvas. Now drag a rectangle on the composer canvas with the left mouse button to add the map. To display the current map, you can choose between three different modes in the map Item Properties tab:

Rectangle is the default setting. It only displays an empty box with a message ‘Map will be printed here’.

Cache renders the map in the current screen resolution. If case you zoom in or out the composer window, the map is not rendered again but the image will be scaled.

Render means, that if you zoom in or out the composer window, the map will be rendered again, but for space reasons, only up to a maximum resolution.

Cache is default preview mode for newly added print composer maps.

You can resize the map element by clicking on the mActionSelectPan Select/Move item button, selecting the element, and dragging one of the blue handles in the corner of the map. With the map selected, you can now adapt more properties in the map Item Properties tab.

To move layers within the map element select the map element, click the mActionMoveItemContent Move item content icon and move the layers within the map element frame with the left mouse button. After you found the right place for an element, you can lock the element position within the print composer canvas. Select the map element and click on the right mouse button to mIconLock Lock the element position and again to unlock the element. You can lock the map element also activating the checkbox Lock layers for map item checkbox in the Map dialog of the Item Properties tab.

