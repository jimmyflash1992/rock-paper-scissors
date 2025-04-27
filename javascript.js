function getComputerChoice() {
    const randvalue = Math.floor(Math.random() * (3 - 1 + 1)) + 1; // The maximum is inclusive and the minimum is inclusive

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


let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function playRound(humanChoice, computerChoice) {
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    if (humanChoiceLowerCase === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        results.textContent = "You lose! Paper beats Rock";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        results.textContent = "You win! Rock beats Scissors";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        results.textContent = "You win! Paper beats Rock.";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        results.textContent = "You lose! Scissors beats Paper";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        results.textContent = "You win! Scissors beats Paper.";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        results.textContent = "You lose! Rocks beats Scissors.";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    else {
        results.textContent = "Draw";
        console.log(`Current Score Human: ${humanScore} Computer: ${computerScore}`);
    }
    gameCount += 1;
}


function playGame(humanSelection) {

    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    if (gameCount == 5 && humanScore > computerScore) {
        console.log(`You win the game! ${humanScore} to ${computerScore}`);
    }

    else if (gameCount == 5 && humanScore < computerScore) {

        console.log(`You lose the game! ${humanScore} to ${computerScore}`);
    }

}

//Create Buttons for Rock Paper Scissors

const body = document.querySelector('body');

const div = document.createElement("div");

const rockbtn = document.createElement("button");
rockbtn.innerHTML = "Rock";


const paperbtn = document.createElement("button");
paperbtn.innerHTML = "Paper";

const scissorsbtn = document.createElement("button");
scissorsbtn.innerHTML = "Scissors";

// create div to display results
const results = document.createElement("div");







//results.textContent = "Hello!";


//append and display on page
div.appendChild(rockbtn);
div.appendChild(paperbtn);
div.appendChild(scissorsbtn);
div.appendChild(results);

body.appendChild(div);

// JS to take human choice, through swtich state and for each 

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        switch (button.innerHTML) {
            case "Rock":
                playGame(button.innerHTML);
                break;
            case "Paper":
                playGame(button.innerHTML);
                break;
            case "Scissors":
                playGame(button.innerHTML);
                break;
        }
    });
});






// playGame(); //hit this 5 times






