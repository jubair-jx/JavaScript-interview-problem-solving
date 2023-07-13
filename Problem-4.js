// How to flatten multi-dimensional array
const myArr = ["Me", ["Jubair", "Programmer"], ["Developer", "Khan"]];
const flatArray = myArr.flat();
console.log(flatArray);

//when multilevel array

const myArr2 = [
  "Me",
  ["Jubair", ["Coder"], "Programmer"],
  ["Developer", "Khan", ["Mohammad Jubair"]],
];
const myArr3 = myArr2.flat(Infinity);
console.log(myArr3);
