---
title: "Memo"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 16
imp: true
description: "React — Memo."
---
**Pure Component works only in class components that’s why React.memo comes into picture.**

**React.memo is a higher order component.** **It comes in React 16.6**.

If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that **React will skip rendering the component, and reuse the last rendered result.**

Please use the PureComponent section code here and make a new file MemoComp.js in the same folder.

### MemoComp.js

```jsx
import React from 'react'

const MemoComp = ({name}) => {

console.log('Rendering Memo Component');

return (
```
<div>

{name}

</div>

```jsx
)

}

export default **React.memo**(MemoComp);
```

### ParentComp.js

```jsx
import React, { Component } from 'react'
```
**import MemoComp from './MemoComp';**

```jsx
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
console.log("**********Parent Component*********");

return (
```
<div>

Parent Component

**{/\* <RegComp name={this.state.name}/>**

**<PureComp name={this.state.name}/> \*/}**

**<MemoComp name={this.state.name} />**

</div>

```jsx
)

}

}

export default ParentComp
```

**React.memo only checks for prop changes.** If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, **it will still rerender when state or context change.**

By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.

```jsx
function MyComponent(props) {
```
/\* render using props \*/

```jsx
}

function areEqual(prevProps, nextProps) {
```
/\*

return true if passing nextProps to render would return

the same result as passing prevProps to render,

otherwise return false

\*/

```jsx
}

export default React.memo(MyComponent, areEqual);
```

This method only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can lead to bugs.
