// Generates a random choice of 'Rock', 'Paper', or 'Scissors' for the 
// computer player
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <=3) {
        return "rock";
    }
    else if (randomNumber <=7) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!"
        }
        else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!"
        }
        else {
            return "You win! Rock beats scissors!"
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!"
        }
        else if (computerSelection === "paper") {
            return "It's a tie!"
        }
        else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper!"
        }
    }
    else {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!"
        }
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper!"
        }
        if (computerSelection === "scissors") {
            return "It's a tie!"
        }
    }
}

// Plays a game of Rock, Paper, Scissors that consists of 5 rounds.
// Score is kept for each round and an overall winner is declared at the end.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round < 6; round++) {
        console.log(`### ROUND ${round} ###
        `);
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("win")) {
            playerScore++;
        }
        else if (roundResult.includes("lose")) {
            computerScore++;
        }
        else {}
        console.log(`Current player score: ${playerScore}`);
        console.log(`Current computer score: ${computerScore}
        `);
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

game();
