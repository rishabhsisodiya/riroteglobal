---
title: "React Interview Questions"
track: "react"
kind: "questions"
updated: "2026-09-02"
source: "React JS Interview Question.docx"
draft: false
order: 1
description: "React Interview Questions — study notes."
---
[https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react](https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react)

## What is React?

React is frontend Javascript library which follows component based approach and developed by Facebook in 2011. It allows us to create reusable UI components.

## What are the features of React?

-   Uses virtual DOM
-   Declarative: Developers describe what the UI should look like, and React efficiently updates and renders components when data changes.
-   Does server side rendering
-   Follows unidirectional data flow i.e. one way binding
-   Backward Compatibility ensuring minimal disruptions during upgrades.

## List some of the major advantages of React?

Advantages of React framework:-

-   No server dependency: React apps run in the browser. So no waiting for server response.
-   Code Splitting & Code Manageable
-   Increase applications performance
-   can be used as client as well server side.
-   Readability
-   Easy integration
-   Reusability
-   Easy Learning curve
-   Flexibility of using other libraries with it.

## What are the limitations of React?

-   Not a full scale framework i.e. its just view
-   Dependency on other libraries
-   SEO Challenges: React applications can face **SEO challenges if not properly configured**, as search engine bots may struggle with client-side rendering. Although solutions like Next.js (for server-side rendering) help mitigate this, they add complexity
-   **Rendering Performance:** While React’s virtual DOM is efficient, **improper use of state and props or unnecessary re-renders can degrade performance**, requiring optimization techniques like React.memo or useMemo.
-   **State Management Complexity:** As applications grow, **managing state can become complex,** requiring additional libraries like Redux, Zustand, or MobX, which add to the learning curve and maintenance effort.

## What are major problems with the MVC framework?

-   DOM manipulation was very expensive
-   Slow and inefficient
-   Memory wastage

Because of circular dependencies, complicated models were created around models and views.

## How is React different from Angular?

### TOPIC

### React

### Angular

| --- | --- | ---
Architecture

View

MVC

| --- | --- | ---
Rendering

SSR &CSR

CSR

| --- | --- | ---
DOM

Virtual DOM

Real DOM

| --- | --- | ---
Data Binding

One way data binding
<input

type="text"

value={name}

### onChange={(e) => setName(e.target.value)}

/>

Two way data binding
<input **\[(ngModel)\]="name"** />

| --- | --- | ---
Debugging

Compile time

Run time

| --- | --- | ---
Developer

Facebook

Google

| --- | --- | ---
Dependency on other libraries

Dependent

Not dependent

| --- | --- | ---
## What is Single Page Application

A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

## What is the difference between Declarative and Imperative?

In React, the terms **declarative** and **imperative** refer to two different approaches for managing the user interface (UI) and application state.

**Declarative Programming:** In declarative programming, you describe what the UI should look like based on the state, and React takes care of how to update the UI when the state changes. This approach is more intuitive and easier to maintain because you focus on the desired outcome rather than the detailed steps to achieve it.

**Example:** React automatically updates the UI when the count state changes by rerendering the component.

**Imperative Programming:** In imperative programming, you define **how** to achieve a particular outcome by specifying each step or action. This means you explicitly tell React how to manipulate the DOM, rather than just describing what the DOM should look like based on the state.

**Example:** This is more imperative because we specify exactly **how** to interact with the DOM element (via inputRef.current.focus()).

**Key Differences:**

### Declarative

### Imperative

| --- | ---
Describes what the UI should look like

Describes how to update the UI

| --- | ---
React handles UI updates automatically

You manually manipulate the DOM

| --- | ---
Easier to maintain and reason about

More complex and error-prone for larger apps

| --- | ---
```jsx
Example: JSX and state management
```

```jsx
Example: Direct DOM manipulation (e.g., refs)
```

| --- | ---
## What is babel?

A babel is a JS transpile which converts the new JS code to the old one.

## What is Webpack?

Webpack is a modular build tool that has two sets of functionality — Loaders and Plugins. Loaders transform the source code of a module. They allow you to pre-process files as you import or “load” them. For example, style-loader adds CSS to DOM using style tags. sass-loader compiles SASS files to CSS. babel-loader transpiles JS code given the presets. Plugins are the core of Webpack. It is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle. They can do things that loaders can’t. For example, there is a plugin called UglifyJS that minifies and uglifies the output of webpack. There is plugin @babel/plugin-proposal-class-properties plugin transforms static class properties as well as properties declared with the property initializer syntax.

## Comparison of CRA and vite

Here's a comparison between **Create React App (CRA)** and **Vite** in a table format:

### Feature

### Create React App (CRA)

### Vite

| --- | --- | ---
### Build Tool

Uses Webpack for bundling.

Uses ESBuild for bundling, much faster.

| --- | --- | ---
### Development Server

Webpack Dev Server, slower rebuilds.

Fast, native ES module-based development server.

| --- | --- | ---
### Build Speed

Slower, especially for large projects.

Faster build times due to ESBuild.

| --- | --- | ---
### Configuration

Zero-config but requires ejecting for advanced customization.

Simpler, more flexible, and easier to configure.

| --- | --- | ---
### Legacy Project Compatibility

Works well with older React projects.

Better suited for modern React projects.

| --- | --- | ---
### Community & Maintenance

Large, established community but development is slowing down.

Actively maintained, rapidly gaining popularity.

| --- | --- | ---
### Use Case

Good for simpler projects or when Webpack is needed.

Best for modern, high-performance React apps.

| --- | --- | ---
## Why is ESBuild is faster compare to webpack

**ESBuild** is faster because it is written in Go, is focused on a single task (bundling and minification), and leverages high-performance techniques like parallelism and efficient code parsing.

**Webpack** is more flexible and feature-rich but slower due to its complexity, use of JavaScript, and reliance on plugins/loaders for various tasks.

## What is a source Map?

**A source map is a file that maps the minified or transpiled code (like JavaScript or CSS) back to the original source code, enabling easier debugging**. It helps developers to work with the original, untransformed code even though they are executing the optimized or bundled version.

**How Does It Work?**

-   Transpiling/Bundling: When you transpile (e.g., TypeScript to JavaScript) or bundle (e.g., combining multiple JS files), the code is often minified, which reduces its size but makes it harder to read.
-   Source Map Generation: A source map file is generated by the build tool. This file contains the mapping information between the transformed code and the original source files. It typically has a .map extension (e.g., main.js.map).
-   Mapping: The source map links the transformed code to the original code. It allows debugging tools to show the unminified source during debugging, even if the browser is executing the minified or transpiled version.

## What is JSX ?

JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.

## Why can't browsers read JSX?

-   JSX is not regular JavaScript. It is a combination of html and javascript file.
-   Browser can read Javascript object only
-   JSX file is converted to JS object by JSX transformer like Babel, before reaching Browser

## How React syntax changed from ES5 to ES6?

### ES5

### ES6

| --- | ---
### Using create-react-class module

e.g.

```jsx
var createReactClass = require('create-react-class');

var Greeting = createReactClass({

render: function() {

return <h1>Hello, {this.props.name}</h1>;

}

});
```

### Using React.Component

**e.g.**

```jsx
class Greeting extends React.Component {
```
render() {

```jsx
return <h1>Hello, {this.props.name}</h1>;

}

}
```

| --- | ---
you need to define getDefaultProps() as a function on the passed object.

defaultProps is defined as a property on the component itself

| --- | ---
you have to provide a separate getInitialState method that returns the initial state

you can define the initial state by assigning this.state in the constructor:

| --- | ---
By default it binds all methods.

methods don’t automatically bind ‘this’ to the instance. You’ll have to explicitly use .bind(this) in the constructor

| --- | ---
## What is the arrow function? How is it used?

Arrow functions allow us to write shorter function syntax. They are also called fat arrow functions. With arrow functions this keyword always represents the object that defined the arrow function. Because of this, it allows to bind the context of components properly since auto binding is not available by default in ES6.

## What do you understand from ‘In React, Everything is a component. ’?

-   Components are the building blocks of React application's Ul.
-   Components splits the Ul into independent, reusable pieces, and renders each piece independently
-   JavaScript functions which takes In arbitrary Inputs and returns HTML representation.

## What is the difference between createElement and cloneElement?

JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.

## What is the difference between Element and Component?

An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Creating a React element is cheap. Once an element is created, it is never mutated. Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output.

## Difference between function and class component

### Functional

### class

| --- | ---
A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).

A class component requires you to extend from React. Component and create a render function that returns a React element.

| --- | ---
There is no render method used in functional components.

It must have the render() method returning JSX (which is syntactically similar to HTML)

| --- | ---
Functional components run from top to bottom and once the function is returned it can’t be kept alive.

The class component is instantiated and a different life cycle method is kept alive and is run and invoked depending on the phase of the class component.

| --- | ---
Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI.

Also known as Stateful components because they implement logic and state.

| --- | ---
Constructors are not used.

Constructor is used as it needs to store stat

| --- | ---
Provide lifecycle hooks

It has lifecycle methods

| --- | ---
## When to use a Class Component over a Function Component?

**If the component needs state or lifecycle methods then use the class component otherwise use the function component.** However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in the class component right in your function component. **Apart from that basic difference now is In classes, the state is always an object. With the useState hook, the state doesn't have to be an object. There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate, getDerivedStateFromError and componentDidCatch lifecycles yet, but they are planning to add them soon**. It is an early time for Hooks, and some third-party libraries might not be compatible with Hooks at the moment.

## How do you modularize the code in React?

By using the export and import properties we can write the components separately in different files.

## What is the purpose of render() in React?

It returns a single React element which is the representation of native DOM component and it is the only required method in the component. It should be a pure function.

## What is state and props? What’s the difference between them

