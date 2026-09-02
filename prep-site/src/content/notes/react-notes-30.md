---
title: "Pure Redux (read for understanding Redux only)"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 30
description: "React — Pure Redux (read for understanding Redux only)."
---
## Three Core Concept

To understand the concepts let take an example of Cake Shop

![](/notes-img/react-notes/img-023.webp)

| Cake Shop Scenario | Redux | Purpose |
| --- | --- | --- |
| Shop | Store | Hold the state of your application. |
| Intention to Buy_Cake | Action | Describe what happened |
| Shopkeeper | Reducer | Ties the store and action together. |

1.  A **store** is a giant JavaScript object that holds the state of your application.
2.  An **action** that describes the changes in the state of the application.
3.  A **reducer** which carries out the state transition depending on the action.

## Three Principles

1.  The state of your whole application is stored in an object tree within a single store.
2.  The only way to change the state is to emit or dispatch an action, an object describing what happened.
3.  To specify how the state tree is transformed by actions, you write a pure reducer. Reducer is the function which takes state and action as parameters and on the basis of action.type it returns a state.

![](/notes-img/react-notes/img-024.webp)

### Action

It is the only way your application can interact with the store. It carries some information from your app to the redux store. It is plain JavaScript objects which have a 'type' property that indicates the type of action being performed and the 'type' property is typically defined as string constants.

Function returning object which has ‘type’ property.

```jsx
const BUY_CAKE="BUY_CAKE"

function buyCake(){

return {

type: BUY_CAKE,

info: 'First redux cake'

}

}
```

### reducer

Specify how the app's state changes in response to actions sent to the store Function that accepts state and action and returns the next state of the application.

```jsx
(previousState, action) => newState
```

```jsx
const BUY_CAKE="BUY_CAKE"

function buyCake(){

return {

type: BUY_CAKE,

info: 'First redux cake'

}

}
```
// reducers

**const intialState ={**

### numOfCakes:10

**}**

```jsx
**const reducer = (state=intialState, action)=>{**
```
**switch (action.type) {**

**case BUY_CAKE:return {**

**...state,**

### numOfCakes:state.numOfCakes-1

**}**

**default: return state;**

**}**

**}**

### Redux Store

One store for the entire application.

Responsibilities:-

-   Holds the application state
-   Allows access to state via getState()
-   Allow state to be updated via dispatch(action)
-   Register listeners via subscribe(listener)
-   Handles unregistering of listener via the function returned by subscribe(listener)

For redux standlone

```jsx
**const redux = require('redux')**
```
**const createStore= redux.createStore;**

```jsx
const BUY_CAKE="BUY_CAKE"

function buyCake(){

return {

type: BUY_CAKE,

info: 'First redux cake'

}

}
```
// reducers

```jsx
const intialState ={
```
numOfCakes:10

