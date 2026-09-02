---
title: "Uncontrolled Components"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 25
description: "React — Uncontrolled Components."
---
In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.

You should use the File API to interact with the files. The following example shows how to create a ref to the DOM node to access file(s) in a submit handler:

```jsx
class FileInput extends React.Component {

constructor(props) {

super(props);

this.handleSubmit = this.handleSubmit.bind(this);

this.fileInput = React.createRef();

}
```
handleSubmit(event) {

```jsx
event.preventDefault();
```
alert(

\`Selected file - ${this.fileInput.current.files\[0\].name}\`

```jsx
);

}
```
render() {

```jsx
return (
```
<form onSubmit={this.handleSubmit}>

<label>

Upload file:

<input type="file" ref={this.fileInput} />

</label>

<br />

<button type="submit">Submit</button>

</form>

```jsx
);

}

}
```
ReactDOM.render(

<FileInput />,

document.getElementById('root')

```jsx
);
```
