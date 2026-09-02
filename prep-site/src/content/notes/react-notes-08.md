---
title: "Lists and Keys (imp)"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 8
description: "React — Lists and Keys (imp)."
---
Create **PersonList**.js under component folder

```jsx
import React from "react";

import Person from "./Person";

function PersonList() {

const persons = \[
```
{

```jsx
id: 1,

name: "Bruce",

age: 30,

skill: "React",
```
},

{

```jsx
id: 2,

name: "Clark",

age: 25,

skill: "Angular",
```
},

{

```jsx
id: 3,

name: "Diana",

age: 28,

skill: "Vue",
```
},

```jsx
\];

const personList = persons.map((person) => (
```
<Person **key={person.id}** person={person}/>

```jsx
));

return <div>{personList}</div>;

}

export default PersonList;
```

### Person.js

```jsx
import React from "react";

const Person = ({person}) => {

return (
```
<div>

<h2>

I am {person.name}. I am {person.age} and I know {person.skill}

</h2>

</div>

```jsx
);

};

export default Person;
```

**Keys** **help React identify which items have changed, are added, or are removed.** Keys should be given to the elements inside the array to give the elements a stable identity

**JSX allows embedding any expression in curly braces so we could inline the map() result:**

```jsx
import React from "react";

import Person from "./Person";

function PersonList() {

const persons = \[
```
{

```jsx
id: 1,

name: "Bruce",

age: 30,

skill: "React",
```
},

{

```jsx
id: 2,

name: "Clark",

age: 25,

skill: "Angular",
```
},

{

```jsx
id: 3,

name: "Diana",

age: 28,

skill: "Vue",
```
},

```jsx
\];

return (
```
<div>

### {persons.map((person) => (

### <Person key={person.id} person={person} />

**))}**

</div>

```jsx
);

}

export default PersonList;
```

## Reconciliation & Diffing Algorithm (imp)

**Reconciliation is the process through which React updates the DOM.** When a component’s state changes, **React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM.** In this context, the virtual DOM will contain the new state of the component.

### The Diffing Algorithm

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.

### _List without key attribute_

Let's say we have two items Bruce and Clark and now we have to add another item at the end of the list. So **how react will handle this update is react just iterate over both the list at the same time and generate a mutation whenever there is difference.**![](/notes-img/react-notes/img-004.webp)

In our example, React will match the first items in each list and see no difference then it will match the second 2 items and again see no difference. So when it tries to match the 3rd item and see the difference then simply insert the 3rd item into the DOM tree. This way instead of destroying the old tree and building the new tree from scratch, react will simply update the tree and insert the item in the list.

Now consider the same initial items but this time we need to insert at the beginning. So what happens in this situation is that **when react iterates over both the list and makes a comparison, it turns out that every item is different. React will end up mutating every child** instead of realizing it can keep Bruce and Clark's sub tree intact and this inefficiency can be a problem and in order **to resolve this issue**. **React supports key attributes.** ![](/notes-img/react-notes/img-005.webp)

### _List with key attribute_

So when children have key attributes. React uses a key to match the children in the original tree to the children of subsequent trees. **Now react knows the item with key=3 is the new one and item with key=1 and key=2 just moved. So react will preserve the sub tree and simply insert the item at the top of the list.**![](/notes-img/react-notes/img-006.webp)

## Index as key Anti-Pattern

So when we don’t have any stable ids, we can use index value of array as key

```jsx
function NumberList(props) {

const numbers = props.numbers;

const listItems = numbers.map((number, **index**) =>
```
<li key={**index**}>

{number}

</li>

```jsx
);

return (
```
<ul>{listItems}</ul>

```jsx
);

}

const numbers = \[1, 2, 3, 4, 5\];
```
ReactDOM.render(

<NumberList numbers={numbers} />,

document.getElementById('root')

```jsx
);
```

### _But it can create some serious issues in some scenarios. (imp)_

You can refer this link → [https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

![](/notes-img/react-notes/img-007.webp)

In the above code UI, we used index as key and so ID’s value is incremented by 1 and in the item text field which is initially empty we can write anything. Let's say we are writing an incremented value of index by 1. So after clicking on Add new to End we have created 3 rows. So now **when we add item in the beginning** by clicking on Add New to Start then it should give us first row as

### index ID item

0 1![](/notes-img/react-notes/img-008.webp)

1 2![](/notes-img/react-notes/img-009.webp)

2 3![](/notes-img/react-notes/img-010.webp)

3 4![](/notes-img/react-notes/img-011.webp)

But it gives us below output

**React Interpretation**![](/notes-img/react-notes/img-012.webp)

1.  Initially, we have 3 items, each with an index as its key (Refer 1st screenshot):![](/notes-img/react-notes/img-013.webp)
    -   Key=0 has a value of 1.
    -   Key=1 has a value of 2.
    -   Key=2 has a value of 3.
2.  When a new item is inserted at the beginning (Refer 2nd Screenshot):
    -   The new item is assigned key=0.
    -   The keys of existing elements are incremented by 1.
3.  During UI updates:
    -   React identifies the previous elements by their keys (key=0, key=1, key=2).
    -   React reuses these elements and assigns the new item a key=3.
4.  This can cause misalignment:
    -   The original values remain associated with their old keys.
    -   This mismatch can lead to sorting issues.

### When to use index as key

1\. The items in your list do not have a unique id.

2\. The list is a static list and will not change.

3\. The list will never be reordered or filtered.
