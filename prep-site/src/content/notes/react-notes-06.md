---
title: "Event Handling"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 6
description: "React — Event Handling."
---
Refer to previous counter code used in setState() section

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

// console.log will not print updated count value below

```jsx
console.log(this.state.count);

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

So in above code if we use <button onClick={**this.increment()**}>Increment</button> then our method will be call immediately just after code loads in browser and when we click on button nothing will happen

## **Binding Event handler**

Let's take an example

Counter.js

```jsx
import React, { Component } from "react";

class Counter extends Component {

state = {

count: 0,

};
```
### increment(){

### this.setState({

### count: this.state.count + 1

**});**

### console.log(this.state.count);

**}**

render() {

```jsx
return (
```
<div>

```jsx
Count: {this.state.count}
```
<button onClick=**{this.increment}**\>Increment</button>

</div>

```jsx
);

}

}

export default Counter;
```

**But the above code will throw an error Uncaught TypeError: Cannot read property 'setState' of undefined.** To resolve the error we need to use below code

### Counter.js

```jsx
import React, { Component } from "react";

class Counter extends Component {

state = {

count: 0,

};
```
increment(){

this.setState({

```jsx
count: this.state.count + 1

});

console.log(this.state.count);

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
<button onClick={**this.increment.bind(this)**}>Increment</button>

</div>

```jsx
);

}

}

export default Counter;
```

## Why do we need to bind event handlers? (imp)

Above code will throw an error **Uncaught TypeError: Cannot read property 'setState' of undefined.**

Because increment() method does not know this.setState() as by default it will refer to its own ‘this’. So If we have setState() method inside increment then we can use it but here setState is not available inside increment so we need to pass ‘this’ so that increment method can refer to.

**In JavaScript, these two code snippets are not equivalent:**

//first snippet

```jsx
obj.method();
```
//second snippet

```jsx
var method = obj.method;

method();
```
Binding methods help ensure that the second snippet works the same way as the first one.

Refer below code for **more understanding for using bind. (ignore if concept already known)**

```jsx
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```jsx
}

let printFullName= function (hometown, state){

console.log(this.firstName+" "+this.lastName+" from "+hometown+", "+state);

}
```
### printFullName.call(name, "Chittorgarh", "Rajasthan");

```jsx
let name2 = {

firstName: "Any",
```
lastName:"Random",

```jsx
}
```
### // bind method

### let printMyName= printFullName.bind(name2,"Udaipur", "Rajasthan" )

```jsx
printMyName();
```

So from the above code we can understand we need to pass an object(Here name2) for which method printFullName’s this.firstName can refer to. So if we pass the name in the bind method then it will use the name object’s firstname I.e Rishabh value.

## **Type of Binding (very imp)**

1.  **Bind**: - An object to which _this_ keyword can refer inside the new function. This controls what _this_ inside the function will refer to and by binding it to _this_ here.

Increment(){

this.setState({

```jsx
count: this.state.count + 1

});

}
```
<button onC.lick={**this.increment.bind(this)**}>Increment</button>

**Above code is not efficient, because:**

-   **Efficiency**: This creates a new function every time the component re-renders because .bind(this) generates a new bound function.
-   **Memory Usage:** It can lead to unnecessary memory usage and performance issues in large-scale applications or components with frequent updates.
-   **Readability:** Makes the code less clean and harder to follow.

1.  Using **Arrow function : As Arrow function doesn't have its own ‘this’. So it will refer to its parent lexical environment**

Increment(){

this.setState({

```jsx
count: this.state.count + 1

});

}

<button onC.lick={ () => **this.increment()**}>Increment</button>
```
**Above code is not efficient, because:**

-   **Efficiency:** Similar to Method 1, a new arrow function is created on every re-render.
-   **Memory Usage:** It has the same memory concerns as Method 1.
-   **Readability:** Slightly cleaner than .bind(this) but still less optimal.

1.  Binding in constructor :

```jsx
constructor(){
```
….

### this.increment= this.increment.bind(this)

```jsx
}
```
Increment(){

this.setState({

```jsx
count: this.state.count + 1

});

}
```
<button onClick={**this.increment**}>Increment</button>

**Above code is efficient compare to above 2 approach, because:**

-   **Efficiency**: This binds the method once during the component initialization. It avoids creating a new function on every render.
-   **Memory Usage:** More efficient than Methods 1 and 2.
-   **Readability**: Cleaner than Methods 1 and 2, but the need for manual binding can clutter the constructor if multiple methods require binding.

1.  **Using class property approach** : Use arrow function outside constructor

```jsx
constructor(){ ….}

increment = () => {
```
this.setState({

```jsx
count: this.state.count + 1

});

};
```
<button onClick={**this.increment**}>Increment</button>

**Above code is most efficient and best approach , because:**

-   **Efficiency**: The method is bound as a property of the class using an arrow function. This ensures this always refers to the class instance without needing explicit binding or function creation during rendering.
-   **Memory Usage:** Efficient because the function is not recreated on every render.
-   **Modern Syntax:** It's the cleanest and most concise way to handle method binding, aligning with modern JavaScript/React standards.
-   **Readability**: Highly readable and avoids boilerplate code in the constructor.

### Implications of Class Property Approach on Unit Testing

### Aspect

### Class Property Approach

### Constructor Binding (bind())

| --- | --- | ---
### Memory Efficiency

Each instance holds its own copy

Small callback stored per instance

| --- | --- | ---
### Method Location

Defined on the instance

Defined on the prototype

| --- | --- | ---
### Performance Impact

Negligible in most cases

Slight edge in memory-critical apps

| --- | --- | ---
### Syntax/Readability

Cleaner, modern syntax

Verbose, slightly cluttered

| --- | --- | ---
### Testing Compatibility

Harder to spy/stub via prototype

Easy to spy/stub on prototype

| --- | --- | ---
1.  First the **memory and performance;** When you use a class field to define a function, your whole method resides on each instance of the class and NOT on the prototype, but using the bind technique, just a small callback is stored on each instance, which calls your method that is stored on the prototype.
2.  Second thing that can be affected is **how you write your unit tests**. You won't be able to use the component prototype to stub on function calls like below:

```jsx
const spy = jest.spyOn(MyComponent.prototype, 'clickHandler');
```
// …

```jsx
expect(spy).toHaveBeenCalled();
```
You will have to find another way to stub the method, either by passing the spy in props or checking the state changes.

**If the callback is passed as prop to child components,** those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.

### _We can pass methods as props_

**by passing references in props** just like we are passing variables.

For example: let's say we have increment() method so we can pass it in other component as well

<ChildCounter incrementCounter={**this.increment**} />

And in ChildCounter we can use:

<button onClick={props.incrementCounter}>Increment</button>
