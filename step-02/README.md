# AngularBeer - AngularJS tutorial - Step 02 #

In this step we are going to make the web page dynamic — with AngularJS.

There are many ways to structure the code for an application. For Angular apps, we encourage the use of the [Model-View-Controller (MVC) design pattern](http://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller) to decouple the code and to separate concerns. With that in mind, let's use a little Angular and JavaScript to add model, view, and controller components to our app.

The objective of this step is to dynamically generate a list of three beers from a block of JSON data.

## Views and templates ##

In Angular, the **view** is a projection of the model through the HTML **template**. This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.

The view component is constructed by Angular from this template:

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
  <script src="js/controllers.js"></script>
</head>
<body ng-controller="BeerListCtrl">
  <ul>
    <li ng-repeat="beer in beers">
      <span>{{beer.name}}</span>
      <p>{{beer.description}}</p>
    </li>
  </ul>
</body>
</html>
```

In the template we replaced the hard-coded beer list with the [ngRepeat directive](https://docs.angularjs.org/api/ng/directive/ngRepeat) 
and two [Angular expressions](https://docs.angularjs.org/guide/expression):   

* The `ng-repeat="beer in beers"` attribute in the `<li>` tag is an Angular repeater directive. 
  The repeater tells Angular to create a `<li>` element for each beer in the list using the `<li>` tag as the template.

* The expressions wrapped in curly braces (`{{beer.name}}` and `{{beer.description}}`) will be evaluated and replaced by 
  the value of the expressions.

We have added a new directive, called `ng-controller`, which attaches a `BeerListCtrl` controller to the `<body>` tag. At this point:

The [Angular expressions](https://docs.angularjs.org/guide/expression) in curly braces (`{{beer.name}}` and `{{beer.description}}`) denote bindings, which are referring to our application model, which is set up in our `BeerListCtrl` controller.

Note: We have specified an Angular Module to load using `ng-app="AngularBeer"`, where `AngularBeer` is the name of our module. This module will contain the `BeerListCtrl`.   


## Model and Controller #

The data model (a simple array of beers in object literal notation) is now instantiated within the `BeerListCtrl` controller. The controller is simply a constructor function that takes a $scope parameter:

`app/js/controllers.js`:

```javascript
angular
  .module('AngularBeer', [])
  .controller('BeerListCtrl', ['$scope', function($scope) {
    $scope.beers = [
      {
        "alcohol": 8.5,
        "name": "Affligem Tripel",
        "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
      },
      {
        "alcohol": 9.2,
        "name": "Rochefort 8",
        "description": "A dry but rich flavoured beer with complex fruity and spicy flavours."
      },
      {
        "alcohol": 7,
        "name": "Chimay Rouge",
        "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
      }
    ];
  }]);
```

Here we declared a controller called `BeerListCtrl` and registered it in an AngularJS module, `AngularBeer`. Notice that our `ng-app` directive (on the `<html>` tag) now specifies the `AngularBeer` module name as the module to load when bootstrapping the Angular application.

Although the controller is not yet doing very much, it plays a crucial role. By providing context for our data model, the controller allows us to establish data-binding between the model and the view. We connected the dots between the presentation, data, and logic components as follows:

* The `ngController` directive, located on the `<body>` tag, references the name of our controller, `BeerListCtrl` (located in the JavaScript file `app/js/controllers.js`).

* The `BeerListCtrl` controller attaches the beer data to the `$scope` that was injected into our controller function. This *scope* is a prototypical descendant of the root scope that was created when the application was defined. This controller *scope* is available to all bindings located within the `<body ng-controller="BeerListCtrl">` tag.


## Scope ##

The concept of a scope in Angular is crucial. A scope can be seen as the glue which allows the template, model and controller to work together. Angular uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync. Any changes made to the model are reflected in the view; any changes that occur in the view are reflected in the model.

To learn more about Angular scopes, see the [angular scope documentation](https://docs.angularjs.org/api/ng/type/$rootScope.Scope).


## Experiments ##

Add another binding to `index.html`. For example:

```html
<p>Total number of beers: {{beers.length}}</p>
```

Create a new model property in the controller and bind to it from the template. For example:

```javascript
$scope.name = "World";
```

Then add a new binding to `index.html`:

```html
<p>Hello, {{name}}!</p>
```

Refresh your browser and verify that it says "Hello, World!".

Create a repeater in `index.html` that constructs a simple table:

```html
<table>
  <tr><th>row number</th></tr>
  <tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i}}</td></tr>
</table>
```

Now, make the list 1-based by incrementing i by one in the binding:

```html
<table>
  <tr><th>row number</th></tr>
  <tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i+1}}</td></tr>
</table>
```

Extra points: try and make an 8x8 table using an additional `ng-repeat`.

## Summary ##

You now have a dynamic app that features separate model, view, and controller components. 
Now, let's go to step 3 to learn how to add full text search to the app.
