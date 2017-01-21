# AngularBeer - AngularJS tutorial - Step 09 #

In this step, you will add a clickable beer image swapper to the beer details page.

The beer details view displays one large image of the current beer and several smaller thumbnail images. It would be great if we could replace the large image with any of the thumbnails just by clicking on the desired thumbnail image. Let's have a look at how we can do this with Angular.

## Controller ##

In the BeerDetail controller, we created the `mainImg` model property and set its default value to the beer's bottle image URL.

We also created a `setImage` event handler function that will change the value of `mainImg`

`app/beerdetail/beerDetail.component.ts`:

```typescript
getBeer(beerId: String) {
    this.beerService.getBeer(beerId)
        .then(
            beer => {
                this.beer = beer;
                this.setImage(beer.img);
            },
            error => this.errorMessage = <any>error
        );
}

setImage(img: String) {
    this.mainImg = img;
}
```


## Template ##

We bound the `[src]` directive of the large image to the `mainImg` property.

We also registered an Click handler with thumbnail images. When a user clicks on one of the thumbnail images, the handler will use the `setImage` event handler function to change the value of the `mainImg` property to the URL of the thumbnail image.

`app/beerdetail/beerDetail.html`:

```html
<div class="row">
    <div class="col-md-4"><img [src]="mainImg" class="beer"></div>
    <div class="col-md-8">
        <h1>{{beer.name}}</h1>
        <p class="text-justify">{{beer.description}}</p>
        <ul class="list-inline">
            <li class="list-inline-item">
                <img [src]="beer.img" class="img-thumbnail thumb" (click)="setImage(beer.img)">
            </li>
            <li class="list-inline-item">
                <img [src]="beer.label" class="img-thumbnail thumb" (click)="setImage(beer.label)">
            </li>
        </ul>
    </div>
</div>
```

## Experiments ##

Let's add a back button in BeerDetail:

```typescript
[...]
constructor(private route: ActivatedRoute,
            private location: Location,
            private beerService: BeerService) {
}
[...]
goBack(): void {
    this.location.back();
}

```

and add:

```html
<button class="btn btn-primary" (click)="goBack()">Go Back</button>
```

to the `beerDetail.html` template.

To avoid a null `mainImg` before loading the detail, you can user [*ngIf](https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html) :
```html
<img *ngIf="mainImg" [src]="mainImg" class="beer">
```

You can use it for the `beer` object.

## Summary ##

With the beer image swapper in place, we're ready for [step 10](../step-10) to learn an even better way to fetch data.