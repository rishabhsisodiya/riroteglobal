---
title: "Context (imp)"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 19
description: "React — Context (imp)."
---
**Context provides a way to pass data through the component tree without having to pass props down manually at every level.** We can use composition and even render props but are limited to some level of tree.

Let's say we have to use username in A, D and F components available from AppComponent. For A , it is straightforward; we can directly pass in props and use them. For D we need to pass in to B and then from B again we need to pass username in props to D. For F we need to pass username to E and then from E to F. But let’s assume we have to pass username further down let say 100th level of component tree then it will make our component complex. **Prop Drilling** is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around.![](/notes-img/react-notes/img-017.webp)

There are 3 steps to use context:

1.  Create the context
2.  Provide a context value
3.  Consume the context value

### React.createContext

### const MyContext = React.createContext(defaultValue);

The **defaultValue** argument is only used when a component does not have a matching Provider above it in the tree(If the value **attribute in Provider is not there and we have set defaultValue then Consumer will use the defaultValue. If we have provided value in the Provider then the consumer will use the value provided by the provider**). This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

### Context.Provider

### <MyContext.Provider value={/\* some value \*/}>

Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

**All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.** The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so **the consumer is updated even when an ancestor component skips an update.**

Changes are determined by comparing the new and old values using the same algorithm as Object.is.

### Class.contextType

### let value = this.context;

```jsx
class MyClass extends React.Component {

static contextType = MyContext;
```
render() {

```jsx
let value = this.context;
```
/\* render something based on the value \*/

```jsx
}

}
```

The contextType property on a class can be assigned a Context object created by React.createContext(). Using this property lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.

### Context.Consumer

<MyContext.Consumer>

{value => /\* render something based on the context value \*/}

</MyContext.Consumer>

A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

**Requires a function as a child.** The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

### Context.displayName

Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context.

For example, the following component will appear as MyDisplayName in the DevTools:

```jsx
const MyContext = React.createContext(/\* some value \*/);
```
### MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools

<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

## Context in Code

### Create components/Context/userContext.jsx

```jsx
import React from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
```

### App.js

```jsx
import ComponentC from "./components/Context/ComponentC";
```
### import { UserProvider } from "./components/Context/userContext";

```jsx
function App() {

return (
```
<div className="App">

### <UserProvider value="Rishabh">

### <ComponentC />

### </UserProvider>

</div>

```jsx
);

}

export default App;
```

### ComponentC.jsx

```jsx
import React, { Component } from 'react'

import ComponentE from './ComponentE'

class ComponentC extends Component {
```
render() {

```jsx
return (
```
<div>

### <ComponentE />

</div>

```jsx
)

}

}

export default ComponentC;
```

### ComponentE.jsx

```jsx
import React, { Component } from 'react'

import ComponentF from './ComponentF'

class ComponentE extends Component {
```
render() {

```jsx
return (
```
<div>

### <ComponentF />

</div>

```jsx
)

}

}

export default ComponentE;
```

### ComponentF.jsx

```jsx
import React, { Component } from 'react'
```
### import { UserConsumer } from './userContext';

```jsx
class ComponentF extends Component {
```
render() {

```jsx
return (
```
### <UserConsumer>

### { username=>{

### return <div>hello {username}</div>

**}}**

### </UserConsumer>

```jsx
)

}

}

export default ComponentF;
```

### Output: Hello Rishabh

### If defaultValue is provided

### userContext.js

```jsx
import React from 'react'

const UserContext = React.createContext**("Rishabh Sisodiya");**

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
```

**If default Value is provided and we have no user Provider to pass value then Consumer will use defaultValue.**

### App.js

```jsx
import ComponentC from "./components/Context/ComponentC";

import { UserProvider } from "./components/Context/userContext";

function App() {

return (
```
<div className="App">

### {/\* <UserProvider value="Rishabh"> \*/}

<ComponentC />

### {/\* </UserProvider> \*/}

</div>

```jsx
);

}

export default App;
```

### Output: Hello Rishabh Sisodiya

## Use Context using contextType

### userContext.js

```jsx
import React from 'react'

const UserContext = React.createContext("Rishabh Sisodiya");

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
```
### export default UserContext;

### ContextType outside the class

### ComponentE.jsx

```jsx
import React, { Component } from 'react'

import ComponentF from './ComponentF'
```
### import UserContext from './userContext';

```jsx
class ComponentE extends Component {
```
render() {

```jsx
return (
```
<div>

### ComponentE context {this.context}

<ComponentF />

</div>

```jsx
)

}

}
```
### ComponentE.contextType= UserContext;

```jsx
export default ComponentE;
```

### ContextType inside the class: Using static contextType

### ComponentE.js

```jsx
import React, { Component } from 'react'

import ComponentF from './ComponentF'

import UserContext from './userContext';

class ComponentE extends Component {
```
### static contextType= UserContext;

render() {

```jsx
return (
```
<div>

ComponentE context {this.context}

<ComponentF />

</div>

```jsx
)

}

}

export default ComponentE;
```

### Limitation

-   We can use contextType with class Component only
-   You can subscribe to only a single context.

## Updating Context from a Nested Component

### theme-context.jsx

// Make sure the shape of the default value passed to

// createContext matches the shape that the consumers expect!

```jsx
export const ThemeContext = React.createContext({

theme: themes.dark,

toggleTheme: () => {},

});
```

### theme-toggler-button.jsx

```jsx
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
```
// The Theme Toggler Button receives not only the theme

// but also a toggleTheme function from the context

```jsx
return (
```
### <ThemeContext.Consumer>

### {({theme, toggleTheme}) => (

### <button

### onClick={toggleTheme}

### style={{backgroundColor: theme.background}}>

### Toggle Theme

### </button>

**)}**

### </ThemeContext.Consumer>

```jsx
);

}

export default ThemeTogglerButton;
```

### app.js

```jsx
import {ThemeContext, themes} from './theme-context';

import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {

constructor(props) {

super(props);
```
### this.toggleTheme = () => {

### this.setState(state => ({

**theme:**

### state.theme === themes.dark

### ? themes.light

**: themes.dark,**

**}));**

