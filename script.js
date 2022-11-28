

const choicesArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Funcion que elige una opcion 

function getComputerChoice() {

    let computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];

    return computerChoice;
}

// Una ronda del juego que anuncia el resultado y la puntuacion.

function playRound(userInput, computerSelection) {
    if (userInput === computerSelection) {
        return ("It's a draw!");
      } else if ((userInput === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        return ("You win! Rock beats scissors");
      } else if (userInput === "rock" && computerSelection === "paper") {
        computerScore++;
        return ("You lose! Paper beats rock");
      } else if (userInput === "paper" && computerSelection === "rock") {
        playerScore++;
        return ("You win! Paper beats rock");
      } else if (userInput === "paper" && computerSelection === "scissors") {
        computerScore++;
        return ("You lose! Scissors beat paper");
      } else if (userInput === "scissors" && computerSelection === "paper") {
        playerScore++;
        return ("You win! Scissors beat paper");
      } else if (userInput === "scissors" && computerSelection === "rock") {
        computerScore++;
        return ("You lose!Rock beats scissors");
      }
    }


let userInput = window.prompt('Choose one! Rock, Paper or Scissors?').toLowerCase();
let computerSelection = getComputerChoice();


// Comprobaciones de funcionamiento en la consola.

console.log(computerSelection);
console.log(playRound(userInput, computerSelection));
console.log(playerScore);
console.log(computerScore);
