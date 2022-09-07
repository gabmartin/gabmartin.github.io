
const choicesArray = ["rock", "paper", "scissors"]

// program to get a random item from an array

function getComputerChoice() {

    // get random index value
    const randomIndex = Math.floor(Math.random() * choicesArray.length);

    // get random item
    const computerChoice = choicesArray[randomIndex];

    return computerChoice;
}

let userInput = window.prompt('Choose one! Rock, Paper or Scissors?');

function playerSelection(){
    let playerSelection = userInput.toLowerCase();
    return playerSelection;
}

const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" & computerSelection === "paper"){
        alert("You Lose! Paper beats Rock")
    } else if (playerSelection === "rock" & computerSelection === "scissors"){
        alert("You Win! Rock beats Scissors")
    } else if (playerSelection === "paper" & computerSelection === "rock"){
        alert("You Win! Paper beats Rock")
    } else if (playerSelection === "paper" & computerSelection === "scissors"){
        alert("You Lose! Scissors beats Paper")
    } else if (playerSelection === "scissors" & computerSelection === "rock"){
        alert("You Lose! Rock beats Scissors")
    } else if (playerSelection === "scissors" & computerSelection === "paper"){
        alert("You Win! Scissors beats Paper")
    } else {
        alert("Try again! That's a tie")
    }
}

playRound();