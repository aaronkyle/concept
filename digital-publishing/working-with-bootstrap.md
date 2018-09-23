Current Bootstrap is version 4

https://getbootstrap.com/docs/4.0/components/collapse/


### Accordion example

Using the card component, you can extend the default collapse behavior to create an accordion.

```
<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```


### Accessibility
Be sure to add aria-expanded to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of aria-expanded="false". If you’ve set the collapsible element to be open by default using the show class, set aria-expanded="true" on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsbile element). If the control element’s HTML element is not a button (e.g., an <a> or <div>), the attribute role="button" should be added to the element.

If your control element is targeting a single collapsible element – i.e. the data-target attribute is pointing to an id selector – you should add the aria-controls attribute to the control element, containing the id of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.

Note that Bootstrap’s current implementation does not cover the various keyboard interactions described in the WAI-ARIA Authoring Practices 1.1 accordion pattern - you will need to include these yourself with custom JavaScript.


### Usage

The collapse plugin utilizes a few classes to handle the heavy lifting:

.collapse hides the content
.collapse.show shows the content
.collapsing is added when the transition starts, and removed when it finishes
These classes can be found in _transitions.scss.

Via data attributes

Just add data-toggle="collapse" and a data-target to the element to automatically assign control of one or more collapsible elements. The data-target attribute accepts a CSS selector to apply the collapse to. Be sure to add the class collapse to the collapsible element. If you’d like it to default open, add the additional class show.

To add accordion-like group management to a collapsible area, add the data attribute data-parent="#selector". Refer to the demo to see this in action.

Via JavaScript
Enable manually with:

Copy
$('.collapse').collapse()
Options
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to data-, as in data-parent="".

Name	Type	Default	Description
parent	selector | jQuery object | DOM element	false	If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the card class). The attribute has to be set on the target collapsible area.
toggle	boolean	true	Toggles the collapsible element on invocation


### Methods

Asynchronous methods and transitions
All API methods are asynchronous and start a transition. They return to the caller as soon as the transition is started but before it ends. In addition, a method call on a transitioning component will be ignored.

See our JavaScript documentation for more information.

.collapse(options)
Activates your content as a collapsible element. Accepts an optional options object.

Copy
$('#myCollapsible').collapse({
  toggle: false
})
.collapse('toggle')
Toggles a collapsible element to shown or hidden. Returns to the caller before the collapsible element has actually been shown or hidden (i.e. before the shown.bs.collapse or hidden.bs.collapse event occurs).

.collapse('show')
Shows a collapsible element. Returns to the caller before the collapsible element has actually been shown (i.e. before the shown.bs.collapse event occurs).

.collapse('hide')
Hides a collapsible element. Returns to the caller before the collapsible element has actually been hidden (i.e. before the hidden.bs.collapse event occurs).

.collapse('dispose')
Destroys an element’s collapse.

###Events

Bootstrap’s collapse class exposes a few events for hooking into collapse functionality.

Event Type	Description
show.bs.collapse	This event fires immediately when the show instance method is called.
shown.bs.collapse	This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
hide.bs.collapse	This event is fired immediately when the hide method has been called.
hidden.bs.collapse	This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).Copy
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})
