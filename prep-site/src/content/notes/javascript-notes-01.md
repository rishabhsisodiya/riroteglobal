---
title: "Introduction"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 1
description: "JavaScript — Introduction."
---
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g. having complex animations, clickable buttons, popup menus, etc.)

JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.

JavaScript is standardized at Ecma International — the European association for standardizing information and communication systems **(ECMA was formerly an acronym for the European Computer Manufacturers Association)** to deliver a standardized, international programming language based on JavaScript.

1.  **JavaScript Can Change HTML Content:** This example uses the method to "find" an HTML element (with id="demo") and changes the element content (**innerHTML**) to "Hello JavaScript"

    ```js
    document.getElementById("demo").innerHTML = "Hello JavaScript";
    ```
1.  **JavaScript Can Change HTML Styles (CSS)**

    ```js
    document.getElementById("demo").style.fontSize = "35px";
    ```
1.  **JavaScript Can Hide HTML Elements**

    ```js
    document.getElementById("demo").style.display = "none";
    ```
**Difference between synchronous and asynchronous JavaScript.**

Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

### Declaration of JavaScript tag

### The `<script>` Tag

In HTML, JavaScript code must be inserted between `<script>` and `</script>` tags.

`<script>`
```js
document.getElementById("demo").innerHTML="My First JavaScript";
```
`</script>`

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

### External JavaScript

`<script src="myScript.js"></script>`

### External JavaScript Advantages

Placing scripts in external files has some advantages:

-   It separates HTML and code
-   It makes HTML and JavaScript easier to read and maintain
-   Cached JavaScript files can speed up page loads

### JavaScript Output

JavaScript can display data in different ways:

-   Writing into an HTML element, using **innerHTML**.
-   Writing into the HTML output using **document.write()**.
-   Writing into an alert box, using **window.alert()**.
-   Writing into the browser console, using **console.log()**.

### JavaScript Statements

### Variables

The names of variables, called identifiers, conform to certain rules.

A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).

### Declarations

There are three kinds of declarations in JavaScript.

-   var: Declares a variable, optionally initializing it to a value.
-   let: Declares a block-scoped, local variable, optionally initializing it to a value.
-   const: Declares a block-scoped, read-only named constant.

### _Declaring variables_

You can declare a variable in three ways:

-   With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables.
-   By simply assigning it a value. For example, x = 42. If this form is used outside of a function, it declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.
-   With the keyword let. For example, let y = 13. This syntax can be used to declare a block-scope local variable

### JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

Operator

Example

Same As

| --- | --- | ---
**\=**

```js
x = y
```

```js
x = y
```

| --- | --- | ---
**+=**

x += y

```js
x = x + y
```

| --- | --- | ---
**\-=**

x -= y

```js
x = x - y
```

| --- | --- | ---
**\*=**

x \*= y

```js
x = x \* y
```

| --- | --- | ---
**/=**

x /= y

```js
x = x / y
```

| --- | --- | ---
**%=**

x %= y

```js
x = x % y
```

| --- | --- | ---
**\*\*=**

x \*\*= y

```js
x = x \*\* y
```

| --- | --- | ---
### JavaScript String Operators

The + operator can also be used to add (concatenate) strings.

### Example

```js
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
```
The result of txt3 will be:

John Doe

### _Adding Strings and Numbers_

Adding two numbers will return the sum, but adding a number and a string will return a string:

### Example

```js
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
```
The result of _x_, _y_, and _z_ will be:

10
55
Hello5

### _JavaScript Comparison Operators_

Operator

Description

| --- | ---
**\==**

equal to

| --- | ---
**\===**

equal value and equal type

| --- | ---
**!=**

not equal

| --- | ---
**!==**

not equal value or not equal type

| --- | ---
**\>**

greater than

| --- | ---
**<**

less than

| --- | ---
**\>=**

greater than or equal to

| --- | ---
**<=**

less than or equal to

| --- | ---
**?**

ternary operator

| --- | ---
### _JavaScript Logical Operators_

Operator

Description

| --- | ---
**&&**

logical and

| --- | ---
**||**

logical or

| --- | ---
**!**

logical not

| --- | ---
####

### _JavaScript Type Operators_

Operator

Description

| --- | ---
### typeof

Returns the type of a variable

| --- | ---
### instanceof

Returns true if an object is an instance of an object type

| --- | ---
####

### _JavaScript Bitwise Operators_

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

Operator

Description

Example

Same as

Result

Decimal

| --- | --- | --- | --- | --- | ---
**&**

AND

5 & 1

0101 & 0001

0001

1

| --- | --- | --- | --- | --- | ---
**|**

OR

5 | 1

0101 | 0001

0101

5

| --- | --- | --- | --- | --- | ---
**~**

NOT

~ 5

~0101

1010

10

| --- | --- | --- | --- | --- | ---
**^**

XOR

5 ^ 1

0101 ^ 0001

0100

4

| --- | --- | --- | --- | --- | ---
**<<**

Zero fill left shift

5 << 1

0101 << 1

1010

10

| --- | --- | --- | --- | --- | ---
**\>>**

Signed right shift

5 >> 1

0101 >> 1

0010

2

| --- | --- | --- | --- | --- | ---
**\>>>**

Zero fill right shift

5 >>> 1

0101 >>> 1

0010

2

| --- | --- | --- | --- | --- | ---
The examples above use 4 bits of unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010
### Data structures and types

### Data types

The latest ECMAScript standard defines eight data types: (Undefined BigInt Number null Boolean String Symbol Object)

-   Seven data types that are primitives:
    1.  [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean). true and false. To convert values of other types into boolean values, you use the Boolean() function.
