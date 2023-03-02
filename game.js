// Play a round

// Computer selection

const computerOptions = ["rock", "paper", "scissors"]; // set options for computer selection
        console.log(computerOptions);

const computerSelection = getComputerChoice(computerOptions); // set computer selection
    console.log("The computer chose " + computerSelection);

function getComputerChoice(computerOptions) { // computer randomly picks rock, paper, or scissors
    let index = Math.floor(Math.random() * computerOptions.length); // select a random index (option) in the array.
    return computerOptions[index];
}

// Player selection

const playerInput = "Rock"; // player inputs choice
const playerSelection = playerInput.toLowerCase(); // player choice is made all lower case
    console.log("The player chose " + playerSelection);

// Play a round

