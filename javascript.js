function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    const randvalue = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive

    switch (randvalue) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    return prompt("Paper, Scissors or Rock?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
let humanChoiceLowerCase = humanChoice.toLowerCase();
if (humanChoiceLowerCase === 'rock' && computerChoice === 'paper') {
    computerScore += 1;
    return "You lose! Paper beats Rock";    
}
else if (humanChoiceLowerCase === 'rock' && computerChoice === 'scissors' ) {
    humanScore +=1;
    return "You win! Rock beats Scissors";
}
else if (humanChoiceLowerCase === 'paper' && computerChoice === 'rock') {
    humanScore +=1;
    return "You win! Paper beats Rock.";
}
else if (humanChoiceLowerCase === 'paper' && computerChoice === 'scissors') {
    computerScore +=1;
    return "You lose! Scissors beats Paper";
}
else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'paper') {
    humanScore +=1;
    return "You win! Scissors beats Paper.";
}
else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'rock') {
    computerScore += 1;
    return "You lose! Rocks beats Scissors.";
}
else {
    return "Draw";
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log(`You win! ${humanScore} to ${computerScore}`);
    }

    else {
        console.log(`You lose! ${humanScore} to ${computerScore}`);
    }
    

}