```js
        console.log(Boolean('Hi'));// true

console.log(Boolean('')); // false

console.log(Boolean(20)); // true

console.log(Boolean(Infinity)); // true

console.log(Boolean(0)); // false

console.log(Boolean({foo: 100})); // true on non-empty object

console.log(Boolean(null));// false
```
-   1.  [null](https://developer.mozilla.org/en-US/docs/Glossary/null). A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
    2.  [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined). A top-level property whose value is not defined.The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it defaults to undefined
        JavaScript defines that null is equal to undefined as follows:

### console.log(null == undefined); // true

-   1.  [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number). An integer or floating point number. For example: 42 or 3.14159.
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
-   1.  [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt). An integer with arbitrary precision. For example: 9007199254740992n.
    2.  [String](https://developer.mozilla.org/en-US/docs/Glossary/String). A sequence of characters that represent a text value. For example: "Howdy"
    3.  [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) (new in ECMAScript 2015). A data type whose instances are unique and immutable.
        The Symbol function creates a new unique value every time you call it.

```js
console.log(Symbol() == Symbol()); // false
let statuses = {

OPEN: Symbol('Open'),
```
IN_PROGRESS: Symbol('In progress'),

```js
COMPLETED: Symbol('Completed'),

HOLD: Symbol('On hold'),

CANCELED: Symbol('Canceled')

};
```
// complete a task

```js
task.setStatus(statuses.COMPLETED);
```
-   1.  and Object
    ```js
            let obj = {
            key:value
            }
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

x = 'The answer is ' + 42 // "The answer is 42"

y = 42 + ' is the answer' // "42 is the answer"

In statements involving other operators, **JavaScript does not convert numeric values to strings.** For example:

**'37' - 7 // 30**

**'37' + 7 // "377"**

### _Converting strings to numbers_

In the case that a value representing a number is in memory as a string, there are methods for conversion.

[parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

[parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

### _Literals_

You use literals to represent values in JavaScript. These are fixed values, not variables, that you _literally_ provide in your script. This section describes the following types of literals:

-   Array literals
-   Boolean literals
-   Floating-point literals
-   Integers
-   Object literals
-   RegExp literals
-   String literals

### _Array literals_

An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets (\[\]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

The following example creates the coffees array with three elements and a length of three:

```js
var coffees = \['French Roast', 'Colombian', 'Kona'\];
```
### Extra commas in array literals

You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with undefined for the unspecified elements. The following example creates the fish array:

```js
var fish = \['Lion', , 'Angel'\];
```
This array has two elements with values and one empty element (fish\[0\] is "Lion", **fish\[1\] is undefined**, and fish\[2\] is "Angel").

If you include a trailing comma at the end of the list of elements, the comma is ignored. In the following example, the length of the array is three. There is no myList\[3\]. All other commas in the list indicate a new element.

**Note :** Trailing commas can create errors in older browser versions and it is a best practice to remove them.

```js
var myList = \['home', , 'school', \];
```
In the following example, the length of the array is four, and myList\[0\] and myList\[2\] are missing.

```js
var myList = \[ ,'home', , 'school'\];
```
In the following example, the length of the array is four, and myList\[1\] and myList\[3\] are missing. **Only the last comma is ignored.**

```js
var myList = \['home', , 'school', , \];
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

console.log(car\[7\]); // Mazda
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

console.log(unusualPropertyNames\[''\]); // An empty string

console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

console.log(unusualPropertyNames\['!'\]); // Bang!
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
"bar": ${bar}}\`(myOnReadyStateChangeHandler);
```

### _Escaping characters_

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

### _Falsy values_

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

### UserException.prototype.toString = function() {

### return \`${this.name}: "${this.message}"\`;

**}**

// Create an instance of the object type and throw it

```js
throw new UserException('Value too high');
```
### _try...catch statement_

