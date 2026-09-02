---
title: "Form Handling"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 10
description: "React — Form Handling."
---
## Controlled Components

In HTML, f**orm elements** **such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().**

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. **An input form element whose value is controlled by React in this way is called a “controlled component**

### Input tag

```jsx
class NameForm extends React.Component {

constructor(props) {

super(props);
```
**this.state = {value: ''};**

```jsx
this.handleChange = this.handleChange.bind(this);

this.handleSubmit = this.handleSubmit.bind(this);

}
```
**handleChange(event) {**

**this.setState({value: event.target.value});**

**}**

**handleSubmit(event) {**

**alert('A name was submitted:' + this.state.value);**

**event.preventDefault();**

**}**

render() {

```jsx
return (
```
**<form onSubmit={this.handleSubmit}>**

<label>

Name:

**<input type="text" value={this.state.value} onChange={this.handleChange} />**

</label>

<input type="submit" value="Submit" />

</form>

```jsx
);

}

}
```

### The select Tag

```jsx
class FlavorForm extends React.Component {

constructor(props) {

super(props);
```
**this.state = {value: 'coconut'};**

```jsx
this.handleChange = this.handleChange.bind(this);

this.handleSubmit = this.handleSubmit.bind(this);

}
```
**handleChange(event) {**

**this.setState({value: event.target.value});**

**}**

handleSubmit(event) {

```jsx
alert('Your favorite flavor is: ' + this.state.value);

event.preventDefault();

}
```
render() {

```jsx
return (
```
<form onSubmit={this.handleSubmit}>

<label>

Pick your favorite flavor:

**<select value={this.state.value} onChange={this.handleChange}**\>

<option value="grapefruit">Grapefruit</option>

<option value="lime">Lime</option>

<option value="coconut">Coconut</option>

<option value="mango">Mango</option>

</select>

</label>

<input type="submit" value="Submit" />

</form>

```jsx
);

}

}
```

## Handling Multiple Inputs (imp)

```jsx
class Reservation extends React.Component {

constructor(props) {

super(props);
```
**this.state = {**

**isGoing: true,**

### numberOfGuests: 2

**};**

```jsx
this.handleInputChange = this.handleInputChange.bind(this);

}
```
**handleInputChange(event) {**

**const target = event.target;**

**const value = target.type === 'checkbox' ? target.checked: target.value;**

**const name = target.name;**

**this.setState({**

### \[name\]: value

**});**

**}**

render() {

```jsx
return (
```
<form>

<label>

Is going:

**<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />**

</label>

<br />

<label>

Number of guests:

**<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} nChange={this.handleInputChange} />**

</label>

</form>

```jsx
);

}

}
```

### Computed property names (ES2015) --imp

```jsx
let i = 0
```
**let a = {**

**\['foo' + ++i\]: i,**

**\['foo' + ++i\]: i,**

### \['foo' + ++i\]: i

**}**

```jsx
**console.log(a.foo1) // 1**

**console.log(a.foo2) // 2**

**console.log(a.foo3) // 3**

const items = ["A","B","C"];

const obj = {
```
\[items\]: "Hello"

```jsx
}

console.log(obj); // A,B,C: "Hello"

console.log(obj["A,B,C"]) // "Hello"

let param = 'size'
```
**let config = {**

**\[param\]: 12,**

### \['mobile' + param.charAt(0).toUpperCase() + param.slice(1)\]: 4

**}**

```jsx
**console.log(config) // {size: 12, mobileSize: 4}**
```

## Controlled Input Null Value

Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```jsx
ReactDOM.render(<input value="hi" />, mountNode);
```
setTimeout(function() {

```jsx
ReactDOM.render(<input value={null} />, mountNode);

}, 1000);
```
