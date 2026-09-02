---
title: "Pure Component (imp)"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 15
description: "React — Pure Component (imp)."
---
React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but **React.PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison.**

If your React component render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

### App.js

```jsx
import ParentComp from "./components/PureComps/ParentComp";

function App() {

return (
```
<div className="App">

<ParentComp />

</div>

```jsx
);

}

export default App;
```

### ParentComp.js

```jsx
import React, { Component } from 'react'

import PureComp from './PureComp';

import RegComp from './RegComp';

class ParentComp extends Component {

constructor(props) {
```
super(props)

```jsx
this.state = {
```
name:"Rishabh"

```jsx
}

}
```
componentDidMount(){

```jsx
setInterval(() => {
```
this.setState({name:"Rishabh"})

```jsx
}, 2000);

}
```
render() {

```jsx
console.log("\*\*\*\*\*\*\*\*\*\*Parent Component\*\*\*\*\*\*\*\*\*");

return (
```
<div>

Parent Component

<RegComp name={this.state.name}/>

<PureComp name={this.state.name}/>

</div>

```jsx
)

}

}

export default ParentComp
```

### RegComp.js

```jsx
import React, { Component } from 'react'

class RegComp extends Component {
```
render() {

```jsx
console.log("Regular Component");

return (
```
<div>

Regular component {this.props.name}

</div>

```jsx
)

}

}

export default RegComp
```

### PureComp.js

```jsx
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
```
render() {

```jsx
console.log("Pure Component");

return (
```
<div>

Pure Component {this.props.name}

</div>

```jsx
)

}

}

export default PureComp
```

**Output:**

\*\*\*\*\*\*\*\*\*\*Parent Component\*\*\*\*\*\*\*\*\*

### Regular Component

### Pure Component

\*\*\*\*\*\*\*\*\*\*Parent Component\*\*\*\*\*\*\*\*\*

### Regular Component

\*\*\*\*\*\*\*\*\*\*Parent Component\*\*\*\*\*\*\*\*\*

Regular Component

\*\*\*\*\*\*\*\*\*\*Parent Component\*\*\*\*\*\*\*\*\*

…..cont...

## Shallow Comparison (imp)

### Primitive Types

**a (SC) b returns true if a and b have the same value and are of the same type**

```jsx
Ex: string 'Rishabh' (SC) string 'Rishabh' returns true
```
### Complex Types

a (SC) b returns true if a and b reference the exact same object.

```jsx
var a= \[1,2,3\];

var b = \[1,2,3\];

var c = a;

var ab_eq = (a === b); // false

var ac_eq = (a === c); // true
```
and same with Object also.

Pure component does shallow comparison of prevState with currentState .

It also does shallow comparison of prevProps with currentProps .

When there is a difference in the above comparison then the component will re-render.

### Points to Remember

It is a good idea to ensure that all children components are also pure components to avoid unexpected behavior.

Never mutate the state. Always return a new object that reflects the new state.
