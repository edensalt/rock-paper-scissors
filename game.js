
function playRound(choice) {

    // COMPUTER SELECTION

    const computerOptions = ["rock", "paper", "scissors"];

    const computerSelection = getComputerChoice(computerOptions);

    function getComputerChoice(computerOptions) {
        let index = Math.floor(Math.random() * computerOptions.length);
        return computerOptions[index];
    }

    // PLAYER SELECTION

    const playerSelection = choice;

    console.log(playerSelection);

    // DETERMINE WINNER

    function determineWinner (computerSelection, playerSelection) {
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

    const winner = determineWinner(computerSelection, playerSelection);
    console.log(winner);

}

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', function() {
    const choice = 'rock';
    playRound(choice);
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', function() {
    const choice = 'paper';
    playRound(choice);
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', function() {
    const choice = 'scissors';
    playRound(choice);
});