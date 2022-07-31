// PSEUDOCODE:
// Click a button to generate a password
// Prompt user for criteria including: password length, include lowercase, include uppercase, include numbers, include special characters
// Validate user choices and include at least one of each character type
// Generate password
// Display password in provided text box

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  // validate and return length of password
  var getLength = function () {
    var length = window.prompt("How long would you like to make your password (8-128 characters)?");
    if (length === null || isNaN(length)) {
      window.alert("Please enter a number.");
      length = getLength();
    } else if (length < 8 || length > 128) {
      window.alert("Please enter a valid length.");
      length = getLength();
    } else {
      return length;
    }
    return length;
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


  // strings with possible password characters
  var chars = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  };

  // string variable with users choices inserted
  var string = "";

  if (userInput.upper === true) { string += chars.upper };
  // else { string -= chars.upper };

  if (userInput.lower === true) { string += chars.lower };
  // else { string -= chars.lower };

  if (userInput.number === true) { string += chars.numbers };
  // else { string -= chars.numbers };

  if (userInput.special === true) { string += chars.symbols };
  // else { string -= chars.symbols };

  if (userInput.special === false && userInput.upper === false && userInput.number === false && userInput.lower === false) {
    window.alert("You must choose at least one character type. Try again.");
    writePassword();
  };

  // debugger;

  // generate random password using var string
  function generatePassword() {
    var password = "";

    for (var i = 0; i < userInput.length; i++) {
      var randomNumber = Math.floor(Math.random() * string.length);
      password += string.substring(randomNumber, randomNumber + 1);
    }
    return password;
  };


  var password = generatePassword();
  console.log(password);  

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
