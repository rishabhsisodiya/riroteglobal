---
title: "Functions & Expressions"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
order: 1.2
slug: "basics-functions"
updated: "2026-09-06"
source: "JavaScript Notes.docx"
draft: false
description: "JavaScript basics — Functions & Expressions."
---
### Function expressions

While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

```js
const square = function(number) { return number * number }
```
var x = square(4) // x gets the value 16

**A method is a function that is a property of an object. function hoisting only works with function declarations—not with function expressions.**

**Difference between Function Statement(or function declaration) & Expression**

```js
a();

b();
```
**// function statement**

```js
function a() {

console.log("a called");

}
```
**// Function Expression**

```js
var b = function(){

console.log("b called");

}
```

**Output:**

a called

Uncaught TypeError: b is not a function

at index.js:2

Only difference is hoisting. Function expressions are not hoisted onto the beginning of the scope, therefore they cannot be used before they appear in the code.

Scope and the function stack

### Recursion

A function can refer to and call itself. There are three ways for a function to refer to itself:

1.  The function's name
2.  arguments.callee
3.  An in-scope variable that refers to the function

For example, consider the following function definition:

```js
var foo = function bar() {
```
// statements go here

```js
}
```
Within the function body, the following are all equivalent:

1.  bar()
2.  arguments.callee()
3.  foo()

Compared to the function loop, each recursive call itself makes many recursive calls here.

It is possible to convert any recursive algorithm to a non-recursive one, but the logic is often much more complex, and doing so requires the use of a stack.

In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:

```js
function foo(i) {
```
if (i < 0)

```js
return;

console.log('begin: ' + i);

foo(i - 1);

console.log('end: ' + i);

}

foo(3);
```
// Output:

// begin: 3

// begin: 2

// begin: 1

// begin: 0

// end: 0

// end: 1

// end: 2

// end: 3

### Nested functions and closures

You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

**It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).**

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

To summarize:

-   The inner function can be accessed only from statements in the outer function.
-   The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

The following example shows nested functions:

```js
function addSquares(a, b) {

function square(x) {

return x * x;

}

return square(a) + square(b);

}

a = addSquares(2, 3); // returns 13

b = addSquares(3, 4); // returns 25

c = addSquares(4, 5); // returns 41
```
Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:

```js
function outside(x) {

function inside(y) {

return x + y;

}

return inside;

}
```
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it

```js
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```
### Preservation of variables

Notice how x is preserved when inside is returned. A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned inside is no longer accessible.

This is not different from storing references in other objects, but is often less obvious because one does not set the references directly and cannot inspect them.

### Multiply-nested functions

Functions can be multiply-nested. For example:

A function (A) contains a function (B), which itself contains a function (C).

Both functions B and C form closures here. So, B can access A, and C can access B.

In addition, since C can access B which can access A, C can also access A.
Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. **This is called scope chaining.**

Consider the following example:

```js
function A(x) {

function B(y) {

function C(z) {

console.log(x + y + z);

}

C(3);

}

B(2);

}
```
A(1); // logs 6 (1 + 2 + 3)

In this example, C accesses B's y and A's x.

This can be done because:

-   B forms a closure including A (i.e. B can access A's arguments and variables).
-   C forms a closure including B.
-   Because B's closure includes A, C's closure includes A, C can access both B and A's arguments and variables. In other words, C chains the scopes of B and A, in that order.

The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.

### Name conflicts

When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest.

```js
function outside() {

var x = 5;

function inside(x) {

return x * 2;

}

return inside;

}
```
outside()(10); // returns 20 instead of 10

However, the outer function does not have access to the variables and functions defined inside the inner function. This **provides a sort of encapsulation** for the variables of the inner function.

var pet = function(name) { // The outer function defines a variable called "name"

```js
var getName = function() {
```
return name; // The inner function has access to the "name" variable of the outer

//function

```js
}
```
return getName; // Return the inner function, thereby exposing it to outer scopes

```js
}

myPet = pet('Vivie');
```
myPet(); // Returns "Vivie"

It can be much more complex than the code above. An object containing methods for **manipulating the inner variables of the outer function** can be returned.

```js
var createPet = function(name) {

var sex;

return {

setName: function(newName) {

name = newName;
```
},

```js
getName: function() {

return name;
```
},