```js
function getMonthName(mo) {

mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)

let months = \['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',

'Aug', 'Sep', 'Oct', 'Nov', 'Dec'\];
```
if (months\[mo\]) {

```js
return months\[mo\];
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
### _The Finally Block_

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

### _for statement_

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

```js
for (\[initialExpression\]; \[conditionExpression\]; \[incrementExpression\])
```
statement

### _do...while statement_

The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

do

statement

```js
while (condition);
```
### _while statement_

A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

```js
while (condition)
```
statement

### _break statement_

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
### _continue statement_

The continue statement can be used to restart a while, do-while, for, or label statement.

-   When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
-   When you use continue with a label, it applies to the looping statement identified with that label.

### _for...in statement_

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

### _for...of statement_

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property. The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:

```js
const arr = \[3, 5, 7\];

arr.foo = 'hello';

for (let i in arr) {

console.log(i); // logs "0", "1", "2", "foo"

}

for (let i of arr) {

console.log(i); // logs 3, 5, 7

}
```
###
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

### Function expressions

While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

```js
const square = function(number) { return number \* number }
```
var x = square(4) // x gets the value 16

**A method is a function that is a property of an object. function hoisting only works with function declarations—not with function expressions.**

**Difference between Function Statement(or function declaration) & Expression**

```js
a();

b();
```
### // function statement

```js
function a() {

console.log("a called");

}
```
### // Function Expression

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

return x \* x;

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

return x \* 2;

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

var apiCode = '0\]Eal(eh&2'; // A code we do not want outsiders to be able to modify...

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

result += arguments\[i\] + separator;

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

return a \* b;

}
```
multiply(5); // 5

### With default parameters (post-ECMAScript 2015)

```js
function multiply(a, b = 1) {

return a \* b;

}
```
multiply(5); // 5

### Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```js
function multiply(multiplier, ...theArgs) {

return theArgs.map(x => multiplier \* x);

}

var arr = multiply(2, 1, 2, 3);

console.log(arr); // \[2, 4, 6\]
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
### xyz();

**Output**:

xyz called

Uncaught ReferenceError: xyz is not defined

Because here xyz is not created in outer scope (that means it is not declared above var b and below function call as well ) as it is created as a local variable so you can use inside in xyz() but it is undefined in outer scope.

### Difference between parameter and argument

Parameters are used in function definition as local variables inside that function and arguments are passed over function while calling.

### First Class Function (First Class Citizens)

A programming language is said to have **First-class functions** **when functions** in that language **are treated like any other variable**. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

### // Pass function as parameter

```js
var b = function (param1) {

console.log(param1);

};
```

### // Return a function

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
var a = \[
```
'Hydrogen',

'Helium',

'Lithium',

'Beryllium'

```js
\];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs \[8, 6, 7, 9\]

var a3 = a.map(s => s.length);

console.log(a3); // logs \[8, 6, 7, 9\]
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
var foo = \['one', 'two', 'three'\];
```
// without destructuring

```js
var one = foo\[0\];

var two = foo\[1\];

var three = foo\[2\];
```
// with destructuring

```js
var \[one, two, three\] = foo;
```
### Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

Equal (==), Not equal (!=), Strict equal (===), Strict not equal (!==), Greater than (>), Greater than or equal (>=), Less than (<) and Less than or equal (<=).

**
Arithmetic operators**

### Operator

### Description

### Example

| --- | --- | ---
[Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)(%)

Binary operator. Returns the integer remainder of dividing the two operands.

12 % 5 returns 2.

| --- | --- | ---
[Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) (++)

Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.

If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.

| --- | --- | ---
[Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement) (--)

Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.

If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.

| --- | --- | ---
[Unary negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation) (-)

Unary operator. Returns the negation of its operand.

If x is 3, then -x returns -3.

| --- | --- | ---
[Unary plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) (+)

Unary operator. Attempts to convert the operand to a number, if it is not already.

+"3" returns 3.

+true returns 1.

| --- | --- | ---
[Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) (\*\*)

Calculates the base to the exponent power, that is, baseexponent

2 \*\* 3 returns 8.
10 \*\* -1 returns 0.1.

| --- | --- | ---
### Bitwise operators

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.

### Operator

### Usage

### Description

| --- | --- | ---
[Bitwise AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

a & b

Returns a one in each bit position for which the corresponding bits of both operands are ones.

| --- | --- | ---
[Bitwise OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)

a | b

Returns a zero in each bit position for which the corresponding bits of both operands are zeros.

| --- | --- | ---
[Bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)

a ^ b

Returns a zero in each bit position for which the corresponding bits are the same.
\[Returns a one in each bit position for which the corresponding bits are different.\]

| --- | --- | ---
[Bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)

~ a

Inverts the bits of its operand.

| --- | --- | ---
[Left shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)

a << b

Shifts a in binary representation b bits to the left, shifting in zeros from the right.

| --- | --- | ---
[Sign-propagating right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)

a >> b

Shifts a in binary representation b bits to the right, discarding bits shifted off.

| --- | --- | ---
[Zero-fill right shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)

a >>> b

Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.

| --- | --- | ---
### Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.

Logical AND (&&), Logical OR (||) and Logical NOT (!).

### _Short-circuit evaluation_

As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

false && anything is short-circuit evaluated to false.

true || anything is short-circuit evaluated to true.

### String operators (concatenate +)

The concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

console.log('my ' + 'string'); // console logs the string "my string".

### Conditional (ternary) operator

The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

condition ? val1 : val2

For example,

```js
var status = (age >= 18) ? 'adult' : 'minor';
```
### Comma operator

The comma operator (,) evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. It is regarded as bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.

### Unary operators

A unary operation is an operation with only one operand.

### _delete_

The delete operator deletes an object's property. The syntax is:

```js
delete object.property;

delete object\[propertyKey\];

delete objectName\[index\];
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

### _typeof_

The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned.

Suppose you define the following variables:

```js
var myFun = new Function('5 + 2');

var shape = 'round';

var size = 1;

var foo = \['Apple', 'Mango', 'Orange'\];

var today = new Date();
```
The typeof operator returns the following results for these variables:

typeof myFun; // returns "function"

typeof shape; // returns "string"

typeof size; // returns "number"

typeof foo; // returns "object"

typeof today; // returns "object"

typeof doesntExist; // returns "undefined"

### _void_

The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate.

### Relational operators

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

### _in_

The in operator returns true if the specified property is in the specified object. The syntax is:

propNameOrNumber in objectName

// Arrays

```js
var trees = \['redwood', 'bay', 'cedar', 'oak', 'maple'\];
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

### _instanceof_

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

### _Operator precedence_

The following table describes the precedence of operators, from highest to lowest.

### Operator type

### Individual operators

| --- | ---
member

. \[\]

| --- | ---
call / create instance

() new

| --- | ---
negation/increment

! ~ - + ++ -- typeof void delete

| --- | ---
multiply/divide

\* / %

| --- | ---
addition/subtraction

\+ -

| --- | ---
bitwise shift

<< >> >>>

| --- | ---
relational

< <= > >= in instanceof

| --- | ---
equality

\== != === !==

| --- | ---
bitwise-and

&

| --- | ---
bitwise-xor

^

| --- | ---
bitwise-or

| --- | ---
logical-and

&&

| --- | ---
logical-or

||

| --- | ---
conditional

?:

| --- | ---
assignment

\= += -= \*= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??=

| --- | ---
comma

,

| --- | ---
### _Expressions_

An expression is any valid unit of code that resolves to a value.

### Primary Expression

### _this_

Use this keyword to refer to the current object. In general, this refers to the calling object in a method. Use this either with the dot or the bracket notation:

this\['propertyName'\]

this.propertyName

### _Grouping operator_

The grouping operator ( ) controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first

// addition before multiplication

(a + b) \* c // 9

### _Left-hand-side expressions_

### _new_

You can use the new operator to create an instance of a user-defined object type or of one of the built-in object types. Use new as follows:

```js
var objectName = new objectType(\[param1, param2, ..., paramN\]);
```
### _super_

The super keyword is used to call functions on an object's parent. It is useful with classes to call the parent constructor, for example.

super(\[arguments\]); // calls the parent constructor.

```js
super.functionOnParent(\[arguments\]);
```
### Date object

```js
var dateObjectName = new Date(\[parameters\]);
```
The parameters in the preceding syntax can be any of the following:

-   Nothing: creates today's date and time. For example,today = new Date();.
-   A string representing a date in the following form: "Month day, year hours:minutes:seconds." For example, var Xmas95 = new Date("December 25, 1995 13:30:00"). If you omit hours, minutes, or seconds, the value will be set to zero.
-   A set of integer values for year, month, and day. For example, var Xmas95 = new Date(1995, 11, 25).
-   A set of integer values for year, month, day, hour, minute, and seconds. For example, var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);.

In the following example, the function JSClock() returns the time in the format of a digital clock.

```js
function JSClock() {

var time = new Date();

var hour = time.getHours();

var minute = time.getMinutes();

var second = time.getSeconds();

var temp = '' + ((hour > 12) ? hour - 12 : hour);
```
if (hour == 0)

```js
temp = '12';

temp += ((minute < 10) ? ':0' : ':') + minute;

temp += ((second < 10) ? ':0' : ':') + second;

temp += (hour >= 12) ? ' P.M.' : ' A.M.';

return temp;

}
```
### Text Formatting

### String Object

The String Object is a wrapper around the string primitive data type.

```js
const foo = new String('foo'); // Creates a String object

console.log(foo); // Displays: \[String: 'foo'\]
```
typeof foo; // Returns 'object'

### Methods of String

### Method

### Description

| --- | ---
[charAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt), [charCodeAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt), [codePointAt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)

Return the character or character code at the specified position in the string.

| --- | ---
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

Return the position of specified substring in the string or last position of specified substring, respectively.

| --- | ---
[startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

Returns whether or not the string starts, ends or contains a specified string.

| --- | ---
[concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

Combines the text of two strings and returns a new string.

| --- | ---
[fromCharCode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode), [fromCodePoint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)

Constructs a string from the specified sequence of Unicode values. This is a method of the String class, not a String instance.

| --- | ---
[split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

Splits a String object into an array of strings by separating the string into substrings.

| --- | ---
[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

Extracts a section of a string and returns a new string.

| --- | ---
[substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring), [substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length.

| --- | ---
[match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match), [matchAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll), [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), [search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

Work with regular expressions.

| --- | ---
[toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase), [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

Return the string in all lowercase or all uppercase, respectively.

| --- | ---
[normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)

Returns the Unicode Normalization Form of the calling string value.

| --- | ---
[repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

Returns a string consisting of the elements of the object repeated the given times.

| --- | ---
[trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

Trims whitespace from the beginning and end of the string.

| --- | ---
### Embedded expressions

console.log(\`Fifteen is ${five + ten} and not ${2 \* five + ten}.\`);

### Internationalization

The **Intl** object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object.

The DateTimeFormat object is useful for formatting date and time. The following formats a date for English as used in the United States. (The result is different in another time zone.)

```js
const msPerDay = 24 \* 60 \* 60 \* 1000;
```
// July 17, 2014 00:00:00 UTC.

```js
const july172014 = new Date(msPerDay \* (44 \* 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',

hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };

const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```
### Number formatting

The [NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) object is useful for formatting numbers, for example currencies.

```js
const gasPrice = new Intl.NumberFormat('en-US',
```
{ style: 'currency', currency: 'USD',

```js
minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',

{ style: 'currency', currency: 'CNY' });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```
### Array Object

An array is an ordered list of values that you refer to with a name and an index.

### _Creating an array_

The following statements create equivalent arrays:

```js
let arr = new Array(element0, element1, ..., elementN)

let arr = Array(element0, element1, ..., elementN)

let arr = \[element0, element1, ..., elementN\]

let arr = Array(42) // Creates an array with no elements
```
// and arr.length set to 42.

```js
let arr = Array(9.3) // RangeError: Invalid array length

let wisenArray = Array.of(9.3) // wisenArray contains only one element 9.3
```
Note: If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.

```js
let arr = \[\]
```
arr\[3.4\] = 'Oranges'

```js
console.log(arr.length) // 0

console.log(arr.hasOwnProperty(3.4)) // true
```
### Array methods

The Array object has the following methods:

[concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) joins two or more arrays and returns a new array.

```js
let myArray = new Array('1', '2', '3')

myArray = myArray.concat('a', 'b', 'c')
```
// myArray is now \["1", "2", "3", "a", "b", "c"\]

[join(delimiter = ',')](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) joins all elements of an array into a string.

```js
let myArray = new Array('Wind', 'Rain', 'Fire')
```
let list = myArray.join(' - ') // list is "Wind - Rain - Fire"

[push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) adds one or more elements to the end of an array and returns the resulting length of the array.

```js
let myArray = new Array('1', '2')
```
myArray.push('3') // myArray is now \["1", "2", "3"\]

[pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) removes the last element from an array and returns that element.

```js
let myArray = new Array('1', '2', '3')

let last = myArray.pop()
```
// myArray is now \["1", "2"\], last = "3"

[shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) removes the first element from an array and returns that element.

```js
let myArray = new Array('1', '2', '3')

let first = myArray.shift()
```
// myArray is now \["2", "3"\], first is "1"

[unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) adds one or more elements to the front of an array and returns the new length of the array.

```js
let myArray = new Array('1', '2', '3')
```
myArray.unshift('4', '5')

// myArray becomes \["4", "5", "1", "2", "3"\]

[slice(start_index, upto_index)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) extracts a section of an array and returns a new array.

```js
let myArray = new Array('a', 'b', 'c', 'd', 'e')

myArray = myArray.slice(1, 4) // starts at index 1 and extracts all elements
```
// until index 3, returning \[ "b", "c", "d"\]

[splice(index, count_to_remove, addElement1, addElement2, ...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

```js
let myArray = new Array('1', '2', '3', '4', '5')
```
myArray.splice(1, 3, 'a', 'b', 'c', 'd')

// myArray is now \["1", "a", "b", "c", "d", "5"\]

// This code started at index one (or where the "2" was),

// removed 3 elements there, and then inserted all consecutive

// elements in its place.

[reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

```js
let myArray = new Array('1', '2', '3')
```
myArray.reverse()

// transposes the array so that myArray = \["3", "2", "1"\]

[sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorts the elements of an array in place, and returns a reference to the array.

```js
let myArray = new Array('Wind', 'Rain', 'Fire')
```
myArray.sort()

// sorts the array so that myArray = \["Fire", "Rain", "Wind"\]

sort() can also take a callback function to determine how array elements are compared.For instance, the following will sort by the last letter of a string:

```js
let sortFn = function(a, b) {

if (a\[a.length - 1\] < b\[b.length - 1\]) return -1;

if (a\[a.length - 1\] > b\[b.length - 1\]) return 1;

if (a\[a.length - 1\] == b\[b.length - 1\]) return 0;

}
```
myArray.sort(sortFn)

// sorts the array so that myArray = \["Wind","Fire","Rain"\]

-   if a is less than b by the sorting system, return -1 (or any negative number)
-   if a is greater than b by the sorting system, return 1 (or any positive number)
-   if a and b are considered equivalent, return 0.

[indexOf(searchElement\[, fromIndex\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) searches the array for searchElement and returns the index of the first match.

```js
let a = \['a', 'b', 'a', 'b', 'a'\]

console.log(a.indexOf('b')) // logs 1
```
// Now try again, starting from after the last match

```js
console.log(a.indexOf('b', 2)) // logs 3
```
console.log(a.indexOf('z')) // logs -1, because 'z' was not found

[lastIndexOf(searchElement\[, fromIndex\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) works like indexOf, but starts at the end and searches backwards.

```js
let a = \['a', 'b', 'c', 'd', 'a', 'b'\]

console.log(a.lastIndexOf('b')) // logs 5
```
// Now try again, starting from before the last match

```js
console.log(a.lastIndexOf('b', 4)) // logs 1

console.log(a.lastIndexOf('z')) // logs -1
```
[forEach(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) executes callback on every array item and returns undefined.

```js
let a = \['a', 'b', 'c'\]

a.forEach(function(element) { console.log(element) })
```
// logs each item in turn

[map(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) returns a new array of the return value from executing callback on every array item.

```js
let a1 = \['a', 'b', 'c'\]

let a2 = a1.map(function(item) { return item.toUpperCase() })

console.log(a2) // logs \['A', 'B', 'C'\]
```
[filter(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) returns a new array containing the items for which callback returned true.

```js
let a1 = \['a', 10, 'b', 20, 'c', 30\]

let a2 = a1.filter(function(item) { return typeof item === 'number'; })

console.log(a2) // logs \[10, 20, 30\]
```
[every(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) returns true if callback returns true for every item in the array.

```js
function isNumber(value) {

return typeof value === 'number'

}

let a1 = \[1, 2, 3\]

console.log(a1.every(isNumber)) // logs true

let a2 = \[1, '2', 3\]

console.log(a2.every(isNumber)) // logs false
```
[some(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) returns true if callback returns true for at least one item in the array.

```js
function isNumber(value) {

return typeof value === 'number'

}

let a1 = \[1, 2, 3\]

console.log(a1.some(isNumber)) // logs true

let a2 = \[1, '2', 3\]

console.log(a2.some(isNumber)) // logs true

let a3 = \['1', '2', '3'\]

console.log(a3.some(isNumber)) // logs false
```
[reduce(callback\[, initialValue\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) applies _callback_(_accumulator_, _currentValue_\[, _currentIndex_\[, _array_\]\]) for each value in the array for the purpose of reducing the list of items down to a single value.  The reduce function returns the final value returned by _callback_ function.

```js
let a = \[10, 20, 30\]

let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)

console.log(total) // Prints 60[g arrays to store other properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#using_arrays_to_store_other_properties)
```
**Arrays can also be used like objects, to store related information.**

```js
const arr = \[1, 2, 3\];

arr.property = "value";

console.log(arr.property); // Logs "value"
```
**
Map object**

A Map object is a simple key/value map and can iterate its elements in insertion order.

```js
let sayings = new Map();

sayings.set('dog', 'woof');

sayings.set('cat', 'meow');

sayings.set('elephant', 'toot');
```
sayings.size; // 3

sayings.get('dog'); // woof

sayings.get('fox'); // undefined

sayings.has('bird'); // false

```js
sayings.delete('dog');
```
sayings.has('dog'); // false

```js
for (let \[key, value\] of sayings) {

console.log(key + ' goes ' + value);

}
```
// "cat goes meow"

// "elephant goes toot"

```js
sayings.clear();
```
sayings.size; // 0

### Object and Map Compared

Traditionally, objects have been used to map strings to values. Objects allow you to set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Map objects, however, have a few more advantages that make them better maps.

1.  The keys of an Object are Strings or Symbols, where they can be of any value for a Map.
2.  You can get the size of a Map easily, while you have to manually keep track of size for an Object.
3.  The iteration of maps is in insertion order of the elements.
4.  An Object has a prototype, so there are default keys in the map. (This can be bypassed using map = Object.create(null).)

These three tips can help you to decide whether to use a Map or an Object:

1.  Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
2.  Use maps if there is a need to store primitive values as keys because the object treats each key as a string whether it's a number value, boolean value or any other primitive value.
3.  Use objects when there is logic that operates on individual elements.

### WeakMap object

The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values. **The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore.** The WeakMap API is the same as the Map API.

One difference to Map objects is that WeakMap keys are not enumerable (i.e., there is no method giving you a list of the keys).

One use case of WeakMap objects is to store private data for an object, or to hide implementation details. The private data and methods belong inside the object and are stored in the privates WeakMap object. Everything exposed on the instance and prototype is public; everything else is inaccessible from the outside world because privates is not exported from the module.

```js
const privates = new WeakMap();

function Public() {

const me = {
```
// Private data goes here

```js
};

privates.set(this, me);

}

Public.prototype.method = function () {

const me = privates.get(this);
```
// Do stuff with private data in \`me\`...

```js
};

module.exports = Public;
```

### Set Object

Set objects are collections of values. You can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection.

```js
let mySet = new Set();

mySet.add(1);

mySet.add('some text');

mySet.add('foo');
```
mySet.has(1); // true

```js
mySet.delete('foo');
```
mySet.size; // 2

```js
for (let item of mySet) console.log(item);
```
// 1

// "some text"

### _Array and Set compared_

Create Array from set and vice versa

```js
Array.from(mySet);

\[...mySet2\];

mySet2 = new Set(\[1, 2, 3, 4\]);
```

Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The new Set object, however, has some advantages:

1.  Deleting Array elements by value (arr.splice(arr.indexOf(val), 1)) is very slow.
2.  Set objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
3.  The value NaN cannot be found with indexOf in an array.
4.  Set objects store unique values. You don't have to manually keep track of duplicates.

### Set objects let you delete elements by their value

// Create a new set using Set() constructor

```js
let myset = new Set();
```
// Append new elements to the set

// using add() method

```js
myset.add(75);

myset.add(12);
```
// As 75 exists, it will be removed

// and it will return true

```js
console.log(myset.delete(75));

console.log(myset)
```
### WeakSet object

WeakSet objects are collections of objects. An object in the WeakSet may only occur once. It is unique in the WeakSet's collection, and objects are not enumerable.

The main differences to the Set object are:

1.  In contrast to Sets, WeakSets are collections of objects only, and not of arbitrary values of any type.
2.  The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet, they can be garbage collected. That also means that there is no list of current objects stored in the collection.
3.  WeakSets are not enumerable.

The use cases of WeakSet objects are limited. They will not leak memory, so it can be safe to use DOM elements as a key and mark them for tracking purposes

### Working with object

An object is a collection of properties, and a property is an association between a name (or key) and a value.

### Object Initialization

```js
var myCar = new Object();

myCar.make = 'Ford';

myCar.model = 'Mustang';

myCar.year = 1969;
```

```js
var myCar = {

make: 'Ford',

model: 'Mustang',

year: 1969

};
```

| --- | ---
Unassigned properties of an object are undefined (and not null).

myCar.color; // undefined

```js
function showProps(obj, objName) {

var result = \`\`;

for (var i in obj) {
```
**// obj.hasOwnProperty() is used to filter out properties from the object's prototype chain**

### if (obj.hasOwnProperty(i)) {

```js
result += \`${objName}.${i} = ${obj\[i\]}\\n\`;

}

}

return result;

}
```
### _Enumerate the properties of an object_

Starting with ECMAScript 5, there are three native ways to list/traverse object properties:

1.  **for...in loops:** This method traverses all enumerable properties of an object and its prototype chain.
2.  **Object.keys(o):** This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
3.  **Object.getOwnPropertyNames(o):** This method returns an array containing all properties' names (enumerable or not) of an object o.

### Creating new objects

1.  **_Object initializer_**

```js
var obj = { property_1: value_1, // property_# may be an identifier...

2: value_2, // or a number...
```
// ...,

'property n': value_n }; // or a string

1.  **_Using a constructor function
    _**Alternatively, you can create an object with these two steps:
2.  Define the object type by writing a constructor function.
3.  Create an instance of the object with new.

To do this, you would write the following function:

```js
function Car(make, model, year) {

this.make = make;

this.mod.el = model;

this.year = year;

}
```
Notice the use of this to assign values to the object's properties based on the values passed to the function.

Now you can create an object called mycar as follows:

```js
var mycar = new Car('Eagle', 'Talon TSi', 1993);
```
1.  **_Using the object.create method_**

This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

// Animal properties and method encapsulation

```js
var Animal = {

type: 'Invertebrates', // Default value of properties
```
displayType: function() { // Method which will display type of Animal

```js
console.log(this.type);

}

};
```
// Create new animal type called animal1

```js
var animal1 = Object.create(Animal);
```
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes

```js
var fish = Object.create(Animal);

fish.type = 'Fishes';
```
fish.displayType(); // Output:Fishes

### JavaScript static Method

### Points to remember

1.  The static keyword is used to declare a static method.
2.  The static method can be of any name.
3.  A class can contain more than one static method.
4.  If we declare more than one static method with a similar name, JavaScript always invokes the last one.
5.  The static method can be used to create utility functions.
6.  We can use this keyword to call a static method within another static method.
7.  We cannot use this keyword directly to call a static method within the non-static method. In such cases, we can call the static method either using the class name or as the property of the constructor.

### Inheritance

All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the prototype object of the constructor

You can add a property to a previously defined object type by using the prototype property. This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object. The following code adds a color property to all objects of type Car, and then assigns a value to the color property of the object car1.

```js
Car.prototype.color = null;

car1.color = 'black';
```
A **method** is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.

An example is:

```js
objectName.methodname = functionName;

var myObj = {

myMethod: function(params) {
```
// ...do something

```js
}
```
// OR THIS WORKS TOO

myOtherMethod(params) {

// ...do something else

```js
}

};
```
Getters and setters can also be added to an object at any time after creation using the **Object.defineProperties method.**

**example:**

```js
var o = { a: 0 };
```
### Object.defineProperties(o, {

**'b': { get: function() { return this.a + 1; } },**

**'c': { set: function(x) { this.a = x / 2; } }**

**});**

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.b); // Runs the getter, which yields a + 1 or 6

## this keyword

In JavaScript, this keyword is a fundamental concept used to refer to the execution context or the object that is currently being acted upon. Its value depends on **where and how it is used**, making it both versatile and sometimes tricky to understand. Here's a detailed breakdown:

**1\. Default Behavio**r

-   **Global Context (Non-Strict Mode):**
    -   this refers to the global object (window in browsers, global in Node.js).

console.log(this); // In browsers, outputs the Window object

-   **Global Context (Strict Mode):**
    -   this is undefined.

```js
'use strict';

console.log(this); // undefined
```
### 2\. Inside Functions

-   **Non-Strict Mode:**
    -   this refers to the global object.

```js
function showThis() {

console.log(this);

}
```
showThis(); // Window (or global in Node.js)

-   **Strict Mode:**
    -   this is undefined.

```js
'use strict';

function showThis() {

console.log(this);

}
```
showThis(); // undefined

-   **As a Method of an Object:**
    -   this refers to the object that owns the method.

```js
const obj = {

name: 'Alice',

greet: function() {

console.log(this.name);
```
},

```js
};
```
obj.greet(); // Alice

### 3\. Inside Arrow Functions

-   Arrow functions do not bind their own this. Instead, this is inherited from the enclosing execution context.

    ```js
    const obj = {

    name: 'Alice',

    greet: () => {

    console.log(this.name);
    ```
},

