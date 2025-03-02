
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
        console.log("Tie!");
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

    if (winner === "human") {
        console.log("Human wins!");
    } else {
        console.log("Computer wins!");
    }
}

playerChoice = null;

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})


