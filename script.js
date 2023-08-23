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
function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    let outputDisplay = document.querySelector('#result');

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            outputDisplay.textContent = "It's a tie!";
        }
        else if (computerSelection === "paper") {
            outputDisplay.textContent = "You lose! Paper beats rock!";
            computerScore++;
        }
        else {
            outputDisplay.textContent = "You win! Rock beats scissors!";
            playerScore++;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            outputDisplay.textContent = "You win! Paper beats rock!";
            playerScore++;
        }
        else if (computerSelection === "paper") {
            outputDisplay.textContent = "It's a tie!";
        }
        else {
            outputDisplay.textContent = "You lose! Scissors beats paper!";
            computerScore++;
        }
    }
    else {
        if (computerSelection === "rock") {
            outputDisplay.textContent = "You lose! Rock beats scissors!";
            computerScore++;
        }
        else if (computerSelection === "paper") {
            outputDisplay.textContent = "You win! Scissors beats paper!";
            playerScore++;
        }
        else {
            outputDisplay.textContent = "It's a tie!";
        }
    }
}

// Play a game of 5 rounds while displaying each round's score and 
// the final result.
function playGame(e) {
    // Display the current round
    let displayRound = document.querySelector('#round');
    displayRound.style.fontWeight = 'bold';
    displayRound.textContent = `### ROUND ${round} ###
    `
    // Play a single round
    playRound(e);

    // Display the current score
    let displayScore = document.querySelector('#score');
    displayScore.textContent = `Player: ${playerScore}\
    Computer: ${computerScore}`;

    // Increment the round
    round++;

    // After 5 rounds, display the final result
    let finalScore = document.querySelector('#final');
    if (round > 5) {
        if (playerScore > computerScore) {
            finalScore.style.color = 'green';
            finalScore.textContent = "YOU WIN!";
        }
        else if (playerScore < computerScore) {
            finalScore.style.color = 'red';
            finalScore.textContent = "YOU LOSE!"; 
        }
        else {
            finalScore.textContent = "IT'S A TIE!";
        }
    }
}

let round = 1;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', playGame)
});