// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Password variable values:
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var spec = ['!','@','#','$','%','^','&','*','(',')','?','>','<','.',',','=','+','-','~'];
  var selections;
  var specChar;
  var upperChar;
  var lowerChar;
  var numChar;
  var userChoice

  // Prompt user for length of password 8 < 128 and validates it
  userChoice = parseInt(prompt("Please enter character length of password: (Between 8 and 128 Characters)"));
    if (!userChoice) {
        alert("Please input a value!") 
        generatePassword();
      } else if (userChoice < 8 || userChoice > 128) {  
        alert("Please input a value between 8 and 128.");
        generatePassword();
      } else {
        specChar = confirm("Would you like to include Special Characters?");
        upperChar = confirm("Would you like to include Uppercase Characters?");
        lowerChar = confirm("Would you like to include Lowercase Characters?");
        numChar = confirm("Would you like to include Numbers?");
    }

    // If all are negative options
    if (!specChar && !upperChar && !lowerChar && !numChar) {
      selections = alert('You must select at least 1 criteria!');
      generatePassword();
    }

    // If all are positive options
    else if (specChar && upperChar && lowerChar && numChar) {
      selections = spec.concat(uppers, lowers, numbers);
    }

    // If 3 positive options
    else if (specChar && upperChar && lowerChar) {
      selections = spec.concat(uppers, lowers);
    }

    else if (specChar && upperChar && numChar) {
      selections = spec.concat(uppers, numbers);
    }

    else if (specChar && lowerChar && numChar) {
      selections = spec.concat(lowers, numbers);
    }

    else if (upperChar && lowerChar && numChar) {
      selections = numbers.concat(uppers, lowers);
    }

    // If 2 positive options
    else if (upperChar && lowerChar) {
      selections = lowers.concat(uppers);
    }

    else if (lowerChar && numChar) {
      selections = numbers.concat(lowers);
    }

    else if (upperChar && numChar) {
      selections = numbers.concat(uppers);
    }

    else if (upperChar && specChar) {
      selections = spec.concat(uppers);
    }

    else if (specChar && lowerChar ) {
      selections = spec.concat(lowers);
    }

    else if (specChar && numChar) {
      selections = numbers.concat(spec);
    }

    // If only 1 positive option
    else if (specChar) {
      selections = spec;
    }

    else if (numChar) {
      selections = numbers;
    }

    else if (upperChar) {
      selections = uppers;
    }

    else if (lowerChar) {
      selections = lowers;
    }

    // Placeholder for user length
    var genPassword = [];

    // Random selection for all selected variables
    for (var i = 0; i < userChoice; i++) {
      var pickSelections = selections[Math.floor(Math.random() * selections.length)];
      genPassword.push(pickSelections);
    }

    // Joins and converts to string
    var pwd = genPassword.join("");
    return pwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
