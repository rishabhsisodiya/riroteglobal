---
title: "Built-in Objects, this, Prototypes & Classes"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
order: 1.3
slug: "basics-objects"
updated: "2026-09-06"
source: "JavaScript Notes.docx"
draft: false
description: "JavaScript basics — Built-in Objects, this, Prototypes & Classes."
---
### Date object

```js
var dateObjectName = new Date([parameters]);
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

console.log(foo); // Displays: [String: 'foo']
```
typeof foo; // Returns 'object'

### Methods of String

| Method | Description |
| --- | --- |
| charAt, charCodeAt, codePointAt | Return the character or character code at the specified position in the string. |
| indexOf, lastIndexOf | Return the position of specified substring in the string or last position of specified substring, respectively. |
| startsWith, endsWith, includes | Returns whether or not the string starts, ends or contains a specified string. |
| concat | Combines the text of two strings and returns a new string. |
| fromCharCode, fromCodePoint | Constructs a string from the specified sequence of Unicode values. This is a method of the String class, not a String instance. |
| split | Splits a String object into an array of strings by separating the string into substrings. |
| slice | Extracts a section of a string and returns a new string. |
| substring, substr | Return the specified subset of the string, either by specifying the start and end indexes or the start index and a length. |
| match, matchAll, replace, replaceAll, search | Work with regular expressions. |
| toLowerCase, toUpperCase | Return the string in all lowercase or all uppercase, respectively. |
| normalize | Returns the Unicode Normalization Form of the calling string value. |
| repeat | Returns a string consisting of the elements of the object repeated the given times. |
| trim | Trims whitespace from the beginning and end of the string. |

### Embedded expressions

