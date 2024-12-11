let humanScore = 0;
let computerScore = 0;



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
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (humanChoice == "rock") {
        return "rock"
    } else if (humanChoice == "paper") {
        return "paper"
    } else {
        return "scissors"
    }
}

// Plays a single round of Rock, Paper, Scissors and declare a winner while 
// incrementing their score
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("It's a tie!");
                break;
            case "paper":
                computerScore += 1;
                console.log("Paper beats rock! You lose!");
                break;
            case "scissors":
                humanScore += 1;
                console.log("Rock beats scissors! You win!");
                break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                humanScore += 1;
                console.log("Paper beats rock! You win!");
                break;
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                console.log("Scissors beats paper! You lose!");
                break;
        }
    } else {
        switch (computerChoice) {
            case "rock":
                computerScore += 1;
                console.log("Rock beats scissors! You lose!");
                break;
            case "paper":
                humanScore += 1;
                console.log("Scissors beats paper! You win!");
                break;
            case "scissors":
                console.log("It's a tie!");
                break;
        }
    }
}

playRound(getHumanChoice(), getComputerChoice());

