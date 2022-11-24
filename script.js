const choicesArray = ["rock", "paper", "scissors"]

// program to get a random item from an array

function getComputerChoice() {
    const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return computerChoice;
}

let userInput = window.prompt('Choose one! Rock, Paper or Scissors?');

let playerSelection = userInput.toLowerCase();

console.log(playerSelection);

const computerSelection = getComputerChoice();

console.log(computerSelection);

var playerScore = 0;
var computerScore = 0;
console.log(playerScore, computerScore);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("Try again! That's a tie");
    } else if (playerSelection === "rock" & computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (playerSelection === "rock" & computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection === "paper" & computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection === "paper" & computerSelection === "scissors"){
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (playerSelection === "scissors" & computerSelection === "rock"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (playerSelection === "scissors" & computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper");
        playerScore++;
    } console.log(playerScore, computerScore);
}

playRound(playerSelection, computerSelection);

/* function game(){
    for (i = 0; i < 5; i++){
        playRound();
        console.log(playerScore);
        console.log(computerScore);
    }
    

game(); */

