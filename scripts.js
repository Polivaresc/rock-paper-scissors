
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

cases: 
C rock-paper P = P wins
C rock-scissors P = C wins
C rock-rock P = Match

C paper-paper P = Match
C paper-scissors P = P wins
C paper-rock = C wins

C scissors-paper P = C wins
C scissors-scissors P = Match
C scissors-rock P = P wins

else you have to enter "rock, paper or scissors"

return the winner of the round
**/

let playerSelection = prompt().toLowerCase()
let computerSelection = computerPlay()


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a match!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock" 
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors"
        } 
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock"
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beat paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors"
        } else if (computerSelection === "paper") {
            return "You win! Scissors beat paper"
        } 
    } else {
        return "Oopsie woopsie! You should pick 'rock', 'paper' or 'scissors'"
    }
}
  
console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))