# historical demonstration

`20180618_mercator/` is retained as a historical browser-map experiment. It converts a small set of shapefiles into GeoJSON and uses D3 3, an older projection plugin, and locally styled SVG paths to display the result.

The demonstration is not a current implementation example. It loads several scripts over unencrypted `http` URLs, depends on obsolete library versions, has no documented source or license for the underlying features, and does not meet the current accessibility, provenance, or build practices described in the [web GIS discussion](../README.md). Do not publish or extend it without resolving those issues.

It remains useful as evidence of several durable goals:

- convert desktop spatial data into browser-readable files;
- fit a projection to the data extent;
- connect geometry with attributes and styles; and
- publish a map without a continuously running GIS server.

A current reconstruction would preserve and document its source, transform it with a reproducible loader, minimize the published attributes, use a maintained renderer such as Observable Plot, Leaflet, or MapLibre, and produce an accessible table and source note alongside the map.
