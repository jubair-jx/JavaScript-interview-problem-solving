//Calculating the sum of all numbers in an array:

function CalculatingSumOfarray(array) {
  let sum = 0;
  for (let num of array) {
    sum = sum + num;
  }
  return sum;
}

console.log(CalculatingSumOfarray([1, 2, 3, 2]));
