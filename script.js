
// Excercise 1

var usernumber = prompt('please enter a number');
var total = 0;


for(var i = 1; i <= usernumber; i++){

    total = total + i;
}

console.log("The sum of all numbers up to your number is" + total);


//Excercise 2


let playerName = prompt("Would you like to play a game? Yes or No");
let userChoice = prompt("Enter a word");
let wordAddition = "";

do {
  wordAddition =+ "";
  console.log(wordAddition + userChoice.length);

  userChoice = prompt("Enter a word");
}
while ((playerName !== null) && (userChoice != "No"));

// userChoice.concat(wordAddition)
// userChoice + wordAddition
// "Enter another word" + userChoice.length
// userChoice.concat(wordAddition);
// if i remove the .length from the console.log statement it remains an infinite loop...
// userChoice + wordAddition.push)
// just (wordAddition)
// wordAddition + userChoice

//Excercise 3


let userName = prompt("What is your name?");
let userResponse = prompt("Would you like your name printed? Yes or No");
let exclamation ='';

while ((userResponse !== null) && (userResponse != "No")) {
    exclamation += '!';
    console.log("Your name is " + userName + exclamation);

    userResponse = prompt("Would you like your name printed? Yes or No");
}



//Excercise 4


var mealType = "";
var mealType = prompt("What time of day is it?");

let mealType = "breakfast";
let mealType = "afternoon";
let mealType = "dinner";

switch (mealType) {
  case "breakfast":
    console.log("eggs and toast");
    break;
  case "lunch":
    console.log("a salad");
    break;
  case "dinner":
    console.log("chicken and rice");
    break;
}
