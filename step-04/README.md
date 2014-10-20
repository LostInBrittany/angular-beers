# AngularBeer - AngularJS tutorial - Step 04 #

In this step, you will add a feature to let your users control the order of the items in the beer list. The dynamic ordering is implemented by creating a new model property, wiring it together with the repeater, and letting the data binding magic do the rest of the work.

In addition to the search box, the app displays a drop down menu that allows users to control the order in which the beers are listed.

## Template ##

We need to makke the following changes to the `index.html` template:

* First, we add a `<select>` html element named `orderProp`, so that our users can pick from the two provided sorting options.

* Then we chain the `filter` filter with `orderBy` filter to further process the input into the repeater. 
  `orderBy` is a filter that takes an input array, copies it and reorders the copy which is then returned.

Angular creates a two way data-binding between the `select` element and the `orderProp` model. `orderProp` is then used as 
the input for the `orderBy` filter.

As we discussed in the section about data-binding and the repeater in [step 3](../step-03), whenever the model changes (for example because a user changes the order with the select drop down menu), Angular's data-binding will cause the view to automatically update. No bloated DOM manipulation code is necessary!

`app/index.html`:

```html
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <!--Sidebar content-->
        <div>
          Search: <input ng-model="query">
        </div>
        <div>  
          Sort by:
          <select ng-model="orderProp">
            <option value="name">Alphabetical</option>
            <option value="alcohol">Alcohol content</option>
          </select>
        </div>
      </div>
      <div class="col-md-10">
        <!--Body content-->
        <ul class="beers">
          <li ng-repeat="beer in beers | filter:query | orderBy:orderProp">
            <span>{{beer.name}}</span>
            <p>{{beer.description}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
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

