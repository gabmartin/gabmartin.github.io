
const choicesArray = ["Rock", "Paper", "Scissors"]

// program to get a random item from an array

function getComputerChoice() {

    // get random index value
    const randomIndex = Math.floor(Math.random() * choicesArray.length);

    // get random item
    const computerChoice = choicesArray[randomIndex];

    return computerChoice;
}


const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

}