var validationChecker = function(inputStr) {
    patt=/[A-Za-z]/g; // pattern to check against - g is global
    var isLetter = patt.test(inputStr); // check if input is a letter T/F
    return isLetter
}

document.addEventListener("keyup", function(event){
    var userInput =  event.key.toLowerCase();// key press value
    console.log(userInput);   
    var isLetter = validationChecker(userInput);
    console.log(isLetter);
        // isLetter ? compareLetter(userInput) : notLetter(userInput);
            if (isLetter) {
                // true
                console.log(userInput);
                doSomething(userInput);
            } else { 
                // false
                console.log(isLetter);
                notLetter(userInput);
            }
});

// alert users 
function notLetter (str) {
    alert( str + "Is not a letter. lease type letters only! (a-z)");
}

