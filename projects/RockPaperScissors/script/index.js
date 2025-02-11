// R P C 
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const pcDisplay = document.getElementById("pcDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const pcScoreDisplay = document.getElementById("pcScoreDisplay");
let playerScore = 0;
let pcScore = 0;

function playGame(playerChoice) {

    const pcChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === pcChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (pcChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (pcChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (pcChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    pcDisplay.textContent = `COMPUTER: ${pcChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            pcScore++;
            pcScoreDisplay.textContent = pcScore;
            break;
    }
}

