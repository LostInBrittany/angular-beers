# AngularBeer - AngularJS tutorial - Step 09 #

In this step you will learn how to create your own custom display filter.

In the previous step, the details page displayed the alcohol content of the beer without any indication about it's effective stregth. Now we are going to use a custom filter to add some symbols: ✓ for low alcohol beers, and ✘ for strong beers. 
Let's see what the filter code looks like.


## Custom Filters ##

In order to create a new filter, you are going to create a `BeerFilters` module and register your custom filter with this module.

The name of our filter is "strongAlcohol". The `alcohol` value is compared to 8°, and we return the content with an associated symbol, one of the two unicode characters we have chosen to represent low alcohol content (`\u2713` -> ✓) or high alcohol content (`\u2718` -> ✘).

`app/js/filters.js`:

```javascript
angular.module('BeerFilters', [])
  .filter('strongAlcohol', function() {
    return function(alcohol) {
      return (alcohol < 8) ? alcohol+' \u2713' : alcohol+' \u2718';
    };
});
```

Now that our filter is ready, we need to register the `BeerFilters` module as a dependency for our main phonecatApp module.

`app/js/app.js`:

```javascript
var angularBeer = angular.module('AngularBeer', [
  'ngRoute',
  'BeerControllers',
  'BeerFilters'
]);
```

## Template ##

Since the filter code lives in the app/js/filters.js file, we need to include this file in our layout template.

`app/index.html`:

```html
...
<script src="js/app.js"></script>
<script src="js/controllers.js"></script>
<script src="js/filters.js"></script>
...
```

As we have already seen, the syntax for using filters in Angular templates is as follows:

```html
{{ expression | filter }}
```

Let's employ the filter in the beer details template:

`app/partials/beer-detail.html`:

```html
<li>
  <dl>
    <dt>Alcohol content</dt>
    <dd>{{beer.alcohol | strongAlcohol }}</dd>
  </dl>
</li>
```

## Experiments ##

Let's experiment with some of the [built-in Angular filters](https://docs.angularjs.org/api/ng/filter) and add the following bindings to `index.html`:

```html
{{ "lower cap string" | uppercase }}
{{ {foo: "bar", baz: 23} | json }}
{{ 1304375948024 | date }}
{{ 1304375948024 | date:"MM/dd/yyyy @ h:mma" }}
```

We can also create a model with an input element, and combine it with a filtered binding. Add the following to `index.html`:

```html
<input ng-model="userInput"> Uppercased: {{ userInput | uppercase }}
```

## Summary ##

Now that you have learned how to write and test a custom filter, go to [step 10](../step-10) to learn how we can use Angular to enhance the beer details page further.