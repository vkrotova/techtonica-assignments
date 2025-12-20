import React from 'react'
import gamedisplay from "./components/GameDisplay";
const GameDisplay = () => (

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
                    <button>Guess</button>
                    <button>Reset</button>



                </div>



            </div>


        </div>
    </div>
        )
        export default GameDisplay