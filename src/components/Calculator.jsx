import { useState } from "react"

export default function() {
    const [clickedText, setClickedText] = useState('')

    function handleClick(event) {
        setClickedText(event.target.clickedText)
    }
    return (
        <>
          <h1>{clickedText}</h1>
          <div className="flex items-center justify-center gap-2">
            <button className="w-20">AC</button>
            <button className="w-20">+/-</button>
            <button className="w-20">%</button>
            <button className="w-20">÷</button>
          </div>
         
         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-20">7</button>
            <button className="w-20">8</button>
            <button className="w-20">9</button>
            <button className="w-20">X</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-20">4</button>
            <button className="w-20">5</button>
            <button className="w-20">6</button>
            <button className="w-20">-</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-20">1</button>
            <button className="w-20">2</button>
            <button className="w-20">3</button>
            <button className="w-20">+</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-[167px]">0</button>
            <button className="w-20">.</button>
            <button className="w-20">=</button>
          </div>


        </>
    )
}