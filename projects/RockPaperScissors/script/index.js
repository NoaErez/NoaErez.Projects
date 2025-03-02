// R P S
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const pcDisplay = document.getElementById("pcDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const pcScoreDisplay = document.getElementById("pcScoreDisplay");
let playerScore = 0;
let pcScore = 0;
let turn = 1;


function playGame(playerChoice) {
    if (turn > 10) {
        let winner = playerScore > pcScore ? "YOU WIN THE GAME!" : 
        playerScore < pcScore ? "COMPUTER WINS THE GAME!" : "IT'S A TIE!";

        winnerName.textContent = winner;
        endGame.textContent = "GAME OVER"; 
        endGame.classList.add("orangeText");
        

        return;
    }

    const pcChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === pcChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (pcChoice === "scissors") ? "WINNER!" : "LOSER!";
                break;
            case "paper":
                result = (pcChoice === "rock") ? "WINNER!" : "LOSER!";
                break;
            case "scissors":
                result = (pcChoice === "paper") ? "WINNER!" : "LOSER!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    pcDisplay.textContent = `COMPUTER: ${pcChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "WINNER!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "LOSER!":
            resultDisplay.classList.add("redText");
            pcScore++;
            pcScoreDisplay.textContent = pcScore;
            break;
    }

    turn++;
    
    document.getElementById("restartGame").addEventListener("click", function() {
        location.reload();
    });
}


