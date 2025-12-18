import { useState } from 'react'
import './App.css'
import GameDisplay from "./components/GameDisplay"

function App() {

  const [randomNum, setRandonNum] = useState();


  let num1 = Math.floor(Math.random() * 10) + 1;
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");



  return (
  
    <div><GameDisplay /></div>
    

  )

}

export default App
