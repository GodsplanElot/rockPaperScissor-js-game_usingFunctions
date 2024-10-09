// Rock, Paper, scissors Game with Functions
const initGame = () => {
    const startGame = confirm("shall we play rock paper, or scissors? ");
    startGame ? playGame() : alert("ok, maybe next time.");
}

// Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
    }
}