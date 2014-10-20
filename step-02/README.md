# AngularBeer - AngularJS tutorial #

## Step 02 ##

In this step we are going to make the web page dynamic — with AngularJS.

There are many ways to structure the code for an application. For Angular apps, we encourage the use of the [Model-View-Controller (MVC) design pattern](http://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller) to decouple the code and to separate concerns. With that in mind, let's use a little Angular and JavaScript to add model, view, and controller components to our app.

The objective of this step is to dynamically generate a list of three beers from a block of JSON data.

### Views and templates ###

In Angular, the **view** is a projection of the model through the HTML **template**. This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.

The view component is constructed by Angular from this template:

`app/index.html`

    <!doctype html>
    <html lang="en" ng-app="AngularBeer">
    <head>
      <meta charset="utf-8">
      <title>Angular Beer Gallery</title>
      <link rel="stylesheet" href="lib/bootstrap.css">
      <link rel="stylesheet" href="css/app.css">
      <script src="lib/angular.js"></script>
      <script src="js/controllers.js"></script>
    </head>
    <body>
      <ul ng-controller="BeerListCtrl">
        <li ng-repeat="beer in beers">
          <span>{{beer.name}}</span>
          <p>{{beer.description}}</p>
        </li>
      </ul>
    </body>
    </html>


In the template we replaced the hard-coded beer list with the [ngRepeat directive](https://docs.angularjs.org/api/ng/directive/ngRepeat) 
and two [Angular expressions](https://docs.angularjs.org/guide/expression):   

* The `ng-repeat="beer in beers"` attribute in the `<li>` tag is an Angular repeater directive. 
  The repeater tells Angular to create a `<li>` element for each beer in the list using the `<li>` tag as the template.

* The expressions wrapped in curly braces (`{{beer.name}}` and `{{beer.description}}`) will be evaluated and replaced by 
  the value of the expressions.

We have added a new directive, called `ng-controller`, which attaches a `BeerListCtrl` controller to the `<ul>` tag. At this point:

The [Angular expressions](https://docs.angularjs.org/guide/expression) in curly braces (`{{beer.name}}` and `{{beer.description}}`) denote bindings, which are referring to our application model, which is set up in our `BeerListCtrl` controller.

Note: We have specified an Angular Module to load using `ng-app="AngularBeer"`, where `AngularBeer` is the name of our module. This module will contain the `BeerListCtrl`.   


### Model and controller ##

