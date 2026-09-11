---
title: "Data Types, Literals & Control Flow"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
order: 1.1
slug: "basics-types"
updated: "2026-09-06"
source: "JavaScript Notes.docx"
draft: false
description: "JavaScript basics — Data Types, Literals & Control Flow."
---
### Data structures and types

### Data types

The latest ECMAScript standard defines eight data types: (Undefined BigInt Number null Boolean String Symbol Object)

Seven data types that are primitives, plus `Object`:

1.  [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean). true and false. To convert values of other types into boolean values, you use the Boolean() function.
```js
console.log(Boolean('Hi')); // true

console.log(Boolean('')); // false

console.log(Boolean(20)); // true

console.log(Boolean(Infinity)); // true

console.log(Boolean(0)); // false

console.log(Boolean({foo: 100})); // true on non-empty object

console.log(Boolean([])); // true, even an empty array is an object

console.log(Boolean(NaN)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean('0')); // true, non-empty string

console.log(Boolean(-1)); // true, any non-zero number

console.log(Boolean(function() {})); // true, functions are objects

console.log(Boolean(null));// false
```
2.  [null](https://developer.mozilla.org/en-US/docs/Glossary/null). A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.

```js
let user = null;

console.log(user); // null

console.log(typeof null); // "object" — a long-standing JS quirk

console.log(null === undefined); // false, different types

console.log(null == undefined); // true, loose equality treats them as equal

console.log(Boolean(null)); // false
```
3.  [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined). A top-level property whose value is not defined. The undefined type is a primitive type that has only one value, undefined. By default, when a variable is declared but not initialized, it defaults to undefined.
    JavaScript defines that null is equal to undefined as follows:

```js
console.log(null == undefined); // true

let x;
console.log(x); // undefined, declared but not assigned

function greet(name) {
  console.log(name);
}
greet(); // undefined, missing argument

let obj = { a: 1 };
console.log(obj.b); // undefined, missing property

console.log(typeof undefined); // "undefined"
```
4.  [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number). An integer or floating point number. For example: 42 or 3.14159.

```js
console.log(42); // 42, integer

console.log(3.14159); // 3.14159, floating point

console.log(0.1 + 0.2); // 0.30000000000000004, floating point precision

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(typeof 42); // "number"

console.log(1 / 0); // Infinity

console.log(-1 / 0); // -Infinity
```
        **NaN**
NaN stands for Not a Number. It is a special numeric value that indicates an invalid number. For example, the division of a string by a number returns NaN:.

```js
console.log('a'/2); // NaN;
```
The NaN has two special characteristics:

-   Any operation with NaN returns NaN.
-   The NaN does not equal any value, including itself.

Here are some examples:

```js
console.log(NaN/2); // NaN

console.log(NaN == NaN); // false
```
5.  [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt). An integer with arbitrary precision. For example: 9007199254740992n.

```js
console.log(9007199254740992n); // 9007199254740992n

console.log(typeof 9007199254740992n); // "bigint"

console.log(Number.MAX_SAFE_INTEGER + 1n); // TypeError: can't mix BigInt and other types, need explicit conversion

console.log(BigInt(9007199254740992)); // 9007199254740992n

console.log(10n + 20n); // 30n

console.log(10n === 10); // false, different types
```
6.  [String](https://developer.mozilla.org/en-US/docs/Glossary/String). A sequence of characters that represent a text value. For example: "Howdy"

```js
console.log('Howdy'); // "Howdy"

console.log("Howdy" + " partner"); // "Howdy partner"

console.log(typeof 'Howdy'); // "string"

console.log('Howdy'.length); // 5

console.log(`Total: ${2 + 2}`); // "Total: 4", template literal

console.log(String(42)); // "42"
```
7.  [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) (new in ECMAScript 2015). A data type whose instances are unique and immutable.
    The Symbol function creates a new unique value every time you call it.

```js
console.log(Symbol() == Symbol()); // false

let statuses = {
  OPEN: Symbol('Open'),
  IN_PROGRESS: Symbol('In progress'),
  COMPLETED: Symbol('Completed'),
  HOLD: Symbol('On hold'),
  CANCELED: Symbol('Canceled')
};

// complete a task
task.setStatus(statuses.COMPLETED);
```
8.  [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object). A collection of key/value pairs — the only non-primitive type.

```js
let obj = {
  key: 'value'
};
console.log(obj); // { key: "value" }

console.log(typeof obj); // "object"

console.log(typeof []); // "object", arrays are objects too

console.log(typeof function() {}); // "function", but still an object under the hood

let obj2 = { key: 'value' };
console.log(obj === obj2); // false, objects compare by reference, not value
```
### Data type conversion

### JavaScript is a dynamically typed language.

That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution. So, for example, you could define a variable as follows:

```js
var answer = 42;
```
And later, you could assign the same variable a string value, for example:

```js
answer = 'Thanks for all the fish...';
```
Because JavaScript is dynamically typed, this assignment does not cause an error message.

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

x = 'The answer is' + 42 // "The answer is 42"

y = 42 +' is the answer' // "42 is the answer"

In statements involving other operators, **JavaScript does not convert numeric values to strings.** For example:

**'37' - 7 // 30**

**'37' + 7 // "377"**

### Converting strings to numbers

In the case that a value representing a number is in memory as a string, there are methods for conversion.

[parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

[parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

### Literals

You use literals to represent values in JavaScript. These are fixed values, not variables, that you _literally_ provide in your script. This section describes the following types of literals:

-   Array literals
-   Boolean literals
-   Floating-point literals
-   Integers
-   Object literals
-   RegExp literals
-   String literals

### Array literals

An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets (\[\]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

The following example creates the coffees array with three elements and a length of three:

```js
var coffees = ['French Roast', 'Colombian', 'Kona'];
```
### Extra commas in array literals

You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with undefined for the unspecified elements. The following example creates the fish array:

```js
var fish = ['Lion', , 'Angel'];
```
This array has two elements with values and one empty element (fish\[0\] is "Lion", **fish\[1\] is undefined**, and fish\[2\] is "Angel").

If you include a trailing comma at the end of the list of elements, the comma is ignored. In the following example, the length of the array is three. There is no myList\[3\]. All other commas in the list indicate a new element.

**Note :** Trailing commas can create errors in older browser versions and it is a best practice to remove them.

```js
var myList = ['home', , 'school', ];
```
In the following example, the length of the array is four, and myList\[0\] and myList\[2\] are missing.

```js
var myList = [ ,'home', , 'school'];
```
In the following example, the length of the array is four, and myList\[1\] and myList\[3\] are missing. **Only the last comma is ignored.**

```js
var myList = ['home', , 'school', , ];
```
### Boolean literals

The Boolean type has two literal values: **true and false.**

Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type.

### Numeric literals

Integers can be expressed in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

### Floating-point literals

A floating-point literal can have the following parts:

-   A decimal integer which can be signed (preceded by "+" or "-"),
-   A decimal point ("."),
-   A fraction (another decimal number),
-   An exponent.

The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). A floating-point literal must have at least one digit and either a decimal point or "e" (or "E").

For example:

3.1415926

\-.123456789

\-3.1E+12

.1e-23

### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). Do not use an object literal at the beginning of a statement. This will lead to an error or not behave as you expect, because the { will be interpreted as the beginning of a block.

Example

```js
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep

console.log(car[7]); // Mazda
```
Object property names can be any string, including the empty string. If the property name would not be a valid JavaScript [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier) or number, it must be enclosed in quotes. Property names that are not valid identifiers also cannot be accessed as a dot (.) property, but can be accessed and set with the array-like notation("\[\]").

```js
var unusualPropertyNames = {

'': 'An empty string',
```
'!': 'Bang!'

```js
}

console.log(unusualPropertyNames.''); // SyntaxError: Unexpected string

console.log(unusualPropertyNames['']); // An empty string

console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

console.log(unusualPropertyNames['!']); // Bang!
```

RegExp literals

A regex literal (which is defined in detail [later](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)) is a pattern enclosed between slashes. The following is an example of a regex literal.

```js
var re = /ab+c/;
```
### String literals

A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation marks. The following are examples of string literals:

'foo'

"bar"

'1234'

'one line \\n another line'

"John's cat"

In ES2015, template literals are also available. Template literals are enclosed **by the back-tick (\` \`) (grave accent)** character instead of double or single quotes. Template strings provide syntactic sugar for constructing strings. This is similar to **string interpolation** features in Perl, Python and more. Optionally, a tag can be added to allow the string construction to be customized, avoiding injection attacks or constructing higher level data structures from string contents.

// Basic literal string creation

\`In JavaScript '\\n' is a line-feed.\`

// Multiline strings

\`In JavaScript template strings can run

over multiple lines, but double and single

quoted strings cannot.\`

// String interpolation

```js
var name = 'Bob', time = 'today';
```
\`Hello ${name}, how are you ${time}?\`

// Construct an HTTP request prefix used to interpret the replacements and construction

POST\`http://foo.org/bar?a=${a}&b=${b}

Content-Type: application/json

X-Credentials: ${credentials}

{ "foo": ${foo},

```js
"bar": ${bar}}`(myOnReadyStateChangeHandler);
```

### Escaping characters

For characters not listed in the table, a preceding backslash is ignored, but this usage is deprecated and should be avoided.

You can insert a quotation mark inside a string by preceding it with a backslash. This is known as _escaping_ the quotation mark. For example:

var quote = "He read \\"The Cremation of Sam McGee\\" by R.W. Service.";

```js
console.log(quote);
```
The result of this would be:

He read "The Cremation of Sam McGee" by R.W. Service.

To include a literal backslash inside a string, you must escape the backslash character. For example, to assign the file path c:\\temp to a string, use the following:

```js
var home = 'c:\\\\temp';
```
You can also escape line breaks by preceding them with backslash. The backslash and line break are both removed from the value of the string.

```js
var str = 'this string \\
```
is broken \\

across multiple \\

lines.'

console.log(str); // this string is broken across multiple lines.

Although JavaScript does not have "heredoc" syntax, you can get close by adding a line break escape and an escaped line break at the end of each line:

```js
var poem =
```
'Roses are red,\\n\\

Violets are blue.\\n\\

Sugar is sweet,\\n\\

and so is foo.'

ECMAScript 2015 introduces a new type of literal, namely [**template literals**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings). This allows for many new features including multiline strings

```js
var poem =
```
\`Roses are red,

Violets are blue.

Sugar is sweet,

and so is foo.\`

### Control flow and error handling

### Block statement

The most basic statement is a block statement that is used to group statements. The block is delimited by a pair of curly brackets:

{

```js
statement_1;

statement_2;
```
.

.

.

```js
statement_n;

}
```
### Conditional statements

A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: if...else and switch.

### Falsy values

The following values evaluate to false (also known as Falsy values):

-   false
-   undefined
-   null
-   0
-   NaN
-   the empty string ("")

All other values—including all objects—evaluate to true when passed to a conditional statement.

Caution: Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object!

For example:
```js
var b = new Boolean(false);
```
if (b) // this condition evaluates to true

if (b == true) // this condition evaluates to false

### Exception handling statements

You can throw exceptions using the throw statement and handle them using the try...catch statements.

throw statement

```js
try...catch statement
```
You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

throw 'Error2'; // String type

throw 42; // Number type

throw true; // Boolean type

```js
throw {toString: function() { return "I'm an object!"; } };
```
### Create an object type UserException

```js
function UserException(message) {

this.message = message;

this.name = 'UserException';

}
```
// Make the exception convert to a pretty string when used as a string

// (e.g., by the error console)

**UserException.prototype.toString = function() {**

**return `${this.name}: "${this.message}"`;**

**}**

// Create an instance of the object type and throw it

```js
throw new UserException('Value too high');
```
### try...catch statement

```js
function getMonthName(mo) {

mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',

'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```
if (months\[mo\]) {

```js
return months[mo];
```
} else {

throw 'InvalidMonthNo'; // throw keyword is used here

```js
}

}

try { // statements to try
```
monthName = getMonthName(myMonth); // function could throw exception

```js
}

catch (e) {

monthName = 'unknown';
```
logMyErrors(e); // pass exception object to error handler (i.e. your own function)

```js
}
```
### The Finally Block

The finally block contains statements to be executed after the try and catch blocks execute. Additionally, the finally block executes before the code that follows the try…catch…finally statement.

It is also important to note that the finally block will execute whether or not an exception is thrown. If an exception is thrown, however, the statements in the finally block execute even if no catch block handles the exception that was thrown.

```js
function f() {

try {

throw 'bogus';
```
} catch(e) {

```js
console.log('caught inner "bogus"');
```
throw e; // this throw statement is suspended until

// finally block has completed

} finally {

```js
return false; // overwrites the previous "throw"

}
```
// "return false" is executed now

```js
}

try {

console.log(f());
```
} catch(e) {

// this is never reached!

// while f() executes, the \`finally\` block returns false,

// which overwrites the \`throw\` inside the above \`catch\`

```js
console.log('caught outer "bogus"');

}
```
// OUTPUT

// caught inner "bogus"

// false

### Loops and iteration

### for statement

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
```
statement

### do...while statement

The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

do

statement

```js
while (condition);
```
### while statement

A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

```js
while (condition)
```
statement

### break statement

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

-   When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
-   When you use break with a label, it terminates the specified labeled statement.

    ```js
    let x = 0;

    let z = 0;

    labelCancelLoops: while (true) {

    console.log('Outer loops: ' + x);

    x += 1;

    z = 1;

    while (true) {

    console.log('Inner loops: ' + z);

    z += 1;
    ```
if (z === 10 && x === 10) {

```js
break labelCancelLoops;
```
} else if (z === 10) {

```js
break;

}

}

}
```
### continue statement

The continue statement can be used to restart a while, do-while, for, or label statement.

-   When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
-   When you use continue with a label, it applies to the looping statement identified with that label.

### for...in statement

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

### for...of statement

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property. The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:

```js
const arr = [3, 5, 7];

arr.foo = 'hello';

for (let i in arr) {

console.log(i); // logs "0", "1", "2", "foo"

}

for (let i of arr) {

console.log(i); // logs 3, 5, 7

}
```
Functions

A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function, as shown in the following example:

```js
function myFunc(theObject) {

theObject.make = 'Toyota';

}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};

var x, y;
```
x = mycar.make; // x gets the value "Honda"

```js
myFunc(mycar);
```
y = mycar.make; // y gets the value "Toyota"

// (the make property was changed by the function)
