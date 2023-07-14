//remove duplicate number from array

const myArray = [1, 3, 33, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];

console.log([...new Set(myArray)]);
