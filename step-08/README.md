# AngularBeer - AngularJS tutorial - Step 08 #

In this step, you will implement the beer details view, which is displayed when a user clicks on a beer in the beer list.

When you click on a beer on the list, the beer details page with beer-specific information is displayed.

To implement the beer details view we used [$http](https://docs.angularjs.org/api/ng/service/$http) to fetch our data, 
and we fleshed out the `beer-detail.html` view template.

## Data ##

In addition to `beers.json`, the `app/beers/` directory also contains one JSON file for each beer:

`app/beers/TrappistesRochefort8.json`: (sample)

```json
{
  "alcohol": 9.2,
  "availability": "Year round",
  "brewery": "Rochefort Brewery (Brasserie de Rochefort)",
  "description": "A dry but rich flavoured beer with complex fruity and spicy flavours.",
  "id": "TrappistesRochefort8",
  "img": "beers/img/TrappistesRochefort8.jpg",
  "label": "beers/img/TrappistesRochefort8-label.png",
  "name": "Rochefort 8",
  "serving": "Serve in a Snifter",
  "style": "Trappiste"
}
```

Each of these files describes various properties of the beer using the same data structure. We'll show this data in the beer detail view.

## Controller ##

We'll expand the BeerDetailCtrl by using the `$http` service to fetch the JSON files. This works the same way as the beer list controller.

`app/js/controllers.js`:

```javascript
  controller('BeerDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $http.get('beers/' + $routeParams.beerId + '.json').success(function(data) {
      $scope.beer = data;
    });
  }])
```


## Template ## 

The TBD placeholder line has been replaced with lists and bindings that comprise the beer details. 
Note where we use the Angular `{{expression}}` markup to project beer data from our model into the view.

`app/partials/beer-detail.html`:

```html
<img ng-src="{{beer.img}}" class="beer">

<h1>{{beer.name}}</h1>

<p>{{beer.description}}</p>

<ul class="beer-thumbs">
  <li>
    <img ng-src="{{beer.img}}">
  </li>
  <li>
    <img ng-src="{{beer.label}}">
  </li>
</ul>

<ul class="specs">
  <li>
    <dl>
      <dt>Alcohol content</dt>
      <dd>{{beer.alcohol}}</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt>Brewery</dt>
      <dd>{{beer.brewery}}</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt>Availability</dt>
      <dd>{{beer.availability}}</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt>Style</dt>
      <dd>{{beer.style}}</dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt>Serving instructions</dt>
      <dd>{{beer.serving}}</dd>
    </dl>
  </li>
</ul>
```

## Summary ##

Now that the phone details view is in place, proceed to [step 9](../step-09) to learn how to write your own custom display filter.