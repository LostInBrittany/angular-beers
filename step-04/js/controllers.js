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
          },
          {
            "alcohol": 6.7,
            "brewery": "Brasserie St. Bernardus",
            "name": "St Bernardus Pater 6",
            "type": "Fermentation haute",
            "img": "beers/img/StBernardusPater6.jpg",
            "description": "This name became a reference. This beer is mostly pointed out with its product name: a Paterke. This Paterke is a dark, chestnut coloured beer with a high fermentation (6.7%) and a full taste"
          },
          {
            "alcohol": 8.0,
            "brewery": "Brasserie St. Bernardus",
            "name": "St Bernardus Tripel",
            "type": "Fermentation haute",
            "img": "beers/img/StBernardusTripel330ml.jpg",
            "description": "This beer, with high fermentation, has a pale amber colour and a flowery, fruity taste with a harmonious balance between sweet and sour. This beer has a thick and vivid froth and strikes its balanced taste with a delicate bitterness."
          },
          {
            "alcohol": 10.5,
            "brewery": "Abbaye Notre-Dame de Saint-Rémy de Rochefort",
            "name": "St Bernardus Abt 12",
            "type": "Fermentation haute",
            "img": "beers/img/StBernardusABT12.jpg",
            "description": "Top in the hierarchy in the range of St. Bernadus beers, this is a dark ivory coloured beer with a high fermentation. It is also the beer with the highest alcohol content at 10.5%."
          }
        ];

    $scope.orderProp = 'alcohol';
  }]);

