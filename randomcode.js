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