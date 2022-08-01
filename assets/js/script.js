// PSEUDOCODE:
// Click a button to generate a password
// Prompt user for criteria including: password length, include lowercase, include uppercase, include numbers, include special characters
// Validate user choices and include at least one of each character type
// Generate password
// Display password in provided text box

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password based on user criteria
function generatePassword() {
  // validate and return length of password
  var length = parseInt(prompt("How long would you like to make your password (8-128 characters)?"));
  if (isNaN(length)) {
    alert("Please enter a number.");
    return null;
  } else if (length < 8 || length > 128) {
    alert("Please enter a valid length.");
    return null;
  };

  // validate and return if password will include lowercase letters
  var lowerCase = confirm("Include lowercase letters?");

  // validate and return if password will return uppercase letters
  var upperCase = confirm("Include uppercase letters?");

  // validate and return if password will include numbers
  var numInclude = confirm("Include numbers?");

  // validate and return if password will include special characters
  var specialChar = window.confirm("Include special characters (!,#,&,%...)?");

  // object with strings of possible password characters
  var chars = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  };

  // create string variable with user's choices
  var string = "";

  if (upperCase) {
    string += chars.upper
  };

  if (lowerCase) {
    string += chars.lower
  };

  if (numInclude) {
    string += chars.numbers
  };

  if (specialChar) {
    string += chars.symbols
  };

  if (!specialChar && !upperCase && !numInclude && !lowerCase) {
    alert("You must choose at least one character type. Try again.");
  };

  // generate random password with created string
  var password = "";

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * string.length);
    password += string.substring(randomNumber, randomNumber + 1);
  };
  return password;
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);