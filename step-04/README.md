# AngularBeer - AngularJS tutorial - Step 04 #

In this step, you will add a feature to let your users control the order of the items in the beer list. The dynamic ordering is implemented by creating a new model property, wiring it together with the repeater, and letting the data binding magic do the rest of the work.

In addition to the search box, the app displays a drop down menu that allows users to control the order in which the beers are listed.

## Pipe ##

Let's create a pipe :

`app/pipes/orderby-pipe.ts`

```typescript
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "orderby"})
export class OrderByPipe implements PipeTransform {
    transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
            if (a[args] < b[args]) {
                return -1;
            } else if (a[args] > b[args]) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}
```

`app/app.module.ts` :

```typescript
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BeerList} from "./beerlist/beerList.component";
import {FilterArrayPipe} from "./pipes/filter-array-pipe";
import {OrderByPipe} from "./pipes/orderby-pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        BeerList,
        FilterArrayPipe,
        OrderByPipe
    ],
    bootstrap: [BeerList]
})
export class AppModule {
}
```

## Template ##

Let's add a selectbox for `orderProp` and add a pipe `orderby`

`app/beerlist/beerList.html`:

```html
 <div class="container">
     <div class="row">
         <div class="col-md-4">
             <div>
                 Search: <input [(ngModel)]="query">
             </div>
             <div>
                 Sort by:
                 <select [(ngModel)]="orderProp">
                     <option value="name">Alphabetical</option>
                     <option value="alcohol">Alcohol content</option>
                 </select>
             </div>
         </div>

         <div class="col-md-8">
             <!--Body content-->
             <ul>
                 <li *ngFor="let beer of (beers | filter:query | orderby:orderProp)">
                     <span>{{beer.name}} <span class="tag tag-default">{{beer.alcohol}} °</span></span>
                     <p>{{beer.description}}</p>
                 </li>
             </ul>
         </div>
     </div>
 </div>
```

## Controller ##

We modify the `beers` model - the array of beers - and added an `alcohol` property to each beer record. This property is used to order beers by their alcohol content.

Then we add a line to the controller that sets the default value of `orderProp` to `alcohol`. If we had not set a default value here, the `orderby` pipe would remain uninitialized until our user picked an option from the drop down menu.

Import the pipe in `app/beerlist/beerList.component.ts`:

```typescript
import {Component} from '@angular/core';
import {FilterArrayPipe} from '../pipes/filter-array-pipe';
import {OrderByPipe} from '../pipes/orderby-pipe';

@Component({
    selector: 'beer-list',
    templateUrl: './app/beerlist/beerList.html',
    pipes: [FilterArrayPipe, OrderByPipe]
})

export class BeerList {
    orderProp = 'alcohol';
    beers = [
        {
            'alcohol': 6.8,
            'name': 'Affligem Blond',
            'description': 'Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable.'
        },
        {
            'alcohol': 8.5,
            'name': 'Affligem Tripel',
            'description': 'The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle.'
        },
        {
            'alcohol': 9.2,
            'name': 'Rochefort 8',
            'description': 'A dry but rich flavoured beer with complex fruity and spicy flavours.'
        },
        {
            'alcohol': 11.3,
            'name': 'Rochefort 10',
            'description': 'The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities.'
        },
        {
            'alcohol': 7,
            'name': 'Chimay Rouge',
            'description': 'This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature '
        }
    ];
}
```

This is a good time to talk about two-way data-binding. Notice that when the app is loaded in the browser, "Alcohol content" is selected in the drop down menu. This is because we set `orderProp` to `alcohol` in the controller. So the binding works in the direction from our model to the UI. Now if you select "Alphabetically" in the drop down menu, the model will be updated as well and the beers will be reordered. That is the data-binding doing its job in the opposite direction — from the UI to the model.

## Experiments ##


In the `beerList.component` controller, remove the statement that sets the `orderProp` value and you'll see that Angular will temporarily add a new "unknown" option to the drop-down list and the ordering will default to unordered/natural order.

Add an `{{orderProp}}` binding into the `beerList.html` template to display its current value as text.

Let's experiment with some of the [built-in Angular pipes](https://angular.io/docs/ts/latest/guide/pipes.html) and add the following bindings to `beerList.html`:

```html
{{ "lower cap string" | uppercase }}
{{ {foo: "bar", baz: 23} | json }}
{{ 1304375948024 | date }}
{{ 1304375948024 | date:"MM/dd/yyyy @ h:mma" }}

## Summary ##

Now that you have added list sorting, go to [step 5](../step-05) to learn about Angular services and how Angular uses dependency injection.