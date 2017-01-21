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


## Template ##

To dynamically generate links that will in the future lead to beer detail pages, we used the now-familiar double-curly brace binding in the href attribute values. In step 2, we added the `{{beer.name}}` binding as the element content. In this step the `{{beer.id}}` binding is used in the element attribute.

We also added beer images next to each record using an `img` tag with the `[src]` directive. That directive prevents the browser from treating the Angular `{{ expression }}` markup literally, and initiating a request to invalid url http://localhost:8000/app/{{beer.img}}, which it would have done if we had only specified an attribute binding in a regular `src` attribute (`<img src="{{beer.img}}">`). Using the `[src]` directive prevents the browser from making an http request to an invalid location.

`app/beerlist/beerList.html`:

```html
<div class="card" *ngFor="let beer of (beers | filter:query | orderby:orderProp)">
    <div class="row">
        <a href="#/beers/{{beer.id}}" class="col-sm-4 thumb">
            <img class="img-thumbnail" [src]="beer.img" alt="Beer image"/>
        </a>
        <div class="col-sm-8 card-block">
            <a href="#/beers/{{beer.id}}"><h4 class="card-title">{{beer.name}} <span
                    class="tag tag-default">{{beer.alcohol}} °</span>
            </h4></a>
            <p class="card-text">{{beer.description}}</p>
            <a href="#/beers/{{beer.id}}" class="btn btn-primary">Detail</a>
        </div>
    </div>
</div>
```

## Experiments ##

Replace the `[src]` directive with a plain old `src` attribute. Using tools such as Firebug, or Chrome's Web Inspector, or inspecting the webserver access logs, confirm that the app is indeed making an extraneous request to `/app/%7B%7Bbeer.img%7D%7D` (or `/app/{{beer.img}}`).

The issue here is that the browser will fire a request for that invalid image address as soon as it hits the img tag, which is before Angular has a chance to evaluate the expression and inject the valid address.

## Summary ##

Now that you have added beer images and links, go to [step 7](../step-07) to learn about Angular layout templates and how Angular makes it easy to create applications that have multiple views.