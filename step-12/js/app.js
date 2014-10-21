'use strict';

/* App Module */

var angularBeer = angular.module('AngularBeer', [
  'ngRoute',
  'BeerControllers',
  'BeerFilters',
  'BeerServices',
  'BeerAnimations'
]);

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