// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z"];
var uppperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O", "P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0",]
var characters = ["!","@","#","$","%","^","&","*"]


// 1. Create generatePassword function
function generatePassword() {
  var length = (window.prompt("Select between 8-128 characters for your password." ));

  // 2. Prompt for incorrect lenght
  while (length <=7 || length  >=129){
    alert("password is to long or to short");
    var length = (window.prompt("Select between 8-128 characters for your password." ));
}
// 3. Prompt how long your password will be. 
     alert("Your password is going to be " + length + " characters long.");

// 4. Creating options on characters chosen
  var addUpperCase = window.prompt("Include upper case characters? (Yes or No)").toUpperCase();
  var addLowerCase = window.prompt("Include lower case characters? (Yes or No)").toUpperCase();
  var addNumbers = window.prompt("Include number characters? (Yes or No)").toUpperCase();
  var addSpecialCharacter = window.prompt("Include special characters?( Yes or No)").toUpperCase();

  // 5. When user cancel all items
  while(
    uppperCase === NO &&
  )
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
// add upperCase letters
// add lowerCase letters 
// add numbers 
// add characters
// when selectin is done it generates a password based on criteria
