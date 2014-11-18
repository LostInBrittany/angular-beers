'use strict';

/* Directives */

angular
  .module('BeerDirectives', [])
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
  .directive('beerDetail', [ function(){
    return {
      restrict: 'E',
      scope: {
        beer: '=',
        mainImg: '='
      },
      templateUrl: 'templates/beer-detail.html',
      link: function(scope, element, attributes, controller) {
        
      }
    };
  }]);;