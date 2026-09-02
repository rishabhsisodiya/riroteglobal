---
title: "JavaScript Interview Questions"
track: "javascript"
kind: "questions"
updated: "2026-09-02"
source: "JavaScript Interview Question.docx"
draft: false
order: 1
description: "JavaScript Interview Questions — study notes."
---
## What is Javascript?

JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive

## What is ECMAScript

**ECMAScript is the scripting language that forms the basis of JavaScript**. Ecma International — the European association for standardizing information and communication systems **(ECMA was formerly an acronym for the European Computer Manufacturers Association)** to deliver a standardized, international programming language based on JavaScript.

## Is JavaScript a compiled or interpreted language

**JavaScript can behave as a compiler as well as interpreter language**. Everything depends on the JS engine. Initially when JavaScript was developed it was supposed to be an interpreter language but now most modern browsers use J**IT(Just in time) compiler** (Compiler along with interpreter).

**Interpreter:** It takes code and executes code line by line.

**Compiler: I**t takes code and compiles it before executing and a new optimized code will be generated which is very fast and performs better performance.

Interpreter languages are fast but compiler languages provide more efficiency.

## Why is JavaScript treated as Single threaded

JavaScript is a single-threaded language. Because **it executes code in a single call stack, meaning it processes one task at a time** .This design follows the event loop model and **Its primary key priorities were simplicity and responsiveness** . Also ,the l**anguage specification does not allow the programmer to write code** so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

## Difference between asynchronous and synchronous

When a program is being executed synchronously, the thread will wait until the first statement is finished to jump to the second one, while in asynchronous execution, even if the first one was not completed, the execution will continue.

## Is Javascript asynchronous or synchronous?

JavaScript is synchronous by default, but it has asynchronous capabilities through its runtime environment and APIs.

**Synchronous Nature:**

JavaScript is single-threaded, meaning it executes code line by line in a sequential manner.

Until one line of code finishes execution, the next line cannot run.

**Asynchronous Capabilities:**

JavaScript can handle asynchronous tasks with the help of browser APIs (in the browser environment) or Node.js APIs (in the server environment). These capabilities rely on:

-   Callback functions
-   Promises
-   async/await
-   Event loop and Task queues

![](/notes-img/javascript-questions/img-001.webp)

![](/notes-img/javascript-questions/img-002.webp)

## Difference between Java and JavaScript

JAVA

JAVASCRIPT

| --- | ---
Java is strongly typed language and static typing ( In Java the type of a variable is checked at compile-time and the variable must be declared first to use in program.)

JavaScript is a weakly typed language and dynamic typing (have more relaxed syntax and rules.)

| --- | ---
Java applications can run in any virtual machine (JVM) or browser.

JavaScript code runs on browsers only as JavaScript is developed for browser only.

| --- | ---
Java programs use more memory.

JavaScript requires less memory therefore it is used in web pages.

| --- | ---
Java has a thread based approach to concurrency.

JavaScript has an event based approach to concurrency.

| --- | ---
Objects of Java are class based even though we can't make any program in java without creating a class.

JavaScript Objects are prototype based.

| --- | ---
Can automatically write to hard disk

Cannot automatically write to hard disk.

| --- | ---
## \*What is a strict mode in javascript

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way **it prevents certain actions from being taken and throws more exceptions**. The literal expression "use strict"instructs the browser to use the javascript code in the Strict mode.

## \*Why do you need strict mode

Strict mode is useful to write “secure” JavaScript by notifying “bad syntax” into real errors. F**or example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.**

## How do you declare strict mode

The strict mode is declared by adding “use strict”; to the beginning of a script or a function. If declared at the beginning of a script, it has global scope.

```js
"use strict";
```
x = 3.14; // This will cause an error because x is not declared and if you declare inside a function, it has local scope

```js
x = 3.14;
```
myFunction(); // This will not cause an error.

```js
function myFunction() {

"use strict";
```
y = 3.14;// This will cause an error

```js
}
```
## What is the purpose of double exclamation

The double exclamation or negation(!!) **ensures the resulting type is a boolean**. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.

## What is the purpose of the delete operator

The delete keyword is used to delete the property as well as its value.

```js
var user= {name: "John", age:20};

delete user.age;

console.log(user); // {name: "John"}
```
## What is the typeof operator

You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

typeof "John Abraham"

// Returns "string"

typeof (1 + 2)

// Returns "number"

## What is undefined property

The undefined property indicates that a variable **has not been assigned a value, or not declared at all.** The type of undefined value is undefined too.

var user; // Value is undefined, type is undefined

```js
console.log(typeof(user)) //undefined
```
user = undefined //Any variable can be emptied by setting the value to undefined.

## What is null value

The value null represents the **intentional absence of any object value**. It is one of JavaScript’s primitive values. The type of null value is object. You can empty the variable by setting the value to null.

```js
var user = null;

console.log(typeof(user)) //object
```
## What is the difference between null and undefined

### Null

### undefined

| --- | ---
It is an assignment value which indicates that a variable points to no object.

It is not an assignment value where a variable has been declared but has not yet been assigned a value.

| --- | ---
Type of null is object

Type of undefined is undefined

| --- | ---
The null value is a primitive value that represents the null, empty, or non-existent reference.

The undefined value is a primitive value used when a variable has not been assigned a value.

| --- | ---
Indicates the absence of a value for a variable

Indicates absence of variable itself

| --- | ---
Converted to zero (0) while performing primitive operations

Converted to NaN while performing primitive

operations

| --- | ---
## What is eval

The eval() function **evaluates JavaScript code represented as a string.** The string can be a JavaScript expression, variable, statement, or sequence of statements.

```js
console.log(eval('1 + 2')); // 3
```
## What is the difference between slice and splice

Some of the major difference in a tabular form:

### Slice

### Splice

| --- | ---
Doesn’t modify the original array(immutable)

Modifies the original array(mutable)

| --- | ---
Returns the subset of original array

Returns the deleted elements as array

| --- | ---
Used to pick the elements from array

Used to insert or delete elements to/from array

| --- | ---
```js
let arrayIntegers = \[1, 2, 3, 4, 5\];

let arrayIntegers1 = arrayIntegers.slice(0,2);
```
// returns \[1,2\]

```js
let arrayIntegers2 = arrayIntegers.slice(2,3);
```
// returns \[3\]

```js
let arrayIntegers3 = arrayIntegers.slice(4); //returns \[5\]
```

```js
let arrayIntegersOriginal1 = \[1, 2, 3, 4, 5\];

let arrayIntegersOriginal2 = \[1, 2, 3, 4, 5\];

let arrayIntegersOriginal3 = \[1, 2, 3, 4, 5\];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2);
```
// returns \[1, 2\]; original array \[3, 4,5\]

```js
let arrayIntegers2 = arrayIntegersOriginal2.splice(3);
```
// returns \[4, 5\]; original array \[1,2,3\]

```js
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c");
```
//returns \[4\]; original array: \[1,2,3,"a", "b", "c",5\]

| --- | ---
## What is a shallow copy?

A shallow copy of an object or array creates a new object or array, but **only the top-level properties are copied.** **If the original object or array contains other objects or arrays (nested structures), the references to these inner objects are copied, not the objects themselves**.

```js
let original = {

name: "Alice",

details: { age: 25, city: "New York" }

};
```
However, the details object (which is a nested object) is copied by reference. Changing the age property in the shallowCopy.details affects both shallowCopy and original.

## how to empty an array in javascript

There are several ways to empty an array in JavaScript. Here are the most common methods:

### 1\. Set the array length to 0

This is the most efficient and widely used method.

```js
let arr = \[1, 2, 3, 4\];

arr.length = 0;

console.log(arr); // Output: \[\]
```
### 2\. Reassign to a new empty array

This creates a new empty array and assigns it to the variable. However, this does not affect references to the original array.

```js
let arr = \[1, 2, 3, 4\];

arr = \[\];

console.log(arr); // Output: \[\]
```
Note: If other variables reference the original array, they will retain the original values.

### 3\. Use splice() method

This method modifies the array in place and works well when references need to be cleared.

```js
let arr = \[1, 2, 3, 4\];

arr.splice(0, arr.length);

console.log(arr); // Output: \[\]
```
### 4\. Use pop() in a loop

This manually removes elements one by one from the end of the array.

```js
let arr = \[1, 2, 3, 4\];

while (arr.length > 0) {

arr.pop();

}

console.log(arr); // Output: \[\]
```
Note: This is less efficient compared to other methods.

### 5\. Use shift() in a loop

This method removes elements one by one from the start of the array.

```js
let arr = \[1, 2, 3, 4\];

while (arr.length > 0) {

arr.shift();

}

console.log(arr); // Output: \[\]
```
Note: This is even less efficient than using pop() because shift() shifts all remaining elements.

## \*What is the difference between window and document

### Window

### Document

| --- | ---
It is the root level element in any web page

It is the direct child of the window object. This is also known as Document Object Model (DOM)

| --- | ---
By default window object is available implicitly in the page

You can access it via window.document or

document.

| --- | ---
It has methods like alert(), confirm() and properties like document, location

It provides methods like getElementById,

getElementByTagName, createElement etc

| --- | ---
## How do you check if a key exists in an object

You can check whether a key exists in an object or not using three approaches:

**1\. Using in operator:** You can use the in operator whether a key exists in an object or not

"key" in obj and If you want to check if a key doesn’t exist, remember to use parenthesis:

### !("key" in obj)

**2\. Using hasOwnProperty method:** You can use hasOwnProperty to particularly test for properties of the object instance (and not inherited properties)

**obj.hasOwnProperty("key")** // true

**3\. Using undefined comparison:** If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.

```js
const user = {

name: 'John'

};

console.log(user.name !== undefined); // true

console.log(user.nickName !== undefined); // false
```
## How do you loop through or enumerate javascript object

You can use the for-in loop to loop through a javascript object. You can also make sure that the key you get is an actual property of an object, and doesn’t come from the prototype using hasOwnProperty method.

