---
title: "React Router"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 30
description: "React — React Router."
---
npm i react-router

Finally, render a <BrowserRouter> around your application:

```jsx
import React from "react";

import ReactDOM from "react-dom/client";

import { **BrowserRouter** } from "react-router";

import App from "./app";

const root = document.getElementById("root");
```
ReactDOM.createRoot(root).render(

### <BrowserRouter>

<App />

### </BrowserRouter>

```jsx
);
```

## Configuring Routes

Routes are configured by rendering <Routes> and <Route> that couple URL segments to UI elements.

```jsx
import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import App from "./app";

const root = document.getElementById("root");
```
ReactDOM.createRoot(root).render(

<BrowserRouter>

### <Routes>

### <Route** path="/" element={<App />} **/>

### </Routes>

</BrowserRouter>

```jsx
);
```

Here's a larger sample config:

<Routes>

<Route index element={<Home />} />

<Route path="about" element={<About />} />

<Route **element={<AuthLayout />}**\>

<Route path="login" element={<Login />} />

<Route path="register" element={<Register />} />

</Route>

<Route path="concerts">

<Route index element={<ConcertsHome />} />

<Route path=":city" element={<City />} />

<Route path="trending" element={<Trending />} />

</Route>

</Routes>

### Nested Routes

<Routes>

<Route path="dashboard" element={<Dashboard />}>

<Route index element={<Home />} />

<Route path="settings" element={<Settings />} />

</Route>

</Routes>

The path of the parent is automatically included in the child, so this config creates both "/dashboard" and "/dashboard/settings" URLs.

Child routes are rendered through the <Outlet/> in the parent route.

```jsx
import { Outlet } from "react-router";

export default function Dashboard() {

return (
```
<div>

<h1>Dashboard</h1>

{/\* will either be <Home/> or <Settings/> \*/}

<Outlet />

</div>

```jsx
);

}
```
### Layout Routes

Routes without a path create new nesting for their children, but they don't add any segments to the URL.

<Routes>

<Route element={<MarketingLayout />}>

<Route index element={<MarketingHome />} />

<Route path="contact" element={<Contact />} />

</Route>

<Route path="projects">

<Route index element={<ProjectsHome />} />

<Route element={<ProjectsLayout />}>

<Route path=":pid" element={<Project />} />

<Route path=":pid/edit" element={<EditProject />} />

</Route>

</Route>

</Routes>

### Index Routes

Index routes render into their parent's <Outlet/> at their parent's URL (like a default child route). They are configured with the index prop:

<Routes>

<Route path="/" element={<Root />}>

{/\* renders into the outlet in <Root> at "/" \*/}

<Route index element={<Home />} />

<Route path="dashboard" element={<Dashboard />}>

{/\* renders into the outlet in <Dashboard> at "/dashboard" \*/}

<Route index element={<DashboardHome />} />

<Route path="settings" element={<Settings />} />

</Route>

</Route>

</Routes>

Note that index routes can't have children. If you're expecting that behavior, you probably want a layout route.

### Route Prefixes

A <Route path> without an element prop adds a path prefix to its child routes, without introducing a parent layout.

<Route path="projects">

<Route index element={<ProjectsHome />} />

<Route element={<ProjectsLayout />}>

<Route path=":pid" element={<Project />} />

<Route path=":pid/edit" element={<EditProject />} />

</Route>

</Route>

### Dynamic Segments

If a path segment starts with : then it becomes a "dynamic segment". When the route matches the URL, the dynamic segment will be parsed from the URL and provided as params to other router APIs like useParams.

<Route path="**teams/:teamId**" element={<Team />} />

You can have multiple dynamic segments in one route path:

<Route

path="**/c/:categoryId/p/:productId**"

element={<Product />}

/>

```jsx
import { useParams } from "react-router";

export default function Team() {

let { categoryId, productId } = **useParams**();
```
// ...

```jsx
}
```
### Optional Segments

You can make a route segment optional by adding a ? to the end of the segment.

<Route path=":lang?/categories" element={<Categories />} />

You can have optional static segments, too:

<Route path="users/:userId/edit?" component={<User />} />

### Splats

Also known as "catchall" and "star" segments. If a route path pattern ends with /\* then it will match any characters following the /, including other / characters.

<Route path="files/\*" element={<File />} />

```jsx
let params = useParams();
```
// params\["\*"\] will contain the remaining URL after files/

```jsx
let filePath = params\["\*"\];
```
You can destructure the \*, you just have to assign it a new name. A common name is splat:

```jsx
let { "\*": splat } = useParams();
```
## Navigating

Users navigate your application with `<Link>`, <NavLink>, and useNavigate.

### NavLink

This component is for navigation links that need to render an active state.

```jsx
import { NavLink } from "react-router";

export function MyAppNav() {

return (
```
<nav>

<NavLink to="/" end>

Home

</NavLink>

<NavLink to="/trending" end>

Trending Concerts

</NavLink>

<NavLink to="/concerts">All Concerts</NavLink>

<NavLink to="/account">Account</NavLink>

</nav>

```jsx
);

}
```
### Link

Use `<Link>` when the link doesn't need active styling:

```jsx
import { Link } from "react-router";

export function LoggedOutMessage() {

return (
```
<p>

You've been logged out.{" "}

`<Link to="/login">`Login again`</Link>`

</p>

```jsx
);

}
```
### useNavigate

This hook allows the programmer to navigate the user to a new page without the user interacting.

For normal navigation, it's best to use Link or NavLink. They provide a better default user experience like keyboard events, accessibility labeling, "open in new window", right click context menus, etc.

Reserve usage of useNavigate to situations where the user is not interacting but you need to navigate, for example:

-   After a form submission completes
-   Logging them out after inactivity
-   Timed UIs like quizzes, etc.

```jsx
import { **useNavigate** } from "react-router";

export function LoginPage() {

let **navigate** = useNavigate();

return (
```
<>

<MyHeader />

<MyLoginForm

### onSuccess={() => {

### navigate("/dashboard");

**}}**

