// Use the prompt() function to ask the user to choose ROCK, PAPER, or SCISSORS and store their response as userSelection
let userSelection = prompt("Rock, Paper or Scissors?");
//- Use the Math.random() function to generate a number as computerSelection:
let computerSelection = Math.random();
//Display both the userSelection and computerSelection variables using console.log
console.log("You Chose " + userSelection);
console.log(computerSelection);
//Use decision structures to determine who wins the game using regular Rock, Paper, Scissors rules.
if (computerSelection < 0.34) {
  computerSelection = "Rock";
}
else if (computerSelection <= 0.67 ){
  computerSelection = "Paper";
}   
else {
  computerSelection = "Scissors";
}


console.log("Computer Chose " + computerSelection);