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

**Q: If `typeof null` is `"object"`, and objects are truthy, why is `Boolean(null)` false?**

Because `null` is **not** an object — it is a primitive. `typeof null === "object"` is a bug from the first version of JavaScript that was never fixed, since changing it would break existing websites.

- In the original engine, values were stored with a type tag; objects had tag `0`. `null` was represented as the NULL pointer (all zeros), so its tag also read as `0` → `typeof` reported `"object"`.
- `Boolean()` does not use `typeof`. It follows the spec's `ToBoolean` rules, which list the falsy values explicitly: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. Everything else (including every real object, `[]`, `{}` and functions) is truthy.

```js
console.log(typeof null);            // "object" — historical bug
console.log(null instanceof Object); // false — not actually an object
console.log(Object.getPrototypeOf({}) === null); // true, null means "no object"
console.log(Boolean(null));          // false — listed as falsy in ToBoolean
console.log(Boolean({}));            // true — real objects are always truthy

// Safe null check (don't rely on typeof)
const value = null;
console.log(value === null);                              // true
console.log(typeof value === "object" && value !== null); // false — correct "is object" check
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

// Same description does NOT mean same symbol
const a = Symbol('id');
const b = Symbol('id');
console.log(a === b);          // false — two separate calls, two unique values
console.log(a.toString());     // "Symbol(id)" — description is only a label
console.log(a === a);          // true — Symbol() ran once; `a` just holds that same value

// Compare with strings: same content = equal
console.log('id' === 'id');    // true

// Practical effect: symbol keys never collide
const user = {};
user[a] = 'from library A';
user[b] = 'from library B';
console.log(user[a]);          // "from library A"
console.log(user[b]);          // "from library B" — both kept, no overwrite

// Need a shared symbol? Use the global registry
console.log(Symbol.for('id') === Symbol.for('id')); // true

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

JavaScript is a dynamically typed language. That means you don't have to specify the data type of a variable when you declare it, and data types are converted automatically as needed during script execution. So, for example, you could define a variable as follows:

```js
var answer = 42;
```
And later, you could assign the same variable a string value, for example:

```js
answer = 'Thanks for all the fish...';
```
Because JavaScript is dynamically typed, this assignment does not cause an error message.

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

```js
x = 'The answer is ' + 42; // "The answer is 42"

y = 42 + ' is the answer'; // "42 is the answer"
```

In statements involving other operators, **JavaScript does not convert numeric values to strings.** For example:

```js
'37' - 7; // 30, "-" converts the string to a number

'37' + 7; // "377", "+" with a string converts the number to a string
```

#### Converting strings to numbers

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
This array has two elements with values and one empty element (fish\[0\] is "Lion", **fish\[1\] is an empty slot (reads as undefined)**, and fish\[2\] is "Angel").

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

#### Tricky array literal questions

**Q1: Is an empty slot the same as `undefined`?**
No. `[ , ]` creates a *hole* (the index does not exist). `[undefined]` creates a real element whose value is `undefined`. Reading either gives `undefined`, but they behave differently.

```js
const holes = [ , ];
const undef = [undefined];

console.log(holes.length, undef.length); // 1 1
console.log(holes[0], undef[0]);         // undefined undefined
console.log(0 in holes);                 // false — index 0 does not exist
console.log(0 in undef);                 // true  — index 0 exists
```

**Q2: What do array methods do with holes?**
`forEach`, `map`, `filter` and `reduce` skip holes. `for...of`, spread and `Array.from` treat them as `undefined`.

```js
const arr = [1, , 3];

arr.forEach(v => console.log(v));  // 1, 3 — hole skipped
console.log(arr.map(v => v * 2));  // [2, empty, 6] — hole kept as a hole
console.log([...arr]);             // [1, undefined, 3] — hole becomes undefined
console.log(arr.filter(() => true)); // [1, 3] — hole removed
console.log(Object.keys(arr));     // ["0", "2"]
```

**Q3: What is the length?**

```js
console.log([,].length);      // 1 — the only comma is a trailing comma
console.log([,,].length);     // 2 — last comma ignored
console.log([1, 2, ,].length); // 3
console.log([].length);       // 0
```

**Q4: `[3]` vs `new Array(3)`?**

```js
console.log([3]);          // [3] — one element, the number 3
console.log(new Array(3)); // [empty × 3] — length 3, no elements
console.log(Array.of(3));  // [3] — use this to avoid the confusion
```

**Q5: Why is `[] == []` false but `[] == ![]` true?**

```js
console.log([] == []);  // false — two different objects (compared by reference)
console.log([] == ![]); // true
// ![] → false (arrays are truthy) → [] == false
// → "" == 0 → 0 == 0 → true
```

**Q6: What happens when you set a far index or change `length`?**

```js
const a = [1, 2];
a[5] = 6;
console.log(a);        // [1, 2, empty × 3, 6]
console.log(a.length); // 6

