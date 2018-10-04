# Spreadsheet Savior

### Introduction
You've been sucked into a computer! In this foreign, virtual
landscape you see a glowing humanoid shape yelling in your
direction. "HEY You! Your state seems to be idle. Come help us
repair the corruption in this spreadsheet - if we don't hurry,
we'll have to display a pinwheel cursor!"

### Problem Statement
The spreadsheet consists of rows of seemingly-random numbers. To make sure the recovery process is on the right track, they need
you to calculate the spreadsheet's **checksum**.

For each row, determine the difference between the largest value and the smallest
value; **the checksum is the sum of all of these differences**.

### Example
Here's an example of a spreadsheet:

```js
var data = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]
```

* The first row's largest and smallest values are 2 and 8, their difference is 6.
* The second row's largest and smallest values are 0 and 3, their difference is 3.
* The third row's difference is 7.

In this example, the spreadsheet's checksum would be `6 + 3 + 7 = 16`.

Create a function to find the checksum of the following.

```js
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
```
