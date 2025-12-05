let randomNum = Math.floor(Math.random() * 10 + 1);
let guess = 1;
let messageSuccess = "Yay, you guessed correctly";
let messageSmaller = "Not it, try a smaller number";
let messageLarger = "Nope, try a larger number";

document.getElementById("submitguess").onclick = function () {


    let guessNum = document.getElementById("guessField").value;


    if (guessNum == randomNum) {
        alert(messageSuccess
            + guess + " GUESS ");
    }


    else if (guessNum > randomNum) {
        guess++;
        alert(messageSmaller);

    }
    else {
        guess++;
        alert(messageLarger)

    }

}




document.getElementById("reset-button").addEventListener("click", function() {
  document.getElementById("reset-button").reset();
});

const timeDisplay = document.getElementById("timeDisplay");
let now = new Date();
    now.setTime(now.getTime());  
    timeDisplay.textContent = `Last guess time: ${now.toLocaleTimeString()}`;


    function resetGame() {
    let newSecret = Math.floor(Math.random() * 10) + 1;

    secretNumber = newSecret;

    attemptCount = 0;

    allGuesses = [];

    guessList.innerHTML = "";

    resultMessage.textContent = "Game reset!";

}
