// URL: https://beta.observablehq.com/@aaronkyle/svg-faucet-with-d3-v4
// Title: Data-Driven SVG Faucet with D3 v4
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 31
// Runtime version: 1

const m0 = {
  id: "956a072ea024a03f@31",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Data-Driven SVG Faucet with D3 v4`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
This notebook ports to Observable [shimizu](https://bl.ocks.org/shimizu)’s [Block 062920b3d6cbabc66a6444a0ab19d571](http://bl.ocks.org/shimizu/062920b3d6cbabc66a6444a0ab19d571).
`
)})
    },
    {
      name: "body",
      inputs: ["html"],
      value: (function(html){return(
html`
<input id='rangeX' type='range' min='0', max='1.0' step='any' value="0.5" list="exlist"/>
<datalist id="exlist">
	<option value="1"></option>
	<option value="0.75"></option>
	<option value="0.5"></option>
	<option value="0.25"></option>
	<option value="0"></option>
</datalist>
<svg  viewBox="0 0 960 500">
<def>
	<g id="manIcon">
		<path d="M350.246,191.25v-66.938c0-5.259-4.303-9.562-9.562-9.562h-19.125c-5.26,0-13.865,0-19.125,0s-13.865,0-19.125,0H248.08
			c-8.683-14.535-22.548-25.599-39.101-30.562c4.389-2.448,7.392-7.086,7.392-12.47c0-7.918-6.426-14.344-14.344-14.344h-4.781
			V38.25h43.031c7.918,0,14.344-6.426,14.344-14.344s-6.426-14.344-14.344-14.344h-43.031c0-5.278-3.185-9.562-9.562-9.562
			s-9.562,4.284-9.562,9.562h-43.031c-7.918,0-14.344,6.426-14.344,14.344s6.426,14.344,14.344,14.344h43.031v19.125h-4.781
			c-7.918,0-14.344,6.426-14.344,14.344c0,5.872,3.538,10.901,8.587,13.12c-11.867,3.959-22.271,11.064-30.255,20.349H63.371V76.5
			c0-10.566-8.559-19.125-19.125-19.125S25.121,65.934,25.121,76.5v143.438c0,10.566,8.559,19.125,19.125,19.125
			s19.125-8.559,19.125-19.125v-38.25h65.264c11.475,21.783,34.31,36.653,60.645,36.653c33.488,0,61.315-24.031,67.301-55.778
			h26.728c5.26,0,9.562,4.303,9.562,9.562v19.125c-5.26,0-9.562,4.303-9.562,9.562v19.125c0,5.26,4.303,9.562,9.562,9.562h57.375
			c5.26,0,9.562-4.303,9.562-9.562v-19.125C359.808,195.553,355.505,191.25,350.246,191.25z"/>
		<path d="M279.722,344.881c0,22.118,17.93,40.048,40.048,40.048s40.038-17.93,40.038-40.048s-40.048-79.55-40.048-79.55
			S279.722,322.763,279.722,344.881z"/>
	</g>
</def>
<mask id="mask" maskUnits="userSpaceOnUse" x="0" y="0" width="960" height="500">
	<use   xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#manIcon" x="260" y="0" fill="white" transform="translate(-25,-0) scale(1,1)"/>
</mask>
<rect  mask="url(#mask)" x="0" y="0" width="960" height="500" fill="gray" />
<rect id="bar" mask="url(#mask)" x="0" y="250" width="960" height="250" fill="blue" />
</svg>
`
)})
    },
    {
      inputs: ["d3"],
      value: (function(d3)
{
var rangeX = document.querySelector('#rangeX');	
var h = 500;

rangeX['oninput' in rangeX ? 'oninput' : 'onchange'] = slide;

function slide(){
	var barH = h * rangeX.value;
	var bar = d3.select("#bar");
	bar.transition()
		.attr("y", h - barH)
		.attr("height", barH)
	
}
}
)
    },
    {
      name: "css",
      inputs: ["html"],
      value: (function(html){return(
html`
<style>
html, body{
	width:100%;
	height:100%;
}
svg {
	width: 960px;
	height:500px;
}

#rangeX {
	position: absolute;
	top: 25px;
	left: 25px;
	width: 200px;
}

</style>
`
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require('d3@4')
)})
    }
  ]
};

const notebook = {
  id: "956a072ea024a03f@31",
  modules: [m0]
};

export default notebook;
