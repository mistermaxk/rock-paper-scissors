function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else if (choice == 3) return "scissors"
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // display score & winner
    const scoreDisplay = document.createElement("div");
    const scoreP = document.createElement("p");
    scoreP.textContent = "Human: 0 | CPU: 0";
    scoreDisplay.appendChild(scoreP);
    document.body.appendChild(scoreDisplay);

    // human player selection
    const btnContainer = document.createElement("div");

    const btnRock = document.createElement("button");
    btnRock.textContent = "ROCK";
    btnRock.addEventListener("click", (e) => {
        playRound("rock", getComputerChoice());
    });

    const btnPaper = document.createElement("button");
    btnPaper.textContent = "PAPER";
    btnPaper.addEventListener("click", (e) => {
        playRound("paper", getComputerChoice());
    });

    const btnScissors = document.createElement("button");
    btnScissors.textContent = "SCISSORS";
    btnScissors.addEventListener("click", (e) => {
        playRound("scissors", getComputerChoice());
    });

    btnContainer.appendChild(btnRock);
    btnContainer.appendChild(btnPaper);
    btnContainer.appendChild(btnScissors);
    document.body.appendChild(btnContainer);

    // display results
    const resultsDisplay = document.createElement("div");
    const resultsP = document.createElement("p");
    resultsDisplay.appendChild(resultsP);
    document.body.appendChild(resultsDisplay);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice == "rock") {
                resultsP.textContent = "Rock ties rock. No points";
            } else if (computerChoice == "paper") {
                resultsP.textContent = "Paper beats rock. You lose!";
                computerScore += 1;
            } else if (computerChoice = "scissors") {
                resultsP.textContent = "Rock beats scissors. You Win!";
                humanScore += 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice == "rock") {
                resultsP.textContent = "Paper beats rock. You Win!";
                humanScore += 1;
            } else if (computerChoice == "paper") {
                resultsP.textContent = "Paper ties paper. No points.";
            } else if (computerChoice = "scissors") {
                resultsP.textContent = "Scissors beats paper. You Lose!";
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice == "rock") {
                resultsP.textContent = "Rock beats scissors. You lose!";
                computerScore += 1;
            } else if (computerChoice == "paper") {
                resultsP.textContent = "Scissors beats paper. You Win!";
                humanScore += 1;
            } else if (computerChoice = "scissors") {
                resultsP.textContent = "Scissors ties scissors. No points.";
            }
        }
       scoreP.textContent = `Human: ${humanScore} | CPU: ${computerScore}`;
    }

    return [humanScore, computerScore];
}

const scores = playGame();