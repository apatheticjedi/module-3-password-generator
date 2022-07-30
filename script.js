// PSEUDOCODE:
// Click a button to generate a password
// Prompt user for criteria including: password length, include lowercase, include uppercase, include numbers, include special characters
// Validate user choices and include at least one of each character type
// Generate password
// Display password in provided text box

// Assignment Code
var generateBtn = document.querySelector("#generate");

// strings with possible password characters
const options = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*_-+="
};

// Write password to the #password input
function writePassword() {

  // validate and return length of password
  var getLength = function () {
    var length = window.prompt("How long would you like to make your password (8-128 characters)?");
    if (length === null) {
      window.alert("Please enter a number.");
      getLength();
    } else if (isNaN(length)) {
      window.alert("please enter a valid number.");
      getLength();
    } else if (length < 8 || length > 128) {
      window.alert("Please enter a valid length.");
      getLength();
    } else {
      return length;
    }
  };

  // validate and return if password will include lowercase letters
  var lowerCase = function () {
    lowerCase = window.confirm("Include lowercase letters?");
    if (!lowerCase) {
      return false;
    } else {
      return true;
    }
  };

  // validate and return if password will return uppercase letters
  var upperCase = function () {
    upperCase = window.confirm("Include uppercase letters?");
    if (!upperCase) {
      return false;
    } else {
      return true;
    }
  };

  // validate and return if password will include numbers
  var numInclude = function () {
    numInclude = window.confirm("Include numbers?");
    if (!numInclude) {
      return false;
    } else {
      return true;
    }
  };

  // validate and return if password will include special characters
  var specialChar = function () {
    specialChar = window.confirm("Include special characters (!,#,&,%...)?");
    if (!specialChar) {
      return false;
    } else {
      return true;
    }
  };

  // password parameters as requested by user
  var userInput = {
    length: getLength(),
    lower: lowerCase(),
    upper: upperCase(),
    number: numInclude(),
    special: specialChar()
  };

  // log user created password variables
  console.log(userInput.length);
  console.log(userInput.lower);
  console.log(userInput.upper);
  console.log(userInput.number);
  console.log(userInput.special);

  /* var password = generatePassword() {

  }; */

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
