// The computer selects an option: rock, paper or scissors

    const computerOptions = ["rock", "paper", "scissors"];

    const computerSelection = getComputerChoice(computerOptions);

    function getComputerChoice(computerOptions) {
        let index = Math.floor(Math.random() * computerOptions.length);
        return computerOptions[index];
    }

    console.log(computerSelection);

// The player selects an option

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

// Determine the winner

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

    const winner = playRound(computerSelection, playerSelection);

    console.log(winner);