a.length = 1;
console.log(a);        // [1] — shrinking length deletes elements
```

**Q7: Array to string conversions**

```js
console.log(String([1, [2, [3]]])); // "1,2,3" — nested arrays are flattened by join
console.log([] + []);               // "" — both become empty strings
console.log([] + {});               // "[object Object]"
console.log([1, 2] + [3]);          // "1,23"
console.log([null, undefined] + ''); // "," — null/undefined become empty strings
```

**Q8: Does `indexOf` find `NaN`?**

```js
const nums = [NaN];
console.log(nums.indexOf(NaN));  // -1 — uses ===, and NaN !== NaN
console.log(nums.includes(NaN)); // true — uses SameValueZero
```

**Q9: What does `typeof` say, and how do you check for an array?**

```js
console.log(typeof []);         // "object"
console.log(Array.isArray([])); // true — the reliable check
```

**Q10: Does `const` make an array immutable?**

```js
const list = [1, 2];
list.push(3);        // allowed — contents can change
console.log(list);   // [1, 2, 3]
// list = [];        // TypeError — the variable cannot be reassigned
Object.freeze(list); // makes the contents read-only (shallow)
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
  '!': 'Bang!'
};

console.log(unusualPropertyNames.''); // SyntaxError: Unexpected string

console.log(unusualPropertyNames['']); // An empty string

console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

console.log(unusualPropertyNames['!']); // Bang!
```

#### Tricky object literal questions

**Q1: Is a missing property the same as a property set to `undefined`?**
No. Reading either gives `undefined`, but only one of them exists.

```js
const missing = {};
const undef = { a: undefined };

console.log(missing.a, undef.a);  // undefined undefined
console.log('a' in missing);      // false — property does not exist
console.log('a' in undef);        // true  — property exists
console.log(Object.keys(undef));  // ["a"]
console.log(JSON.stringify(undef)); // "{}" — JSON drops undefined values
```

**Q2: Are object keys really numbers?**
No. Every key (except symbols) is converted to a string.

```js
const obj = { 1: 'one', true: 'yes' };
console.log(obj['1']);          // "one" — 1 was stored as "1"
console.log(obj[1] === obj['1']); // true
console.log(Object.keys(obj));  // ["1", "true"]
```

**Q3: What happens when an object is used as a key?**

```js
const a = { id: 1 };
const b = { id: 2 };
const store = {};

store[a] = 'first';
store[b] = 'second';

console.log(store[a]);         // "second" — both keys became "[object Object]"
console.log(Object.keys(store)); // ["[object Object]"]
// Use a Map when you need objects as keys
```

**How we got that output — step by step:**

1. Object keys can only be strings (or symbols). When you write `store[a]`, JavaScript must first turn `a` into a string.
2. It calls `String(a)`, which uses `a.toString()`. Plain objects inherit `Object.prototype.toString`, which always returns `"[object Object]"` — it ignores the contents (`id: 1`).
3. `store[a] = 'first'` therefore becomes `store["[object Object]"] = 'first'`.
4. `b` is converted the same way, so `store[b] = 'second'` becomes `store["[object Object]"] = 'second'` — the **same key**, so `'first'` is overwritten.
5. `store[a]` is converted again to `store["[object Object]"]`, which now holds `'second'`.
6. Only one key was ever created, so `Object.keys(store)` is `["[object Object]"]`.

```js
console.log(String(a));              // "[object Object]"
console.log(String(b));              // "[object Object]"
console.log(String(a) === String(b)); // true — that's why they collide
console.log(store['[object Object]']); // "second" — same as store[a] and store[b]
```

**Q4: Duplicate keys?**
No error — the last one wins.

```js
const user = { name: 'A', name: 'B' };
console.log(user); // { name: "B" }
```

**Q5: In what order are keys listed?**
Integer-like keys first (ascending), then string keys in insertion order, then symbols.

```js
const o = { b: 1, 2: 'x', a: 2, 1: 'y' };
console.log(Object.keys(o)); // ["1", "2", "b", "a"]
```

**Q6: Why is `{} == {}` false?**

```js
console.log({} == {});   // false — two different objects
const x = {};
const y = x;
console.log(x === y);    // true — same reference
y.value = 10;
console.log(x.value);    // 10 — both variables point to one object
```

**Q7: Why does `{}` at the start of a statement behave strangely?**
`{` at the start is read as a block, not an object.

```js
// {} + []   → 0 in the console: {} is an empty block, then +[] → 0
console.log({} + []);  // "[object Object]" — inside an expression it is an object

// Arrow functions returning an object need parentheses
const bad  = () => { a: 1 };   // returns undefined — { } is a function body, "a:" is a label
const good = () => ({ a: 1 }); // returns { a: 1 }
console.log(bad(), good());    // undefined { a: 1 }
```

**Q8: Computed keys and shorthand**

```js
const field = 'email';
const name = 'Rishabh';

const profile = {
  name,                 // shorthand for name: name
  [field]: 'a@b.com',   // computed key → email
  [`${field}Verified`]: true,
  greet() { return 'hi'; } // method shorthand
};

console.log(profile); // { name: "Rishabh", email: "a@b.com", emailVerified: true, greet: ƒ }
```

More computed key and shorthand examples:

```js
// 1. Expression inside [] is evaluated first
let i = 0;
const seq = { [`item${++i}`]: 'a', [`item${++i}`]: 'b' };
console.log(seq); // { item1: "a", item2: "b" }

// 2. Computed key is still converted to a string
const calc = { [1 + 2]: 'three', [[1, 2]]: 'array', [{}]: 'object' };
console.log(Object.keys(calc)); // ["3", "1,2", "[object Object]"]

// 3. Dynamic update in a form handler (common in React)
const form = { name: '', email: '' };
function onChange(field, value) {
  return { ...form, [field]: value }; // only the changed field is replaced
}
console.log(onChange('email', 'x@y.com')); // { name: "", email: "x@y.com" }

// 4. Building an object from an array
const roles = ['admin', 'editor'];
const flags = roles.reduce((acc, role) => ({ ...acc, [role]: true }), {});
console.log(flags); // { admin: true, editor: true }

// 5. Computed key with a symbol
const secret = Symbol('secret');
const vault = { [secret]: 42 };
console.log(vault[secret]);    // 42
console.log(Object.keys(vault)); // [] — symbol keys are hidden

// 6. Shorthand needs a variable with that name
const age = 30;
const person = { age };        // { age: 30 }
// const bad = { height };     // ReferenceError: height is not defined

// 7. Shorthand captures the value at creation time
let count = 1;
const snapshot = { count };
count = 99;
console.log(snapshot.count);   // 1 — later changes to the variable don't affect it

// 8. Computed method names and getters
const action = 'save';
const api = {
  [action]() { return 'saved'; },         // method named "save"
  [`${action}All`]() { return 'all saved'; },
  get [`${action}Count`]() { return 3; }  // computed getter
};
console.log(api.save(), api.saveAll(), api.saveCount); // "saved" "all saved" 3

// 9. Method shorthand vs arrow — `this` differs
const counter = {
  value: 10,
  short() { return this.value; },  // `this` is counter
  arrow: () => this?.value         // `this` from outer scope
};
console.log(counter.short(), counter.arrow()); // 10 undefined

// 10. Shorthand method cannot be used with `new`
const factory = {
  normal: function () {},
  short() {}
};
new factory.normal();   // works
// new factory.short(); // TypeError: factory.short is not a constructor

// 11. Duplicate computed keys — last one wins
const k = 'x';
const dup = { x: 1, [k]: 2 };
console.log(dup); // { x: 2 }
```

#### Getters and setters — a function that behaves like a property

A **getter** (`get`) is a function that runs automatically when you *read* a property. A **setter** (`set`) runs when you *assign* to it. You use them without `()`.

```js
const user = {
  firstName: 'Rishabh',
  lastName: 'Sisodiya',

  // normal method — must be called
  getFullName() { return `${this.firstName} ${this.lastName}`; },

  // getter — read like a property
  get fullName() { return `${this.firstName} ${this.lastName}`; },

  // setter — runs on assignment
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
};

console.log(user.getFullName()); // "Rishabh Sisodiya" — method needs ()
console.log(user.fullName);      // "Rishabh Sisodiya" — getter, no ()
// user.fullName();              // TypeError: user.fullName is not a function

user.fullName = 'John Doe';      // calls the setter with "John Doe"
console.log(user.firstName);     // "John"
```

**Why use a getter instead of a normal property?**
The value is computed *every time* it is read, so it is always up to date.

```js
const cart = {
  items: [100, 250],
  total: 350,                          // plain property — stored once
  get liveTotal() {                    // getter — recalculated on each read
    return this.items.reduce((sum, p) => sum + p, 0);
  }
};

cart.items.push(50);
console.log(cart.total);     // 350 — stale
console.log(cart.liveTotal); // 400 — always correct
```

**Getter with no setter is read-only**

```js
const circle = {
  radius: 2,
  get area() { return Math.PI * this.radius ** 2; }
};

circle.area = 100;           // ignored (TypeError in strict mode)
console.log(circle.area);    // 12.566... — still computed from radius
circle.radius = 3;
console.log(circle.area);    // 28.274... — updates automatically
```

**Setter for validation**

```js
const account = {
  _balance: 0,                          // "_" = convention for internal value
  get balance() { return this._balance; },
  set balance(amount) {
    if (amount < 0) throw new Error('Balance cannot be negative');
    this._balance = amount;
  }
};

account.balance = 500;
console.log(account.balance); // 500
// account.balance = -10;     // Error: Balance cannot be negative
```

**Common mistake — infinite recursion**
Inside a getter/setter, don't use the same property name, or it calls itself forever.

```js
const bad = {
  get value() { return this.value; }   // reads itself → RangeError: Maximum call stack size exceeded
};
const good = {
  _value: 1,
  get value() { return this._value; }  // reads a different key
};
```

**Now the computed getter from the example above**
`get [expression]()` is the same getter — only the *name* is computed.

```js
const action = 'save';
const api = {
  get [`${action}Count`]() { return 3; }
};
// Step 1: `${action}Count` → "saveCount"
// Step 2: becomes  get saveCount() { return 3; }
console.log(api.saveCount);   // 3 — read like a property, the function runs behind the scenes
// api.saveCount();           // TypeError: api.saveCount is not a function
```

**How to tell a getter from a normal value**

```js
console.log(Object.getOwnPropertyDescriptor(api, 'saveCount'));
// { get: ƒ, set: undefined, enumerable: true, configurable: true }  — no "value", has "get"

console.log(Object.getOwnPropertyDescriptor({ a: 1 }, 'a'));
// { value: 1, writable: true, enumerable: true, configurable: true }
```

**Things to remember**
- A getter takes no parameters; a setter takes exactly one.
- `JSON.stringify` and spread (`{...obj}`) call the getter and copy the *result*, not the getter itself.
- Use getters for derived values (full name, totals, area); avoid heavy work inside them since they run on every read.

**Q9: Does spread copy nested objects?**
No — it is a shallow copy.

```js
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };

copy.a = 100;
copy.nested.b = 200;

console.log(original.a);        // 1   — top level copied
console.log(original.nested.b); // 200 — nested object is shared
// Use structuredClone(original) for a deep copy

console.log({ ...{ a: 1 }, ...{ a: 2 } }); // { a: 2 } — later spread wins
```

**Q10: Does `const` make an object immutable?**

```js
const config = { debug: false };
config.debug = true;        // allowed
// config = {};             // TypeError — cannot reassign

Object.freeze(config);
config.debug = false;       // silently ignored (TypeError in strict mode)
console.log(config.debug); // true
```

**Q11: What does `this` refer to in an object literal?**

```js
const counter = {
  count: 5,
  normal() { return this.count; },
  arrow: () => this.count
};

console.log(counter.normal()); // 5 — `this` is counter
console.log(counter.arrow());  // undefined — arrow functions do not get their own `this`

const fn = counter.normal;
console.log(fn());             // undefined (TypeError in strict mode) — `this` is lost when the method is detached
```

**Q12: What happens when an array is used as a key?**
The array is converted with `join(',')`, so different arrays can land on the same key.

```js
const map = {};
map[[1, 2]] = 'array';
console.log(map['1,2']);    // "array" — key is the string "1,2"
console.log(map[[1, 2]]);   // "array" — a new array, but same string
map[['1,2']] = 'string in array';
console.log(map[[1, 2]]);   // "string in array" — overwritten
map[[]] = 'empty';
console.log(Object.keys(map)); // ["1,2", ""] — [] becomes ""
```

**Q13: What if the object used as a key has its own `toString`?**
JavaScript calls it to build the key.

```js
const userA = { id: 1, toString() { return 'user-1'; } };
const userB = { id: 2, toString() { return 'user-2'; } };
const cache = {};

