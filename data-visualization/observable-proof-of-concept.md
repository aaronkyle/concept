
<p>Link to Observable notebook](http://beta.observablehq.com/@epichef/deterministic-sir-model<p>
<p>Demo API: https://api.observablehq.com/d/6aca016d75a62fa1.js?key=c8886772defb0340]</p>
---

c8886772defb0340



[Source](https://beta.observablehq.com/@fil/tissots-indicatrix)


https://visionscarto.net/observable-jekyll/

<div id="chart"></div>

<script>
  
  // NOTEBOOK CONFIGURATION
  import notebook from "https://api.observablehq.com/d/6aca016d75a62fa1.js?key=c8886772defb0340";

  // BOILERPLATE
  const target = document.querySelector("#chart");
  const renders = {
    "viewof p": "p",
    "display": "div.fullwidth",
  };
  
  
</script>

<style>
/* https://css-tricks.com/full-width-containers-limited-width-parents/ */
.fullwidth {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
#chart { min-height: 40vw }
</style>

<p id="chart-p"></p>
<div class="fullwidth">
  <div id="display"></div>
</div>