**Props** allow you to pass data from a parent (wrapping) component to a child (embedded) component. Whether you declare a component as a function or a class, it must never modify its own props. It will throw error “TypeError: Cannot assign to read only property ‘name’ of object ‘#Object’ ”
**State** of a component is an object that holds some information that may change over the lifetime of the component. Whilst props allow you to pass data down the component tree (and **hence trigger an UI update**), state is used to change the component, well, state from within. **Changes to state also trigger an UI update.**

### Feature

### State

### Props

| --- | --- | ---
### Definition

Component-specific data

Data passed from parent to child component

| --- | --- | ---
### Mutability

Mutable (updated with setState/useState)

Immutable (read-only)

| --- | --- | ---
### Scope

Local to the component

Shared between components

| --- | --- | ---
### Responsibility

Managed within the component itself

Managed by the parent component

| --- | --- | ---
### Usage

For dynamic, interactive data

For passing static or configuration data

| --- | --- | ---
## What are the ways to create the state?

Here are the ways to create state in a React app:

1.  **Using useState Hook** (Local state in functional components).
2.  **Using useReducer Hook** (Complex state logic or state transitions).
3.  **Using useContext Hook** (Sharing global state across components).
4.  **Using Redux** (Centralized state management for large applications).
5.  **Using useRef** (Persistent state that doesn’t trigger re-renders).
6.  **Using Third-Party Libraries** (e.g., Recoil, MobX, Zustand, etc.).

## What is the purpose of using super constructors with props argument?

A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason for passing props parameter to super() call is **to access this.props** in your child constructors and if you do not pass props in super() then this.props will be undefined.

```jsx
class MyComponent extends React.Component {

constructor(props) {
```
super(props)

console.log(this.props) // prints { name: 'John', age: 42 }

}}

## What would be the common mistake of function being called every time the component renders?

**You need to make sure that function is not being called while passing the function as a parameter**.

render() {

// Wrong: handleClick is called instead of passed as a reference!

```jsx
return <button onClick={**this.handleClick()**}>{'Click
```
Me'}</button> }

Instead, pass the function itself without parenthesis:

render() {

// Correct: handleClick is passed as a reference!

```jsx
return <button onClick={**this**.**handleClick**}>{'Click
```
Me'}</button> }

## How to use setState() correctly?

-   If you do not use setState method for updating state value then UI update will not happen.
-   Callback in setState (to use updated state’s value just after setState):

```jsx
increment = () => {
```
### this.setState(

**{count: this.state.count + 1},**

**()=> console.log('callback in setState for immediate state change ',this.state.count)**

**);**

// below console.log will not print updated count value

```jsx
console.log(this.state.count);

};
```

-   To update state based on prev state : React group multiple setState call into single update for better performance

Here in the code below five increment() calls updated to setState in incrementFive() will be clubbed into one. Updated value doesn’t carry over between the different calls.

```jsx
increment = () => {
```
this.setState(

### (prevState) => ({ count: prevState.count + 1 })

```jsx
);

};
```

**Why do we need to bind event handlers?**

```jsx
import React, { Component } from "react";

class Counter extends Component {

state = {

count: 0,

};
```
### increment(){

### this.setState({

### count: this.state.count + 1

**});**

### console.log(this.state.count);

**}**

