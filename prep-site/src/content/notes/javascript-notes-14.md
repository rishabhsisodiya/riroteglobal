---
title: "Throttling vs Debouncing"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 14
description: "JavaScript — Throttling vs Debouncing."
---
Debouncing and throttling techniques are used to limit the number of times a function can execute.

**Throttling** is a technique in which, no matter how many times the user fires the event, the attached **function will be executed only once in a given time interval.**

In the **debouncing** technique, no matter how many times the user fires the event, the attached **function will be executed only after the specified time once the user stops firing the event.**

**When typing from "q" to "m" in the search box, the following output will be generated, considering a delay or limit of 2 seconds.**

```js
Throttle:
```
![](/notes-img/JavaScript-notes/img-031.webp)

```js
function executed after every 2 sec.

Debounce:
```
![](/notes-img/JavaScript-notes/img-032.webp)

function executed when the user stopped typing for 2 sec.

1) **Search bar:**

**Debouncing:** we search school bags in the search bar so in debouncing, the function will wait for a certain time between each keystroke like s c h o o l b a g s. So if the time between l and b is more than delay then our function will call and will get results for school. Suppose if the time between 0 and l is more than delay then our function will be called and get results for schoo and then school bags and then school bags in the next api call. **(more controlled over calling function, So function will be called only when we take more time than specified time delay between two events)**

**Throttling:** if we search school bags in throttling, the function will call at first keystroke only and the user has to wait for a delay to complete then again our function will be called. Let's say 300ms is delay we have given to our function so let's say we typed s then our function will be called and we will get results for s and then after 300ms again our function will be called so if we already typed school bags then we will get results for school bags otherwise whatever we have typed in search bar during that time, we will get results for that. **(Function calling time is fixed so after every time interval function will be called, It doesn’t depend on events)**

**So in case of search bar debouncing is more suitable than throttling.**

### ![](/notes-img/JavaScript-notes/img-033.webp)

You can check when we have used both the debounce and throttle function on the input box. We have noticed that when we use first input box (debounce) for typing school bag, function got called only 3 times as we have kept delay of 300 ms but when we used second one then the function got called more than 3 times as there was limit of 300ms that means function will be called only once in interval of 300ms

2)**Resizing the browser’s window:**

**Debouncing:** Suppose the user resizes very fast, sometimes the user resizes very slow. Suppose we have a set method for 100ms so when the user resizes very slowly then our function will be called else it will not be called.

**Throttling:** Here our function will be called the moment the user resizes no matter if it is fast or slow and the next function will be called after a certain time limit only.

### So here Throttling is more suitable

### 3) Shooting Game Button

**Throttling is more suitable** as we need to wait for very small time lets say 100-200ms for our next shot and during that small time we will ignore all button click events
