---
title: "Component Lifecycle Methods"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 11
imp: true
description: "React — Component Lifecycle Methods."
---
**Mounting:** When an instance of a component is being created and inserted into the DOM. It uses **constructor, static getDerivedStateFromProps, render and componentDidMount**

**Updating:** When a component is being re-rendered as a result of changes to either its props or state. It uses **static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate.**

**Unmounting:** When a component is being removed from the DOM. It uses **componentWillUnmount**.

**Error Handling:** When there is an error during rendering, in a lifecycle method, or in the constructor of any child component. It uses static **getDerivedStateFromError and cornponentDidCatch.**

## Mounting LifeCycle Methods

### Constructor(props)

```jsx
Syntax: **constructor(props)**
```
A special function that will **get called whenever a new component is created**. It is used for **initializing state and binding the event handler** and **Do not cause Side effects e.g. HTTP requests** (we should not use http requests in constructors ).

**Note: use super(props) as the first line, directly overwrite this.state.**

### static getDerivedStateFromProps(nextProps, state)

It is called **when the state of the component depends upon change in the props over time**. It is used when the initial state of a component of props being passed in the component. Since it is static it **does not have access to this keyword** in this method. So **we cannot call this,setState** within this method and instead it simply **returns the state.** **Do not cause** S**ide effects e.g. HTTP requests.**
static getDerivedStateFromProps(nextProps, prevState) {

if (nextProps.initialValue !== prevState.derivedValue) {

```jsx
return { derivedValue: nextProps.initialValue };

}

return null; // No state update needed

}
```
### render()

It is the only **required method**. It **reads props and state and returns JSX**. Here **do not change state or interact with DOM or make ajax calls.** Children components lifecycle methods are also executed.

### componentDidMount ()

This method is invoked **immediately after a component** and all its children components have been **rendered** to the DOM. **Perfect place to cause side effects like interact with data or perform Ajax calls.**

### App.js

```jsx
import LifecycleA from "./components/Lifecycle/LifecycleA";

function App() {

return (
```
<div className="App">

### <LifecycleA />

</div>

```jsx
);

}

export default App;
```

### LifecycleA.js under component/Lifecycle

```jsx
import React, { Component } from 'react'

class LifecycleA extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
name:"Rishabh"

```jsx
}

console.log('LifeCycleA constructor called');

}
```
static getDerivedStateFromProps(nextProps, prevState) {

```jsx
console.log('LifeCycleA getDerivedStateFromProps called');

return null;

}
```
componentDidMount(){

```jsx
console.log('LifeCycleA componentDidMount called');

}
```
render() {

```jsx
console.log('LifeCycleA render called');

return (
```
<div>

LifeCycle A

</div>

```jsx
)

}

}

export default LifecycleA;
```

**Output:**

LifeCycleA constructor called

LifeCycleA getDerivedStateFromProps called

LifeCycleA render called

LifeCycleA componentDidMount called

### What if LifecycleA have child component LifecycleB

### LifecycleA.js

```jsx
import React, { Component } from 'react'
```
**import LifecycleB from './LifecycleB';**

```jsx
class LifecycleA extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
name:"Rishabh"

```jsx
}

console.log('LifeCycleA constructor called');

}
```
static getDerivedStateFromProps(props, state){

```jsx
console.log('LifeCycleA getDerivedStateFromProps called');

return null;

}
```
componentDidMount(){

```jsx
console.log('LifeCycleA componentDidMount called');

}
```
render() {

```jsx
console.log('LifeCycleA render called');

return (
```
<div>

LifeCycle A

### <LifecycleB />

</div>

```jsx
)

}

}

export default LifecycleA;
```

### LifecycleB.js

```jsx
import React, { Component } from 'react'

class LifecycleB extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
name:"Rishabh"

```jsx
}

console.log('LifeCycleB constructor called');

}
```
static getDerivedStateFromProps(props, state){

```jsx
console.log('LifeCycleB getDerivedStateFromProps called');

return null;

}
```
componentDidMount(){

```jsx
console.log('LifeCycleB componentDidMount called');

}
```
render() {

```jsx
console.log('LifeCycleB render called');

