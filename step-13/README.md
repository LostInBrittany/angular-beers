# AngularBeer - AngularJS tutorial - Step 13 #

In this step, you are going to add your first custom element, a ```<beer>``` tag for the beer list in ```index.html```.

## Directive ##

We begin by creating a new `beer` directive in `directives.js`. 

For that you create a new module `BeerDirectives` and include them as dependency in the main app. Then you initialize the directive

```javascript
  'use strict';

  /* Directives */

  angular
    .module('BeerDirectives', [])
    .directive('beer', [function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      // template: '',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      restrict: 'E',  // How can this directive be uses: E = as Element, A = as Attribute, C = as Class, M = as Comment. Defaults A
      link: function(scope, element, attributes, controller) {
        
      }
    };
  }]);;
```


## Template & Scope ##

You need to extract the beer code from `beer-list.html` and put it in the directive template. Then you need to isolate scope
and pass a `beer` argument by reference:

```javascript
    ...
    scope: {
      beer: '=beer'
    },
    template: "<a href='#/beers/{{beer.id}}' class='thumb'><img ng-src='{{beer.img}}'></a>"
              +"<a href='#/beers/{{beer.id}}'>{{beer.name}}</a>"
              +"<p>{{beer.description}}</p>"
    ...
```

## Summary ##

Now we have our first custom element, a Beer directive. We are ready for [step 14](../step-14) where we will create a directive encapsulating behaviour, in this case a `$http` asynchronous call.