**};**

// State also contains the updater function so it will

// be passed down into the context provider

```jsx
this.state = {

theme: themes.light,

toggleTheme: this.toggleTheme,

};

}
```
render() {

// The entire state is passed to the provider

```jsx
return (
```
### <ThemeContext.Provider value={this.state}>

### <Content />

### </ThemeContext.Provider>

```jsx
);

}

}

function Content() {

return (
```
<div>

<ThemeTogglerButton />

</div>

```jsx
);

}

ReactDOM.render(<App />, document.root);
```

## Consuming Multiple Context

// Theme context, default to light theme

```jsx
const ThemeContext = React.createContext('light');
```
// Signed-in user context

```jsx
const UserContext = React.createContext({

name: 'Guest',

});

class App extends React.Component {
```
render() {

```jsx
const {signedInUser, theme} = this.props;
```
// App component that provides initial context values

```jsx
return (
```
### <ThemeContext.Provider value={theme}>

### <UserContext.Provider value={signedInUser}>

<Layout />

### </UserContext.Provider>

### </ThemeContext.Provider>

```jsx
);

}

}

function Layout() {

return (
```
<div>

<Sidebar />

<Content />

</div>

```jsx
);

}
```
// A component may consume multiple contexts

```jsx
function Content() {

return (
```
### <ThemeContext.Consumer>

### {theme => (

### <UserContext.Consumer>

### {user => (

### <ProfilePage user={user} theme={theme} />

**)}**

### </UserContext.Consumer>

**)}**

### </ThemeContext.Consumer>

```jsx
);

}
```

## Limitation

Because context uses reference identity to determine when to re-render, there are some gotchas that **could trigger unintentional renders in consumers when a provider’s parent re-renders**. For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value:

```jsx
class App extends React.Component {
```
render() {

```jsx
return (
```
<MyContext.Provider value={{something: 'something'}}>

<Toolbar />

</MyContext.Provider>

```jsx
);

}

}
```
To get around this, lift the value into the parent’s state:

```jsx
class App extends React.Component {

constructor(props) {

super(props);

this.state = {

value: {something: 'something'},

};

}
```
render() {

```jsx
return (
```
<Provider value={this.state.value}>

<Toolbar />

</Provider>

```jsx
);

}

}
```