```js
};
```
obj.greet(); // undefined (or Window.name in browsers)

In this case, this is inherited from the surrounding scope (e.g., global or parent function).

### 4\. Inside Classes

-   **Methods in Classes:**
    -   this refers to the instance of the class.

```js
class Person {

constructor(name) {

this.name = name;

}
```
greet() {

```js
console.log(\`Hello, my name is ${this.name}\`);

}

}

const person = new Person('Alice');
```
person.greet(); // Hello, my name is Alice

-   **Static Methods:**
    -   this refers to the class itself, not an instance.

```js
class Person {
```
static info() {

```js
console.log(this);

}

}
```
Person.info(); // Person

### 5\. In Event Handlers

In regular functions, this refers to the element that received the event.
```js
const button = document.querySelector('button');
```
button.addEventListener('click', function() {

```js
console.log(this); // <button> element

});
```
-   Using arrow functions, this is inherited from the enclosing scope.
    ```js
        button.addEventListener('click', () => {

    console.log(this); // Window (or enclosing context)

    });
    ```
### 6\. Explicit Binding

-   **call and apply:**
    -   You can explicitly set the value of this.

```js
function greet() {

console.log(this.name);

}

const person = { name: 'Alice' };
```
greet.call(person); // Alice

greet.apply(person); // Alice

-   **bind:**
    -   Returns a new function with this bound to the specified object.

```js
const boundGreet = greet.bind(person);
```
boundGreet(); // Alice

### 7\. In Constructors

In constructor functions, this refers to the newly created object.
```js
function Person(name) {

this.name = name;

}

const person = new Person('Alice');

console.log(person.name); // Alice
```
### 8\. With new Keyword

When a function is invoked with new, this refers to the new object being created.
```js
function Animal(type) {

this.type = type;

}

const cat = new Animal('cat');

console.log(cat.type); // cat
```
### 9\. In setTimeout and setInterval

Inside regular functions passed to setTimeout, this refers to the global object (window or global).

setTimeout(function() {

```js
console.log(this); // Window

}, 1000);
```
-   Using arrow functions, this retains its value from the enclosing scope.

    ```js
        setTimeout(() => {

    console.log(this); // Inherits from surrounding context

    }, 1000);
    ```
### 10\. Special Cases

**Object Property Assignment:
```js
**const obj = { name: 'Alice' };

const greet = function() {

console.log(this.name);

};

obj.greet = greet;
```
obj.greet(); // Alice

**Losing this Context:
**const obj = {

```js
name: 'Alice',

greet: function() {

console.log(this.name);
```
},

```js
};

const greet = obj.greet;
```
greet(); // undefined (loses context)

## Prototype and prototypal inheritance

JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, **Prototype property** is basically an object (also known as **Prototype** object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

**Prototypes** are the mechanism by which JavaScript objects inherit features from one another. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them.

There is a saying that “Everything in javascript is an object” comes from here where arrays or any method have a prototype of the object.

![](/notes-img/javascript-notes/img-001.webp)

```js
let object ={
```
name:"Akshay",

city:"Dehradun",

getIntro:function(){

```js
console.log(this.name+"from "+this.city);

}

}

let object2={
```
name:"Aditya"

```js
}
```
### // Never do this, it would have performance issue

```js
object2.__proto__=object;
```

object2 will have access to object properties. If suppose city is not defined in object2 then it will use object property and the same with methods also. ![](/notes-img/javascript-notes/img-002.webp)

### Add properties to inbuilt function and object

```js
Function.prototype.mybind = function(){

console.log("User defined bind method");

}

function fun() {
```
// any function

```js
}
```

Now it will give access of mybind method to all function.

![](/notes-img/javascript-notes/img-003.webp)

They use __proto__ so people don’t end up messing with the prototype and nobody will use __proto__ by mistake.

## JavaScript Classes

```js
class Employee
```
{

//Initializing an object

```js
constructor(id,name)
```
{

```js
this.id=id;

this.name=name;

}
```
//Declaring method

detail()

{

document.writeln(this.id+" "+this.name+"<br>")

```js
}

}
```
//passing object to a variable

```js
var e1=new Employee(101,"Martin Roy");

var e2=new Employee(102,"Duke William");
```
e1.detail(); //calling method

```js
e2.detail();
```

1.  Unlike function declaration, t**he class declaration is not a part of JavaScript hoisting.** So, it is required to declare the class before invoking it. It will throw a ReferenceError: Employee is not defined if we use class before declaring it.
2.  A class **can be declared once only**. If we try to declare class more than one time, it throws an error. SyntaxError: identifier ‘Employee’ has already declared

### Class expressions

Another way to define a class is by using a class expression. Here, it is not mandatory to assign the name of the class. So, the class expression can be named or unnamed. The class expression allows us to fetch the class name. However, this will not be possible with class declaration.

### Unnamed Class Expression

The class can be expressed without assigning any name to it.

Let's see an example.

```js
var emp = class {

constructor(id, name) {

this.id = id;

this.name = name;

}

};
```
document.writeln(emp.name); // will print emp

```js
var emp = class stud{

constructor(id, name) {

this.id = id;

this.name = name;

}

};

var emp1 = new emp("1","employee");

var emp2 = new stud("1","employee");

console.log(emp1.name); // ReferenceError: stud is not defined

console.log(emp2.name); // employee
```

### _Class Expression Example: Re-declaring Class_

Unlike class declaration, **the class expression allows us to re-declare the same class.**

//Declaring class

```js
var emp=class
```
{

//Initializing an object

```js
constructor(id,name)
```
{

```js
this.id=id;

this.name=name;

}
```
//Declaring method

detail()

{

document.writeln(this.id+" "+this.name+"<br>")

```js
}

}
```
//passing object to a variable

```js
var e1=new emp(101,"Martin Roy");

var e2=new emp(102,"Duke William");
```
e1.detail(); //calling method

```js
e2.detail();
```
//Re-declaring class

```js
var emp=class
```
{

//Initializing an object

```js
constructor(id,name)
```
{

```js
this.id=id;

this.name=name;

}
```
detail()

{

document.writeln(this.id+" "+this.name+"<br>")

```js
}

}
```
//passing object to a variable

```js
var e1=new emp(103,"James Bella");

var e2=new emp(104,"Nick Johnson");
```
e1.detail(); //calling method

```js
e2.detail();
```

### _Named Class Expression Example_

We can express the class with a particular name. Here, the scope of the class name is up to the class body. The class is retrieved using class.name property.

```js
var emp = class Employee {

constructor(id, name) {

this.id = id;

this.name = name;

}

};

document.writeln(emp.name);

/\*document.writeln(Employee.name);
```
Error occurs on console:

```js
"ReferenceError: Employee is not defined
```
\*/

## JavaScript Iterables

-   Iterables are iterable objects (like Arrays).
-   Iterables can be accessed with simple and efficient code.
-   Iterables can be iterated over with for..of loops

    ```js
    for (variable of iterable) {
    ```
// code block to be executed

```js
}
```
### JavaScript Iterators

The iterator protocol defines how to produce a sequence of values from an object.

An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties:

-   value (the next value)
-   done (true or false)

### value

The value returned by the iterator

(Can be omitted if done is true)

| --- | ---
### done

true if the iterator has completed

false if the iterator has produced a new value

| --- | ---
### Custom Iterable

// Home Made Iterable

```js
function myNumbers() {

let n = 0;

return {

next: function() {

n += 10;

return {value:n, done:false};

}

};

}
```
// Create Iterable

```js
const n = myNumbers();
```
n.next(); // Returns 10

n.next(); // Returns 20

n.next(); // Returns 30

A JavaScript iterable is an object that has a Symbol.iterator.

The Symbol.iterator is a function that returns a next() function.

An iterable can be iterated over with the code: for (const x of iterable) { }

// Create an Object

```js
myNumbers = {};
```
// Make it Iterable

myNumbers\[Symbol.iterator\] = function() {

```js
let n = 0;

done = false;

return {
```
next() {

```js
n += 10;
```
if (n == 100) {done = true}

```js
return {value:n, done:done};

}

};

}
```

### Generator

A **generator function** in JavaScript is a special type of function that can pause and resume its execution, allowing you to produce (or "generate") values on demand. It is defined using the function\* syntax, and its execution is controlled using an **iterator** returned by calling the function.

```js
function\* myGenerator() {
```
yield 1; // Pause and return 1

yield 2; // Pause and return 2

yield 3; // Pause and return 3

```js
}

const gen = myGenerator(); // Returns an iterator

console.log(gen.next()); // { value: 1, done: false }

console.log(gen.next()); // { value: 2, done: false }

console.log(gen.next()); // { value: 3, done: false }

console.log(gen.next()); // { value: undefined, done: true }
```

![](/notes-img/javascript-notes/img-004.webp)
