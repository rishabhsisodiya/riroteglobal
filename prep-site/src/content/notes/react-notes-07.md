---
title: "Conditional Rendering"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 7
description: "React — Conditional Rendering."
---
Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

```jsx
class LoginControl extends React.Component {

constructor(props) {

super(props);

this.handleLoginClick = this.handleLoginClick.bind(this);

this.handleLogoutClick = this.handleLogoutClick.bind(this);

this.state = {isLoggedIn: false};

}
```
handleLoginClick() {

```jsx
this.setState({isLoggedIn: true});

}
```
handleLogoutClick() {

```jsx
this.setState({isLoggedIn: false});

}
```
render() {

```jsx
const isLoggedIn = this.state.isLoggedIn;

let button;
```
if (isLoggedIn) {

```jsx
button = <LogoutButton onClick={this.handleLogoutClick} />;
```
} else {

```jsx
button = <LoginButton onClick={this.handleLoginClick} />;

}

return (
```
<div>

<Greeting isLoggedIn={isLoggedIn} />

{button}

</div>

```jsx
);

}

}
```
ReactDOM.render(

<LoginControl />,

document.getElementById('root')

```jsx
);
```

### Inline If with Logical && Operator

```jsx
function Mailbox(props) {

const unreadMessages = props.unreadMessages;

return (
```
<div>

<h1>Hello!</h1>

{unreadMessages.length > 0 &&

<h2>

You have {unreadMessages.length} unread messages.

</h2>

```jsx
}
```
</div>

```jsx
);

}

const messages = \['React', 'Re: React', 'Re:Re: React'\];
```
ReactDOM.render(

<Mailbox unreadMessages={messages} />,

document.getElementById('root')

```jsx
);
```

It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

**Note** **that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression.** In the example below, <div>0</div> will be returned by the render method.

### Inline If-Else with Conditional Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.

In the example below, we use it to conditionally render a small block of text.

render() {

```jsx
const isLoggedIn = this.state.isLoggedIn;

return (
```
<div>

The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.

</div>

```jsx
);

}
```
