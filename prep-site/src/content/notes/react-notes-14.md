---
title: "Fragments"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 14
description: "React — Fragments."
---
A common pattern in React is for a component to return multiple elements. **Fragments let you group a list of children without adding extra nodes to the DOM.**

### Why we use Fragment

A common pattern is for a component to return a list of children. Take this example React snippet:

```jsx
class Table extends React.Component {
```
render() {

```jsx
return (
```
### <table>

<tr>

### <Columns />

</tr>

### </table>

```jsx
);

}

}
```

**<Columns /> would need to return multiple <td> elements** in order for the rendered HTML **to be valid.** **If** a parent **div** was **used** inside the render() of <Columns />, then the resulting HTML will be **invalid**.

```jsx
class **Columns** extends React.Component {
```
render() {

```jsx
return (
```
<**div>**

<td>Hello</td>

<td>World</td>

### </div>

```jsx
);

}

}
```

results in a <Table /> output of:

<table>

<tr>

### <div>

### <td>Hello</td>

### <td>World</td>

### </div>

</tr>

</table>

**Fragments solve this problem.**

```jsx
class **Columns** extends React.Component {
```
render() {

```jsx
return (
```
### <React.Fragment>

<td>Hello</td>

<td>World</td>

### </React.Fragment>

```jsx
);

}

}
```

which results in a correct <Table /> output of:

<table>

<tr>

<td>Hello</td>

<td>World</td>

</tr>

</table>

### Shorter Syntax: <>.. </>

### Keyed Fragments

Fragments declared with the explicit <React.Fragment> syntax may have keys. A use case for this is mapping a collection to an array of fragments

```jsx
function Glossary(props) {

return (
```
<dl>

```jsx
{**props.items.map**(item => (
```
// Without the \`key\`, React will fire a key warning

**<React.Fragment key={item.id}>**

<dt>{item.term}</dt>

<dd>{item.description}</dd>

### </React.Fragment>

))}

</dl>

```jsx
);

}
```
