---
title: "Data Structure"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 20
description: "JavaScript — Data Structure."
---
A data structure is a systematic way to organize, manage, and store data in a computer so that it can be accessed and modified efficiently. It provides a framework for solving problems by organizing data logically and enabling efficient operations such as insertion, deletion, searching, and sorting.

Data structures can be linear (e.g., arrays, linked lists) or non-linear (e.g., trees, graphs), and are implemented using programming constructs like classes, objects, or arrays.

## Array

-   An array is a data structure that can hold a collection of values
-   Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array.
-   Arrays are resizable. You don't have to declare the size of an array before creating it.
-   JavaScript arrays are zero-indexed and the insertion order is maintained.
-   Arrays are iterables. They can be used with a for of loop

## Object

-   An object is an unordered collection of key-value palm.
-   The key must either be a string or symbol data type whereas the value can be of any data type.
-   To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation
-   An object is not an iterable. You cannot use it with a for of loop

## Set

-   A set is a data structure that can hold a collection of values. The values however must be unique.
-   Set can contain a mix of different data types. You can store strings, beeleans, numbers or even objects all in the same set.
-   Sets are dynamically sized. You don't have to declare the size of a set before creating it
-   Sets do not maintain an insertion order
-   Sets are iterables. They can be used with a for of loop

```js
const mySet = new Set(\[1, 2, 3, 3, 4\]);

console.log(mySet); // Output: Set { 1, 2, 3, 4 }

mySet.add(5);

console.log(mySet); // Output: Set { 1, 2, 3, 4, 5 }

console.log(mySet.has(3)); // Output: true

mySet.delete(3);

console.log(mySet); // Output: Set { 1, 2, 4, 5 }

for (let value of mySet) {

console.log(value);

}
```

## Map

-   A map is an unordered collection of key-value pairs. Both keys and values can be of any data type
-   To retrieve a value, you can use the corresponding key
-   Maps are iterables. They can be used with a for of loop

### Objevt vs Map

-   Objects are unordered whereas maps are ordered
-   Keys in objects can only be string or symbol type whereas in maps, they can be of any type
-   An object has a prototype end may contain a few default keys which may collide with your own keys If you're not careful. A map on the other hand does not contain any keys by default.
-   Objects are not Iterables as where as maps are Iterables
-   The number of items in an object must be determined manually where as it is readily available with the size property in a map
-   Apart from storing data you can attach functionality to an object whereas maps are restricted to just storing data

```js
const myMap = new Map();

myMap.set('name', 'John');

myMap.set(1, 'One');

myMap.set(true, 'Boolean Value');

console.log(myMap); // Map { 'name' => 'John', 1 => 'One', true => 'Boolean Value' }

console.log(myMap.get('name')); // Output: 'John'

console.log(myMap.get(1)); // Output: 'One'

console.log(myMap.has('name')); // Output: true

console.log(myMap.has('age')); // Output: false

myMap.delete(1);

console.log(myMap); // Map { 'name' => 'John', true => 'Boolean Value' }

console.log(myMap.size); // Output: 2

myMap.clear();

console.log(myMap); // Output: Map {}
```

## Stack

-   The stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO)
-   The last element inserted into the stack is the first element to be removed.
-   A stack of plates placed on top of the stack is also the first plate.
-   Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.
-   The Stack data structure supports two main operations
    -   Push, which adds an element to the collection
    -   Pop, which removes the most recently added element from the collection

### Stack using array

```js
class Stack {

constructor() {
```
this.items = \[\]; // Array to store stack elements

```js
}
```
// Add an element to the stack

