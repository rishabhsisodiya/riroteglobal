---
title: "Styling React Component"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 9
description: "React — Styling React Component."
---
1.  CSS Stylesheet
2.  inline styling
3.  CSS modules
4.  CSS in JS libraries (Styled component)

### CSS Stylesheet

App.css

body {

```jsx
background-color: #282c34;

color: white;

padding: 40px;

font-family: Arial;

text-align: center;

}
```
**.App{**

**color:black;**

**}**

App,js

```jsx
import React from 'react';

import ReactDOM from 'react-dom';
```
**import './App.css';**

```jsx
class MyHeader extends React.Component {
```
render() {

```jsx
return (
```
<div **className=”App”**\>

<h1>Hello Style!</h1>

<p>Add a little style!.</p>

</div>

```jsx
);

}

}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
```

### Inline Styling

```jsx
class MyHeader extends React.Component {
```
render() {

```jsx
return (
```
<div>

<h1 **style={{color: "red"}}**\>Hello Style!</h1>

<p>Add a little style!</p>

</div>

```jsx
);

}

}
```

Inline CSS must be written with camel case syntax. Use backgroundColor instead of background-color:

We can also **use JavaScript Object**

```jsx
class MyHeader extends React.Component {
```
render() {

**const mystyle = {**

**color: "white",**

**backgroundColor: "DodgerBlue",**

**padding: "10px",**

### fontFamily: "Arial"

**};**

```jsx
return (
```
<div>

<h1 style={**mystyle**}>Hello Style!</h1>

<p>Add a little style!</p>

</div>

```jsx
);

}

}
```

### CSS Modules

Another way of adding styles to your application is to use CSS Modules. CSS Modules are convenient for components that are placed in separate files.

Create the CSS **module with the .module.css extension,** example: mystyle.module.css.

### mystyle.module.css

.bigblue {

```jsx
color: DodgerBlue;

padding: 40px;

font-family: Arial;

text-align: center;

}
```

### Car.js

```jsx
import React from 'react';

import ReactDOM from 'react-dom';
```
**import styles from './mystyle.module.css';**

```jsx
class Car extends React.Component {
```
render() {

```jsx
return <h1 className={**styles.bigblue**}>Hello Car!</h1>;

}

}

export default Car;
```

**CSS modules are better** in some scenarios. Let’s say we have class error

.error{

```jsx
color:red;

}
```
If you import this file in parent class then by default it will be used in child class also. So if we have a child component with className=”error” then it will use parent class css. So there are name conflicts and now if we have to use different CSS for parent and child then we can use CSS modules. It will take care of name conflicts.