```js
getSex: function() {

return sex;
```
},

```js
setSex: function(newSex) {
```
if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||

newSex.toLowerCase() === 'female')) {

```js
sex = newSex;

}

}

}

}

var pet = createPet('Vivie');
```
pet.getName(); // Vivie

```js
pet.setName('Oliver');

pet.setSex('male');
```
pet.getSex(); // male

pet.getName(); // Oliver

In the code above, the name variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

```js
var getCode = (function() {

var apiCode = '0]Eal(eh&2'; // A code we do not want outsiders to be able to modify...

return function() {

return apiCode;

};

})();
```
getCode(); // Returns the apiCode

**Caution:** There are a number of pitfalls to watch out for when using closures!

If an enclosed function defines a variable with the same name as a variable in the outer scope, then there is no way to refer to the variable in the outer scope again. (The inner scope variable "overrides" the outer one, until the program exits the inner scope.)

var createPet = function(name) { // The outer function defines a variable called "name".

```js
return {
```
setName: function(name) { // The enclosed function also defines a variable called "name".

name = name; // How do we access the "name" defined by the outer function?

```js
}

}

}
```
### Using the arguments object

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

### arguments\[i\]

where i is the ordinal number of the argument, starting at 0. So, the first argument passed to a function would be arguments\[0\]. The total number of arguments is indicated by arguments.length.

Using the arguments object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function.

The function is defined as follows:

```js
function myConcat(separator) {

var result = ''; // initialize list

var i;
```
// iterate through arguments

```js
for (i = 1; i < arguments.length; i++) {

result += arguments[i] + separator;

}

return result;

}
```
You can pass any number of arguments to this function, and it concatenates each argument into a string "list":

// returns "red, orange, blue, "

```js
myConcat(', ', 'red', 'orange', 'blue');
```
// returns "elephant; giraffe; lion; cheetah; "

```js
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');
```
// returns "sage. basil. oregano. pepper. parsley. "

```js
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
```
**Note:** The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does _not_ possess all of the array-manipulation methods.

### Function parameters

Starting with ECMAScript 2015, there are two new kinds of parameters: default parameters and rest parameters.

Default Parameters

### Without default parameters (pre-ECMAScript 2015)

```js
function multiply(a, b) {

b = typeof b !== 'undefined' ? b : 1;

return a * b;

}
```
multiply(5); // 5

### With default parameters (post-ECMAScript 2015)

```js
function multiply(a, b = 1) {

return a * b;

}
```
multiply(5); // 5

### Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```js
function multiply(multiplier, ...theArgs) {

return theArgs.map(x => multiplier * x);

}

var arr = multiply(2, 1, 2, 3);

console.log(arr); // [2, 4, 6]
```
### Anonymous function

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

### Named function statement

A function expression with a name. for examples

```js
var b = function **xyz**(){

console.log("b called");

}
```

### What happens when we call a named function statement

```js
var b = function **xyz**(){

console.log("xyz called");

}

b();
```
**xyz();**

**Output**:

xyz called

Uncaught ReferenceError: xyz is not defined

Because here xyz is not created in outer scope (that means it is not declared above var b and below function call as well ) as it is created as a local variable so you can use inside in xyz() but it is undefined in outer scope.

### Difference between parameter and argument

Parameters are used in function definition as local variables inside that function and arguments are passed over function while calling.

### First Class Function (First Class Citizens)

A programming language is said to have **First-class functions** **when functions** in that language **are treated like any other variable**. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

**// Pass function as parameter**

```js
var b = function (param1) {

console.log(param1);

};
```

**// Return a function**

```js
b(function () {});

var b = function (){

return function xyz(){

}

}

console.log(b());
```

### Callback Function

A **callback** function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

```js
function greeting(name) {

alert('Hello ' + name);

}

function processUserInput(callback) {

var name = prompt('Please enter your name.');

callback(name);

}

processUserInput(greeting);
```

**Why Async?**

// Callback

```js
setTimeout(() => {

console.log("timer");

}, 5000);

function x(y){

console.log("x");

y();

}
```
x(function y(){

```js
console.log("y");
```
})

So the timer will display after 5 sec and x()& y() will run before that. All run in the call stack and the call stack is our main thread. If x() has heavy operation then it may take more than 5 sec then it will block the main thread i.e. call stack and our timer will not run. Everything will be blocked. That is why we should use async.

**
Arrow functions**

An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.

Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

### Shorter functions

```js
var a = [
```
'Hydrogen',

'Helium',

'Lithium',

'Beryllium'

```js
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```
### No separate this

Until arrow functions, every new function defines its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

```js
function Person() {
```
// The Person() constructor defines \`this\` as itself.

```js
this.age = 0;
```
setInterval(function growUp() {

// In nonstrict mode, the growUp() function defines \`this\`

// as the global object, which is different from the \`this\`

// defined by the Person() constructor.

```js
this.age++;

}, 1000);

}

var p = new Person();
```
In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

```js
function Person() {
```
var self = this; // Some choose \`that\` instead of \`self\`.

// Choose one and be consistent.

```js
self.age = 0;
```
setInterval(function growUp() {

// The callback refers to the \`self\` variable of which

// the value is the expected object.

```js
self.age++;

}, 1000);

}
```
Alternatively, a **bound function** could be created so that the proper this value would be passed to the growUp() function.

### Predefined functions

JavaScript has several top-level, built-in functions:

**eval() :** The eval() method evaluates JavaScript code represented as a string.

**uneval() :** The uneval() method creates a string representation of the source code of an Object.

**isFinite():** The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

**isNaN() :** The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015, or you can use typeof to determine if the value is Not-A-Number.

**parseFloat() :** The parseFloat() function parses a string argument and returns a floating point number.

**parseInt() :** The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

**decodeURI() :** The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

**decodeURIComponent():** The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

**encodeURI() :**The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

**encodeURIComponent():** The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

**
Operators**

### Assignment operators

The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. Each assignment is evaluated right-to-left.

**
Destructuring**

The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.

```js
var foo = ['one', 'two', 'three'];
```
// without destructuring

```js
var one = foo[0];

var two = foo[1];

var three = foo[2];
```
// with destructuring

```js
var [one, two, three] = foo;
```
### Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

Equal (==), Not equal (!=), Strict equal (===), Strict not equal (!==), Greater than (>), Greater than or equal (>=), Less than (<) and Less than or equal (<=).

**
Arithmetic operators**

| Operator | Description | Example |
| --- | --- | --- |
| Remainder (%) | Binary operator. Returns the integer remainder of dividing the two operands. | 12 % 5 returns 2. |
| Increment (++) | Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one. | If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4. |
| Decrement (--) | Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator. | If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2. |
| Unary negation (-) | Unary operator. Returns the negation of its operand. | If x is 3, then -x returns -3. |
| Unary plus (+) | Unary operator. Attempts to convert the operand to a number, if it is not already. | +"3" returns 3. +true returns 1. |
| Exponentiation operator (**) | Calculates the base to the exponent power, that is, baseexponent | 2 ** 3 returns 8. 10 ** -1 returns 0.1. |

### Bitwise operators

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.

| Operator | Usage | Description |
| --- | --- | --- |
| Bitwise AND | a & b | Returns a one in each bit position for which the corresponding bits of both operands are ones. |
| Bitwise OR | a | b | Returns a zero in each bit position for which the corresponding bits of both operands are zeros. |
| Bitwise XOR | a ^ b | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
| Bitwise NOT | ~ a | Inverts the bits of its operand. |
| Left shift | a << b | Shifts a in binary representation b bits to the left, shifting in zeros from the right. |
| Sign-propagating right shift | a >> b | Shifts a in binary representation b bits to the right, discarding bits shifted off. |
| Zero-fill right shift | a >>> b | Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left. |

### Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.

Logical AND (&&), Logical OR (||) and Logical NOT (!).

### Short-circuit evaluation

As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

false && anything is short-circuit evaluated to false.

true || anything is short-circuit evaluated to true.

### String operators (concatenate +)

The concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

console.log('my' + 'string'); // console logs the string "my string".

### Conditional (ternary) operator

The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

condition ? val1: val2

For example,

```js
var status = (age >= 18) ? 'adult' : 'minor';
```
### Comma operator

The comma operator (,) evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. It is regarded as bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.

### Unary operators

A unary operation is an operation with only one operand.

### delete

The delete operator deletes an object's property. The syntax is:

```js
delete object.property;