return (
```
<div>

LifeCycle B

</div>

```jsx
)

}

}

export default LifecycleB;
```

**Output:**

LifeCycleA constructor called

LifeCycleA getDerivedStateFromProps called

LifeCycleA render called

LifeCycleB constructor called

LifeCycleB getDerivedStateFromProps called

LifeCycleB render called

LifeCycleB componentDidMount called

LifeCycleA componentDidMount called

## Updating LifeCycle Methods

### static getDerivedStateFromProps(nextProps, state)

It is **called every time when a component is re-rendered.** It is used to set state directly and Do not cause side effects.

### shouldComponentUpdate(nextProps, nextState)

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
### render()

It is the only required method. It reads props and state and returns JSX. Here do not change state or interact with DOM or make ajax calls. Children components lifecycle methods are also executed.

### getSnapshotBeforeUpdate(prevProps, prevState)

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

### componentDidUpdate(prevProps, prevState, snapshot)

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
We will add some changes in our previous code.

### LifecycleA.js

```jsx
import React, { Component } from 'react'

import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
name:"Rishabh"

```jsx
}

console.log('LifeCycleA constructor called');

}
```
static getDerivedStateFromProps(props, state){

```jsx
console.log('LifeCycleA getDerivedStateFromProps called');

return null;

}
```
componentDidMount(){

```jsx
console.log('LifeCycleA componentDidMount called');

}
```
**shouldComponentUpdate(){**

```jsx
**console.log('LifeCycleA shouldComponentUpdate called');**
```
**return true;**

**}**

**getSnapshotBeforeUpdate(prevProps, prevState){**

```jsx
**console.log('LifeCycleA getSnapshotBeforeUpdate called');**
```
**return null;**

**}**

**componentDidUpdate(){**

```jsx
**console.log('LifeCycleA componentDidUpdate called');**
```
**}**

```jsx
**changeState = ()=>{**
```
**this.setState({ name:"Rishabh Sisodiya"})**

**}**

render() {

```jsx
console.log('LifeCycleA render called');

return (
```
<div>

LifeCycle A

**<button onClick={this.changeState}>Change state</button>**

<LifecycleB />

</div>

```jsx
)

}

}

export default LifecycleA;
```

### LifecycleB.js

```jsx
import React, { Component } from 'react'

class LifecycleB extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
name:"Rishabh"

```jsx
}

console.log('LifeCycleB constructor called');

}
```
static getDerivedStateFromProps(props, state){

```jsx
console.log('LifeCycleB getDerivedStateFromProps called');

return null;

}
```
componentDidMount(){

```jsx
console.log('LifeCycleB componentDidMount called');

}
```
**shouldComponentUpdate(){**

```jsx
**console.log('LifeCycleB shouldComponentUpdate called');**
```
**return true;**

**}**

**getSnapshotBeforeUpdate(prevProps, prevState){**

```jsx
**console.log('LifeCycleB getSnapshotBeforeUpdate called');**
```
**return null;**

**}**

**componentDidUpdate(){**

```jsx
**console.log('LifeCycleB componentDidUpdate called');**
```
**}**

render() {

```jsx
console.log('LifeCycleB render called');

return (
```
<div>

LifeCycle B

</div>

```jsx
)

}

}

