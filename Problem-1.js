// Remove falsy values from any array
console.log(Boolean(""));
const mainArray = ["", NaN, "Hello", false, "ami"];
const nowRemoveFalsyValue = mainArray.filter(Boolean);
console.log(nowRemoveFalsyValue);
