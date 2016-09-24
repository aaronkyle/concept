**ACKNOWLEDGEMENT.**  Most of the content of this page derives from the official [QGIS 1.8 Documentation](http://docs.qgis.org/1.8/en/docs/index.html)&mdash;specifically from the a'[Print Composer](http://docs.qgis.org/1.8/en/docs/user_manual/print_composer/print_composer.html)'. QGIS 1.8 content is licensed under [Creative Commons Attribution-ShareAlike 3.0 licence (CC BY-SA)](http://creativecommons.org/licenses/by-sa/3.0/). CCCS adapted the content to suit our purposes. Please see the <a href="#references">full list of references at the end of this article.</a>  We are not affiliated with QGIS, nor with any of the sites linked herein.

---

## QGIS Templates

[A lot goes into printing a map](QGIS-print-composer-printing.md). This page addresses ways to save time during map creation through the use of templates.


### Print Composer Template

The [print composer](http://docs.qgis.org/1.8/en/docs/user_manual/print_composer/print_composer.html) provides growing layout and printing capabilities [Table 1]. It allows you to add elements such as the QGIS map canvas, legend, scalebar, images, basic shapes, arrows and text labels. You can size, group, align and position each element and adjust the properties to create your layout.

Opening the print composer provides you with a blank canvas to which you can add the current QGIS map canvas, legend, scalebar, images, basic shapes, arrows and text.

[Note: QGIS is now able to show labels from the new labeling plugin also in the map composer, but it is not yet scaled correctly. So it might be necessary to switch back to the standard labeling in some cases.]

All Print Composer tools are available in menus and as icons in a toolbar. The toolbar can be switched off and on using the right mouse button holding the mouse over the toolbar.

<div>
<table border="1" class="docutils" id="table-composer-1">
<span id="index-3"></span><colgroup>
<col width="19%" />
<col width="29%" />
<col width="21%" />
<col width="31%" />
</colgroup>
<thead valign="bottom">
<tr class="row-odd"><th class="head">Icon</th>
<th class="head">Purpose</th>
<th class="head">Icon</th>
<th class="head">Purpose</th>
</tr>
</thead>
<tbody valign="top">
<tr class="row-even"><td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionFolder.png"><img alt="mActionFolder" src="http://docs.qgis.org/1.8/en/_images/mActionFolder.png" style="width: 1.5em;" /></a></td>
<td>Load from template</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionFileSaveAs.png"><img alt="mActionFileSaveAs" src="http://docs.qgis.org/1.8/en/_images/mActionFileSaveAs.png" style="width: 1.5em;" /></a></td>
<td>Save as template</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionSaveMapAsImage.png"><img alt="mActionSaveMapAsImage" src="http://docs.qgis.org/1.8/en/_images/mActionSaveMapAsImage.png" style="width: 1.5em;" /></a></td>
<td>Export to an image format</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionSaveAsPDF.png"><img alt="mActionSaveAsPDF" src="http://docs.qgis.org/1.8/en/_images/mActionSaveAsPDF.png" style="width: 1.5em;" /></a></td>
<td>Export as PDF</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionSaveAsSVG.png"><img alt="mActionSaveAsSVG" src="http://docs.qgis.org/1.8/en/_images/mActionSaveAsSVG.png" style="width: 1.5em;" /></a></td>
<td>Export print composition to SVG</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionFilePrint.png"><img alt="mActionFilePrint" src="http://docs.qgis.org/1.8/en/_images/mActionFilePrint.png" style="width: 1.5em;" /></a></td>
<td>Print or export as Postscript</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionZoomFullExtent.png"><img alt="mActionZoomFullExtent" src="http://docs.qgis.org/1.8/en/_images/mActionZoomFullExtent.png" style="width: 1.5em;" /></a></td>
<td>Zoom to full extent</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionZoomIn.png"><img alt="mActionZoomIn" src="http://docs.qgis.org/1.8/en/_images/mActionZoomIn.png" style="width: 1.5em;" /></a></td>
<td>Zoom in</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionZoomOut.png"><img alt="mActionZoomOut" src="http://docs.qgis.org/1.8/en/_images/mActionZoomOut.png" style="width: 1.5em;" /></a></td>
<td>Zoom out</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionDraw.png"><img alt="mActionDraw" src="http://docs.qgis.org/1.8/en/_images/mActionDraw.png" style="width: 1.5em;" /></a></td>
<td>Refresh view</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionUndo.png"><img alt="mActionUndo" src="http://docs.qgis.org/1.8/en/_images/mActionUndo.png" style="width: 1.5em;" /></a></td>
<td>Revert last change</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionRedo.png"><img alt="mActionRedo" src="http://docs.qgis.org/1.8/en/_images/mActionRedo.png" style="width: 1.5em;" /></a></td>
<td>Restore last change</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAddMap.png"><img alt="mActionAddMap" src="http://docs.qgis.org/1.8/en/_images/mActionAddMap.png" style="width: 1.5em;" /></a></td>
<td>Add new map from QGIS map canvas</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAddImage.png"><img alt="mActionAddImage" src="http://docs.qgis.org/1.8/en/_images/mActionAddImage.png" style="width: 1.5em;" /></a></td>
<td>Add image to print composition</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionLabel.png"><img alt="mActionLabel" src="http://docs.qgis.org/1.8/en/_images/mActionLabel.png" style="width: 1.5em;" /></a></td>
<td>Add label to print composition</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAddLegend.png"><img alt="mActionAddLegend" src="http://docs.qgis.org/1.8/en/_images/mActionAddLegend.png" style="width: 1.5em;" /></a></td>
<td>Add new legend to print composition</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionScaleBar.png"><img alt="mActionScaleBar" src="http://docs.qgis.org/1.8/en/_images/mActionScaleBar.png" style="width: 1.5em;" /></a></td>
<td>Add new scalebar to print composition</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAddBasicShape.png"><img alt="mActionAddBasicShape" src="http://docs.qgis.org/1.8/en/_images/mActionAddBasicShape.png" style="width: 1.5em;" /></a></td>
<td>Add basic shape to print composition</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAddArrow.png"><img alt="mActionAddArrow" src="http://docs.qgis.org/1.8/en/_images/mActionAddArrow.png" style="width: 1.5em;" /></a></td>
<td>Add arrow to print composition</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionOpenTable.png"><img alt="mActionOpenTable" src="http://docs.qgis.org/1.8/en/_images/mActionOpenTable.png" style="width: 1.5em;" /></a></td>
<td>Add attribute table to print composition</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionSelectPan.png"><img alt="mActionSelectPan" src="http://docs.qgis.org/1.8/en/_images/mActionSelectPan.png" style="width: 1.5em;" /></a></td>
<td>Select/Move item in print composition</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionMoveItemContent.png"><img alt="mActionMoveItemContent" src="http://docs.qgis.org/1.8/en/_images/mActionMoveItemContent.png" style="width: 1.5em;" /></a></td>
<td>Move content within an item</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionGroupItems.png"><img alt="mActionGroupItems" src="http://docs.qgis.org/1.8/en/_images/mActionGroupItems.png" style="width: 1.5em;" /></a></td>
<td>Group items of print composition</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionUngroupItems.png"><img alt="mActionUnGroupItems" src="http://docs.qgis.org/1.8/en/_images/mActionUngroupItems.png" style="width: 1.5em;" /></a></td>
<td>Ungroup items of print composition</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionRaiseItems.png"><img alt="mActionRaiseItems" src="http://docs.qgis.org/1.8/en/_images/mActionRaiseItems.png" style="width: 1.5em;" /></a></td>
<td>Raise selected items</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionLowerItems.png"><img alt="mActionLowerItems" src="http://docs.qgis.org/1.8/en/_images/mActionLowerItems.png" style="width: 1.5em;" /></a></td>
<td>Lower selected items</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionMoveItemsToTop.png"><img alt="mActionMoveItemsToTop" src="http://docs.qgis.org/1.8/en/_images/mActionMoveItemsToTop.png" style="width: 1.5em;" /></a></td>
<td>Move selected items to top</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionMoveItemsToBottom.png"><img alt="mActionMoveItemsToBottom" src="http://docs.qgis.org/1.8/en/_images/mActionMoveItemsToBottom.png" style="width: 1.5em;" /></a></td>
<td>Move selected items to bottom</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAlignLeft.png"><img alt="mActionAlignLeft" src="http://docs.qgis.org/1.8/en/_images/mActionAlignLeft.png" style="width: 1.5em;" /></a></td>
<td>Align selected items left</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAlignRight.png"><img alt="mActionAlignRight" src="http://docs.qgis.org/1.8/en/_images/mActionAlignRight.png" style="width: 1.5em;" /></a></td>
<td>Align selected items right</td>
</tr>
<tr class="row-even"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAlignHCenter.png"><img alt="mActionAlignHCenter" src="http://docs.qgis.org/1.8/en/_images/mActionAlignHCenter.png" style="width: 1.5em;" /></a></td>
<td>Align selected items center</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAlignVCenter.png"><img alt="mActionAlignVCenter" src="http://docs.qgis.org/1.8/en/_images/mActionAlignVCenter.png" style="width: 1.5em;" /></a></td>
<td>Align selected items center vertical</td>
</tr>
<tr class="row-odd"><td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAlignTop.png"><img alt="mActionAlignTop" src="http://docs.qgis.org/1.8/en/_images/mActionAlignTop.png" style="width: 1.5em;" /></a></td>
<td>Align selected items top</td>
<td><a class="reference internal" href="http://docs.qgis.org/1.8/en/_images/mActionAlignBottom.png"><img alt="mActionAlignBottom" src="http://docs.qgis.org/1.8/en/_images/mActionAlignBottom.png" style="width: 1.5em;" /></a></td>
<td>Align selected items bottom</td>
</tr>
</tbody>
</table>
</div>

The layout can be printed or exported to image formats, Postscript, PDF or to SVG (export to SVG is not working properly with some recent Qt4 versions. You should try and check individual on your system).

You can save the layout as template and load it again in another session.

QGIS includes an option to save a Print Composer layout as a template that can be opened by any QGIS project.

e.g.

** QGIS_MapComposer_Template_simple.qpt



** basic-template_A3-landscape-1200-col1.qpt



Before you start to work with the print composer,
[UNLESS YOU ARE WORKING ON TEMPLATE FORMATTING AND DON'T NEED TO SEE ANYTHING]

you need to load some raster and vector layers in the QGIS map canvas and to adapt their properties / symbolized to suite your needes.


In the printcomposer you can save a template.
File>Save as template.
And to use the template
File>Load template.


After everything is rendered to your liking you click 


File ‣
Action
New Composer
New Print Composer

choose

New Print Composer.

Open a new Print Composer Template



### Project Templates


Thanks to Etienne Tourigny QGIS can load projects as a template.

This one could be quite handy for people that make a lot of maps with the same base data. 

This means you can create a project with all your base layers, styles, labels, etc, configured and then load it by default, or from the file menu, and you will have everything setup.



All you have to do is save the a normal .qgs project file in

~/.qgis/project_templates folder and the project will be shown in the file menu.


Existing .qgs templates through the Project -> New from Template menu entry.


To save a project as a template:

The default folder is inside your profile folder (.qgis2).

To use existing qgis project files as templates (extension .qgs) just copy them inside the specified project templates folder.  Then restart QGIS. 


To open a project template:

 - menu > "New from Template" 


 - QGIS 2.0 there is a category in the General tab where you can specify your template folder on your hardrive

![](http://i.stack.imgur.com/Pgshk.png)



Alt Text

You can also set the current project as the default template:

Handy!


<a id="references"></a>
## References

* http://docs.qgis.org/1.8/en/docs/user_manual/print_composer/print_composer.html
* http://qgis.spatialthoughts.com/2012/06/making-maps-for-print-using-qgis.html
* http://www.qgistutorials.com/en/docs/making_a_map.html
* http://osgeo-org.1560.x6.nabble.com/default-print-template-td4980191.html
* http://gis.stackexchange.com/questions/73588/how-to-save-a-qgis-2-0-project-template


