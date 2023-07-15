//shuffling arrays

const myArray = [1, 2, 3, 3, 5, 6, 7, 8, 9, 10, 11, 12];
const shufflingArray = myArray.sort(() => Math.random() - 0.5);

console.log(shufflingArray);
