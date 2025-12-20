import React, { useState } from 'react'
import './GameDisplay.css';

//Defined a React componenet called Game Display. 
// max number is a prop passed into a cpomponent
//max number used to set the upper limit for the random number guessing game. 

function GameDisplay({ maxNumber }) {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * maxNumber) + 1)
    const [guess, setGuess] = useState('')
    const [title, setTitle] = useState(`Guess a number between 1 and ${maxNumber}`)
    const [message, setMessage] = useState('')



//random number stores the number the player is trying to guess.

// Generates randomly between 1 and maxNumber.

//guess stores the user’s input from the text box.

//title displays the game title ,uses maxNumber to show the range.

//message shows feedback like “too high”, “too low”, or “correct”.

    function handleGuess() {
        const num = Number(guess)

        // Empty
        if (guess == '' || Number.isNaN(num)) [
            setMessage('Please enter a valid number.')
        ]

        //Not Empty
        if (num === randomNumber) {
            setMessage(`Hurray! The number was ${randomNumber}.`)
        } else if (num < randomNumber) {
            setMessage(`The number is too low, try again.`)
        } else {
            setMessage(`The number is too high, try again.`)
        };

    }
    function handleReset() {
        setRandomNumber(Math.floor(Math.random() * maxNumber) + 1)
        setMessage('')
        setGuess('')
    }

    function handleGuessChange(event) {
        setGuess(event.target.value);
    }

    return (
        <div className='main'>
            <div className="container">
                <div className="topSection"><img src='./src/components/detective.jpg' /></div>

                <div className="title">
                    <h1>{title}</h1>
                </div>

                <div className="middleSection">
                    <p>Start Guessing</p>

                    <div className="Inputs">
                        <input type="text" value={guess} onChange={handleGuessChange} />

                        <div className="buttons"></div>
                        <button onClick={handleGuess}>Guess</button>
                        <button onClick={handleReset}>Reset</button>
                        <h2>{message}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameDisplay