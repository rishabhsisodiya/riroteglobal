---
title: "Polyfill Reduce"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 11
description: "JavaScript — Polyfill Reduce."
---
```js
const numbers = [1, 2, 3, 4];

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

acc = originalArray[0];
```
startIndex = 1; // Skip the first element

```js
}
```
// Iterate over the array

```js
for (let i = startIndex; i < originalArray.length; i++) {

acc = callback(acc, originalArray[i], i, originalArray);

}

return acc;

};

const sum1 = numbers.myReduce((accumulator, currentValue) => {

return accumulator + currentValue;

}, 0);

console.log(sum1); // Output: 10
```

### Check duplicate using reduce method

```js
const numbers = [2, 5, 3, 5, 6, 3, 2];

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
const numbers = [10, 20, 30, 40];

const sumWithDebug = numbers.reduce((acc, currentValue, currentIndex, array) => {

console.log(`Index: ${currentIndex}, Value: ${currentValue}, Accumulator: ${acc}, Array: ${array}`);

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
