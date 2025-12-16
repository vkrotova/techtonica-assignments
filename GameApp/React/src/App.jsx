import { useState } from 'react'
import './App.css'
import gamedisplay from "./components/GameDisplay"

function Game() {
  
  const [randomNum, setRandonNum] = useState();


  let num1 = Math.floor(Math.random() * 10) + 1;
const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");




}

  return <div>
       <GameDisplay></GameDisplay>


      </div>;
  
}

export default App
