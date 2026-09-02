---
title: "Higher order component"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 12
imp: true
description: "React — Higher order component."
---
A **higher-order component** is a function that takes a component and returns a new component.

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. **A HOC is a pure function with zero side-effects.**

**Why do we need HOC?**

**To share the common functionality between components.**

To understand this let’s consider below code

### App.js

i**mport ClickedCounter from "./components/HIgherOrderComponent/ClickedCounter";**

```jsx
function App() {

return (
```
<div className="App">

### <ClickedCounter />

</div>

```jsx
);

}

export default App;
```

### ClickedCounter.js

```jsx
import React, { Component } from 'react'

class ClickedCounter extends Component {

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
const {count} = this.state;

return (
```
<div>

<button onClick={this.incrementCounter}>Clicked {count} times</button>

</div>

```jsx
)

}

}

export default ClickedCounter
```

**Let’s Assume the client** comes up with a new requirement that he needs a similar UI but instead of button click now he needs a heading that indicates the number of times you hover over it.

Basically A click counter with click functionality replaced with hover functionality.

### App.js

```jsx
import ClickedCounter from "./components/HIgherOrderComponent/ClickedCounter";
```
**import HoveredCounter from "./components/HIgherOrderComponent/HoveredCounter";**

```jsx
function App() {

return (
```
<div className="App">

<ClickedCounter />

### <HoveredCounter />

</div>

```jsx
);

}

export default App;
```

### HoveredCounter.js

```jsx
import React, { Component } from 'react'

class HoveredCounter extends Component {

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
const {count} = this.state;

return (
```
<div>

<h1 onMouseOver={this.incrementCounter}>Hovered {count} times</h1>

</div>

```jsx
)

}

}

export default HoveredCounter
```

Now the client comes with another UI similar to above ones but this time he needs counter increment on key press down.

Here we are realizing we are just duplicate increment counter functionality for every component.

In our case we can use react functionality lifting the state up (send logic in parent and use it in both childs)

But what if we need the logic not in the immediate child what we need logic in **when we go down 3-4 levels in hierarchy then lifting the state up concept is not a great solution.**![](/notes-img/react-notes/img-014.webp)

![](/notes-img/react-notes/img-015.webp)

### Basic Syntax of HOC (imp)

```jsx
const UpdatedComponent = OriginalComponent =>{

class NewComponent extends React.Component{
```
render(){

```jsx
return <OriginalComponent name="Rishabh" />

}

}

return NewComponent;

}

export default UpdatedComponent;
```

**Output if we use above basic component in our counter problem case**

### ClickCounter.js

```jsx
import React, { Component } from 'react'
```
**import UpdatedComponent from './withCounter';**

```jsx
class ClickedCounter extends Component {

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

<button onClick={this.incrementCounter}>**{this.props.name}** Clicked {this.state.count} times</button>

</div>

```jsx
)

}

}

export default **UpdatedComponent**(ClickedCounter)
```

![](/notes-img/react-notes/img-016.webp)
_UI OUTPUT_

**Solution to our counter problem.**

**withCounter.js (Compare it with Syntax for better understanding)**

```jsx
import React from 'react'

