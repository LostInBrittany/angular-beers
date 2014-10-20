'use strict';

/* Controllers */

angular
  .module('AngularBeer', [])
  .controller('BeerListCtrl', ['$scope', function($scope) {
    $scope.beers = [
      {
        "alcohol": 6.8,
        "brewery": "Brasserie Affligem (Heineken)",
        "name": "Affligem Blond",
        "type": "Abbaye, Blonde",
        "img": "beers/img/AffligemBlond.jpg",
        "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable."
      },
      {
        "alcohol": 6.8,
        "brewery": "Brasserie Affligem (Heineken)",
        "name": "Affligem Dubbel",
        "type": "Abbaye, Brune",
        "img": "beers/img/AffligemDubbel.jpg",
        "description": "A reddish-brown abbey ale brewed with dark malts. The secondary fermentation gives a fruity aroma and a unique spicy character with a distinctive aftertaste. Secondary fermentation in the bottle."
      },
      {
        "alcohol": 8.5,
        "brewery": "Brasserie Affligem (Heineken)",
        "name": "Affligem Tripel",
        "type": "Abbaye, Triple",
        "img": "beers/img/AffligemTripel.jpg",
        "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
      },
      {
        "alcohol": 7.5,
        "brewery": "Abbaye Notre-Dame de Saint-Rémy de Rochefort",
        "name": "Rochefort 6",
        "type": "Trappiste",
        "img": "beers/img/TrappistesRochefort6.jpg",
        "description": "Trappistes Rochefort 6 Belgian Beer."
      },
      {
        "alcohol": 9.2,
        "brewery": "Abbaye Notre-Dame de Saint-Rémy de Rochefort",
        "name": "Rochefort 8",
        "type": "Trappiste",
        "img": "beers/img/TrappistesRochefort8.jpg",
        "description": "A dry but rich flavoured beer with complex fruity and spicy flavours."
      },
      {
        "alcohol": 11.3,
        "brewery": "Abbaye Notre-Dame de Saint-Rémy de Rochefort",
        "name": "Rochefort 10",
        "type": "Trappiste",
        "img": "beers/img/TrappistesRochefort10.jpg",
        "description": "The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities."
      }
    ];
  }]);

