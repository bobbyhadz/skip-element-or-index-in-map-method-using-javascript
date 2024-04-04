// EXAMPLE 1 - How to skip over an Element in .map() in JavaScript

const arr = [
  {id: 1, name: 'alice', salary: 500},
  {id: 2, name: 'bobby hadz', salary: 400},
  {id: 3, name: 'carl', salary: 600},
];

const names = arr
  .filter(employee => {
    if (employee.id === 2) {
      return false;
    }

    return true;
  })
  .map(employee => {
    return employee.name;
  });

console.log(names); // 👉️ [ 'alice', 'carl' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Skip over an element in .map() using Array.reduce()

// const arr = [
//   {id: 1, name: 'alice', salary: 500},
//   {id: 2, name: 'bobby hadz', salary: 400},
//   {id: 3, name: 'carl', salary: 600},
// ];

// const names = arr.reduce((accumulator, current) => {
//   if (current.id !== 2) {
//     accumulator.push(current.name);
//   }

//   return accumulator;
// }, []);

// // 👇️ ['alice', 'carl']
// console.log(names);

// ------------------------------------------------------------------

// // EXAMPLE 3 - How to skip over an Element in .map() using Array.flatMap()

// const arr = [
//   {id: 1, name: 'alice', salary: 500},
//   {id: 2, name: 'bobby hadz', salary: 400},
//   {id: 3, name: 'carl', salary: 600},
// ];

// const names = arr.flatMap(employee => {
//   if (employee.id === 2) {
//     return [];
//   }

//   return employee.name;
// });

// // 👇️ [ 'alice', 'carl' ]
// console.log(names);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Skip over an element using `Array.forEach()`

// const arr = [
//   {id: 1, name: 'alice', salary: 500},
//   {id: 2, name: 'bobby hadz', salary: 400},
//   {id: 3, name: 'carl', salary: 600},
// ];

// const newArray = [];

// arr.forEach(element => {
//   if (element.id !== 2) {
//     newArray.push(element.name);
//   }
// });

// console.log(newArray); // 👉️ [ 'alice', 'carl' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - How to skip over an Index in .map() in JavaScript

// const arr = [
//   {id: 1, name: 'alice', salary: 500},
//   {id: 2, name: 'bobby hadz', salary: 400},
//   {id: 3, name: 'carl', salary: 600},
// ];

// const names = arr.flatMap((employee, index) => {
//   if (index === 1) {
//     return [];
//   }

//   return employee.name;
// });

// // 👇️ [ 'alice', 'carl' ]
// console.log(names);

// ------------------------------------------------------------------

// // EXAMPLE 6 - How to skip over an Index in .map() using `Array.reduce()`

// const arr = [
//   {id: 1, name: 'alice', salary: 500},
//   {id: 2, name: 'bobby hadz', salary: 400},
//   {id: 3, name: 'carl', salary: 600},
// ];

// const names = arr.reduce((accumulator, current, index) => {
//   if (index !== 1) {
//     accumulator.push(current.name);
//   }

//   return accumulator;
// }, []);

// // 👇️ [ 'alice', 'carl' ]
// console.log(names);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Skip over an index using `Array.forEach()`

// const arr = [
//   {id: 1, name: 'alice', salary: 500},
//   {id: 2, name: 'bobby hadz', salary: 400},
//   {id: 3, name: 'carl', salary: 600},
// ];

// const names = [];

// arr.forEach((element, index) => {
//   if (index !== 1) {
//     names.push(element.name);
//   }
// });

// console.log(names); // 👉️ [ 'alice', 'carl' ]
