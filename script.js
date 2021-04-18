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

//This statement is confirming that the proper amount of characters for the password has been given by the user.//
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

//This function is taking the user choices and providing a unique password based on the user input.//
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
//This function takes the values provided by the user and converts the password into text.//
function writePassword(){
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// this is the generate button waiting for the user to click//
generateBtn.addEventListener("click", writePassword);