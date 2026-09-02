---
title: "Introduction to Redux"
part: "React Notes"
track: "react"
kind: "notes"
updated: "2026-09-02"
source: "React JS.docx"
draft: false
order: 29
description: "React — Introduction to Redux."
---
Redux is a predictable state container for JavaScript Apps. Let’s break this definition into following parts:

**Redux is for Javascript application:** Redux is not tied to React only we can use it with Angular, Vue or even vanilla js. It is a library for javascript applications.

**Redux is a state container:** Redux stores the state of your application.

**Redux is predictable:** In Redux, all state transitions are explicit and it is possible to keep track of them. The changes to your application’s state become predictable.

## Why we use Redux

-   **Predictability of outcome**
-   **Maintainability**
-   **Organization**: Redux is stricter about how code should be organized, which makes code more consistent and easier for a team to work with.
-   **Server rendering:** This is very useful, especially for the initial render, making for a better user experience or search engine optimization. Just pass the store created on the server to the client side.
-   **Developer tools:** Developers can track everything going on in the app in real time, from actions to state changes.
-   **Community and ecosystem:** This is a huge plus whenever you’re learning or using any library or framework. Having a community behind Redux makes it even more appealing to use.
-   **Ease of testing:** The first rule of writing testable code is to write small functions that do only one thing and that are independent. Redux’s code is mostly functions that are just that: small, pure and isolated.

**React-Redux is the official Redux UI binding library for React.**
