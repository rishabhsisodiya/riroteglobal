---
title: "How JavaScript works"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 2
description: "JavaScript — How JavaScript works."
---
Everything in JavaScript happens in the execution **context**. It is like a container in which the whole javascript code is executed. JavaScript is a synchronous, single-threaded language.

## Execution context

In JavaScript, **Execution context** is an abstract concept that holds information about the environment within which the current code is being executed. The JavaScript engine creates the global execution context before it starts to execute any code. From that point on, a new execution context gets created every time a function is executed, as the engine parses through your code. In fact, the **global execution context** is nothing special. It’s just like any other execution context, except that it gets created by default. It has 2 stage **memory creation phase and Activation / Code Execution Stage:**

Memory (Variable Environment)

Code (Thread of Execution)

| --- | ---
```js
Key : Value pair
```

Commands

| --- | ---
Functions

 |
| --- | ---
**What happens when you run JavaScript code?**

![](/notes-img/javascript-notes/img-005.webp)

Memory (Variable Environment)

Code (Thread of Execution)

| --- | ---
```js
n= undefined
```
Square:function square{ ..},

```js
square2 = undefined,

square4 = undefined
```
After Thread of Execution

```js
n= 2
```
Square:function square{ ..},

```js
square2 = 4,

square4 = 6
```

It will read line by line

```js
1)var n=2;
```
it will allocate memory n: 2 from n: undefined

2) function square(){} just read function

3) var square2 and var square4 it will create another memory creation process

Memory

Code

| --- | ---
Var ans: undefined

```js
var num: undefined
```

Var num=2

```js
var ans=num\*num;

var ans= 4
```

| --- | ---
After this it will replace value of ans in square2 and then value of square2= 4

After this above execution context will be deleted and a new will be created for square4

| --- | ---
## Call Stack

**Call Stack** is there for managing execution context. It maintains the order of execution context. In above Example first it has Global Execution Context then Execution Context 1 (square2 function) but after the execution phase of ec1 it will be removed from Call stack. Now Call stack again has only global execution context and it will proceed for execution context 2(square4 function).ON web you will read it Sometimes as Execution Context Stack, Sometimes Program Stack, Control Stack, Runtime Stack, Machine Stack but all are the same.

**A call stack** is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

-   When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
-   Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
-   When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
-   If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.
