//array swappings
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 20, 60];

//using destructing in array swappings

[myArr[0], myArr[9]] = [myArr[9], myArr[0]];

console.log(myArr);