render() {

```jsx
return (
```
<div>

```jsx
Count: {this.state.count}
```
<button onClick=**{this.increment}**\>Increment</button>

</div>

```jsx
);

}

}

export default Counter;
```

Above code will throw an error **Uncaught TypeError: Cannot read property 'setState' of undefined.**

Because increment() method does not know this.setState() as by default it will refer to its own ‘this’. So If we have setState() method inside increment then we can use it but here setState is not available inside increment so we need to pass ‘this’ so that increment method can refer to.

## What are the ways of binding methods ?

1.  **Bind**: - An object to which _this_ keyword can refer inside the new function. This controls what _this_ inside the function will refer to and by binding it to _this_ here.

Increment(){

this.setState({

```jsx
count: this.state.count + 1

});

}
```
<button onClick={**this.increment.bind(this)**}>Increment</button>

**Above code is not efficient, because:**

-   **Efficiency**: This creates a new function every time the component re-renders because .bind(this) generates a new bound function.
-   **Memory Usage:** It can lead to unnecessary memory usage and performance issues in large-scale applications or components with frequent updates.
-   **Readability:** Makes the code less clean and harder to follow.

1.  Using **Arrow function : As Arrow function doesn't have its own ‘this’. So it will refer to its parent lexical environment**

Increment(){

this.setState({

```jsx
count: this.state.count + 1

});

}

<button onClick={ () => **this.increment()**}>Increment</button>
```
**Above code is not efficient, because:**

-   **Efficiency:** Similar to Method 1, a new arrow function is created on every re-render.
-   **Memory Usage:** It has the same memory concerns as Method 1.
-   **Readability:** Slightly cleaner than .bind(this) but still less optimal.

1.  Binding in constructor :

    ```jsx
    constructor(){
    ```
….

### this.increment= this.increment.bind(this)

```jsx
}
```
Increment(){

this.setState({

```jsx
count: this.state.count + 1

});

}
```
<button onClick={**this.increment**}>Increment</button>

**Above code is efficient compare to above 2 approach, because:**

-   **Efficiency**: This binds the method once during the component initialization. It avoids creating a new function on every render.
-   **Memory Usage:** More efficient than Methods 1 and 2.
-   **Readability**: Cleaner than Methods 1 and 2, but the need for manual binding can clutter the constructor if multiple methods require binding.

1.  **Using class property approach** : Use arrow function outside constructor

    ```jsx
    constructor(){ ….}

    increment = () => {
    ```
this.setState({

```jsx
count: this.state.count + 1

});

};
```
<button onClick={**this.increment**}>Increment</button>

**Above code is most efficient and best approach , because:**

-   **Efficiency**: The method is bound as a property of the class using an arrow function. This ensures this always refers to the class instance without needing explicit binding or function creation during rendering.
-   **Memory Usage:** Efficient because the function is not recreated on every render.
-   **Modern Syntax:** It's the cleanest and most concise way to handle method binding, aligning with modern JavaScript/React standards.
-   **Readability**: Highly readable and avoids boilerplate code in the constructor.

### Implications of Class Property Approach on Unit Testing

### Aspect

### Class Property Approach

### Constructor Binding (bind())

| --- | --- | ---
### Memory Efficiency

Each instance holds its own copy

Small callback stored per instance

| --- | --- | ---
### Method Location

Defined on the instance

Defined on the prototype

| --- | --- | ---
### Performance Impact

Negligible in most cases

Slight edge in memory-critical apps

| --- | --- | ---
### Syntax/Readability

Cleaner, modern syntax

Verbose, slightly cluttered

| --- | --- | ---
### Testing Compatibility

Harder to spy/stub via prototype

Easy to spy/stub on prototype

| --- | --- | ---
## What is Virtual DOM?

The Virtual DOM (VDOM) is an in-memory representation of Real DOM (or lightweight JavaScript object which is a copy of Real DOM).

## Why do we use virtual DOM instead of real DOM for comparison?

1.  **Performance Optimization**:
    -   Manipulating the real DOM is slow due to re-rendering, style recalculations, and layout updates.
    -   The virtual DOM minimizes real DOM updates by computing changes in memory first.
2.  **Efficient Updates**:
    -   React calculates the differences between the old and new virtual DOM (diffing) and applies only the minimal updates to the real DOM.
3.  **Batching**:
    -   React batches multiple changes together before updating the real DOM, reducing redundant operations.

Using the virtual DOM ensures faster, smoother, and more efficient UI updates.

## Can we see virtual DOM?

No, you cannot directly "see" the virtual DOM because it is an abstraction implemented in memory as JavaScript objects. It does not exist as a visual representation like the real DOM rendered by the browser. However, you can inspect its behavior or representation indirectly:

You cannot directly see the **virtual DOM**, but you can observe its behavior indirectly through these methods:

1.  **React Developer Tools**:
    -   Inspect the React component tree, which represents the virtual DOM structure.
2.  **Console Logs**:
    ```jsx
        -   Log React elements to see their JavaScript object representation.
            Example: console.log(<div>Hello</div>);
    ```
3.  **React Profiler**:
    -   Monitor updates and changes in the virtual DOM using the Profiler tool in React DevTools.
4.  **Debugging with Hooks**:
    -   Use useEffect or useLayoutEffect to track component updates tied to the virtual DOM.

The virtual DOM is an in-memory abstraction, so it’s not directly visible like the real DOM.

## What is the difference between Shadow DOM and Virtual DOM?

The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

## What is React Fiber?

React Fiber is the **reconciliation algorithm** used in React for rendering and updating the user interface. Introduced in React 16, Fiber is a significant re-architecture of React's rendering engine, designed to improve performance and flexibility.

**Key Features of React Fiber:**

1.  **Incremental Rendering (Time Slicing):** Fiber breaks rendering work into small units and prioritizes these tasks, allowing React to pause and resume work. This makes React more responsive by enabling it to manage updates smoothly, especially in complex applications.
2.  **Concurrency:** Fiber introduces concurrency to React, enabling multiple tasks to be worked on simultaneously. For example, while processing a large UI update, React can still handle high-priority tasks like user input.
3.  **Prioritization of Updates:** React Fiber categorizes updates into three priorities:
    -   **High Priority:** User interactions (e.g., typing, clicking).
    -   **Low Priority:** Animation and rendering updates.
    -   **Idle Priority:** Background tasks that are non-urgent.
4.  **Better Error Handling:** With Fiber, React includes improved error boundaries, allowing developers to catch rendering errors and handle them gracefully.
5.  **Backwards Compatibility:** React Fiber is fully compatible with previous React code. It works under the hood, so developers don't need to rewrite their applications.
6.  **Improved Reconciliation:** React Fiber optimizes the process of comparing the new and old Virtual DOM trees, ensuring that updates are applied efficiently.

**How React Fiber Works:**

Fiber uses a **work loop** mechanism where it splits the rendering work into chunks and processes them incrementally:

-   During each loop, React evaluates what work is most urgent and performs it.
-   If a higher-priority task arises, React can pause the current task, handle the new one, and return to the previous task later.

**Advantages of React Fiber:**

-   Enhanced responsiveness for UIs.
-   Smooth handling of animations and gestures.
-   Improved rendering performance in complex applications.
-   More flexibility in scheduling tasks.

Fiber laid the foundation for many React features, including **Concurrent Mode** and **Suspense**, enabling modern React applications to handle large-scale updates efficiently.

## How does Virtual DOM work?

The Virtual DOM works in three simple steps.

1\. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

2\. Then the difference between the previous DOM representation and the new one is calculated.

3\. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

## What is Reconciliation ?

**Reconciliation** is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component.

## What is the Diffing Algorithm?

When diffing two trees, React first compares the root elements, with behavior varying by type.

**List without Key Attribute
![](/notes-img/react-questions/img-001.webp)**Consider a list with two items, _Bruce_ and _Clark_. Adding an item at the end, React iterates both lists, comparing items one by one. Finding no difference in the first two items, React inserts the third item directly, efficiently updating the tree without rebuilding it.

![](/notes-img/react-questions/img-002.webp)However, inserting an item at the beginning results in React mismatching all items, mutating every child and causing inefficiency.

**List with Key Attribute
![](/notes-img/react-questions/img-003.webp)**When items have unique keys, React uses them to match children across trees. For instance, if a new item (key=3) is added at the top, React identifies it as new and preserves the subtrees for items with keys 1 and 2, ensuring efficient updates.

## What could be the issues with using index as Key?

1.  Initially, we have 3 items, each with an index as its key (Refer 1st screenshot):![](/notes-img/react-questions/img-004.webp)
    -   Key=0 has a value of 1.
    -   Key=1 has a value of 2.
    -   Key=2 has a value of 3.
2.  When a new item is inserted at the beginning (Refer 2nd Screenshot):
    -   The new item is assigned key=0.
    -   The keys of existing elements are incremented by 1.
3.  During UI updates:
    -   React identifies the previous elements by their keys (key=0, key=1, key=2).
    -   React reuses these elements and assigns the new item a key=3.
4.  This can cause misalignment:
    -   The original values remain associated with their old keys.
    -   This mismatch can lead to sorting issues.

## What are the rules covered by the diffing algorithm?

### Rule

### Description

| --- | ---
### Same Type Comparison

Elements of the same type are compared, others are replaced.

| --- | ---
### Use of Keys

Keys in lists help React identify which items have changed, been added, or removed.

| --- | ---
### Depth-First Reconciliation

React performs reconciliation top-down and left-to-right in a tree-like manner.

| --- | ---
### Component Reuse

Components with unchanged type and props are reused to avoid unnecessary re-renders.

| --- | ---
### Children Indexing

Children are reconciled by index if no keys are provided.

| --- | ---
### Efficient Diffing of Components

Class components and functional components are updated efficiently by comparing rendered output.

| --- | ---
### Batched Updates

State and props updates are batched together for optimal performance.

| --- | ---
### Hooks Handling

React ensures that hooks follow the rules and maintain state across re-renders.

| --- | ---
## What are controlled components?

Controlled Components in React are components where the form data is handled by the React state. Instead of relying on the DOM to manage the form’s state, React takes control of the input values by linking them to the component's state via props.

**Key Features of Controlled Components:**

1.  **Value Driven by State**: The value of the input field is always determined by the component's state.
2.  **Single Source of Truth**: The state acts as the single source of truth for the input value.
3.  **Event Handling**: Changes to the input field are handled via event listeners (e.g., onChange) that update the state.

## How to set state with a dynamic key name?

If you are using **ES6** or the Babel transpiler to transform your JSX code then you can accomplish this with **computed property names.**

handleInputChange(event) {

this.setState({ **\[event.target.id\]**: event.target.value })

```jsx
}
```

## What are Component Lifecycle Methods?

1.  **Mounting:** When an instance of a component is being created and inserted into the DOM. It uses **constructor, static getDerivedStateFromProps, render and componentDidMount**
2.  **Updating:** When a component is being re-rendered as a result of changes to either its props or state. It uses **static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate.**
3.  **Unmounting:** When a component is being removed from the DOM. It uses **componentWillUnmount**.
4.  **Error Handling:** When there is an error during rendering, in a lifecycle method, or in the constructor of any child component. It uses static **getDerivedStateFromError and cornponentDidCatch.**

## What are Mounting LifeCycle Methods?

1.  **Constructor(props)**

    ```jsx
    Syntax: **constructor(props)**
    ```
A special function that will **get called whenever a new component is created**. It is used for **initializing state and binding the event handler** and **Do not cause Side effects e.g. HTTP requests** (we should not use http requests in constructors ).

**Note: use super(props) as the first line, directly overwrite this.state.**

1.  **static getDerivedStateFromProps(nextProps, state)**

It is called **when the state of the component depends upon change in the props over time**. It is used when the initial state of a component of props being passed in the component. Since it is static it **does not have access to this keyword** in this method. So **we cannot call this.setState** within this method and instead it simply **returns the state.** **Do not cause** S**ide effects e.g. HTTP requests.**
static getDerivedStateFromProps(nextProps, prevState) {

if (nextProps.initialValue !== prevState.derivedValue) {

```jsx
return { derivedValue: nextProps.initialValue };

}

return null; // No state update needed

}
```
1.  **render()**

It is the only **required method**. It **reads props and state and returns JSX**. Here **do not change state or interact with DOM or make ajax calls.** Children components lifecycle methods are also executed.

1.  **componentDidMount ()**

This method is invoked **immediately after a component** and all its children components have been **rendered** to the DOM. **Perfect place to cause side effects like interact with data or perform Ajax calls.**

## What are updating LifeCycle Methods

1.  **static getDerivedStateFromProps(nextProps, state)**

It is **called every time when a component is re-rendered.** It is used to set state directly and Do not cause side effects.

1.  **shouldComponentUpdate(nextProps, nextState)**

It dictates if the component should re-render or not. Default behavior is by returning false. It is used for performance optimization.

shouldComponentUpdate(nextProps, nextState) {

if (

nextProps.position.x === this.props.position.x &&

nextProps.position.y === this.props.position.y &&

nextProps.size.width === this.props.size.width &&

nextProps.size.height === this.props.size.height &&

nextState.isHovered === this.state.isHovered

) {

// Nothing has changed, so a re-render is unnecessary

```jsx
return false;

}

return true;

}
```
1.  **render()**

It is the only required method. It reads props and state and returns JSX. Here do not change state or interact with DOM or make ajax calls. Children components lifecycle methods are also executed.

1.  **getSnapshotBeforeUpdate(prevProps, prevState)**

This method is **called right before the changes from the virtual DOM are to be reflected in the DOM. It is used for capturing some information from DOM.** Method **will either return a null or return a value**. Returned value will be passed as the third parameter to the next method.

getSnapshotBeforeUpdate(prevProps, prevState) {

// Are we adding new items to the list?

// Capture the scroll position so we can adjust the scroll later.

if (prevProps.list.length < this.props.list.length) {

```jsx
const list = this.listRef.current;

return list.scrollHeight - list.scrollTop;

}

return null;

}
```
In the above example, it is important to read the scrollHeight property directly in getSnapshotBeforeUpdate. It is not safe to read it in render, UNSAFE_componentWillReceiveProps, or UNSAFE_componentWillUpdate because there is a potential time gap between these methods getting called and React updating the DOM.

1.  **componentDidUpdate(prevProps, prevState, snapshot)**

Called after the render is finished in the re-render cycle. This method will guarantee to call once in the re-render cycle. Cause side effects but before making ajax calls you need to compare previous props with new props.

componentDidUpdate(prevProps, prevState) {

if (

this.props.roomId !== prevProps.roomId ||

this.state.serverUrl !== prevState.serverUrl

) {

```jsx
this.destroyConnection();

this.setupConnection();

}

}
```
## What are unmounting Lifecycle Methods

### componentWillUnmount()

Method is invoked immediately before a component is unmounted or destroyed. Canceling any network requests, removing event handlers, and also invalidating timers. **Do not call the setState method** componentWillUnmount should not return anything.

componentWillUnmount() {

```jsx
this.destroyConnection();

}
```
## What are Error handling Lifecycle Method

### static getDerivedStateFromError(error) & componentDidCatch(error, info)

These methods are called when there is an error either during rendering, in a lifecycle method or in the constructor of any child component.

## What is a Higher order component?

A higher-order component is a function that takes a component and returns a new component.

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.

We use HOC to share the common functionality between components.

```jsx
import React from 'react'

const **withCounter** = **WrappedComponent** =>{

class **WithCounter** extends React.Component{
```
### // Common functionality

```jsx
constructor(props) {
```
super(props)

```jsx
this.state = {
```
count:0

```jsx
}

}

incrementCounter = ()=>{
```
this.setState({

count:this.state.count+1

})

```jsx
}
```
render(){

```jsx
return <**WrappedComponent** count={this.state.count} incrementCounter={this.incrementCounter} **{...this.props}** />

}

}

return **WithCounter**;

}

export default **withCounter**;
```

### ClickedCounter.js

```jsx
import React, { Component } from 'react'
```
### import withCounter from './withCounter';

```jsx
class ClickedCounter extends Component {
```
render() {

### // Destructured props = props from HOC

### const {count, incrementCounter} = this.props;

```jsx
return (
```
<div>

<button onClick={**incrementCounter**}>Clicked {**count**} times</button>

</div>

```jsx
)

}

}

export default **withCounter(ClickedCounter)**
```

### HoveredCounter.js

```jsx
import React, { Component } from 'react'
```
### import withCounter from './withCounter';

```jsx
class HoveredCounter extends Component {
```
render() {

### // Destructured props = props from HOC

### const {count, incrementCounter} = this.props;

```jsx
return (
```
<div>

<h1 onMouseOver={**incrementCounter**}>Hovered {count} times</h1>

</div>

```jsx
)

}

}

export default **withCounter(HoveredCounter)**
```

## What can you do with HOC?

-   Code reuse, logic and bootstrap abstraction
-   Render hijacking
-   State abstraction and manipulation
-   props manipulation

## How to create a props proxy for HOC components?

You can add/edit props passed to the component using props proxy pattern like this:

```jsx
function HOC(WrappedComponent) {

return class Test extends Component {
```
render() {

```jsx
const newProps = { title: ‘New Header’, footer: false, showFeatureX: false, showFeatureY: true }

return <WrappedComponent {...this.props} **{...newProps}** />
```
}}}

## What are the limitations of HOC?

1.  **Don’t Use HOCs Inside the Render Method.** The problem here isn’t just about performance — remounting a component **causes the state of that component and all of its children to be lost.** Instead, apply HOCs outside the component definition so that the resulting component is created only once. Then, its identity will be consistent across renders.

This is usually what you want, anyway.

```jsx
import { withMyHOC } from '../with_my_component'

export default class App extends React.Component {
```
render() {

```jsx
const Wrap = withMyHOC(MyComponent);

return (
```
<div>

{/\* Other Code \*/}

<Wrap />

</div>

```jsx
)

}

}
```

Why you shouldn't use it like above is because everytime render method is called a new instance of the MyComponent is created wrapped by HOC called Wrap and hence every time it can be mounted again instead of going by the natural lifecycle or React.

However if your HOC passes a function as props, you can use it within the render as long as it does not cause a re-render again otherwise it will lead to an infinite loop.

1.  **Static Methods Must Be Copied Over**

When you apply a HOC to a component, though, the original component is wrapped with a container component. That means the new component does not have any of the static methods of the original component.

-   To solve this, you could copy the methods onto the container before returning it:
    **Enhance.staticMethod = WrappedComponent.staticMethod;**
-   You can use hoist-non-react-statics package to automatically copy all non-React static methods

### hoistNonReactStatic(Enhance, WrappedComponent);

-   you can export the static method separately from the component itself.

### import MyComponent, { someFunction } from './MyComponent.js';

1.  **Refs Aren’t Passed Through**

## What are Container Component and Presentational component

You may have noticed similarities between HOCs and a pattern called container components. **Container components are part of a strategy of separating responsibility between high-level and low-level concerns**. Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI. **HOCs use containers as part of their implementation**. You can think of HOCs as parameterized container component definitions.

A **presentational** **component** is a component that just renders HTML. **Container Pattern** is commonly used to separate data fetching/logic, events, and state from presentational components (aka, dumb components)

## What are Render Props?

The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

### App.js

### import ClickCounter from "./components/RenderProps/ClickCounter";

### import Counter from "./components/RenderProps/Counter";

### import HoverCounter from "./components/RenderProps/HoverCounter";

```jsx
function App() {

return (
```
<div className="App">

### <Counter

### render={(count, incrementCounter) => (

### <ClickCounter count={count} incrementCounter={incrementCounter} />

**)}**

**/>**

### <Counter

### render={(count, incrementCounter) => (

### <HoverCounter count={count} incrementCounter={incrementCounter} />

**)}**

**/>**

</div>

```jsx
);

}

export default App;
```

### Counter.js

```jsx
import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
count:0

```jsx
}

}

incrementCounter = ()=>{
```
this.setState({

count:this.state.count+1

})

```jsx
}
```
render() {

```jsx
return (
```
<div>

### {this.props.render(this.state.count, this.incrementCounter)}

</div>

```jsx
)

}

}

export default Counter
```

## What are Caveats or Limitation of render props

### Be careful when using Render Props with React.PureComponent

Using a render prop can negate the advantage that comes from using React.PureComponent if you create the function inside a render method. This is because the shallow prop comparison will always return false for new props, and **each render in this case will generate a new value for the render prop as the arrow function will return a new instance which is always different and fails in shallow comparison**.

## What are Fragments?

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children **without adding extra nodes to the DOM.**

### Why we use Fragment

A common pattern is for a component to return a list of children. Refer table element when we need to add tr, td,etc

## What are Pure Components?

React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but **React.PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison.**

If your React component render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

## What is React.memo?

**Pure Component works only in class components that’s why React.memo comes into picture.**

**React.memo is a higher order component.** **It comes in React 16.6** .

If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that **React will skip rendering the component, and reuse the last rendered result.**

**React.memo only checks for prop changes.** If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.

## What are Refs ?

Refs **provide a way to access DOM nodes or React elements** created in the render method. Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

```jsx
class CustomTextInput extends React.Component {

constructor(props) {

super(props);
```
// create a ref to store the textInput DOM element

### this.textInput = React.createRef();

```jsx
this.focusTextInput = this.focusTextInput.bind(this);

}
```
focusTextInput() {

// Explicitly focus the text input using the raw DOM API

// Note: we're accessing "current" to get the DOM node

### this.textInput.current.focus();

```jsx
}
```
render() {

// tell React that we want to associate the <input> ref

// with the \`textInput\` that we created in the constructor

```jsx
return (
```
<div>

<input type="text" **ref={this.textInput} />**

<input type="button" value="Focus the text input" onClick={this.focusTextInput} />

</div>

```jsx
);

}

}
```

React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts. ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.

By default, **you may not use the ref attribute on function components** because they don’t have an instance. however, we can **use the ref attribute inside a function component as long as you refer to a DOM element or a class component.**

## What are Callback Refs?

React also supports another way to set refs called “callback refs”, which gives more fine-grain control over when refs are set and unset.

**Instead of passing a ref attribute created by createRef(), you pass a function.** The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere.

```jsx
class CustomTextInput extends React.Component {

constructor(props) {

super(props);
```
### this.textInput = null;

### this.setTextInputRef = element => {

### this.textInput = element;

**};**

### this.focusTextInput = () => {

### if (this.textInput) this.textInput.focus();

**};**

```jsx
}
```
componentDidMount() {

### this.focusTextInput();

```jsx
}
```
render() {

// Use the \`ref\` callback to store a reference to the text input DOM

// element in an instance field (for example, this.textInput).

```jsx
return (
```
<div>

<input

type="text"

### ref={this.setTextInputRef}

/>

<input

type="button"

value="Focus the text input"

### onClick={this.focusTextInput}

/>

</div>

```jsx
);

}

}
```

## What are Caveats with callback refs?

If the **ref callback** is defined as an **inline function**, it will g**et called twice during updates**, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn’t matter in most cases

## What are Refs Forwarding

Ref forwarding is a technique for **automatically passing a ref through a component to one of its children. React.forwardRef((props, ref) => ...)**

## Which is the preferred option within callback refs and findDOMNode()?

It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future. The legacy approach of using findDOMNode:

```jsx
class MyComponent extends Component {
```
componentDidMount() {

findDOMNode(this).scrollIntoView()

```jsx
}
```
render() {

```jsx
return <div />

}

}
```
## Why are String Refs legacy? (Not imp)

If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like ref={'textInput'}, and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have below issues, and are considered legacy. String refs were removed in React v16. 1. They force React to keep track of the currently executing component. This is problematic because it makes the react module stateful, and thus causes weird errors when the react module is duplicated in the bundle.

2\. They are not composable — if a library puts a ref on the passed child, the user can’t put another ref on it. Callback refs are perfectly composable.

3\. They don’t work with static analysis like Flow. Flow can’t guess the magic that framework does to make the string ref appear on this.refs, as well as its type (which could be different). Callback refs are friendlier to static analysis.

4\. It doesn’t work as most people would expect with the “render callback” pattern (e.g. ) “‘jsx harmony class MyComponent extends Component {

```jsx
renderRow = (index) => {
```
// This won’t work. Ref will get attached to DataTable rather than MyComponent:

```jsx
return <input ref={‘input-’ + index} />;
```
// This would work though! Callback refs are awesome.

return <input ref={input => this\['input-' + index\] = input} />;

```jsx
}
```
render() {

```jsx
return } } “‘
```
## How to apply validation on props in React?

To apply validation on props in React, you can use PropTypes, a built-in library in React for validating props.

**Class Component:**

```jsx
import React from 'react';
```
### import PropTypes from 'prop-types';

```jsx
const MyComponent = ({ name, age, isStudent, hobbies }) => (
```
<div>

<h1>Name: {name}</h1>

<p>Age: {age}</p>

<p>{isStudent ? 'Is a student' : 'Not a student'}</p>

<ul>

```jsx
{hobbies.map((hobby, index) => (
```
<li key={index}>{hobby}</li>

))}

</ul>

</div>

```jsx
);
```
### // Define propTypes

### MyComponent.propTypes = {

**name: PropTypes.string.isRequired, // name must be a string and is required**

### age: PropTypes.number, // age must be a number

### isStudent: PropTypes.bool, // isStudent must be a boolean

### hobbies: PropTypes.arrayOf( // hobbies must be an array of strings

### PropTypes.string

**).isRequired,**

**};**

### // Define default props (optional)

### MyComponent.defaultProps = {

**age: 18,**

**isStudent: false,**

**};**

```jsx
export default MyComponent;
```

## What are Portals?

Portals provide a f**irst-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component (root div).**

### ReactDOM.createPortal(child, container)

## What is prop drilling?

Prop Drilling is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around.

## Can we pass data from child to parent component ? if yes , how?

In React, data is typically passed from parent to child components via props, but passing data from child to parent requires a slightly different approach. This is done by lifting the state up.

Steps to pass data from child to parent:

-   Define a function in the parent component that will handle the data.
-   Pass the function as a prop to the child component.
-   Invoke the function in the child component to send data back to the parent.

## What is Context API?

**Context provides a way to pass data through the component tree without having to pass props down manually at every level.** We can use composition and even render props but are limited to some level of tree.

There are 3 steps to use context:

-   Create the context
-   Provide a context value
-   Consume the context value

## How to use Context API?

### Create components/Context/userContext.jsx

```jsx
import React from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
```

### App.js

```jsx
import ComponentC from "./components/Context/ComponentC";
```
### import { UserProvider } from "./components/Context/userContext";

```jsx
function App() {

return (
```
<div className="App">

### <UserProvider value="Rishabh">

### <ComponentC />

### </UserProvider>

</div>

```jsx
);

}

export default App;
```

**In ComponentC, we have rendered ComponentE and then in ComponentC we have rendered ComponentF
ComponentF.jsx**

```jsx
import React, { Component } from 'react'
```
### import { UserConsumer } from './userContext';

```jsx
class ComponentF extends Component {
```
render() {

```jsx
return (
```
### <UserConsumer>

### { username=>{

### return <div>hello {username}</div>

**}}**

### </UserConsumer>

```jsx
)

}

}

export default ComponentF;
```

### Output: Hello Rishabh

If default Value is provided and we have no user Provider to pass value then Consumer will use defaultValue.
```jsx
const UserContext = React.createContext**("Rishabh Sisodiya");**
```
### Output: Hello Rishabh Sisodiya

## How to use Context using contextType?

### userContext.js

```jsx
import React from 'react'

const UserContext = React.createContext("Rishabh Sisodiya");

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
```
### export default UserContext;

### _ContextType outside the class_

### ComponentE.jsx

```jsx
import React, { Component } from 'react'

import ComponentF from './ComponentF'
```
### import UserContext from './userContext';

```jsx
class ComponentE extends Component {
```
render() {

```jsx
return (
```
<div>

### ComponentE context {this.context}

<ComponentF />

</div>

```jsx
)

}

}
```
### ComponentE.contextType= UserContext;

```jsx
export default ComponentE;
```

### ContextType inside the class: Using static contextType

### ComponentE.js

```jsx
import React, { Component } from 'react'

import ComponentF from './ComponentF'

import UserContext from './userContext';

class ComponentE extends Component {
```
### static contextType= UserContext;

render() {

```jsx
return (
```
<div>

ComponentE context {this.context}

<ComponentF />

</div>

```jsx
)

}

}

export default ComponentE;
```

## What are Limitation of contextType

-   We can use contextType with class Component only
-   You can subscribe to only a single context.

## What is the Limitation of Context ?

Because context uses reference identity to determine when to re-render, there are some gotchas that **could trigger unintentional renders in consumers when a provider’s parent re-renders**.

## **What is Code splitting** ?

In React,It is a technique used to optimize the performance of an application by **breaking up the codebase into smaller bundles that can be loaded on demand.** This approach allows the browser to load only the necessary code for the current view or functionality, reducing the initial load time.

React implements code splitting using **dynamic imports** and tools like **React.lazy** and **React Router** for route-based splitting.

### //Using React.lazy for Lazy Loading Components

```jsx
import React, { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {

return (
```
<Suspense fallback={<div>Loading...</div>}>

<Dashboard />

</Suspense>

```jsx
);

}
```

### //2. Route-Based Code Splitting with React Router

```jsx
import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));

const About = React.lazy(() => import("./About"));

function App() {

return (
```
<Router>

<Suspense fallback={<div>Loading...</div>}>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

</Routes>

</Suspense>

</Router>

```jsx
);

}

export default App;
```

### //Using Dynamic Imports

```jsx
function loadComponent() {

import("./HeavyComponent").then((HeavyComponent) => {

console.log("Component loaded:", HeavyComponent.default);

});

}
```

## What are uncontrolled components?

The Uncontrolled Components are the ones **that store their own state internally, and you query the DOM using a ref to find its current value when you need it**. This is a bit more like traditional HTML.

## What are synthetic events in React?

SyntheticEvent is a **cross-browser wrapper around the browser’s native event**. Its API is the same as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.

## How to use innerHTML in React?

In React, you can use the dangerouslySetInnerHTML attribute to insert raw HTML into a component. However, it should be used with caution as it can introduce security vulnerabilities if the HTML content is not sanitized properly.

```jsx
import React from 'react';

const InnerHTMLExample = ({ rawHTML }) => {

return (
```
<div>

<h1>Displaying Raw HTML</h1>

<div

dangerouslySetInnerHTML={{ __html: rawHTML }}

/>

</div>

```jsx
);

};

export default InnerHTMLExample;
```

## What are Web Components?

Web Components are a set of web platform APIs that allow developers to **create reusable, encapsulated, and custom HTML elements** that work seamlessly across modern browsers.

React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.

### Using Web Components in React

```jsx
class HelloMessage extends React.Component {
```
render() {

```jsx
return <div>Hello <x-search>{this.props.name}</x-search>!</div>;

}

}
```

### Using React in your Web Components

```jsx
class XSearch extends HTMLElement {
```
connectedCallback() {

```jsx
const mountPoint = document.createElement('span');

this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

const name = this.getAttribute('name');

const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);

ReactDOM.render(<a href={url}>{name}</a>, mountPoint);

}

}

customElements.define('x-search', XSearch);
```

## What is a switching component?

A switching component is a component that renders one of many components. We need to use object to map prop values to components.

```jsx
import HomePage from "./HomePage";

import AboutPage from "./AboutPage";

import ServicesPage from "./ServicesPage";

import ContactPage from "./ContactPage";

const PAGES = {

home: HomePage,

about: AboutPage,

services: ServicesPage,

contact: ContactPage,

};

const Page = (props) => {

const Handler = PAGES\[props.page\] || ContactPage;

return <Handler {...props} />;

};
```
// The keys of the PAGES object can be used in the prop types to catch dev-time errors.

```jsx
Page.propTypes = {

page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,

};
```

## How to loop inside JSX?

You can simply use Array.prototype.map with ES6 arrow function syntax.For example, the items array of objects is mapped into an array of components:

<tbody>

### {items.map((item) => (

### <SomeComponent key={item.id} name={item.name} />

**))}**

</tbody>

**But you can't iterate using for loop:**

<tbody>

```jsx
for (let i = 0; i < items.length; i++) {
```
<SomeComponent key={items\[i\].id} name={items\[i\].name} />

```jsx
}
```
</tbody>

This is because JSX tags are transpiled into function calls, and you can't use statements inside expressions. This may change thanks to do expressions which are stage 1 proposals.

## What are React Hooks?

**React Hooks** are functions introduced in React 16.8 **that allow developers to use React features like state and lifecycle methods in functional components**. Before hooks, stateful logic and lifecycle methods could only be implemented in class components. Hooks simplify this by enabling these functionalities directly in functional components.

## Why Do We Need Hooks?

1.  **Simplified Code**: Hooks allow functional components to handle state and side effects, making code cleaner and easier to understand compared to class components.
2.  **Reusability of Logic**:Hooks enable sharing and reusing stateful logic without complex patterns like higher-order components (HOCs) or render props. This is possible through **custom hooks**.
3.  **No More Classes**: Hooks eliminate the need to use class components, avoiding common issues like this binding in event handlers.
4.  **Improved Readability**: Hooks organize logic by functionality instead of lifecycle methods, reducing confusion when working with complex components.

## What rules need to be followed for hooks?

### Rule

### Explanation

| --- | ---
Call hooks at the top level only

Prevents inconsistent state tracking.

| --- | ---
Call hooks from React functions only

Hooks depend on React's lifecycle to work.

| --- | ---
Prefix custom hooks with use

Helps React identify custom hooks.

| --- | ---
Use correct dependencies in hook arrays

Ensures hooks behave correctly with up-to-date values.

| --- | ---
Do not mutate state directly

Avoids inconsistent UI updates.

| --- | ---
Avoid hooks outside React's lifecycle

Hooks must operate within functional components.

| --- | ---
## How to ensure hooks follow the rules in your project?

The ESLint React Hooks plugin is the most effective way to enforce the rules of hooks automatically. It ensures that hooks are used correctly and dependencies are specified properly.

### npm install eslint-plugin-react-hooks --save-dev

**Configuration**:

Add the plugin to your ESLint configuration file (e.g., .eslintrc or eslint.config.js):

{

```jsx
"plugins": \["react-hooks"\],

"rules": {
```
"react-hooks/rules-of-hooks": "error", // Checks the rules of hooks

"react-hooks/exhaustive-deps": "warn" // Checks the dependencies of hooks

```jsx
}

}
```
## What is useState?

The useState hook lets you add state to functional components **In classes, the state is always an object. With the useState hook, the state doesn't have to be an object.** The useState hook returns an array with 2 elements. The first element is the current value of the state, and the second element is a state setter function.

## Why is useState not named createState instead?

“Create” wouldn’t be quite accurate because the state is only created the first time our component renders. During the next renders, useState gives us the current state. Otherwise it wouldn’t be “state” at all! There’s also a reason why Hook names always start with use.

## What are the differences between state and useState?

### Feature

### State (Class Components)

### useState (Functional Components)

| --- | --- | ---
### Component Type

Used in class components

Used in functional components

| --- | --- | ---
### Syntax

this.state and this.setState

useState with destructuring

| --- | --- | ---
### Boilerplate

More verbose

Concise and simpler

| --- | --- | ---
### Initialization

Inside the constructor

Directly within the component body

| --- | --- | ---
### Reusability

Less reusable

Can be paired with custom hooks

| --- | --- | ---
### Lifecycle

Requires lifecycle methods

Works seamlessly with useEffect

| --- | --- | ---
## How to use useState()

```jsx
1.  **useState with previous state:** setCount(prevCount=> prevCount+1)
2.  **useState with Object:** e => setName({...name, firstName:e.target.value})
3.  **useState with Array:** setItems(\[...items, { id: items.length, value: Math.floor(Math.random() \* 10) + 1 }\]);
    ```
    ## Is useState synchronous or asynchronous?

    In React, useState is asynchronous.

    -   Batching of updates: React batches multiple state updates for performance reasons, especially in event handlers or concurrent mode. This behavior helps reduce unnecessary re-renders.
    -   State updates don't happen immediately: You cannot rely on the updated value of state immediately after calling the setter.

    ## Is it mandatory for \`useState\` to have an initial value?

    No, there is no compulsion for useState to have an initial value, but it is recommended to set an appropriate initial state based on the requirements of your component. The initial value you pass to useState determines the starting state of the variable managed by React

    ```jsx
const \[value, setValue\] = useState(); // No initial value provided by default undefined
```
## What is useEffect?

The Effect hook **lets you perform side effects in functional components.** It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount.

## How to use useEffect?

1.  **Run Effect only once**

    ```jsx
    useEffect( () => {

    console.log('useEffect called');
    ```
window.addEventListener('mousemove',logMousePosition)

},\[\])

1.  **Conditionally run effects**

    ```jsx
    useEffect(() => {

    console.log('useEffect-Updating document title');

    document.title= \`You Clicked ${count} times\`
    ```
},\[**count**\])

1.  **useEffect with cleanup**

    ```jsx
    useEffect( () => {

    console.log('useEffect called');
    ```
window.addEventListener('mousemove',logMousePosition)

```jsx
return () => {

console.log('component unmounted');
```
window.removeEventListener('mousemove', logMousePosition)

```jsx
}
```
},\[\])

## What is the behaviour of useEffect with incorrect dependency?

**Problem: Counter will not increment as we are running useEffect only once and hence setInterval will call tick method only once.**

```jsx
import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {

const \[count, setCount\] = useState(0);

const tick = () => {
```
setCount(count+1)

```jsx
}

useEffect(() => {

const interval= setInterval(tick, 1000);

return () => {
```
clearInterval(interval)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

{count}

</div>

```jsx
)

}

export default IntervalHookCounter
```

### Solution 1: count as dependency

```jsx
useEffect(() => {

const interval= setInterval(tick, 1000);

return () => {
```
clearInterval(interval)

```jsx
}
```
}, \[**count**\])

**Solution 2: use prevCount , prevCount always keeps track of previous value so it will always update UI and render gets called.**

```jsx
const tick = () => {

setCount(**prevCount=>prevCount+1**)

}

useEffect(() => {

const interval= setInterval(tick, 1000);

return () => {
```
clearInterval(interval)

```jsx
}
```
}, \[\])

