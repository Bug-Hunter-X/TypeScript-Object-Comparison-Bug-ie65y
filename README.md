# TypeScript Object Comparison Bug

This repository demonstrates a common bug in TypeScript when comparing objects: the function incorrectly handles objects with different key orders and fails to handle nested objects.

## Bug Description
The `compareObjects` function attempts to compare two objects for equality.  However, it fails when the objects have the same keys and values, but the keys are in a different order.  It also fails when dealing with nested objects.

## Solution
The solution uses JSON stringify to overcome the key order and nested object issues, allowing for a more robust comparison.

## How to Run
1. Clone this repository.
2. Run `tsc` to compile the TypeScript code.
3. Run `node bug.js` to see the bug in action.
4. Run `node bugSolution.js` to see the fixed version.