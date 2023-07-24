// Function with a callback
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Call the callback function
}

// Callback function
function sayGoodbye() {
  console.log("Programming HERO!");
}

// Using the greetUser function with the sayGoodbye callback
greetUser("Jubair", sayGoodbye);