## How to Fetch data using useEffect

Install axios : **npm i axios**

```jsx
import React, { useState, useEffect } from "react";

import axios from "axios";

function DataFetching() {

const \[post, setPost\] = useState({});

const \[id, setId\] = useState(1);

const \[idFromButtonClick, setIdFromButtonClick\] = useState(1);

useEffect(() => {
```
axios

.get(\`https://jsonplaceholder.typicode.com/posts/${id}\`)

```jsx
.then((res) => {

console.log(res);

setPost(res.data);
```
})

```jsx
.catch((err) => {

console.log(err);

});

}, \[idFromButtonClick\]);

const handleClick = () => {

setIdFromButtonClick(id);

};

return (
```
<div>

```jsx
<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
```
<button type="button" onClick={handleClick}>

Fetch Post

</button>

<div>{post.title}</div>

```jsx
{/\* <ul> {posts.map(post => (<li key={post.id}>{post.title}</li>))}</ul> \*/}
```
</div>

```jsx
);

}

export default DataFetching;
```

behaviour of code based on value pass in dependency Array:

### Dependency Array

### Trigger

### When API is Called

### Behavior

| --- | --- | --- | ---
\[\]

Only on initial render

API is called once when the component mounts.

Ignore id and idFromButtonClick updates. No new fetch occurs after initial render.

| --- | --- | --- | ---
\[id\]

On id change

API is called every time the id state changes (e.g., when typing in the input field).

Dynamic fetch based on id. However, the API call happens **before the button click**.

| --- | --- | --- | ---
\[idFromButtonClick\]

On idFromButtonClick change (via button)

API is called only when the user clicks the button, and the idFromButtonClick state updates.

Ensures API call is tied to user interaction, fetching the post associated with the input id.

| --- | --- | --- | ---
### Summary

-   Use \[\] for a one-time fetch on component load.
-   Use \[id\] for real-time fetches as the id changes.
-   Use \[idFromButtonClick\] for fetches tied to a button click or other specific triggers.

## Can we use async in useEffect ?

**Yes, you can use async in useEffect, but not directly**. **The useEffect hook itself cannot be marked as async because it expects the return value to either be undefined or a cleanup function**, and async functions always return a Promise, which is not what useEffect expects.

However, you can define an inner asynchronous function inside the useEffect and call it. This allows you to perform asynchronous operations like fetching data or handling promises inside the effect.

```jsx
useEffect(() => {
```
// Define the async function inside the useEffect

```jsx
const fetchData = **async ()** => {

try {

const response = await fetch('https://api.example.com/data');

const result = await response.json();

setData(result);
```
} catch (err) {

```jsx
setError(err);
```
} finally {

```jsx
setLoading(false);

}

};
```
// Call the async function

```jsx
fetchData();
```
}, \[\]); // Empty dependency array means this runs once when the component mounts

## Is useEffect synchronous or asynchronous?

useEffect is asynchronous in nature, but it doesn’t block rendering.

1.  **Asynchronous Nature:** The code inside useEffect does not run synchronously with the render cycle. Instead, useEffect is executed after the DOM has been updated following the render.
2.  **Execution Timing:**
    1.  The useEffect cleanup function (if any) runs before the effect is re-executed on subsequent renders (except for the initial render).
    2.  The effect itself runs asynchronously after the paint.

## Compare how to use context API in react class components and functional components ?

### Feature

### Class Components

### Functional Components (Hooks)

| --- | --- | ---
### Creating Context

React.createContext()

Same as class components: React.createContext()

| --- | --- | ---
### Accessing Context Provider

Use <Context.Provider> to wrap components

Same as class components: <Context.Provider>

| --- | --- | ---
### Consuming Context

Use Context.Consumer or static contextType

Use useContext hook

| --- | --- | ---
### Syntax to Consume Context

```jsx
\- Using Context.Consumer:<Context.Consumer>{value => ...}</Context.Consumer>
```
\- Using
static contextType:

static contextType = MyContext;this.context

\- Using useContext:

```jsx
const value = useContext(MyContext);
```

| --- | --- | ---
## What is **useReducer?**

The useReducer hook is a React Hook **used for managing complex state logic in functional components.** It provides an alternative to useState by allowing you to handle state transitions using a reducer function, which is commonly used in applications with more complex state management needs.

**Example:**

```jsx
import React, { useReducer } from 'react';
```
// Reducer function

```jsx
function reducer(state, action) {

switch (action.type) {
```
case 'increment':

```jsx
return { count: state.count + 1 };
```
case 'decrement':

```jsx
return { count: state.count - 1 };
```
case 'reset':

```jsx
return { count: 0 };
```
default:

```jsx
throw new Error('Unknown action type');

}

}

function Counter() {

const initialState = { count: 0 };
```
### const \[state, dispatch\] = useReducer(reducer, initialState);

```jsx
return (
```
<div>

<p>Count: {state.count}</p>

```jsx
<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>

<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
```
</div>

```jsx
);

}

export default Counter;
```

## What are differences between useState and useReducer?

### Aspect

### useState

### useReducer

| --- | --- | ---
### Purpose

Manages simple state or state that updates independently.

Manages complex state logic, especially when state updates depend on previous states or involve multiple sub-states.

| --- | --- | ---
### State Update Trigger

A setter function returned by useState is used to update the state.

A dispatch function is used to trigger actions that determine state changes through a reducer function.

| --- | --- | ---
### Parameters

Takes the initial state as its argument.

Takes a reducer function and an initial state. Optionally accepts an initializer function for lazy initialization.

| --- | --- | ---
### Update Mechanism

Directly updates state using the setter function (setState).

Updates state through actions processed by the reducer function.

| --- | --- | ---
### Syntax Simplicity

Simpler syntax and less boilerplate.

More boilerplate but better suited for complex logic.

| --- | --- | ---
### Use Case

Best for simple state management like toggles, counters, form fields, etc.

Ideal for managing complex state with multiple actions, interdependent updates, or when logic centralization is desired.

| --- | --- | ---
### State Update Logic

Update logic resides in the component using the hook.

Update logic resides in a centralized reducer function.

| --- | --- | ---
### Flexibility

Suited for independent state updates.

Suited for dependent or complex state transitions where multiple sub-states are involved.

| --- | --- | ---
### Readability

Easier to understand for small or isolated state logic.

More structured and readable for handling multiple state changes and transitions.

| --- | --- | ---
### Performance

Slightly more performant for simple state due to less abstraction.

Overhead is justified for managing complex state but may be unnecessary for simple scenarios.

| --- | --- | ---
## How to use useReducer with useContext?

```jsx
useReducer : Local State management
```
useContext+useReducer: share state between component- global state management

### App.js

```jsx
import React, { **useReducer** } from "react";

import ComponentA from "./components/ComponentA";
```
### const initialState = 0;

### const reducer = (state, action) => {

### switch (action) {

**case "increment":**

### return state + 1;

**case "decrement":**

### return state - 1;

**case "reset":**

### return initialState;

**default:**

### return state;

**}**

**};**

### export const CountContext = React.createContext();

```jsx
function App() {
```
### const \[count, dispatch\] = useReducer(reducer, initialState);

```jsx
return (
```
<CountContext.Provider

value={{ countState: count, countDispatch: dispatch }}

\>

<div className="App">

<ComponentA />

</div>

</CountContext.Provider>

```jsx
);

}

export default App;
```

### ComponentA.js

```jsx
import React, {**useContext**} from 'react'

import { **CountContext** } from '../App';

function ComponentA() {
```
### const countContext = useContext(CountContext)

```jsx
return (
```
<div>

Component A {**countContext**.**countState**}

```jsx
<button onClick={(**) => countContext.countDispatch('increment')**}>Increment</button>

<button onClick={**() => countContext.countDispatch('decrement')**}>Decrement</button>

<button onClick={**() => countContext.countDispatch('reset')**}>Reset</button>
```
</div>

```jsx
)

}

export default ComponentA
```

## What is useCallback?

**useCallback** is a hook that will **return the memoized version of the callback function that only changes if one of dependencies has changed.** It is useful when passing a callback to optimize the child component that relies on reference equality **to prevent unnecessary renders.**

## Why do we use useCallback?

Here's the behavior of the example with and without using **useCallback**.

### Example Without useCallback

```jsx
import React, { useState } from "react";

const Button = React.memo(({ handleClick, label }) => {

console.log(\`Rendering button - ${label}\`);

return <button onClick={handleClick}>{label}</button>;

});

const Counter = () => {

const \[count, setCount\] = useState(0);

const \[text, setText\] = useState("");
```
// Non-memoized increment function

```jsx
const increment = () => {

setCount((prev) => prev + 1);

};

const handleChange = (e) => {

setText(e.target.value);

};

console.log("Rendering Counter");

return (
```
<div>

<h1>Count: {count}</h1>

<Button handleClick={increment} label="Increment" />

<input

type="text"

value={text}

onChange={handleChange}

placeholder="Type something..."

/>

</div>

```jsx
);

};

export default Counter;
```

**Output in Console (Without useCallback):**

1.  **Initial Render**:
    Rendering CounterRendering button - Increment
2.  **Typing in Input (Triggering State Update for text)**:
    Rendering Counter
    Rendering button - Increment.
    **Note:The Button re-renders unnecessarily because the increment function reference changes on every render.**
3.  **Clicking "Increment" Button**:
    Rendering Counter
    Rendering button - Increment
**Note:Expected behavior, as state (count) is updated.**

### Example With useCallback

```jsx
import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick, label }) => {

console.log(\`Rendering button - ${label}\`);

return <button onClick={handleClick}>{label}</button>;

});

const Counter = () => {

const \[count, setCount\] = useState(0);

const \[text, setText\] = useState("");
```
### // Memoized increment function

```jsx
const increment = **useCallback(() => {**

setCount((prev) => prev + 1);
```
**}, \[\]);**

```jsx
const handleChange = (e) => {

setText(e.target.value);

};

console.log("Rendering Counter");

return (
```
<div>

<h1>Count: {count}</h1>

<Button handleClick={increment} label="Increment" />

<input

type="text"

value={text}

onChange={handleChange}

placeholder="Type something..."

/>

</div>

```jsx
);

};

export default Counter;
```

**Output in Console (With useCallback):**

1.  **Initial Render**:
    Rendering Counter
    Rendering button - Increment
2.  **Typing in Input (Triggering State Update for text)**:
    Rendering Counter
    **Note:**The Button does NOT re-render because the increment function reference remains the same.
3.  **Clicking "Increment" Button**:
    Rendering Counter
    **Note:** Only the Counter re-renders as expected. The Button remains unaffected.

**Key Difference:**

-   **Without useCallback**: Button re-renders on any parent state change because increment is recreated every time.
-   **With useCallback**: Button does not re-render unless its dependencies change, reducing unnecessary renders and improving performance.

## What is useMemo?

UseMemo is a hook w**hich recomputes the cached value when one of the dependencies has changed.**

## What are the differences between useMemo and useCallback?

### Feature/Aspect

### useMemo

### useCallback

| --- | --- | ---
### Purpose

Memoizes the **result** of a computation.

Memoizes the **function** itself.

| --- | --- | ---
### Return Value

A memoized value.

A memoized function.

| --- | --- | ---
### Use Case

Optimizing expensive computations or derived data.

Preventing unnecessary re-creation of functions.

| --- | --- | ---
### Dependency Array

Triggers re-computation of the value when any dependency changes.

Re-creates the function when any dependency changes.

| --- | --- | ---
### Typical Use

For caching derived state or computed values.

For passing stable functions to child components (e.g., React.memo).

| --- | --- | ---
### Common Scenarios

Expensive calculations, filtering, sorting, or transformations of data.

Event handlers or callbacks passed to child components.

| --- | --- | ---
### Overhead

Minimal; caches the value and compares dependencies.

Minimal; caches the function and compares dependencies.

| --- | --- | ---
### Focus

Value optimization.

Function reference optimization.

| --- | --- | ---
**Key Takeaways:**

-   Use **useMemo** when optimizing **expensive calculations**.
-   Use **useCallback** when optimizing **function references**, especially in scenarios involving child components that use React.memo.

## How to useRef in functional components and it is different from class components.

```jsx
import React, { useRef, useEffect } from 'react'

function FocusInput() {
```
### const inputRef = useRef(null)

```jsx
useEffect(() => {
```
### inputRef.current.focus()

}, \[\])

```jsx
return (
```
<div>

<input **ref={inputRef}** type="text" />

</div>

```jsx
)

}

export default FocusInput
```

### Aspect

### Class Component

### Functional Component

| --- | --- | ---
### Purpose

Access DOM elements or instance variables using React.createRef().

Access DOM elements or persistent mutable values using useRef().

| --- | --- | ---
### Usage

Create a ref instance and assign it to a DOM element or variable.

Call useRef() to create a ref object and attach it to a DOM element or variable.

| --- | --- | ---
### Declaration

```jsx
this.myRef = React.createRef();
```

```jsx
const myRef = useRef(null);
```

| --- | --- | ---
### Access

Access via this.myRef.current.

Access via myRef.current.

| --- | --- | ---
### Example Code

jsx\\nclass MyComponent extends React.Component {\\n constructor() {\\n super();\\n this.myRef = React.createRef();\\n }\\n componentDidMount() {\\n this.myRef.current.focus();\\n }\\n render() {\\n return <input ref={this.myRef} />;\\n }\\n}

```jsx
jsx\\nfunction MyComponent() {\\n const myRef = useRef(null);\\n useEffect(() => {\\n myRef.current.focus();\\n }, \[\]);\\n return <input ref={myRef} />;\\n}
```

| --- | --- | ---
### Persistence

Retains the same ref instance across renders.

Retains the same ref object across renders.

| --- | --- | ---
### Mutability

Mutable, used for instance variables.

Mutable, can hold any value (e.g., DOM nodes, counters).

| --- | --- | ---
### Key Scenarios

Managing DOM elements or accessing instance variables.

Managing DOM elements, storing mutable values, or avoiding re-renders.

| --- | --- | ---
## What is the important use case of useRef in functional components when compared to class components?

When we need to use some variable defined in useEffect outside the useEffect or in return function of useEffect.

**Timer Example:**

Let take an another example

### ClassTimer.js

```jsx
import React, { Component } from "react";

class ClassTimer extends Component {

interval;

constructor(props) {

super(props);

this.state = {

timer: 0,

};

}
```
componentDidMount() {

```jsx
this.interval = setInterval(() => {

this.setState((prevState) =>
```
this.setState({ timer: prevState.timer + 1 })

```jsx
);

}, 1000);

}
```
componentWillUnmount() {

```jsx
clearInterval(this.interval);

}
```
render() {

```jsx
return (
```
<div>

Class Timer - {this.state.timer} -

```jsx
<button onClick={() => clearInterval(this.interval)}>
```
Clear Timer

</button>

</div>

```jsx
);

}

}

export default ClassTimer;
```

**There's a bug in the HookTimer implementation. The clearInterval function references interval, which is declared locally inside the useEffect scope and is not accessible outside of it.**

```jsx
import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

const \[timer, setTimer\] = useState(0)
```
### const interValRef = useRef()

```jsx
useEffect(() => {

**const interval = setInterval((**) => {

setTimer(timer => timer + 1)
```
}, 1000)

```jsx
return () => {
```
### clearInterval(interval)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

HookTimer - {timer} -

```jsx
<button onClick={() => clearInterval(**interval**)}>Clear Timer</button>
```
</div>

```jsx
)

}

export default HookTimer
```

To fix this issue you should use a ref to persist the interval ID across renders. Although useRef hook holds the reference to the DOM node using ref attribute, **it can also be used to store any mutable value a**nd value will persist through the re-render without causing any re-render.

### HookTimer.js

```jsx
import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

const \[timer, setTimer\] = useState(0)

const interValRef = useRef()

useEffect(() => {

**interValRef.current** \= setInterval(() => {

setTimer(timer => timer + 1)
```
}, 1000)

