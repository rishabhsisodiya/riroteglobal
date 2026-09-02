---
title: "Variable Hoisting"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 3
description: "JavaScript — Variable Hoisting."
---
We can refer to a variable declared later, without getting an exception.

**Case1: print variable and method invocation before declaration.**

```js
getName();

console.log(x);

var x=7;

function getName(){

console.log(“Hello World!”)

}
```

**Output:**

Hello World

undefined

**Case2: print method name after declaration.**

```js
//getName();

//console.log(x);

var x=7;

function getName(){

console.log(“Hello World!”);

}

console.log(getName);
```

**Output:**

f getName(){

```js
console.log(“Hello World!”);

}
```

**Case3: print method name before declaration.**

```js
//getName();

//console.log(x);

console.log(getName);

var x=7;

function getName(){

console.log(“Hello World!”);

}
```

**Output:**

f getName(){

```js
console.log(“Hello World!”);

}
```

### Case4: Replace function syntax with function expression

```js
//getName();

//console.log(x);

console.log(getName);

var x=7;

const getName = ()=>{

console.log(“Hello World!”);

}
```

**Output:**

undefined

Output is still the same but for variables it is showing undefined. Lets understand this concept in depth

If you go through the Execution context which is explained earlier, you will get to know that in the memory **creation phase we have value of variable as undefined and function value as it is**. So now this explains above all first 3 cases behavior and in 4th case getName will behave as variable and have undefined value.

You can see Call Stack in the browser : Right click > inspect element >sources tab (Chrome).

### Run Empty file

When we have nothing in the js file but still the javascript engine will create a window object which holds many methods and a global execution context. Window is a global object. Chrome JavaScript engine is v8. At global level this === window. Only in the case of browsers.

**Any variable other than defined in function will be in global space (window).** So let's take an example of the code below.

```js
var a= 10;

function b(){

var x=10;

}

console.log(window.a);

console.log(a);

console.log(x);
```

**Output:**

10

10

uncaught ReferenceError: x is not defined

```js
function a(){

console.log(b);

}

var b=10;

a();
```

**Output:**

10

![](/notes-img/javascript-notes/img-006.webp)![](/notes-img/javascript-notes/img-007.webp)

JavaScript engine always creates a global execution context in the beginning to execute the code. it also creates a new lexical environment to store the variable defined in that function during the execution of that function. **A lexical environment is a data structure that holds identifier-variable mapping. Lexical Environment is the local memory along with the Lexical environment of its parent**. In the above screenshot you can see c() is lexically inside a() and a() is lexically in the global environment. Initially JavaScript Engine search variable in its own lexical environment then it will search in the lexical environment of its parent. **This search is called scope chain.** Global environment has null as parent.
