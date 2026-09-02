---
title: "Typechecking With PropTypes"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 24
description: "React — Typechecking With PropTypes."
---
React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead. We provide a codemod script to automate the conversion.

As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:

```jsx
import PropTypes from 'prop-types';

class Greeting extends React.Component {
```
render() {

```jsx
return (
```
<h1>Hello, {this.props.name}</h1>

```jsx
);

}

}

Greeting.propTypes = {

name: PropTypes.string

};
```

PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

Here is an example documenting the different validators provided:

```jsx
import PropTypes from 'prop-types';

MyComponent.propTypes = {
```
// You can declare that a prop is a specific JS type. By default, these

// are all optional.

```jsx
optionalArray: PropTypes.array,

optionalBool: PropTypes.bool,

optionalFunc: PropTypes.func,

optionalNumber: PropTypes.number,

optionalObject: PropTypes.object,

optionalString: PropTypes.string,

optionalSymbol: PropTypes.symbol,
```
// Anything that can be rendered: numbers, strings, elements or an array

// (or fragment) containing these types.

```jsx
optionalNode: PropTypes.node,
```
// A React element.

```jsx
optionalElement: PropTypes.element,
```
// A React element type (ie. MyComponent).

```jsx
optionalElementType: PropTypes.elementType,
```
// You can also declare that a prop is an instance of a class. This uses

// JS's instanceof operator.

```jsx
optionalMessage: PropTypes.instanceOf(Message),
```
// You can ensure that your prop is limited to specific values by treating

// it is an enum.

```jsx
optionalEnum: PropTypes.oneOf(\['News', 'Photos'\]),
```
// An object that could be one of many types

```jsx
optionalUnion: PropTypes.oneOfType(\[
```
PropTypes.string,

PropTypes.number,

PropTypes.instanceOf(Message)

\]),

// An array of a certain type

```jsx
optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
```
// An object with property values of a certain type

```jsx
optionalObjectOf: PropTypes.objectOf(PropTypes.number),
```
// An object taking on a particular shape

```jsx
optionalObjectWithShape: PropTypes.shape({

color: PropTypes.string,

fontSize: PropTypes.number
```
}),

// An object with warnings on extra properties

```jsx
optionalObjectWithStrictShape: PropTypes.exact({

name: PropTypes.string,

quantity: PropTypes.number
```
}),

// You can chain any of the above with \`isRequired\` to make sure a warning

// is shown if the prop isn't provided.

```jsx
requiredFunc: PropTypes.func.isRequired,
```
// A required value of any data type

```jsx
requiredAny: PropTypes.any.isRequired,
```
// You can also specify a custom validator. It should return an Error

// object if the validation fails. Don't \`console.warn\` or throw, as this

// won't work inside \`oneOfType\`.

```jsx
customProp: function(props, propName, componentName) {
```
if (!/matchme/.test(props\[propName\])) {

```jsx
return new Error(
```
'Invalid prop \`' + propName + '\` supplied to' +

' \`' + componentName + '\`. Validation failed.'

```jsx
);

}
```
},

// You can also supply a custom validator to \`arrayOf\` and \`objectOf\`.

// It should return an Error object if the validation fails. The validator

// will be called for each key in the array or object. The first two

// arguments of the validator are the array or object itself, and the

// current item's key.

```jsx
customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
```
if (!/matchme/.test(propValue\[key\])) {

```jsx
return new Error(
```
'Invalid prop \`' + propFullName + '\` supplied to' +

' \`' + componentName + '\`. Validation failed.'

```jsx
);

}
```
})

```jsx
};
```

## Requiring Single Child

```jsx
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
```
render() {

// This must be exactly one element or it will warn.

```jsx
const children = this.props.children;

return (
```
<div>

{children}

</div>

```jsx
);

}

}

MyComponent.propTypes = {

children: PropTypes.element.isRequired

};
```

## Default Prop Values

You can define default values for your props by assigning to the special defaultProps property:

```jsx
class Greeting extends React.Component {
```
render() {

```jsx
return (
```
<h1>Hello, {this.props.name}</h1>

```jsx
);

}

}
```
// Specifies the default values for props:

```jsx
Greeting.defaultProps = {

name: 'Stranger'

};
```
// Renders "Hello, Stranger":

ReactDOM.render(

<Greeting />,

document.getElementById('example')

```jsx
);
```

If you are using a Babel transform like transform-class-properties , you can also declare defaultProps as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the class field proposal.

```jsx
class Greeting extends React.Component {
```
static defaultProps = {

```jsx
name: 'stranger'

}
```
render() {

```jsx
return (
```
<div>Hello, {this.props.name}</div>

```jsx
)

}

}
```

The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.
