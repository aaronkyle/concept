# spatial data sources and governance

Finding a downloadable layer is not the same as finding data that can responsibly support a map. Spatial sources differ in authority, scale, update cycle, geometry, definitions, licensing, and political assumptions. A source inventory should preserve those differences rather than flatten them into a list of links.

## evaluate before adopting

For each source, record:

- publisher and the organization’s relationship to the subject;
- dataset title, edition, release date, and retrieval date;
- persistent landing page or catalog record, not only a temporary download URL;
- geographic and temporal coverage;
- scale, resolution, accuracy, completeness, and known limitations;
- feature definitions, schema, identifiers, and coordinate reference system;
- collection and processing methods;
- update and retirement policy;
- license, attribution, redistribution, and derivative-work conditions;
- access restrictions and personal, ecological, cultural, or security sensitivity; and
- checksum and the exact files acquired.

Prefer an authoritative source for a claim when one exists, but authority does not guarantee fitness. A cadastral boundary may be suitable for assessment administration and explicitly unsuitable for a legal survey. A global boundary product may optimize consistency while obscuring local disputes.

## useful starting points

The following are examples of maintained source organizations, not a universal catalog:

- [OpenStreetMap](https://www.openstreetmap.org/) provides collaboratively maintained global features under the [Open Data Commons Open Database License](https://www.openstreetmap.org/copyright/en). Evaluate completeness and tags for the particular place and retain required attribution.
- [Natural Earth](https://www.naturalearthdata.com/) provides public-domain, generalized cultural and physical layers for small-scale cartography. It is a basemap resource, not authoritative high-resolution boundaries.
- The [United States Census Bureau geography program](https://www.census.gov/programs-surveys/geography.html) publishes TIGER/Line and statistical geography for United States work. Match boundaries to the relevant survey vintage.
- [NASA Earthdata](https://www.earthdata.nasa.gov/) and the [USGS](https://www.usgs.gov/products/data) provide earth-observation and scientific spatial data with product-specific methods and use conditions.
- The [Humanitarian Data Exchange](https://data.humdata.org/) catalogs humanitarian datasets from many organizations. Evaluate the original contributor and dataset-level license rather than treating the catalog as a single authority.
- The [UN M49 methodology](https://unstats.un.org/unsd/methodology/m49/overview/) provides current country or area and regional codes for statistical use. Keep source codes and release context rather than copying a permanent local country table.

For large earth-observation collections, [STAC](https://www.ogc.org/standards/stac/) catalogs can make items and their assets discoverable in a common structure. OGC APIs can expose features, maps, tiles, and other resources through modern web interfaces. A standard interface improves interoperability, but the source still needs evaluation.

## licenses, attribution, and services

Record the license with the acquired version and determine whether it permits redistribution, modification, combination, and the intended audience. “Free to view” is not the same as open data. A public API may limit caching or bulk download, and a dataset may require attribution in a map, documentation, and downloadable derivative.

Distinguish data terms from service terms. OpenStreetMap data is open under ODbL, while a particular tile provider has its own capacity and usage policy. The same distinction applies to geocoders, imagery, fonts, and commercial basemaps.

Put attribution close to the map and carry it into print and exported images. Preserve fuller source and license notes in the dataset record. If two licenses cannot be reconciled for a combined release, do not assume technical compatibility implies legal compatibility.

## changing and contested geography

Administrative units, names, coastlines, roads, and land use change. Store source version and validity dates, and avoid overwriting a historical boundary needed to interpret an older statistic. Join observations to a geography of the appropriate vintage.

Boundaries may also be disputed. A familiar default basemap encodes a position even when the interface never discusses it. Choose representations appropriate to the audience and purpose, cite the source, and state important disputes or omissions. Stable internal identifiers and explicit crosswalks are safer than names alone.

## sensitive locations and people

Coordinates can reveal homes, movements, health events, cultural sites, endangered species, critical infrastructure, and the location of people at risk. Removing names does not necessarily anonymize precise locations. Before publication consider aggregation, displacement, coarser coordinates, temporal delay, attribute suppression, access control, or withholding the layer.

Apply these protections before creating public GeoJSON, tiles, screenshots, logs, or analytics events. Hiding a field in a popup does not remove it from the downloaded file. The [data privacy](../data-privacy/README.md) and [data security](../data-security/README.md) sections provide the broader model.

## provenance and reproducibility

A derived spatial dataset should identify every input, the feature-selection rules, joins, transformations, geometry repair, reprojection, generalization, and manual changes. When an upstream service is volatile, preserve an allowed snapshot or enough identifying information to explain the result.

At [archive.categori.se](https://archive.categori.se/) we are developing the source-file and metadata inventory needed for this work; [docs-repo.categori.se](https://docs-repo.categori.se/) can connect a dataset release to definitions, caveats, and decisions. The public map should link back to that evidence rather than present itself as the primary source.
