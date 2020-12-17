// Defines Static Variables, Uses Method to Split Arrays

var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

// Prompts User

window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Defines Main Function (Password Generation)

function writePassword() {
  var allChars = [];
  var resultPassword = "";

  // Defines Dynamic Variables and Conditions

  var passLength = prompt("How many characters should this password be?");

    if(passLength < 8 || passLength > 128) {
      alert("Password length must be between 8 and 128 characters.")
    }

    else{
      if(confirm("Should this password contain uppercase letters?")){
        Array.prototype.push.apply(allChars, abcUpperArr);
      }

      if(confirm("Should this password contain lowercase letters?")){
        Array.prototype.push.apply(allChars, abcLowerArr);
      }

      if(confirm("Should this password contain numbers?")){
        Array.prototype.push.apply(allChars, numArr);
      }

      if(confirm("Should this password contain special characters (symbols)?")){
        Array.prototype.push.apply(allChars, symArr);
      }

      if(allChars.length===0){
        alert("You must select at least one type of character to continue.")
      }

    // Runs For Loop to Generate Password
      else{
        for(var i=0; i<passLength; i++){
          var random = Math.floor(Math.random()*allChars.length);
          resultPassword += allChars[random];
        }
    }
    }

    // Display Result

    document.getElementById("password").innerHTML = resultPassword;
}







// STARTER CODE:

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
