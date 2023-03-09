// Define winners

const roundWinners = [];

    // The computer selects an option: rock, paper or scissors

        const computerOptions = ["rock", "paper", "scissors"]; // set options for computer selection

        const computerSelection = getComputerChoice(computerOptions); // set computer selection
            // console.log("The computer chose " + computerSelection);

        function getComputerChoice(computerOptions) { // computer randomly picks rock, paper, or scissors
        let index = Math.floor(Math.random() * computerOptions.length); // select a random index (option) in the array.
        return computerOptions[index];
    }

    console.log(computerSelection);

    // OLD CODE The player selects an option via prompt: rock, paper or scissors

        // const playerInput = prompt("What do you choose?", "Type rock, paper, or scissors."); // player inputs choice
        // const playerSelection = playerInput.toLowerCase(); // player choice is made all lower case
            // console.log("The player chose " + playerSelection);

    // Establish event listeners for the buttons

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');

    rockBtn.addEventListener('click', () => {
        playerSelection = 'rock';
        console.log(playerSelection);
    })

    paperBtn.addEventListener('click', () => {
        playerSelection = 'paper';
        console.log(playerSelection);
    })

    scissorsBtn.addEventListener('click', () => {
        playerSelection = 'scissors';
        console.log(playerSelection);
    })

    // Play a round

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
