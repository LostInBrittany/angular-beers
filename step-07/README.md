# AngularBeer - AngularJS tutorial - Step 07 #

In this step, you will learn how to create a layout template and how to build an app that has multiple views by adding routing, using an
Angular module called 'RouterModule'.

* When you now navigate to `app/index.html`, you are redirected to `app/index.html/#/beers̀ and the beer list appears in the browser.

* When you click on a beer link the url changes to one specific to that beer and the stub of a beer detail page is displayed.


## Dependencies ##

The routing functionality added by this step is provided by angular in the `RouterModule` module.

## Multiple Views, Routing and Layout Template ##

Our app is slowly growing and becoming more complex. Before step 7, the app provided our users with a single view (the list of all beers), and all of the template code was located in the `index.html` file. The next step in building the app is to add a view that will show detailed information about each of the beers in our list.

To add the detailed view, we could expand the `index.html` file to contain template code for both views, but that would get messy very quickly. Instead, we are going to turn the `index.html` template into what we call a "layout template". This is a template that is common for all views in our application. Other "partial templates" are then included into this layout template depending on the current "route" — the view that is currently displayed to the user.

Application routes in Angular are declared via the [Routes](https://angular.io/docs/ts/latest/guide/router.html). This service makes it easy to wire together controllers, view templates, and the current URL location in the browser. Using this feature we can implement [deep linking](http://en.wikipedia.org/wiki/Deep_linking), which lets us utilize the browser's history (back and forward navigation) and bookmarks.

## The router

First modify `app/index.html` by adding `<base href="./#"/>` within the `head` tag.

Then, we will build a root component :

`app/app.component.ts` :

```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {
}
```

You can notice the special `<router-outlet>` tag.

Then import this component in `app/app.module.ts` :

```typescript
[...]
import {AppComponent} from './app.component';
[...]
    declarations: [
        AppComponent,
        BeerList,
        BeerDetail,
        FilterArrayPipe,
        OrderByPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

Then let's code our router in `app/app.routing.ts` :

```typescript
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BeerList} from "./beerlist/beerList.component";
import {BeerDetail}  from './beerdetail/beerDetail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/beers',
        pathMatch: 'full'
    },
    {
        path: 'beers',
        component: BeerList
    },
    {
        path: 'beers/:id',
        component: BeerDetail
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
```

Our application routes are defined as follows:

* `when('/beers')`: The beer list view will be shown when the URL hash fragment is `/beers`. To construct this view,
  Angular will use the `beerList.html` template and the BeerList controller.

* `when('/beers/:beerId')`: The beer details view will be shown when the URL hash fragment matches `'/beers/:beerId'`, where `:beerId` is
  a variable part of the URL. To construct the beer details view, Angular will use the `beerDetail.html` template and the `BeerDetail` controller.

* `otherwise({redirectTo: '/beers'})`: triggers a redirection to `/beers` when the browser address doesn't match either of our routes.

We reused the `BeerList` controller that we constructed in previous steps and we added a new, empty `BeerDetail` controller for the beer details view.

Note the use of the `:beerId` parameter in the second route declaration. The `Route` service uses the route declaration — `'/beers/:beerId'` — as a template that is matched against the current URL. All variables defined with the `:` notation are extracted into the `Params` object.

In fact, depending of the path, through the `<router-outlet>` tag, we display the list or the detail. In the previous step, we use : `<a href="#/beers/{{beer.id}}" class="btn btn-primary">Detail</a>`, notice the "#" before th path, you can work without but with the HTML5 compliance level ([see](https://angular.io/docs/ts/latest/guide/router.html#!#browser-url-styles)).

We also added a placeholder template for the beer details view:

`app/beerdetail/beerDetail.html` :

```html
<div class="container">
    TBD: detail view for <span>{{beerId}}</span>
</div>
```

Note how we are using the beerId expression which will be defined in the BeerDetail controller.

## Controllers ##

`app/beerdetail/beerDetail.component.ts` :

```typescript
import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';

@Component({
    selector: 'beer-detail',
    templateUrl: './app/beerdetail/beerDetail.html'
})
export class BeerDetail implements OnInit {
    beer = {};
    beerId = 0;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.beerId = params['id'];
        });
    }
}
```

Again, note that we created a module called `AppModule` in `app/app.module.ts`. For small AngularJS applications, it's common to create just one module for all of your components if the
re are just a few. As your application grows it is quite common to refactor your code into additional modules. For larger apps, you will probably want to create separate modules for each major feature of your app.

Because our example app is relatively small, we'll just add all of our components to the `AppModule` module.

## Summary ##

With the routing set up and the beer list view implemented, we're ready to go to [step 8](../step-08/) to implement the beer details view.