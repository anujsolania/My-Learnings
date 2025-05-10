"use client"

import { signIn, signOut } from "next-auth/react"
import React from "react"




export function Appbar() {
    return (
        <div>
            <button className="border border-white" onClick={() => {signIn()}} >SIGNIN</button> <br></br>
            <button className="border border-white" onClick={() => {signOut()}} >SIGNOUT</button>
        </div>
    )
}