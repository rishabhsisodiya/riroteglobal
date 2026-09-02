---
title: "React Hooks"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 27
description: "React — React Hooks."
---
## Introduction to React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### Why hooks

-   Understand how this keyword works in JavaScript
-   Remember to bind event handlers in class components
-   Classes don't minify very well and make hot reloading very unreliable
-   There is no particular way to reuse stateful component logic
-   HOC and render props patterns do address this problem
-   Makes the code harder to follow
-   There is a need to share stateful logic in a better way
-   Create components for complex scenarios such as data fetching and subscribing to events
-   Related code is not organized in one place
-   Ex: Data fetching - In componentDidMount and componentDidUpdate
-   Ex: Event listeners — In componentDidMount and componentWillUnmount

## useState

The useState hook lets you add state to functional components **In classes, the state is always an object. With the useState hook, the state doesn't have to be an object.** The useState hook returns an array with 2 elements. The first element is the current value of the state, and the second element is a state setter function.

Create an app using create-react-app

### App.js

```jsx
import React from 'react'
```
### import Counter from './components/Counter'

```jsx
const App = () => {

return (
```
<div>

### <Counter />

</div>

```jsx
)

}

export default App
```

### Counter.js

```jsx
import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(0);

return (
```
<div>

```jsx
<button onClick={()=> setCount(count+1)}>Count {count}</button>
```
</div>

```jsx
)

}

export default Counter
```

**Why is useState not named createState instead?**

“Create” wouldn’t be quite accurate because the state is only created the first time our component renders. During the next renders, useState gives us the current state. Otherwise it wouldn’t be “state” at all! There’s also a reason why Hook names always start with use.

### useState with previous state

Checkout stateful class component example of this.setState

```jsx
import React, { useState } from 'react'

const CounterTwo = () => {

const initialCount=0;

const [count, setCount] = useState(initialCount);

const incrementFive = () =>{

for (let i = 0; i < 5; i++) {

**setCount(prevCount=> prevCount+1)**

}

}

return (
```
<div>

```jsx
Count: {count}

<button onClick={()=> setCount(initialCount)}>Reset</button>

<button onClick={()=> setCount(count+1)}>Increment</button>

<button onClick={()=> setCount(count-1)}>Decrement</button>
```
<button onClick={incrementFive}>Increment 5</button>

</div>

```jsx
)

}

export default CounterTwo
```

### useState with Object

**Problem:** When we use below code then whenever we enter in first input field, it will show value in firstname but when we enter in second input field then it remove value from firstname and show value for lastName only

```jsx
import React, {useState} from 'react'

const CounterThree = () => {

const [name, setName] = useState({
```
firstName:'',

lastName:''

})

```jsx
return (
```
<div>

```jsx
<input type="text" value={name.firstName} onChange={e => setName({firstName:e.target.value})} />

<input type="text" value={name.lastName} onChange={e => setName({lastName:e.target.value})} />
```
<h2>Your first Name is -{name.firstName} </h2>

<h2>Your last Name is -{name.lastName} </h2>

</div>

```jsx
)

}

export default CounterThree
```

**Solution:** use spread operator to fix this issue

```jsx
import React, {useState} from 'react'

const CounterThree = () => {

const [name, setName] = useState({
```
firstName:'',

lastName:''

})

```jsx
return (
```
<div>

```jsx
<input type="text" value={name.firstName} onChange={e => setName({**...name**, firstName:e.target.value})} />

<input type="text" value={name.lastName} onChange={e => setName({**...name,** lastName:e.target.value})} />
```
<h2>Your first Name is -{name.firstName} </h2>

<h2>Your last Name is -{name.lastName} </h2>

</div>

```jsx
)

}

export default CounterThree
```

### useState with Array

```jsx
import React, { useState } from "react";

const CounterFour = () => {

const [items, setItems] = useState([]);

const addItem = () => {
```
setItems(**\[**

**...items,**

{ id: items.length, value: Math.floor(Math.random() \* 10) + 1 }

```jsx
**]**);

};

return (
```
<div>

<button onClick={addItem}>Add a number</button>

<ul>

```jsx
{items.map((item) => (
```
<li key={item.id}>{item.value}</li>

))}

</ul>

</div>

```jsx
);

};

export default CounterFour;
```

## useEffect

The Effect hook lets you perform side effects in functional components. It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount.

Update Web page title

```jsx
import React, { useState, useEffect } from 'react'

const Counter = () => {

const [count, setCount] = useState(0);

**useEffect(() => {**
```
**document.title= `You Clicked ${count} times`**

**})**

```jsx
return (
```
<div>

