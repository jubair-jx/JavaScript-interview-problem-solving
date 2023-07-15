//even and odd number problem in js function with array

function checkOddAndEven(array) {
  const oddNumber = [];
  const evenNumber = [];

  for (let number of array) {
    if (number % 2 === 0) {
      evenNumber.push(number);
    } else {
      oddNumber.push(number);
    }
  }
  return { oddNumber, evenNumber };
}
const array = [1, 2, 4, 8, 6, 4, 9, 7, 4, 9];
const result = checkOddAndEven(array);

console.log(result.evenNumber);
console.log(result.oddNumber);
