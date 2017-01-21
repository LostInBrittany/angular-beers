# Angular Beers - Angular tutorial #

> This is a tutorial for [Angular](https://angular.io/). If you want to see the original one, for [AngularJS](https://angularjs.org/) 1.x,   
> please go to the [`angularjs-1.x` branch](https://github.com/LostInBrittany/angular-beers/tree/angularjs-1.x)

Some years ago we build a tutorial for Angular JS, [AngularBeers](https://github.com/LostInBrittany/angular-beers/tree/angularjs-1.x), as an alternative to the excellent [official AngularJS tutorial](https://docs.angularjs.org/tutorial/). It's time now to actualize the tutorial to Angular 2, or simply [Angular](https://angular.io/).

We teach web-development in an Engineering School with a rather restrictive network. In order to explain Angular to our students, we needed a tutorial that could be played without network access.

So we decided to build a tutorial that could be done even behind a very restrictive proxy. And then we thought about the subject, we decided to keep the same subject that the first one: beers!

![Screenshot](assets/screenshot-01.jpg)

## What are the objectives of this tutorial ##

Follow the tutorial to see how Angular makes browsers smarter — without the use of native extensions or plug-ins:

+ See examples of how to use client-side data binding to build dynamic views of data that change immediately in response to user actions.
+ See how Angular keeps your views in sync with your data without the need for DOM manipulation.
+ Learn how to use dependency injection and services to make common web tasks, such as getting data into your app, easier.

When you finish the tutorial you will be able to:

+ Create a dynamic application that works in all modern browsers.
+ Use data binding to wire up your data model to your views.
+ Move application logic out of the template and into Controllers.
+ Get data from a server using Angular services.

The tutorial guides you through the entire process of building a simple application, including writing and running unit and end-to-end tests. Experiments at the end of each step provide suggestions for you to learn more about AngularJS and the application you are building.

You can go through the whole tutorial in a couple of hours or you may want to spend a pleasant day really digging into it. If you're looking for a shorter introduction to Angular, check out the [Quickstart](https://angular.io/docs/ts/latest/quickstart.html).

![Screenshot](assets/screenshot-02.jpg)

## What do I need to use this tutorial ##

Besides a web browser and a text-editor (we suggest the excellent [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com/)), you will need [NodeJS and npm](https://nodejs.org). NodeJS and npm are essential to modern web development with Angular and other platforms. Node powers client development and build tools. The npm package manager, itself a node application, installs JavaScript libraries.

[Get them now](https://docs.npmjs.com/getting-started/installing-node) if they're not already installed on your machine.

Verify that you are running `node v4.x.x` or higher and `npm 3.x.x` or higher by running the commands `node -v` and `npm -v` in a terminal/console window. Older versions produce errors.

If you have [NodeJS](http://nodejs.org) in your system, we have put a minimalist JavaScript web-server on `./scripts/web-server.js`. To see the app running in a browser, open a separate terminal/command line tab or window, go to the project directory and then run `node ./scripts/web-server.js` to start the web server. Now, open a browser window for the app and navigate to http://localhost:8000/app/index.html to see the current state of the app.

## How is the tutorial organized ##

As the computers used for the course haven't Git, we have structured the project to allow a Git-less use. The `app` directory is the main directory of the project, the working version of the code. The tutorial is divided in steps, each one in its own directory:

1. [Static Template](./step-01/)
1. [Angular Templates](./step-02/)
1. [Filtering Repeaters and Pipes](./step-03/)
1. [Two-way Data Binding and Pipes](./step-04/)
1. [XHRs & Dependency Injection](./step-05/)
1. [Templating Links & Images](./step-06/)
1. [Routing & Multiple Views](./step-07/)
1. [More Templating](./step-08/)
1. [Event Handlers](./step-09)
1. [Components, components, components](./step-10)
1. [Applying Animations](./step-11)

In each step directory you have a README file that explain the objective of the step, that you will do in the working directory `app`. If you have problems or if you get lost, you also have the solution of each step in the step directories.
