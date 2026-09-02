---
title: "Components, Props and State"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 4
description: "React — Components, Props and State."
---
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Component type: functional component and class component

### Function and Class Components

The simplest way to define a component is to write a JavaScript function:

```jsx
function Welcome(props) {

return <h1>Hello, {props.name}</h1>;

}
```
This **function** is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an ES6 **class** to define a component:

```jsx
class Welcome extends React.Component {
```
render() {

```jsx
return <h1>Hello, {this.props.name}</h1>;

}

}
```
The above two components are equivalent from React’s point of view.

Previously, we only encountered React elements that represent DOM tags:

```jsx
const element = <div />;
```
**However, elements can also represent user-defined components:**

```jsx
const element = <Welcome name="Sara" />;
```
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

**Note: Always start component names with a capital letter.**

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

| Functional | class |
| --- | --- |
| A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). | A class component requires you to extend from React. Component and create a render function that returns a React element. |
| There is no render method used in functional components. | It must have the render() method returning JSX (which is syntactically similar to HTML) |
| Functional components run from top to bottom and once the function is returned it can’t be kept alive. | The class component is instantiated and a different life cycle method is kept alive and is run and invoked depending on the phase of the class component. |
| Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI. | Also known as Stateful components because they implement logic and state. |
| Constructors are not used. | Constructor is used as it needs to store stat |
| Absence of 'this' keyword Mutated. Same object is override and old value will be gone Function App(){ } Stateless/ Dumb/ Presentational | 1. Non-Mutated. Every time a function runs it creates a new copy. class C1 extends React.components{ } const obj = new C1(); More feature rich Maintain their own private data – state Complex UI logic Stateful/ Smart/ Container |
| Provide lifecycle hooks | It has lifecycle methods |

### Props are Read-Only

**Props** allow you to **pass data** **from** a **parent** (wrapping) component **to** a **child** (embedded) component.

Whether you declare a component as a function or a class, **it must never modify its own props.**

It will **throw** **error** **“TypeError: Cannot assign to read only property ‘name’ of object ‘#Object’ ”**

Consider this sum function:

```jsx
function sum(a, b) {

return a + b;

}
```
**Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.**

In contrast, this function is **impure** because it changes its own input:

```jsx
function withdraw(account, amount) {

account.total -= amount;

}
```
React is pretty flexible but it has a single strict rule:

**All React components must act like pure functions with respect to their props.**

### State

**State of a component is an object that holds some information that may change over the lifetime of the component.** Whilst props allow you to pass data down the component tree (and hence trigger an UI update), **state** **is used to change the component, well, state from within. Changes to state also trigger an UI update.**

```jsx
class Clock extends React.Component {

constructor(props) {

super(props);

this.state = {date: new Date()};

}
```
render() {

```jsx
return (
```
<div>

<h1>Hello, world!</h1>

<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

</div>

```jsx
);

}

}
```
ReactDOM.render(

<Clock />,

document.getElementById('root')

```jsx
);
```
**AFter React 18,**

```jsx
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render( <Clock />);
```
### Lifting the state up

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “**lifting state up”**.

### Destructuring props and state using ES6

Destructuring in parameters. Suppose you are passing <FullName fname=”Rishabh” lname=”Sisodiya” />

then

| Before ES6 | After ES6 |
| --- | --- |
| function FullName( props ){ …. console.log( props.fname+” ”+props.lname ); ....} | function FullName( {fname, lname} ){ …. console.log( fname+” ”+lname ); .... } |

same with state as well.

### State vs Props

| Props | State |
| --- | --- |
| props get passed to the component Function parameters props are immutable props — Functional Components this.props — Class Components | state is managed within the component Variables declared in the function body state can be changed useState Hook— Functional Components this.state — Class Components |
