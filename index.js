let compIndex;
let compChoice;
let playerIndex;
let playerChoice;
let winner;
let playerScore = 0;
let compScore = 0;

let choices = ["ROCK", "PAPER", "SCISSORS"];
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    compIndex = Math.floor(Math.random()*3);
    return choices[compIndex];
}

function roundWinner(playerChoice, compChoice) {
    switch(playerChoice.toLowerCase() + "|" + compChoice.toLowerCase()) {
        case "rock|paper":
            compScore+=1
            return "Computer wins this round.";
        case "rock|scissors":
            playerScore+=1
            return "Player wins this round."
        case "scissors|rock":
            compScore+=1
            return "Computer wins this round."
        case "scissors|paper":
            playerScore+=1
            return "Player wins this round."
        case "paper|scissors":
            compScore+=1
            return "Computer wins this round.";
        case "paper|rock":
            playerScore+=1
            return "Player wins this round."
        default:
            return "This round resulted in a tie.";
    }
}

function gameOver() {
    winner = document.getElementById("winner");
    if (playerScore == 5 || compScore == 5) {
        disableButtons();
        if (playerScore > compScore) {
            winner.innerHTML = "Player is the winner!";
        }
        else if (playerScore < compScore) {
            winner.innerHTML = "Computer is the winner!";    
        }
    }
}

function disableButtons() {
    buttons.forEach(button => { button.disabled = true })
}

function playRound(selection) {
    playerChoice = selection;
    compChoice = getComputerChoice();
    winner = roundWinner(playerChoice, compChoice);

    document.getElementById('roundWinner').innerHTML = `
    Player chose: ${playerChoice}<br>
    Computer chose: ${compChoice}<br>
    ${winner}
    `;

    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;
    gameOver();
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
});