---
title: "Algorithms & Big-O"
part: "JavaScript Notes"
track: "javascript"
kind: "notes"
updated: "2026-09-02"
source: "JavaScript Notes.docx"
draft: false
order: 19
description: "JavaScript — Algorithms & Big-O."
---
DSA

[https://www.geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial/](https://www.geeksforgeeks.org/learn-data-structures-with-javascript-dsa-tutorial/)

## What is an Algorithm?

Algorithm is a set of well defined instructions to solve a particular problem.

![](/notes-img/javascript-notes/img-039.webp)

**Time Complexity:** Measures the execution time of an algorithm.

**Space Complexity:** Measures the memory usage of an algorithm.

### Asymptotic notations

1\. Big-O Notation : Big-O represents the upper bound of an algorithm's growth rate. It gives the worst-case complexity of an algorithm.

**Example**: If f(n)=5n^2+3n+2, f(n) = then f(n) is O(n^2)

2\. Omega Notation: Omega represents the lower bound of an algorithm's growth rate. It gives the best-case complexity of an algorithm.

3\. Theta Notation: Theta provides a tight bound on an algorithm's growth rate. It describes both the upper and lower bounds of an algorithm's complexity.

## Big-O Notation

Big-O Time Complexity : Count the no of times a statement executed based on input size.

![](/notes-img/javascript-notes/img-040.webp)

Time complexity is O(n) - linear

![](/notes-img/javascript-notes/img-041.webp)

![](/notes-img/javascript-notes/img-042.webp)

Space complexity:

O(1)-Constant

O(n)-LInear

O(logn)- Logrithm

![](/notes-img/javascript-notes/img-043.webp)

### Big-O Time complexity of Object

### Operation

### Big-O Notation

| --- | ---
### Access by key

O(1)

| --- | ---
### Insert or update a key-value pair

O(1)

| --- | ---
### Delete by key

O(1)

| --- | ---
### Search for a key

O(n)

| --- | ---
### Iterate over keys/values, Object.key(), entries(), values()

O(n)

| --- | ---
### Check if a key exists

O(1)

| --- | ---
### Get all keys/values

O(n)

| --- | ---
### Big-O Time complexity of Array

### Array Method

### Big-O Notation

| --- | ---
### push (add to end)

O(1) (amortized)

| --- | ---
### pop (remove from end)

O(1)

| --- | ---
### shift (remove from start)

O(n)

| --- | ---
### unshift (add to start)

O(n)

| --- | ---
### splice (insert/remove)

O(n)

| --- | ---
### slice,concat,indexOf/includes,forEach/map/filter

### reverse,reduce,find/findIndex

O(n)

| --- | ---
### sort

O(nlog⁡n)

| --- | ---
### Print Fibonacci

```js
function fibonacci(n) {

let series = \[\]
```
if (n === 0) {

series.push(0)

} else {

series.push(0, 1)

```js
}

for (let i = 2; i < n; i++) {
```
series.push(series\[i - 1\] + series\[i - 2\])

```js
}

return series

}

console.log(fibonacci(7))
```

**Time Complexity**: O(n)

**Space Complexity**: O(n)

### Factorial

```js
function fact(n) {

let fact=1;

for (let i = 2; i <= n; i++) {

fact=fact\*i;

}

return fact;

}

console.log(fact(0))
```

**Time Complexity**: O(n) (due to the loop that runs n−1 times).

**Space Complexity**: O(1)(since the space usage is constant).

### Prime number

```js
function isPrime(n) {

if (n <= 1) return false;

if (n == 2) return true;

let isPrime=true;

for (let i = 2; i <= n/2; i++) {
```
if (n%i==0) {

```js
isPrime=false;

break;

}

}

return isPrime;

}

console.log(isPrime(4))
```

**Original Time Complexity**: O(n) (Due to loop till n/2)

**Optimized Time Complexity**: O(\\sqrt{n}) (Due to loop if we change to i <= Math.sqrt(n);)

**Space Complexity**: O(1) for both versions

### PowerOfTwo

```js
function isPowerOfTwo(number) {
```
// If the number is less than 1, it's not a power of two

if (number < 1) {

```js
return false;

}
```
// Keep dividing the number by 2 until it becomes 1

```js
while (number > 1) {
```
if (number % 2 !== 0) {

// If the remainder is not zero, it's not a power of two

```js
return false;

}

number /= 2;

}
```
// If the number becomes 1, it's a power of two

```js
return true;

}
```

**Time Complexity**: O(logn) The while loop runs as long as the number is greater than 1, and in each iteration, the number is divided by 2.

**Space Complexity**: O(1)

```js
function isPowerOfTwo(n) {

return n > 0 && (n & (n - 1)) === 0;

}

console.log(isPowerOfTwo(16)); // true

console.log(isPowerOfTwo(18)); // false
```

**Time Complexity**: O(1)

**Space Complexity**: O(1)

## Recursion

Recursion is when a function calls itself.

### Fibonacci

```js
function fibonacci(n) {
```
if (n<=1) {

```js
return n;

}

return fibonacci(n-1)+fibonacci(n-2)

}

console.log(fibonacci(7))
```

**Time Complexity**: O(2^n)

**Space Complexity**: O(n) This is due to the recursive call stack. At most, there are n recursive calls on the stack at any point

### Factorial

```js
function factorial(n) {
```
if (n==0) {

```js
return n;

}

return n\*factorial(n-1);

}

console.log(factorial(5))
```

Time Complexity: O(n)

Space complexity: O(n)

## Search Algorithms

### Linear search

### Pseudocode

-   Start at the first element in the array and move towards the last.
-   At each element though, check if the element is equal to the target element.
-   If element found, return the index of the element
-   If element not found, return -1

**Code:**

```js
function linearSearch(arr, target) {

for (let i = 0; i < arr.length; i++) {
```
if (arr\[i\] === target) {

return i; // Return the index if the target is found

```js
}

}
```
return -1; // Return -1 if the target is not found

```js
}

const arr = \[5, 3, 8, 4, 2\];

const target = 8;

console.log(linearSearch(arr, target)); // Output: 2
```

**Time Complexity: O(n)
Space Complexity: O(1)**

### Binary Search

It always uses a **sorted** array.

### Pseudocode

-   If the array is empty, return -1 as the element cannot be found.
-   If the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index.
-   If the target is less than the middle element, binary search leaves half of the array.
-   If the target is greater than the middle element, binary search right half of the array.

**Code:**

```js
function binarySearch(arr, target) {

let left = 0;

let right = arr.length - 1;

while (left <= right) {

const mid = Math.floor((left + right) / 2);
```
if (arr\[mid\] === target) {

```js
return mid; // Target found, return its index
```
} else if (arr\[mid\] < target) {

left = mid + 1; // Search in the right half

} else {

right = mid - 1; // Search in the left half

```js
}

}

return -1; // Target not found

}

const arr = \[2, 4, 6, 8, 10, 12\];

const target = 8;

console.log(binarySearch(arr, target)); // Output: 3
```

**Time Complexity: O(log n)
Space Complexity: O(1)**

```js
function recursiveBinarySearch(arr, target,left=0,right=arr.length-1) {
```
if (left>right) {

```js
return -1;

}

const mid = Math.floor((left + right) / 2);
```
if (arr\[mid\] === target) {

```js
return mid; // Target found, return its index
```
}else if (arr\[mid\] < target) {

left = mid + 1; // Search in the right half

} else {

right = mid - 1; // Search in the left half

```js
}

return recursiveBinarySearch(arr,target,left,right);

}

const arr = \[2, 4, 6, 8, 10, 12\];

const target = 8;

console.log(recursiveBinarySearch(arr, target)); // Output: 3
```

### Time Complexity: O(logn)

### Space Complexity: O(logn)

## Sorting Algorithm

### 1\. Bubble Sort

Bubble Sort repeatedly compares adjacent elements in the array and swaps them if they are in the wrong order. The largest elements "bubble" to the end of the array with each pass.

**Pseudo Code:**

1.  For each element in the array:
    -   Compare adjacent elements.
    -   Swap them if they are in the wrong order.
2.  Repeat the process until the array is sorted.![](/notes-img/javascript-notes/img-044.webp)

**Time Complexity:**

-   Best: O(n) (when the array is already sorted)
-   Worst/Average: O(n2)

**Space Complexity:** O(1)

**JavaScript Implementation:**

```js
function bubbleSort(arr) {

const n = arr.length;

for (let i = 0; i < n - 1; i++) {

let swapped = false;

for (let j = 0; j < n - i - 1; j++) {
```
if (arr\[j\] > arr\[j + 1\]) {

\[arr\[j\], arr\[j + 1\]\] = \[arr\[j + 1\], arr\[j\]\]; // Swap

```js
swapped = true;

}

}
```
if (!swapped) break; // Stop if no swaps in this pass

```js
}

return arr;

}
```
// Example Usage

```js
console.log(bubbleSort(\[64, 34, 25, 12, 22, 11, 90\]));
```

### 2\. Insertion Sort

Insertion Sort builds the sorted portion of the array one element at a time by comparing each element to the already sorted portion and inserting it into the correct position.

### Pseudo Code

1.  Start from the second element (key).
2.  Compare the key with elements in the sorted portion.
3.  Move larger elements one position to the right.
4.  Insert the key in the correct position.
5.  Repeat for all elements.

![](/notes-img/javascript-notes/img-045.webp)

**Time Complexity:**

-   Best: O(n) when the array is already sorted)
-   Worst/Average: O(n2)

**Space Complexity:** O(1)

### JavaScript Implementation

```js
function insertionSort(arr) {

for (let i = 1; i < arr.length; i++) {

let key = arr\[i\];

let j = i - 1;

while (j >= 0 && arr\[j\] > key) {
```
arr\[j + 1\] = arr\[j\]; // Shift element to the right

```js
j--;

}
```
arr\[j + 1\] = key; // Insert key into correct position

```js
}

return arr;

}
```
// Example Usage

```js
console.log(insertionSort(\[64, 34, 25, 12, 22, 11, 90\]));
```

### 3\. Quick Sort

Quick Sort is a divide-and-conquer algorithm. It selects a pivot, partitions the array into two halves (elements less than the pivot and elements greater than the pivot), and recursively sorts the partitions.

### Pseudo Code

1.  Pick a pivot (e.g., the last element).
2.  Partition the array into two parts:
    -   Elements less than the pivot.
    -   Elements greater than the pivot.
3.  Recursively apply the process to both partitions.
4.  Combine the sorted partitions.

**Time Complexity:**

-   Best/Average: O(nlog⁡n)
-   Worst: O(n2) (when the pivot is poorly chosen)

**Space Complexity:** O(log⁡n)(recursive call stack)

### JavaScript Implementation

```js
function quickSort(arr) {
```
if (arr.length <= 1) return arr; // Base case

const pivot = arr\[arr.length - 1\]; // Choose the last element as the pivot

```js
const left = \[\];

const right = \[\];

for (let i = 0; i < arr.length - 1; i++) {
```
if (arr\[i\] < pivot) {

```js
left.push(arr\[i\]);
```
} else {

```js
right.push(arr\[i\]);

}

}

return \[...quickSort(left), pivot, ...quickSort(right)\];

}
```
// Example Usage

```js
console.log(quickSort(\[64, 34, 25, 12, 22, 11, 90\]));
```

### 4\. Merge Sort

Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.

### Pseudo Code

1.  Divide the array into two halves.
2.  Recursively sort both halves.
3.  Merge the sorted halves into a single sorted array.

**Time Complexity:**

-   Best/Worst/Average: O(nlog⁡n)

**Space Complexity:** O(n)

### JavaScript Implementation

```js
function mergeSort(arr) {
```
if (arr.length <= 1) return arr; // Base case

```js
const mid = Math.floor(arr.length / 2);

const left = mergeSort(arr.slice(0, mid)); // Sort left half

const right = mergeSort(arr.slice(mid)); // Sort right half
```
return merge(left, right); // Merge the sorted halves

```js
}

function merge(left, right) {

const result = \[\];

let i = 0, j = 0;

while (i < left.length && j < right.length) {
```
if (left\[i\] < right\[j\]) {

```js
result.push(left\[i\]);

i++;
```
} else {

```js
result.push(right\[j\]);

j++;

}

}

return \[...result, ...left.slice(i), ...right.slice(j)\];

}
```
// Example Usage

```js
console.log(mergeSort(\[64, 34, 25, 12, 22, 11, 90\]));
```

### Comparison of Sorting Algorithms

### Algorithm

### Best Time Complexity

### Average Time Complexity

### Worst Time Complexity

### Space Complexity

| --- | --- | --- | --- | ---
Bubble Sort

O(n)

O(n2)

O(n2)

O(1)

| --- | --- | --- | --- | ---
Insertion Sort

O(n)

O(n2)

O(n2)

O(1)

| --- | --- | --- | --- | ---
Quick Sort

O(nlog⁡n)

O(nlog⁡n)

O(n2)

O(log⁡n)

| --- | --- | --- | --- | ---
Merge Sort

O(nlog⁡n)

O(nlog⁡n)

O(nlog⁡n)

O(n)

| --- | --- | --- | --- | ---
## Cartesian Products

```js
function cartesianProduct(arr1,arr2) {

let cartesianArr=\[\];

for (let i = 0; i < arr1.length; i++) {

for (let j = 0; j < arr2.length; j++) {

cartesianArr.push(\[arr1\[i\],arr2\[j\]\]);

}

}

return cartesianArr;

}

const arr1 =\[1,2\];

const arr2 =\[3,4\];

console.log(cartesianProduct(arr1,arr2));
```

Time Complexity: O(n×m)

Space Complexity: O(n×m)

## Climbing Staircase

![](/notes-img/javascript-notes/img-046.webp)

It looks like Fibonacci Series

```js
function climbStairs(n) {

if (n <= 1) return 1;

let prev1 = 1, prev2 = 1;

for (let i = 2; i <= n; i++) {

const current = prev1 + prev2;

prev2 = prev1;

prev1 = current;

}

return prev1;

}
```
// Example usage:

```js
console.log(climbStairs(5)); // Output: 8
```

## Tower of Hanoi

![](/notes-img/javascript-notes/img-047.webp)

The Tower of Hanoi is a classic recursive problem that involves moving disks from one rod to another while following specific rules.

### Problem Description

You have:

-   Three rods: Source (A), Helper (B), and Destination (C).
-   n disks of different sizes, all initially stacked on the Source (A) rod, with the largest disk at the bottom and the smallest at the top.

**Rules:**

-   Only one disk can be moved at a time.
-   A disk can only be placed on top of a larger disk (or on an empty rod).

```js
function towerOfHanoi(n, source, destination, helper) {
```
if (n === 1) {

```js
console.log(\`Move disk 1 from ${source} to ${destination}\`);

return;

}
```
// Step 1: Move n-1 disks from source to helper

```js
towerOfHanoi(n - 1, source, helper, destination);
```
// Step 2: Move the nth disk from source to destination

```js
console.log(\`Move disk ${n} from ${source} to ${destination}\`);
```
// Step 3: Move the n-1 disks from helper to destination

```js
towerOfHanoi(n - 1, helper, destination, source);

}
```
// Example usage

```js
const numDisks = 3;

towerOfHanoi(numDisks, 'A', 'C', 'B');
```

![](/notes-img/javascript-notes/img-048.webp)