```jsx
}

const reducer = (state=intialState, action)=>{

switch (action.type) {
```
case BUY_CAKE:return {

...state,

numOfCakes:state.numOfCakes-1

```jsx
}

default: return state;

}

}
```
**// Redux Store**

**const store = createStore(reducer);**

```jsx
**console.log('Initial State', store.getState());**

**const unsubscribe= store.subscribe( ()=> console.log('Updated state:',store.getState()) )**
```
**store.dispatch(buyCake())**

**store.dispatch(buyCake())**

**store.dispatch(buyCake())**

**unsubscribe();**

Output:

Initial State { numOfCakes:10}

Updated State { numOfCakes:9}

Updated State { numOfCakes:8}

Updated State { numOfCakes:7}

### Benefit of using action creator as function (buyCake())

Any changes in action creators will happen in one place. Imagine you want to add new properties or rename properties then you have to change it at every place if you would have used an object in place of function.

## Multiple reducers

### Example: Cakes & ice Creams

### Cake shop

Cakes stored on the shelf

shopkeeper to handle BUY_CAKE from customers.

Sell ice creams!

Ice creams stored in the freezer

New Shopkeeper to handle BUY_ICECREAM from customer

As shopkeeper act as reducer so

### Why do we need multiple reducers?

**Scalability**: One reducer to handle all the action will be difficult so when we split up it will be easier to handle actions.

**Error Handling:** If something goes wrong, It will be easier to catch the error.

Let’s implement the cake and icecream problem

```jsx
const redux = require('redux')

const createStore= redux.createStore

const BUY_CAKE="BUY_CAKE"

function buyCake(){

return {

type: BUY_CAKE,

info: 'First redux cake'

}

}
```
### const BUY_ICECREAM="BUY_ICECREAM"

**function buyIcecream(){**

**return {**

**type: BUY_ICECREAM,**

### info: 'First redux icecream'

**}**

**}**

// reducers

```jsx
const intialState ={
```
numOfCakes:10,

### numOficecreams:20

```jsx
}

const reducer = (state=intialState, action)=>{

switch (action.type) {
```
case BUY_CAKE:return {

...state,

numOfCakes:state.numOfCakes-1

```jsx
}
```
**case BUY_ICECREAM:return {**

**...state,**

### numOficecreams:state.numOficecreams-1

**}**

```jsx
default: return state;

}

}
```
// Redux Store

```jsx
const store = createStore(reducer);

console.log('Initial State', store.getState());

const unsubscribe= store.subscribe( ()=> console.log('Updated state:',store.getState()) )
```
store.dispatch(buyCake())

store.dispatch(buyCake())

store.dispatch(buyCake())

**store.dispatch(buyIcecream())**

**store.dispatch(buyIcecream())**

```jsx
unsubscribe();
```

Output:

Initial State { numOfCakes:10, numOficecreams:20 }

Updated State { numOfCakes:9, numOficecreams:20}

Updated State { numOfCakes:8, numOficecreams:20}

Updated State { numOfCakes:7, numOficecreams:20}

Updated State { numOfCakes:7, numOficecreams:19}

Updated State { numOfCakes:7, numOficecreams:18}

We can use the code like this but to make it more clear and separate the reducers.

## Combine Reducers

```jsx
const redux = require('redux')

const createStore= redux.createStore
```
### const combineReducers = redux.combineReducers

```jsx
const BUY_CAKE="BUY_CAKE"

function buyCake(){

return {

type: BUY_CAKE,

info: 'First redux cake'

}

}

const BUY_ICECREAM="BUY_ICECREAM"

function buyIcecream(){

return {

type: BUY_ICECREAM,

info: 'First redux icecream'

}

}

const intialCakeState ={
```
numOfCakes:10

```jsx
}

const intialIcecreamState ={
```
numOficecreams:20

```jsx
}

const cakeReducer = (state=intialCakeState, action)=>{

switch (action.type) {
```
case BUY_CAKE:return {

...state,

numOfCakes:state.numOfCakes-1

```jsx
}

default: return state;

}

}

const icecreamReducer = (state=intialIcecreamState, action)=>{

switch (action.type) {
```
case BUY_ICECREAM:return {

...state,

numOficecreams:state.numOficecreams-1

```jsx
}

default: return state;

}

}
```
**const rootReducer= combineReducers({**

**cake:cakeReducer,**

### icecream:icecreamReducer

**})**

// Redux Store

```jsx
const store = createStore(**rootReducer**);

console.log('Initial State', store.getState());

const unsubscribe= store.subscribe( ()=> console.log('Updated state:',store.getState()) )
```
store.dispatch(buyCake())

store.dispatch(buyCake())

store.dispatch(buyCake())

store.dispatch(buyIcecream())

store.dispatch(buyIcecream())

```jsx
unsubscribe();
```

Output:

Initial State { cake: { numOfCakes: 10 }, icecream: { numOficecreams: 20 } }

Updated state: { cake: { numOfCakes: 9 }, icecream: { numOficecreams: 20 } }

Updated state: { cake: { numOfCakes: 8 }, icecream: { numOficecreams: 20 } }

Updated state: { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 20 } }

Updated state: { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 19 } }

Updated state: { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 18 } }

## Middleware

-   A suggested way to extend redux with custom functionality.
-   It provides a third-party extension party between dispatching an action and the moment it reaches the reducer.
-   Use middleware for logging, crash reporting and performing asynchronous tasks, etc.

### redux-logger

npm install redux-logger

```jsx
const redux = require('redux')

const reduxLogger= require('redux-logger')

const createStore= redux.createStore

const combineReducers = redux.combineReducers
```
### const applyMiddleware= redux.applyMiddleware

**const logger= reduxLogger.createLogger()**

```jsx
const BUY_CAKE="BUY_CAKE"

function buyCake(){

return {

type: BUY_CAKE,

info: 'First redux cake'

}

}

const BUY_ICECREAM="BUY_ICECREAM"

function buyIcecream(){

return {

type: BUY_ICECREAM,

info: 'First redux icecream'

}

}

const intialCakeState ={
```
numOfCakes:10

```jsx
}

const intialIcecreamState ={
```
numOficecreams:20

```jsx
}

const cakeReducer = (state=intialCakeState, action)=>{

switch (action.type) {
```
case BUY_CAKE:return {

...state,

numOfCakes:state.numOfCakes-1

```jsx
}

default: return state;

}

}

const icecreamReducer = (state=intialIcecreamState, action)=>{

switch (action.type) {
```
case BUY_ICECREAM:return {

...state,

numOficecreams:state.numOficecreams-1

```jsx
}

default: return state;

}

}

const rootReducer= combineReducers({
```
cake:cakeReducer,

icecream:icecreamReducer

})

// Redux Store

```jsx
const store = createStore(rootReducer,**applyMiddleware(logger)**);

console.log('Initial State', store.getState());

const unsubscribe= store.subscribe( ()=> {})
```
store.dispatch(buyCake())

store.dispatch(buyCake())

store.dispatch(buyCake())

store.dispatch(buyIcecream())

store.dispatch(buyIcecream())

```jsx
unsubscribe();
```

Output:

Initial State { cake: { numOfCakes: 10 }, icecream: { numOficecreams: 20 } }

```jsx
%c **action** %cBUY_CAKE %c@ 13:05:06.023 color: gray; font-weight: lighter; color: inherit; color: gray; font-weight: lighter;
```
%c **prev state** color: #9E9E9E; font-weight: bold { cake: { numOfCakes: 10 }, icecream: { numOficecreams: 20 } }

%c **action** color: #03A9F4; font-weight: bold { type: 'BUY_CAKE', info: 'First redux cake' }

%c **next state** color: #4CAF50; font-weight: bold { cake: { numOfCakes: 9 }, icecream: { numOficecreams: 20 } }

```jsx
%c action %cBUY_CAKE %c@ 13:05:06.027 color: gray; font-weight: lighter; color: inherit; color: gray; font-weight: lighter;
```
%c prev state color: #9E9E9E; font-weight: bold { cake: { numOfCakes: 9 }, icecream: { numOficecreams: 20 } }

%c action color: #03A9F4; font-weight: bold { type: 'BUY_CAKE', info: 'First redux cake' }

%c next state color: #4CAF50; font-weight: bold { cake: { numOfCakes: 8 }, icecream: { numOficecreams: 20 } }

```jsx
%c action %cBUY_CAKE %c@ 13:05:06.028 color: gray; font-weight: lighter; color: inherit; color: gray; font-weight: lighter;
```
%c prev state color: #9E9E9E; font-weight: bold { cake: { numOfCakes: 8 }, icecream: { numOficecreams: 20 } }

%c action color: #03A9F4; font-weight: bold { type: 'BUY_CAKE', info: 'First redux cake' }

%c next state color: #4CAF50; font-weight: bold { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 20 } }

```jsx
%c action %cBUY_ICECREAM %c@ 13:05:06.029 color: gray; font-weight: lighter; color: inherit; color: gray; font-weight: lighter;
```
%c prev state color: #9E9E9E; font-weight: bold { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 20 } }

%c action color: #03A9F4; font-weight: bold { type: 'BUY_ICECREAM', info: 'First redux icecream' }

%c next state color: #4CAF50; font-weight: bold { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 19 } }

```jsx
%c action %cBUY_ICECREAM %c@ 13:05:06.029 color: gray; font-weight: lighter; color: inherit; color: gray; font-weight: lighter;
```
%c prev state color: #9E9E9E; font-weight: bold { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 19 } }

%c action color: #03A9F4; font-weight: bold { type: 'BUY_ICECREAM', info: 'First redux icecream' }

%c next state color: #4CAF50; font-weight: bold { cake: { numOfCakes: 7 }, icecream: { numOficecreams: 18 } }

CSS here for the browser you can check it in the browser also by creating html and include index.js script but import require.js also as it will need node or any other runtime environment.

So what redux logger will do is to print following in below order

1.  action type e.g BUY_CAKE
2.  previous state
3.  action creator e.g { type: 'BUY_CAKE', info: 'First redux cake' }
4.  next state

## Redux-thunk middleware- handle Async Actions

### Synchronous Actions

-   As soon as an action was dispatched, the state was immediately updated.
-   If you dispatch the BUY_CAKE action, the num0fCakes was right away decremented by 1.
-   Same with BUY_ICECREAM action as well.

### Async Actions

-   Asynchronous API calls to fetch data from an endpoint and use that data in your application.

**Redux-thunk:** It is middleware we are applying to redux to define action creators and handle Async actions.

### Install axios, redux-thunk

npm install axios redux-thunk

### asyncActions.js

```jsx
const redux = require("redux");

**const thunkMiddleware = require("redux-thunk").default;**

const axios = require("axios");

const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;

const initialState = {

loading: false,

users: [],

error: "",

};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";

const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {

return {

type: FETCH_USERS_REQUEST,

};

};

const fetchUsersSuccess = (users) => {

return {

type: FETCH_USERS_SUCCESS,

payload: users,

};

};

const fetchUsersFailure = (error) => {

return {

type: FETCH_USERS_FAILURE,

payload: error,

};

};

const reducer = (state = initialState, action) => {

switch (action.type) {
```
case FETCH_USERS_REQUEST:

```jsx
return {
```
...state,

```jsx
loading: true,

};
```
case FETCH_USERS_SUCCESS:

```jsx
return {
```
...state,

loading:false,

```jsx
users: action.payload,

error: "",

};
```
case FETCH_USERS_REQUEST:

```jsx
return {
```
...state,

loading:false,

```jsx
users: [],

error: action.payload,

};

}

};

const fetchUsers = () => {

return function (dispatch) {
```
**dispatch(fetchUsersRequest());**

axios

.get("https://jsonplaceholder.typicode.com/users")

```jsx
.then((response) => {
```
// response.data is the array of users

```jsx
const users = response.data.map((user) => user.id);
```
**dispatch(fetchUsersSuccess(users));**

})

```jsx
.catch((error) => {
```
// error.message is the error description

**dispatch(fetchUsersSuccess(error.message));**

```jsx
});

};

};

const store = **createStore(reducer, applyMiddleware(thunkMiddleware));**

const unsubscribe = store.subscribe(() => {

console.log(store.getState());

});

store.dispatch(**fetchUsers()**);
```

Output:

{ loading: true, users: \[\], error: '' }

{ loading: false,

```jsx
users: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],

error: '' }
```

### Advantages

-   **thunk-middleware allows the user to use action creator to return a function instead of action**.
-   Function now perform side effects like async operations
-   now function can dispatch regular actions which will be handle by reducers
