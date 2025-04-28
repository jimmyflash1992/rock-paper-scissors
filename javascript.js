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


function playRound(humanChoice, computerChoice) {
    let humanChoiceLowerCase = humanChoice.toLowerCase();
    if (humanChoiceLowerCase === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        results.textContent = "You lose! Paper beats Rock";

    }
    else if (humanChoiceLowerCase === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        results.textContent = "You win! Rock beats Scissors";

    }
    else if (humanChoiceLowerCase === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        results.textContent = "You win! Paper beats Rock.";

    }
    else if (humanChoiceLowerCase === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        results.textContent = "You lose! Scissors beats Paper";

    }
    else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        results.textContent = "You win! Scissors beats Paper.";

    }
    else if (humanChoiceLowerCase === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        results.textContent = "You lose! Rocks beats Scissors.";

    }
    else {
        results.textContent = "Draw";

    }

    runningScore.textContent = `Current Score Human: ${humanScore} Computer: ${computerScore}`;
}


function playGame(humanSelection) {

    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore == 5 || computerScore == 5) {
        //turn off other divs
        div.removeChild(results);
        div.removeChild(runningScore);
        div.appendChild(finalScore);


        if (humanScore > computerScore) {
             
            finalScore.textContent = `You win the game! ${humanScore} to ${computerScore}`;
        }

        else if (humanScore < computerScore) {

            finalScore.textContent = `You lose the game! ${humanScore} to ${computerScore}`;
        }

        //reset scores automatically
        humanScore = 0;
        computerScore = 0;


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
const runningScore = document.createElement("div");
const finalScore = document.createElement("div");









//results.textContent = "Hello!";


//append and display on page
div.appendChild(rockbtn);
div.appendChild(paperbtn);
div.appendChild(scissorsbtn);
div.appendChild(results);
div.appendChild(runningScore);


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