```jsx
return () => {
```
clearInterval(**interValRef.current**)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

HookTimer - {timer} -

```jsx
<button onClick={() => clearInterval(**interValRef.current**)}>Clear Timer</button>
```
</div>

```jsx
)

}

export default HookTimer
```

## What is useImperativeHandle in React?

The useImperativeHandle hook **allows you to customize the instance value that is exposed when using React.forwardRef.**

**It provides a way for parent components to interact with child components by exposing specific methods or properties of the child component.**

### Child Component (CustomInput.js)

```jsx
import React, { useImperativeHandle, forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {

const inputRef = useRef();

useImperativeHandle(ref, () => ({

focus: () => {

inputRef.current.focus();
```
},

```jsx
clear: () => {

inputRef.current.value = "";
```
},

```jsx
}));

return <input ref={inputRef} type="text" />;

});

export default CustomInput;
```

### Parent Component (App.js)

```jsx
import React, { useRef } from "react";

import CustomInput from "./CustomInput";

function App() {

const inputRef = useRef();

return (
```
<div>

<CustomInput ref={inputRef} />

```jsx
<button onClick={() => inputRef.current.focus()}>Focus Input</button>

<button onClick={() => inputRef.current.clear()}>Clear Input</button>
```
</div>

```jsx
);

}

export default App;
```

