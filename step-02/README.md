# AngularBeer - AngularJS tutorial - Step 02 #

The objective of this step is to dynamically generate a list of three beers from a block of JSON data.

## Generating the `beer-list` component

In this step we are creating a new component, `BeerList`, that will render a list of beers.

Let's create the skeleton of the component using Angular CLI:

```bash
ng generate component BeerList
```

And a new component is generated :

```bash
$ ng generate component BeerList
  create src/app/beer-list/beer-list.component.css (0 bytes)
  create src/app/beer-list/beer-list.component.html (28 bytes)
  create src/app/beer-list/beer-list.component.spec.ts (643 bytes)
  create src/app/beer-list/beer-list.component.ts (280 bytes)
  update src/app/app.module.ts (408 bytes)
```

## Anatomy of a component

The `BeerList` component lives in the `beer-list` folder inside `angularbeers/src/app`. It is composed of four files:

- `beer-list.component.ts`: the definition and behavior of the component
- `beer-list.component.html`: the component template
- `beer-list.component.css`: the component style 
- `beer-list.component.spec.ts`: the component test specifications

## Editing the component definition

In `beer-list.component.ts` we are going to do some changes to adapt the component to our needs.

1. Modify the selector to make it `beer-list`. The selector css selector that identifies this component in a template.

1. Add the data model (a simple array of beers in object literal notation)


`angularbeers/src/app/beer-list/beer-list.component.ts`:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'beer-list',
templateUrl: './beer-list.component.html',
styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

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

constructor() { }

ngOnInit() {
}

}
```


## Views and templates

In Angular, the **view** is a projection of the model through the HTML **template**. This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.

The view component is constructed by Angular from this template:

`angularbeers/src/app/beer-list/beer-list.component.html`:

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


## Main module

Our application is bootstrapped as a browser application (a webapp) on `angularbeers/src/app/main.ts`:

```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```

And it's loaded using a main module, `angularbeers/src/app/app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Here we see that currently our app has two components, the main one (`AppComponent`) and our recently created `BeerList`.

Now we can insert `BeerList` inside the template of `AppComponent` instead of the hardcoded list of beers:

`angularbeers/src/app/app.component.html`:

```html
<div>
  <h1>
    Welcome to {{title}}!
  </h1>
  <beer-list></beer-list>
</div>  
```

Although the component is not yet doing very much, it plays a crucial role. By providing context for our data model, the component allows us to establish data-binding between the model and the view. We connected the dots between the presentation, data, and logic.

## Experiments ##

Add another binding to `beer-list.component.html`. For example:

```html
<p>Total number of beers: {{beers.length}}</p>
```

Create a new model property in the component and bind to it from the template. For example:

```typescript
name = "World";
```

Then add a new binding to `beer-list.component.html`:

```html
<p>Hello, {{name}}!</p>
```

Refresh your browser and verify that it says "Hello, World!".

Create a repeater in `beer-list.component.html` that constructs a simple table:

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
Now, let's go to [step 03](../step-03) to learn how to add full text search to the app.