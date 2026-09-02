---
title: "Use setState() correctly"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 5
imp: true
description: "React — Use setState() correctly."
---
**_1. If you do not use setState method for updating state value then UI update will not happen._**

You can assign value directly to state, you need to use setState method to update the state value and if you do not use setState then it will not render your component and hence there will be no update in UI.

**_2. Callback in setState (to use updated state’s value just after setState)_**

We have used the ES7 feature below where we can directly initialize constructor properties. Here we have initialized state directly

| Before ES7 | After ES7 |
| --- | --- |
| constructor(props) { super(props); this.state = {count:0}; } | state = { count: 0, }; |

App.js

```jsx
import Counter from "./components/Counter";

function App() {

return (
```
<div className="App">

### <Counter />

</div>

```jsx
);

}

export default App;
```

Counter.js under src/component folder

```jsx
import React, { Component } from "react";

class Counter extends Component {

state = {

count: 0,

};

increment = () => {
```
**this.setState({**

### count: this.state.count + 1

**},()=> console.log('callback in setState for immediate state change ',this.state.count)**

**);**

**// below console.log will not print updated count value**

```jsx
**console.log(this.state.count);**

};
```
render() {

```jsx
return (
```
<div>

```jsx
Count: {this.state.count}
```
<button onClick={this.increment}>Increment</button>

</div>

```jsx
);

}

}

export default Counter;
```

### 3. To update state based on prev state

**Problem: React group multiple setState call into single update for better performance**

Here in the code below five increment() calls updated to setState in incrementFive() will be clubbed into one. Updated value doesn’t carry over between the different calls.

### Counter.js

```jsx
import React, { Component } from "react";

class Counter extends Component {

state = {

count: 0,

};

increment = () => {
```
this.setState({

```jsx
count: this.state.count + 1
```
},()=> console.log('callback in setState for immediate state change ',this.state.count));

// log will not print updated count value below

```jsx
console.log(this.state.count);

};

**incrementFive** = ()=>{

this.increment();

this.increment();

this.increment();

this.increment();

this.increment();

}
```
render() {

```jsx
return (
```
<div>

```jsx
Count: {this.state.count}
```
<button onClick={t**his.incrementFive**}>Increment</button>

</div>

```jsx
);

}

}

export default Counter;
```

-   -   -   -   1.  **Solution:**

### Counter.js

```jsx
import React, { Component } from "react";

class Counter extends Component {

state = {

count: 0,

};

increment = () => {
```
// this.setState({

// count: this.state.count + 1

// },()=> console.log('callback in setState for immediate state change ',this.state.count));

// // log will not print updated count value below

```jsx
// console.log(this.state.count);

**this.setState( (prevState) => ({count:prevState.count+1}) );**
```
**// You can use props as well along with prevState**

```jsx
**//this.setState( (prevState,props) => ({count:prevState.count+props.addValue}) );**

};

incrementFive = ()=>{

this.increment();

this.increment();

this.increment();

this.increment();

this.increment();

}
```
render() {

```jsx
return (
```
<div>

```jsx
Count: {this.state.count}
```
<button onClick={this.incrementFive}>Increment</button>

</div>

```jsx
);

}

}

export default Counter;
```
