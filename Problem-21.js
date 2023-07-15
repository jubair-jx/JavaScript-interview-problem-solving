//Sorting an array of numbers in ascending order:

function sortArray(number) {
  return number.sort((a, b) => a - b);
}

console.log(sortArray([2, 1, 4, 2, 3]));
