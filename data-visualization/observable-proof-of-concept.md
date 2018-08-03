<!-- 
<p><a href="http://beta.observablehq.com/@epichef/deterministic-sir-model">Viewing cloned cells from this Observable notebook.<p>
<p>To get this working, I had to <a href="https://beta.observablehq.com/d/6aca016d75a62fa1">clone the original notebook</a> and grab <hfre="https://api.observablehq.com/d/6aca016d75a62fa1.js?key=c8886772defb0340">my own API</a> key: .</p>
<p>Demo API: https://api.observablehq.com/d/6aca016d75a62fa1.js?key=c8886772defb0340]</p>
-->

This example derives originally form <a href="https://beta.observablehq.com/@fil">@fil's</a> Jekyll port of <a href="https://beta.observablehq.com/@fil/tissots-indicatrix">tissots-indicatrix.</a>

<!-- JEKYLL-formatted post meta-data
layout: post
title:  Observable Proof-of-Concet
date:   2018-08-03 08:00:00 +0000
author: based on the work of Philippe Rivière, Jeremy Ashkenas, and Mike Bostock
categories: explore
-->

<div id="visual"></div>

<script type="module">

  // NOTEBOOK CONFIGURATION
  import notebook from "https://api.observablehq.com/d/6aca016d75a62fa1.js?key=c8886772defb0340";

  // BOILERPLATE
  const target = document.querySelector("#visual");
  const renders = {
    "viewof p": "p",
    "display": "div.fullwidth",
  };

  import {Inspector, Runtime} from "https://unpkg.com/@observablehq/notebook-runtime@1.2.0?module";
  for (let i in renders) {
    let s = renders[i], a = s.match(/^\w+/);
    if (a) {
      renders[i] = document.createElement(a[0]);
      target.appendChild(renders[i]);
      if (a = s.match(/\.(\w+)$/))
        renders[i].className = a[1]; 
    }
    else
      renders[i] = document.querySelector(renders[i]);
  }
  Runtime.load(notebook, (variable) => {
    if (renders[variable.name]) {
      return new Inspector(renders[variable.name]);
    } else {
      // return true; // uncomment to run hidden cells
    }
  });
</script>


<style>
/* https://css-tricks.com/full-width-containers-limited-width-parents/ */
.fullwidth {
  width: 60vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -10vw;
  margin-right: -10vw;
}
#visual { min-height: 40vw }
</style>

[Source](https://beta.observablehq.com/@fil/tissots-indicatrix)
