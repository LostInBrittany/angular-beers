# AngularBeer - AngularJS tutorial - Step 06 #

In this step, you will add thumbnail images for the beers in the beer list, and links that, for now, will go nowhere. In subsequent steps you will use the links to display additional information about the beers in the catalog.

So the objective is to add links and images of the beers in the list.

## Data ##

Note that the `beers.json` file contains unique ids and image urls for each of the beers. The urls point to the `app/beers/img` directory.

`app/beers/beers.json`:

```json
[
  ...
  {
    "alcohol": 6.8,
    "description": "A reddish-brown abbey ale brewed with dark malts. The secondary fermentation gives a fruity aroma and a unique spicy character with a distinctive aftertaste. Secondary fermentation in the bottle.",
    "id": "AffligemDubbel",
    "img": "beers/img/AffligemDubbel.jpg",
    "name": "Affligem Dubbel"
  },
  ...
]
```


## Template ##

To dynamically generate links that will in the future lead to beer detail pages, we used the now-familiar double-curly brace binding in the href attribute values. In step 2, we added the `{{beer.name}}` binding as the element content. In this step the `{{beer.id}}` binding is used in the element attribute.

We also added beer images next to each record using an `img` tag with the [ngSrc](https://docs.angularjs.org/api/ng/directive/ngSrc) directive. 
That directive prevents the browser from treating the Angular `{{ expression }}` markup literally, and initiating a request to invalid url 
http://localhost:8000/app/{{beer.imageUrl}}, 
which it would have done if we had only specified an attribute binding in a regular `src` attribute (`<img src="{{beer.imageUrl}}">`). 
Using the `ngSrc` directive prevents the browser from making an http request to an invalid location.

`app/index.html`:

```html
    <ul class="beers">
      <li ng-repeat="beer in beers | filter:query | orderBy:orderProp" class="thumbnail">
        <a href="#/beers/{{beer.id}}" class="thumb"><img ng-src="{{beer.img}}"></a>
        <a href="#/beers/{{beer.id}}">{{beer.name}}</a>
        <p>{{beer.description}}</p>
      </li>
    </ul>
```


## Controller ##

We modify the `beers` model - the array of beers - and added an `alcohol` property to each beer record. This property is used to order beers by their alcohol content.

Then we add a line to the controller that sets the default value of `orderProp` to `alcohol`. If we had not set a default value here, the `orderBy` filter would remain uninitialized until our user picked an option from the drop down menu.

```javascript
$scope.beers = [
  {
    "alcohol": 6.8,
    "name": "Affligem Blond",
    "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable."
  },
  {
    "alcohol": 8.5,
    "name": "Affligem Tripel",
    "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
  },
  {
    "alcohol": 9.2,
    "name": "Rochefort 8",
    "description": "A dry but rich flavoured beer with complex fruity and spicy flavours."
  },
  {
    "alcohol": 11.3,
    "name": "Rochefort 10",
    "description": "The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities."
  },
  {
    "alcohol": 7,
    "name": "Chimay Rouge",
    "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
  }
];

$scope.orderProp = 'alcohol';
```

This is a good time to talk about two-way data-binding. Notice that when the app is loaded in the browser, "Alcohol content" is selected in the drop down menu. This is because we set `orderProp` to `alcohol` in the controller. So the binding works in the direction from our model to the UI. Now if you select "Alphabetically" in the drop down menu, the model will be updated as well and the beers will be reordered. That is the data-binding doing its job in the opposite direction — from the UI to the model.

## Experiments ##


In the `BeerListCtrl` controller, remove the statement that sets the `orderProp` value and you'll see that Angular will temporarily add a new "unknown" option to the drop-down list and the ordering will default to unordered/natural order.

Add an `{{orderProp}}` binding into the `index.html` template to display its current value as text.

Reverse the sort order by adding a `-` symbol before the sorting value: 

```html
<option value="-age">Oldest</option>
```

## Summary ##

Now that you have added list sorting, go to [step 5](../step-05) to learn about Angular services and how Angular uses dependency injection.