---
title: "React and HTTP"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 20
description: "React — React and HTTP."
---
To fetch some data we can use Fetch API or axios. We are using axios and to install it :

npm i axios

### App.js

### import PostForm from "./components/React_http/PostForm";

### import PostList from "./components/React_http/PostList";

```jsx
function App() {

return (
```
<div className="App">

### <PostForm />

### <PostList />

</div>

```jsx
);

}

export default App;
```

### PostList.js

```jsx
import React, { Component } from "react";

import axios from "axios";

class PostList extends Component {

constructor(props) {

super(props);

this.state = {

posts: \[\],

errorMsg: "",

};

}
```
componentDidMount() {

### axios

### .get("https://jsonplaceholder.typicode.com/posts")

### .then((response) => {

### console.log(response);

### this.setState({ posts: response.data });

**})**

### .catch((error) => {

### console.log(error);

### this.setState({ errorMsg: "Error retrieving data" });

**});**

```jsx
}
```
render() {

```jsx
const { posts, errorMsg } = this.state;

return (
```
<div>

List of posts

{posts.length

```jsx
? posts.map((post) => <div key={post.id}>{post.title}</div>)
```
: null}

{errorMsg ? <div>{errorMsg}</div> : null}

</div>

```jsx
);

}

}

export default PostList;
```

### PostForm.js

```jsx
import React, { Component } from "react";

import axios from "axios";

class PostForm extends Component {

constructor(props) {

super(props);

this.state = {

userId: "",

title: "",

body: "",

};

}

changeHandler = (e) => {

this.setState({ \[e.target.name\]: e.target.value });

};

submitHandler = (e) => {

e.preventDefault();

console.log(this.state);
```
### axios

### .post("https://jsonplaceholder.typicode.com/posts", this.state)

### .then((response) => {

### console.log(response);

**})**

### .catch((error) => {

### console.log(error);

**});**

```jsx
};
```
render() {

const { userId, title, body } = this.state;

```jsx
return (
```
<div>

<form onSubmit={this.submitHandler}>

<div>

<input type="text" name="userId" value={userId}

onChange={this.changeHandler}

/>

</div>

<div>

<input type="text" name="title" value={title}

onChange={this.changeHandler}

/>

</div>

<div>

<input type="text" name="body" value={body}

onChange={this.changeHandler}

/>

</div>

<button type="submit">Submit</button>

</form>

</div>

```jsx
);

}

}

export default PostForm;
```
