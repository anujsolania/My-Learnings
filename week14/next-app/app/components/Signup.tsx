"use client"
import axios from "axios"
import { useRouter } from "next/navigation";

import { useState } from "react";

// async function postrequest() {
//     try {
//         const response = await axios.post("http://localhost:3000/api/user", {
//             username: "anuj",
//             password: "haleluya"
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    return (
        <div className="flex flex-col w-fit" >
            <input className="border p-2" placeholder="enter username" value={username} onChange={(e) => { setUsername(e.target.value)}} ></input>
            <input className="border p-2" placeholder="enter password" value={password} onChange={(e) => { setPassword(e.target.value)}}></input>
            <button className="border text-gray-300 bg-black p-2" 
            onClick={async () => {
                try {
                    const response = await axios.post("http://localhost:3000/api/user", {
                        username,
                        password
                    })
               
                    console.log(response.data)
                    
                } catch (error) {
                    console.log(error)
                }
            }} >Signup</button>
        </div>
    )
}