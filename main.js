// Rock, Paper, scissors Game with Functions
const initGame = () => {
    const startGame = confirm("shall we play rock paper, or scissors? ");
    startGame ? playGame() : alert("ok, maybe next time.");
}

// Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChioce(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWiner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
        }

    }
};

const getPlayerChoice = () =>{
    return prompt ("please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChioce = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors" ||
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper or scissors");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWiner = (player, computer) => {
    const winner =
        player === computer
            ?"Tie game!"
            : player === "rock" && computer === "paper"
            ?`playerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
            :player === "paper" && computer === "scissors"
            ?`playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
            :player === "scissors" && computer === "rock"
            ? `playerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
            :`playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`

    return winner
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("play Again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing ");
};

initGame();