const **withCounter** = **WrappedComponent** =>{

class **WithCounter** extends React.Component{
```
**// Common functionality**

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
return <**WrappedComponent** count={this.state.count} incrementCounter={this.incrementCounter}/>

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
**import withCounter from './withCounter';**

```jsx
class ClickedCounter extends Component {
```
render() {

**// Destructured props = props from HOC**

**const {count, incrementCounter} = this.props;**

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
**import withCounter from './withCounter';**

```jsx
class HoveredCounter extends Component {
```
render() {

**// Destructured props = props from HOC**

**const {count, incrementCounter} = this.props;**

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

### HOC comes with an issue!!! (imp)

### Pass Unrelated Props Through to the Wrapped Component

If we pass props in our child component which are wrapped in HOC from parent then we can’t use those props passed from parent but we can use those props in our HOC component so fix this issue we pass rest of the props in WrappedComponent HOC {...props}.

**withCounter.js (Fixed prop issue and it is must)**

```jsx
import React from 'react'

const withCounter = WrappedComponent =>{

class WithCounter extends React.Component{
```
// Common functionality

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
return <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} **{...this.props}**/>

}

}

return WithCounter;

}

export default withCounter;
```

### Pass parameter in HOC

**Suppose we need to use different increment value in counter.** So we will pass the value from our orginalComponent or WrappedComponent along with it in HOC and we don't pass this value from wrappedcomponent then it will show NaN in UI.

**withCounter.js (Compare with Syntax for better understanding)**

```jsx
import React from 'react'

const withCounter = **(**WrappedComponent, **incrementNumber)** =>{

class WithCounter extends React.Component{
```
// Common functionality

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

count:this.state.count+**incrementNumber**

})

```jsx
}
```
render(){

```jsx
return <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} {...this.props}/>

}

}

return WithCounter;

}

export default withCounter;
```

### ClickedCounter.js

```jsx
import React, { Component } from 'react'

import withCounter from './withCounter';

class ClickedCounter extends Component {
```
render() {

// Destructured props = props from HOC

```jsx
const {count, incrementCounter} = this.props;

return (
```
<div>

<button onClick={incrementCounter}>Clicked {count} times</button>

</div>

```jsx
)

}

}

export default withCounter(ClickedCounter**, 5**)
```

**So if we don’t pass that 5 then it show NAN in ui so make sure to pass value**

### HoveredCounter.js

```jsx
import React, { Component } from 'react'

import withCounter from './withCounter';

class HoveredCounter extends Component {
```
render() {

// Destructured props = props from HOC

```jsx
const {count, incrementCounter} = this.props;

return (
```
<div>

<h1 onMouseOver={incrementCounter}>Hovered {count} times</h1>

</div>

```jsx
)

}

}

export default withCounter(HoveredCounter**, 10**)
```

### Don’t Mutate the Original Component(Prototype). Use Composition.

Resist the temptation to **modify a component’s prototype** (or otherwise mutate it) inside a HOC.

```jsx
function logProps(InputComponent) {
```
**InputComponent.prototype.componentDidUpdate** = function(prevProps) {

```jsx
console.log('Current props: ', this.props);

console.log('Previous props: ', prevProps);

};
```
// The fact that we're returning the original input is a hint that it has

// been mutated.

```jsx
return InputComponent;

}
```
// EnhancedComponent will log whenever props are received

```jsx
const EnhancedComponent = logProps(InputComponent);
```

There are a few problems with this. One is that the input component cannot be reused separately from the enhanced component. **More crucially, if you apply another HOC to EnhancedComponent that also mutates componentDidUpdate, the first HOC’s functionality will be overridden!** **This HOC also won’t work with function components, which do not have lifecycle methods.**

Mutating HOCs are a leaky abstraction—**the consumer must know how they are implemented in order to avoid conflicts with other HOCs.**

Instead of mutation, HOCs should use composition, by wrapping the input component in a container component:

### Container Component

You may have noticed similarities between HOCs and a pattern called container components. **Container components are part of a strategy of separating responsibility between high-level and low-level concerns**. Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI. **HOCs use containers as part of their implementation**. You can think of HOCs as parameterized container component definitions.

A **presentational** **component** is a component that just renders HTML. **Container Pattern** is commonly used to separate data fetching/logic, events, and state from presentational components (aka, dumb components)

## Caveat or limitation (imp)

### Don’t Use HOCs Inside the render Method

The problem here isn’t just about performance — **remounting a component causes the state of that component and all of its children to be lost**. Instead, apply HOCs outside the component definition so that the resulting component is created only once. Then, its identity will be consistent across renders. This is usually what you want, anyway.

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
**Why you shouldn't use it like above is because everytime render method is called a new instance of the MyComponent is created wrapped by HOC called Wrap and hence every time it can be mounted again instead of going by the natural lifecycle or React.**

**However if your HOC passes a function as props, you can use it within the render as long as it does not cause a re-render again otherwise it will lead to an infinite loop.**

Also its better to memoize functions which are called in render directly to avoid computation again and again

### Static Methods Must Be Copied Over

When you apply a HOC to a component, though, the original component is wrapped with a container component. That means **the new component does not have any of the static methods of the original component.**

// Define a static method

```jsx
WrappedComponent.staticMethod = function() {/*...*/}
```
// Now apply a HOC

```jsx
const EnhancedComponent = enhance(WrappedComponent);
```
// The enhanced component has no static method

typeof EnhancedComponent.staticMethod === 'undefined' // true

### Solutions

-   -   -   -   1.  **_1. To solve this, you could copy the methods onto the container before returning it:_**

```jsx
function enhance(WrappedComponent) {

class Enhance extends React.Component {/*...*/}
```
// Must know exactly which method(s) to copy :(

**Enhance.staticMethod = WrappedComponent.staticMethod;**

**return Enhance;**

```jsx
}
```

-   -   -   -   1.  **_2. You can use hoist-non-react-statics package to automatically copy all non-React static methods_**

**import hoistNonReactStatic from 'hoist-non-react-statics';**

```jsx
function enhance(WrappedComponent) {

class Enhance extends React.Component {/*...*/}

**hoistNonReactStatic**(Enhance, WrappedComponent);

return Enhance;

}
```

-   -   -   -   1.  **_3. You can export the static method separately from the component itself._**

// Instead of...

```jsx
MyComponent.someFunction = someFunction;

export default MyComponent;
```
// ...export the method separately...

```jsx
export { someFunction };
```
// ...and in the consuming module, import both

**import MyComponent, { someFunction } from './MyComponent.js';**

### Refs Aren’t Passed Through

While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. **That’s because ref is not really a prop** — like a key, it’s handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component.

The solution for this problem is to **use the React.forwardRef API**
