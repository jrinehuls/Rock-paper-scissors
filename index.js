let compIndex
let compChoice
let playerIndex
let playerChoice

let choices = ["rock", "paper", "scissors"]

playerIndex = prompt("Type the integer of your choice\n 1. rock\n2. paper\n3. scissors")
playerChoice = choices[playerIndex-1]

function getComputerChoice() {
    compIndex = Math.floor(Math.random()*3)
    return compIndex
}

compChoice = choices[getComputerChoice()]

function displayWinner(playerChoice, compChoice) {
    switch(playerChoice + "|" + compChoice) {
        case "rock|paper":
            return "Computer wins";
        case "rock|scissors":
            return "Player wins"
        case "scissors|rock":
            return "Computer wins"
        case "scissors|paper":
            return "Player wins"
        case "paper|scissors":
            return "Computer wins";
        case "paper|rock":
            return "Player wins"
        default:
            return "Tie";
    }
}

console.log("Player chose: " + playerChoice)
console.log("Computer chose:", compChoice)
console.log(displayWinner(playerChoice, compChoice))