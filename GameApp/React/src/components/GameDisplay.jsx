import React, { useState } from 'react'
import './GameDisplay.css'

function GameDisplay({ maxNumber }) {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()* maxNumber) + 1)
    const [guess, setGuess] = useState('')
    const [message, setMessage] = useState(`Guess a number between 1 and ${maxNumber}`)

    const handleGuess = () => {}
    const handleReset = () => {}



    return (
        <div className='main'>
            <div className="container">
                <div className="topSection"></div>
                <div className="line"></div>
                <h1>???</h1>
                <div className="line"></div>


                <div className="title">
                    <h1>Guess My Number</h1>
                </div>

                <div className="middleSection">
                    <p>Score: <span>10</span></p>
                    <p>High Score: <span>10</span></p>
                    <p>Start Guessing</p>

                    <div className="Inputs">
                        <input type="number" />
                        <div className="buttons"></div>
                        <button onClick={handleGuess}>Guess</button>
                        <button onClikc={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameDisplay