
const choicesArray = ["rock", "paper", "scissors"];

// program to get a random item from an array

function getComputerChoice() {

    // get random item
    let computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];

    return computerChoice;
}

function playRound(userInput, computerSelection) {
    if (userInput === computerSelection) {
        return ("It's a draw!");
      } else if ((userInput === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors");
      } else if (userInput === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock");
      } else if (userInput === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock");
      } else if (userInput === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper");
      } else if (userInput === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper");
      } else if (userInput === "scissors" && computerSelection === "rock") {
        return ("You lose!Rock beats scissors");
      }
    }


let userInput = window.prompt('Choose one! Rock, Paper or Scissors?').toLowerCase();
let computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playRound(userInput, computerSelection))
