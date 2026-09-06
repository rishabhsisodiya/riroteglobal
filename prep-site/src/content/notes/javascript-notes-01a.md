---
title: "Syntax, Variables & Operators"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
order: 1.0
slug: "basics-syntax"
updated: "2026-09-06"
source: "JavaScript Notes.docx"
draft: false
description: "JavaScript basics — Syntax, Variables & Operators."
---
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g. having complex animations, clickable buttons, popup menus, etc.)

JavaScript was created at Netscape in 1995 by Brendan Eich. It borrows some syntax and naming conventions from Java, and was renamed from "LiveScript" to "JavaScript" as a marketing move tied to a Netscape–Sun partnership — not because the two languages are otherwise related. JavaScript is standardized at Ecma International — the European association for standardizing information and communication systems **(ECMA was formerly an acronym for the European Computer Manufacturers Association)** to deliver a standardized, international programming language based on JavaScript.

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

JavaScript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

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

### Declaring variables

You can declare a variable in three ways:

-   With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables.
-   By simply assigning it a value. For example, x = 42. If this form is used outside of a function, it declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.
-   With the keyword let. For example, let y = 13. This syntax can be used to declare a block-scope local variable

### JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

| Operator | Example | Same As |
| --- | --- | --- |
| = | x = y | x = y |
| += | x += y | x = x + y |
| -= | x -= y | x = x - y |
| *= | x *= y | x = x * y |
| /= | x /= y | x = x / y |
| %= | x %= y | x = x % y |
| **= | x **= y | x = x ** y |

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

### Adding Strings and Numbers

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

### JavaScript Comparison Operators

| Operator | Description |
| --- | --- |
| == | equal to |
| === | equal value and equal type |
| != | not equal |
| !== | not equal value or not equal type |
| > | greater than |
| < | less than |
| >= | greater than or equal to |
| <= | less than or equal to |
| ? | ternary operator |

### JavaScript Logical Operators

| Operator | Description |
| --- | --- |
| && | logical and |
| || | logical or |
| ! | logical not |

### JavaScript Type Operators

| Operator | Description |
| --- | --- |
| typeof | Returns the type of a variable |
| instanceof | Returns true if an object is an instance of an object type |

### JavaScript Bitwise Operators

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

| Operator | Description | Example | Same as | Result | Decimal |
| --- | --- | --- | --- | --- | --- |
| & | AND | 5 & 1 | 0101 & 0001 | 0001 | 1 |
| | | OR | 5 | 1 | 0101 | 0001 | 0101 | 5 |
| ~ | NOT | ~ 5 | ~0101 | 1010 | 10 |
| ^ | XOR | 5 ^ 1 | 0101 ^ 0001 | 0100 | 4 |
| << | Zero fill left shift | 5 << 1 | 0101 << 1 | 1010 | 10 |
| >> | Signed right shift | 5 >> 1 | 0101 >> 1 | 0010 | 2 |
| >>> | Zero fill right shift | 5 >>> 1 | 0101 >>> 1 | 0010 | 2 |

The examples above use 4 bits of unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010
