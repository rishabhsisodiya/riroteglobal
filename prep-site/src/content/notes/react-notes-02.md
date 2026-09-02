---
title: "Intro to React"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 2
description: "React — Intro to React."
---
A JavaScript library for building User interface. React has component based architecture which lets you break down applications into small encapsulated parts which can then be composed to make complex UI.

### React is composable

We have small pieces that we can put together and make something larger or greater than individual pieces together.

### Declarative vs Imperative

A **declarative** style, like what react has, allows you to control flow and state in your application by saying "It should look like this". An **imperative** style turns that around and allows you to control your application by saying "This is what you should do".

The benefit of declarative is that you don't get bogged down in the implementation details of representing the state. You're delegating the organizational component of keeping your application views consistent so you just have to worry about state.

| Declarative | Imperative |
| --- | --- |
| root.render(<h1 className=”header”>Hello, React</h1>) | const h1 = document.createElement(“h1”); h1.textContent=”Hello, React”; h1.className = “header”; document.getElementById(“root”).appendChild(h1); |

### Data binding

Two type of data binding:

1.  One way data binding
2.  Two way data binding

**One-way** means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data.React achieves one-way data binding by using state and props.

**Two-way** data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component’s state, and changes in the state automatically update the UI. In React, two-way data binding is achieved using controlled components.

### Advantages

Advantages of React framework:-

-   **No server dependency:** React apps run in the browser. They don't run on the server. Now we don't have to wait for a server response to get a new page or to render something new.
-   **Code Splitting:** If we split up our web app or website into such components (We could have a Header component, a Sidebar component and then a headline in the Article Content component), we can build these building blocks. (These components) contain pieces of code. We don't have to build our entire web page as one bigger picture. We can build all these tiny things on their own.
-   This of course makes **working in teams easier**.
-   **Code Manageable:** But even if we're working alone, it makes it easy for us to keep our code manageable. If we change the headline later on, we only have to go into that component and update it; we don't have to find that code in our entire web page code.
-   **Reusability**: We can also easily reuse components. For example, if we have a list item component and we want to output a list of these list items, then we only have to write the code once and can then easily reuse it and this is important.
-   **React is declarative:**
    -   Tell React what you want and React will build the actual UI.
    -   React will handle efficiently updating and rendering of the components.
    -   DOM updates are handled gracefully in React

### React advantage over Angular

1.  **Data binding:** React works with **one-way data binding** whereas Angular operates using two-way data binding. Likewise, Angular uses real DOM while React relies upon virtual DOM.
2.  **React is faster** than angular since it relies upon Virtual DOM.
3.  **Flexibility and Freedom:** React has a diverse and vibrant environment that provides developers with the flexibility to create your applications. This makes it more popular than Angular.
4.  **Learning curve**: Reactjs allows you to easily learn and make an app in the React ecosystem if you are good with JavaScript.

### React Major Drawback

React also offers the facility to make seamless transitions between two versions. But, the front-end development **library relies heavily on the external libraries** which make it possible to update and migrate the third-party components. Besides, **the developers have to check all the time if the used third-party libraries are compatible with the recent versions of the JavaScript framework or not,** which increases the efforts of the developers.

### Babel

**Babel** is a **JS transpiler** that converts new JS code into old ones. It is a very flexible tool in terms of transpiling. One can easily add presets such as es2015, es2016, es2017, or env; so that Babel compiles them to ES5.
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

-   Transform syntax
-   Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
-   Source code transformations (codemods)

// Babel Input: ES2015 arrow function

```jsx
[1, 2, 3].map(n => n + 1);
```
// Babel Output: ES5 equivalent

\[1, 2, 3\].map(function(n) {

```jsx
return n + 1;

});
```

### Webpack

**Webpack** is a **modular build tool** that has two sets of functionality — Loaders and Plugins. Loaders transform the source code of a module. They allow you to pre-process files as you import or “load” them. For example, **style-loader** adds CSS to DOM using style tags. sass-loader compiles SASS files to CSS. babel-loader transpiles JS code given the presets. Plugins are the core of Webpack. It is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle. They can do things that loaders can’t. For example, there is a plugin called UglifyJS that minifies and uglifies the output of webpack. There is **plugin @babel/plugin-proposal-class-properties** plugin transforms static class properties as well as properties declared with the property initializer syntax.

### React Project using webpack

### Step 1: Create package.json file

cd ~

mkdir projectname

cd ~/projectname

// Creates package.json file

npm init –yes

### Step 2: Install react and react-dom

npm i react react-dom

### Step 3: Install Babel

Let's install babel and the required presets and plugins.

npm i -D @babel/preset-react @babel/preset-env @babel/core babel-loader @babel/plugin-proposal-class-properties

**@babel/preset-react** is preset for react,

**@babel/preset-env** is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms are needed by your target environment(s).

**@babel/core** contains the core functionality of Babel.

**babel-loader** will be used by webpack to transpile Modern JS into the JS code that browsers can understand.

Since all browsers don’t understand JavaScript’s static class’s properties features. **@babel/plugin-proposal-class-properties** plugin transforms static class properties as well as properties declared with the property initializer syntax.

### Step 4: Create a babel config file .babelrc

Here we tell babel to use @babel/preset-env target the last few versions of browsers and support them. This will ensure that when the browser is updated it will stop transpiling of the old browser version and will transpile for the new one.

modules: false means hey babel! don’t do anything with the modules, let webpack handle it.

We also tell webpack to use @babel/preset-react for React and @babel/plugin-proposal-class-properties to transform static class properties

{

```jsx
"presets": [
```
\[ "@babel/preset-env", {

```jsx
"modules": false,

"targets": {

"browsers": [
```
"last 2 Chrome versions",

"last 2 Firefox versions",

"last 2 Safari versions",

"last 2 iOS versions",

"last 1 Android version",

"last 1 ChromeAndroid version",

"ie 11"

\]

```jsx
}
```
} \],

"@babel/preset-react"

\],

```jsx
"plugins": [ "@babel/plugin-proposal-class-properties" ]

}
```
### Step 5: Install Webpack and Webpack Dev Server

npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin path

### Step 6: Create directories and files for the project

Create directories called src and public .Create a HTML file public/index.htm, entry filesrc/index.js and a component file src/App.js inside of it.

mkdir src public

touch src/index.js src/App.js public/index.html

### Step 7: Set up Webpack configuration file webpack.config.js

Here html-webpack-plugin will use your custom index.html that will be rendered by webpack-dev-server

Please note that if you don’t pass any param in new HTMLWebpackPlugin(), then thehtml-webpack-plugin plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.

Also add the style loader, css loader and file-loader for styles and images. As webpack understands JavaScript so we need to convert the styles and images in JavaScript using these loaders

npm install style-loader css-loader file-loader

```jsx
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const path = require( 'path' );

module.exports = {

context: __dirname,

entry: './src/index.js',

output: {

path: path.resolve( __dirname, 'dist' ),

filename: 'main.js',

publicPath: '/',
```
},

