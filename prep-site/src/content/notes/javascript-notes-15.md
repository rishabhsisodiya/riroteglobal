---
title: "Currying"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 15
description: "JavaScript — Currying."
---
Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

It keeps returning a new function (that expects the current argument, like we said earlier) until all the arguments are exhausted. The arguments are kept "alive"(via closure) and all are used in execution when the final function in the currying chain is returned and executed.

Two ways to implement currying

### 1\. Currying using bind method

```js
let multiply = function(x,y){

console.log(x\*y);

}

let multiplyByTwo = multiply.bind(this, 2);
```
// currying

```js
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3, 2);
```
**// below method will ignore 5 as we already passed both required arguments**

```js
multiplyByThree(5);
```

Output:

10

6

### 2\. Currying using closures

//closure

```js
let multiply = function(x){

return function(y){

console.log(x\*y);

}

}

let multiplyByTwo = multiply(2);

multiplyByTwo(5);

let multiplyByThree = multiply(3);

multiplyByThree(2);
```

Output:

10

6

### _Write a function which can handle sum(1)(2)(3)(4)........( n)()_

```js
let sum = function(a){

return function(b){
```
if (b) {

```js
return sum(a+b);

}

return a;

}

}

console.log(sum(1)(2)(3)());
```