```jsx
<button onClick={()=> setCount(count+1)}>Click {count} times</button>
```
</div>

```jsx
)

}

export default Counter
```

useEffect runs after every time when the render method gets called.

### Conditionally run effects

Below code will only run when count value changes

```jsx
import React, { useState, useEffect } from 'react'

const Counter = () => {

const [count, setCount] = useState(0);

const [name, setName] = useState('');

useEffect(() => {

console.log('useEffect-Updating document title');

document.title= `You Clicked ${count} times`
```
},**\[count\]**)

```jsx
return (
```
<div>

```jsx
<input type="text" value={name} onChange={e => setName(e.target.value)}/>

<button onClick={()=> setCount(count+1)}>Click {count} times</button>
```
</div>

```jsx
)

}

export default Counter;
```

**When compare to Class component:**

componentDidUpdate(prevProps, prevState){

if(prevState.count !== this.state.count){

```jsx
console.log('useEffect-Updating document title');

document.title= `You Clicked ${count} times`

}

}
```

### Run Effect only once

```jsx
import React, {useState, useEffect} from 'react'

const HookMouse = () => {

const [x, setX] = useState(0);

const [y, setY] = useState(0);

const logMousePosition = e =>{

console.log('Mouse Event');

setX(e.clientX);

setY(e.clientY);

}

**useEffect( () => {**

**console.log('useEffect called');**
```
**window.addEventListener('mousemove',logMousePosition)**

**},\[\])**

```jsx
return (
```
<div>

Hooks X - {x} Y- {y}

</div>

```jsx
)

}

export default HookMouse
```

### useEffect with cleanup

**If we do not remove the event listener then the above problem can arise. (To replicate the error remove return part of useEffect)**![](/notes-img/react-notes/img-018.webp)

### HookMouse.js

```jsx
import React, {useState, useEffect} from 'react'

const HookMouse = () => {

const [x, setX] = useState(0);

const [y, setY] = useState(0);

const logMousePosition = e =>{

console.log('Mouse Event');

setX(e.clientX);

setY(e.clientY);

}

useEffect( () => {

console.log('useEffect called');
```
window.addEventListener('mousemove',logMousePosition)

```jsx
**return () => {**

**console.log('component unmounted');**
```
**window.removeEventListener('mousemove', logMousePosition)**

**}**

},\[\])

```jsx
return (
```
<div>

Hooks X - {x} Y- {y}

</div>

```jsx
)

}

export default HookMouse
```

### MouseCountainer.js

```jsx
import React, { useState } from "react";

import HookMouse from "./HookMouse";

const MouseContainer = () => {

const [display, setDisplay] = useState(true);

return (
```
<div>

<button

```jsx
onClick={() => {

setDisplay(!display);
```
}}

\>

Toggle display

</button>

### {display && <HookMouse />}

</div>

```jsx
);

};

export default MouseContainer;
```

### useEffect with incorrect dependency

**Problem: Counter will not increment as we are running useEffect only once and hence setInterval will call tick method only once.**

```jsx
import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {

const [count, setCount] = useState(0);

const tick = () => {
```
setCount(count+1)

```jsx
}

useEffect(() => {

const interval= setInterval(tick, 1000);

return () => {
```
clearInterval(interval)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

{count}

</div>

```jsx
)

}

export default IntervalHookCounter
```

### Solution 1: count as dependency

```jsx
import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {

const [count, setCount] = useState(0);

const tick = () => {
```
setCount(count+1)

```jsx
}

useEffect(() => {

const interval= setInterval(tick, 1000);

return () => {
```
clearInterval(interval)

```jsx
}
```
}, \[**count**\])

```jsx
return (
```
<div>

{count}

</div>

```jsx
)

}

export default IntervalHookCounter
```

**Solution 2: use prevCount, prevCount always keeps track of previous value so it will always update UI and render gets called.**

```jsx
import React, {useState, useEffect} from 'react'

const IntervalHookCounter = () => {

const [count, setCount] = useState(0);

const tick = () => {

setCount(**prevCount=>prevCount+1**)

}

useEffect(() => {

const interval= setInterval(tick, 1000);

return () => {
```
clearInterval(interval)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

{count}

</div>

```jsx
)

}

export default IntervalHookCounter
```

### Multiple useEffect

![](/notes-img/react-notes/img-019.webp)

### Fetching data using useEffect

Install axios: **npm i axios**

```jsx
import React, { useState, useEffect } from "react";

import axios from "axios";

function DataFetching() {

const [post, setPost] = useState({});

const [id, setId] = useState(1);

const [idFromButtonClick, setIdFromButtonClick] = useState(1);

useEffect(() => {
```
axios

