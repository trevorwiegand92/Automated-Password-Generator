// global variables
let generateBtn = document.querySelector("#generate");

//Array containing all characters available for password.//
let lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = ["!", "@", "#", "$", "%", "&", "+", "(", ")", "/", "*", "_", "-", " \ ", "<", ">", "[", "]", '{', "}", ];


function passwordParams() {
// Variables to store password parameters.//
let passwordLength = parseInt(window.prompt('How long would you like your password to be? (Min 8 - Max 128'));
if (passwordLength < 8) {
    alert("Your password must be between 8 and 128 characters.")
    return;
}

if (passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters.")
    return;
}
    let lowerCase = window.confirm('Include lowercase characters?');
    let upperCase = window.confirm('Include uppercase characters?');
    let numeric = window.confirm('Include numeric characters?');
    let special = window.confirm('Include special characters?');

//statement to confirm proper password length.//
if (lowerCase != true && upperCase != true && numeric != true && special != true) {
    alert("Must choose at least one parameter.");
    return;
}

let pwParams = {
    length: passwordLength,
    lowerChar: lowerCase,
    upperChar: upperCase,
    number: numeric,
    specialChar: special,
};
return pwParams;
    
}

//This function selects one random character from each array.//
function randomizer(array) {
    let index = Math.floor(Math.random() * array.length);
    let indexEl = array[index];
    return indexEl;
}


function generatePassword() {
    let params = passwordParams();
    console.log(params);
    let password = [];
    let userChoice = [];

    if (params.lowerChar === true){
        console.log(lowerCaseCharacters);
        userChoice.push(...lowerCaseCharacters);
    }

    if (params.upperChar === true){
        userChoice.push(...upperCaseCharacters);
    }

    if (params.number === true){
        userChoice.push(...numericCharacters);
    }

    if (params.specialChar === true){
        userChoice.push(...specialCharacters);
    }

    for (let i = 0; i < params.length; i ++){
        password.push(randomizer(userChoice));
    }

    console.log({password, userChoice});

    return password.join('');
}

function writePassword(){
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);