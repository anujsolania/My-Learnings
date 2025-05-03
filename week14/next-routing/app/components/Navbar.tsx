"use client"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex justify-around gap-5 p-5 border-b" >
            <Link href={"/"}>
            <button className="px-2 text-sm border rounded">HOME</button>
            </Link>
            <Link href={"/pages/static"}>
            <button className="px-2 text-sm border rounded">STATIC</button>
            </Link>
            <Link href={"/pages/interactive"}>
            <button className="px-2 text-sm border rounded">INTERACTIVE</button>
            </Link>
        </div>
    )
}