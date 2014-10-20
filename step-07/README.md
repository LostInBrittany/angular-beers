# AngularBeer - AngularJS tutorial - Step 07 #

In this step, you will learn how to create a layout template and how to build an app that has multiple views by adding routing, using an 
Angular module called 'ngRoute'.

* When you now navigate to `app/index.html`, you are redirected to `app/index.html/#/beers̀ and the beer list appears in the browser.

* When you click on a beer link the url changes to one specific to that beer and the stub of a beer detail page is displayed.


## Dependencies ##

The routing functionality added by this step is provided by angular in the `ngRoute` module, which is distributed separately from the 
core Angular framework. The `angular-route.js` file is already in the `app/lib` directory.


## Multiple Views, Routing and Layout Template ##

Our app is slowly growing and becoming more complex. Before step 7, the app provided our users with a single view (the list of all beers), and all of the template code was located in the `index.html` file. The next step in building the app is to add a view that will show detailed information about each of the beers in our list.

To add the detailed view, we could expand the `index.html` file to contain template code for both views, but that would get messy very quickly. Instead, we are going to turn the `index.html` template into what we call a "layout template". This is a template that is common for all views in our application. Other "partial templates" are then included into this layout template depending on the current "route" — the view that is currently displayed to the user.

Application routes in Angular are declared via the [$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider), which is the provider of the [$route service](https://docs.angularjs.org/api/ngRoute/service/$route). This service makes it easy to wire together controllers, view templates, and the current URL location in the browser. Using this feature we can implement [deep linking](http://en.wikipedia.org/wiki/Deep_linking), which lets us utilize the browser's history (back and forward navigation) and bookmarks.

### A Note About DI, Injector and Providers ###

As you [noticed](../step-05/), [dependency injection (DI)](https://docs.angularjs.org/guide/di) is at the core of AngularJS, so it's important for you to understand a thing or two about how it works.

When the application bootstraps, Angular creates an injector that will be used to find and inject all of the services that are required by your app. The injector itself doesn't know anything about what `$http` or `$route` services do, in fact it doesn't even know about the existence of these services unless it is configured with proper module definitions.

The injector only carries out the following steps :

* load the module definition(s) that you specify in your app

* register all Providers defined in these module definitions

* when asked to do so, inject a specified function and any necessary dependencies (services) that it lazily instantiates via their Providers.

Providers are objects that provide (create) instances of services and expose configuration APIs that can be used to control the creation and runtime behavior of a service. In case of the `$route service`, the `$routeProvider` exposes APIs that allow you to define routes for your application.

Note: Providers can only be injected into `config` functions. Thus you could not inject `$routeProvider` into `BeerListCtrl`.

Angular modules solve the problem of removing global state from the application and provide a way of configuring the injector. As opposed to AMD or require.js modules, Angular modules don't try to solve the problem of script load ordering or lazy script fetching. These goals are totally independent and both module systems can live side by side and fulfill their goals.

To deepen your understanding of DI on Angular, see [Understanding Dependency Injection](https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection).

## Template ##

The `$route` service is usually used in conjunction with the [ngView](https://docs.angularjs.org/api/ngRoute/directive/ngView) directive. 
The role of the `ngView` directive is to include the view template for the current route into the layout template. 
This makes it a perfect fit for our `index.html` template.

We must two new `<script>` tags in our index file to load up extra JavaScript files into our application:

* `angular-route.js`: defines the Angular `ngRoute` module, which provides us with routing.
* `app.js`: this file now holds the root module of our application.

`app/index.html`:

```html
<!doctype html>
<html lang="en" ng-app="AngularBeer">
<head>
  <meta charset="utf-8">
  <title>Angular Beer Gallery</title>
  <link rel="stylesheet" href="lib/bootstrap.css">
  <link rel="stylesheet" href="css/app.css">
  <script src="lib/angular.js"></script>
  <script src="lib/angular-route.js"></script>
  <script src="js/app.js"></script>
  <script src="js/controllers.js"></script>
</head>
<body ng-controller="BeerListCtrl">
  <div ng-view></div>
