Ahh, JavaScript!  Language of the web!  Before I got to know you, my life was more difficult.  I had heard about you.  Seen you around a lot.  You were elusive. I was frightened.

Then came [Obeservable](https://beta.observablehq.com/), hosting the world's best JavaScipt notebook website.  Thank you, Mike, Tom, and Jeremy!  I owe you so much.

---

Let's recall that nearly all forms of digital publishing require interactions with JavaScript.   We can learn and use other development languages that interact with JS libraries, but we can also just build using JS and try to limit applications to what can be run in a viewer's browser.

---

We build JS applications either purely on JS, or using helpers.  JQuery is one of the most prominant helper.  I'll try to avoid it (but I can't, really), and will also focus on working w/ D3.js.   This is because D3 does so much....


---

As for digital publishing, let's get a few things straight:

Carousels:

 * Not particularly native (yet?) in Bootstrap 4.  Carousels do best with a combination of JS and CSS. Ken Wheeler offers us [Slick](http://kenwheeler.github.io/slick/), billed as "the last carousel you'll ever need".  Thanks for being awesome, Ken.
 
 

---

Some distracting notes to move to another area of this site:


[For Loop](https://stackoverflow.com/questions/44979419/print-values-of-all-items-in-array-javascript-d3)

```
for (i = 0; i < data.length; i++) {
    console.log(i);
    console.log(data[i].property_name);
}
```

[Object.values ]()

```
var csv = {
  city: "seattle",
  state: "WA",
  population: "652405",
  landarea: "83.9"
};
console.log(Object.values(csv));
```

```
var csv = [{
  city: "seattle",
  state: "WA",
  population: "652405",
  landarea: "83.9"
}, {
  city: "moSat",
  state: "moWA",
  population: "mo652405",
  landarea: "mo83.9"
}];

var val = csv.map(x => Object.values(x));
console.log(val);
```


In constrast to the example above, however, data are seldom written as variables into an HMTL page.  


When loading CSVs and other flat files, you have to do the type conversion. A simple way to do this is to use the `+` operator (unary plus). `forEach` can be used to iterate over the data array.


```
d3.csv("/data/cities.csv").then(function(data) {
  data.forEach(function(d) {
    d.population = +d.population;
    d["land area"] = +d["land area"];
  });
  console.log(data[0]);
});


```


```
=> {city: "seattle", state: "WA", population: 652405, land area: 83.9}
```


Dot notation is a useful way to access the properties of these data objects. However, if your headers have spaces in them, then you will need to use bracket notation as shown.

This can also be done during the loading of the data, by d3.csv directly. This is done by providing an accessor function to d3.csv, whose return value will be the individual data objects in our data array.

```
d3.csv("/data/cities.csv", function(d) {
  return {
    city : d.city,
    state : d.state,
    population : +d.population,
    land_area : +d["land area"]
  };
}).then(function(data) {
  console.log(data[0]);
});
```

```
=> {city: "seattle", state: "WA", population: 652405, land_area: 83.9}
This code is using d3.js
```

In this form, you have complete control over the data objects and can rename properties (like land_area) and convert values (like population) willy-nilly. On the other hand, you have to be quite explicit about which properties to return. This may or may not be what you are into.




* [Learn JS Data: Reading in Data](http://learnjsdata.com/read_data.html)
* [Learn JS Data: combinign Data](http://learnjsdata.com/combine_data.html)
* [Summarizing Data](http://learnjsdata.com/summarize_data.html)
* [Data Loading in D3](https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js)
* [Getting Data](http://www.d3noob.org/2012/12/getting-data.html)





