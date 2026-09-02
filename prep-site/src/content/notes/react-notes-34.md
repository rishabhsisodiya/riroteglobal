---
title: "React-Redux"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 34
description: "React — React-Redux."
---
## Setup Basic Redux App

Create a new react project using create-react-app.

Install redux and react-redux

npm install redux react-redux

create components folder under src and under components folder create **CakeContainer.js**

### CakeContainer.js

```jsx
import React from 'react'

const CakeContainer = () => {

return (
```
<div>

<h1>Number of cakes</h1>

<button>Buy Cake</button>

</div>

```jsx
)

}

export default CakeContainer
```

### App.js

```jsx
import React from 'react'
```
### import CakeContainer from './components/CakeContainer'

```jsx
const App = () => {

return (
```
<div>

### <CakeContainer />

</div>

```jsx
)

}

export default App
```

### Actions

Create a **redux**/cake/cakeActions.js and redux/cake/cakeTypes.js under src folder

### cakeTypes.js

```jsx
export const BUY_CAKE='BUY_CAKE'
```

Lets now import action type and replace it in cakeAction.js

### cakeActions.js

### import {BUY_CAKE} from './cakeTypes';

```jsx
export const buyCake = () => {

return {
```
type:**BUY_CAKE**

```jsx
}

}
```

### Reducers

Create store.js under src/redux folder

### cakeReducer.js

```jsx
import { BUY_CAKE } from "./cakeTypes";

const initialState={
```
numOfCakes:10

```jsx
}

const cakeReducer= (state=initialState, action) =>{

switch (action.type) {
```
case BUY_CAKE: return{

...state,

numOfCakes:state.numOfCakes-1

```jsx
}

default: return state;

}

}

export default cakeReducer;
```

### Store

### store.js

```jsx
import { createStore } from "redux";
```
### import cakeReducer from "./cakeReducer";

```jsx
const store = createStore(**cakeReducer**)

export default store;
```

### Connect redux and react

### App.js

```jsx
import React from "react";

import CakeContainer from "./components/CakeContainer";
```
### import { Provider } from "react-redux";

### import store from "./redux/store";

```jsx
const App = () => {

return (
```
### <Provider store={store}>

<div>

<CakeContainer />

</div>

### </Provider>

```jsx
);

};

export default App;
```

### CakeContainers.js

```jsx
import React from "react";
```
### import { buyCake } from "../redux/cakes/cakeActions";

### import { connect } from "react-redux";

```jsx
const CakeContainer = (**props**) => {

return (
```
<div>

<h1>Number of cakes:**{props.numOfCakes}**</h1>

<button onClick=**{props.buyCake}**\>Buy Cake</button>

</div>

```jsx
);

};
```
### const mapStateToProps = (state) => {

### return {

**numOfCakes: state.numOfCakes,**

**};**

**};**

### const mapDispatchToProps = (dispatch) => {

### return {

```jsx
**buyCake: ()=> dispatch(buyCake()),**
```
**};**

**};**

// Connect above two function to react-redux

```jsx
export default **connect(mapStateToProps, mapDispatchToProps)(**CakeContainer**);**
```

Got to terminal: **npm start**

#### **Let’s dive into above code and understand it**

Below code is for selectors. **Selectors** return state information from redux. You can create a separate file if your code becomes more complex. Here it is simple so we are not creating any separate file.

```jsx
const mapStateToProps = (state) => {

return {

numOfCakes: state.numOfCakes,

};

};

const mapDispatchToProps = (dispatch) => {

return {

buyCake: () => dispatch(buyCake()),

};

};
```

So we can use any method name but it is recommended but we used it as by React convention. **mapStateToProps** used to get the state of redux and **mapDispatchToProps** used for dispatching action. Both the arrow function is returning objects which have numOfCakes and buyCake method and these two will be available to the whole code using props.

<h1>Number of cakes:**{props.numOfCakes}**</h1>

