
const roundWinners = [];

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

    // Show winner on screen

    const resultsContainer = document.querySelector('.result');

    const para = document.createElement('p');
    para.textContent = `${winner}!`;

    resultsContainer.replaceChild(para, resultsContainer.lastChild);

    //Update score

    roundWinners.push(winner);

    // Count computer wins

    let computerWins = 0;
    for (let i = 0; i < roundWinners.length; i++) {
        if (roundWinners[i] === "computer") {
            ++computerWins
        }
    }

    console.log(`The computer has won ${computerWins} times.`);

    // Count player wins

    let playerWins = 0;
    for (let i = 0; i < roundWinners.length; i++) {
        if (roundWinners[i] === "player") {
            ++playerWins
        }
    }
    
    console.log(`You have won ${playerWins} times.`);


    // Count ties  

    let ties = 0;
    for (let i = 0; i < roundWinners.length; i++) {
        if (roundWinners[i] === "tie") {
            ++ties
        }
    }

    console.log(`There have been ${ties} ties.`);

    // Set up scoreboard


    
    // Add to scoreboard

    const playerScore = document.querySelector('.player-wins');
    const paraPlayer = document.createElement('p');
    paraPlayer.textContent = playerWins;

    playerScore.replaceChild(paraPlayer, playerScore.lastChild);

    const computerScore = document.querySelector('.computer-wins');
    const paraComputer = document.createElement('p');
    paraComputer.textContent = computerWins;

    computerScore.replaceChild(paraComputer, computerScore.lastChild);

    const tieScore = document.querySelector('.ties');
    const paraTie = document.createElement('p');
    paraTie.textContent = ties;

    tieScore.replaceChild(paraTie, tieScore.lastChild);

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