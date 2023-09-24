//your code here
const turn = document.querySelector("[data-ns-test='game-number']");
const start = document.querySelector("[data-ns-test='play-game']");
const Rock = document.querySelector("[data-ns-test='rock']");
const Paper = document.querySelector("[data-ns-test='paper']");
const Scissors = document.querySelector("[data-ns-test='scissors']");
const computerChoose = document.querySelector("[data-ns-test='computer-choose']");

const roundResult = document.querySelector("[data-ns-test='round-result']");
const roundsLeft = document.querySelector("[data-ns-test='round-left']");
const userPoints = document.querySelector("[data-ns-test='user-points']");
const computerPoints = document.querySelector("[data-ns-test='computer-points']");
const gameResult = document.querySelector("[data-ns-test='game-result']");


let userScore = 0;
let computerScore = 0;
let roundsRemaining = 0;

let loading = false;

start.addEventListener('click', () => {
    rounds = parseInt(turn.value);
    if (!isNaN(rounds) || rounds > 0) {
        console.log(rounds);
        roundsRemaining = rounds;
        roundsLeft.textContent = rounds;
        userPoints.textContent = userScore;
        computerPoints.textContent = computerScore;
        loading = true;

    }

})

// Function to generate a random choice for the computer
function generateComputerChoice() {
    const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];
}

function updateGame(userChoice) {

    if (loading) {
        const computerChoice = generateComputerChoice();
        console.log("User: ", userChoice, "\n Computer:", computerChoice );
        computerChoose.textContent = computerChoice;
        const result = determineRoundWinner(userChoice, computerChoice);
        if (result === "WON") {
            userScore++;
        } else if (result === "LOSE") {
            computerScore++;
        }

        roundResult.textContent = result;
        roundsRemaining = roundsRemaining - 1;

        roundsLeft.textContent = roundsRemaining;
        userPoints.textContent = userScore;
        computerPoints.textContent = computerScore;

        // check if no round left
        if (roundsRemaining === 0) {
            if (userScore > computerScore) {
                gameResult.textContent = "WON";
            } else if (userScore < computerScore) {
                gameResult.textContent = "LOSE";
            } else {
                gameResult.textContent = "TIE";
            }
            loading = false;
            userScore = 0;
            computerScore = 0;
        }
    }
}


// if (loading) {

// }

Rock.addEventListener('click', () => updateGame("ROCK"));
Scissors.addEventListener('click', () => updateGame("SCISSORS"));
Paper.addEventListener('click', () => updateGame("PAPER"));



function determineRoundWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "TIE";
    } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        return "WON";
    } else {
        return "LOSE";
    }
}