<button onClick=**{props.buyCake}**\>Buy Cake</button>

buyCake return arrow function in which we called dispatch and passed buyCake action creator which is returning the actions.

All these above things are possible using **connect**(). It is responsible for connecting mapStateToProps and mapDispatchToProps to redux.

```jsx
export default **connect(mapStateToProps, mapDispatchToProps)(**CakeContainer**);**
```

## React Redux with Hooks

### useSelector Hook

```jsx
import React from "react";

import { useSelector } from "react-redux";

const HooksCakeContainer = () => {

const numOfCakes=useSelector(state=> state.numOfCakes)

return (
```
<div>

<h1>Number of cakes:{numOfCakes}</h1>

<button >Buy Cake</button>

</div>

```jsx
);

};

export default HooksCakeContainer;
```

### App.js

```jsx
import React from "react";

import CakeContainer from "./components/CakeContainer";

import { Provider } from "react-redux";

import store from "./redux/store";
```
### import HooksCakeContainer from "./components/HooksCakeContainer";

```jsx
const App = () => {

return (
```
<Provider store={store}>

<div>

<CakeContainer />

### <HooksCakeContainer />

</div>

</Provider>

```jsx
);

};

export default App;
```

### useDispatch hook

```jsx
import React from "react";

import { **useDispatch**, useSelector } from "react-redux";
```
### import { buyCake } from "../redux/cakes/cakeActions";

```jsx
const HooksCakeContainer = () => {

const numOfCakes=useSelector(state=> state.numOfCakes)
```
### const dispatch = useDispatch();

```jsx
return (
```
<div>

<h1>Number of cakes:{numOfCakes}</h1>

```jsx
<button **onClick={()=> dispatch(buyCake())**}>Buy Cake</button>
```
</div>

```jsx
);

};

export default HooksCakeContainer;
```

### Usage Warning with Hooks

#### Stale Props and "Zombie Children"

Specifically, "**stale props**" means any case where:

-   a selector function relies on this component's props to extract data
-   a parent component would re-render and pass down new props as a result of an action
-   but this component's selector function executes before this component has had a chance to re-render with those new props

"**Zombie child**" refers specifically to the case where:

-   Multiple nested connected components are mounted in a first pass, causing a child component to subscribe to the store before its parent
-   An action is dispatched that deletes data from the store, such as a todo item
-   The parent component would stop rendering that child as a result
-   However, because the child subscribed first, its subscription runs before the parent stops rendering it. When it reads a value from the store based on props, that data no longer exists, and if the extraction logic is not careful, this may result in an error being thrown.

#### Performance

As mentioned earlier, by default useSelector() will do a reference equality comparison of the selected value when running the selector function after an action is dispatched, and will only cause the component to re-render if the selected value changed. However, unlike connect(), useSelector() does not prevent the component from re-rendering due to its parent re-rendering, even if the component's props did not change. If further performance optimizations are necessary, you may consider wrapping your function component in React.memo()

## Multiple Reducers

Create the same folder and files we did for cake. Create iceCream folder under redux and then create below files

### iceCreamTypes.js

```jsx
export const BUY_ICECREAM='BUY_ICECREAM'
```

### iceCreamActions.js

```jsx
import {BUY_ICECREAM} from './iceCreamTypes';

export const buyIceCream = () => {

return {
```
type:BUY_ICECREAM

```jsx
}

}
```

### iceCreamReducer.js

```jsx
import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState={
```
numOfIceCreams:10

```jsx
}

const iceCreamReducer= (state=initialState, action) =>{

switch (action.type) {
```
case BUY_ICECREAM: return{

...state,

numOfIceCreams:state.numOfIceCreams-1

```jsx
}

default: return state;

}

}

export default iceCreamReducer;
```

**Combine Both Reducers:** create rootReducer.js under redux

### rootReducer.js

```jsx
import { **combineReducers** } from "redux";
```
### import cakeReducer from "./cakes/cakeReducers";

### import iceCreamReducer from "./iceCreams/iceCreamReducers";

### const rootReducer = combineReducers({

**cake:cakeReducer,**

### iceCream: iceCreamReducer

**})**

