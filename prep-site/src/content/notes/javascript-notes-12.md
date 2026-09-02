---
title: "Debouncing"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 12
description: "JavaScript — Debouncing."
---
When we use the search bar in any website like flipkart so whenever we search any word then in the backend website will call api to fetch results but it will take a pause then it will search , it will not search on every keystroke. In the below example there was a pause between school and bags so only 2 requests happened.

![](/notes-img/javascript-notes/img-027.webp)

The **debounce**() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.

Let's understand it by doing it. First create below files in same folder

### index.htm

<!DOCTYPE html>

`<html lang="en">`

`<head>`

`<meta charset="UTF-8">`

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

<title>Learn JavaScript</title>

`</head>`

`<body>`

<input type="text" onkeyup="getData()" />

`<script src="./index.js"></script>`

`</body>`

`</html>`

### index.js

// Debouncing in Javascript

```js
let counter=0;

const getData = () =>{
```
// calls an API and gets Data

```js
console.log("Fetching Data....", counter++);

}
```

Enter anything in the text field and open console.

Output:

But we apply the same thing in a search bar or any place where we don’t need to call api on continuous typing . It should call api only when we take a pause. Let’s implement this thing.![](/notes-img/javascript-notes/img-028.webp)

### Index.htm

<!DOCTYPE html>

`<html lang="en">`

`<head>`

`<meta charset="UTF-8">`

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

<title>Learn JavaScript</title>

`</head>`

`<body>`

<input type="text" onkeyup="**betterFunction**()" />

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

const betterFunction = **debounce**(getData,1000);
```

**![](/notes-img/javascript-notes/img-029.webp)I have typed School Bag and took pause after typing school:**

**Output:
**0 Fetching Data.... school bag

1 Fetching Data....

2 Fetching Data.... school

3 Fetching Data.... school bag

4 Fetching Data.... school bag

**Working:** We are keeping calling betterfunction on every keystroke. In return we are calling the debounce function which will keep the timer clear but once we have a pause of 300 ms then only it will return our getData (func,apply(context,args)).

Output: Earlier you saw 7 requests “Fetching Data… ” 0 to 7 but now when you type fast then it comes only. Output may vary as it depends on your speed(>=300 milli sec).

### Fetching Data.... 0

### Using date

### let counter=0;

### const getData = () =>{

### // calls an API and gets Data

### console.log("Fetching Data....", counter++);

**}**

### const debounce = function(func, delay){

**// whenever there is delay of 300ms then func should be executed else no -->**

**//so whenever delay (diff) is greater than 300ms then function should be called else no**

### //previous called time

### let prev= 0;

### return function(){

### let now = new Date().getTime();

### let currentContext=this;

### let args=arguments;

### console.log(now-prev);

### if(now-prev>delay){

### func.apply(currentContext,args);

### prev=now;

**}**

**}**

**}**

### const betterFunction = debounce(getData, 1000);

### // betterFunction()

![](/notes-img/javascript-notes/img-030.webp)**I have typed School Bag and took pause after typing school:**

**Output:**

0 Fetching Data.... s

1 Fetching Data.... school

1 Fetching Data.... school

### You will not get last data after stopping
