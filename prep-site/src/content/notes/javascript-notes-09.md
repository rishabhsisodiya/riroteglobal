---
title: "call, apply and bind method"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 9
description: "JavaScript — call, apply and bind method."
---
The call, apply, and bind methods are functions available in JavaScript for controlling the context (this) in which a function is invoked.

```js
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```js
printFullName: function (){

console.log(this.firstName+" "+this.lastName);

}

}

name.printFullName();

let name2 = {

firstName: "Any",
```
lastName:"Random",

```js
}
```
### //function borrowing

```js
name.printFullName.call(name2);
```

So when we use method.call() then our method will now use a new pointer ‘**this’.**

### Method with arguments

```js
let name = {

firstName: "Rishabh",
```
lastName:"Sisodiya",

```js
}

let printFullName= function (hometown, state){

console.log(this.firstName+" "+this.lastName+" from "+hometown+", "+state);

}

printFullName.call(name, "Chittorgarh", "Rajasthan");

let name2 = {

firstName: "Any",
```
lastName:"Random",

```js
}
```
### //function borrowing

### printFullName.call(name2, "Udaipur", "Rajasthan");

### printFullName.apply(name2, \["Udaipur", "Rajasthan"\]);

### // bind method return a copy of method

### let printMyName= printFullName.bind(name2,"Udaipur", "Rajasthan" )

### printMyName();

Only difference between call and apply is how we pass arguments in them (In apply, we invoke the function and allow us to pass in arguments as an array while in call we pass arguments one by one) while bind returns a new copy of function and binds it which we can use later.

If we do not pass argos in array form to apply method then it will throw error:

### TypeError: CreateListFromArrayLike called on non-object
