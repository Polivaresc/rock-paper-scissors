
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

console.log(computerPlay())

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


function playRound(computerSelection, playerSelection) {

}
  

console.log(playerSelection)
console.log(playRound(computerSelection, playerSelection))