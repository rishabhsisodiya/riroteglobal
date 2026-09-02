---
title: "Throttling"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 13
description: "JavaScript — Throttling."
---
Throttling ensures that a function is executed at most once every specified period, regardless of how many times it is triggered. Unlike debouncing, which delays execution until after a period of inactivity, throttling limits the rate of execution for the function.

It is used for performance optimization and rate limiting for function calls and api.

Let's say we have one button and whenever user click on the button it will use onclick method and will call api but what if we keep clicking on the button that will make serious performance issue so to overcome it what we can do it limit onclick event lets say user once click on the button will not able to click on button till 300ms and after 300ms rate limit user can click again.

Create a simple index.htm file and write anything and then create index.js and paste below code

// Throttling in JavaScript

```js
let counter= 0;

const expensive = ()=>{
```
// calls Api and gets Data

```js
console.log("Expensive calls.."+counter++);

}

window.addEventListener("resize", expensive);
```

So now whenever you resize the browser's window it will call an expensive method.

Lets overcome this issue with throttling

// Throttling in JavaScript

```js
let counter= 0;

const expensive = ()=>{
```
// calls Api and gets Data

```js
console.log("Expensive calls.."+counter++);

}

const throttle = function(func, limit){

let flag=true;

return function(...args){

let context=this,
```
if(flag){

```js
func.apply(context, args);

flag=false;

setTimeout(() => {

flag=true;

}, limit);
```
}else{

```js
console.error("Rate limit has been reached. Please wait for "+limit/1000+"s");

}

}

}

const betterFunction = throttle(expensive, 1000);

window.addEventListener("resize", betterFunction);
```

### // Throttling Function using date time

```js
const throttleFunction=(func, delay)=>{
```
// Previously called time of the function

```js
let prev = 0;

return (...args) => {

let now = new Date().getTime();

console.log(now-prev, delay);
```
if(now - prev> delay){

```js
prev = now;

return func(...args);

}

}

}

btn.addEventListener("click", throttleFunction(()=>{

console.log("button is clicked")

}, 1500));
```

```js
const throttle = function (func, limit) {

let flag = true;
```
let lastArgs = null; // To store the most recent arguments

```js
let timer = null;

return function (...args) {

const context = this;
```
if (flag) {

func.apply(context, args); // Execute immediately

```js
flag = false;
```
// Start the timer to reset the flag

```js
timer = setTimeout(() => {

flag = true;
```
// Execute the function with the latest arguments if available

if (lastArgs) {

```js
func.apply(context, lastArgs);

lastArgs = null; // Reset stored arguments

}

}, limit);
```
} else {

lastArgs = args; // Store the latest arguments

```js
console.error(\`Rate limit has been reached. Please wait for ${limit / 1000}s\`);

}

};

};
```
