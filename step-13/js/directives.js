'use strict';

/* Directives */

angular
  .module('BeerDirectives', [])
  .directive('beer', [function(){
    return {
      restrict: 'E',  // How can this directive be uses: E = as Element, A = as Attribute, C = as Class, M = as Comment. Defaults A
      scope: {
        beer: '=beer'
      },
      template: "<a href='#/beers/{{beer.id}}' class='thumb'><img ng-src='{{beer.img}}'></a>"
                +"<a href='#/beers/{{beer.id}}'>{{beer.name}}</a>"
                +"<p>{{beer.description}}</p>",
      link: function(scope, element, attributes, controller) {
        
      }
    };
  }]);;
