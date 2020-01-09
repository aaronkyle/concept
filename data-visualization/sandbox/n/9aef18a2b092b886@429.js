// https://observablehq.com/d/9aef18a2b092b886@429
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Nepal Layers`
)});
  main.variable(observer("map")).define("map", ["DOM","width","L","$"], function*(DOM,width,L,$)
{
  let container = DOM.element('div', { style: `width:${width}px;height:${width/1.6}px` });
  yield container;
  
  let map = L.map(container).setView([28.1819246,84.388633], 7.25);
  
  let osmLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}@2x.png', {
      attribution: 'Wikimedia maps beta | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  /// Additional Base Layers
      
    let world_imagry = L.tiledMapLayer({
      url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
      maxZoom: 17
  });
    
    let world_topo = L.tiledMapLayer({
      url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer',
      maxZoom: 17
  });
  
  let baseLayers = {
       "Open Street Maps":osmLayer,
       "World Imagery":world_imagry,
       "World Topo Map":world_topo, 
  };
  
  
  let overlayLayers = {
  };
  
  let c_layers = new L.control.layers(baseLayers, overlayLayers,{position:'topright',collapsed:false})
  
 
  map.addLayer(osmLayer);
  map.addControl(c_layers);
  
  
  // Additional Layers

var barhabise_access_road_line = $.getJSON("https://geospatial-analysis.s3.amazonaws.com/NEP/50059-002/barhabise-access-road_line.geojson",function(data){
    L.geoJson(data).addTo(map);
  });

var barhabise_substation = $.getJSON("https://geospatial-analysis.s3.amazonaws.com/NEP/50059-002/barhabise-substation.geojson",function(data){
    L.geoJson(data).addTo(map);
  });
  
var barhabise_substation_polygon = $.getJSON("https://geospatial-analysis.s3.amazonaws.com/NEP/50059-002/barhabise-substation_polygon.geojson",function(data){
    L.geoJson(data).addTo(map);
  });
  
var bhaktapur_datatre_square_heritage_site = $.getJSON("https://geospatial-analysis.s3.amazonaws.com/NEP/50059-002/bhaktapur-datatre-square-heritage-site.geojson",function(data){
    L.geoJson(data).addTo(map);
  });
  
var bhaktapur_durbar_square_heritage_site = $.getJSON("https://geospatial-analysis.s3.amazonaws.com/NEP/50059-002/bhaktapur-durbar-square-heritage-site.geojson",function(data){
    L.geoJson(data).addTo(map);
  });
  
}
);
  main.variable(observer("L")).define("L", ["require"], function(require){return(
require('leaflet@1.3.0','https://unpkg.com/esri-leaflet@2.0.6')
)});
  main.variable(observer()).define(["html","resolve"], function(html,resolve){return(
html`<link href='${resolve('leaflet@1.2.0/dist/leaflet.css')}' rel='stylesheet' />`
)});
  main.variable(observer("$")).define("$", ["require"], function(require){return(
require("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js")
)});
  return main;
}
