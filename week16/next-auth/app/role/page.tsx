"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Role() {
    const [role,setrole] = useState("");

    const router = useRouter();

    return (
        <div className="flex bg-[#161B22] h-screen w-screen" >
            <div className="flex w-screen justify-center items-center" >
                <div className="flex flex-col gap-5" >
                <input type="text" placeholder="Enter your role" className="border rounded-xl p-4 bg-white w-full font-semibold"
                onChange={(e) => {setrole(e.target.value)}}></input>
            <div className="flex justify-center" >
                 <button className="text-white bg-green-600 w-[80%] py-2 rounded-lg font-semibold"
                 onClick={() => {
                    const cleanrole = role.replaceAll("[^a-zA-Z0-9]","").toLowerCase()
                    if (cleanrole == "admin") {
                        router.push("/admin")
                    } else {
                        router.push("/user")
                    }
                 }} >CONFIRM ROLE</button>
            </div>
                </div>
            </div>

        </div>
    )
}