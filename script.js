const choicesArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");

let resultsRound = document.querySelector("#results");
let score = document.querySelector("#score");

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
    resultsRound.innerHTML = "It's a draw!";
  } else if (userInput === "rock" && computerSelection === "scissors") {
    playerScore++;
    resultsRound.innerHTML = "You win! Rock beats scissors";
  } else if (userInput === "rock" && computerSelection === "paper") {
    computerScore++;
    resultsRound.innerHTML = "You lose! Paper beats rock";
  } else if (userInput === "paper" && computerSelection === "rock") {
    playerScore++;
    resultsRound.innerHTML = "You win! Paper beats rock";
  } else if (userInput === "paper" && computerSelection === "scissors") {
    computerScore++;
    resultsRound.innerHTML = "You lose! Scissors beats paper";
  } else if (userInput === "scissors" && computerSelection === "paper") {
    playerScore++;
    resultsRound.innerHTML = "You win! Scissors beats paper";
  } else if (userInput === "scissors" && computerSelection === "rock") {
    computerScore++;
    resultsRound.innerHTML = "You lose! Rock beats scissors";
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
    score.innerHTML = playerScore + " - " + computerScore;
  } else if (playerScore == 5) {
    console.log("GAME OVER: Congratulations! You're the winner!");
  } else {
    console.log("GAME OVER: Oh no! You lost...");
  }
}

