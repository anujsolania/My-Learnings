import { useState } from "react"

export function Component() {
    const [n,setn] = useState()
    const[finalPara, setfinalPara] = useState()

    let arr = ["lorem", "ipsum", "rdit", "concretur", "picasu"]

    function paraGenerate(arr) {
        let para = ""

        let count = 0
        for (let i = 0; i < n; i++) {
            para += arr[Math.trunc(Math.random() * 5)] + " "
            count++
            if (count >= 10) {
                para += ". "
                count = 0
            } 
        }
         setfinalPara(para)
    }

    
    return (
        <>
        <div className="parent" >
            <h1>Para Generator</h1>

            <div className="innerdiv" >
            <input onChange={(e)=> {setn(e.target.value)}} type="number" placeholder="Enter Number of Words"></input>
            <button onClick={() => {paraGenerate(arr)}} >Generate</button>
            </div>
            <div className="paradiv"  >
                {finalPara}
            </div>
        </div>
        </>
    )
}