/>

<MyFooter />

</>

```jsx
);

}
```
## URL Values

### Route Params

Route params are the parsed values from a dynamic segment.

<Route path="/concerts/**:city"** element={<City />} />

In this case, :city is the dynamic segment. The parsed value for that city will be available from useParams

```jsx
import { useParams } from "react-router";

function City() {

let { **city** } = **useParams**();

let data = useFakeDataLibrary(\`/api/v2/cities/${city}\`);
```
// ...

```jsx
}
```
### URL Search Params

Search params are the values after a ? in the URL. They are accessible from useSearchParams, which returns an instance of URLSearchParams

```jsx
function SearchResults() {

let \[searchParams\] = **useSearchParams**();

return (
```
<div>

<p>

You searched for <i>{searchParams.get("q")}</i>

</p>

<FakeSearchResults />

</div>

```jsx
);

}
```
### Location Object

React Router creates a custom location object with some useful information on it accessible with useLocation.

```jsx
function useAnalytics() {

let location = useLocation();

useEffect(() => {

sendFakeAnalytics(location.pathname);

}, \[location\]);

}

function useScrollRestoration() {

let location = **useLocation**();

useEffect(() => {

fakeRestoreScroll(location.key);

}, \[location\]);

}
```
## Reactjs - \`component\` vs \`render\` in Route

When you pass a component to the component prop, the component will get the path parameters in the props.match.params object, i.e props.match.params.username in your example:

```jsx
class ProfileComponent extends React.Component {
```
render() {

```jsx
return <div>{this.props.match.params.username}</div>;

}

}
```
When using the render prop, the path parameters can be accessed through the props given to the render function:

<Route

exact

path='/u/:username/'

```jsx
render={(props) =>
```
<ProfileComponent username={props.match.params.username}/>

```jsx
}
```
/>

You generally use the render prop when you need some data from the component that contains your routes, since the component prop gives no real way of passing in additional props to the component.
