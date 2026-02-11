function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else if (choice == 3) return "scissors"
}

function getHumanChoice() {
    const choice = prompt("Enter rock, scissors, or paper: ");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice == "rock") {
                console.log("Rock ties rock. No points");
            } else if (computerChoice == "paper") {
                console.log ("Paper beats rock. You lose!");
                computerScore += 1;
            } else if (computerChoice = "scissors") {
                console.log("Rock beats scissors. You Win!");
                humanScore += 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice == "rock") {
                console.log("Paper beats rock. You Win!");
                humanScore += 1;
            } else if (computerChoice == "paper") {
                console.log ("Paper ties paper. No points.");
            } else if (computerChoice = "scissors") {
                console.log("Scissors beats paper. You Lose!");
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice == "rock") {
                console.log("Rock beats scissors. You lose!");
                computerScore += 1;
            } else if (computerChoice == "paper") {
                console.log ("Scissors beats paper. You Win!");
                humanScore += 1;
            } else if (computerChoice = "scissors") {
                console.log("Scissors ties scissors. No points.");
            }
        }
        console.log(`Score -> Human: ${humanScore} | CPU: ${computerScore}`);
    }

    return [humanScore, computerScore];
}

const scores = playGame();

if (scores[0] > scores[1]) {
    console.log("Human player wins!");
} else {
    console.log("Computer player wins!");
}