---
title: "Portals"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 18
description: "React — Portals."
---
Portals provide a f**irst-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component (root div).**

**ReactDOM.createPortal(child, container)**

The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element. Normally, when you return an element from a component’s render method, it’s mounted into the DOM as a child of the nearest parent node.

### Use cases

**Mess up with parent component CSS.**

**Event bubbling:** An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree. Assuming the following HTML structure:

### index.html

`<html>`

`<body>`

<div id="root"></div>

### <div id="portal-root"></div>

**...**

`</body>`

`</html>`

### App.js

```jsx
import PortalDemo from "./components/Portals/PortalDemo";

function App() {

return (
```
<div className="App">

<PortalDemo />

</div>

```jsx
);

}

export default App;
```

### PortalDemo.js

```jsx
import React from 'react'

import ReactDOM from 'react-dom'

const PortalDemo = () => {

return **ReactDOM.createPortal(**
```
**<h1>Portals Demo</h1>,**

**document.getElementById("portal-root")**

**)**

```jsx
}

export default PortalDemo
```
