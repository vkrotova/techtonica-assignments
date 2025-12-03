function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attemptCount = 5;

    guessHistory.unshift("reset start");
    guessHistory.push("reset end");      
    guessHistory.pop();                   
    guessHistory.shift();                

    nestedHistory = []; 
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);