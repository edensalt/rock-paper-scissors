
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

const playerInput = prompt("What do you choose?", "Type rock, paper, or scissors."); // player inputs choice
const playerSelection = playerInput.toLowerCase(); // player choice is made all lower case
    console.log("The player chose " + playerSelection);

// Define winner for tracking

let winner;
let roundResult;

// Play a round

function playRound(computerSelection, playerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
            console.log("Computer won");
            return winner = "computer";
        }  // three possibilities where computer wins
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors")) {
            console.log("Player won");
            return winner = "player";
        }  // three possibilities where computer wins  
    else {
        console.log("Tie");
        return winner = "tie";
    }
}

// Declare the winner

function declareWinner(winner) {
    if (winner === "computer") {
        return roundResult = `You lose, since ${computerSelection} beats ${playerSelection}!`; 
    } else if (winner === "player") {
        return roundResult = `You win, since ${playerSelection} beats ${computerSelection}!`; 
    } else return roundResult = `It's a tie, you both chose ${computerSelection}!`;
}

console.log(playRound(computerSelection, playerSelection));
console.log(winner);
console.log(declareWinner(winner));