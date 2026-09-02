---
title: "Event Loop"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 7
description: "JavaScript — Event Loop."
---
As we are aware about execution context and call stack. We know JavaScript is single-threaded, synchronous . So first global execution context created i.e. GEC which goes to call stack then if any other function exist in global scope then it will create an execution context for that function i.e. EC1 and now EC1 goes to call stack on top of GEC. Now after successful execution of EC1, it will be removed from the call stack. Then GEC will run and it will also be removed from the call stack.

**But what if we need to wait for something?**

We can’t do that in the call stack because the call stack doesn't have a timer. So here browser comes into picture. Browsers have timer, local storage and many more which our code can use. To use this functionality we need Web APIs (like setTimeout, fetch, ) which we can use in our code.

![](/notes-img/javascript-notes/img-017.webp)

We can use these web apis in our code using window global objects. Since window is a global object and our code is also in global scope we can directly use these web APIs.

![](/notes-img/javascript-notes/img-018.webp)

## setTimout()

It will call the web api’s timeout function which gives access to Browser’s timer. It also takes a callback function and some delay. So when you pass a callback function to setTimeout, it will basically register a callback and at the same time it will also start the timer. After all, execution of code. Our global execution context will be gone from the call stack but the timer is still running. As soon as the timer expires the callback function needs to be executed. But we know everything runs inside the call stack only so somehow we need that callback inside the call stack. So when the timer expires, the callback function goes into the callback **queue**. Now **Event loop** comes into picture and its job is to check callback queue and push functions of callback queue into call stack.

**![](/notes-img/javascript-notes/img-019.webp)What will happen when we pass time as 0 in setTimeout. Output will remain the same. Timeout callback will run after our main code will run completely.**

![](/notes-img/javascript-notes/img-020.webp)

## Event Handler

```js
console.log("Start");
```
document.getElementById("btn").addEventListener("click", function cb(){

```js
console.log("Callback");

});

console.log("End");
```

So when the above code executes, A global execution context is created and pushed into the call stack. It will see the console.log() and call the console web api method and print start on console. After that code move to document.getElementById method.( Here comes another web Api that is DOM (Document Object Model) it is like html source code.) So now the document.addEventListener method will use DOM Api and register the callback function on click events in the web api environment. Then it moves on to the next line console.log() and which will log End on console. So after all lines are executed our global execution context will be removed from the call stack.

But that event handle will stay in the web api environment until and unless we will explicitly remove that event listener or we will close the browser. Callback method will sit in the web api environment in the hope that the user clicks on a button with id=btn.

So when the user clicks on the button this callback is then pushed into the callback queue and waits over its turn to execute. Event Loop check callback queue and push callback method into call stack for execution. Now the Callback method executes and code line by line and it will print the callback into the console. Callback vanishes from the callback queue.

**Why do we need a callback queue or task queue?**

Let's say the user clicks on button 4, 5 times then there will be 4, 5 callback functions in the callback queue waiting to be executed. Event loop slowly takes the callback function and pushes it into the call stack. In real life, we often see that there are a lot of event listeners, timers and a lot of other things happening inside the browser. That's why we need a queue so that they can get a chance one after another and JavaScript has only 1 call stack.

## Fetch Api

```js
console.log("Start");
```
setTimeout( function cbT(){

```js
console.log("CB setTimeout");

}, 5000);
```
fetch("https://api.netflix.com").then( function cbF(){

```js
console.log("CB fetch Api");

});

console.log("End");
```

![](/notes-img/javascript-notes/img-021.webp)

As usual Global Execution Context is created then it will go line by line then console Web api will print start on console and setTimeout will register cbT() in web api environment and will start the timer for 5000ms. Now fetch() will register cbF() in the web api environment and wait for data to be returned from netflix server.

Let’s say a Netflix server returns data after 50 ms but **cbF() will not go to the callback queue instead it will go to Microtask Queue (similar to callback queue but has higher priority than callback queue).**

So even if we got a response from the netflix server (fetch api’s response) the cdF() will not go into the call stack. Let's say we have a million lines of code, we got a response from the fetch api and setTimeout (timer also expired). In such a scenario, the fetch api callback method will be waiting in the microtask queue and the setTimeout callback method will be waiting in the callback queue. Meanwhile **event loop ‘s job is to keep checking the status of global execution context ‘s execution completed or not.** If the Global execution context is completed and removed from the call stack then all methods in the microtask queue and then all methods from the callback queue will be pushed into the call stack.

### _What comes under the microtask queue?_

All the callback functions which come from **promises** will go into the microtask queue. The **MutationObserver** interface provides the ability to watch for changes being made to the DOM tree.

### _What is Starvation inside the callback queue?_

Starvation happens when “greedy” threads make shared resources unavailable for long periods. For instance, suppose an object provides a synchronized method that often takes a long time to return. Suppose execution of methods that are inside microtask queue create more methods that goes into microtask queue then in such case methods of callback queue will never get change for execution

### TRUST ISSUES with setTimeout()

We have seen in the fetch api example that if there are millions lines of code then timeout will go into call stack only if our main code completed or Global execution context removed from call stack so timeout will actually not work as per the expectation so to avoid we can date api.

From fetch API example

![](/notes-img/javascript-notes/img-022.webp)