.get(\`https://jsonplaceholder.typicode.com/posts/${id}\`)

```jsx
.then((res) => {

console.log(res);

setPost(res.data);
```
})

```jsx
.catch((err) => {

console.log(err);

});

}, [idFromButtonClick]);

const handleClick = () => {

setIdFromButtonClick(id);

};

return (
```
<div>

```jsx
<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
```
<button type="button" onClick={handleClick}>

Fetch Post

</button>

<div>{post.title}</div>

```jsx
{/* <ul> {posts.map(post => (<li key={post.id}>{post.title}</li>))}</ul> */}
```
</div>

```jsx
);

}

export default DataFetching;
```

## useContext

Context provides a way to pass data through the component tree without having to pass props down manually at every level. You can go through Context section in React tutorial above

App.js

```jsx
import React from "react";

import "./App.css";

import ComponentC from "./components/ComponentC";
```
**export const UserContext = React.createContext();**

**export const ChannelContext = React.createContext();**

```jsx
function App() {

return (
```
<div className="App">

**<UserContext.Provider value={"Vishwas"}>**

**<ChannelContext.Provider value={"Codevolution"}>**

<ComponentC />

### </ChannelContext.Provider>

### </UserContext.Provider>

</div>

```jsx
);

}

export default App;
```

ComponentC.js

```jsx
import React from 'react'

import ComponentE from './ComponentE'

function ComponentC() {

return <ComponentE />

}

