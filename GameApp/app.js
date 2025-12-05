

let y = Math.floor(Math.random() * 10 + 1);


let guess = 1;

document.getElementById("submitguess").onclick = function () {

    console.log("works");

    let x = document.getElementById("guessField").value;


    if (x == y) {
        alert("Yay, you guessed correctly"
            + guess + " GUESS ");
    }


    else if (x > y) {
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
    now.setTime(now.getTime());  // Date.setTime example
    timeDisplay.textContent = `Last guess time: ${now.toLocaleTimeString()}`;