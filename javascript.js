
let humanScore = 0;
let computerScore = 0;
let playerChoice = null;

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundWinnerDisplay = document.querySelector(".round-winner");


function getComputerChoice() {
    rdm = Math.random();
    if (rdm <= 0.33) {
        return "rock";
    } else if (rdm <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundWinnerDisplay.textContent = "TIE";
        return;
    } 

    winner = null;

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            winner = "human"
        } else if (computerChoice === "paper") {
            computerScore++;
            winner = "computer"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            humanScore++;
            winner = "human"
        } else if (computerChoice === "rock") {
            computerScore++;
            winner = "computer"
        }    
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            winner = "human"
        } else if (computerChoice === "rock") {
            computerScore++;
            winner = "computer"
        }    
    }

    roundWinnerDisplay.textContent = winner.toUpperCase();
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

}

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})