export default ComponentC
```

### Old way which we used in React class component

ComponentF.js

```jsx
import React from "react";
```
**import { UserContext, ChannelContext } from "../App";**

```jsx
function ComponentF() {

return (
```
<div>

### <UserContext.Consumer>

```jsx
**{(user) => {**
```
**return (**

### <ChannelContext.Consumer>

```jsx
{(channel) => {

return (
```
<div>

User context value {user}, channel context value {channel}

</div>

```jsx
);
```
}}

### </ChannelContext.Consumer>

**);**

**}}**

### </UserContext.Consumer>

</div>

```jsx
);

}

export default ComponentF;
```

### Simpler way to use Context

ComponentE.js

```jsx
import React, { useContext } from 'react'

import ComponentF from './ComponentF'
```
### import { UserContext, ChannelContext } from '../App'

```jsx
function ComponentE() {
```
**const user = useContext(UserContext)**

**const channel = useContext(ChannelContext)**

return <div> User is {user} and channel is {channel}</div>

```jsx
}

export default ComponentE
```

## useReducer

It is a hook used for state management. It is an alternative for useState

What's the difference between useState and useReducer?

→ useState is built using useReducer.

Similarity with reduce function in JavaScript

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```jsx
const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
```
// 1 + 2 + 3 + 4

```jsx
console.log(array1.reduce(reducer));
```
// expected output: 10

// 5 + 1 + 2 + 3 + 4

```jsx
console.log(array1.reduce(reducer, 5));
```
// expected output: 15

| reduce in JavaScript | useReducer in React |
| --- | --- |
| array.reduce(reducer, initialValue) | useReducer(reducer, initialState) |
| singleValue= reducer(accumulator, intemValue) | newState= reducer(currentState, action) |
| reduce method returns a single value. | useReducer returns a pair of values. [newState, dispatch] |

**Syntax:**

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
CounterOne.js

```jsx
import React, { useReducer } from "react";
```
**const initialState = 0;**

```jsx
**const reducer = (state, action) => {**
```
**switch (action) {**

**case "increment":**

**return state + 1;**

**case "decrement":**

**return state - 1;**

**case "reset":**

**return initialState;**

**default:**

**return state;**

**}**

**};**

```jsx
function CounterOne() {
```
**const \[count, dispatch\] = useReducer(reducer, initialState);**

```jsx
return (
```
<div>

<div>Count = {count}</div>

```jsx
<button onClick={**() => dispatch("increment")**}>Increment</button>

<button onClick={(**) => dispatch("decrement")**}>Decrement</button>

<button onClick={(**) => dispatch("reset")**}>Reset</button>
```
</div>

```jsx
);

}

export default CounterOne;
```

App.js

```jsx
import React from "react";

import "./App.css";

import CounterOne from "./components/CounterOne";

function App() {

return (
```
<div className="App">

### <CounterOne />

</div>

```jsx
);

}

export default App;
```

Complex state

```jsx
import React, { useReducer } from "react";
```
**const initialState = {**

**firstCounter: 0,**

**secondCounter: 10,**

**};**

```jsx
const reducer = (state, action) => {

switch (**action.type**) {
```
case "increment":

```jsx
return { ...state, firstCounter: state.firstCounter **+ action.value** }**;**
```
case "decrement":

```jsx
return { ...state, firstCounter: state.firstCounter - **action.value** };
```
case "**increment2**":

```jsx
return { ...state, secondCounter: state.secondCounter + **action.value** };
```
case "**decrement2**":

```jsx
return { ...state, secondCounter: state.secondCounter - **action**.**value** };
```
case "reset":

```jsx
return initialState;
```
default:

```jsx
return state;

}

};

function CounterTwo() {

const [count, dispatch] = useReducer(reducer, initialState);

return (
```
<div>

<div>Count = {count.firstCounter}</div>

```jsx
<button onClick={() => dispatch(**{ type: "increment", value: 1 }**)}>
```
Increment

</button>

```jsx
<button onClick={() => dispatch({ type: "decrement", value: 1 })}>
```
Decrement

</button>

```jsx
<button onClick={() => dispatch({ type: "increment", value: 5 })}>
```
Increment 5

</button>

```jsx
<button onClick={() => dispatch({ type: "decrement", value: 5 })}>
```
Decrement 5

</button>

```jsx
<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
```
**<div>Secound Counter = {count.secondCounter}</div>**

<div>

```jsx
<button onClick={() => dispatch(**{ type: "increment2", value: 1 }**)}>
```
Increment

</button>

```jsx
<button onClick={() => dispatch(**{ type: "decrement2", value: 1 }**)}>
```
Decrement

</button>

</div>

</div>

```jsx
);

}

export default CounterTwo;
```

### Use Multiple reducers

```jsx
import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {

switch (action) {
```
case "increment":

```jsx
return state + 1;
```
case "decrement":

```jsx
return state - 1;
```
case "reset":

```jsx
return initialState;
```
default:

```jsx
return state;

}

};

function CounterThree() {
```
**const \[count, dispatch\] = useReducer(reducer, initialState);**

**const \[countTwo, dispatchTwo\] = useReducer(reducer, initialState);**

```jsx
return (
```
<div>

<div>Count = {count}</div>

```jsx
<button onClick={() => dispatch("increment")}>Increment</button>

<button onClick={() => dispatch("decrement")}>Decrement</button>

<button onClick={() => dispatch("reset")}>Reset</button>
```
<div>Count = {countTwo}</div>

```jsx
<button onClick={() => **dispatchTwo("increment")**}>Increment</button>

<button onClick={() => **dispatchTwo("decrement")**}>Decrement</button>

<button onClick={() => **dispatchTwo("reset")}**>Reset</button>
```
</div>

```jsx
);

}

export default CounterThree;
```

### useReducer with useContext (imp)

```jsx
useReducer : Local State management
```
useContext+useReducer: share state between component- global state management

### App.js

```jsx
import React, { **useReducer** } from "react";

import "./App.css";

import CounterOne from "./components/CounterOne";

import CounterTwo from "./components/CounterTwo";

import CounterThree from "./components/CounterThree";

import ComponentA from "./components/ComponentA";

import ComponentB from "./components/ComponentB";

import ComponentC from "./components/ComponentC";
```
**const initialState = 0;**

```jsx
**const reducer = (state, action) => {**
```
**switch (action) {**

**case "increment":**

**return state + 1;**

**case "decrement":**

**return state - 1;**

**case "reset":**

**return initialState;**

**default:**

**return state;**

**}**

**};**

**export const CountContext = React.createContext();**

```jsx
function App() {
```
**const \[count, dispatch\] = useReducer(reducer, initialState);**

```jsx
return (
```
<CountContext.Provider

value={{ countState: count, countDispatch: dispatch }}

\>

<div className="App">

<ComponentA />

<ComponentB />

<ComponentC />

</div>

</CountContext.Provider>

```jsx
);

}

export default App;
```

### ComponentA.js

```jsx
import React, {**useContext**} from 'react'

import { **CountContext** } from '../App';

function ComponentA() {
```
**const countContext = useContext(CountContext)**

```jsx
return (
```
<div>

Component A {**countContext**.**countState**}

```jsx
<button onClick={(**) => countContext.countDispatch('increment')**}>Increment</button>

<button onClick={**() => countContext.countDispatch('decrement')**}>Decrement</button>

<button onClick={**() => countContext.countDispatch('reset')**}>Reset</button>
```
</div>

```jsx
)

}

export default ComponentA
```

ComponentB.js

```jsx
import React from "react";

import ComponentD from "./ComponentD";

function ComponentB() {

return (
```
<div>

Component B<**ComponentD** />

</div>

```jsx
);

}

export default ComponentB;
```

ComponentA.js

```jsx
import React from "react";

import ComponentE from "./ComponentE";

function ComponentC() {

return (
```
<div>

Component C<**ComponentE** />

</div>

```jsx
);

}

export default ComponentC;
```

### ComponentD.js

```jsx
import React, {**useContext**} from 'react'

import { **CountContext** } from '../App';

function ComponentD() {
```
**const countContext = useContext(CountContext)**

```jsx
return (
```
<div>

Component D {**countContext.countState**}

```jsx
<button onClick={**() => countContext.countDispatch('increment')**}>Increment</button>

<button onClick=**{() => countContext.countDispatch('decrement')}**>Decrement</button>

<button onClick={**() => countContext.countDispatch('reset')**}>Reset</button>
```
</div>

```jsx
)

}

export default ComponentD
```

### ComponentE.js

```jsx
import React from "react";

import ComponentF from "./ComponentF";

function ComponentE() {

return (
```
<div>

Component E<**ComponentF** />

</div>

```jsx
);

}

export default ComponentE;
```

ComponentF.js

```jsx
import React, { **useContext** } from "react";
```
**import { CountContext } from "../App";**

```jsx
function ComponentF() {
```
**const countContext = useContext(CountContext);**

```jsx
return (
```
<div>

Component F **{countContext.countState}**

```jsx
<button onClick={**() => countContext.countDispatch("increment")**}>
```
Increment

</button>

```jsx
<button onClick={**() => countContext.countDispatch("decrement")**}>
```
Decrement

</button>

```jsx
<button onClick={**() => countContext.countDispatch("reset")**}>Reset</button>
```
</div>

```jsx
);

}

export default ComponentF;
```

### Fetching data without useReducer

DataFetchingOne.js

```jsx
import React, {useState, useEffect} from 'react'

import axios from 'axios';

function DataFetchingOne() {

const [loading, setLoading] = useState(true)

const [error, setError] = useState('')

const [post, setPost] = useState({})

useEffect(() => {
```
axios.get(\`https://jsonplaceholder.typicode.com/posts/1\`)

```jsx
.then(response => {
```
setLoading(false)

setPost(response.data)

setError('')

})

```jsx
.catch(error => {
```
setLoading(false)

setPost({})

setError('Something went wrong!')

})

}, \[\])

```jsx
return (
```
<div>

{loading ? 'Loading': post.title}

{error ? error: null}

</div>

```jsx
)

}

export default DataFetchingOne
```

### Fetching data using useReducer

DataFetchingTwo.js

```jsx
import React, { useReducer, useEffect } from "react";

import axios from "axios";

const initialState = {

loading: true,

error: "",

post: {},

};

const reducer = (state, action) => {

switch (action.type) {
```
case "FETCH_SUCCESS":

```jsx
return {

loading: false,

post: action.payload,

error: "",

};
```
case "FETCH_ERROR":

```jsx
return {

loading: false,

post: {},

error: "Something went wrong!",

};
```
default:

```jsx
return state;

}

};

function DataFetchingTwo() {

const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
```
axios

.get(\`https://jsonplaceholder.typicode.com/posts/1\`)

```jsx
.then((response) => {

dispatch({ type: "FETCH_SUCCESS", payload: response.data });
```
})

```jsx
.catch((error) => {

dispatch({ type: "FETCH_ERROR" });

});

}, []);

return (
```
<div>

{state.loading ? "Loading": state.post.title}

{state.error ? state.error: null}

</div>

```jsx
);

}

export default DataFetchingTwo;
```

### useState vs useReducer

| Scenario | useState | useReducer |
| --- | --- | --- |
| Type of State | Number, String and boolean | Object or Array |
| Number of transition( updation) | One or Two | Too many |
| Related state transition? | No | Yes |
| Business logic | No business logic | Complex business logic |
| Local vs Global | Local | Global |

## useCallback

**useCallback** is a hook that will return the memoized version of the callback function that only changes if one of dependencies has changed. It is useful when passing a callback to optimize the child component that relies on reference equality **to prevent unnecessary renders.**

### Let’s understand why we need useCallback

Create below 4 files under the component folder.

### ParentComponent.js

```jsx
import React, { useState, useCallback } from "react";

import Count from "./Count";

import Button from "./Button";

import Title from "./Title";

function ParentComponent() {

const [age, setAge] = useState(25);

const [salary, setSalary] = useState(50000);

**const incrementAge = useCallback(() => {**
```
**setAge(age + 1);**

**}, \[age\]);**

```jsx
**const incrementSalary = useCallback(() => {**
```
**setSalary(salary + 1000);**

**}, \[salary\]);**

```jsx
return (
```
<div>

<Title />

<Count text="Age" count={age} />

<Button handleClick={incrementAge}>Increment Age</Button>

<Count text="Salary" count={salary} />

<Button handleClick={incrementSalary}>Increment Salary</Button>

</div>

```jsx
);

}

export default ParentComponent;
```

### Button.js

```jsx
import React from 'react'

function Button({ handleClick, children }) {

console.log('Rendering button - ', children)

return (
```
<button onClick={handleClick}>

{children}

</button>

```jsx
)

}

export default **React.memo**(Button)
```

### Count.js

```jsx
import React from 'react'

function Count({ text, count }) {

console.log(`Rendering ${text}`)

return <div>{text} - {count}</div>

}

export default **React.memo**(Count)
```

### Title.js

```jsx
import React from 'react'

function Title() {

console.log('Rendering Title')

return (
```
<h2>

useCallback Hook

</h2>

```jsx
)

}

export default **React.memo**(Title)
```

| Program output |  |
| --- | --- |
| Console.log() output in browser |  |

So When we click either on the Increment Age or Increment Salary button, Age and Salary value will be incremented respectively **but it will re-render another component as well** which has simple logic like Title, etc. If there are let’s say 40-50 components then **it will be a performance issue. To improve performance we have to restrict the re-render to only components that need to be re-render.** In our case when we increment the age then only the count component and button component related to Age should re-rendered. **So we can wrap our component in React.memo()**. So after wrapping Button.js, Count.js and Title.js in React.memo. Now when click on Increment Age button it will render button and count component related to Age and also it show increment Salary button component which is not needed

![](/notes-img/react-notes/img-022.webp)

This is because a **new** increment age **function (arrow functions) is created each time the parent component re-render and when dealing with functions we always consider reference equality.** Even functions have exact behavior but that doesn’t mean they are equal to each other. So the function before the render and after the render is different. Here incrementSalary and incrementAge are functions which are different each time and also t**hey are props to Button component and hence each time Button component will be different and re-render. Now the solution to this problem is useCallback.**

## useMemo

UseMemo is a hook which recomputes the cached value when one of the dependencies has changed.

```jsx
import React, { useState, useMemo } from "react";

function Counter() {

const [counterOne, setCounterOne] = useState(0);

const [counterTwo, setCounterTwo] = useState(0);

const incrementOne = () => {

setCounterOne(counterOne + 1);

};

const incrementTwo = () => {

setCounterTwo(counterTwo + 1);

};

const isEven = **useMemo(**() => {
```
// for some slowness in code

```jsx
let i = 0;

while (i < 2000000000) i++;

return counterOne % 2 === 0;
```
}**, \[counterOne\]);**

```jsx
return (
```
<div>

<div>

<button onClick={incrementOne}>Count One - {counterOne}</button>

<span>{isEven ? "Even": "Odd"}</span>

</div>

<div>

<button onClick={incrementTwo}>Count Two - {counterTwo}</button>

</div>

</div>

```jsx
);

}

export default Counter;
```

When we use loop for some slowness for ui update of showing even or odd for counterOne. So whenever we click on Count One – {counterOne} it will take time for UI update but it will take time even when we click Count Two – {counterTwo} button as well. Because each time component re-render it will use isEven() and hence there will always be some slowness.

So we need to tell React **not to calculate even or odd values when we are changing counterTwo values and for such cases we can use useMemo. So in above code React will re-compute only when its dependencies counterOne has changed.**

### useMemo vs useCallback

UseCallback caches the provided function instances itself where useMemo invokes the provided function and caches its result.

## useRef

Refs **provide a way to access DOM nodes or React elements** created in the render method. Let take an example where on mount auto focus on input field

```jsx
import React, { useRef, useEffect } from 'react'

function FocusInput() {
```
**const inputRef = useRef(null)**

```jsx
useEffect(() => {
```
**inputRef.current.focus()**

}, \[\])

```jsx
return (
```
<div>

<input **ref={inputRef}** type="text" />

</div>

```jsx
)

}

export default FocusInput
```

**Timer Example:**

Let take an another example

### ClassTimer.js

```jsx
import React, { Component } from "react";

class ClassTimer extends Component {

interval;

constructor(props) {

super(props);

this.state = {

timer: 0,

};

}
```
componentDidMount() {

```jsx
this.interval = setInterval(() => {

this.setState((prevState) =>
```
this.setState({ timer: prevState.timer + 1 })

```jsx
);

}, 1000);

}
```
componentWillUnmount() {

```jsx
clearInterval(this.interval);

}
```
render() {

```jsx
return (
```
<div>

Class Timer - {this.state.timer} -

```jsx
<button onClick={() => clearInterval(this.interval)}>
```
Clear Timer

</button>

</div>

```jsx
);

}

}

export default ClassTimer;
```

But if we try the same thing with Hook. We don’t have access to variable interval as it is defined and declared in useEffect

```jsx
import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

const [timer, setTimer] = useState(0)
```
**const interValRef = useRef()**

```jsx
useEffect(() => {

**const interval = setInterval((**) => {

setTimer(timer => timer + 1)
```
}, 1000)

```jsx
return () => {
```
### clearInterval(interval)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

HookTimer - {timer} -

```jsx
<button onClick={() => clearInterval(**interval**)}>Clear Timer</button>
```
</div>

```jsx
)

}

export default HookTimer
```

To fix this issue refs come into picture. Although useRef hook holds the reference to the DOM node using ref attribute, **it can also be used to store any mutable value a**nd value will persist through the re-render without causing any re-render.

### HookTimer.js

```jsx
import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

const [timer, setTimer] = useState(0)

const interValRef = useRef()

useEffect(() => {

**interValRef.current** = setInterval(() => {

setTimer(timer => timer + 1)
```
}, 1000)

```jsx
return () => {
```
clearInterval(**interValRef.current**)

```jsx
}
```
}, \[\])

```jsx
return (
```
<div>

HookTimer - {timer} -

```jsx
<button onClick={() => clearInterval(**interValRef.current**)}>Clear Timer</button>
```
</div>

```jsx
)

}

export default HookTimer
```

## useImperativehandle

useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef

### Syntax

```jsx
useImperativeHandle(ref, createHandle, [dependencies]);
```
-   **ref**: The forwarded ref from the parent component.
-   **createHandle**: A function that returns the custom object to expose.
-   **dependencies**: Optional array of dependencies. The createHandle function is re-executed when dependencies change

```jsx
function FancyInput(props, ref) {

const inputRef = useRef();

**useImperativeHandle(ref, () => ({**

**focus: () => {**
```
**inputRef.current.focus();**

**}**

**}));**

```jsx
return <input ref={inputRef} ... />;

}

FancyInput = forwardRef(FancyInput);
```

In this example, a parent component that renders <FancyInput ref={inputRef} /> would be able to call inputRef.current.focus().

## useLayoutEffect

The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.

**Note:**

If you use server rendering, keep in mind that neither useLayoutEffect nor useEffect can run until the JavaScript is downloaded. This is why React warns when a server-rendered component contains useLayoutEffect. To fix this, either move that logic to useEffect (if it isn’t necessary for the first render), or delay showing that component until after the client renders (if the HTML looks broken until useLayoutEffect runs).

To exclude a component that needs layout effects from the server-rendered HTML, render it conditionally with showChild && <Child /> and defer showing it with useEffect(() => { setShowChild(true); }, \[\]). This way, the UI doesn’t appear broken before hydration.

## Custom Hooks

A custom Hook is basically a JavaScript function whose name starts with ‘use’. You can also call it as other hooks are required.

### Uses

-   share logic
-   alternative to HOCs and Render Props.

Create a component folder and create following files in it.

### Update Document Title

### Without Custom hook

### DocTitleOne.js

```jsx
import React, {useEffect, useState} from 'react'

function DocTitleOne() {

const [count, setCount] = useState(0)

useEffect(() => {

document.title = `Count- ${count}`
```
}, \[count\])

```jsx
return (
```
<div>

```jsx
<button onClick={() => setCount(count + 1)}>Count - {count}</button>
```
</div>

```jsx
)

}

export default DocTitleOne
```

### DocTitleTwo.js

```jsx
import React, {useEffect, useState} from 'react'

function DocTitleTwo() {

const [count, setCount] = useState(0)

useEffect(() => {

document.title = `Count- ${count}`
```
}, \[count\])

```jsx
return (
```
<div>

```jsx
<button onClick={() => setCount(count + 1)}>Count - {count}</button>
```
</div>

```jsx
)

}

export default DocTitleTwo
```

**So we are repeating the updating document title logic in both the files. In such a case we can use a custom hook. Let’s create a custom hook for updating document title**

### Using useDocumentTitle Custom Hook

Create a new folder hooks and within the folder create a new file **useDocumentTitle.js**

```jsx
import {useEffect} from 'react'

function useDocumentTitle(count) {

useEffect(() => {

document.title = `Count ${count}`
```
}, \[count\])

```jsx
}

export default useDocumentTitle
```

### DocTitleOne.js

```jsx
import React, { useState } from "react";
```
**import useDocumentTitle from "../hooks/useDocumentTitle";**

```jsx
function DocTitleOne() {

const [count, setCount] = useState(0);
```
**useDocumentTitle(count);**

```jsx
return (
```
<div>

```jsx
<button onClick={() => setCount(count + 1)}>Count - {count}</button>
```
</div>

```jsx
);

}

export default DocTitleOne;
```

### DocTitleTwo.js

```jsx
import React, {useState} from 'react'
```
**import useDocumentTitle from '../hooks/useDocumentTitle';**

```jsx
function DocTitleTwo() {

const [count, setCount] = useState(0)
```
### useDocumentTitle(count)

```jsx
return (
```
<div>

```jsx
<button onClick={() => setCount(count + 1)}>Count - {count}</button>
```
</div>

```jsx
)

}

export default DocTitleTwo
```

### Counter

### Without Hook

### CounterOne.js

```jsx
import React, { useState } from 'react'

function CounterOne() {

const [count, setCount] = useState(0)

const increment = () => {

setCount(prevCount => prevCount + 1)

}

const decrement = () => {

setCount(prevCount => prevCount - 1)

}

const reset = () => {
```
setCount(0)

```jsx
}

return (
```
<div>

<h2>Count = {count}</h2>

<button onClick={increment}>Increment</button>

<button onClick={decrement}>Decrement</button>

<button onClick={reset}>Reset</button>

</div>

```jsx
)

}

export default CounterOne
```

### Using useCounter Custom Hook

Create **useCounter.js** under hooks folder

```jsx
import { useState } from 'react'

function useCounter(initialCount = 0, value) {

const [count, setCount] = useState(initialCount)

const increment = () => {

setCount(prevCount => prevCount + value)

}

const decrement = () => {

setCount(prevCount => prevCount - value)

}

const reset = () => {
```
setCount(initialCount)

```jsx
}

return [count, increment, decrement, reset]

}

export default useCounter
```

CounterOne.js

```jsx
import React from 'react'
```
### import useCounter from '../hooks/useCounter'

```jsx
function CounterOne() {
```
**const \[count, increment, decrement, reset\] = useCounter(0, 1)**

```jsx
return (
```
<div>

<h2>Count = {count}</h2>

<button onClick={**increment**}>Increment</button>

<button onClick={**decrement**}>Decrement</button>

<button onClick={**reset**}>Reset</button>

</div>

```jsx
)

}

export default CounterOne
```

### Input Form

### Without using custom hook

```jsx
import React, { useState } from "react";

function UserForm() {

const [firstName, setFirstName] = useState('');

const [lastName, setLastName] = useState('');

const submitHandler = (e) => {

e.preventDefault();

alert(`Hello ${firstName} ${lastName}`);

};

return (
```
<div>

<form onSubmit={submitHandler}>

<div>

<label>First Name</label>

```jsx
<input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
```
</div>

<div>

<label>Last Name</label>

```jsx
<input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
```
</div>

<button>Submit</button>

</form>

</div>

```jsx
);

}

export default UserForm;
```

### With useInput custom Hook

```jsx
import {useState} from 'react'

function useInput(initialValue) {

const [value, setValue] = useState(initialValue)

const reset = () => {
```
setValue('')

```jsx
}

const bind = {
```
value,

```jsx
**onChange: e => {**
```
### setValue(e.target.value)

**}**

```jsx
}

return [value, bind, reset]

}

export default useInput
```

### UserForm.js

```jsx
import React, { useState } from "react";

import useInput from "../hooks/useInput";

function UserForm() {

const [firstName, bindFirstName, resetFirstName] = useInput("");

const [lastName, bindLastName, resetLastName] = useInput("");

const submitHandler = (e) => {

e.preventDefault();

alert(`Hello ${firstName} ${lastName}`);
```
**resetFirstName();**

**resetLastName();**

```jsx
};

return (
```
<div>

<form onSubmit={submitHandler}>

<div>

<label>First Name</label>

<input type="text" {...**bindFirstName**} />

</div>

<div>

<label>Last Name</label>

<input type="text" {...**bindLastName**} />

</div>

<button>Submit</button>

</form>

</div>

```jsx
);

}

export default UserForm;
```

## useDebugValue

useDebugValue can be used to display a label for custom hooks in React DevTools.

For example, consider the useFriendStatus custom Hook described in “Building Your Own Hooks”:

```jsx
function useFriendStatus(friendID) {

const [isOnline, setIsOnline] = useState(null);
```
// ...

**// Show a label in DevTools next to this Hook**

**// e.g. "FriendStatus: Online"**

**useDebugValue(isOnline ? 'Online': 'Offline');**

```jsx
return isOnline;

}
```

**Tip:** We don’t recommend adding debug values to every custom Hook. It’s most valuable for custom Hooks that are part of shared libraries.
