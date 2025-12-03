function resetGame() {

    // Reset secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts
    guessAttempts = 0;

    // Demonstrate array manipulation:
    guessHistory.unshift("reset-start");
    guessHistory.push("reset-end");
    guessHistory.pop();
    guessHistory.shift();

    // Clear nested history
    detailedHistory = [];
}