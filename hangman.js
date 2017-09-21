
// filter function - Amber 
document.addEventListener("keyup", function(event){
    var userInput =  event.key.toLowerCase();// key press value
    patt=/[A-Za-z]/g; // pattern to check against - g is global
    var isLetter = patt.test(userInput); // check if input is a letter T/F
    console.log(isLetter); 
  
    if (isLetter) {
        // true
        console.log(userInput);
        // functionName(userInput); pass any function that needs the key press value here.
        // pass userinput in as the an argument.
    } else { 
        // false
        console.log("not letter");
        alert("not a letter"); // this can say anything
    }
});
