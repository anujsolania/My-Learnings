"use client"

import { useState } from "react"
export default function Appbar() {
    const[shownav,setshownav] = useState(false)

    // const name = firstname + " " + lastname
    return (
    <div style={{ padding: "2%"}} className=" bg-[#161B22]" >
        {/* <Navabar shownav={shownav} setshownav={setshownav} name={name}  ></Navabar> */}
        <div className="flex w-full" > 
        <div className="w-[50%] text-2xl font-extrabold" >
            <h1 className="text-white" >Forms Page</h1>
        </div>
        <div className="w-[50%] flex items-center justify-end gap-3" >
            <button className="border rounded px-4 bg-white"
            onClick={() => {
                setshownav(true)
            }} >CREATE FORM</button>
        </div>
        </div> 
    </div>
    
    )
}