console.log(\`Fifteen is ${five + ten} and not ${2 \* five + ten}.\`);

### Internationalization

The **Intl** object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for Collator, NumberFormat, and DateTimeFormat objects are properties of the Intl object.

The DateTimeFormat object is useful for formatting date and time. The following formats a date for English as used in the United States. (The result is different in another time zone.)

```js
const msPerDay = 24 * 60 * 60 * 1000;
```
// July 17, 2014 00:00:00 UTC.

```js
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

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

### Creating an array

The following statements create equivalent arrays:

```js
let arr = new Array(element0, element1, ..., elementN)

let arr = Array(element0, element1, ..., elementN)

let arr = [element0, element1, ..., elementN]

let arr = Array(42) // Creates an array with no elements
```
// and arr.length set to 42.

```js
let arr = Array(9.3) // RangeError: Invalid array length

let wisenArray = Array.of(9.3) // wisenArray contains only one element 9.3
```
Note: If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.

```js
let arr = []
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

if (a[a.length - 1] < b[b.length - 1]) return -1;

if (a[a.length - 1] > b[b.length - 1]) return 1;

if (a[a.length - 1] == b[b.length - 1]) return 0;

}
```
myArray.sort(sortFn)

// sorts the array so that myArray = \["Wind","Fire","Rain"\]

-   if a is less than b by the sorting system, return -1 (or any negative number)
-   if a is greater than b by the sorting system, return 1 (or any positive number)
-   if a and b are considered equivalent, return 0.

[indexOf(searchElement\[, fromIndex\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) searches the array for searchElement and returns the index of the first match.

```js
let a = ['a', 'b', 'a', 'b', 'a']

console.log(a.indexOf('b')) // logs 1
```
// Now try again, starting from after the last match

```js
console.log(a.indexOf('b', 2)) // logs 3
```
console.log(a.indexOf('z')) // logs -1, because 'z' was not found

[lastIndexOf(searchElement\[, fromIndex\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) works like indexOf, but starts at the end and searches backwards.

```js
let a = ['a', 'b', 'c', 'd', 'a', 'b']

console.log(a.lastIndexOf('b')) // logs 5
```
// Now try again, starting from before the last match

```js
console.log(a.lastIndexOf('b', 4)) // logs 1

console.log(a.lastIndexOf('z')) // logs -1
```
[forEach(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) executes callback on every array item and returns undefined.

```js
let a = ['a', 'b', 'c']

a.forEach(function(element) { console.log(element) })
```
// logs each item in turn

[map(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) returns a new array of the return value from executing callback on every array item.

```js
let a1 = ['a', 'b', 'c']

let a2 = a1.map(function(item) { return item.toUpperCase() })

console.log(a2) // logs ['A', 'B', 'C']
```
[filter(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) returns a new array containing the items for which callback returned true.

```js
let a1 = ['a', 10, 'b', 20, 'c', 30]

let a2 = a1.filter(function(item) { return typeof item === 'number'; })

console.log(a2) // logs [10, 20, 30]
```
[every(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) returns true if callback returns true for every item in the array.

```js
function isNumber(value) {

return typeof value === 'number'

}

let a1 = [1, 2, 3]

console.log(a1.every(isNumber)) // logs true

let a2 = [1, '2', 3]

console.log(a2.every(isNumber)) // logs false
```
[some(callback\[, thisObject\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) returns true if callback returns true for at least one item in the array.

```js
function isNumber(value) {

return typeof value === 'number'

}

let a1 = [1, 2, 3]

console.log(a1.some(isNumber)) // logs true

let a2 = [1, '2', 3]

console.log(a2.some(isNumber)) // logs true

let a3 = ['1', '2', '3']

console.log(a3.some(isNumber)) // logs false
```
[reduce(callback\[, initialValue\])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) applies _callback_(_accumulator_, _currentValue_\[, _currentIndex_\[, _array_\]\]) for each value in the array for the purpose of reducing the list of items down to a single value.  The reduce function returns the final value returned by _callback_ function.

```js
let a = [10, 20, 30]

let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)

console.log(total) // Prints 60[g arrays to store other properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#using_arrays_to_store_other_properties)
```
**Arrays can also be used like objects, to store related information.**

```js
const arr = [1, 2, 3];

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
for (let [key, value] of sayings) {

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

### Array and Set compared

Create Array from set and vice versa

```js
Array.from(mySet);

[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
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

| --- | --- |

Unassigned properties of an object are undefined (and not null).

myCar.color; // undefined

```js
function showProps(obj, objName) {

var result = ;

for (var i in obj) {
```
**// obj.hasOwnProperty() is used to filter out properties from the object's prototype chain**

**if (obj.hasOwnProperty(i)) {**

```js
result += `${objName}.${i} = ${obj[i]}\\n`;

}

}

return result;

}
```
### Enumerate the properties of an object

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
**Object.defineProperties(o, {**

**'b': { get: function() { return this.a + 1; } },**

**'c': { set: function(x) { this.a = x / 2; } }**

**});**

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.b); // Runs the getter, which yields a + 1 or 6

## this keyword

In JavaScript, this keyword is a fundamental concept used to refer to the execution context or the object that is currently being acted upon. Its value depends on **where and how it is used**, making it both versatile and sometimes tricky to understand. Here's a detailed breakdown:

**1. Default Behavio**r

-   **Global Context (Non-Strict Mode):**
    -   this refers to the global object (window in browsers, global in Node.js).

console.log(this); // In browsers, outputs the Window object

-   **Global Context (Strict Mode):**
    -   this is undefined.

```js
'use strict';

console.log(this); // undefined
```
### 2. Inside Functions

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

### 3. Inside Arrow Functions

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

### 4. Inside Classes

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
console.log(`Hello, my name is ${this.name}`);

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

### 5. In Event Handlers

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
### 6. Explicit Binding

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

### 7. In Constructors

In constructor functions, this refers to the newly created object.
```js
function Person(name) {

this.name = name;

}

const person = new Person('Alice');

console.log(person.name); // Alice
```
### 8. With new Keyword

When a function is invoked with new, this refers to the new object being created.
```js
function Animal(type) {

this.type = type;

}

const cat = new Animal('cat');

console.log(cat.type); // cat
```
### 9. In setTimeout and setInterval

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
### 10. Special Cases

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

There is a saying that “Everything in JavaScript is an object” comes from here where arrays or any method have a prototype of the object.

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
**// Never do this, it would have performance issue**

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

### Class Expression Example: Re-declaring Class

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

### Named Class Expression Example

We can express the class with a particular name. Here, the scope of the class name is up to the class body. The class is retrieved using class.name property.

```js
var emp = class Employee {

constructor(id, name) {

this.id = id;

this.name = name;

}

};

document.writeln(emp.name);

/*document.writeln(Employee.name);
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

| value | The value returned by the iterator (Can be omitted if done is true) |
| --- | --- |
| done | true if the iterator has completed false if the iterator has produced a new value |

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
function* myGenerator() {
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
