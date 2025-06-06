let humanScore = 0
    let computerScore = 0
    let tieRounds = 0

function getComputerChoice(){
    choiceNum = Math.random()
    if (choiceNum <0.33) return "rock"
    else if (choiceNum < 0.67) return "paper"
    else return "scissors"
}

function getHumanChoice(){
    return prompt("Rock, paper, or scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert(`You both picked ${humanChoice}, it's a tie!`)
        tieRounds++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ){
        humanScore++;
        alert(`Computer chooses ${computerChoice}. You win!`)
    }
    else {
        computerScore++;
        alert(`Computer chooses ${computerChoice}. Sorry bout it!`)
    }
}

function assignVictory(){
    if (humanScore>computerScore){
        alert(`You win! How does it feel to be smarter than a computer?
            Your score: ${humanScore}
            Computer score: ${computerScore}`)
    }
    else if (computerScore>humanScore){
        alert(`Well... Seems the uprising has begun...
            Your score: ${humanScore}
            Computer score: ${computerScore}`)
    }
    else alert(`Tie goes to the runner, I guess... ${humanScore} each`)
}

function playGame(){
    let roundNumber = 1
    while (roundNumber<6){
        alert(`Round ${roundNumber}: Choose your weapon!
            Computer Score: ${computerScore}
            Your Score: ${humanScore}
            Ties: ${tieRounds}`)
        roundNumber++
        playRound(getHumanChoice(), getComputerChoice())    
    }
    assignVictory()
}
playGame();