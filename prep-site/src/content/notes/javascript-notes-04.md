---
title: "Scope"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 4
description: "JavaScript — Scope."
---
Scope in JavaScript refers to the accessibility or visibility of variables. That is, which parts of a program have access to the variable or where the variable is visible.

**Why is Scope Important?**

1.  The main benefit of scope is security. That is, the variables can be accessed from only a certain area of the program. Using scope, we can avoid unintended modifications to the variables from other parts of the program.
2.  The scope also reduces the namespace collisions. That is, we can use the same variable names in different scopes.

**
Types of Scope**

There are three types of scope in JavaScript —

1) Global Scope,

2) Function Scope

3) Block Scope.

### Function scope

```js
var myVar = 1;

let myVar2=2;

function someScopeFunc() {

var myVar = 10;

let myVar2=20;

console.log(myVar) // 10

console.log(myVar2) // 20

}
```
someScopeFunc()

```js
console.log(myVar) // 1

console.log(myVar2) // 2
```

Same with const as well.

**_
Block Scope_**

//var

```js
var myVar = 2;
```
if(true) {

```js
var myVar = 10;

}

console.log(myVar); // 10
```
//let

```js
let someVar = 2;
```
if(true) {

```js
let someVar = 10;

}

console.log(someVar); // 2
```

Let and const does not override the someVar value but var always overrides myVar value. If we re-declared let and const then it will throw an error.

let and const can’t be accessed from outside that pair of curly braces(Block Scope).

### Lexical Scope

Lexical Scope (also known as Static Scope) literally means that scope is determined at the lexing time (generally referred to as compiling) rather than at runtime. For example:

**let number = 42;**

**function printNumber() {**

```js
**console.log(number);**
```
**}**

**function log() {**

**let number = 54;**

**printNumber();**

**}**

**// Prints 42**

**log();**

Here the console.log(number) will always print 42 no matter from where the function printNumber() is called. This is different from languages with the dynamic scope where the console.log(number) will print different values depending on from where the function printNumber() is called. **Here we are calling printNumber from log but we need to check compile time value. So printNumber is outside the log and can access Let number=42;**

**What is a Lexical Environment?**

A lexical environment is a structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object \[including function object and array object\] or primitive value).

**Note** — **Don’t confuse lexical scope with the lexical environment**, lexical scope is a scope that is determined at compile time and a lexical environment is a place where variables are stored during the program execution.

Conceptually a lexical environment looks like this:

```js
lexicalEnvironment = {

a: 25,

obj: <ref. to the object>

}
```
### Context vs Scope

Every function invocation has both a scope and a context associated with it. Fundamentally, scope is function-based while context is object-based. In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of this keyword which is a reference to the object that “owns” the currently executing code. (The value of this in the global execution context was the Window object. Interestingly, the value of this in the execution context of myFunc call also pointed to an identical object, Window.)

To understand all the above concepts. Assume you are sitting in a room, so your right hand is the method and you can have access to mobile which is a variable. So we can say mobile, water bottles are in our hand’s scope. In a similar way methods have access to variables and their functions. Context is more focused on which hand you are using and scope of that hand (accessibility). Your room is a lexical environment where all these objects are stored or exist.

### Let and const and Temporal Dead Zone

**let and const declaration are hoisted** but in the temporary dead zone they are not accessible.

```js
Console.log(a);

Console.log(b);

console.log(x);

let a=10;

var b=100;
```

Output:

### Uncaught ReferenceError: Cannot access a before initialization

100

### Uncaught ReferenceError: x is not defined

In case of var, it is stored in a global object but in case of let and const it is stored in separate memory space. In execution context, During memory creation let and const variables are stored with undefined (hoisted) but we cannot access them until they are not being initialized. This gap or time zone is a **temporal dead zone.**

There is a period between entering scope and being declared where they cannot be accessed. This period is **the temporal dead zone (TDZ).**

We are shrinking the Temporal Dead zone window to 0 while moving initialization to top

```js
Console.log("Hello ");

let a=10;

let a=100;
```

```js
Output: Uncaught SyntaxError: Identifier 'a' has already been declared.
```

It will be rejected and will not run until syntax error will resolve but with var we can do the above thing.

### const is more strict than let

Case 1: Initialize let later

```js
let a;

a=10;

console.log(a);
```

```js
Output: 10
```

Case 2: Initialize const later

```js
const b;

b=1000;

console.log(b);
```

```js
Output: Uncaught SyntaxError: Missing initializer in const declaration
```

Case 3: Initialize const again

```js
const b=1000;

b=10000;

console.log(b);
```

```js
Output: Uncaught TypeError: Assignment to constant variable
```

Case 4: declare same let again

```js
let a=20;

const b=1000;

let a=10;

console.log(a);
```

```js
Output: Uncaught SyntaxError: Identifier 'a' has already been declared
```

**TypeError, Syntax and Reference Error**

The **ReferenceError** object represents an error when a non-existent variable is referenced.

The **SyntaxError** object represents an error when trying to interpret syntactically invalid code.

The **TypeError** object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not in the scope chain of the expected type.

## Block Scope and Shadowing

**Block**: It combines multiple JavaScript statements into a group.

But why do we need grouping?

```js
If (true) true;
```
JavaScript expects a single statement in if statement.

So a group of multiple statements can be used in a place where JavaScript expects a single statement. For example **if**.

if (true){

```js
var a=10;

console.log(a);

}
```
**Block Scope**: All variables and functions which we can access inside the block are block scope.

Hoisting in block scope:

{

```js
var a=10;

let b=20;

const c=30;

}
```
So when we debug in the browser we will get to know that a **separate memory space is allocated to block** for let and const.

![](/notes-img/JavaScript-notes/img-008.webp)

**We cannot use let and const outside the block (ReferenceError b is not defined) but we can use var outside the block.**

### Shadowing

```js
var a=100;

let b=200;

const c=300;
```
{

```js
var a=10;

let b =20;

const c=30;

console.log(a);

console.log(b);

console.log(c);

}

console.log(a);

console.log(b);

console.log(c);
```

Output:

10

20

30

10

200

300

Let put 3 breakpoints in index.js and starts debugging (inspect element> source tab and put cursor as seen in below screenshot)

![](/notes-img/JavaScript-notes/img-009.webp)

Now reload the tab and starts observing value and their scope

### 1. Scope and Value at first breakpoints

![](/notes-img/JavaScript-notes/img-010.webp)

### 2. Scope and Value at second breakpoints

![](/notes-img/JavaScript-notes/img-011.webp)

### 3. Scope and Value at third breakpoints

![](/notes-img/JavaScript-notes/img-012.webp)

Above screenshot will explain all concepts why we got an error when we redeclare let myVar=10 and let myVar=20.

So in last we can conclude that:

In case of **var:** The value of ‘a’ variable modifies the value of a that is inside the block.

In case of **let :** The value of let b variable does not modify the previous assigned value. Because b that is inside the block is stored in block memory space(scope) and b that is outside block scope is stored in script memory space(scope). So console will print different values of

In case of **const:** same behavior as let.

Variable **shadowing** occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope. In the inner scope, both variables’ scope overlap. According to variable scoping rules, the inner scope should always be able to access a variable defined in the outer scope, but in practice, shadowing will prevent that from happening.

### Shadowing with var

```js
var a = 10; // variable declared in global scope
```
{

```js
var a = 100; // variable declared inside a block

}

console.log(a);
```

**Output**: 100

### What if we declare the a inside the function scope

```js
var a = 10; // variable declared in global scope

func();

function func(){

var a = 100; // variable declared inside a function

}

console.log(a);
```

**Output**: 10

### variable shadowing with let keyword

```js
let a = 10; // variable declared in global scope
```
{

```js
let a = 100; // variable declared inside a block

}

console.log(a);
```

**Output:** 10

### Illegal Shadowing:

| Illegal Shadowing | Legal Shadowing |
| --- | --- |
| let a=20; { var a=10; } | let a=20; function x(){ var a=10; } |
|  | var a=20; { let a=10; } |
| Output: Uncaught SyntaxError: Identifier 'a' has already been declared |  |

**Explanation:**

if a variable shadowing(the one which is inside the block) then it should not cross its boundary. Only var crosses its boundary and it will be in global scope. So when we use a function then var comes in the function boundary(function scope) and will not interfere with let outside function.
