
/** 
Set a function computerPlay
Let rock, paper and scissors as options
Randomly pick one option
Return option
**/

function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*3)
    return options[randomIndex]
}

/**
Set a function with 2 parameters: playerSelection, computerSelection
player selection comes from an input
computer selection comes from random (computerPlay function)
return the winner of the round
**/

function playRound(playerSelection, computerSelection, playerScore) {
    if (playerSelection === computerSelection) {
        return playerScore
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return --playerScore
        } else if (computerSelection === "scissors") {
            return ++playerScore
        } 
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return ++playerScore
        } else if (computerSelection === "scissors") {
            return --playerScore
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return --playerScore
        } else if (computerSelection === "paper") {
            return ++playerScore
        } 
    } else {
        alert("Oopsie woopsie! You should pick 'rock', 'paper' or 'scissors'")
        return playerScore
    }
}
  
/** 
Set a function called game() 
Set a count = 5 and -1 each round til 0
Set a score = 0 and +1 every time player wins +0 if match and -1 if loses

Finish game at round 5
Return the winner
**/

function game() {
    let playerScore = 0
    let playerSelection
    let computerSelection

    for (currentRound = 1; currentRound <= 5; currentRound++) {
        playerSelection = prompt("Write rock, paper or scissors - ROUND " + currentRound).toLowerCase()
        computerSelection = computerPlay()
        playerScore = playRound(playerSelection, computerSelection, playerScore)
        console.log("Current score: " + playerScore)
    }
    if (playerScore === 0) {
        return "It's a match!"
    } else if (playerScore > 0) {
        return "You win! Your score is: " + playerScore
    } else {
        return "You lose! Your score is: " + playerScore
    }
}

console.log(game())