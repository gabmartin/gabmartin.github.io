const choicesArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");

let gameOverText = document.querySelector("#gameOverText");
let computerText = document.querySelector("#computerText");
let roundText = document.querySelector("#roundText");
let scoreText = document.querySelector("#scoreText");

let userInput = undefined;

// Funcion que elige una opcion

function getComputerChoice() {
  let computerChoice =
    choicesArray[Math.floor(Math.random() * choicesArray.length)];

  return computerChoice;
}

// Una ronda del juego que anuncia el resultado y la puntuacion.

function playRound(userInput, computerSelection) {
  if (userInput === computerSelection) {
    console.log("It's a draw!");
  } else if (userInput === "rock" && computerSelection === "scissors") {
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

buttons.forEach((btn) => {
  btn.addEventListener("click", function playerChoice(btn) {
    userInput = btn.target.value;
    game();
  });
});

function game() {
  if (playerScore < 5 && computerScore < 5) {
    let computerSelection = getComputerChoice();
    console.log("Player =", userInput, "Computer =", computerSelection);
    playRound(userInput, computerSelection);
    console.log("Player =", playerScore, "Computer =", computerScore);
  } else if (playerScore == 5) {
    console.log("GAME OVER: Congratulations! You're the winner!");
  } else {
    console.log("GAME OVER: Oh no! You lost...");
  }
}

