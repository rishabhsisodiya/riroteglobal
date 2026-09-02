---
title: "Render Props -imp"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 13
description: "React — Render Props -imp."
---
Just like HOC shares functionality between components without repeating the code there is another pattern which is render props.

**The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.**

So we are using the same counter problem example that we used in HOC.

### Using props render method

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

### ClickCounter.js

```jsx
import React, { Component } from 'react'

class ClickCounter extends Component {
```
render() {

### const {count, incrementCounter} = this.props;

```jsx
return (
```
<div>

<button onClick={incrementCounter}>Clicked {count} times</button>

</div>

```jsx
)

}

}

export default ClickCounter
```

### HoverCounter.js

```jsx
import React, { Component } from 'react'

class HoverCounter extends Component {
```
render() {

### const {count, incrementCounter} = this.props;

```jsx
return (
```
<div>

### <h1 onMouseOver={incrementCounter}>Hovered {count} times</h1>

</div>

```jsx
)

}

}

export default HoverCounter;
```

It’s important to remember that just because the pattern is called “render props” you don’t have to use a prop named render to use this pattern. In fact, **any prop that is a function that a component uses to know what to render is technically a “render prop”.**

### Using children props

### App.js

```jsx
import ClickCounter from "./components/RenderProps/ClickCounter";

import Counter from "./components/RenderProps/Counter";

import HoverCounter from "./components/RenderProps/HoverCounter";

function App() {

return (
```
<div className="App">

### <Counter>

### {(count, incrementCounter) => (

### <ClickCounter count={count} incrementCounter={incrementCounter} />

**)}**

### </Counter>

### <Counter>

### {(count, incrementCounter) => (

### <HoverCounter count={count} incrementCounter={incrementCounter} />

**)}**

### </Counter>

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

{t**his.props.children**(this.state.count, this.incrementCounter)}

</div>

```jsx
)

}

}

export default Counter
```

**Clickcounter and hovercounter js file remain same.**

### Caveats or Limitation

### Be careful when using Render Props with React.PureComponent

Using a render prop can negate the advantage that comes from using React.PureComponent if you create the function inside a render method. This is because the shallow prop comparison will always return false for new props, and **each render in this case will generate a new value for the render prop as the arrow function will return a new instance which is always different and fails in shallow comparison**.

For example, continuing with our <Mouse> component from above, if Mouse were to extend

To get around this problem, you can sometimes **define the prop as an instance method,** like so:

```jsx
class MouseTracker extends React.Component {
```
// Defined as an instance method, \`this.renderTheCat\` always

// refers to \*same\* function when we use it in render

### renderTheCat(mouse) {

### return <Cat mouse={mouse} />;

**}**

render() {

```jsx
return (
```
<div>

<h1>Move the mouse around!</h1>

<Mouse render={this.renderTheCat} />

</div>

```jsx
);

}

}
```

In cases where you cannot define the prop statically (e.g. because you need to close over the component’s props and/or state) <Mouse> should extend React.Component instead.
