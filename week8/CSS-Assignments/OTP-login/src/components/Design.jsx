import { useRef } from "react"
import "../css/design.css"
import { useState } from "react"

export function Design() {
    const[otp,setotp] = useState(["", "", "", ""])

    const inputRef = useRef([])

    function handleChange(index,e) {
        const value = e.target.value

        if (value) {
            const newotp = [...otp]
            newotp[index] = value  //update the value
            setotp(newotp)
            
            inputRef.current[index+1].focus() //shift the focus
        }
    }

    function handleKeydown(index,e) {
        if (e.key == "Backspace") {
            if (otp[index] == "")  {
                inputRef.current[index-1].focus()
            } else if (otp[index] !== "") {
                const newotp = [...otp]
                newotp[index] = "" 
                setotp(newotp)
            }
        }
    }
    

    return (
        <div className="parent" >
        <div className="div1" >
            <h1>Login via OTP</h1>
            <input type="number" placeholder="Enter your mobile number" ></input>
            <button >Send OTP</button>
        </div>
        <div className="div2" >
            <h1>Login via OTP</h1>
            <div className="inputs" >
                {otp.map((value,index) => (
                    <input key={index} value={value} className="ip" type="text" maxLength={1}
                    onChange={(e) => handleChange(index,e)}
                    onKeyDown={(e) => handleKeydown(index,e)}
                    ref={(el) => (inputRef.current[index]= el)} ></input>
                ))}
            </div>
            <button>Login</button>
        </div>
        </div>
    )
    
}