### How It Works

1.  **Forwarding the Ref:**
    -   React.forwardRef enables passing a ref from the parent to the child component.
2.  **Using useImperativeHandle:**
    -   The useImperativeHandle hook is used inside the child component to expose specific methods (focus and clear in this case).
3.  **Parent Control:**
    -   The parent component can call these exposed methods (focus and clear) using the ref.

## What is useLayoutEffect in React?

**useLayoutEffect** is a hook in React that is similar to useEffect, but it differs in when it runs during the component lifecycle. Specifically, useLayoutEffect **runs synchronously after all DOM mutations but before the browser paints.** This makes it useful for performing DOM measurements or updates that need to happen before the browser reflows or repaints the page.

In contrast, useEffect runs asynchronously, after the browser has painted, which is suitable for side effects that don't need to block the painting process.

## When to Use useLayoutEffect?

-   **DOM Measurements**: If you need to measure the layout (e.g., width, height) of a DOM element before the browser repaints.
-   **Avoiding Flickers**: If you want to perform some DOM manipulation and avoid flickers (i.e., visual inconsistencies) during render.
-   **Synchronizing with DOM**: When you need to interact with the DOM immediately after React has rendered and before the paint.

## Differences Between useEffect and useLayoutEffect:

### Aspect

### useEffect

