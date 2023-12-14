// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
}
var upper = confirm("Click OK to include uppercase letters in your password!");
var lower = confirm("Click OK to include lowercase letters in your password!");
var symbols = confirm("Click OK to include special symbols in your password!");
var numbers = confirm("Click OK to include numbers in your password!");
var passwordLength = prompt("Choice a password length ranging from 8 to 128 characters!");

// password variables

var numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "V", "w", "x", "y", "z"]
var uppercaseABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "<", ">", "?", ]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
