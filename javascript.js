
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

function getHumanChoice() {
    choice = prompt("Rock, paper or scissors?");

    if (choice === null) {
        console.log("Please enter a selection!");
        return;
    }

    choice = choice.trim().toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log("Please enter rock, paper or scissors!");
        return;
    }
    
    return choice;
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

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let rounds = 0; rounds < 5; rounds++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        
        console.log("Player choice: " + humanChoice);
        console.log("Compuer choice: " + computerChoice);
        
        playRound(humanChoice, computerChoice);
    }

    if (humanScore === computerScore) {
        console.log("GAME TIE");
    } else if (humanScore > computerScore) {
        console.log("PLAYER WINS");
    } else {
        console.log("COMPUTER WINS");
    }
}


