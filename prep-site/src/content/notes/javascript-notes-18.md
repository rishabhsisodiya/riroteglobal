---
title: "Async vs defer"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 18
description: "JavaScript — Async vs defer."
---
### Normal scenario

`<script src=” ” />`

![](/notes-img/javascript-notes/img-036.webp)

During the normal scenario, When the html page load in the browser then it will do html parsing line by line but when the script tag comes it will start fetching javascript file and execute the file then it will again continue with html parsing. So javascript files are blocking the rendering of html.

### Async attribute in script tag

`<script **async** src=” ” />`

![](/notes-img/javascript-notes/img-037.webp)

In this case, script will fetch asynchronously along with html parsing and once script is loaded completely it will execute js file immediately during that time html parsing will be on hold and once js code executed it will continue with html parsing.

### defer attribute in script tag

`<script **defer** src=” ” />`

![](/notes-img/javascript-notes/img-038.webp)

In this case, script will fetch asynchronously along with html parsing but here it will complete html parsing then script execution will take place.

### Which one we should use

**Multiple script tags are used and scripts have dependency on each other then we prefer defer**: if we use async then it will not guarantee the order of execution so it will break code execution. **Multiple script tag are used but scripts are independent and don’t have dependency on each other then we can use async**:
