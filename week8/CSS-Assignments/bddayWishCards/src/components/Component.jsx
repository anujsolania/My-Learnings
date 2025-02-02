import { useState } from "react"
import "../css/component.css"
export function Component({setmode,setname}) {
    return (
        <div className="parent" >
            <div className="child" >
                    <h1>Enter Your Name</h1>
                    <input onChange={(e) => {setname(e.target.value)}} type="text" placeholder="Enter Your Name"></input>
                    <button onClick={() => {setmode(1)}} >Done</button>
             </div>
        </div>
    ) 
}