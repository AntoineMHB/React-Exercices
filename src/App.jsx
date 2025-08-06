import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-amber-400 h-96 w-96">
        <div className="w-full bg-amber-400 text-black pt-[170px]">Hello world!</div>
      </div>
    </>
  )
}

export default App
