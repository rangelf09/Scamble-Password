// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z"];
var uppperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O", "P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0",];
var specialCharacters = ["!","@","#","$","%","^","&","*"];


// 1. Create generatePassword function
function generatePassword() {
  var passLength = (window.prompt("Select between 8-128 characters for your password." ));

  // 2. Prompt for incorrect lenght
  while (passLength <=7 || passLength  >=129){
    alert("password is to long or to short");
    var passLength = (window.prompt("Select between 8-128 characters for your password." ));
}
// 3. Prompt how long your password will be. 
     alert("Your password is going to be " + passLength + " characters long.");

// 4. Creating options on characters chosen
var addUpperCase = window.confirm("Include upper case chacters? (Ok =Yes and Cancel=No)");
var addLowerCase = window.confirm("Include lower case characters? (Ok =Yes and Cancel=No)");
var addNumbers = window.confirm("Include number characters? (Ok =Yes and Cancel=No)");
var addSpecialCharacter = confirm("Include special characters?(Ok =Yes and Cancel=No)");

  // 5. When user Types NO for all characters
  while (
    addUpperCase === false && addLowerCase === false && addNumbers === false && addSpecialCharacter === false ) {
    // 6. Promt to select one prompt and run the while loop again
    alert("You must select at least one character type!");

  var addUpperCase = window.confirm("Include upper case characters? (Ok =Yes and Cancel=No)");
  var addLowerCase = window.confirm("Include lower case characters? (Ok =Yes and Cancel=No)");
  var addNumbers = window.confirm("Include number characters? (Ok =Yes and Cancel=No)");
  var addSpecialCharacter = confirm("Include special characters?(Ok =Yes and Cancel=No)");
  }
  
  //7. Combining the strings to create the password
  var passwordString = []
    if (addUpperCase) {passwordString = passwordString.concat(uppperCase)}
    if (addLowerCase) {passwordString = passwordString.concat(lowerCase)}
    if (addNumbers) {passwordString = passwordString.concat(numbers)}
    if (addSpecialCharacter) {passwordString = passwordString.concat(specialCharacters)}

  // 8. New scrambled password
  var scramblePassword = " "
// 9. Creating for loop for the password and 
  for (var i = 0; i <  passLength; i++) {
    scramblePassword = scramblePassword + passwordString[Math.floor(Math.random() * passwordString.length)];
  }

  return scramblePassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// create var for upper and a-z A-Z 0-9, numbers and special characters
// add prompt to selct between 8-128 characters
// add confirm to add upperCase letters
// add confirm to add lowerCase letters 
// add confirm to add numbers 
// add confirm to add special characters
// combining strings 
// when selectin is done it generates a password based on criteria
