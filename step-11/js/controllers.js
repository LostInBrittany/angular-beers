'use strict';

/* Controllers */

angular
  .module('BeerControllers', [])
  .controller('BeerListCtrl', ['$scope', 'Beer', function($scope, Beer) {

    $scope.beers = Beer.query();

    $scope.orderProp = 'alcohol';
  }])
  .controller('BeerDetailCtrl', ['$scope', '$routeParams', 'Beer', function($scope, $routeParams, Beer) {

    $scope.beer = Beer.get({beerId: $routeParams.beerId}, function(beer) {
      $scope.mainImg = beer.img;
    });

    $scope.setImage = function(img) {
      $scope.mainImg = img;
    }
  }]);

