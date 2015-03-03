# AngularBeer - AngularJS tutorial - Step 11 #

In this step, you will change the way our app fetches data.

We define a custom service that represents a [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) client. Using this client we can make requests to the server for data in an easier way, without having to deal with the lower-level $http API, HTTP methods and URLs.

## Dependencies ##

The RESTful functionality added by this step is provided by angular in the `ngResource` module, which is distributed separately from the 
core Angular framework. The `angular-resource.js` file is already in the `app/lib` directory.


## Template ##

Our custom resource service will be defined in `app/js/services.js` so we need to include this file in our layout template. Additionally, we also need to load the `angular-resource.js` file, which contains the [ngResource](https://docs.angularjs.org/api/ngResource) module:

`app/index.html`:

```html
  ...
  <script src="lib/angular.js"></script>
  <script src="lib/angular-route.js"></script>
  <script src="lib/angular-resource.js"></script>
  <script src="js/app.js"></script>
  <script src="js/controllers.js"></script>
  <script src="js/filters.js"></script>
  <script src="js/services.js"></script>
  ...
```

## Service ##
We create our own service to provide access to the beer data on the server. We must use the module API to register a custom service using a factory function. We pass in the name of the service - 'Beer' - and the factory function. The factory function is similar to a controller's constructor in that both can declare dependencies to be injected via function arguments. The Beer service declared a dependency on the `$resource` service.

The `$resource` service makes it easy to create a RESTful client with just a few lines of code. This client can then be used in our application, instead of the lower-level `$http` service.

`app/js/services.js`:

```javascript
angular.module('BeerServices', ['ngResource'])
  .factory('Beer', ['$resource',
    function($resource){
      return $resource('beers/:beerId.json', {}, {
        query: {method:'GET', params:{beerId:'beers'}, isArray:true}
      });
    }]);
```    

`app/js/app.js`:

```javascript
var angularBeer = angular.module('AngularBeer', [
  'ngRoute',
  'BeerControllers',
  'BeerFilters',
  'BeerServices'
]);
...
```

We need to add the `BeerServices` module dependency to 'AngularBeer' module's requires array.


## Controller ##

Now we can simplify our sub-controllers (`BeerListCtrl` and `BeerDetailCtrl`) by factoring out the lower-level `$http` service, replacing it with a new service called `Beer`. Angular's `$resource` service is easier to use than `$http` for interacting with data sources exposed as RESTful resources. It is also easier now to understand what the code in our controllers is doing.

`app/js/controllers.js`:

```javascript
angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', 'Beer', function($scope, Beer) {

    $scope.beers = Beer.query();

    $scope.orderProp = 'alcohol';
  }])
  .controller('BeerDetailCtrl', ['$scope', '$routeParams', 'Beer', function($scope, $routeParams, Beer) {

    $scope.beer = Beer.get({beerId: $routeParams.beerId}, function(beer) {
      $scope.mainImg = beer.img;
    });

    $scope.setImage = function(img) {
      $scope.mainImg = img;
    }
  }]);
```

Notice how in `BeerListCtrl` we replaced:

```javascript
$http.get('beers/beers.json').success(function(data) {
  $scope.beers = data;
});
```

with:

```javascript
$scope.beers = Beer.query();
```

This is a simple statement that we want to query for all beers.

An important thing to notice in the code above is that we don't pass any callback functions when invoking methods of our `Beer` service. Although it looks as if the result were returned synchronously, that is not the case at all. What is returned synchronously is a "future" — an object, which will be filled with data when the XHR response returns. Because of the data-binding in Angular, we can use this future and bind it to our template. Then, when the data arrives, the view will automatically update.

Sometimes, relying on the future object and data-binding alone is not sufficient to do everything we require, so in these cases, we can add a callback to process the server response. The `BeerDetailCtrl` controller illustrates this by setting the `mainImg` in a callback.

## Summary ##

Now that we've seen how to build a custom service as a RESTful client, we're ready for [step 12](../step-12) to learn how to improve this application with animations.
