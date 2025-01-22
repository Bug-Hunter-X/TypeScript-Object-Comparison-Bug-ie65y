function compareObjects(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };
const obj4 = { a: 1, b: 2, c: 3 };
const obj5 = { b: 2, a: 1 };
const obj6 = null;
const obj7 = undefined;
const obj8 = {a: 1, b: {c: 3}};
const obj9 = {a: 1, b: {c: 3}};

console.log(compareObjects(obj1, obj2)); // true
console.log(compareObjects(obj1, obj3)); // false
console.log(compareObjects(obj1, obj4)); // false
console.log(compareObjects(obj1, obj5)); // true
console.log(compareObjects(obj6, obj7)); // false
console.log(compareObjects(obj1, obj6)); // false
console.log(compareObjects(obj8, obj9)); // true