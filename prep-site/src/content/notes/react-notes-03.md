---
title: "Introducing JSX"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 3
description: "React — Introducing JSX."
---
Consider this variable declaration:

### const element = <h1>Hello, world!</h1>;

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, **class becomes className in JSX, for becomes htmlFor , onclick becomes onClick and tabindex becomes tabIndex.**

### Rendering Elements

Elements are the smallest building blocks of React apps. React elements are immutable. Once you create an element, you can’t change its children or attributes.

An element describes what you want to see on the screen:

```jsx
const element = <h1>Hello, world</h1>;
```
To render a React element into a root DOM node, pass both to ReactDOM.render():

```jsx
const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById('root'));
```
React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
