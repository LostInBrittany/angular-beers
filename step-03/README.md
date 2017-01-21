# AngularBeer - AngularJS tutorial - Step 03 #

We did a lot of work in laying a foundation for the app in the last step, so now we'll do something simple; we will add full text search (yes, it will be simple!).

We want to add a search box to the app, and we want the results on the beer list change according to what the user types into the search box.

In Angular 1 you got `filter` and `orderBy`, thez do dot exist in angular 2 : [No FilterPipe or OrderByPipe](https://angular.io/docs/ts/latest/guide/pipes.html#!#no-filter-pipe)

## Pipe ##

Let's create a pipe :

`app/pipes/filter-array-pipe.ts`

```typescript
import {Pipe, PipeTransform} from '@angular/core';

// # Filter Array of Objects
@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
    transform(items, args) {
        if (!args || !args[0]) {
            return items;
        } else if (items) {
            return items.filter(item => item.name.match(new RegExp(args, 'i')));
        }
    }
}
```

## Controller ##

Import the pipe in `app/beerlist/beerList.component.ts`:

```typescript
import {Component} from '@angular/core';
import {FilterArrayPipe} from '../pipes/filter-array-pipe';

@Component({
    selector: 'beer-list',
    templateUrl: './app/beerlist/beerList.html',
    pipes: [FilterArrayPipe]
})

export class BeerList {

    beers = [
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
            "alcohol": 7,
            "name": "Chimay Rouge",
            "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
        }
    ];
}
```


## Template ##

We use [Twitter Bootstrap](http://getbootstrap.com) column model to divide the page in two columns, the left one for the search box, the right one for the beer  list.

We need to add a standard HTML `<input>` tag and an Angular's [pipe](https://angular.io/docs/ts/latest/guide/pipes.html) to process the input for the [NgFor directive](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html) directive.

This lets a user enter search criteria and immediately see the effects of their search on the beer list.

In order to use a model on our input, we need to do some imports :

`app/app.module.ts` :

```typescript
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BeerList} from "./beerlist/beerList.component";
import {FilterArrayPipe} from "./pipes/filter-array-pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        BeerList,
        FilterArrayPipe
    ],
    bootstrap: [BeerList]
})
export class AppModule {
}
```


`app/beerlist/beerList.html`:

```html
<div class="container">
 <div class="row">
     <div class="col-md-4">
         <!--Sidebar content-->
         Search: <input [(ngModel)]="query">
     </div>
     <div class="col-md-8">
         <!--Body content-->
         <ul>
             <li *ngFor="let beer of (beers | filter:query)">
                 <span>{{beer.name}}</span>
                 <p>{{beer.description}}</p>
             </li>
         </ul>
     </div>
 </div>
</div>
```


This new code demonstrates the following:

* Data-binding: This is one of the core features in Angular. When the page loads, Angular binds the name of the input box to
  a variable of the same name in the data model and keeps the two in sync.

  In this code, the data that a user types into the input box (named `query`) is immediately available as a filter input in the list repeater (`beer in beers | filter:query`). When changes to the data model cause the repeater's input to change, the repeater efficiently updates the DOM to reflect the current state of the model.

* The `FilterArrayPipe` pipe uses the `query` value to create a new array that contains only those records that match the `query`. `*ngFor` automatically updates the view in response to the changing number of phones returned by the `filter` filter. The process is completely transparent to the developer.

## Experiments ##

### Display Current Query ###

Display the current value of the query model by adding a `{{query}}` binding into the `app/beerlist/beerList.html` template, and see how it changes when you type in the input box.

## Summary ##

We have now added full text search! Now let's go on to step 4 to learn how to add sorting capability to the beer app.