push(element) {

```js
this.items.push(element);

}
```
// Remove and return the top element

pop() {

if (this.isEmpty()) {

```js
return "Stack is empty";

}

return this.items.pop();

}
```
// Return the top element without removing it

peek() {

if (this.isEmpty()) {

```js
return "Stack is empty";

}

return this.items\[this.items.length - 1\];

}
```
// Check if the stack is empty

isEmpty() {

```js
return this.items.length === 0;

}
```
// Return the size of the stack

size() {

```js
return this.items.length;

}
```
// Print all elements in the stack

print() {

```js
console.log(this.items.join(" "));

}

}
```
// Usage

```js
const stack = new Stack();
```
// Push elements

```js
stack.push(10);

stack.push(20);

stack.push(30);
```
stack.print(); // Output: 10 20 30

// Peek the top element

```js
console.log(stack.peek()); // Output: 30
```
// Pop an element

```js
console.log(stack.pop()); // Output: 30
```
stack.print(); // Output: 10 20

// Check size

```js
console.log(stack.size()); // Output: 2
```
// Check if stack is empty

```js
console.log(stack.isEmpty()); // Output: false
```

### Stack using object

```js
class Stack {

constructor() {

this.items = {};

this.head = 0;

}
```
push(element) {

```js
this.items\[this.head\] = element;

this.head++;

}
```
pop() {

```js
const item = this.items\[this.head - 1\];

delete this.items\[this.head - 1\];

this.head--;

return item;

}
```
peek() {

```js
return this.items\[this.head - 1\];

}
```
size() {

```js
return this.head;

}
```
isEmpty() {

```js
return this.head === 0;

}
```
print() {

```js
console.log(this.items);

}

}
```

## Queue

A **queue** is a linear data structure that follows the **First-In-First-Out (FIFO)** principle. This means the first element inserted into the queue is the first one to be removed. It is often used to model real-world scenarios where elements arrive and leave in a sequential order, such as people queuing in a line.

**Key Features of a Queue:**

1.  **Abstract Data Type (ADT)**: The queue is defined by its behavior, not its implementation.
2.  **Two Main Operations**:
    -   **Enqueue**: Adds an element to the rear (tail) of the queue.
    -   **Dequeue**: Removes an element from the front (head) of the queue.

**Queue Characteristics:**

-   Elements are added at one end, called the **rear** or **tail**.
-   Elements are removed from the other end, called the **front** or **head**.
-   Ensures the order of processing, making it ideal for scheduling tasks.

**Applications of Queue:**

-   Managing tasks in operating systems (e.g., CPU scheduling, I/O buffers).
-   Real-world queue systems (e.g., ticket booking, order processing).
-   Network packets buffering.
-   Breadth-First Search (BFS) in graph algorithms.

### Queue using Array

```js
class Queue {

constructor() {

this.items = \[\];

}
```
enqueue(element) {

```js
this.items.push(element);

}
```
dequeue() {

```js
return this.items.shift();

}
```
peek() {

if (!this.isEmpty()) {

```js
return this.items\[0\];

}

return null;

}
```
isEmpty() {

```js
return this.items.length === 0;

}
```
size() {

```js
return this.items.length;

}
```
print() {

```js
console.log(this.items.toString());

}

}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);

queue.enqueue(20);

queue.enqueue(30);

console.log(queue.size());

queue.print();

console.log(queue.dequeue());

console.log(queue.peek());

queue.print();
```

### Queue using Object (Optimized)

Since we are using shift() inbuilt method for dequeue and which is linear time complexity we are using object for implementation

```js
class Queue {

constructor() {

this.items = {};

this.front = 0;

this.rear = 0;

}
```
enqueue(element) {

```js
this.items\[this.rear\] = element;

this.rear++;

}
```
dequeue() {

```js
const item = this.items\[this.front\];

delete this.items\[this.front\];

this.front++;

return item;

}
```
peek() {

```js
return this.items\[this.front\];

}
```
size() {

```js
return this.rear - this.front;

}
```
isEmpty() {

```js
return this.rear - this.front === 0;

}
```
print() {

```js
console.log(this.items);

}

}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);

queue.enqueue(20);

queue.enqueue(30);

console.log(queue.size());

queue.print();

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.isEmpty());

queue.print();
```

### Circular Queue

-   The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
-   Also referred to as circular buffer or ring buffer and follows the FIFO principle.
-   A circular queue will reuse the empty block created during the dequeue operation
-   When working with queues of fixed maximum size, a circular queue is a great implementation choice
-   The Circular Queue data structure supports two main operations
    -   Enqueue, which adds an element to the rear/tail of the collection
    -   Dequeue, which removes an element from the front/head of the collection

**Usage**:

-   -   Clock
    -   streaming data
    -   Traffic lights

```js
class CircularQueue {

constructor(capacity) {

this.items = new Array(capacity);

this.rear = -1;

this.front = -1;

this.currentLength = 0;

this.capacity = capacity;

}
```
isFull() {

```js
return this.currentLength === this.capacity;

}
```
isEmpty() {

```js
return this.currentLength === 0;

}
```
size() {

```js
return this.currentLength;

}
```
enqueue(item) {

if (!this.isFull()) {

```js
this.rear = (this.rear + 1) % this.capacity;

this.items\[this.rear\] = item;

this.currentLength += 1;
```
if (this.front === -1) {

```js
this.front = this.rear;

}

}

}
```
dequeue() {

if (this.isEmpty()) {

```js
return null;

}

const item = this.items\[this.front\];

this.items\[this.front\] = null;

this.front = (this.front + 1) % this.capacity;

this.currentLength -= 1;
```
if (this.isEmpty()) {

```js
this.front = -1;

this.rear = -1;

}

return item;

}
```
peek() {

if (!this.isEmpty()) {

```js
return this.items\[this.front\];

}

return null;

}
```
print() {

if (this.isEmpty()) {

```js
console.log("Queue is empty");
```
} else {

```js
let i;

let str = "";
```
for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {

```js
str += this.items\[i\] + " ";

}

str += this.items\[i\];

console.log(str);

}

}

}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(10);

queue.enqueue(20);

queue.enqueue(30);

queue.enqueue(40);

queue.enqueue(50);

console.log(queue.size());

queue.print();

console.log(queue.isFull());

console.log(queue.dequeue());

console.log(queue.peek());

queue.print();

queue.enqueue(60);

queue.print();
```

## Linked List

-   A linked list is a linear data structure that includes a series of connected nodes
-   Each node consists of a data value and a pointer that points to the next node
-   The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
-   Random access of elements is not feasible and accessing an element has linear time complexity
-   The linked list data structure supports three main operations
    -   Insertion - to add an element at the beginning, end or at a given index in the list
    -   Deletion - to remove an item given its index or value
    -   Search - to find an element given its value
Usage

All applications of stack and queue are applications of Linked List as well.

### LinkedList with head

```js
class Node {

constructor(value) {

this.value = value;

this.next = null;

}

}

class LinkedList {

constructor() {

this.head = null;

this.size = 0;

}
```
isEmpty() {

```js
return this.size === 0;

}
```
getSize() {

```js
return this.size;

}
```
prepend(value) {

```js
const node = new Node(value);
```
if (this.isEmpty()) {

```js
this.head = node;
```
} else {

```js
node.next = this.head;

this.head = node;

}

this.size++;

}

append(value) {

const node = new Node(value);
```
if (this.isEmpty()) {

```js
this.head = node;
```
} else {

```js
let curr = this.head;

while (curr.next) {

curr = curr.next;

}

curr.next = node;

}

this.size++;

}
```
insert(value, index) {

if (index < 0 || index > this.size) {

```js
return;

}
```
if (index === 0) {

```js
this.prepend(value);
```
} else {

```js
const node = new Node(value);

let prev = this.head;

for (let i = 0; i < index - 1; i++) {

prev = prev.next;

}

node.next = prev.next;

prev.next = node;

this.size++;

}

}
```
removeFrom(index) {

if (index < 0 || index >= this.size) {

```js
return null;

}

let removedNode;
```
if (index === 0) {

```js
removedNode = this.head;

this.head = this.head.next;
```
} else {

```js
let prev = this.head;

for (let i = 0; i < index - 1; i++) {

prev = prev.next;

}

removedNode = prev.next;

prev.next = removedNode.next;

}

this.size--;

return removedNode.value;

}
```
removeValue(value) {

if (this.isEmpty()) {

```js
return null;

}
```
if (this.head.value === value) {

```js
this.head = this.head.next;

this.size--;

return value;
```
} else {

```js
let prev = this.head;

while (prev.next && prev.next.value !== value) {

prev = prev.next;

}
```
if (prev.next) {

```js
removedNode = prev.next;

prev.next = removedNode.next;

this.size--;

return value;

}

return null;

}

}
```
search(value) {

if (this.isEmpty()) {

```js
return -1;

}

let i = 0;

let curr = this.head;

while (curr) {
```
if (curr.value === value) {

```js
return i;

}

curr = curr.next;

i++;

}

return -1;

}
```
reverse() {

```js
let prev = null;

let curr = this.head;

while (curr) {

let next = curr.next;

curr.next = prev;

prev = curr;

curr = next;

}

this.head = prev;

}
```
print() {

if (this.isEmpty()) {

```js
console.log("List is empty");
```
} else {

```js
let curr = this.head;

let list = "";

while (curr) {

list += \`${curr.value}->\`;

curr = curr.next;

}

console.log(list);

}

}

}

const l = new LinkedList();

console.log(l.isEmpty());

l.append(50);

l.prepend(20);

l.append(80);

l.insert(60, 2);

console.log(l.getSize());

l.print();

l.reverse();

l.print();

console.log(l.search(60));

l.removeFrom(4);

console.log(l.getSize());

l.print();

l.removeValue(80);

l.print();

console.log(l.getSize());

l.print();
```

### Linked List with Tail and head

```js
class Node {

constructor(value) {

this.value = value;

this.next = null;

}

}

class LinkedList {

constructor() {

this.head = null;

this.tail = null;

this.size = 0;

}
```
isEmpty() {

```js
return this.size === 0;

}
```
getSize() {

```js
return this.size;

}
```
prepend(value) {

```js
const node = new Node(value);
```
if (this.isEmpty()) {

```js
this.head = node;

this.tail = node;
```
} else {

```js
node.next = this.head;

this.head = node;

}

this.size++;

}

append(value) {

const node = new Node(value);
```
if (this.isEmpty()) {

```js
this.head = node;

this.tail = node;
```
} else {

```js
this.tail.next = node;

this.tail = node;

}

this.size++;

}
```
removeFromFront() {

if (this.isEmpty()) {

```js
return null;

}

const value = this.head.value;

this.head = this.head.next;

this.size--;

return value;

}
```
removeFromEnd() {

if (this.isEmpty()) {

```js
return null;

}

const value = this.tail.value;
```
if (this.size === 1) {

```js
this.head = null;

this.tail = null;
```
} else {

```js
let prev = this.head;

while (prev.next !== this.tail) {

prev = prev.next;

}

prev.next = null;

this.tail = prev;

}

this.size--;

return value;

}
```
reverse() {

```js
let current = this.head;

let prev = null;

let next = null;

while (current) {

next = current.next;

current.next = prev;

prev = current;

current = next;

}

this.tail = this.head;

this.head = prev;

}
```
print() {

if (this.isEmpty()) {

```js
console.log("List is empty");
```
} else {

```js
let curr = this.head;

let list = "";

while (curr) {

list += \`${curr.value}->\`;

curr = curr.next;

}

console.log(list);

}

}

}

const list = new LinkedList();

list.append(1);

list.append(2);

list.append(3);

list.prepend(0);

list.print();

console.log(list.getSize());

list.removeFromFront();

list.print();

list.removeFromEnd();

list.print();
```

## Stack using Linked List

Stack follows LIFO so here we are adding in the beginning (prepend) of the linked list.Suppose we have 3 nodes which have values 10->20->30. We are adding 5 in the beginning so the new LinkedList will be 5->10->20->30. So here the last node added is 5 so when we remove we need to remove nodes from the beginning (remove from front)

```js
const LinkedList = require("./linked-list-tail");

class LinkedListStack {

constructor() {

this.list = new LinkedList();

}
```
push(value) {

```js
this.list.prepend(value);

}
```
pop() {

```js
return this.list.removeFromFront();

}
```
peek() {

```js
return this.list.head.value;

}
```
isEmpty() {

```js
return this.list.isEmpty();

}
```
getSize() {

```js
return this.list.getSize();

}
```
print() {

```js
return this.list.print();

}

}

const stack = new LinkedListStack();

console.log(stack.isEmpty());

stack.push(20);

stack.push(10);

stack.push(30);

console.log(stack.getSize());

stack.print();

console.log(stack.pop());

stack.print();

console.log(stack.peek());
```

## Queue using linkedList

Queue follows FIFO so here we are adding in the end (append) of the linked list.Suppose we have 3 nodes which have values 10->20->30. We are adding 40 in the end so the new LinkedList will be 10->20->30->40. So here the last node added is 40 and first node is 10 so when we remove we need to remove nodes from the beginning (remove from front)

```js
const LinkedList = require("./linked-list-tail");

class LinkedListQueue {

constructor() {

this.list = new LinkedList();

}
```
enqueue(value) {

```js
this.list.append(value);

}
```
dequeue() {

```js
return this.list.removeFromFront();

}
```
peek() {

```js
return this.list.head.value;

}
```
isEmpty() {

```js
return this.list.isEmpty();

}
```
getSize() {

```js
return this.list.getSize();

}
```
print() {

```js
return this.list.print();

}

}

const queue = new LinkedListQueue();

console.log(queue.isEmpty());

queue.enqueue(10);

queue.enqueue(20);

queue.enqueue(30);

console.log(queue.getSize());

queue.print();

console.log(queue.dequeue());

queue.print();

console.log(queue.peek());
```

## Doubly Linked List

![](/notes-img/javascript-notes/img-049.webp)

We have next and prev pointers in the node.

```js
class Node {

constructor(value) {

this.value = value;

this.prev = null;

this.next = null;

}

}

class DoublyLinkedList {

constructor() {

this.head = null;

this.tail = null;

this.size = 0;

}
```
isEmpty() {

```js
return this.size === 0;

}
```
getSize() {

```js
return this.size;

}
```
prepend(value) {

```js
const node = new Node(value);
```
if (this.isEmpty()) {

```js
this.head = node;

this.tail = node;
```
} else {

```js
node.next = this.head;

this.head.prev = node;

this.head = node;

}

this.size++;

}

append(value) {

const node = new Node(value);
```
if (this.isEmpty()) {

```js
this.head = node;

this.tail = node;
```
} else {

```js
this.tail.next = node;

node.prev = this.tail;

this.tail = node;

}

this.size++;

}
```
removeFromFront() {

if (this.isEmpty()) {

```js
return null;

}

const value = this.head.value;

this.head = this.head.next;

this.size--;

return value;

}
```
removeFromEnd() {

if (this.isEmpty()) {

```js
return null;

}

const value = this.tail.value;
```
if (this.size === 1) {

```js
this.head = null;

this.tail = null;
```
} else {

```js
this.tail = this.tail.prev;

this.tail.next = null;

}

this.size--;

return value;

}
```
print() {

if (this.isEmpty()) {

```js
console.log("List is empty");
```
} else {

```js
let curr = this.head;

let list = "";

while (curr) {

list += \`${curr.value}<->\`;

curr = curr.next;

}

console.log(list);

}

}
```
printReverse() {

if (this.isEmpty()) {

```js
console.log("List is empty");
```
} else {

```js
let curr = this.tail;

let list = "";

while (curr) {

list += \`${curr.value}<->\`;

curr = curr.prev;

}

console.log(list);

}

}

}

const list = new DoublyLinkedList();

list.append(1);

list.append(2);

list.append(3);

list.prepend(0);

list.print();

list.printReverse();

list.removeFromEnd();

list.print();

list.removeFromFront();

list.print();
```

## Hash Table

-   A hash table, also known as hash map, is a data structure that is used to store key-value pairs
-   Given a key, you can associate a value with that key for very fast lookup
-   JavaScript's Object is a special implementation of the hash table data structure. However, the Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties

Usage:

-   Database indexing
-   caches

### Implementation

```js
class HashTable {

constructor(size) {

this.table = new Array(size);

this.size = size;

}
```
hash(key) {

```js
let total = 0;

for (let i = 0; i < key.length; i++) {

total += key.charCodeAt(i);

}

return total % this.size;

}
```
set(key, value) {

```js
const index = this.hash(key);

const bucket = this.table\[index\];
```
// handle collision

if (!bucket) {

```js
this.table\[index\] = \[\[key, value\]\];
```
} else {

```js
const sameKeyItem = bucket.find((item) => item\[0\] === key);
```
if (sameKeyItem) {

```js
sameKeyItem\[1\] = value;
```
} else {

```js
bucket.push(\[key, value\]);

}

}

}
```
get(key) {

```js
const index = this.hash(key);

const bucket = this.table\[index\];
```
// handle collision

if (bucket) {

```js
const sameKeyItem = bucket.find((item) => item\[0\] === key);
```
if (sameKeyItem) {

```js
return sameKeyItem\[1\];

}

}

return undefined;

}
```
remove(key) {

```js
let index = this.hash(key);

const bucket = this.table\[index\];
```
if (bucket) {

```js
const sameKeyItem = bucket.find((item) => item\[0\] === key);
```
if (sameKeyItem) {

```js
bucket.splice(bucket.indexOf(sameKeyItem), 1);

}

}

}
```
display() {

for (let i = 0; i < this.table.length; i++) {

if (this.table\[i\]) {

```js
console.log(i, this.table\[i\]);

}

}

}

}

const table = new HashTable(10);

table.set("name", "Bruce");

table.set("age", 25);

table.display();

console.log(table.get("name"));

table.set("mane", "Clark");

table.set("name", "Diana");

console.log(table.get("mane"));

table.remove("name");

table.display();
```

![](/notes-img/javascript-notes/img-050.webp)![](/notes-img/javascript-notes/img-051.webp)

You can see here if we do not use that extra code in the set method then we will override the values in the hashtable as the key is converted to integer index respective to character length. So the key with the same length will have an override value. This is called collision and it is handled by extra code.

Before handling collision

![](/notes-img/javascript-notes/img-052.webp)

After handling a collision.

We are saving the array instead of overriding the value at index.

![](/notes-img/javascript-notes/img-053.webp)

## Tree

-   A tree is a hierarchical data structure that consists of nodes connected by edges.
-   A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
-   In linear data structures, the time required to search is proportional to the size of the data set.
-   Trees however, owing to the nonlinear nature allow quicker and easier access to the data
-   A tree will not contain any loops or cycles.

Usage:

1.  DOM
2.  File system

**Why is Tree considered a non-linear data structure?**

The data in a tree are not stored in a sequential manner i.e., they are not stored linearly. Instead, they are arranged on multiple levels or we can say it is a hierarchical structure. For this reason, the tree is considered to be a non-linear data structure.

### Tree Terminology

1.  **Parent Node:** The node which is an immediate predecessor of a node is called the parent node of that node. {B} is the parent node of {D, E}.
2.  **Child Node:** The node which is the immediate successor of a node is called the child node of that node. Examples: {D, E} are the child nodes of {B}.
3.  **Root Node:** The topmost node of a tree or the node which does not have any parent node is called the root node. {A} is the root node of the tree. A non-empty tree must contain exactly one root node and exactly one path from the root to all other nodes of the tree.
4.  **Leaf Node or External Node:** The nodes which do not have any child nodes are called leaf nodes. {I, J, K, F, G, H} are the leaf nodes of the tree.
5.  **Ancestor of a Node:** Any predecessor nodes on the path of the root to that node are called Ancestors of that node. {A,B} are the ancestor nodes of the node {E}
6.  **Descendant:** A node x is a descendant of another node y if and only if y is an ancestor of x.
7.  **Sibling**: Children of the same parent node are called siblings. {D,E} are called siblings.
8.  **Level of a node:** The count of edges on the path from the root node to that node. The root node has level 0.
9.  **Internal node:** A node with at least one child is called Internal Node.
10.  **Neighbour of a Node:** Parent or child nodes of that node are called neighbors of that node.
11.  **Subtree**: Any node of the tree along with its descendant.

### ![](/notes-img/javascript-notes/img-054.webp)

**BInary Tree**: In a binary tree, each node can have a maximum of two children linked to it.

**Binary Search Tree:**

-   The value of each left node must be smaller than the parent node.
-   The value of each right node must be greater than the parent node.

**Binary Search Tree Usage:**

1.  Searching
2.  Sorting
3.  To implement abstract data type such as lookup tables and priority queue.

### Implementation

```js
class Node {

constructor(value) {

this.value = value;

this.left = null;

this.right = null;

}

}

class BinarySearchTree {

constructor() {

this.root = null;

}
```
isEmpty() {

```js
return this.root === null;

}
```
insert(value) {

```js
const newNode = new Node(value);
```
if (this.isEmpty()) {

```js
this.root = newNode;
```
} else {

```js
this.insertNode(this.root, newNode);

}

}
```
insertNode(root, newNode) {

if (newNode.value < root.value) {

if (root.left === null) {

```js
root.left = newNode;
```
} else {

```js
this.insertNode(root.left, newNode);

}
```
} else {

if (root.right === null) {

```js
root.right = newNode;
```
} else {

```js
this.insertNode(root.right, newNode);

}

}

}
```
search(root, value) {

if (!root) {

```js
return false;

}
```
if (root.value === value) {

```js
return true;
```
} else if (value < root.value) {

```js
return this.search(root.left, value);
```
} else {

```js
return this.search(root.right, value);

}

}
```
min(root) {

if (!root.left) {

```js
return root.value;
```
} else {

```js
return this.min(root.left);

}

}
```
max(root) {

if (!root.right) {

```js
return root.value;
```
} else {

```js
return this.max(root.right);

}

}
```
delete(value) {

```js
this.root = this.deleteNode(this.root, value);

}
```
deleteNode(root, value) {

if (root === null) {

```js
return root;

}
```
if (value < root.value) {

```js
root.left = this.deleteNode(root.left, value);
```
} else if (value > root.value) {

```js
root.right = this.deleteNode(root.right, value);
```
} else {

if (!root.left && !root.right) {

```js
return null;

}
```
if (!root.left) {

```js
return root.right;
```
} else if (!root.right) {

```js
return root.left;

}

root.value = this.min(root.right);

root.right = this.deleteNode(root.right, root.value);

}

return root;

}
```
inOrder(root) {

if (root) {

```js
this.inOrder(root.left);

console.log(root.value);

this.inOrder(root.right);

}

}
```
preOrder(root) {

if (root) {

```js
console.log(root.value);

this.preOrder(root.left);

this.preOrder(root.right);

}

}
```
postOrder(root) {

if (root) {

```js
this.postOrder(root.left);

this.postOrder(root.right);

console.log(root.value);

}

}
```
levelOrder() {

/\*\* Use the optimised queue enqueue and dequeue from queue-object.js instead.

\* I've used an array for simplicity. \*/

```js
const queue = \[\];

queue.push(this.root);

while (queue.length) {

let curr = queue.shift();

console.log(curr.value);
```
if (curr.left) {

```js
queue.push(curr.left);

}
```
if (curr.right) {

```js
queue.push(curr.right);

}

}

}
```
height(node) {

if (!node) {

```js
return 0;
```
} else {

```js
const leftHeight = this.height(node.left);

const rightHeight = this.height(node.right);

return Math.max(leftHeight, rightHeight) + 1;

}

}
```
printLevel(node, level) {

if (!node) {

```js
return;

}
```
if (level === 1) {

```js
console.log(\`${node.element} \`);
```
} else if (level > 1) {

```js
this.printLevel(node.left, level - 1);

this.printLevel(node.right, level - 1);

}

}
```
isBST(node, min, max) {

if (!node) {

```js
return true;

}
```
if (node.value < min || node.value > max) {

```js
return false;

}

return (
```
this.isBST(node.left, min, node.value) &&

this.isBST(node.right, node.value, max)

```js
);

}

}
```
// TODO level order and delete

```js
const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);

bst.insert(5);

bst.insert(15);

bst.insert(3);

bst.insert(7);

bst.insert(13);

bst.insert(17);

bst.insert(2);

console.log(bst.search(bst.root, 10));

console.log(bst.search(bst.root, 7));

bst.inOrder();

bst.preOrder();

bst.postOrder();

bst.levelOrder();

bst.printLevel(bst.root, 3);

console.log(bst.min());

console.log(bst.max());

console.log(bst.height(bst.root));
```

## Graph

```js
class Graph {

constructor() {

this.adjacencyList = {};

}
```
addVertex(vertex) {

if (!this.adjacencyList\[vertex\]) {

```js
this.adjacencyList\[vertex\] = new Set();

}

}
```
addEdge(vertex1, vertex2) {

if (!this.adjacencyList\[vertex1\]) {

```js
this.addVertex(vertex1);

}
```
if (!this.adjacencyList\[vertex2\]) {

```js
this.addVertex(vertex2);

}

this.adjacencyList\[vertex1\].add(vertex2);

this.adjacencyList\[vertex2\].add(vertex1);

}
```
removeEdge(vertex1, vertex2) {

```js
this.adjacencyList\[vertex1\].delete(vertex2);

this.adjacencyList\[vertex2\].delete(vertex1);

}
```
removeVertex(vertex) {

if (!this.adjacencyList\[vertex\]) {

```js
return;

}

for (let adjacentVertex of this.adjacencyList\[vertex\]) {

this.removeEdge(vertex, adjacentVertex);

}

delete this.adjacencyList\[vertex\];

}
```
hasEdge(vertex1, vertex2) {

```js
return (
```
this.adjacencyList\[vertex1\].has(vertex2) &&

this.adjacencyList\[vertex2\].has(vertex1)

```js
);

}
```
display() {

```js
for (let vertex in this.adjacencyList) {

console.log(vertex + " -> " + \[...this.adjacencyList\[vertex\]\]);

}

}

}

const graph = new Graph();

graph.addVertex("A");

graph.addVertex("B");

graph.addVertex("C");

graph.addEdge("A", "B");

graph.addEdge("A", "C");

graph.addEdge("B", "C");

graph.display();

graph.removeEdge("A", "B");

graph.display();

graph.removeVertex("A");

graph.display();
```