delete object[propertyKey];

delete objectName[index];
```
delete property; // legal only within a with statement

where object is the name of an object, property is an existing property, and propertyKey is a string or symbol referring to an existing property.

```js
x = 42; // implicitly creates window.x

var y = 43;

var myobj = {h: 4}; // create object with property h
```
delete x; // returns false (cannot delete if created implicitly)

delete y; // returns false (cannot delete if declared with var)

delete Math.PI; // returns false (cannot delete non-configurable properties)

delete myobj.h; // returns true (can delete user-defined properties)

### Deleting array elements

Since arrays are just objects, it's technically possible to delete elements from them. This is however regarded as a bad practice, try to avoid it. When you delete an array property, the array length is not affected and other elements are not re-indexed. To achieve that behavior, it is much better to just overwrite the element with the value undefined. To actually manipulate the array, use the various array methods such as splice.

### typeof

The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned.

Suppose you define the following variables:

```js
var myFun = new Function('5 + 2');

var shape = 'round';

var size = 1;

var foo = ['Apple', 'Mango', 'Orange'];

var today = new Date();
```
The typeof operator returns the following results for these variables:

typeof myFun; // returns "function"

typeof shape; // returns "string"

typeof size; // returns "number"

typeof foo; // returns "object"

typeof today; // returns "object"

typeof doesntExist; // returns "undefined"

### void

The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate.

### Relational operators

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

### in

The in operator returns true if the specified property is in the specified object. The syntax is:

propNameOrNumber in objectName

// Arrays

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
```
0 in trees; // returns true

3 in trees; // returns true

6 in trees; // returns false

'bay' in trees; // returns false (you must specify the index number,

// not the value at that index)

'length' in trees; // returns true (length is an Array property)

// built-in objects

'PI' in Math; // returns true

```js
var myString = new String('coral');
```
'length' in myString; // returns true

// Custom objects

```js
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
```
'make' in mycar; // returns true

'model' in mycar; // returns true

### instanceof

The instanceof operator returns true if the specified object is of the specified object type. The syntax is: objectName instanceof objectType

Use instanceof when you need to confirm the type of an object at runtime.

```js
var theDay = new Date(1995, 12, 17);
```
if (theDay instanceof Date) {

// statements to execute

```js
}
```
The **typeof** and the **instanceof** operator are quite different. typeof returns a type of entity that it’s operated on (like it operates on string then return “string” not String). instanceof of returns true if an object is created from a given constructor and false otherwise ().

### Operator precedence

The following table describes the precedence of operators, from highest to lowest.

| Operator type | Individual operators |
| --- | --- |
| member |. [] |
| call / create instance | () new |
| negation/increment | ! ~ - + ++ -- typeof void delete |
| multiply/divide | * / % |
| addition/subtraction | + - |
| bitwise shift | << >> >>> |
| relational | < <= > >= in instanceof |
| equality | == != === !== |
| bitwise-and | & |
| bitwise-xor | ^ |
| bitwise-or | | |
| logical-and | && |
| logical-or | || |
| conditional | ?: |
| assignment | = += -= *= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??= |
| comma |, |

### Expressions

An expression is any valid unit of code that resolves to a value.

### Primary Expression

### this

Use this keyword to refer to the current object. In general, this refers to the calling object in a method. Use this either with the dot or the bracket notation:

this\['propertyName'\]

this.propertyName

### Grouping operator

The grouping operator ( ) controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first

// addition before multiplication

(a + b) \* c // 9

### Left-hand-side expressions

### new

You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. Use new as follows:

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```
### super

The super keyword is used to call functions on an object's parent. It is useful with classes to call the parent constructor, for example.

super(\[arguments\]); // calls the parent constructor.

```js
super.functionOnParent([arguments]);
```
