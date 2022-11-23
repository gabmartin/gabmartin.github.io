
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
    var playerScore = 0;
    var computerScore = 0;
    if (playerSelection === "rock" & computerSelection === "paper"){
        alert("You Lose! Paper beats Rock");
        computerScore++;
    } else if (playerSelection === "rock" & computerSelection === "scissors"){
        alert("You Win! Rock beats Scissors");
        playerScore++;
    } else if (playerSelection === "paper" & computerSelection === "rock"){
        alert("You Win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection === "paper" & computerSelection === "scissors"){
        alert("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (playerSelection === "scissors" & computerSelection === "rock"){
        alert("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (playerSelection === "scissors" & computerSelection === "paper"){
        alert("You Win! Scissors beats Paper");
        playerScore++;
    } else {
        alert("Try again! That's a tie");
    }
}

function game(){
    for (i = 0; i < 5; i++){
        playRound();
        console.log(playerScore);
        console.log(computerScore);
    }
    
}
