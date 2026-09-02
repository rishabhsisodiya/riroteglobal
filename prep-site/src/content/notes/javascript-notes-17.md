---
title: "Promise"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 17
description: "JavaScript — Promise."
---
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

Promise object is immutable.

A Promise is in one of these states:

1.  pending: initial state, neither fulfilled nor rejected.
2.  fulfilled: meaning that the operation was completed successfully.
3.  rejected: meaning that the operation failed.

![](/notes-img/JavaScript-notes/img-035.webp)

If you print a promise then initially it will show pending but when you expand chrome update the state. Hence it is showing a fulfilled state.

```js
function myDisplayer(some) {

document.getElementById("demo").innerHTML = some;

}

let myPromise = new Promise(function(myResolve, myReject) {

let x = 0;
```
// some code (try to change x to 5)

if (x == 0) {

```js
myResolve("OK");
```
} else {

```js
myReject("Error");

}

});
```
myPromise.then(

```js
function(value) {myDisplayer(value);},

function(error) {myDisplayer(error);}

);
```