</body>
</html>
```

Note that we removed most of the code in the `index.html` template and replaced it with a single line containing a `div` with the `ng-view` attribute. The code that we removed was placed into the `app/partials/beer-list.html` template:

`app/partials/beer-list.html`:

```html
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <!--Sidebar content-->
        Search: <input ng-model="query">
        Sort by:
        <select ng-model="orderProp">
          <option value="name">Alphabetical</option>
          <option value="alcohol">Alcohol content</option>
        </select>
      </div>
      <div class="col-md-10">
        <!--Body content-->
        <ul class="beers">
          <li ng-repeat="beer in beers | filter:query | orderBy:orderProp" class="thumbnail">
            <a href="#/beers/{{beer.id}}" class="thumb"><img ng-src="{{beer.img}}"></a>
            <a href="#/beers/{{beer.id}}">{{beer.name}}</a>
            <p>{{beer.description}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
```

We also added a placeholder template for the beer details view:

`app/partials/beer-detail.html`:

```html
TBD: detail view for <span>{{beerId}}</span>
```

Note how we are using the beerId expression which will be defined in the BeerDetailCtrl controller.


## The App Module ##

To improve the organization of the app, we are making use of Angular's `ngRoute` module and we've moved the controllers into their own module 
`BeerControllers` (as shown below).

We added `angular-route.js` to `index.html` and created a new `BeerControllers` module in controllers.js. That's not all we need to do to be able to use their code, however. We also have to add the modules as dependencies of our app. By listing these two modules as dependencies of `angularBeer`, we can use the directives and services they provide.

`app/js/app.js`:

```javascript
var angularBeer = angular.module('AngularBeer', [
  'ngRoute',
  'BeerControllers'
]);
...
```
Notice the second argument passed to `angular.module`, `['ngRoute', 'BeerControllers']`. This array lists the modules that `angularBeer̀ depends on.

```javascript
...
angularBeer.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/beers', {
        templateUrl: 'partials/beer-list.html',
        controller: 'BeerListCtrl'
      }).
      when('/beers/:beerId', {
        templateUrl: 'partials/beer-detail.html',
        controller: 'BeerDetailCtrl'
      }).
      otherwise({
        redirectTo: '/beers'
      });
  }]);
```

Using the `angularBeer.config()` method, we request the `$routeProvider` to be injected into our config function and use the `$routeProvider.when()` method to define our routes.

Our application routes are defined as follows:

* `when('/beers')̀: The beer list view will be shown when the URL hash fragment is `/beers`. To construct this view, 
  Angular will use the `beer-list.html` template and the BeerListCtrl controller.

* `when('/beers/:beerId')`: The beer details view will be shown when the URL hash fragment matches `'/beers/:beerId'`, where `:beerId` is 
  a variable part of the URL. To construct the beer details view, Angular will use the `beer-detail.html` template and the `BeerDetailCtrl` controller.

* `otherwise({redirectTo: '/beers'})`: triggers a redirection to `/beers` when the browser address doesn't match either of our routes.

We reused the `BeerListCtrl` controller that we constructed in previous steps and we added a new, empty `BeerDetailCtrl` controller to the 
`app/js/controllers.js` file for the beer details view.

Note the use of the `:beerId` parameter in the second route declaration. The `$route` service uses the route declaration — `'/beers/:beerId'` — as a template that is matched against the current URL. All variables defined with the `:` notation are extracted into the `$routeParams` object.


## Controllers ##

`app/js/controllers.js`:

```javascript
angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('beers/beers.json').success(function(data) {
      $scope.beers = data;
    });

    $scope.orderProp = 'alcohol';
  }])
  .controller('BeerDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.beerId = $routeParams.beerId;
  }]);
```

Again, note that we created a new module called `BeerControllers`. For small AngularJS applications, it's common to create just one module for all of your controllers if there are just a few. As your application grows it is quite common to refactor your code into additional modules. For larger apps, you will probably want to create separate modules for each major feature of your app.

Because our example app is relatively small, we'll just add all of our controllers to the `BeerControllers` module.

## Experiments ##

Try to add an `{{orderProp}}` binding to `index.html`, and you'll see that nothing happens even when you are in the beer list view. 
This is because the `orderProp` model is visible only in the scope managed by `BeerListCtrl`, which is associated with the `<div ng-view>` element. 
If you add the same binding into the `beer-list.html` template, the binding will work as expected.

## Summary ##

With the routing set up and the beer list view implemented, we're ready to go to [step 8](../step-08/) to implement the beer details view.