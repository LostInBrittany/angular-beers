'use strict';

/* Controllers */

angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', 'Beer', function($scope, Beer) {

    $scope.beers = Beer.query();

    $scope.orderProp = 'alcohol';
  }])
  .controller('BeerDetailCtrl', ['$scope', '$routeParams', 'Beer', function($scope, $routeParams, Beer) {

    $scope.beerId = $routeParams.beerId;
  }]);