```jsx
export default rootReducer;
```

### Use new rootReducer in our store

### store.js

```jsx
import { createStore } from "redux";
```
### import rootReducer from "./rootReducer";

```jsx
const store = createStore(**rootReducer**)

export default store;
```

### Create IceCreamContainer.js under components folder

### IceCreamContainer.js

```jsx
import React from "react";

import { buyIceCream } from "../redux/iceCreams/iceCreamActions";

import { connect } from "react-redux";

const IceCreamContainer = (props) => {

return (
```
<div>

<h1>Number of icecreams:{props.numOfIceCreams}</h1>

<button onClick={props.buyIceCream}>Buy Cake</button>

</div>

```jsx
);

};
```
### // Specify the key we use in root reducer

```jsx
const mapStateToProps = (state) => {

return {

numOfIceCreams: state.**iceCream**.numOfIceCreams,

};

};

const mapDispatchToProps = (dispatch) => {

return {

buyIceCream: ()=> dispatch(buyIceCream()),

};

};
```
// Connect above two function to react-redux

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
```

**To access a particular feature (cake or icecream) state then we have to specify the key we use in the root reducer.**

### CakeContainer.js

```jsx
import React from "react";

import { buyCake } from "../redux/cakes/cakeActions";

import { connect } from "react-redux";

const CakeContainer = (props) => {

console.log('props : ',props);

return (
```
<div>

<h1>Number of cakes:{props.numOfCakes}</h1>

<button onClick={props.buyCake}>Buy Cake</button>

</div>

```jsx
);

};
```
// Specify the key we use in root reducer

```jsx
const mapStateToProps = (state) => {

return {

numOfCakes: state.**cake**.numOfCakes,

};

};

const mapDispatchToProps = (dispatch) => {

return {

buyCake: ()=> dispatch(buyCake()),

};

};
```
// Connect above two function to react-redux

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
```

### Add IceCreamContainer.js in App.js

### App.js

```jsx
import React from "react";

import CakeContainer from "./components/CakeContainer";

import { Provider } from "react-redux";

import store from "./redux/store";

import HooksCakeContainer from "./components/HooksCakeContainer";
```
i**mport IceCreamContainer from "./components/IceCreamContainer";**

```jsx
const App = () => {

return (
```
<Provider store={store}>

<div>

<CakeContainer />

### <IceCreamContainer />

### {/\* <HooksCakeContainer /> \*/}

</div>

</Provider>

```jsx
);

};

export default App;
```

## Logger Middleware

Install redux logger

npm install redux-logger

### store.js

```jsx
import { createStore, **applyMiddleware** } from "redux";

import rootReducer from "./rootReducer";
```
### import logger from 'redux-logger';

```jsx
const store = createStore(rootReducer, **applyMiddleware(logger))**

export default store;
```

## Redux Dev tool Extension

Download Redux Dev tool extension for respective browsers and also install its package

npm install redux-devtools-extension

### store.js

```jsx
import { createStore, applyMiddleware } from "redux";
```
### import { composeWithDevTools } from "redux-devtools-extension";

```jsx
import rootReducer from "./rootReducer";

import logger from "redux-logger";

const store = createStore(
```
rootReducer,

**composeWithDevTools**(applyMiddleware(logger))

```jsx
);

export default store;
```

Right click >inspect element >select redux tab (Double tick on >> if not visible)

You can state and action here. On the bottom side you have a dispatcher to dispatch a particular action. Also we have a play button which records all the events. It can help in troubleshooting.

## Action payload

Create a new file NewCakeContainer.js which is copy of CakeContainer.js

