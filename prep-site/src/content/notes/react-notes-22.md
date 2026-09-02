---
title: "React Without ES6"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 22
description: "React — React Without ES6."
---
## Javascript Class

Normally you would define a React component as a plain JavaScript class:

```jsx
class Greeting extends React.Component {
```
render() {

```jsx
return <h1>Hello, {this.props.name}</h1>;

}

}
```

If you don’t use ES6 yet, you may use the create-react-class module instead:

### var createReactClass = require('create-react-class');

### var Greeting = createReactClass({

### render: function() {

### return <h1>Hello, {this.props.name}</h1>;

**}**

**});**

## Declaring Default Props

**Default props:** For some reasons, we might decide not to pass some props but whatever might be our reason we wouldn’t want to see undefined in our app. To solve this issue, we can use the logical operator || to set a fallback value, so when a prop is missing it displays the fallback value in place of the missing prop. This works fine but we won’t go about attaching || to all our code. **defaultProps** is a property in the React component used to set default values for the props argument. It will be changed if the prop property is passed.

With functions and ES6 classes defaultProps is defined as a property on the component itself:

```jsx
class Greeting extends React.Component {
```
// ...

```jsx
}

Greeting.defaultProps = {

name: 'Mary'

};
```

With createReactClass(), you need to define getDefaultProps() as a function on the passed object:

```jsx
var Greeting = createReactClass({

getDefaultProps: function() {

return {

name: 'Mary'

};
```
},

// ...

```jsx
});
```

## Setting the Initial State

In ES6 classes, you can define the initial state by assigning this.state in the constructor:

```jsx
class Counter extends React.Component {

constructor(props) {

super(props);

this.state = {count: props.initialCount};

}
```
// ...

```jsx
}
```

With createReactClass(), you have to provide a separate getInitialState method that returns the initial state:

```jsx
class Counter extends React.Component {

constructor(props) {

super(props);

this.state = {count: props.initialCount};

}
```
// ...

```jsx
}
```

## Autobinding

In React components declared as ES6 classes, methods follow the same semantics as regular ES6 classes. This means that they don’t automatically bind this to the instance. You’ll have to explicitly use .bind(this) in the constructor:

```jsx
class SayHello extends React.Component {

constructor(props) {

super(props);

this.state = {message: 'Hello!'};
```
// This line is important!

```jsx
this.handleClick = this.handleClick.bind(this);

}
```
handleClick() {

```jsx
alert(this.state.message);

}
```
render() {

// Because \`this.handleClick\` is bound, we can use it as an event handler.

```jsx
return (
```
<button onClick={this.handleClick}>

Say hello

</button>

```jsx
);

}

}
```

With createReactClass(), this is not necessary because it binds all methods:

```jsx
var SayHello = createReactClass({

getInitialState: function() {

return {message: 'Hello!'};
```
},

```jsx
handleClick: function() {

alert(this.state.message);
```
},

```jsx
render: function() {

return (
```
<button onClick={this.handleClick}>

Say hello

</button>

```jsx
);

}

});
```
