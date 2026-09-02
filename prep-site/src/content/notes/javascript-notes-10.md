---
title: "Polyfill for call, apply and bind method"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 10
description: "JavaScript — Polyfill for call, apply and bind method."
---
**Polyfill is like a browser's fallback and you have to write your own bind method.**

Because older browsers are generally also slower browsers, it is far more critical than most people recognize to create performance polyfills to make the browsing experience in outdated browsers slightly less horrible.

Thus, presented below are two options for Function.prototype.bind() polyfills:

-   The first one is much smaller and more performant, but does not work when using the new operator.
-   The second one is bigger and less performant, but it permits some usage of the new operator on bound functions.

### Create user defined call method

```js
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```js
}

let printName= function (hometown, state){

console.log(this.firstName+" "+this.lastName+" ,"+hometown+", "+state);

}

// printName.call(name, "Chittorgarh","Rajasthan");

Function.prototype.mycall = function(obj,...args){
```
// this = printName

```js
obj.fnRef = this;

// console.log(obj);

obj.fnRef(...args);

}

printName.mycall(name,"Chittorgarh","Rajasthan");
```
//Advance

```js
Function.prototype.myCall = function (obj, ...args) {
```
if (typeof this !== "function") {

```js
throw new TypeError("myCall must be called on a function");

}
```
obj = obj || globalThis; // Default to global object if \`obj\` is null or undefined

```js
const uniqueKey = Symbol(); // Use a unique key to avoid overwriting existing properties
```
obj\[uniqueKey\] = this; // Temporarily store the function as a property of \`obj\`

const result = obj\[uniqueKey\](...args); // Call the function with the provided arguments

delete obj\[uniqueKey\]; // Remove the temporary property

return result; // Return the result of the function call

```js
};
```
### Create user defined apply method

```js
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```js
}

let printName= function (hometown, state){

console.log(this.firstName+" "+this.lastName+" ,"+hometown+", "+state);

}

printName.apply(name, \["Chittorgarh","Rajasthan"\]);

Function.prototype.myapply = function(obj,args){
```
if (!Array.isArray(args)) {

```js
throw new TypeError("CreateListFromArrayLike called on non-object");

}
```
// this = printName

```js
obj.fnRef = this;

obj.fnRef(...args);

}

printName.myapply(name,"Chittorgarh","Rajasthan");
```
// Advance

```js
Function.prototype.myApply = function (obj, args) {
```
if (typeof this !== "function") {

```js
throw new TypeError("myApply must be called on a function");

}
```
if (!Array.isArray(args) && args !== null && args !== undefined) {

```js
throw new TypeError("Second argument must be an array or array-like object");

}

obj = obj || globalThis; // Use globalThis for null/undefined (global object in any environment)

const uniqueKey = Symbol(); // Use a unique key to avoid property conflicts
```
obj\[uniqueKey\] = this; // Temporarily assign the function to the object

const result = obj\[uniqueKey\](...(args || \[\])); // Call the function with spread arguments

delete obj\[uniqueKey\]; // Cleanup the temporary property

return result; // Return the result of the function call

```js
};
```
### Create user defined bind method

```js
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```js
}

let printName= function (hometown, state){

console.log(this.firstName+" "+this.lastName+" ,"+hometown+", "+state);

}

let printMyName= printName.bind(name, "Chittorgarh")

printMyName("Rajasthan");

Function.prototype.mybind = function (obj, ...args) {
```
if (typeof this !== "function") {

```js
throw new TypeError("myBind must be called on a function");

}
```
const func = this; // Save the original function reference

```js
return function (...innerArgs) {
```
// Combine the arguments from .myBind and the returned function

```js
return func.apply(obj, \[...args, ...innerArgs\]);

};

};
```
// Advance

```js
Function.prototype.myBind = function (obj, ...args) {
```
if (typeof this !== "function") {

```js
throw new TypeError("myBind must be called on a function");

}

obj = obj || globalThis; // Use globalThis for null/undefined (global object in any environment)

const uniqueKey = Symbol(); // Use a unique key to avoid property conflicts
```
obj\[uniqueKey\] = this; // Temporarily assign the function to the object

```js
return function (...innerArgs) {

const newArgs = \[...args, ...innerArgs\];

return obj\[uniqueKey\](..newArgs);

};

};

let printMyName2= printName.mybind(name, "Chittorgarh");

printMyName2("Rajasthan");
```
