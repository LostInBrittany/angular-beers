# AngularBeer - AngularJS tutorial - Step 02 #

In this step we are going to make the web page dynamic — with AngularJS.

There are many ways to structure the code for an application.

The objective of this step is to dynamically generate a list of three beers from a block of JSON data.

## Views and templates ##

In Angular, the **view** is a projection of the model through the HTML **template**. This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.

The view component is constructed by Angular from this template:

`app/beerlist/beerList.html`:

```html
<ul>
    <li *ngFor="let beer of beers">
        <span>{{beer.name}}</span>
        <p>{{beer.description}}</p>
    </li>
</ul>
```


In the template we replaced the hard-coded beer list with the [NgFor directive](https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html) :

* The `*ngFor="let beer of beers"` attribute in the `<li>` tag is an Angular repeater directive. The repeater tells Angular to create a `<li>` element for each beer in the list using the `<li>` tag as the template.

* The expressions wrapped in curly braces (`{{beer.name}}` and `{{beer.description}}`) will be evaluated and replaced by the value of the expressions.

The Angular expressions in curly braces (`{{beer.name}}` and `{{beer.description}}`) denote bindings, which are referring to our application model, which is set up in our `beerList.component` component.

## Model and Controller #

The data model (a simple array of beers in object literal notation) is now instantiated within the `BeerList` component.

`app/beerlist/beerList.component.ts`:

```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'beer-list',
    templateUrl: './app/beerlist/beerList.html'
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

## Main module

Our application is loaded by a main module :

`app/main.ts`:

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```


`app/app.module.ts`:

```typescript
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BeerList} from "./beerlist/beerList.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [BeerList],
    bootstrap: [BeerList]
})
export class AppModule {
}
```

Here we declared a component called `BeerList` and registered it in an AngularJS module, `Main`.

Now we can insert our component inside our main page :

`index.html`:

```html
<body>
    <beer-list>Loading...</beer-list>
</body
```

Notice that our `<beer-list>` component (within the `<body>` tag) now specifies the `BeerList` component name.

Although the component is not yet doing very much, it plays a crucial role. By providing context for our data model, the component allows us to establish data-binding between the model and the view. We connected the dots between the presentation, data, and logic.

## Experiments ##

Add another binding to `beerList.html`. For example:

```html
<p>Total number of beers: {{beers.length}}</p>
```

Create a new model property in the component and bind to it from the template. For example:

```typescript
name = "World";
```

Then add a new binding to `beerList.html`:

```html
<p>Hello, {{name}}!</p>
```

Refresh your browser and verify that it says "Hello, World!".

Create a repeater in `beerList.html` that constructs a simple table:

```html
<table>
  <tr><th>row number</th></tr>
  <tr *ngFor="let i of [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i}}</td></tr>
</table>
```

Now, make the list 1-based by incrementing i by one in the binding:

```html
<table>
  <tr><th>row number</th></tr>
  <tr *ngFor="let i of [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i+1}}</td></tr>
</table>
```

Extra points: try and make an 8x8 table using an additional `*ngFor`.

## Summary ##

You now have a dynamic app that features separate model, view, and controller components.
Now, let's go to step 3 to learn how to add full text search to the app.