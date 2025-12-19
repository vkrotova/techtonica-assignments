import React, { useState } from 'react'
import './GameDisplay.css';

function GameDisplay({ maxNumber }) {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()* maxNumber) + 1)
    const [guess, setGuess] = useState('')
    const [title, setTitle] = useState(`Guess a number between 1 and ${maxNumber}`)
    const [message, setMessage] = useState('')

    function handleGuess () {
        const num = Number(guess)

        // Empty
        if (guess == '' || Number.isNaN(num)) [
            setMessage('Please enter a valid number.')
        ]

        //Not Empty
        if (num === randomNumber){
            setMessage(`Hurray! The number was ${randomNumber}.`)
         } else if (num < randomNumber) {
            setMessage(`The number is too low, try again.`)
         } else {
            setMessage(`The number is too high, try again.`)
         }

    }
    function handleReset () {
        setRandomNumber(Math.floor(Math.random()* maxNumber) + 1)
        setMessage('')
        setGuess('')
    }

    function handleGuessChange (event) {
        setGuess(event.target.value);
    }


    return (
        <div className='main'>
            <div className="container">
                <div className="topSection"></div>
                <div className="line"></div>
                <h1>???</h1>
                <div className="line"></div>


                <div className="title">
                    <h1>{ title }</h1>
                </div>

                <div className="middleSection">
                    <p>Score: <span>10</span></p>
                    <p>High Score: <span>10</span></p>
                    <p>Start Guessing</p>

                    <div className="Inputs">
                        <input type="text" value={guess} onChange={handleGuessChange}/>
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