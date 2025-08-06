import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleCick() {
   setCount(prevCount => prevCount + 1)
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

       <p>The button has been clicked: {count} times</p>

      <Button onClick={handleCick}>click Me</Button>
      {/* <Button onClick={() => handleCick("Button2")}>Button2</Button>
      <Button onClick={() => handleCick("Button3")}>Button3</Button> */}
    </>
  )
}

export default App
