# AngularBeer - AngularJS tutorial - Step 11 #

IIn this step, you will change the way our app fetches data.

We define a custom service that represents a [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) client. Using this client we can make requests to the server for data in an easier way, without having to deal with the lower-level $http API, HTTP methods and URLs.

## Dependencies ##

The RESTful functionality added by this step is provided by angular in the `ngResource` module, which is distributed separately from the 
core Angular framework. The `angular-resource.js` file is already in the `app/lib` directory.


## Template ##

Our custom resource service will be defined in `app/js/services.js` so we need to include this file in our layout template. Additionally, we also need to load the `angular-resource.js` file, which contains the [ngResource](https://docs.angularjs.org/api/ngResource) module:

`app/partials/index.html`:

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

## Experiments ##

## Summary ##