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
            <button className="w-14 h-14 rounded-full bg-black">AC</button>
            <button className="w-14 h-14 rounded-full bg-black">+/-</button>
            <button className="w-14 h-14 rounded-full bg-black">%</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">÷</button>
          </div>
         
         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-14 h-14 rounded-full bg-black">7</button>
            <button className="w-14 h-14 rounded-full bg-black">8</button>
            <button className="w-14 h-14 rounded-full bg-black">9</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">x</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-14 h-14 rounded-full bg-black">4</button>
            <button className="w-14 h-14 rounded-full bg-black">5</button>
            <button className="w-14 h-14 rounded-full bg-black">6</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">-</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-14 h-14 rounded-full bg-black">1</button>
            <button className="w-14 h-14 rounded-full bg-black">2</button>
            <button className="w-14 h-14 rounded-full bg-black">3</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">+</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-[120px] h-14 bg-black rounded-full">0</button>
            <button className="w-14 h-14 rounded-full bg-black">.</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">=</button>
          </div>


        </>
    )
}