```js
var object = {

"k1": "value1",

"k2": "value2",

"k3": "value3"

};

for (var key in object) {
```
if (object.hasOwnProperty(key)) {

```js
console.log(key + " -> " + object\[key\]); // k1 -> value1 ...

}

}
```

## How do you test for an empty object

There are different solutions based on ECMAScript versions

**1\. Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.

Object.entries(obj).length === 0 && obj.constructor === Object

**2\. Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.

Object.keys(obj).length === 0 && obj.constructor === Object

**3\. Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use a for-in loop along with hasOwnProperty.

```js
function isEmpty(obj) {

for(var prop in obj) {
```
if(obj.hasOwnProperty(prop)) {

```js
return false;

}

}

return JSON.stringify(obj) === JSON.stringify({});

}
```

## How do you display the current date in javascript

You can use new Date() to generate a new Date object containing the current date and time. For example, let’s display the current date in mm/dd/yyyy

```js
var today = new Date();

var dd = today.getDate();
```
var mm = today.getMonth() + 1 //January is 0!

```js
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.write(today);
```

## How do you compare two date objects

You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

```js
var d1 = new Date();

var d2 = new Date(d1);

console.log(d1.getTime() === d2.getTime()); //True

console.log(d1 === d2); // False
```
## What are the javascript data types

The latest ECMAScript standard defines eight data types:

• Seven data types that are primitives:

1\. Boolean. true and false.

2\. null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.

3\. undefined. A top-level property whose value is not defined.

4\. Number. An integer or floating point number. For example: 42 or 3.14159.

5\. BigInt. An integer with arbitrary precision. For example: 9007199254740992n.

6\. String. A sequence of characters that represent a text value. For example: "Howdy"

7\. Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

• and Object

## \*What is a dynamically typed language?

That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution.

## What is the use of extra commas in array literal?

In JavaScript, **extra commas in an array literal are known as trailing commas or empty slots, and they are used to create sparse arrays.** A sparse array is an array with gaps between elements, where some indices do not have a defined value. **These extra commas result in undefined holes in the array.**

You do not have to specify all elements in an array literal.

```js
var fish = \['Lion', , 'Angel'\];
```
This array has two elements with values and one empty element (fish\[0\] is "Lion", fish\[1\] is undefined, and fish\[2\] is "Angel").

If you include a trailing comma at the end of the list of elements, the comma is ignored.

## What is variable hoisting

We can refer to a variable declared later, without getting an exception.

## What is scope?

Scope refers to the accessibility and visibility of the variables.

## What is lexical Scope?

Lexical Scope (also known as Static Scope) literally means that scope is determined at the lexing time (generally referred to as compiling) rather than at runtime.

## What is the lexical environment?

A lexical environment is a structure that **holds identifier-variable mapping.** (here identifier refers to the name of variables/functions, and the variable is the reference to actual object \[including function object and array object\] or primitive value).

Note — Don’t confuse lexical scope with the lexical environment, lexical scope is a scope that is determined at compile time and a lexical environment **is a place where variables are stored during the program execution.**

## What is a scope chain?

Initially JavaScript Engine search variable in its own lexical environment then it will search in the lexical environment of its parent. **This search is called scope chain.** Global environment has null as parent.

## What is the temporal dead zone?

There is a period between entering scope and being declared where they cannot be accessed. This period is **the temporal dead zone (TDZ).** Let and const are hoisted but cannot be accessed in the temporal dead zone (TDZ).

## Difference between let and const

Feature

```js
let
```

```js
const
```

| --- | --- | ---
Mutability

Mutable (value can change)

Immutable binding (cannot reassign)

| --- | --- | ---
Initialization

Optional

Mandatory

| --- | --- | ---
## Why do we say let and const are hoisted if we are unable to access it?

Here's why we still say let and const are hoisted:

1.  Declaration Exists in Scope Before Runtime
2.  Proof of Hoisting

if (true) {

```js
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization

let myLet = "I exist!";

}
```
-   The ReferenceError here indicates that myLet is known to the engine (proof of hoisting), but it's uninitialized.
-   **If let wasn't hoisted, the error would be something like "myLet is not defined".**

## \*What is shadowing?

Variable shadowing occurs when a variable of an inner scope is defined with the same name as a variable in the outer scope. In the inner scope, both variables’ scope overlap. According to variable scoping rules, the inner scope should always be able to access a variable defined in the outer scope, but in practice, shadowing will prevent that from happening.

### _Illegal Shadowing:_

Illegal shadowing happens when you try to declare a variable in a way that violates JavaScript's scoping rules, particularly when **you use let or const to shadow a variable declared with var in the same scope.** **This is not allowed because let and const introduce block scoping, whereas var is function-scoped or globally scoped.**

Illegal Shadowing

Legal Shadowing

| --- | ---
```js
let a=20;
```
{

```js
var a=10;

}
```

```js
let a=20;

function x(){

var a=10;

}
```

| --- | ---
|
```js
var a=20;
```
{

```js
let a=10;

}
```

| --- | ---
|  |
| --- | ---
```js
Output: Uncaught SyntaxError: Identifier 'a' has already been declared
```
 |
| --- | ---
## What are classes in ES6

In ES6, Javascript classes are primarily **syntactic sugar over JavaScript’s existing prototype-based inheritance.** For example, the prototype based inheritance written in function expression as below,

```js
function Bike(model,color) {

this.model = model;

this.color = color;

}

Bike.prototype.getDetails = function() {
```
return this.model + ' bike has' + this.color + ' color';

```js
};
```
Whereas ES6 classes can be defined as an alternative

```js
class Bike {

constructor(model, color) {

this.model = model;

this.color = color;

}
```
getDetails() {

```js
return \`${this.model} bike has ${this.color} color\`;

}

}
```

## What are the possible ways to create objects in JavaScript

There are many ways to create objects in javascript as below:

**1\. Object constructor:** The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

```js
var object = new Object();
```
**2\. Object create method:** The create method of Object creates a new object by passing the

prototype object as a parameter

```js
var object = Object.create(null);
```
**3\. Object literal syntax:** The object literal syntax is equivalent to create method when it passes

null as parameter.

```js
var object = {};
```
**4\. Function constructor:** Create any function and apply the new operator to create object

instances,

```js
function Person(name){

var object = {};

object.name=name;

object.age=21;

return object;

}

var object = new Person("Sudheer");
```
**5\. Function constructor with prototype:** This is similar to function constructor but it uses prototype for their properties and methods,

```js
function Person(){}

Person.prototype.name = "Sudheer";

var object = new Person();
```
This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

```js
function func {};

new func(x, y, z);
```
(OR)

// Create a new instance using function prototype.

```js
var newInstance = Object.create(func.prototype)
```
// Call the function

```js
var result = func.call(newInstance, x, y, z),
```
// If the result is a non-null object then use it otherwise just use the new instance

```js
console.log(result && typeof result === 'object' ? result : newInstance);
```
**6\. ES6 Class syntax:** ES6 introduces class feature to create the objects

```js
class Person {

constructor(name) {

this.name = name;

}

}

var object = new Person("Sudheer");
```
**7\. Singleton pattern:** A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don’t accidentally create multiple instances.

```js
var object = new function(){

this.name = "Sudheer";

}
```
## \*What is Object prototypes and prototype chain

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

When it comes to inheritance, JavaScript only has one construct: objects. **Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.**

## Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through object.prototype.

## How to Define read-only properties in JavaScript Object

### 1\. Using Object.defineProperty()

You could instead use the writable property of the property descriptor, which prevents the need for a get accessor. By default writable is false so you can emit writable:false also.

```js
const person = {};
```
Object.defineProperty(person, 'name', {

```js
value: 'John',

writable: false, // Makes the property read-only
```
configurable: false // Prevents further modifications to the property

```js
});

console.log(person.name); // "John"
```
person.name = 'Jane'; // Will have no effect

```js
console.log(person.name); // "John"
```

**2\. Using Object.freeze()
**Object.freeze() is a method that prevents any modifications to an object's properties, making them effectively read-only. This includes preventing adding, deleting, or modifying existing properties.

```js
const person = {

name: 'John',

age: 30

};

Object.freeze(person);
```
person.name = 'Jane'; // Will not change the name

person.newProperty = 'new'; // Will not add the property

```js
console.log(person.name); // "John"

console.log(person); // { name: 'John', age: 30 }
```

### 3\. Using get Accessors for Read-Only Properties

```js
const person = {
```
_name: 'John',

get name() {

```js
return this._name;

}

};

console.log(person.name); // "John"
```
person.name = 'Jane'; // Will not change the name

```js
console.log(person.name); // "John"
```

## What is execution context?

Execution context is an abstract concept that holds information about the environment within which the current code is being executed

## What is call stack

**Call Stack** is there for managing execution context. It maintains the order of execution context.

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc

## \*What is optional Chaining

The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. **The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.**

```js
const dogName = adventurer.dog?.name;

console.log(dogName);// expected output: undefined
```
## Compare Object and Map

**Map is preferable** **over Object** in certain cases.

1\. The **keys** of an Object are Strings and Symbols, whereas they can be **any value for a Map**, including functions, objects, and any primitive.

2\. The **keys** **in Map are ordered** while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.

3\. You can **get the size of a Map easily** with the size property, while the number of properties in an Object must be determined manually (Object.keys(myArray).length).

4\. A **Map** is an iterable and can thus be **directly iterated,** whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

```js
for (let key in yourobject) {

console.log(key, yourobject\[key\]);

}
```
5\. An Object has a prototype, so there are **default keys in the map that could collide with your keys** if you’re not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.

6\. A **Map** may **perform** **better in scenarios involving frequent addition and removal of key pairs.**

## What are benefits of map over for loops

**Use map() when:**

-   You want to transform all elements of an array into a new array.
-   Readability, immutability, and functional style are priorities.
-   Method chaining can simplify your logic.

**Use for loops when:**

-   You need to perform complex operations beyond array transformations.
-   Breaking out of the loop or handling side effects is required.

## Difference between map and forEach

The .map() and .forEach() methods in JavaScript are both used to iterate over arrays, but they serve different purposes and have different characteristics. Here's a detailed comparison:

### Feature/Aspect

### .map()

### .forEach()

| --- | --- | ---
### Purpose

To transform an array by applying a function to each element and returning a new array.

To perform operations on each element of an array without returning a new array.

| --- | --- | ---
### Return Value

Returns a new array containing the results of applying the callback function to each element.

Returns undefined.

| --- | --- | ---
### Mutability

Does not modify the original array (unless the callback function explicitly does so).

Does not modify the original array (unless explicitly done inside the callback).

| --- | --- | ---
### Chainable

Can be chained with other array methods because it returns an array.

Not chainable because it returns undefined.

| --- | --- | ---
### Use Case

Use when you need a transformed version of the original array.

Use when you need to execute side effects (e.g., logging, updating an external variable) without creating a new array.

| --- | --- | ---
### Syntax

```js
js \[1, 2, 3\].map(x => x \* 2); // \[2, 4, 6\]
```

```js
js \[1, 2, 3\].forEach(x => console.log(x)); // Logs 1, 2, 3
```

| --- | --- | ---
### Examples

### Using .map() for Transformation

```js
const numbers = \[1, 2, 3\];

const doubled = numbers.map(num => num \* 2);

console.log(doubled); // \[2, 4, 6\]

console.log(numbers); // \[1, 2, 3\] (original array unchanged)
```
### Using .forEach() for Side Effects

```js
const numbers = \[1, 2, 3\];

numbers.forEach(num => console.log(num \* 2)); // Logs 2, 4, 6

console.log(numbers); // \[1, 2, 3\] (original array unchanged)
```
### Key Points

-   Use .map() when you want to transform data and need a new array as a result.
-   Use .forEach() when you're only performing side effects (e.g., console logs, updates to an external variable).
-   For performance-critical applications, note that .forEach() may be slightly faster because it doesn't create a new array. However, this difference is usually negligible.

## What are all String methods available in javascript?

### Method

### Description

### Syntax

| --- | --- | ---
### charAt(index)

Returns the character at the specified index.

'hello'.charAt(1) // Output: 'e'

| --- | --- | ---
### charCodeAt(index)

Returns the Unicode value of the character at the specified index.

'hello'.charCodeAt(1) // Output: 101

| --- | --- | ---
### concat(string2, ...)

Joins two or more strings and returns a new string.

'Hello'.concat(' ', 'World') // Output: 'Hello World'

| --- | --- | ---
### includes(substring)

Checks if a string contains the specified substring. Returns true or false.

'JavaScript'.includes('Script') // Output: true

| --- | --- | ---
### indexOf(searchValue)

Returns the index of the first occurrence of the specified value. Returns -1 if not found.

'hello world'.indexOf('world') // Output: 6

| --- | --- | ---
### lastIndexOf(searchValue)

Returns the index of the last occurrence of the specified value. Returns -1 if not found.

'hello world world'.lastIndexOf('world') // Output: 12

| --- | --- | ---
### slice(start, end)

Extracts a part of a string and returns a new string.

'JavaScript'.slice(4, 10) // Output: 'Script'

-   **Supports negative indices. Negative values count from the end of the string.**
-   **If startIndex > endIndex, it returns an empty string.**

| --- | --- | ---
### substring(start, end)

Extracts characters between start and end.

'JavaScript'.substring(4, 10) // Output: 'Script'

-   **Does not support negative indices. Treat them as 0.**
-   **If startIndex > endIndex, it swaps the indices automatically.**

| --- | --- | ---
### substr(start, length)

Extracts a substring from a string, starting at a specified position and for a specified length.

'JavaScript'.substr(4, 6) // Output: 'Script'

| --- | --- | ---
### toLowerCase()

Converts a string to lowercase.

'Hello World'.toLowerCase() // Output: 'hello world'

| --- | --- | ---
### toUpperCase()

Converts a string to uppercase.

'Hello World'.toUpperCase() // Output: 'HELLO WORLD'

| --- | --- | ---
### trim()

Removes whitespace from both ends of a string.

' Hello World '.trim() // Output: 'Hello World'

| --- | --- | ---
### trimStart()

Removes whitespace only from the beginning of a string.

' Hello World '.trimStart() // Output: 'Hello World '

| --- | --- | ---
### trimEnd()

Removes whitespace only from the end of a string.

' Hello World '.trimEnd() // Output: ' Hello World'

| --- | --- | ---
### split(separator)

Splits a string into an array of substrings based on the specified separator.

'a,b,c'.split(',') // Output: \['a', 'b', 'c'\]

| --- | --- | ---
### replace(search, replace)

Replaces the first occurrence of a specified value with another value.

'hello world'.replace('world', 'JavaScript') // Output: 'hello JavaScript'

| --- | --- | ---
### replaceAll(search, replace)

Replaces all occurrences of a specified value with another value.

'hello world world'.replaceAll('world', 'JavaScript') // Output: 'hello JavaScript JavaScript'

| --- | --- | ---
### startsWith(substring)

Checks if a string starts with the specified substring. Returns true or false.

'JavaScript'.startsWith('Java') // Output: true

| --- | --- | ---
### endsWith(substring)

Checks if a string ends with the specified substring. Returns true or false.

'JavaScript'.endsWith('Script') // Output: true

| --- | --- | ---
### repeat(count)

Returns a new string with the original string repeated count times.

'ha'.repeat(3) // Output: 'hahaha'

| --- | --- | ---
### match(regex)

Matches a string against a regular expression and returns an array of matches or null if no match.

'hello world'.match(/world/) // Output: \['world'\]

| --- | --- | ---
### search(regex)

Searches for a match between the string and a regular expression and returns the index or -1.

'hello world'.search(/world/) // Output: 6

| --- | --- | ---
### padStart(targetLength)

Pads the string at the start with specified characters to reach the target length.

'5'.padStart(3, '0') // Output: '005'

| --- | --- | ---
### padEnd(targetLength)

Pads the string at the end with specified characters to reach the target length.

'5'.padEnd(3, '0') // Output: '500'

| --- | --- | ---
### localeCompare(otherString)

Compares two strings and returns a number indicating their relative order.

'apple'.localeCompare('banana') // Output: -1

| --- | --- | ---
## What are all Array methods available in Javascript?

### Method

### Description

### Syntax (with Example and Output)

| --- | --- | ---
### push(item)

Adds one or more items to the end of an array and returns the new length.

```js
let arr = \[1, 2\]; arr.push(3); // Output: \[1, 2, 3\]
```

| --- | --- | ---
### pop()

Removes the last item from an array and returns it.

```js
let arr = \[1, 2, 3\]; arr.pop(); // Output: 3, Array: \[1, 2\]
```

| --- | --- | ---
### shift()

Removes the first item from an array and returns it.

```js
let arr = \[1, 2, 3\]; arr.shift(); // Output: 1, Array: \[2, 3\]
```

| --- | --- | ---
### unshift(item)

Adds one or more items to the beginning of an array and returns the new length.

```js
let arr = \[1, 2\]; arr.unshift(0); // Output: \[0, 1, 2\]
```

| --- | --- | ---
### concat(array)

Combines two or more arrays and returns a new array.

```js
let arr1 = \[1, 2\]; let arr2 = \[3, 4\]; arr1.concat(arr2); // Output: \[1, 2, 3, 4\]
```

| --- | --- | ---
### slice(start, end)

Returns a shallow copy of a portion of an array into a new array.

```js
let arr = \[1, 2, 3, 4\]; arr.slice(1, 3); // Output: \[2, 3\]
```

| --- | --- | ---
### splice(start, deleteCount, ...items)

Adds/removes items to/from an array, modifying the original array.

```js
let arr = \[1, 2, 3\]; arr.splice(1, 1, 'a'); // Output: \[1, 'a', 3\]
```

| --- | --- | ---
### indexOf(item)

Returns the first index of a specified item, or -1 if not found.

```js
let arr = \[1, 2, 3\]; arr.indexOf(2); // Output: 1
```

| --- | --- | ---
### lastIndexOf(item)

Returns the last index of a specified item, or -1 if not found.

```js
let arr = \[1, 2, 2, 3\]; arr.lastIndexOf(2); // Output: 2
```

| --- | --- | ---
### includes(item)

Checks if an array contains the specified item. Returns true or false.

```js
let arr = \[1, 2, 3\]; arr.includes(2); // Output: true
```

| --- | --- | ---
### find(callback)

Returns the first item that satisfies the callback function, or undefined if no match is found.

```js
let arr = \[1, 2, 3\]; arr.find(x => x > 2); // Output: 3
```

| --- | --- | ---
### findIndex(callback)

Returns the index of the first item that satisfies the callback function, or -1 if no match is found.

```js
let arr = \[1, 2, 3\]; arr.findIndex(x => x > 2); // Output: 2
```

| --- | --- | ---
### filter(callback)

Returns a new array with items that satisfy the callback function.

```js
let arr = \[1, 2, 3\]; arr.filter(x => x > 1); // Output: \[2, 3\]
```

| --- | --- | ---
### map(callback)

Creates a new array by applying the callback function to each item in the array.

```js
let arr = \[1, 2, 3\]; arr.map(x => x \* 2); // Output: \[2, 4, 6\]
```

| --- | --- | ---
### reduce(callback, initialValue)

Applies a callback function to reduce the array to a single value.

```js
let arr = \[1, 2, 3\]; arr.reduce((sum, x) => sum + x, 0); // Output: 6
```

| --- | --- | ---
### every(callback)

Returns true if all items satisfy the callback function, otherwise false.

```js
let arr = \[2, 4, 6\]; arr.every(x => x % 2 === 0); // Output: true
```

| --- | --- | ---
### some(callback)

Returns true if at least one item satisfies the callback function, otherwise false.

```js
let arr = \[1, 3, 5\]; arr.some(x => x % 2 === 0); // Output: false
```

| --- | --- | ---
### sort(compareFunction)

Sorts the items of the array in place.

```js
let arr = \[3, 1, 2\]; arr.sort(); // Output: \[1, 2, 3\]
```

| --- | --- | ---
### reverse()

Reverses the order of the items in the array.

```js
let arr = \[1, 2, 3\]; arr.reverse(); // Output: \[3, 2, 1\]
```

| --- | --- | ---
### join(separator)

Joins all array items into a string, separated by the specified separator.

```js
let arr = \[1, 2, 3\]; arr.join('-'); // Output: '1-2-3'
```

| --- | --- | ---
### flat(depth)

Flattens nested arrays into a single array, up to the specified depth.

```js
let arr = \[1, \[2, \[3\]\]\]; arr.flat(2); // Output: \[1, 2, 3\]
```

| --- | --- | ---
### flatMap(callback)

Maps each item using a callback function, then flattens the result into a new array.

```js
let arr = \[1, 2\]; arr.flatMap(x => \[x, x \* 2\]); // Output: \[1, 2, 2, 4\]
```

| --- | --- | ---
### fill(value, start, end)

Fills an array with a specified value from the start index to the end index (exclusive).

```js
let arr = \[1, 2, 3\]; arr.fill(0, 1, 3); // Output: \[1, 0, 0\]
```

| --- | --- | ---
### copyWithin(target, start, end)

Copies part of the array to another location in the same array.

```js
let arr = \[1, 2, 3, 4\]; arr.copyWithin(1, 2); // Output: \[1, 3, 4, 4\]
```

| --- | --- | ---
### Array.isArray(value)

Returns true if the given value is an array, otherwise false.

Array.isArray(\[1, 2, 3\]); // Output: true

| --- | --- | ---
## How do you redeclare variables in switch block without an error

```js
let counter = 1;

switch(x) {
```
case 0:

```js
let name;

break;
```
case 1:

```js
let name; **// SyntaxError for redeclaration.**

break;

}
```

To avoid this error, you can create a nested block inside a case clause and

create a new block scoped lexical environment.

```js
let counter = 1;

switch(x) {
```
case 0: {

```js
let name;

break;

}
```
case 1: {

```js
let name; **// No SyntaxError for redeclaration.**

break;

}

}
```

## Different type of function

1.  Named function
2.  Anonymous function: The anonymous functions don’t have names. They need to be tied to something: variables or an event to run.
3.  Immediately Invoked Function Expression. It runs as soon as the browser finds it.

## How to declare the optional function parameters?

To declare optional function parameters in JavaScript, there are two approaches:

1.  **Using the Logical OR operator (‘||’):** In this approach, the optional parameter is Logically ORed with the default value within the body of the function.

**Note:** The optional parameters should always come at the end on the parameter list.

Syntax:

```js
function myFunc(a,b) {

b = b || 0;
```
// b will be set either to b or to 0.

```js
}
```
1.  **Using the Assignment operator (“=”):** In this approach the optional variable is assigned the default value in the declaration statement itself.

**Note:** The optional parameters should always come at the end on the parameter list.

Syntax:

```js
function myFunc(a, b = 0) {
```
// function body

```js
}
```
## What is an arguments object

The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let’s see how to use arguments object inside sum function:

```js
function sum() {

var total = 0;

for (var i = 0, len = arguments.length; i < len; ++i) {

total += arguments\[i\];

}

return total;

}
```
sum(1, 2, 3) // returns 6

//Note: You can’t apply array methods on arguments object. But you can convert into a regular array as below.

```js
var argsArray = Array.prototype.slice.call(arguments);
```

## What are lambda or arrow functions

An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.

## what is anonymous function

A function which does not have an identity. But if we declare an anonymous function without function body and assigning in a variable then it will throw error

```js
function (){

}
```

```js
Output: Uncaught SyntaxError: Function statements require a function name
```

**_If it is throwing an error then what is the use of an anonymous function?_**

Anonymous functions are used in places where functions are used as value. So we cannot use anonymous functions in function statements. We can use it as a function expression.

## What is a first class function

In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener :

const handler = () => console.log ('This is a click handler function');

```js
document.addEventListener ('click', handler);
```
## What is a first order function

First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

```js
const firstOrder = () => console.log ('I am a first order function!');
```
## What is a higher order function

Higher-order function is a function that accepts another function as an argument or returns a function as a return value.

```js
const firstOrderFunc = () => console.log ('Hello I am a First order function');

const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc ();

higherOrder (firstOrderFunc);
```
## What is a pure function

A Pure function is a function where the return value is only determined by its arguments without any side effects. .e, If you call a function with the same arguments ‘n’ number of times and ‘n’ number of places in the application then it will always return the same value. Let’s take an example :

### function add(a, b) {

### return a + b;

**}**

### console.log(add(2, 3)); // 5

### console.log(add(2, 3)); // 5 (Always produces the same result)

-   **No Side Effects: It doesn’t change any variables outside its scope.**
-   **Deterministic Behavior: Same inputs always give the same output**

## What is IIFE(Immediately Invoked Function Expression)

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below:

(function ()

{

```js
var message = "IIFE";

console.log(message);

}

)

();

console.log(message); //Error: message is not defined
```

## What is closure?

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

## What is the use of closure?

-   Module Design Pattern
-   Currying
-   Function like once (Only run once)
-   memoize
-   maintaining state in sync world
-   setTimeouts
-   Iterators and many more.

## What are the disadvantages of closure?

**Disadvantages:**

1.  **Memory leaks**: Closures can hold references to variables and prevent garbage collection.
2.  **Debugging difficulties**: Closures make it harder to trace the values and flow of variables across scopes.
3.  **Unintentional variable overwriting**: Closures can result in unexpected behavior when inner functions modify outer variables.
4.  **Performance issues**: Creating closures frequently can result in performance overhead due to the additional context storage.
5.  **Harder variable scope control**: Closures may unintentionally modify or reference global or outer scope variables, leading to unexpected behavior.
6.  **Closure in loops**: Using closures in loops with var can lead to unexpected results when loop variables are shared across iterations.

## What is the benefit of using modules

There are a lot of benefits to using modules in favor of sprawling. Some

of the benefits are,

1\. Maintainability

2\. Reusability

3\. Namespacing

## What is memoization

**Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.** Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let’s take an example of adding function with memoization,

```js
const memoizAddition = () => {

let cache = {};

return (value) => {
```
if (value in cache) {

```js
console.log('Fetching from cache');
```
return cache\[value\]; // Here, cache.value cannot be used as property name starts with number

```js
}
```
else {

```js
console.log('Calculating result');

let result = value + 20;

cache\[value\] = result;

return result;

}

}

}
```
// returned function from memoizAddition

```js
const addition = memoizAddition();

console.log(addition(20)); //output: 40 calculated

console.log(addition(20)); //output: 40 cached
```

## What is the currying function

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline. We can achieve it using bind and closure.

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

## When to Use Which currying option?

**Use Closures:**

-   You need more control over how arguments are collected.
-   You want to implement advanced features like argument validation or partial application with non-linear logic.
-   Readability and extensibility are more important than minimal code.

**
Use bind:**

-   You want a simple and efficient way to curry functions.
-   You don’t need custom logic for argument handling.
-   The native method suffices for your needs.

## What is a callback function

A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let’s take a simple example of how to use callback function

```js
function callbackFunction(name) {

console.log('Hello ' + name);

}

function outerFunction(callback) {

let name = prompt('Please enter your name.');

callback(name);

}

outerFunction(callbackFunction);
```

## \*Why do we need callbacks

The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

## \*What is a callback hell

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic.

The callback hell looks like below:

async1(function(){

async2(function(){

async3(function(){

async4(function(){

....

```js
});

});

});

});
```

## What is Pyramid of Doom

**Callback Hell (Callback Pyramids)** in JavaScript, also known as the “Pyramid of Doom,” is a situation where nested callbacks lead to deeply indented and hard-to-read code. It can make your code look like a pyramid due to its visual structure.

## \*What is inversion of control

**Inversion of Control (IoC)** is an abstract programming principle based on the flow of control (execution of statements/instructions) that should be fully managed by the specific implementation of the framework, which is external to your code.

## In the above example, we are losing the control of the program and passing the control of the once callback to another.

## What is a promise

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

Promise object is immutable.

```js
var promise1 = new Promise(function(resolve, reject) {

setTimeout(resolve, 500, 'one');

});
```
A Promise is in one of these states:

1.  pending: initial state, neither fulfilled nor rejected.
2.  fulfilled: meaning that the operation was completed successfully.
3.  rejected: meaning that the operation failed.

If you print a promise then initially it will show pending but when you expand chrome update the state. Hence it is showing a fulfilled state.

## Why do you need a promise

Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

## What is promise chaining

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

## What is promise.all

Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below:

```js
Promise.all(\[Promise1, Promise2, Promise3\]) .then(result) => {

console.log(result) })
```
Note: Remember that the order of the promises(output the result) is maintained as per input order.

## What is the purpose of the race method in promise

Promise.race() method will return the promise instance which is firstly resolved or rejected. Let’s take an example of race() method where promise2 is resolved first

```js
var promise1 = new Promise(function(resolve, reject) {

setTimeout(resolve, 500, 'one');

});

var promise2 = new Promise(function(resolve, reject) {

setTimeout(resolve, 100, 'two');

});
```
Promise.race(\[promise1, promise2\]).then(function(value) {

console.log(value); // "two" // Both promises will resolve, but promise2 is faster

```js
});
```
## \*What are the main rules of promise

A promise must follow a specific set of rules:

1\. A promise is an object that supplies a standard-compliant .then() method

2\. A pending promise may transition into either fulfilled or rejected state

3\. A fulfilled or rejected promise is settled and it must not transition into any other state.

4\. Once a promise is settled, the value must not change.

## \*What are the pros and cons of promises over callbacks

Below are the list of pros and cons of promises over callbacks,

**Pros:**

1.  It avoids callback hell which is unreadable
2.  Easy to write sequential asynchronous code with .then()
3.  Easy to write parallel asynchronous code with Promise.all()
4.  Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

**Cons:**

1.  It makes little complex code
2.  You need to load a polyfill if ES6 is not supported

## Difference between Callback vs Promises vs Async Await

**Callback:** We can also pass functions as parameters to other functions and call them inside the outer functions. So **callback** is a function that is passed to another function.

**Callback Hell:** Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code. So in this situation Promises came to handle the nested callback in a better way.

**Promise:** A **promise** is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an asynchronous block of code to completely execute before other synchronous parts of the code can run. With Promises, we can defer the execution of a code block until an async request is completed. This way, other operations can keep running without interruption.

**Async/Await:** It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand. **Async** lets JavaScript know that we are using async/await syntax, and is necessary if you want to use Await. This means you can’t use Await at the global level. It always needs a wrapper function. Or we can say await is only used with an async function. The **await** keyword is used in an async function to ensure that all promises returned in the async function are synchronized,

## What is event loop

Its job is to check the callback queue and push functions of the callback queue into the call stack. JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

## What comes under the microtask queue?

All the callback functions which come from **promises** will go into the microtask queue. The **MutationObserver** interface provides the ability to watch for changes being made to the DOM tree.

## What is Starvation inside the callback queue?

Starvation happens when “greedy” threads make shared resources unavailable for long periods. For instance, suppose an object provides a synchronized method that often takes a long time to return. Suppose execution of methods that are inside microtask queue create more methods that goes into microtask queue then in such case methods of callback queue will never get change for execution

## What is Javascript Engine?

A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.

Key Responsibilities of a JavaScript Engine:

1.  **Parsing**: Reads and interprets the JavaScript code.
2.  **Compilation**: Converts JavaScript code into optimized machine code (often done just-in-time).
3.  **Execution**: Runs the machine code efficiently, ensuring the application functions correctly.
4.  **Memory Management**: Handles memory allocation and garbage collection (removal of unused objects).

## \*What is Copy Elision?

Copy elision is an optimization implemented by most compilers to prevent extra (potentially expensive) copies in certain situations. It makes returning by value or pass-by-value feasible in practice

## What are the call, apply and bind methods?

The call, apply, and bind methods are functions available in JavaScript for controlling the context (this) in which a function is invoked.
**Use cases:**

-   call: When you want to call a function immediately and specify its ‘this’ value.
-   apply: When arguments are already in an array or array-like structure
-   bind: When you need to bind a function to a specific ‘this’ for later execution.bind method return a copy of method

```js
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```js
}

let printFullName= function (hometown, state){

console.log(this.firstName+" "+this.lastName+" from "+hometown+", "+state);

}

printFullName.call(name, "Chittorgarh", "Rajasthan");

let name2 = {

firstName: "Any",
```
lastName:"Random",

```js
}
```
### //function borrowing

### printFullName.call(name2, "Udaipur", "Rajasthan");

### printFullName.apply(name2, \["Udaipur", "Rajasthan"\]);

### // bind method return a copy of method

### let printMyName= printFullName.bind(name2,"Udaipur", "Rajasthan" )

### printMyName();

## What is Polyfill?

Polyfill is like a browser's fallback and you have to write your own method instead of using Javascript new methods

## What are polyfills for call, apply and bind methods?

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
```
// PolyFill for call method

```js
Function.prototype.mycall = function(obj,...args){
```
// this = printName

```js
obj.fnRef = this;

// console.log(obj);

obj.fnRef(...args);

}
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
// PolyFill for apply method

```js
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
```
//Advance

```js
Function.prototype.myApply = function (obj, args) {
```
if (typeof this !== "function") {

```js
throw new TypeError("myApply must be called on a function");

}
```
if (!Array.isArray(args)) {

```js
throw new TypeError("CreateListFromArrayLike called on non-object");

}
```
if (args !== null && args !== undefined) {

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
// PolyFill for bind method

```js
Function.prototype.myBind = function (obj, ...args) {
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
```
## What is the Array reduce method and write its polyfill?

The reduce() function in JavaScript is a method available on arrays that is used to iterate through the array, applying a callback function to each element, and accumulating a single result.

```js
const numbers = \[1, 2, 3, 4\];

const sum = numbers.reduce((accumulator, currentValue) => {

return accumulator + currentValue;

}, 0);

Array.prototype.myReduce = function(callback, initialValue) {

const originalArray = this;
```
// Check if 'this' is an array

if (!Array.isArray(originalArray)) {

```js
throw new TypeError("myReduce is not a function");

}
```
// Initialize accumulator

```js
let acc;

let startIndex;
```
if (initialValue !== undefined) {

```js
acc = initialValue;
```
startIndex = 0; // Start from the first element

} else {

if (originalArray.length === 0) {

```js
throw new TypeError("Reduce of empty array with no initial value");

}

acc = originalArray\[0\];
```
startIndex = 1; // Skip the first element

```js
}
```
// Iterate over the array

```js
for (let i = startIndex; i < originalArray.length; i++) {

acc = callback(acc, originalArray\[i\], i, originalArray);

}

return acc;

};

const sum1 = numbers.myReduce((accumulator, currentValue) => {

return accumulator + currentValue;

}, 0);

console.log(sum1); // Output: 10
```

## Check duplicate using reduce method

```js
const numbers = \[2, 5, 3, 5, 6, 3, 2\];

const firstDuplicate = numbers.reduce((acc, currentValue, currentIndex, array) => {
```
if (acc !== null) return acc; // If a duplicate is already found, skip further checks

// Check if the current value appears again later in the array

```js
const isDuplicate = array.indexOf(currentValue) !== currentIndex;

return isDuplicate ? currentValue : acc;

}, null);

console.log(firstDuplicate); // **Output: 5**
```

```js
const numbers = \[10, 20, 30, 40\];

const sumWithDebug = numbers.reduce((acc, currentValue, currentIndex, array) => {

console.log(\`Index: ${currentIndex}, Value: ${currentValue}, Accumulator: ${acc}, Array: ${array}\`);

return acc + currentValue;

}, 0);

console.log(sumWithDebug); // Output: 100
```

```js
Index: 0, Value: 10, Accumulator: 0, Array: 10,20,30,40

Index: 1, Value: 20, Accumulator: 10, Array: 10,20,30,40

Index: 2, Value: 30, Accumulator: 30, Array: 10,20,30,40

Index: 3, Value: 40, Accumulator: 60, Array: 10,20,30,40
```
100

## What is debouncing?

Debouncing in JavaScript is a technique used to control the rate at which a function is executed, ensuring that it is only invoked after a certain period of inactivity. This is particularly useful in scenarios where a function might otherwise be triggered repeatedly in quick succession, such as during scrolling, resizing the window, or typing in a search input.

index.html

<!DOCTYPE html>

`<html lang="en">`

`<head>`

`<meta charset="UTF-8">`

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

<title>Learn JavaScript</title>

`</head>`

`<body>`

<input type="text" id="search" onkeyup="betterFunction()" />

`<script src="./index.js"></script>`

`</body>`

`</html>`

### Using timeout function

### Index.js

// Debouncing in Javascript

```js
let counter=0;

const getData = () =>{
```
// calls an API and gets Data

```js
console.log("Fetching Data....", counter++);

}

const **debounce**\= function(func, delay){

let timer;

return function(...args){
```
// To use correct lexical environment

```js
let context= this,

clearTimeout(timer);

timer = setTimeout( ()=>{

func.apply(context, args);
```
}, delay)

```js
}

}

const betterFunction = **debounce**(getData, 300);
```

// using time

```js
const debounce = function (func, delay) {
```
let lastExecutionTime = 0; // Tracks the last execution time

```js
return function (...args) {

let context = this;

let currentTime = new Date().getTime(); // Current timestamp
```
if ( currentTime - lastExecutionTime > delay) {

func.apply(context, args); // Execute the function if delay has passed

lastExecutionTime = currentTime; // Update the last execution time

```js
}

};

};
```

-   Does not reset the timer on subsequent calls, unlike the setTimeout approach.
-   Might not handle edge cases where the delay needs precise resetting.

## What is Throttling?

Throttling ensures that a function is executed at most once every specified period, regardless of how many times it is triggered. Unlike debouncing, which delays execution until after a period of inactivity, throttling limits the rate of execution for the function.

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

## Difference b/w debouncing and throttle?

**Throttling** is a technique in which, no matter how many times the user fires the event, the attached **function will be executed only once in a given time interval.**

In the **debouncing** technique, no matter how many times the user fires the event, the attached **function will be executed only after the specified time once the user stops firing the event.**

## What is an event flow ?

**Event flow is the order in which an event is received on the web page.** When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.

There are two ways of event flow:

1\. Top to Bottom(Event Capturing)

2\. Bottom to Top (Event Bubbling)

## What is event bubbling ?

Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

## What is event capturing ?

Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.

## What is an event delegation

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it. For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

```js
var form = document.querySelector('#registration-form');
```
form.addEventListener('input', function (event) {

// Log the field that was changed

```js
console.log(event.target);

}, false);
```
## \*What is BOM

The Browser Object Model (BOM) allows JavaScript to “talk to” the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

## What is the difference between native, host and user objects

**Native objects** are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.

**Host objects** are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc. are considered as host objects.

## User objects are objects defined in the javascript code. For example, User objects created for profile information.

## What is IndexedDB

IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.

## What is web storage

Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user’s browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

1\. Local storage: It stores data for current origin with no expiration date.

2\. Session storage: It stores data for one session and the data is lost when the browser tab is closed.

## What is a Cookie

A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. For example, you can create a cookie named username as below, document.cookie = "username=John";

## Why do you need a Cookie

Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

1\. When a user visits a web page, the user profile can be stored in a cookie.

2\. Next time the user visits the page, the cookie remembers the user profile.

## What are the options in a cookie

There are few below options available for a cookie,

1\. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).

```js
document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
```
2\. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.

```js
document.cookie = "username=John; path=/services";
```
## How do you delete a cookie

You can delete a cookie by setting the expiry date as a passed date. You don’t need to specify a cookie value in this case. For example, you can delete an username cookie in the current page as below.

```js
document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
```
Note: You should define the cookie path option to ensure that you delete the right cookie. Some browsers don't allow you to delete a cookie unless you specify a path parameter.

## What are the differences between cookie, local storage and session storage

### Feature

### Cookie

### Local storage

### Session storage

| --- | --- | --- | ---
Accessed on client or server side

Both server-side & client-side

client-side only

client-side only

| --- | --- | --- | ---
Lifetime

As configured using

Expires option

until deleted

until tab is closed

| --- | --- | --- | ---
SSL

Supported

Not Supported

Not Supported

| --- | --- | --- | ---
Maximum data size

4KB

5 MB

5 MB

| --- | --- | --- | ---
## How do you access web storage

The Window object implements the WindowLocalStorage and WindowSessionStorage objects which have localStorage(window.localStorage) and sessionStorage(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local). For example, you can read and write on local storage objects as below

```js
localStorage.setItem('logo', document.getElementById('logo').value); localStorage.getItem('logo');
```
## What are the methods available on session storage

The session storage provided methods for reading, writing and clearing the session data.

// Save data to sessionStorage

```js
sessionStorage.setItem('key', 'value');
```
// Get saved data from sessionStorage

```js
let data = sessionStorage.getItem('key');
```
// Remove saved data from sessionStorage

```js
sessionStorage.removeItem('key');
```
// Remove all saved data from sessionStorage

```js
sessionStorage.clear();
```
## What is a storage event and its event handler

The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events. The syntax would be as below :

```js
window.onstorage = functionRef;
```
Let’s take the example usage of onstorage event handler which logs the storage key and it’s values

```js
window.onstorage = function(e) {
```
console.log('The ' + e.key + ' key has been changed from ' + e.oldValue +

```js
' to ' + e.newValue + '.');

};
```
## Why do you need web storage?

Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

## How do you check web storage browser support?

You need to check browser support for localStorage and sessionStorage before using web storage,

if (typeof(Storage) !== "undefined") {

// Code for localStorage/sessionStorage.

} else {

// Sorry! No Web Storage support..

```js
}
```
## What is a service worker

A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don’t need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.

## What is the Lifecycle of a Service Worker?

The service worker goes through a lifecycle with several stages, starting from registration to activation. These stages include:

1.  **Registration:**
    -   The service worker is registered by calling navigator.serviceWorker.register() from the main JavaScript file. This step happens when the web app is loaded and allows the browser to find and install the service worker.
2.  **Installation:**
    -   During installation, the service worker can cache essential files and resources, ensuring they are available offline. The install event is fired during this stage.
3.  **Activation:**
    -   Once installed, the service worker is activated. During this phase, developers can clean up old caches or perform other tasks. The activate event is fired.
4.  **Fetch Event:**
    -   The service worker listens to fetch events, allowing it to intercept network requests and provide responses from the cache, network, or a custom response.
5.  **Termination:**
    -   Service workers are terminated when they are no longer needed, and they can be re-activated when required. The service worker runs only when needed and is efficient in terms of resource usage.

// Registering the service worker

if ('serviceWorker' in navigator) {

navigator.serviceWorker.register('/service-worker.js')

.then(function(registration) {

```js
console.log('Service Worker registered with scope:', registration.scope);
```
})

.catch(function(error) {

```js
console.log('Service Worker registration failed:', error);

});

}
```
// Inside the service-worker.js file

self.addEventListener('install', function(event) {

event.waitUntil(

caches.open('my-cache').then(function(cache) {

```js
return cache.addAll(\[
```
'/index.html',

'/styles.css',

'/app.js'

```js
\]);
```
})

```js
);

});
```
self.addEventListener('fetch', function(event) {

event.respondWith(

caches.match(event.request).then(function(cachedResponse) {

```js
return cachedResponse || fetch(event.request);
```
})

```js
);

});
```

## How do you manipulate DOM using a service worker

Service workers can’t access the DOM directly. But it can communicate with the pages it controls by responding to messages sent **via the Client.postMessage interface**, and those pages can manipulate the DOM.

## What is a post message

Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow the same-origin policy(i.e, pages share the same protocol, port number, and host).

## How do you reuse information across service worker restarts

The problem with service worker is that it gets terminated when not in use, and restarted when it’s next needed, so you cannot rely on global state within a service worker’s onfetch and onmessage handlers. In this case, **service workers will have access to IndexedDB API in order to persist and reuse across restarts.**

## Give an example of a web worker

You need to follow below steps to start using web workers for counting example

**1\. Create a Web Worker File:** You need to write a script to increment the count value. Let’s name it as counter.js.

```js
let i = 0;

function timedCount() {

i = i + 1;

postMessage(i);

setTimeout("timedCount()",500);

}

timedCount();
```

Here postMessage() method is used to post a message back to the HTML page

**2\. Create a Web Worker Object:** You can create a web worker object by checking for browser support. Let’s name this file as web_worker_example.js

if (typeof(w) == "undefined") {

```js
w = new Worker("counter.js");

}
```
//and we can receive messages from web worker

```js
w.onmessage = function(event){

document.getElementById("message").innerHTML = event.data;

};
```

**3\. Terminate a Web Worker:** Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use the terminate() method to terminate listening to the messages.

### w.terminate();

**4\. Reuse the Web Worker:** If you set the worker variable to undefined you can reuse the code.

```js
w = undefined;
```
## What are the restrictions of web workers on DOM?

WebWorkers don’t have access to below javascript objects since they are defined in external files.

1\. Window object

2\. Document object

3\. Parent object

## How do you submit a form using JavaScript

You can submit a form using JavaScript using document.form\[0\].submit(). All the form input’s information is submitted using onsubmit event handler

```js
function submit() {

document.form\[0\].submit();

}
```
## How do you find operating system details

The window.navigator object contains information about the visitor’s browser OS details. Some of the OS properties are available under platform property.

```js
console.log(navigator.platform);
```
## What is the difference between document load and DOMContentLoaded events

The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).

## What are the tools or techniques used for debugging JavaScript code

You can use below tools or techniques for debugging javascript

1\. Chrome Devtools

2\. debugger statement

```js
3\. Good old console.log statement
```
## What is the difference between an attribute and a property

Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

<input type="text" value="Name:">

## What is same-origin policy

The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to

sensitive data on another web page using Document Object Model(DOM).

## What is the purpose of void 0

Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use **href=“JavaScript:Void(0);”** within an <a> element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression. For example, the below link will notify the message without reloading the page <a href="JavaScript:void(0);" onclick="alert('Well done!')">Click Me!</a>.

## What is the use of preventDefault method

The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur.

Note: Remember that not all events are cancelable.

## What is the use of stopPropagation method

The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested.div(Div1)

<p>Click DIV1 Element</p>

<div onclick="secondFunc()">DIV 2

<div onclick="firstFunc(event)">DIV 1</div>

</div>

`<script>`

```js
function firstFunc(event) {

alert("DIV 1");

event.stopPropagation();

}

function secondFunc() {

alert("DIV 2");

}
```
`</script>`

## What is JSON

JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging.

### JSON to String

### String to JSON object

| --- | ---
```js
var userJSON = {'name': 'John', age: 31}

var userString = JSON.stringify(user);

console.log(userString);
```
//"{"name":"John","age":31}"

```js
var userString = '{"name":"John","age":31}';

var userJSON = JSON.parse(userString);

console.log(userJSON);
```
// {name: "John", age: 31}

| --- | ---
## What are PWAs

Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

## How do you redirect new page in javascript

In vanilla javascript, you can redirect to a new page using the location property of the window object. The syntax would be as follows:

```js
function redirect() {

window.location.href = 'newPage.html';

}
```
## How do you get the current url with javascript

You can use window.location.href expression to get the current url path and you can use the same expression for updating the URL too. You can also use document.URL for read-only purposes but this solution has issues in FF.

```js
console.log('location.href', window.location.href); // Returns full URL
```
## What are the various url properties of location object

The below Location object properties can be used to access URL components of the page,

1.  href - The entire URL
2.  protocol - The protocol of the URL
3.  host - The hostname and port of the URL
4.  hostname - The hostname of the URL
5.  port - The port number in the URL
6.  pathname - The path name of the URL
7.  search - The query portion of the URL
8.  hash - The anchor portion of the URL

## How do get query string values in javascript

You can use URLSearchParams to get query string values in javascript. Let’s see an example to get the client code value from URL query string,

```js
const urlParams = new URLSearchParams(window.location.search);

const clientCode = urlParams.get('clientCode');
```
## How do you access history in javascript

The window.history object contains the browser’s history. You can load previous and next URLs in the history using back() and next() methods.

```js
function goBack() {
```
window.history.back()

```js
}

function goForward() {
```
window.history.forward()

```js
}
```
**Note:** You can also access history without window prefix.

## What are the types of popups ?

JavaScript provides three main types of popup boxes to interact with users. These are part of the browser's built-in functionality:

### 1\. Alert Box

-   **Purpose**: Used to display a simple message or alert to the user.
-   **Characteristics**:
    -   It has a single "OK" button.
    -   Execution is paused until the user dismisses the alert.

**Syntax**:
```js
alert("This is an alert box!");
```
**Example**:
```js
alert("Hello! This is an alert message.");
```
### 2\. Confirm Box

-   **Purpose**: Used to display a message and ask for user confirmation (Yes/No, OK/Cancel).
-   **Characteristics**:
    -   It provides "OK" and "Cancel" buttons.
    -   Returns true if the user clicks "OK" and false if they click "Cancel."

**Syntax**:
```js
confirm(message);
```
**Example**:
if (confirm("Do you want to proceed?")) {

```js
console.log("User clicked OK");
```
} else {

```js
console.log("User clicked Cancel");

}
```
### 3\. Prompt Box

-   **Purpose**: Used to get input from the user.
-   **Characteristics**:
    -   It displays a text input field along with "OK" and "Cancel" buttons.
    -   Returns the entered text if the user clicks "OK."
    -   Returns null if the user clicks "Cancel."

**Syntax**:
```js
prompt(message, defaultValue);
```
**Example**:
const userName = prompt("What is your name?", "Guest");

if (userName !== null) {

```js
console.log("Hello, " + userName + "!");
```
} else {

```js
console.log("User canceled the prompt.");

}
```
**Limitations:**

1.  Popup boxes are **synchronous** and block the browser's execution.
2.  They can be intrusive and may lead to a poor user experience if overused.
3.  Most modern browsers allow users to disable popup dialogs.

Mix Questions

## What are server-sent events

Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel – events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

## How do you receive server-sent event notifications

The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,

if(typeof(EventSource) !== "undefined") {

```js
var source = new EventSource("sse_generator.js");

source.onmessage = function(event) {

document.getElementById("output").innerHTML += event.data + "<br>";

};

}
```
## How do you check browser support for server-sent events

You can perform browser support for server-sent events before using it as below,

if(typeof(EventSource) !== "undefined") {

// Server-sent events supported. Let's have some code here!

} else {

// No server-sent events supported

```js
}
```
## What are the events available for server sent events

Below are the list of events available for server sent events

### Events

### Description

| --- | ---
onopen

When a connection to the server is opened

| --- | ---
onmessage

When a message is received

| --- | ---
onerror

When an error occurs

| --- | ---
Output Questions

### Output questions (To check output , select the complete row )

## Basic JavaScript

### Concatenation

```js
console.log("1"+1)

console.log("1"-1)

console.log(1-"one")

console.log("1"+1+1)

console.log(1+1-"1")
```

**Output**:

11

0

NAN

111

1
**Reason**:
If one of the operands is a string, the + operator concatenates the string representation of the other operand

\- operator convert string to number

### shorthand Expression

```js
let f = "8";

let a = 1;

console.log((+f)+a+1);
```

**Output :** 10

**Reason :** The expression (+f) is a shorthand way to convert the string value of f to a number. Therefore, (+f) evaluates to 8.

### < Operator in console

```js
console.log(5 < 6 < 7);
```

**Output** : true

**Reason** : In JavaScript, the < operator evaluates expressions from left to right. First, the expression 5 < 6 is evaluated, resulting in true because 5 is less than 6. Then, the expression true < 7 is evaluated. In this case, JavaScript performs type coercion and converts true to the number 1. Therefore, the expression becomes 1 < 7, which is true.

### Arithmetic operation on undefined

```js
var x;

x++;

console.log(x);

x=10;
```

**Output**: NAN

### comparison with == operator

```js
console.log(0 == false);

console.log(1 == true);
```

**Output** : true, true

**Reason** : The == operator converts operands to a common type before making the comparison. In both the cases, the boolean value will be converted to a number, i.e., false is converted to 0 and true is converted to 1. So, the expression 0 == false is equivalent to 0 == 0 and 1 == true is equivalent to 1 == 1.

### Comparing object with string

```js
const arr1 = \[1,2,3\];

const arr2 = \[1,2,3\];

const str = "1,2,3";

console.log(arr1 == str);

console.log(arr1 == arr2);
```

**Output** : true, false

**Reason** for console.log(arr1 == str) : Javascript compiler performs type conversion. In this case, it converts the array arr1 and the string str to their string representations and then compares them.

**Reason** for console.log(arr1==arr2) : In Javascript arrays are objects and objects are compared by reference. In this case, arr1 and arr2 are pointing to 2 different memory locations

### Comparing objects

```js
console.log({} == {});

console.log({} === {});
```

**Output** : false, false

**Reason** : When you compare objects using == or ===, it checks if they refer to the exact same object. So even if they are looking the same, they are pointing to different memory locations.

### Comparing NAN

```js
console.log(NaN===NaN)
```

**Output** : false

**Reason** : NaN represents an invalid or undefined numeric result, and it doesn’t make sense to consider one invalid result equal to another

### Comparing array with boolean

```js
console.log(false == \[\]);

console.log(false ==!\[\]);
```

**Output**:true

true

1\. Expression:

false == \[\]

2\. Convert \`false\` to a number:

\- \`false\` becomes \`0\`.

3\. Convert \`\[\]\` (empty array) to a primitive:

\- \`\[\].toString()\` → \`""\` (empty string).

\- \`""\` (empty string) converts to \`0\` when used in a numeric comparison.

4\. Final comparison:

0 == 0

The ! (logical NOT) operator has higher precedence than ==, so !\[\] is evaluated first.

### Pre Increment operator

```js
let x = 5;

let y = x++;

console.log(y);

console.log(x)
```

**Output** : 5, 6

**Reason** : The post-increment operator increments and returns the value before incrementing.

### Post increment operator

```js
let x = 5;

let y = ++x;

console.log(y);

console.log(x)
```

**Output** : 6, 6

**Reason** : The pre-increment operator increments and returns the value after incrementing.

## Variable Hoisting

### Access the variable without declaring it

```js
console.log(a);
```

**Output:** ReferenceError: a is not defined

### Access the variable before declaring it

```js
console.log("value of a is", a);

var a=100;

console.log("value of a is", a);
```

**Output:**

value of a is undefined

value of a is 100

### Declare and Assign a value without var , let and const

```js
x = 10;

console.log(x);
```

### Output: 10

**Reason:** In JavaScript, if you don't explicitly declare the variable with let, const, or var, it will be created as a global variable.

### Assign value to the variable and then declare it with var

```js
a=10;

console.log("value of a is", a);

var a=100;

console.log("value of a is", a);
```

**Output:**

value of a is 10

value of a is 100

**Reason:**since a is not explicitly declared with a var, let, or const, it implicitly becomes a global variable (in non-strict mode).

### Assign value from another variable

```js
console.log(a);

console.log(b);

var a=b=5;
```

**Output**: undefined
```js
ReferenceError: b is not defined
```
**Reason & Explanation:**

The statement b = 5 is evaluated first.

This assigns the value 5 to b. However, since b is not explicitly declared with var, let, or const, it becomes a global variable (if you're not in strict mode).

Next, var a = ... declares a as a variable in the current scope and assigns it the value of 5.

### Assign value to the variable and then declare it with let

```js
a=10;

console.log("value of a is", a);

let a=100;

console.log("value of a is", a);
```

**Output:**

### ReferenceError: Cannot access 'a' before initialization

**Reason:** Let and const are hoisted but only acces**sible in temporal dead zone**)

### Declare let variable twice

```js
let a = "xyz";

let a = "pqr";

console.log(a)
```

**Output** : SyntaxError: Identifier 'a' has already been declared

**Reason** : Because let and const does not allow re-declaration of the same variable in the same scope.

### Declare var variable twice

```js
var a = "xyz";

var a = "pqr";

console.log(a)
```

**Output** : "pqr"

**Reason** : Both the variables are declared using the "var" keyword with the same name "a". The second variable declaration will override the first variable declaration.

### Declare and access the variable inside the function

```js
function quiz() {
```
if (true) {

```js
var a=1;

}

console.log(a);

}

quiz();
```

**Output:** 1

**Reason:** Initially in memory phase it will be undefined but later when entered into if block it will assign a=1 so when we access inside the function scope then the value will be 1

### Declare the variable inside the function but access it outside the function

```js
function quiz() {
```
if (true) {

```js
var a=1;

}

}

quiz();

console.log(a);
```

**Output:** ReferenceError: a is not defined

**Reason:** After function block executed , vair a will be out of the execution context and then will be not defined even with undefined value. Hence the error.

### Access function when we use function expression to declare the function

```js
myfun();

var myfun = function () {

console.log("First");

}

myfun();
```

**Output:** TypeError: myfun is not a function

**Reason:** Function expressions are not hoisted onto the beginning of the scope, therefore they cannot be used before they appear in the code. Try to assume that myfun in memory phase will be undefined so we are try to calling undefined() which will throw error

### Access function when we use function expression and function statement both

```js
myfun();

var myfun = function () {

console.log("First");

}

myfun();

function myfun() {

console.log("Second");

}

myfun();
```

**Output:**

Second

First

First

**Reason:**

Initially in the memory phase myfun is undefined but later we have used function statements

which overrides the undefined value in the same memory phase and myfun becomes the function

which we have written. hence it will not throw the error.

### Access and redeclare the var in function

```js
var num=500;

function func(){

console.log(num);

var num=100;

}

console.log(func())
```

**Output:**

undefined

undefined

## Array and String related output question

### Spread Array items

```js
const arr1 = \[1, 2, 3, 4\];

const arr2 = \[6, 7, 5\];

const result = \[...arr1, ...arr2\];

console.log(result);
```

```js
Output : \[1, 2, 3, 4, 6, 7, 5\]
```
Reason : Spread operator (...) concatenates the two arrays into a "result" array.

### Concate using +

```js
console.log(\[11, 2, 31\] + \[4, 5, 6\]);
```

**Output** : "11,2,314,5,6"

**Reason** : The + operator is used for both addition and string concatenation. When you try to concatenate two arrays using the + operator, the arrays are converted to strings and then concatenated together. In this case, the arrays \[11, 2, 31\] and \[4, 5, 6\] are converted to strings as "11,2,31" and "4,5,6" respectively. Then, the two strings are concatenated, resulting in "11,2,314,5,6".

###

### What will happen if we set array length to 0

```js
let arr = \[1, 2, 3, 4, 5, -6, 7\];

arr.length = 0;

console.log(arr);
```

**Output :** \[ \]

Reason : The length of the array has been set to 0, so the array becomes empty.

### Concat subarray inside

```js
let arr = \[1, \[2, \[3\]\]\];
```
arr.flat(2); // Output: \[1, 2, 3\]

### What will be the length of the array and array elements if we add arr.foo = ‘hello’?

```js
const arr = \[3, 5, 7\];

arr.foo = 'hello';

console.log(arr);

console.log(arr.foo);

console.log(arr.length);
```

**Output:**

### \[ 3, 5, 7, foo: 'hello' \]

### hello

**3
Explanation:**

The foo property does not affect the length of the array or its indexed values.

However, if you use a for...in loop, it will include the foo property:

```js
for (const key in arr) {

console.log(key); // Outputs: '0', '1', '2', 'foo'

}

for (const value of arr) {

console.log(value); // Outputs: 3, 5, 7

}
```

## Object

### Copy object and update it’s properties

```js
let a = { x: 1, y: 2 }

let b = a;

b.x = 3;

console.log(a);

console.log(b);
```

**Output :** { x: 3, y: 2 } { x: 3, y: 2 }

**Reason : '**a' and 'b' both are pointing to the same reference.

### Destructing object

```js
const obj = {

var1: 1,

var2: 2

};

const { var1, var2 } = obj;

console.log(var1, var2);
```

**Output** : 1, 2

**Reason** : Object destructuring extracts the values of var1 and var2 from obj object and prints them using console.log(var1, var2)

### Destructing object with default value

```js
const user = {

name: "Surbhi dighe",

country: "India"

};

const { name: fullname, country } = user;

console.log(fullname);

console.log(name);
```

**Output** : Surbhi Dighe, ReferenceError: name is not defined

**Reason** for console.log(fullname) : The name property from the user is assigned to a local variable fullname.

**Reason** for console.log(name) : It gives an error because name was assigned to a local variable fullname and therefore name is not directly accessible.

### Destructing object with default value

```js
const person = {

firstName: 'Surbhi',

};

const { firstName="Henry"} = person;

console.log(firstName);
```

**Output** : Surbhi

**Reason** : The \`firstName\` property in the \`person\` object has the value 'Surbhi'. The default value "Henry" is ignored because it only applies when the property does not exist or is \`undefined\`

### object keys converted to strings

```js
let x={},y={name:"Satish"},z={name:"Pratik"};

x\[y\]={name:"Salman"};

x\[z\]={name:"Sharukh"};

console.log(x\[y\])
```

**Output: { name: 'Sharukh' }
Reason:**

-   In JavaScript, object keys are always converted to strings when used as keys in an object.
-   When y or z are used as keys in the object x, they are converted to the string \[object Object\].

**Step-by-Step Execution:**

1.  I**nitialize Objects**
    -   x = {} (an empty object).
    -   y = { name: "Satish" } (an object with a name property).
    -   z = { name: "Pratik" } (another object with a name property).
2.  **First Assignment**
    ```js
        x\[y\] = { name: "Salman" };
    ```
    -   When y is used as a key, it is converted to \[object Object\].
    -   This results in:

```js
x = {
```
"\[object Object\]": { name: "Salman" }

```js
};
```
1.  **Second Assignment**
    ```js
        x\[z\] = { name: "Sharukh" };
    ```
    -   Similarly, z is also converted to \[object Object\].
    -   Since the key \[object Object\] already exists in x, the value { name: "Sharukh" } overwrites the previous value { name: "Salman" }.
2.  **Final State of x**
    ```js
        x = {
    ```
"\[object Object\]": { name: "Sharukh" }

```js
};
```
**Output**:
```js
console.log(x\[y\]);// Output: { name: "Sharukh" }
```

### Access getter in object

```js
var fullname = "Rishabh Sisodiya"

var obj = {
```
fullname:"Hacked Full Name",

prop:{

fullname:"Inside Prop",

```js
getFullName: function(){

return this.fullname;

}
```
},

```js
getFullName: function(){

return this.fullname;
```
},

```js
getFullNamev2:()=> this.fullname,

getFullNamev3: (function () {

return this.fullname;
```
})(),

```js
};

console.log(obj.prop.getFullName()); // Inside Prop

console.log(obj.getFullName()); //Hacked Full Name

console.log(obj.getFullNamev2()); //Rishabh Sisodiya

console.log(obj.getFullNamev3());
```

### Output: TypeError: obj.getFullNamev3 is not a function

### Object and call method

```js
const rishabh ={
```
name:"Rishabh Sisodiya",

sayName:function(){

```js
console.log(this.name);

}

};

const deepak = {
```
name:"deepak kumawat",

sayName:function(){

```js
console.log(this.name);

}

};

deepak.sayName.call(rishabh);
```

### Output: Rishabh Sisodiya

### Object with timeout

```js
const rishabh ={
```
name:"Rishabh Sisodiya",

sayName:function(){

```js
console.log(this.name);

}

};

setTimeout(rishabh.sayName, 3\*1000);
```

**Output:** Undefined

if we change settimeout to **setTimeout(rishabh.sayName.bind(rishabh), 3\*1000) or setTimeout( () => rishabh.sayName(rishabh), 3\*1000);** then it will print Rishabh Sisodiya because bind will return the function

### Delete obj properties

```js
const obj = {
```
height:30

```js
}

console.log(obj.height);

delete obj.height;

console.log(obj.height);
```

Output:

30

undefined

### if we use Object.create() in previous example then height will be in prototype not in obj as normal object initialization

```js
const obj = Object.create({
```
height:30

})

```js
console.log(obj.height);

delete obj.height;

console.log(obj.height);
```

**Output**:

30

30

![](/notes-img/javascript-questions/img-003.webp)

## IIFE (Immediately Invoked function Expression)

### Access outside declared variable wth var inside IIFE

```js
var a=10;

( ()=>{

console.log(a);

a=20;

console.log(a);

})();

console.log(a);

var a = 30;
```

**Output:**

10

20

20

### Access variable outside IIFE which is declared and initialize in IIFE

```js
var a=10;

( ()=>{

b=100;

console.log(a);

var b=100;

a=20;

console.log(a);

})();

console.log(b);

console.log(a);

var a = 30;
```

**Output:** ReferenceError: b is not defined

## Lexical scope

### Access a declared variable with let inside a outer function which is called from another outer function

```js
let number = 42;

function printNumber() {

console.log(number);

}

function log() {

let number = 54;

printNumber();

}

log();
```

### Output: 42

### Similar scenario like previous question but this time function is nested inside another function and forming a closure

```js
let globalNumber = 100;

function outer() {

let number = 200;

function inner() {

console.log(number);

}

return inner;

}

function execute(fn) {

let number = 300;

fn();

}

const innerFunction = outer(); // Call outer() to get innerFunction
```
execute(innerFunction); // Pass innerFunction to execute

### Output:200

## Timeout and loop

### Counter with loop variable as var

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

**Output**:

Hello JavaScript

6

6

6

6

6

**Reason:** Loop will keep running so the value of i becomes 6 till the time out timeout expires as the timeout

function will be called once the global execution context is completed.

### Counter with loop variable as let

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

Reason: Because **let** has a block-scope so every time when the loop runs that “i” has a new copy altogether.

Function in setTimeout forms a closure with a new copy of the variable “i” bound to it.

### Counter with loop variable as closure

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

Reason: Every time you call closer(i), it will create a new copy of i .**output will remain same if we use let**

## Closure

### what if we use let in place of var in closure and use just before the return statement.

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

### When we call inner function before initialization of let a

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

In case of var a , it will show undefined. It is a similar case where we try to access var and let before initialization.

**Counter problem statement with closure
**It is also a good way to implement data hiding

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

Programs

# Array

## Array Reverse

1.  **Using Two Pointers – O(n) Time and O(1) Space**

The idea is to maintain two pointers: left and right, such that left points at the beginning of the array and right points to the end of the array.

While the left pointer is less than the right pointer, swap the elements at these two positions. After each swap, increment the left pointer and decrement the right pointer to move towards the center of the array. This will swap all the elements in the first half with their corresponding element in the second half.

```js
const arr = \[1, 4, 3, 2, 6, 5,1\];

function reverseArray(arr) {

let left=0, right=arr.length-1;

let temp1;

while (left<right) {
```
// \[arr\[left\],arr\[right\]\]=\[arr\[right\],arr\[left\]\]

```js
temp1 = arr\[left\];

arr\[left\]=arr\[right\];

arr\[right\]=temp1;

left++;

right--;

}

return arr;

}

console.log(reverseArray(arr));
```

Time Complexity: O(n),

Auxiliary Space: O(1)

1.  **Using inbuilt method**

// function to reverse an array

```js
function reverseArray(arr) {

arr.reverse();

}

const arr = \[1, 4, 3, 2, 6, 5\];

reverseArray(arr);

console.log(arr.join(" "));
```

Time Complexity: O(n),

Auxiliary Space: O(1)

## Find the maximum and minimum element in an array

|
|
## Code to print combination of elements from array:

```js
function combine(\[head, ...\[headTail, ...tailTail\]\]) {
```
if (!headTail || headTail.length < 1) {

```js
return head.map( item=> \[item\]);

}

const combined = head.reduce((acc, currentValue) => {

return acc.concat(headTail.map(h => {

return Array.isArray(currentValue) ? \[...currentValue, h\] : \[currentValue, h\]
```
}))

}, \[\])

if (!tailTail || tailTail.length < 1) return combined

```js
return combine(\[combined, ...tailTail\])

}

console.log(combine(\[\["1.5 cm","2cm"\] \]))
```

## Sum of Marks Ignoring Lowest Average Subject

A class consists of N students and M subjects. The teacher wants to calculate the total marks for each student but decides to ignore one subject for all students. The subject to be ignored is the one that has the lowest average score across all students.

Inputs:

Input1 (N): Number of students

Input2 (M): Number of subjects

Input3 (2D Array of size N × M): Marks of each student in each subject

Output:

A list of N integers, where each value represents the total marks of a student after excluding the lowest average subject.

```js
function calculateTotalMarks(n, m, marks) {

let subjectAverages = new Array(m).fill(0);
```
// Step 1: Calculate average marks for each subject

```js
for (let j = 0; j < m; j++) {

let sum = 0;

for (let i = 0; i < n; i++) {

sum += marks\[i\]\[j\];

}
```
subjectAverages\[j\] = sum / n; // Store subject average

```js
}
```
// Step 2: Find the subject index with the lowest average

```js
let minAvgIndex = 0;

for (let j = 1; j < m; j++) {
```
if (subjectAverages\[j\] < subjectAverages\[minAvgIndex\]) {

```js
minAvgIndex = j;

}

}
```
// Step 3: Calculate total marks for each student (excluding the lowest avg subject)

```js
let totalMarks = new Array(n).fill(0);

for (let i = 0; i < n; i++) {

for (let j = 0; j < m; j++) {
```
if (j !== minAvgIndex) { // Exclude the lowest average subject

```js
totalMarks\[i\] += marks\[i\]\[j\];

}

}

}

return totalMarks;

}
```
// Example Usage

```js
let students = 3;

let subjects = 4;

let marks = \[
```
\[80, 90, 70, 60\],

\[85, 88, 75, 55\],

\[78, 92, 68, 58\]

```js
\];

console.log(calculateTotalMarks(students, subjects, marks));
```
// Output: \[240, 248, 238\]

# Functions

## Function Composition

Given an array of functions \[f1, f2, f3, ..., fn\], return a new function fn that is the function composition of the array of functions.

The function composition of \[f(x), g(x), h(x)\] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

Example 1:

```js
Input: functions = \[x => x + 1, x => x \* x, x => 2 \* x\], x = 4

Output: 65
```
Explanation:

Evaluating from right to left ...

Starting with x = 4.

2 \* (4) = 8

(8) \* (8) = 64

(64) + 1 = 65

```js
function compose(functions) {

return function(x) {

return functions.reduceRight((acc, fn) => fn(acc), x);

};

}
```

## Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.

Every subsequent time it is called, it should return undefined.

Example 1:

```js
Input: fn = (a,b,c) => (a + b + c), calls = \[\[1,2,3\],\[2,3,6\]\]

Output: \[{"calls":1,"value":6}\]
```
Explanation:

```js
const onceFn = once(fn);
```
onceFn(1, 2, 3); // 6

onceFn(2, 3, 6); // undefined, fn was not called

```js
function once(fn) {

let called = false;

return function(...args) {
```
if (!called) {

```js
called = true;

return fn.apply(this, args);

}

return undefined;

};

}
```

# Strings

## Problem Statement: Smallest Substring Containing All Characters

Given two input strings:

1.  input1 (a sentence/string)
2.  input2 (a set of required characters)

Write a program in JavaScript to find the **smallest contiguous substring** in input1 that contains **all the characters** from input2 (including duplicates, if any). If no such substring exists, return an empty string ("").

**Approach**:You can solve this problem in JavaScript by using the sliding window (two-pointer) technique:

1.  Use a hashmap to count the frequency of characters in input2.
2.  Expand the right pointer to include characters in input1 until all characters in input2 are found.
3.  Move the left pointer to shrink the window while still maintaining all characters.
4.  Keep track of the minimum-length substring that satisfies the condition.

```js
function minWindowSubstring(input1, input2) {

let charMap = new Map();
```
// Fill the map with the frequency of characters in input2

```js
for (let char of input2) {

charMap.set(char, (charMap.get(char) || 0) + 1);

}

let left = 0, right = 0, minLen = Infinity, minSubstring = "";

let requiredChars = charMap.size;

let foundChars = 0;

let windowCounts = new Map();

while (right < input1.length) {

let rightChar = input1\[right\];
```
if (charMap.has(rightChar)) {

```js
windowCounts.set(rightChar, (windowCounts.get(rightChar) || 0) + 1);
```
if (windowCounts.get(rightChar) === charMap.get(rightChar)) {

```js
foundChars++;

}

}
```
// Try to shrink the window while all required characters are found

```js
while (foundChars === requiredChars) {

let currentLen = right - left + 1;
```
if (currentLen < minLen) {

```js
minLen = currentLen;

minSubstring = input1.substring(left, right + 1);

}

let leftChar = input1\[left\];
```
if (charMap.has(leftChar)) {

```js
windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
```
if (windowCounts.get(leftChar) < charMap.get(leftChar)) {

```js
foundChars--;

}

}

left++;

}

right++;

}

return minSubstring;

}
```
// Example Usage:

console.log(minWindowSubstring("this is a test string", "tist")); // Output: "t stri"

```js
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"

console.log(minWindowSubstring("a", "a")); // Output: "a"

console.log(minWindowSubstring("a", "b")); // Output: ""
```

# DSA questions

[https://github.com/loiane/javascript-datastructures-algorithms/tree/third-edition/examples/chapter03](https://github.com/loiane/javascript-datastructures-algorithms/tree/third-edition/examples/chapter03)
