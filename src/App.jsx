import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor=color;
  }, [color])
  
    

  return (
    <div className='buttons-section'>
      <button onClick={() => setColor("#B1B2FF")} style={{backgroundColor:"#B1B2FF"}}>Purple</button> 
      <button onClick={() => setColor("#FFB6B9")} style={{backgroundColor:"#FFB6B9"}}>Salmon</button>
      <button onClick={() => setColor("#F5EBE0")} style={{backgroundColor:"#F5EBE0"}}>Beige</button>
      <button onClick={() => setColor("#9DC08B")} style={{backgroundColor:"#9DC08B"}}>Green</button>
      <button onClick={() => setColor("#FF5722")} style={{backgroundColor:"#FF5722"}}>Saffron</button>
      <button onClick={() => setColor("#F2789F")} style={{backgroundColor:"#F2789F"}}>Pink</button>
      <button onClick={() => setColor("#A2D5F2")} style={{backgroundColor:"#A2D5F2"}}>Sky</button>
    </div>
  )
}

export default App
