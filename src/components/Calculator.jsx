import { useState } from "react"

export default function() {
    const [clickedText, setClickedText] = useState("0")

    function handleClick(event) {
      if (clickedText.replace("-", "").length < 10) {
        setClickedText(prev => prev + event.target.textContent)
      }    
    }

    function toggleNegative() {
      if (clickedText.startsWith("-")) {
        setClickedText(clickedText.slice(1))
        console.log("Removed minus sign")
      } else {
        setClickedText("-" + clickedText);
        console.log("Added minus sign")
      }
    }

    function formatWithCommas(numberString) {
      if (!numberString) return "";
      return parseFloat(numberString).toLocaleString("en-US");
    }

    function handleErase() {
      setClickedText(prev =>  "0")
    }

    function handlePercentage() {
      setClickedText(prev => {
        const num = Number(prev)
        console.log(`Here is the number after conversion ${num}`)
        const theString = (num/100).toString()
        console.log("Here the string after division" + theString)
        return theString
      } )
    }
    return (
        <>
          <div className="w-[250px] h-[50px] bg-gray-800">
             <p className="flex items-end justify-end w-full text-4xl text-white tracking-widest">{formatWithCommas(clickedText)}</p>
          </div>
          <div className="pt-2 flex items-center justify-center gap-2">
            <button onClick={handleErase} className="w-14 h-14 rounded-full bg-black">AC</button>
            <button onClick={toggleNegative} className="w-14 h-14 rounded-full bg-black">+/-</button>
            <button onClick={handlePercentage} className="w-14 h-14 rounded-full bg-black">%</button>
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