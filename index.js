let compIndex
let compChoice
let playerIndex
let playerChoice
let winner
let playerScore = 0
let compScore = 0

let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    compIndex = Math.floor(Math.random()*3)
    return choices[compIndex]
}

function displayWinner(playerChoice, compChoice) {
    switch(playerChoice + "|" + compChoice) {
        case "rock|paper":
            compScore+=1
            return "Computer wins";
        case "rock|scissors":
            playerScore+=1
            return "Player wins"
        case "scissors|rock":
            compScore+=1
            return "Computer wins"
        case "scissors|paper":
            playerScore+=1
            return "Player wins"
        case "paper|scissors":
            compScore+=1
            return "Computer wins";
        case "paper|rock":
            playerScore+=1
            return "Player wins"
        default:
            return "Tie";
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playerIndex = prompt("Type the integer of your choice\n 1. rock\n2. paper\n3. scissors")
        playerChoice = choices[playerIndex-1]
        compChoice = getComputerChoice()
        winner = displayWinner(playerChoice, compChoice)
        
        console.log("Player chose: " + playerChoice)
        console.log("Computer chose:", compChoice)
        console.log(winner)
    }
    console.log("Player Score: " + playerScore)
    console.log("Computer score: " + compScore)

    if (playerScore > compScore) {
        console.log("Player is the winner!")
    }
    else if (playerScore < compScore) {
        console.log("Computer is the winner!")       
    }
    else {
        console.log("There is no winner!")
    }
}

game()