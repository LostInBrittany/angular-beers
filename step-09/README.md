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