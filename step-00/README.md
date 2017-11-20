# AngularBeer - Angular tutorial - Step 00

This is a preparatory step for the tutorial. Here you will install all the dependencies you will use in *Angular Beers*, and then you will initialize the project.

## npm or yarn? 

As explained in the general introduction, you will need a JavaScript package manager to grab and install the dependencies of
the project.

You can use both `npm` or `yarn` to install these dependencies, please choose the tool that suits you the best. If you don't know neither `npm` nor `yarn` we suggest you to simply use `npm`. 

> ## Are you behind a proxy?
>
> If you are behind a corporate or university proxy, you will need to configure it in your package manager in order to grab the dependencies you need.
>
> In `npm` you can define it using:
>
> ```
> npm config set proxy http://user:username@host:port
> npm config set https-proxy http://username:password@host:port 
> ```
>
> In `yarn` the process is similar:
>
> ```
> yarn config set proxy http://username:password@host:port
> yarn config set https-proxy http://username:password@host:port
> ```

## Install TypeScript

In `npm`:

```
npm install -g typescript
```

In `yarn`:

```
yarn global add typescript
```

Then you can verify it works:

```
tsc --version
```

## Install Angular CLI

In `npm`:

```
npm install -g @angular/cli
```

In `yarn`:

```
yarn global add @angular/cli
```

Then you can verify it works:

```
ng --version
```

## Create the *Angular Beers* project

In your work folder, use Angular CLI to generate a new `angularbeers` project:

```
ng new angularbeers
```

![ng new angularbeers](../assets/step-00_01.jpg)


## Serve the application

Go to the project directory and launch the server.

```
cd angularbeers
ng serve --open
```

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Using the `--open` (or just `-o`) option will automatically open your browser on `http://localhost:4200/`.

Your app greets you with a message:

![ng serve --open](../assets/step-00_02.jpg)

## Summary ##

You now have the dependencies you need for *Angular Beers*, and you have initialized the project.  You can go now to step 01 and begin to code...