### useLayoutEffect

| --- | --- | ---
### Execution Time

Runs after the paint (async).

Runs synchronously before the paint.

| --- | --- | ---
### Use Case

Side effects like data fetching, subscriptions, etc.

DOM measurements or updates to prevent flickers.

| --- | --- | ---
### Blocking Rendering

Does not block rendering or the paint process.

Blocks painting until the effect is executed.

| --- | --- | ---
### Performance Impact

More performance-friendly for non-UI effects.

Can block the rendering process if used incorrectly.

| --- | --- | ---
## What are custom Hooks and where do we use them?

**Custom hooks** are JavaScript functions that allow you to **reuse stateful logic** and **side effects** across multiple components in React. They let you abstract logic into reusable functions, making your component code cleaner and more manageable.

**Why Use Custom Hooks?**

-   **Reusability**: Custom hooks allow you to encapsulate logic that can be reused across multiple components, reducing code duplication.
-   **Separation of Concerns:** By abstracting logic into hooks, you separate the component UI from the business logic, improving the maintainability of your code.
-   **Cleaner Code**: Custom hooks can make your component code cleaner and easier to read, as they handle the logic, while the component focuses on rendering the UI.
-   **Testing**: It’s easier to test a custom hook independently of components, improving testability.

```jsx
import { useState, useEffect } from 'react';
```
### // Custom hook to fetch data from an API

