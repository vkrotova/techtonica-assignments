import { useState } from 'react'
import './App.css'

function App() {
  
  const [randomNum, setRandonNum] = useState();
  useEffect(() => {
    randomNumGenerator() 

  }, [])
const randomNumGenerator =() => {
  let num 1 = Math.floor(Math.random( *10)) +1;
  setRandomNum(num1)
}

  return <div>
       


      </div>;
  
}

export default App
