function removeDuplicates(array) {
  return [...new Set(array)];
}

console.log(removeDuplicates([1, 3, 23, 44, 44, 5, 8, 4, 4, 5, 5, , 5, 5, 5]));
