'use strict';

/* Controllers */

angular
  .module('AngularBeer', [])
  .controller('BeerListCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('beers/beers.json').success(function(data) {
      $scope.beers = data;
    });
    
    $scope.orderProp = 'alcohol';
  }]);

