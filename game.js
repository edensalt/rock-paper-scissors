
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

    if (winner === 'computer') {
        para.textContent = `The computer won, since ${computerSelection} beats ${playerSelection}.`;
        resultsContainer.replaceChild(para, resultsContainer.lastChild);
    } else if (winner === 'player') {
        para.textContent = `You won, since ${playerSelection} beats ${computerSelection}.`;
        resultsContainer.replaceChild(para, resultsContainer.lastChild);  
    } else {
        para.textContent = `It was a tie! You both chose ${computerSelection}.`;
        resultsContainer.replaceChild(para, resultsContainer.lastChild);
    }

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

// Add end statement if player or computer reaches 5 wins

const body = document.querySelector('.body');
const endGameComp = document.createElement('div');
endGameComp.textContent = 'Game over! You lose! ';
endGameComp.setAttribute('style', 'margin: 10px');

const playAgain = document.createElement('button');
playAgain.textContent = 'Play again?';
playAgain.addEventListener('click', () => location.reload());


if (computerWins === 5) {
    body.replaceWith(endGameComp);
    endGameComp.appendChild(playAgain);
}

if (playerWins === 5) {
    const endGamePlayer = document.createElement('div');
    endGamePlayer.textContent = 'Victory! You won!';

    body.replaceWith(endGamePlayer);
    endGamePlayer.appendChild(playAgain);

}

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