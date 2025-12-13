import { useState } from 'react'
import './App.css'
import gamedisplay from "./components/GameDisplay"

function App() {
  
  const [randomNum, setRandonNum] = useState();
  useEffect(() => {
    randomNumGenerator(); 

  }, [])
const randomNumGenerator =() => {
  let num1 = Math.floor(Math.random() * 10) + 1;
  setRandomNum(num1)
  console.log(num1);
}

  return <div>
       <GameDisplay></GameDisplay>


      </div>;
  
}

export default App
