# AngularBeer - AngularJS tutorial #

## Step 03 ##

We did a lot of work in laying a foundation for the app in the last step, so now we'll do something simple; 
we will add full text search (yes, it will be simple!). 

We want to add a search box to the app, and we want the results on the beer list change according to what the user types into the search box.

### Controller ###

We don't need to do any changes to the controller.

### Templates ###

We use [Twitter Bootstrap](http://getbootstrap.com) column model to divide the page in two columns, the left one for the search box, the right one for the beer list.

We need to add a standard HTML `<input>` tag and an Angular's [filter](https://docs.angularjs.org/api/ng/filter/filter) function to process the input for the [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat) directive.

This lets a user enter search criteria and immediately see the effects of their search on the beer list. 

`app/index.html`:

```html
 <div class="container">
    <div class="row">
      <div class="col-md-2">
        <!--Sidebar content-->
        Search: <input ng-model="query">
      </div>
      <div class="col-md-10">
        <!--Body content-->
        <ul class="beers">
          <li ng-repeat="beer in beers | filter:query">
            <span>{{beer.name}}</span>
            <p>{{beer.description}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
```

This new code demonstrates the following:

* Data-binding: This is one of the core features in Angular. When the page loads, Angular binds the name of the input box to 
  a variable of the same name in the data model and keeps the two in sync.

  In this code, the data that a user types into the input box (named `query`) is immediately available as a filter input in the list repeater (`beer in beers | filter:query`). When changes to the data model cause the repeater's input to change, the repeater efficiently updates the DOM to reflect the current state of the model.

* Use of the `filter` filter: The [filter](https://docs.angularjs.org/api/ng/filter/filter) function uses the `query` value to create 
  a new array that contains only those records that match the `query`.

  `ngRepeat` automatically updates the view in response to the changing number of phones returned by the `filter` filter. The process is completely transparent to the developer.  