```jsx
function useFetch(url) {

const \[data, setData\] = useState(null);

const \[loading, setLoading\] = useState(true);

const \[error, setError\] = useState(null);

useEffect(() => {

const fetchData = async () => {

try {

const response = await fetch(url);

const result = await response.json();

setData(result);
```
} catch (err) {

```jsx
setError(err);
```
} finally {

```jsx
setLoading(false);

}

};

fetchData();
```
}, \[url\]); // Run effect again if \`url\` changes

### return { data, loading, error };

```jsx
}

export default useFetch;
```

## What is useDebugValue?

useDebugValue can be used to display a label for custom hooks in React DevTools.

## What is flux?

-   It is architecture pattern that enforce unidirectional data flow
-   controls derived data and enables communication between the components.
-   Contains a central store which has authority for all data.
-   Any update in data must occur here only.
-   Provides stability to the application.
-   Reduces run time errors.

![](/notes-img/react-questions/img-005.webp)
Here are some common interview questions on React Router along with their answers:

## Difference between Fetch and axios?

Both are used for handling HTTP requests.

### fetch

### axios

| --- | ---
Built into modern browsers

Need to install it

| --- | ---
Does not throw errors for HTTP errors (e.g., 404).

Throws errors for HTTP status codes >= 400.

| --- | ---
Requires manual transformation (response.json()).

Automatically transforms JSON responses.

| --- | ---
Not supported natively (requires workarounds).

Supports timeouts out of the box.

| --- | ---
No support for interceptors

Built-in support for request/response interceptors.

| --- | ---
Streaming Support: Fetch supports reading the body of a response in streams, which is useful for large files.

fetch('https://api.example.com/large-data')

```jsx
.then(response => response.body.getReader())

.then(reader => {
```
// Process data chunks

```jsx
});
```

Limited Support

```jsx
const axios = require('axios');

const fs = require('fs');

async function downloadFile() {

const url = 'https://example.com/large-file.zip';

const writer = fs.createWriteStream('large-file.zip');

const response = await axios({
```
url,

```jsx
method: 'GET',

responseType: 'stream', // Required for streaming

});

response.data.pipe(writer);

return new Promise((resolve, reject) => {

writer.on('finish', resolve);

writer.on('error', reject);

});

}
```
downloadFile()

```jsx
.then(() => console.log('File downloaded successfully'))

.catch(error => console.error('Error downloading file:', error));
```

| --- | ---
## What is a React Router?

React Router is a standard library for routing in React applications. It a**llows you to handle navigation within your app, making it possible to have a single-page application (SPA) experience.** React Router uses dynamic routing, meaning the routes are decided during runtime, not at compile time.

## What are the <Router> components of React Router v6?

React Router v6 provides below 4 <Router> components:

-   <**BrowserRouter**\>:Uses the HTML5 history API for standard web apps.
-   <**HashRouter**\>:Uses hash-based routing for static servers.
-   <MemoryRouter>:Uses in-memory routing for testing and non-browser environments.
-   <StaticRouter>:Provides static routing for server-side rendering (SSR).

The above components will create browser, hash, memory and static history instances. React Router v6 makes the properties and methods of the history instance associated with your router available through the context in the router object.

## What is the difference between <BrowserRouter> and <HashRouter> in React Router?

-   <**BrowserRouter**\>: **Uses the HTML5 History API to manage navigation. It looks clean in the URL as it doesn’t append a hash (#) in the URL.** It works best for modern browsers.
-   <**HashRouter**\>: Uses the hash portion of the URL (#) to simulate different routes. **This method is often used when the server does not support client-side routing,** or when you cannot configure the server for SPAs.

## What is the purpose of the <Route> component in React Router?

**The <Route>** component is used **to define the paths in the application and the component that should render when the path is matched**. It takes at least a path prop to specify the URL and a component or element prop to specify the component to render.

**Example**:

<Route path="/home" component={HomePage} />

## What is the difference between component and render props in React Router <Route>?

-   **component:** This prop is used to specify the component that will be rendered when the route is matched. It automatically receives the route's props (such as history, location, and match).
    <Route path="/about" component={About} />
-   **render:** The render prop is a function that returns a React element. It is useful when you need to pass extra props or handle logic inside the route.
    ```jsx
        <Route path="/profile" render={() => <Profile user={currentUser} />} />
    ```
## What is useHistory in React Router?

**useHistory** is a hook in React Router that **allows you to programmatically navigate (or change the URL) in your application**. It provides access to the history object, which contains methods like push(), replace(), and goBack().

**Example:**

```jsx
import { useHistory } from 'react-router-dom';

const MyComponent = () => {

const history = useHistory();

const handleClick = () => {

history.push('/home');

};

return <button onClick={handleClick}>Go Home</button>;

};
```
## What is useParams in React Router?

**useParams** is a hook that **allows you to access the parameters in the URL**. It is useful for routes that include dynamic segments (like user IDs or product slugs).

Example:

```jsx
import { useParams } from 'react-router-dom';

const UserProfile = () => {

const { userId } = useParams();

return <div>User ID: {userId}</div>;

};
```
## What is useLocation in React Router?

**useLocation** is a hook that **returns the current location object.** This object contains information about the URL, including pathname, search, and state (if any). It’s useful when you want to know about the current route or use query parameters.

**Example:**

```jsx
import { useLocation } from 'react-router-dom';

const CurrentPage = () => {

const location = useLocation();

return <div>Current path: {location.pathname}</div>;

};
```
## What is useRouteMatch in React Router?

**useRouteMatch** is a hook that a**llows you to match the current URL to a specific pattern**. It returns the match object, which includes information like params, path, and url.

**Example:**

```jsx
import { useRouteMatch } from 'react-router-dom';

const Dashboard = () => {

const match = useRouteMatch('/dashboard/:id');

return <div>Dashboard ID: {match.params.id}</div>;

};
```
## What is the Switch component used for in React Router?

**The Switch component** is used to group multiple <Route> components. It renders the first <Route> or <Redirect> that matches the current URL. **It ensures that only one route is rendered at a time.**

**Example:**

```jsx
import { Switch, Route } from 'react-router-dom';

const App = () => {

return (
```
<Switch>

<Route exact path="/home" component={Home} />

<Route path="/about" component={About} />

</Switch>

```jsx
);

};
```
## What is the exact prop in React Router?

**The exact prop** ensures that a route is matched exactly. **Without it, the route may match partially, leading to unexpected behavior.**

**Example:**

<Route exact path="/about" component={About} />

## How can you create nested routes in React Router?

**Nested routes** are created by placing a <Route> component inside another route. This allows you to render components within other components, based on matching paths.

**Example:**

```jsx
const App = () => (
```
<Route path="/dashboard" component={Dashboard}>

<Route path="settings" component={Settings} />

</Route>

```jsx
);
```
## What is the Redirect component used for in React Router?

The Redirect component is used to **navigate programmatically by redirecting the user to a different route**. It can be used when a condition is met, such as after a successful login or when access is denied.

**Example:**

```jsx
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
```
if (userLoggedIn) {

```jsx
return <Redirect to="/dashboard" />;

}

return <div>Please log in</div>;

};
```
## What are route guards in React Router?

**Route guards** are **techniques used to protect routes from being accessed by unauthorized users.** You can achieve this by using Redirect or conditional rendering based on user authentication or roles.

**Example:**

```jsx
const PrivateRoute = ({ component: Component, ...rest }) => {

return (
```
<Route

{...rest}

```jsx
render={(props) =>
```
isAuthenticated ? (

<Component {...props} />

) : (

<Redirect to="/login" />

```jsx
)

}
```
/>

```jsx
);

};
```
