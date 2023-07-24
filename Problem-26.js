//Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)
function countVowelsAndConsonants(inputStr) {
  let vowel = "aeiouAEIOU";
  let countConsontant = 0;
  let vowelCount = 0;
  for (let char of inputStr) {
    if (vowel.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      countConsontant++;
    }
  }
  return {
    vowel: vowelCount,
    consonet: countConsontant,
  };
}

console.log(countVowelsAndConsonants("Hello World"));

// Example usage:
