'use strict';

/* Services */

angular.module('BeerServices', ['ngResource'])
  .factory('Beer', ['$resource',
    function($resource){
      return $resource('beers/:beerId.json', {}, {
        query: {method:'GET', params:{beerId:'beers'}, isArray:true}
      });
    }]);
