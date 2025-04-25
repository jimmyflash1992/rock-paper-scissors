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
let gameCount = 0;

function playRound(humanChoice, computerChoice) {
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    if (humanChoiceLowerCase === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log("You lose! Paper beats Rock");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log("You win! Rock beats Scissors");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log("You win! Paper beats Rock.");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log("You win! Scissors beats Paper.");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log("You lose! Rocks beats Scissors.");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else {
        console.log("Draw");
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
gameCount += 1;
}


function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    if (gameCount == 5 && humanScore > computerScore) {
        console.log(`You win the game! ${humanScore} to ${computerScore}`);
    }

    else if (gameCount == 5 && humanScore < computerScore) {

        console.log(`You lose the game! ${humanScore} to ${computerScore}`);
    }

}

playGame();





