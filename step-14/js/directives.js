'use strict';

/* Directives */

angular
  .module('BeerDirectives', ['BeerServices'])
  .directive('beer', [function(){
    return {
      restrict: 'E',
      scope: {
        beer: '='
      },
      template: "<a href='#/beers/{{beer.id}}' class='thumb'><img ng-src='{{beer.img}}'></a>"
                +"<a href='#/beers/{{beer.id}}'>{{beer.name}}</a>"
                +"<p>{{beer.description}}</p>",
      link: function(scope, element, attributes, controller) {
        
      }
    };
  }])
  .directive('beerDetail', ['Beer', function(Beer){
    return {
      restrict: 'E',
      scope: {
        beerId: '@'
      },
      templateUrl: 'templates/beer-detail.html',
      link: function(scope, element, attributes, controller) {
        scope.beer = Beer.get({beerId: scope.beerId}, function(beer) {
          scope.mainImg = beer.img;
        });

        scope.setImage = function(img) {
          scope.mainImg = img;
        }
      }
    };
  }]);;