export default LifecycleB;
```

**Output:**

LifeCycleA constructor called

LifeCycleA getDerivedStateFromProps called

LifeCycleA render called

LifeCycleB constructor called

LifeCycleB getDerivedStateFromProps called

LifeCycleB render called

LifeCycleB componentDidMount called

LifeCycleA componentDidMount called

**//After clicking on change state button – updating phase**

LifeCycleA getDerivedStateFromProps called

LifeCycleA shouldComponentUpdate called

LifeCycleA render called

LifeCycleB getDerivedStateFromProps called

LifeCycleB shouldComponentUpdate called

LifeCycleB render called

### LifeCycleB getSnapshotBeforeUpdate called

### LifeCycleA getSnapshotBeforeUpdate called

### LifeCycleB componentDidUpdate called

LifeCycleA componentDidUpdate called

## Unmounting Lifecycle Methods

### componentWillUnmount()

Method is invoked immediately before a component is unmounted or destroyed. Canceling any network requests, removing event handlers, cancel any subscriptions and also invalidating timers. **Do not call the setState method** componentWillUnmount should not return anything.

componentWillUnmount() {

```jsx
this.destroyConnection();

}
```
## Error handling Lifecycle Method

### static getDerivedStateFromError(error) & componentDidCatch(error, info)

These methods are called when there is an error either during rendering, in a lifecycle method or in the constructor of any child component.

### Error Boundary

**A class component that implements either one or both lifecycle methods** getDerivedStateFromError and componentDidCatch becomes an error Boundary

The static **getDerivedStateFromError** method is used to render a fallback UI after an error is thrown and the **componentDidCatch** method is used to log the error information.

### App.js

**import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";**

**import Hero from "./components/ErrorBoundary/Hero";**

```jsx
function App() {

return (
```
<div className="App">

### <ErrorBoundary>

### <Hero heroName="Superman" />

### </ErrorBoundary>

### <ErrorBoundary>

### <Hero heroName="Batman" />

### </ErrorBoundary>

### <ErrorBoundary>

### <Hero heroName="Joker" />

### </ErrorBoundary>

</div>

```jsx
);

}

export default App;
```

### Hero.js

```jsx
import React from 'react'

const Hero = ({heroName}) => {
```
if (heroName === 'Joker') {

```jsx
throw new Error('not a hero');

}

return (
```
<div>

{heroName}

</div>

```jsx
)

}

export default Hero
```

### ErrorBoundary.js

```jsx
import React, { Component } from 'react'

class ErrorBoundary extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
hasError:false

```jsx
}

}
```
**static getDerivedStateFromError(error){**

**return {**

### hasError:true

**}**

**}**

**componentDidCatch(error, info){**

```jsx
**console.log(error);**

**console.log(info);**
```
**}**

render() {

if (this.state.hasError) {

```jsx
return <h1>Something went wrong</h1>

}
```
**return this.props.children;**

```jsx
}

}

export default ErrorBoundary
```

## Legacy Methods (Deprecated)

The lifecycle methods below are marked as “legacy”. They still work, but we don’t recommend using them in the new code.

UNSAFE_**componentWillMount()** is invoked just before mounting occurs. It is **called before render()**, therefore calling setState() synchronously in this method will not trigger an extra rendering. Generally, we recommend using the constructor() instead for initializing state. Avoid introducing any side-effects or subscriptions in this method. For those use cases, **use componentDidMount() instead.** This is the only lifecycle method called on server rendering.

UNSAFE_**componentWillReceiveProps**() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method. Note that if a parent component causes your component to re-render, this method will be called even if props have not changed. Make sure to compare the current and next values if you only want to handle changes.

### Use getDerivedStateFromProps instead

### UNSAFE_componentWillReceiveProps(nextProps)

UNSAFE_**componentWillUpdate**() is invoked just before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render. Note that you cannot call this.setState() here; nor should you do anything else (e.g. dispatch a Redux action) that would trigger an update to a React component before UNSAFE_componentWillUpdate() returns. Typically, this method can be **replaced** **by** **componentDidUpdate**(). If you were reading from the DOM in this method (e.g. to save a scroll position), you can move that logic to getSnapshotBeforeUpdate().

### UNSAFE_componentWillUpdate(nextProps, nextState)
