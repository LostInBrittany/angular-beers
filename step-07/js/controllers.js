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
  .controller('BeerDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.beerId = $routeParams.beerId;
  }]);

