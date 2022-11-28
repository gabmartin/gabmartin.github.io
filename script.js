
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
        console.log("It's a draw!");
      } else if ((userInput === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        console.log("You win! Rock beats scissors");
      } else if (userInput === "rock" && computerSelection === "paper") {
        computerScore++;
        console.log("You lose! Paper beats rock");
      } else if (userInput === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log("You win! Paper beats rock");
      } else if (userInput === "paper" && computerSelection === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats paper");
      } else if (userInput === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log("You win! Scissors beats paper");
      } else if (userInput === "scissors" && computerSelection === "rock") {
        computerScore++;
        console.log("You lose!Rock beats scissors");
      }
    }

function game(){
  for (let i = 0; i < 5; i++){
    let userInput = window.prompt('Choose one! Rock, Paper or Scissors?').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log("Player =", userInput, "Computer =", computerSelection)
    playRound(userInput, computerSelection);
    console.log("Player =", playerScore, "Computer =", computerScore);
  }
  if (playerScore > computerScore){
    console.log("GAME OVER: Congratulations! You're the winner!")
  } else if (playerScore < computerScore){
    console.log("GAME OVER: Oh no! You lost...");
  } else {
    console.log("GAME OVER: It's a tie!");
  }
}

game();
<<<<<<< HEAD

=======


// Comprobaciones de funcionamiento en la consola.

console.log(computerSelection);
console.log(playRound(userInput, computerSelection));
console.log(playerScore);
console.log(computerScore);
>>>>>>> 0c6b5373a3340a30651f7e566d075278f84485c3
