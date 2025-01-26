import { useState } from "react"
import "../css/colortab.css"

export function Colortab() {
    const[color,setcolor] = useState("")

    return (
        <>
        <div className="colordiv" >
        <style>{
          `
          body {
          background-color: ${color}
          }
          `
          }</style>
            <div className="colortab" >
          <button className="btn redbtn" style={{backgroundColor: "red"}} onClick={() => {setcolor("red")}} >Red</button>
          <br></br>
    
          <button className="btn yellowbtn" style={{backgroundColor: "yellow"}} onClick={() => {setcolor("yellow")}} >Yellow</button>
          <br></br>
    
          <button className="btn blackbtn" style={{backgroundColor: "black",color: "white"}} onClick={() => {setcolor("black")}} >Black</button>
          <br></br>
          <button className="btn purplebtn" style={{backgroundColor: "purple",color: "white"}} onClick={() => {setcolor("purple")}} >Purple</button>
          <br></br>
          <button className="btn greenbtn" style={{backgroundColor: "green"}} onClick={() => {setcolor("green")}} >Green</button>
          <br></br>
          <button className="btn" onClick={() => {setcolor("white")}} >Default</button>
          <br></br>
            </div>
        </div>
        </>
      )
}

