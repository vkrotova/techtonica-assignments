import { useState } from 'react'
import './App.css'
import GameDisplay from "./components/GameDisplay.jsx"

function App() {

  return (

    <div>
      <GameDisplay maxNumber={100} />
    </div>


  )

}

export default App
