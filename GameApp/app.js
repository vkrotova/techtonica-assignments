let randomNum = Math.floor(Math.random() * 10 + 1); //Generated a random number//
let guess = 1;
let messageSuccess = "Yay, you guessed correctly"; //Stored the success message//
let messageSmaller = "Not it, try a smaller number than 0";
let messageLarger = "Nope, try a larger number than 0";

document.getElementById("submitguess").onclick = function () {

    let guessNum = document.getElementById("guessField").value; //a function to run when that button is clicked.//

    if (guessNum == randomNum) {
        alert(messageSuccess + " " + guess + " GUESS ");
    } else if (guessNum > randomNum) {
        guess++;
        
        // Array
        stringSize = messageSmaller.length -1; // Length of the string
        const charArray = messageSmaller.split(''); // Convert string to array of characters
        charArray[stringSize] = guessNum; // Modify the character 0 to the guessed number
        message = charArray.join(''); // Join the array back into a string

        alert(message);
    } else {
        guess++;

        //String
        let indexOfZero = messageLarger.indexOf("0"); // Find the index of Zero or location
        const charArray = messageLarger.split(''); // Convert string to array of characters
        const removedZero = charArray.pop(); // Remove the last array element 0
        charArray[indexOfZero] = guessNum; // Add the number to the end of the array in the same location as the zero
        message = charArray.join(''); // Join the array back into a string

        alert(message)
    }

}


document.getElementById("reset-button").addEventListener("click", function () {
    document.getElementById("reset-button").reset();
});

const timeDisplay = document.getElementById("timeDisplay");
let now = new Date();
let oneHourInMillis = 60000; // Adding time to clock
now.setTime(now.getTime() + oneHourInMillis);

timeDisplay.textContent = `Last guess time: ${now}`;

//Added a reset game function//
function resetGame() {
    let newSecret = Math.floor(Math.random() * 10) + 1;

    secretNumber = newSecret;

    attemptCount = 0;

    allGuesses = [];

    guessList.innerHTML = "";

    resultMessage.textContent = "Game reset!";

}
