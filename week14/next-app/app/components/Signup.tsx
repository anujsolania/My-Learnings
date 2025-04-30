"use client"
import axios from "axios"
import { useRouter } from "next/navigation";

import { useState } from "react";
import { signup } from "../actions/user";


export default function Signup() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter()

    return (
        <div className="flex flex-col w-fit" >
            <input className="border p-2" placeholder="enter username" value={username} onChange={(e) => { setusername(e.target.value)}} ></input>
            <input className="border p-2" placeholder="enter password" value={password} onChange={(e) => { setpassword(e.target.value)}}></input>
            <button className="border text-gray-300 bg-black p-2" 
            // onClick={async () => {
            //     try {
            //         const response = await axios.post("http://localhost:3000/api/user", {
            //             username,
            //             password
            //         })
            //         router.push("/datafetch")
            //         console.log(response.data)
                    
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }} 
            onClick={async () => {
                const response = await signup(username,password)
                router.push("/datafetch")
                console.log(response)
            }}
            >Signup</button>
        </div>
    )
}