function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the cleaned string is a palindrome
  for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
const inputString = "A man, a plan, a canal, Panama!, ami, ok";
console.log(isPalindrome(inputString)); // Output: true
