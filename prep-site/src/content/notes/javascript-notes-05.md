---
title: "Closure"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 5
description: "JavaScript — Closure."
---
Let's take an example

```js
function x() {

var a=7;

function y(){

console.log(a);

}

y();

}

x();
```

### Output: 7

You can see the function scope of y() have \[\[Scopes\]\] which has a in it. So when we return y() and use it later also it will have a with value 7 in it.

![](/notes-img/javascript-notes/img-013.webp)![](/notes-img/javascript-notes/img-014.webp)

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. **So function (or expression) along with its lexical Scope bundled together forms a closure.**

```js
function x() {

var a=7;

function y(){

console.log(a);

}

a=100;

return y;

}

var z=x();

console.log(z);

z();
```

Output:

ƒ y(){

```js
console.log(a);

}
```
100

**Note**: Here comes closure in picture. Returned Function always maintain their lexical scope. (Function along with reference to those variables(e.g. var a) )They remember where they were actually present. So in simple terms the code not just returns a function but a closure returns(function along with its lexical scope).

### Scope chain

```js
function z() {

var b=900;

function x() {

var a=7;

function y(){

console.log(a, b);

}

y();

}

x();

}

z();
```

```js
Output: 7 900
```

![](/notes-img/javascript-notes/img-015.webp)

So now y forms closure with scope of x and z.

**Uses of closures:**

-   Module Design Pattern
-   Currying
-   Function like once (Only run once)
-   memoize
-   maintaining state in sync world
-   setTimeouts
-   Iterators and many more.

### Timeout and closure

```js
function x() {

var a=1;

setTimeout(() => {

console.log(a);

}, 3000);

console.log("Hello Javascript");

}

x();
```

Output:

Hello JavaScript

1

SetTimeout takes the callback function and attaches it to the timer and when the timer expires, it calls that function. JavaScript doesn’t wait for that function to run.

Lets print 1 to 5 after every nth sec . Where n=1 ...5

Normally we try to follow the example below but it will print different output.

```js
function x() {

for (var i = 1; i <= 5; i++) {

setTimeout(() => {

console.log(i);

}, i \* 1000);

}

console.log("Hello JavaScript");

}

x();
```

Output:

Hello JavaScript

6

6

6

6

6

Loop will keep running so the value of i becomes 6 till the time out timeout expires.

### Case 1: Fix it with let(block-scope)

```js
function x() {

for (**let** i = 1; i <= 5; i++) {

setTimeout(() => {

console.log(i);

}, i \* 1000);

}

console.log("Hello JavaScript");

}

x();
```

Output:

Hello JavaScript

1

2

3

4

5

Because **let** has a block-scope so every time when the loop runs that “i” have a new copy altogether.

Function in setTimeout forms a closure with a new copy of the variable “i” bound to it.

### Case 2: fix it with closure and use only var

```js
function x() {

for (var i = 1; i <= 5; i++) {
```
### function closer(i) {

setTimeout(function () {

```js
console.log(i);

}, i \* 1000);
```
**}**

### closer(i);

```js
}

console.log("Hello JavaScript");

}

x();
```

Output:

Hello JavaScript

1

2

3

4

5

Every time you call closer(i), it will create a new copy of i .

### _Some more examples_

Consider below as base code

```js
function outer(){

var a=10;

function inner(){

console.log(a);

}

return inner;

}

outer()();
```

Output:

10

**Case 1: what if we use let in place of var and use just before the return statement.**

```js
function outer(){

function inner(){

console.log(a);

}
```
### let a=10;

```js
return inner;

}

outer()();
```

Output:

10

### _Subcase 1: When we call inner function before initialization of a_

```js
function outer(){
```
### inner();

```js
let a=10;

function inner(){

console.log(a);

}

}

outer();
```

Output:

index.js:5 Uncaught ReferenceError: Cannot access 'a' before initialization

So here it is obvious that we are trying to access **let a before initialization** so as it is let so it will be in a **temporal dead zone** and hence we cannot use it before initialization but if we **used** **var** instead of let then it will run successfully but will give value **undefined**. To understand more, Compare it with an example which we used in variable hoisting.

```js
console.log(a);

console.log(b);

var a=10;

let b=10;
```

Output:

undefined

index.js:2 Uncaught ReferenceError: Cannot access 'b' before initialization

### Case 2: Pass a parameter from outer scope

```js
function outer(b){

function inner(){

console.log(a, b);

}

let a=10;

return inner;

}

var close =outer("Hello");

close();
```

Output:

10 “Hello”

Because inner function forms a closure with its outer function environment and b is a part of outer function environment so

### Case 3: Outer function is a part of another function

```js
function outermost(){

var c=20;

function outer(b){

function inner(){

console.log(a, b, c);

}

let a=10;

return inner;

}

return outer;

}

var close =outermost()("Hello");

close();
```

Output:

10 “Hello” 20

So now inner function forms closure with outer and outermost function as well and has access to both environments.

**Case 4: If we have defined a variable outside the closure with conflicted name**

```js
function outermost(){

var c=20;

function outer(b){

function inner(){

console.log(a, b, c);

}

let a=10;

return inner;

}

return outer;

}

let a=100;

var close =outermost()("Hello");

close();
```

Output:

10 “Hello” 20

Since inner function forms closure with outer and outermost so it will have access to variable defined in its parent scope(outer and outermost) **So defining variable with same name does have any impact on closure**

### Case 5: if let a=10 is not present in outer()

```js
function outermost(){

var c=20;

function outer(b){

function inner(){

console.log(a, b, c);

}

return inner;

}

return outer;

}

let a=100;

var close =outermost()("Hello");

close();
```

Output:

### 100** “Hello” **20

Because when a function doesn’t find a in its lexical environment then it will search in its parent and if not find in parent then it will go deeper in its parent hierarchy till global scope. If a is not present in global scope then it will throw **ReferenceError: a is not defined**

## Closure for Data hiding and encapsulation

```js
var counter =0;

function incrementCounter() {

counter++;

}
```

So in this case anyone(any other function ) can have access to a variable counter and can manipulate the data.

So good way to implement data hiding is

```js
function counter() {

var count = 0;

return function incrementCounter() {

count++;

console.log(count);

}

}

var counter1 = counter();

counter1();

counter1();
```

Output:

1

2

Now we can increment the counter but can’t change the value of count according except increment the value of count.

**_Case: what if we have store closure in 2 different variable and then call it_**

```js
function counter() {

var count = 0;

return function incrementCounter() {

count++;

console.log(count);

}

}

var counter1 = counter();

counter1();

counter1();

var counter2 = counter();

counter2();
```

Output:

1

2

1

In that case it will create a new copy for the counter2.

### Scalability

But the above code is not **scalable. To make it** scalable we can add other functions like decrement.

```js
function Counter() {

var count = 0;

this.incrementCounter= function () {

count++;

console.log(count);

}

this.decrementCounter= function () {

count--;

console.log(count);

}

}

var counter1 = new Counter();

counter1.incrementCounter();
```

Above is the constructor function and counter1 will give access to both constructors.

### Disadvantages

-   Over consumption of memory because every time a closure forms
-   Those Closed over variables are not garbage collected variables till the program expires.
-   If not handled properly, it can lead to memory leak.

**garbage collection** (GC) is a form of automatic memory management. The garbage collector, or just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program.

## Relation between garbage collector and closures

```js
function a(){

var x=0, z=10;

return function b(){

console.log(x);

}

}

var y=a();
```
// .....

```js
y();
```

b() forms closure with a(). x could be garbage collected but due to closure it doesn’t free up. So x memory cannot be free until the program dies.

But modern browser smart garbage collection as it can free memory of z .
