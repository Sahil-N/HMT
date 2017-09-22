var wordBank = ["cat", "dog", "bird", "fish"];
var wordPicker = wordBank[math.floor(math.random() * wordBank.length)];
var dashes = [];
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

function displayDashes(str) {
    var wordCount = str.length;
    for(var i = 0; i< wordCount.length; i++){
        dashes[i] = "_";
        console.log(dashes);
    }
}
