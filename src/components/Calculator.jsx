import { useState } from "react"

export default function() {
    const [clickedText, setClickedText] = useState('')

    function handleClick(event) {
      if (clickedText.length < 9) {
        setClickedText(prev => prev + event.target.textContent)
      }
        
    }

    function formatWithCommas(numberString) {
      if (!numberString) return "";
      return parseInt(numberString).toLocaleString("en-US");

    }
    return (
        <>
          <div className="w-[250px] h-[50px] bg-gray-800">
             <p className="w-full text-4xl text-white tracking-widest">{formatWithCommas(clickedText)}</p>
          </div>
          <div className="pt-2 flex items-center justify-center gap-2">
            <button className="w-14 h-14 rounded-full bg-black">AC</button>
            <button className="w-14 h-14 rounded-full bg-black">+/-</button>
            <button className="w-14 h-14 rounded-full bg-black">%</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">÷</button>
          </div>
         
         <div className="pt-2 flex items-center justify-center gap-2">
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">7</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">8</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">9</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">x</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">4</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">5</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">6</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">-</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">1</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">2</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">3</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">+</button>
          </div>

         <div className="pt-2 flex items-center justify-center gap-2">
            <button onClick={handleClick} className="w-[120px] h-14 bg-black rounded-full">0</button>
            <button onClick={handleClick} className="w-14 h-14 rounded-full bg-black">.</button>
            <button className="w-14 h-14 rounded-full bg-amber-500">=</button>
          </div>


        </>
    )
}