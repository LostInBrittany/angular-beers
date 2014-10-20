# AngularBeer - AngularJS tutorial - Step 04 #

In this step, you will add a feature to let your users control the order of the items in the beer list. The dynamic ordering is implemented by creating a new model property, wiring it together with the repeater, and letting the data binding magic do the rest of the work.

In addition to the search box, the app displays a drop down menu that allows users to control the order in which the beers are listed.

## Template ##

We need to makke the following changes to the `index.html` template:

* First, we add a `<select>` html element named `orderProp`, so that our users can pick from the two provided sorting options.

* Then we chain the `filter` filter with `orderBy` filter to further process the input into the repeater. 
  `orderBy` is a filter that takes an input array, copies it and reorders the copy which is then returned.

Angular creates a two way data-binding between the `select` element and the `orderProp` model. `orderProp` is then used as 
the input for the `orderBy` filter.

As we discussed in the section about data-binding and the repeater in [step 3](../step-03), whenever the model changes (for example because a user changes the order with the select drop down menu), Angular's data-binding will cause the view to automatically update. No bloated DOM manipulation code is necessary!

`app/index.html`:

```html
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <!--Sidebar content-->
        <div>
          Search: <input ng-model="query">
        </div>
        <div>  
          Sort by:
          <select ng-model="orderProp">
            <option value="name">Alphabetical</option>
            <option value="alcohol">Alcohol content</option>
          </select>
        </div>
      </div>
      <div class="col-md-10">
        <!--Body content-->
        <ul class="beers">
          <li ng-repeat="beer in beers | filter:query | orderBy:orderProp">
            <span>{{beer.name}}</span>
            <p>{{beer.description}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
```

