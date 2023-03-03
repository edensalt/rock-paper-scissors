// Define winners

let roundWinners = [];

// Play 5 rounds, and stop after the 5th round

for (let i = 1; i < 6; i++) {
    console.log(`It's time for round ${i}`);

// For each round...

// The computer selects an option: rock, paper or scissors

    let computerOptions = ["rock", "paper", "scissors"]; // set options for computer selection

    let computerSelection = getComputerChoice(computerOptions); // set computer selection
        // console.log("The computer chose " + computerSelection);

    function getComputerChoice(computerOptions) { // computer randomly picks rock, paper, or scissors
    let index = Math.floor(Math.random() * computerOptions.length); // select a random index (option) in the array.
    return computerOptions[index];
}

// The player selects an option via prompt: rock, paper or scissors

    let playerInput = prompt("What do you choose?", "Type rock, paper, or scissors."); // player inputs choice
    let playerSelection = playerInput.toLowerCase(); // player choice is made all lower case
        // console.log("The player chose " + playerSelection);

// The winner is determined of the round

    function playRound(computerSelection, playerSelection) {
        if ((computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")) {
                console.log(`The computer won! ${computerSelection} beats ${playerSelection}.`);
                return "computer";
            }  // three possibilities where computer wins
        else if ((computerSelection === "scissors" && playerSelection === "rock") ||
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors")) {
                console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
                return "player";
            }  // three possibilities where computer wins  
        else {
            console.log(`It was a tie! Both you and the computer chose ${computerSelection}.`);
            return "tie";
        }
        
    }

// Define the winner

    let winner = playRound(computerSelection, playerSelection);

// Add the winner to the array

roundWinners.push(winner);

// Count the number of wins for the computer

let computerWins = 0;
for (let i = 0; i < roundWinners.length; i++) {
    if (roundWinners[i] === "computer") {
        ++computerWins
    }
}

console.log(`The computer has won ${computerWins} times.`);

// Count the number of wins for the player

let playerWins = 0;
for (let i = 0; i < roundWinners.length; i++) {
    if (roundWinners[i] === "player") {
        ++playerWins
    }
}

console.log(`You have won ${playerWins} times.`);

// Count the number of ties

let ties = 0;
for (let i = 0; i < roundWinners.length; i++) {
    if (roundWinners[i] === "tie") {
        ++ties
    }
}

console.log(`There have been ${ties} ties.`);
    
}



// To do:

// Update the capitalization for the winning text.

// Add an error so if they don't type in an acceptable selection, it asks them to retype.