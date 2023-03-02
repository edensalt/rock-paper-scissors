function a() {
    console.log("I'm working");
}

function playRound(computerSelection, playerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
            console.log("working");
            return winner = "computer"; 
        }  // three possibilities where computer wins
    else if ((computerSelection === "scissors" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors")) {
            console.log("working");
            return winner = "player";
        }  // three possibilities where computer wins  
    else {
        console.log("working");
        return "It's a tie!";
    }
}