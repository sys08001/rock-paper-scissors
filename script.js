// Randomly generates a choice of rock, paper, or scissors for the computer
function getComputerChoice() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    // Scale by 3 for simpler comparisons
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        return "rock"
    } else if (computerChoice <= 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Prompts the user for a choice and returns it
function getHumanChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    if (playerChoice == "rock") {
        return "rock"
    } else if (playerChoice == "paper") {
        return "paper"
    } else {
        return "scissors"
    }
}

