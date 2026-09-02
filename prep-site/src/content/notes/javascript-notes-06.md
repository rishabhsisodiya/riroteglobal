---
title: "Event Listener"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 6
description: "JavaScript — Event Listener."
---
### Index.html

`<html>`

`<body>`

<h1>Hello JavaScript</h1>

<button id="clickMe">Click Me</button>

`<script src="index.js"></script>`

`</body>`

`</html>`

### Index.js

document.getElementById("clickMe").addEventListener("click", function xyz() {

```js
console.log("Button Clicked");

});
```

Whenever we click the button then it will push xyz() in the call stack.

**How many times did we click the button?**

We can use global Variable count and then store value But for security purposes we can use closure.

```js
function attachEventListeners() {

let count = 0;
```
document.getElementById("clickMe").addEventListener("click", function xyz() {

```js
console.log("Button Clicked", ++count);

});

}

attachEventListeners();
```

Now xyz() forms a closure with attachEventListeners. You can see event listeners attach to Click Me button and also scope chain.(Global and Script)

![](/notes-img/JavaScript-notes/img-016.webp)

## Garbage collection and remove Event Listeners

-   Event Listeners are heavy and it takes memory. Whenever you attach an event listener, it forms closure. Event listeners are not freeing up the extra memory (e.g value of count in previous example). That is why we need to remove event listeners.
-   It can reduce page performance.
