// Remove falsy values from any array
console.log(Boolean(""));
const mainArray = [
  "",
  NaN,
  "Hello",
  false,
  "ami",
  "",
  "Jubair",
  "Programmer",
  NaN,
];
const nowRemoveFalsyValue = mainArray.filter(Boolean);
console.log(nowRemoveFalsyValue);
