# AngularBeer - AngularJS tutorial - Step 13 #

In this step, you are going to add a more complex custom element, a ```<beer-detail>``` tag for the details of each beer.

## Directive ##

We begin by adding a new `beerDetail` directive in `directives.js`.

Remeber that in JavaScript side you write in CamelCase (`beerDetail`) and in HTML side you separe the words with dashes 
(`beer-detail`).

Remeber to add `restrict` your directives to declare them as element-only.

## Template ##

We put the beer detail template into `/templates` and we reference it from `/js/directives.js` via the  `templateUrl` parameter.


```javascript
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

    <ul class="specs">
      <li>
        <dl>
          <dt>Alcohol content</dt>
          <dd>{{beer.alcohol | strongAlcohol }}</dd>
        </dl>
      </li>
      [...]
    </ul>
```

## View ##

In the view `beerDetail` we directly call the `beerDetail` directive passing to it the beer and the current image:

```javascript
  <beer-detail beer="beer" main-img="mainImg"></beer-detail>
```

## Summary #