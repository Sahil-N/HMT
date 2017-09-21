
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
 
// word selector - Joseph
//picks for a word from the array randomly
 var animalPicker = wordBank[Math.floor(Math.random() * wordBank.length)];
//picks a word from the first index of the array
var animalPicker = animalArray[0]; 
function wordSelector (animalPicker) {
  //counts the letters in the selected word
    var animalWordCount = animal.length
    console.log(animalWordCount);
  //returns variable so reused   
    return animalWordCount
};