```jsx
devServer: {

historyApiFallback: true
```
},

```jsx
module: {

rules: [
```
{

```jsx
test: /\.js$/,

use: 'babel-loader',
```
},

{

```jsx
test: /\.css$/,

use: ['style-loader', 'css-loader'],
```
},

{

```jsx
test: /\.(png|j?g|svg|gif)?$/,

use: 'file-loader'

}
```
\]

},

```jsx
plugins: [
```
new HtmlWebPackPlugin({

```jsx
template: path.resolve( __dirname, 'public/index.html' ),

filename: 'index.html'
```
})

\]

```jsx
};
```
Notice that we have also passed historyApiFallbackto true and public path to ‘/’

What it does is that it redirects all server requests to /index.html which will download all the JS resources and allow React Router to take it from there. If we don’t do this then when you add routes later using react-router or @reach/router and if you access a route like /dashboard, the browser will make a GET request to /dashboard which will fail, as you have no logic on the server to handle that request.

So publicPath allows you to specify the base path for all the assets within your application. historyAPIFallback will redirect 404s to /index.html.

### Step 8: Create a React Component src/App.js

Create a class inside src/App.js and export it

```jsx
import React from 'react';

class App extends React.Component {
```
render() {

```jsx
return(
```
<div>

My App Component

</div>

```jsx
);

}

}

export default App
```
### Step 9: Create a div#root inside public/index.html

<!DOCTYPE html>

`<html lang="en">`

`<head>`

`<meta charset="UTF-8">`

<title>React App</title>

`</head>`

`<body>`

<div id="root"></div>

`<script type="text/javascript" src="main.js"></script></body>`

`</html>`

### Step 10: Insert App.js component into the DOM

Now let's insert the App.js component into div with the id root that exists public/index.html file

// src/index.js

```jsx
import React from 'react';

import ReactDOM from 'react-dom';

import App from "./App";

ReactDOM.render( <App/>, document.getElementById('root') );
```
### Step 11: Add scripts in the package.json

```jsx
"scripts": {
```
"webpack-dev-server": "webpack-dev-server",

```jsx
"dev": "webpack-dev-server --mode=development",

"prod": "webpack --mode=production"
```
},

Now run the webpack dev server.

npm run dev

### React Project using create-react-app package

npx create-react-app project_name

**npx:** it is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

### Understand Package.json

**package.json** is used to store the metadata associated with the project as well as to store the list of dependency packages. In order to add dependency packages to your projects, you need to create a package.json file. The file makes it easy for others to manage and install the packages associated with the project.

A package.json file:

-   lists the packages your project depends on
-   specifies versions of a package that your project can use.
-   makes your build reproducible, and therefore easier to share with other developers.

A package.json file may look similar to this:![](/notes-img/react-notes/img-003.webp)

-   **name** is the name of your app, which you give while executing create-react-app<name-of-application>. You can give any name of your choice to the app, the only condition being that it should be in lowercase. It may also contain hyphens and underscores.
-   **version** is the current version of your app. The version field must be of the form x.x.x. By default, create-react-app initializes it as 0.1.0
-   "**private**": true is one of the most crucial attributes. The problem is that if you set private as true in your package.json, then npm will refuse to publish it within the npm ecosystem. This is a way to prevent the accidental publication of private repositories.
-   **dependencies** contains all the required node modules and versions required for the application in production. In the snapshot above, it contains three dependencies, which allows us to use react, react-dom and react-scripts in our JavaScript. react-scripts provide a set of useful development scripts for working with React.

In the screenshot above, the react version is specified as ^16.6.3, which means that npm will install the most recent major version matching 16.x.x. In contrast, if you see something like ~5.6.7 in package.json, it means that it will install the most recent minor version matching 5.6.x.

In order to add a package under dependencies, while installing, use --save.

Since npx create-react-app is very slow and installs dependencies which are not required.

### React Project using vite package

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

-   A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
-   A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production

npm create vite@latest.
Then follow the prompts!
