'use strict';

/* Controllers */

angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('beers/beers.json').success(function(data) {
      $scope.beers = data;
    });

    $scope.orderProp = 'alcohol';
  }])
  .controller('BeerDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('beers/' + $routeParams.beerId + '.json').success(function(data) {
      $scope.beer = data;
    });
  }]);

