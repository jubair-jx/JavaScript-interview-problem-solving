// Check the string is Palindrome;

function isPalindrome(string) {
  const reversed = string.split("").reverse().join("");
  return string === reversed;
}
console.log(isPalindrome("car"));
