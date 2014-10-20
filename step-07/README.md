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