---
title: "Refs"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 17
imp: true
description: "React — Refs."
---
Refs **provide a way to access DOM nodes or React elements** created in the render method. Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

```jsx
class CustomTextInput extends React.Component {

constructor(props) {

super(props);
```
// create a ref to store the textInput DOM element

**this.textInput = React.createRef();**

```jsx
this.focusTextInput = this.focusTextInput.bind(this);

}
```
focusTextInput() {

// Explicitly focus the text input using the raw DOM API

// Note: we're accessing "current" to get the DOM node

**this.textInput.current.focus();**

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

### Callback Refs (imp)

React also supports another way to set refs called “callback refs”, which gives more fine-grain control over when refs are set and unset.

Instead of passing a ref attribute created by createRef(), you pass a function. The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere.

```jsx
class CustomTextInput extends React.Component {

constructor(props) {

super(props);
```
**this.textInput = null;**

```jsx
**this.setTextInputRef = element => {**
```
**this.textInput = element;**

**};**

```jsx
**this.focusTextInput = () => {**
```
**// Focus the text input using the raw DOM API**

**if (this.textInput) this.textInput.focus();**

**};**

```jsx
}
```
componentDidMount() {

**// autofocus the input on mount**

**this.focusTextInput();**

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

**ref={this.setTextInputRef}**

/>

<input

type="button"

value="Focus the text input"

**onClick={this.focusTextInput}**

/>

</div>

```jsx
);

}

}
```

### Caveats with callback refs

If the **ref callback** is defined as an **inline function**, it will g**et called twice during updates**, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one. You can avoid this by defining the ref callback as a bound method on the class, but note that it shouldn’t matter in most cases.

### Adding a Ref to a Class Component

If we wanted to wrap the CustomTextInput above to simulate it being clicked immediately after mounting, we could use a ref to get access to the custom input and call its focusTextInput method manually:

```jsx
class AutoFocusTextInput extends React.Component {

constructor(props) {

super(props);
```
**this.textInput = React.createRef();**

```jsx
}
```
componentDidMount() {

**this.textInput.current.focusTextInput();**

```jsx
}
```
render() {

```jsx
return (
```
**<CustomTextInput ref={this.textInput} />**

```jsx
);

}

}
```

**Note** that this only works if CustomTextInput is declared as a class:

```jsx
class CustomTextInput extends React.Component {
```
// ...

```jsx
}
```
### Refs Forwarding

Ref forwarding is a technique for **automatically passing a ref through a component to one of its children. React.forwardRef((props, ref) => ...)**

### App.js

**import ParentInputRef from "./components/RefsConcept/ParentInputRef";**

```jsx
function App() {

return (
```
<div className="App">

### <ParentInputRef />

</div>

```jsx
);

}

export default App;
```

### ParentInputRef.js

```jsx
import React, { Component } from 'react'
```
**import FRInputRef from './FRInputRef';**

```jsx
class ParentInputRef extends Component {

constructor(props) {
```
super(props)

t**his.inputRef = React.createRef();**

```jsx
}
```
**componentDidMount(){**

**// For autofocus**

**this.inputRef.current.focus();**

**}**

render() {

```jsx
return (
```
<div>

**<FRInputRef ref={this.inputRef}/>**

### <button>Focus Input</button>

</div>

```jsx
)

}

}

export default ParentInputRef
```

### FRInputRef.js

```jsx
import React from 'react'

const FRInputRef = **React.forwardRef((props, ref) => {**

return (
```
<div>

**<input type="text" ref={ref}/>**

</div>

```jsx
)
```
**})**

```jsx
export default FRInputRef
```

**This technique is also used in higher order components where React.forwardRef() takes the whole function.**
