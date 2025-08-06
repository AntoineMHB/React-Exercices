import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [alerting, setAlerting] = useState(false)

  function handleCick() {
    setAlerting(prev => !prev)
    if (alerting) {
      alert("Clicked!")
    }
  }

  return (
    <>
      {/* <div className="bg-amber-400 h-96 w-96">
        <div className="w-full bg-amber-400 text-black pt-[170px]">Hello world!</div>
      </div> */}

      {/* Exercice 2 */}
      <div>
        <ul className="flex items-start justify-start gap-2">
          <a>Home</a>
          <li>Exercice1</li>
          <li>Exercice2</li>
          <li>Exercice3</li>
          <li>Exercice4</li>
          <li>Exercice5</li>
          <li>Exercice6</li>
          <li>Exercice7</li>
          <li>Exercice8</li>
          <li>Exercice9</li>
        </ul>
      </div>

      <button onClick={handleCick}>Click Me</button>
    </>
  )
}

export default App
