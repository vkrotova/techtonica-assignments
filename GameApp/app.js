let randomNum = Math.floor(Math.random() * 10 + 1);

let guess = 1;

document.getElementById("submitguess").onclick = function () {

    console.log("works");

    let guessNum = document.getElementById("guessField").value;


    if (guessNum == randomNum) {
        alert("Yay, you guessed correctly"
            + guess + " GUESS ");
    }


    else if (guessNum > randomNum) {
        guess++;
        alert("Not it, try a smaller number");

    }
    else {
        guess++;
        alert("Nope, try a larger number")

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