### NewCakeContainer.js

```jsx
import React, { **useState** } from "react";

import { buyCake } from "../redux/cakes/cakeActions";

import { connect } from "react-redux";

const NewCakeContainer = (props) => {
```
### const \[number, setNumber\] = useState(1)

```jsx
return (
```
<div>

<h1>Number of cakes:{props.numOfCakes}</h1>

```jsx
**<input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>**

<button onClick={(**)=> props.buyCake(number)**}>Buy {**number**} Cake</button>
```
</div>

```jsx
);

};
```
// Specify the key we use in root reducer

```jsx
const mapStateToProps = (state) => {

return {

numOfCakes: state.cake.numOfCakes,

};

};

const mapDispatchToProps = (dispatch) => {

return {

buyCake: (**number**)=> dispatch(buyCake(**number**)),

};

};
```
// Connect above two function to react-redux

```jsx
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
```

### cakeActions.js

```jsx
import {BUY_CAKE} from './cakeTypes';

export const buyCake = (**number=1**) => {

return {
```
type:BUY_CAKE,

### payload**:**number

```jsx
}

}
```

### cakeReducer.js

```jsx
import { BUY_CAKE } from "./cakeTypes";

const initialState={
```
numOfCakes:10

```jsx
}

const cakeReducer= (state=initialState, action) =>{

switch (action.type) {
```
case BUY_CAKE: return{

...state,

numOfCakes:state.numOfCakes-**action.payload**

```jsx
}

default: return state;

}

}

export default cakeReducer;
```

### App.js

```jsx
import React from "react";

import CakeContainer from "./components/CakeContainer";

import { Provider } from "react-redux";

import store from "./redux/store";

import HooksCakeContainer from "./components/HooksCakeContainer";

import IceCreamContainer from "./components/IceCreamContainer";
```
### import NewCakeContainer from "./components/NewCakeContainer";

```jsx
const App = () => {

return (
```
<Provider store={store}>

<div>

<CakeContainer />

<IceCreamContainer />

{/\* <HooksCakeContainer /> \*/}

### <NewCakeContainer />

</div>

</Provider>

```jsx
);

};

export default App;
```

## pass **second parameter** in mapStateToProps

So Suppose we want to assign state on basis o

Create a **ListContainer**.js under components.

```jsx
import React from "react";

import { connect } from "react-redux";

const ListContainer = (props) => {

return (
```
<div>

<h2>Item: {props.item}</h2>

</div>

```jsx
);

};

const mapStateToProps = (state, ownProps) => {

const itemState = **ownProps.cake**
```
### ? state.cake.numOfCakes

### : state.iceCream.numOfIceCreams;

```jsx
return {

item: itemState,

};

};

export default connect(mapStateToProps)(ListContainer);
```

So we are **passing cake as props** in one component and in another we keep it blank.

App.js

```jsx
import React from "react";

import CakeContainer from "./components/CakeContainer";

import { Provider } from "react-redux";

import store from "./redux/store";

import HooksCakeContainer from "./components/HooksCakeContainer";

import IceCreamContainer from "./components/IceCreamContainer";

import NewCakeContainer from "./components/NewCakeContainer";

import ListContainer from "./components/ListContainer";

const App = () => {

return (
```
<Provider store={store}>

<div>

### <ListContainer cake/>

### <ListContainer />

<CakeContainer />

<IceCreamContainer />

<HooksCakeContainer />

<NewCakeContainer />

</div>

</Provider>

```jsx
);

};

export default App;
```

Try to change the default value either cake or ice cream Here default value for both is 10. It's difficult to notice the changes.

## pass **second parameter** in map**Dispatch**ToProps

### ListContainer.js

```jsx
import React from "react";

import { connect } from "react-redux";
```
### import { buyCake } from "../redux/cakes/cakeActions";

### import { buyIceCream } from "../redux/iceCreams/iceCreamActions";

```jsx
const ListContainer = (props) => {

return (
```
<div>

<h2>Item: {props.item}</h2>

### <button onClick={props.buyItem}>Buy Item</button>

</div>

```jsx
);

};

const mapStateToProps = (state, ownProps) => {

const itemState = ownProps.cake
```
? state.cake.numOfCakes

```jsx
: state.iceCream.numOfIceCreams;

return {

item: itemState,

};

};
```
### const mapDispatchToProps = (dispatch, ownProps) => {

```jsx
**const dispatchFunction = ownProps.cake ? ()=> dispatch(buyCake()) :()=> dispatch(buyIceCream())**
```
### return {

### buyItem: dispatchFunction

**}**

