function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attemptCount = 0;

    guessHistory.unshift("reset start");
    guessHistory.push("reset end");      
    guessHistory.pop();                   
    guessHistory.shift();                

    nestedHistory = []; 