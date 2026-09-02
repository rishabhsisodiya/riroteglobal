---
title: "JavaScript Engine"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 8
description: "JavaScript — JavaScript Engine."
---
![](/notes-img/JavaScript-notes/img-023.webp)

A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.JavaScript Engine in different browsers.

-   Chakra in Edge
-   Spidermonkey in Firefox. (First js engine)
-   V8 in google chrome ( and also in nodejs) written in c++.

A JavaScript engine is not a machine but just a piece of code in some high level language. This code goes through 3 major steps

1.  Parsing
2.  Compilation
3.  Execution

![](/notes-img/JavaScript-notes/img-024.webp)

1.  **Parsing Phase**

During this parsing phase the code which we have written is broken down into tokens.

let a=7; (let, a, =, 7 are tokens)

**Syntax parser:** It takes the code and converts it into AST(Abstract Syntax Tree).

(you can check AST at astexplorer.net)

![](/notes-img/JavaScript-notes/img-025.webp)

1.  **Compilation Phase & Execution phase**

    ```js
    Interpreter: It takes code and executes code line by line.
    ```
Compiler: It takes code and compiles it before executing and a new optimized code will be generated which is very fast and performs better.

Interpreter languages are fast but compiler languages provide more efficiency.

**JavaScript can behave as a compiler as well as interpreter language**. Everything depends on the JS engine. Initially when JavaScript was developed it was supposed to be an interpreter language but now most modern browsers use JIT(Just in time) compiler (Compiler along with interpreter). So that’s why the compilation and execution phase go hand in hand. So after parsing, AST goes into interpreter and interpreter converts high level code to byte code and moves to the execution phase. While converting, the interpreter takes help from the compiler to optimize the code as much as it can on runtime that’s why it is called JIT.

Execution is made possible using these 2 components: Call Stack and memory heap.

Memory Heap is the space where all variables and functions are assigned memory. Garbage collector is also present which frees up the memory whenever possible and it uses Mark and Sweep Algorithm. Compiler also uses some optimization techniques.

### ![](/notes-img/JavaScript-notes/img-026.webp)

From a high-level view, the V8 JavaScript engine execution consists of 5 steps.

-   Initialize environment in the host
-   Compile JavaScript codes
-   Generate bytecodes
-   Interpret and execute bytecodes
-   Optimize some bytecodes for better performance

### Mark and Sweep Algorithm

Any garbage collection algorithm must perform 2 basic operations. One, it should be able to detect all the unreachable objects and secondly, it must reclaim the heap space used by the garbage objects and make the space available again to the program.

The above operations are performed by Mark and Sweep Algorithm in two phases:

1) Mark phase

2) Sweep phase

### Mark Phase

When an object is created, its mark bit is set to 0(false). In the Mark phase, we set the marked bit for all the reachable objects (or the objects which a user can refer to) to 1(true). Now to perform this operation we simply need to do a graph traversal, a depth first search approach would work for us. Here we can consider every object as a node and then all the nodes (objects) that are reachable from this node (object) are visited and it goes on till we have visited all the reachable nodes.

Root is a variable that refers to an object and is directly accessible by local variable. We will assume that we have one root only.

We can access the mark bit for an object by: markedBit(obj).

Algorithm -Mark phase:

Mark(root)

If markedBit(root) = false then

markedBit(root) = true

For each v referenced by root

Mark(v)

Note: If we have more than one root, then we simply have to call Mark() for all the root variables.

### Sweep Phase

As the name suggests it “sweeps” the unreachable objects i.e. it clears the heap memory for all the unreachable objects. All those objects whose marked value is set to false are cleared from the heap memory, for all other objects (reachable objects) the marked bit is set to true.

Now the mark value for all the reachable objects is set to false, since we will run the algorithm (if required) and again we will go through the mark phase to mark all the reachable objects.

Algorithm – Sweep Phase

Sweep()

For each object p in heap

If markedBit(p) = true then

markedBit(p) = false

else

heap.release(p)

The mark-and-sweep algorithm is called a tracing garbage collector because it traces out the entire collection of objects that are directly or indirectly accessible by the program.

### Advantages of Mark and Sweep Algorithm

-   It handles the case with cyclic references, even in the case of a cycle, this algorithm never ends up in an infinite loop.
-   There are no additional overheads incurred during the execution of the algorithm.

### Disadvantages of Mark and Sweep Algorithm

-   The main disadvantage of the mark-and-sweep approach is the fact that normal program execution is suspended while the garbage collection algorithm runs.
-   Another disadvantage is that, after the Mark and Sweep Algorithm is run several times on a program, reachable objects end up being separated by many, small unused memory regions.

### Copy Elision

Copy elision is an optimization implemented by most compilers to prevent extra (potentially expensive) copies in certain situations. It makes returning by value or pass-by-value feasible in practice

### Inline caching

Let's take a look at a code snippet.

```js
function printUserName(user){

return `Hello ${user.firstName} ${user.lastName}`

}

const userName={
```
firstName:’John’,

lastName:’Doe’

```js
}
```

Let’s analyze what the above code does. We create a function that takes an argument and returns a template string. Next, we create a userName object with keys — firstName and lastName. Now, we call function printUserName with the argument of userName object several times.

So, what V8 engine or many other JavaScript engines does is that first they run the function normally as you would expect. But, after some time when the function is called repeatedly, they assume or they act smart and just equals the repeated function calls to what the function returns to save time and improve the efficiency or speed. In this case, they equals

printUserName(userName) = “Hello John Doe”

This is called or better known as Inline Caching. So, the gist of this whole inline caching is to write better and efficient codes knowing how the code will be processed by the engine or compiler.