cache[userA] = 'A';
cache[userB] = 'B';

console.log(cache[userA]);      // "A" — no collision now
console.log(Object.keys(cache)); // ["user-1", "user-2"]
console.log(cache['user-1']);   // "A" — any value turning into "user-1" matches
```

**Q14: What about `null`, `undefined` and booleans as keys?**

```js
const o = {};
o[null] = 'n';
o[undefined] = 'u';
o[true] = 't';

console.log(o.null);      // "n" — key is the string "null"
console.log(o['undefined']); // "u"
console.log(o.true);      // "t"

let key;                  // forgot to assign
o[key] = 'oops';
console.log(o.undefined); // "oops" — silently overwrote the "undefined" key
```

**Q15: Which number keys collide?**
The key is `String(number)`, so values that print the same collide and values that print differently do not.

```js
const n = {};
n[1] = 'a';
n[1.0] = 'b';   // String(1.0) → "1"
n['1.0'] = 'c'; // stays "1.0"
n[-0] = 'd';    // String(-0) → "0"
n[1e3] = 'e';   // String(1e3) → "1000"

console.log(Object.keys(n)); // ["0", "1", "1000", "1.0"]
console.log(n[1]);           // "b" — 1.0 overwrote 1
console.log(n[0]);           // "d"
```

**Q16: Are symbol keys converted to strings too?**
No. Symbols stay symbols, so they never collide — but most key listings skip them.

```js
const id = Symbol('id');
const item = { [id]: 123, name: 'pen' };

console.log(item[id]);                   // 123
console.log(item['id']);                 // undefined — not the string "id"
console.log(Object.keys(item));          // ["name"] — symbol hidden
console.log(JSON.stringify(item));       // '{"name":"pen"}' — symbol dropped
console.log(Object.getOwnPropertySymbols(item)); // [Symbol(id)]
```

**Q17: Why does `obj['a.b']` not read a nested property?**
Brackets take the whole string as one key; dots are not parsed.

```js
const settings = { a: { b: 1 }, 'a.b': 2 };
console.log(settings.a.b);    // 1 — nested access
console.log(settings['a.b']); // 2 — a single key named "a.b"
```

**Q18: Why can't I store a key called `__proto__`?**
In an object literal, `__proto__: value` sets the prototype instead of creating a property.

```js
const safe = { __proto__: { isAdmin: true } };

console.log(Object.keys(safe)); // [] — no own property, prototype was changed
console.log(safe.isAdmin);      // true — inherited from the prototype

const dict = Object.create(null); // object with no prototype
dict['__proto__'] = 'value';
console.log(Object.keys(dict));  // ["__proto__"] — stored as a normal key
// Or simply use a Map for user-supplied keys
```

**Q19: The same idea with `Map` — does it fix all of the above?**
Yes. `Map` keeps keys as they are, using reference/SameValueZero comparison.

```js
const a = { id: 1 };
const b = { id: 1 };
const m = new Map();

m.set(a, 'A');
m.set(b, 'B');
m.set(1, 'number');
m.set('1', 'string');

console.log(m.get(a), m.get(b)); // "A" "B" — different objects, different keys
console.log(m.get({ id: 1 }));   // undefined — new object, new reference
console.log(m.get(1), m.get('1')); // "number" "string" — no string conversion
console.log(m.size);             // 4
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

```js
{
  statement_1;
  statement_2;
  // ...
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
