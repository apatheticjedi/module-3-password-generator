// PSEUDOCODE:
// Click a button to generate a password
// Prompt user for criteria including: password length, include lowercase, include uppercase, include numeric, include special characters
// Validate user choices and include at least one of each character type
// Generate password
// Display password in provided text box

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
