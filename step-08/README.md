# AngularBeer - AngularJS tutorial - Step 08 #

In this step, you will implement the beer details view, which is displayed when a user clicks on a beer in the beer list.

When you click on a beer on the list, the beer details page with beer-specific information is displayed.

To implement the beer details view we used [HttpModule](https://angular.io/docs/ts/latest/guide/server-communication.html)  to fetch our data, and we fleshed out the `beerDetail.html` view template.

## Data ##

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

We'll enhance the BeerService by using the `HttpModule` service to fetch the JSON files. This works the same way as the beer list controller.

`app/beers.service.ts`:

```typescript
  getBeer(beerId: String): Promise<any[]> {
      return this.http.get('beers/' + beerId + '.json')
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);
  }
```


## Template ##

The TBD placeholder line has been replaced with lists and bindings that comprise the beer details.
Note where we use the Angular `{{expression}}` markup to project beer data from our model into the view.

`app/beerdetail/beerDetail.html`:

```html
<div class="container">
    <div class="row">
        <div class="col-md-4"><img [src]="beer.img" class="beer"></div>
        <div class="col-md-8">
            <h1>{{beer.name}}</h1>
            <p class="text-justify">{{beer.description}}</p>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <img [src]="beer.img" class="img-thumbnail thumb">
                </li>
                <li class="list-inline-item">
                    <img [src]="beer.label" class="img-thumbnail thumb">
                </li>
            </ul>
        </div>
    </div>
    <ul class="list-group">
        <li class="list-group-item"><dl><dt>Alcohol content</dt><dd>{{beer.alcohol}}</dd></dl></li>
        <li class="list-group-item"><dl><dt>Brewery</dt><dd>{{beer.brewery}}</dd></dl></li>
        <li class="list-group-item"><dl><dt>Availability</dt><dd>{{beer.availability}}</dd></dl></li>
        <li class="list-group-item"><dl><dt>Style</dt><dd>{{beer.style}}</dd></dl></li>
        <li class="list-group-item"><dl><dt>Serving instructions</dt><dd>{{beer.serving}}</dd></dl></li>
    </ul>
</div>
```

## Summary ##

Now that the phone details view is in place, proceed to [step 09](../step-09) to learn how to write your own custom display filter.