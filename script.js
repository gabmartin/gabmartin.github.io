const choicesArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = undefined;

// Query selectors para actualizar el UI en cada ronda. 

let buttons = document.querySelectorAll(".choice");
let resultsRound = document.querySelector("#results");
let score = document.querySelector("#score");
let playerSign = document.querySelector("#playerSign");
let computerSign = document.querySelector("#computerSign");

// Query selectors para el modal.

let modal = document.querySelector(".modal");
let playAgain = document.querySelector(".modal button");
let gameOver = document.querySelector(".modal p");


// Funcion que genera una elección del ordenador aleatoria.

function getComputerChoice() {
  let computerChoice =
    choicesArray[Math.floor(Math.random() * choicesArray.length)];

  return computerChoice;
}

// Una ronda del juego que anuncia el resultado y la puntuacion.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultsRound.innerHTML = "It's a draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    resultsRound.innerHTML = "You win! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    resultsRound.innerHTML = "You lose! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    resultsRound.innerHTML = "You win! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    resultsRound.innerHTML = "You lose! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    resultsRound.innerHTML = "You win! Scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    resultsRound.innerHTML = "You lose! Rock beats scissors";
  }
}

// Cambiar la elección del jugador según el botón que clica e inicia/continua el juego

buttons.forEach((btn) => {
  btn.addEventListener("click", function playerChoice(btn) {
    playerSelection = btn.target.value;
    game();
  });
});

/* Función que compara la puntuación para saber si el juego ha terminado. Llama a la función
ronda y a la función que actualiza el UI con las puntuaciones e imágenes oportunas */

function game() {
  if (playerScore < 5 && computerScore < 5) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateUI(playerSelection, computerSelection)
  } else if (playerScore == 5) {
    modal.classList.add("visible");
    gameOver.innerHTML = "GAME OVER: Congratulations! You're the winner!";
  } else {
    modal.classList.add("visible");
    gameOver.innerHTML = "GAME OVER: Oh no! You lost...";
  }
}

function updateUI(playerSelection, computerSelection) {

  score.innerHTML = playerScore + " - " + computerScore;

  switch (playerSelection) {
    case 'rock':
      playerSign.src = 'img/rock.png'
      break
    case 'paper':
      playerSign.src = 'img/paper.png'
      break
    case 'scissors':
      playerSign.src = 'img/scissors.png'
      break
  }

  switch (computerSelection) {
    case 'rock':
      computerSign.src = 'img/rock.png'
      break
    case 'paper':
      computerSign.src = 'img/paper.png'
      break
    case 'scissors':
      computerSign.src = 'img/scissors.png'
      break
  }
}

function refreshPage(){
  window.location.reload();
} 
