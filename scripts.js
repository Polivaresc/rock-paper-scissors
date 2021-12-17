
let playerScore = 0;
let round = 1;

const playerRock = document.querySelector("#rockBtn");
const playerPaper = document.querySelector("#paperBtn");
const playerScissors = document.querySelector("#scissorsBtn");

playerRock.addEventListener("click", () => {
    playRound("rock")
})

playerPaper.addEventListener("click", () => {
    playRound("paper")
})

playerScissors.addEventListener("click", () => {
    playRound("scissors")
})



function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*3)
    return options[randomIndex]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let roundMessage = "Draw"

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            --playerScore
            roundMessage = "You lose!"
        } else if (computerSelection === "scissors") {
            ++playerScore
            roundMessage = "You win!"
        } 
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            ++playerScore
            roundMessage = "You win!"
        } else if (computerSelection === "scissors") {
            --playerScore
            roundMessage = "You lose!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            --playerScore
            roundMessage = "You lose!"
        } else if (computerSelection === "paper") {
            ++playerScore
            roundMessage = "You win!"
        } 
    }

    const scoreSpan = document.querySelector("#score")
    scoreSpan.textContent = `Score: ${playerScore}`

    const newRoundDiv = document.createElement("div")
    newRoundDiv.textContent = `Round ${round++}: ${roundMessage}`
    document.querySelector("#rounds").appendChild(newRoundDiv)
}
  