**}**

```jsx
export default connect(mapStateToProps, **mapDispatchToProps**)(ListContainer);
```

**If YOU WANT TO JUST USE mapDispatchToProps then pass null in place of mapStateToProps**

```jsx
export default connect(**null**, mapDispatchToProps)(ListContainer);
```
## Redux thunk

Install axios **Install axios , redux-thunk**

npm install axios redux-thunk

Create a new folder **user** under redux then create files userTypes.js , userActions.js and userReducers.js.

### userTypes.js

```jsx
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
```

### userActions.js

```jsx
import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './userTypes'

import axios from 'axios'

export const fetchUsersRequest = () => {

return {

type: FETCH_USERS_REQUEST,

};

};

export const fetchUsersSuccess = (users) => {

return {

type: FETCH_USERS_SUCCESS,

payload: users,

};

};

export const fetchUsersFailure = (error) => {

return {

type: FETCH_USERS_FAILURE,

payload: error,

};

};

export const fetchUsers = () => {

return function(dispatch) {

dispatch(fetchUsersRequest());
```
axios

.get("https://jsonplaceholder.typicode.com/users")

```jsx
.then((response) => {
```
// response.data is the array of users

```jsx
const users = response.data;

dispatch(fetchUsersSuccess(users));
```
})

```jsx
.catch((error) => {
```
// error.message is the error description

```jsx
dispatch(fetchUsersSuccess(error.message));

});

};

};
```

### userReducers.js

```jsx
import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './userTypes'

const initialState = {

loading: false,

users: \[\],

error: "",

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
case FETCH_USERS_FAILURE:

```jsx
return {
```
...state,

loading:false,

```jsx
users: \[\],

error: action.payload,

};

default:return state;

}

};

export default reducer;
```

### rootReducer.js

```jsx
import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducers";

import iceCreamReducer from "./iceCreams/iceCreamReducers";
```
i**mport userReducer from './user/userReducers'**

```jsx
const rootReducer = combineReducers({
```
cake:cakeReducer,

```jsx
iceCream: iceCreamReducer,
```
### user:userReducer

})

```jsx
export default rootReducer;
```

### store.js

```jsx
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

import logger from "redux-logger";
```
### import thunk from 'redux-thunk';

```jsx
const store = createStore(
```
rootReducer,

composeWithDevTools(applyMiddleware(logger, **thunk**))

```jsx
);

export default store;
```

Create a new file **UserContainer**.js under component

```jsx
import React, { useEffect } from 'react'

import { connect } from "react-redux";

import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({userData, fetchUsers}) => {

console.log(userData);

useEffect(() => {
```
fetchUsers()

}, \[\])

```jsx
return userData?.loading ? (<h2>Loading</h2>) : userData.error ? (
```
<h2>{userData.error}</h2>

):(<div>

<h2>User List</h2>

{

```jsx
userData && userData.users && userData.users.map(user=> <p key={user.id}>{user.name}</p>)

}
```
</div>)

```jsx
}

const mapStateToProps = (state) => {

return {

userData: state.user,

};

};

const mapDispatchToProps = (dispatch) => {

return {

fetchUsers: ()=> dispatch(fetchUsers()),

};

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
```
