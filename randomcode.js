function a() {
    console.log("I'm working");
}

function playRound(computerSelection, playerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
            console.log("Computer won");
            let winner = "computer";
            return roundResult = `You lose, since ${computerSelection} beats ${playerSelection}!`; 
        }  // three possibilities where computer wins
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors")) {
            console.log("Player won");
            let winner = "player";
            return roundResult = `You win, since ${playerSelection} beats ${computerSelection}!`; 
        }  // three possibilities where computer wins  
    else {
        console.log("Tie");
        let winner = "tie";
        return roundResult = `It's a tie, you both chose ${computerSelection}!`;
    }

    // Original counting code

    // Declare the winner count as 1 and the loser as 0

    // If the computer won, add 1 to the computer total, 0 to the player total, and 0 to the tie total

    function addComputerWin(winner) {
        if (winner === "computer") {
            return 1;
        } else return 0;
    }



    // If the player won, add 0 to the computer total, 1 to the player total, and 0 to the tie total
    // If it was a tie, add 0 to the computer total, 0 to the player total, and 1 to the tie total


function addPlayerWin(winner) {
    if (winner === "player") {
        return 1;
    } else return 0;
}

function addTie(winner) {
    if (winner === "tie") {
        return 1;
    } else return 0;
}

    let computerWins = addComputerWin(winner);
    let playerWins = addPlayerWin(winner);
    let ties = addTie(winner);

// Add a count to the winner's overall total of wins in the game

function totalComputerWins(computerWins) {
    return computerWins++;
}

function totalPlayerWins(playerWins) {
    return playerWins++;
}

function totalTies(ties) {
    return ties++;
}

  //  function addWin(winner) {

   // }

    console.log(winner);
    console.log(computerWins);
    console.log(playerWins);
    console.log(ties);  
    
}

// Declare the winner

function declareWinner(winner) {
    if (winner === "computer") {
        return roundResult = `You lose, since ${computerSelection} beats ${playerSelection}!`; 
    } else if (winner === "player") {
        return roundResult = `You win, since ${playerSelection} beats ${computerSelection}!`; 
    } else return roundResult = `It's a tie, you both chose ${computerSelection}!`;
}

    // console.log(playRound(computerSelection, playerSelection));
    // console.log(winner);
    // console.log(declareWinner(winner));

   //  alert(declareWinner(winner));