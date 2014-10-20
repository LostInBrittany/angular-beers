# AngularBeer - AngularJS tutorial - Step 09 #

In this step, you will add a clickable beer image swapper to the beer details page.

The beer details view displays one large image of the current beer and several smaller thumbnail images. It would be great if we could replace the large image with any of the thumbnails just by clicking on the desired thumbnail image. Let's have a look at how we can do this with Angular.

## Controller ##

In the BeerDetailCtrl controller, we created the `mainImg` model property and set its default value to the beer's bottle image URL.

We also created a `setImage` event handler function that will change the value of `mainImg`

`app/js/controllers.js`:

```javascript
controller('BeerDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $http.get('beers/' + $routeParams.beerId + '.json').success(function(data) {
    $scope.beer = data;      
    $scope.mainImg = $scope.beer.img;

    $scope.setImage = function(img) {
      $scope.mainImg = img;
    }
  });
}])
```


## Template ##

We bound the `ngSrc` directive of the large image to the `mainImg` property.

We also registered an [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick) handler with thumbnail images. When a user clicks on one of the thumbnail images, the handler will use the `setImage` event handler function to change the value of the `mainImg` property to the URL of the thumbnail image.

`app/partials/beer-detail.html`:

```html
<img ng-src="{{mainImg}}" class="beer">

<h1>{{beer.name}}</h1>

<p>{{beer.description}}</p>

<ul class="beer-thumbs">
  <li>
    <img ng-src="{{beer.img}}" ng-click="setImage(beer.img)">
  </li>
  <li>
    <img ng-src="{{beer.label}}" ng-click="setImage(beer.label)"> 
  </li>
</ul>
```

## Experiments ##

Let's add a new controller method to BeerDetailCtrl:

```javascript
$scope.hello = function(name) {
    alert('Hello ' + (name || 'world') + '!');
}
```

and add:

```html
<button ng-click="hello('Elmo')">Hello</button>
```

to the `beer-detail.html` template.

## Summary ##

With the beer image swapper in place, we're ready for [step 11](../step-11) to learn an even better way to fetch data.