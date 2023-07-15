//Finding the maximum and minimum numbers in an array:

function maxAndMin(array) {
  const firstArray = Math.max(...array);
  const SecondArray = Math.min(...array);

  return { firstArray, SecondArray };
}

console.log(maxAndMin([1, 2, 3, 6, 44, 5, 5, 4, 8, 41, 5, 1]));
