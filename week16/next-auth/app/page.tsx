"use client"

import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";



export default function Home() {
  const session = useSession();

  return (
    <div className="flex bg-[#161B22] h-screen w-screen" >
      <div className="flex w-full justify-center items-center" >
        <div className="flex flex-col gap-10" >
        <h1 className="text-white text-6xl font-semibold" >Booking List Assignment</h1>
        <div className="flex justify-center" >
        <ul  className="list-disc list-inside text-xl" >
          <li className="text-white">Role based authentication module ✅</li>
          <li className="text-white"> Admin: CRUD opertions via Form✅</li>
          <li className="text-white">Guest: Read-only access to data entered by Admin✅</li>
          <li className="text-white">LOGOUT button✅</li>
          <li className="text-white">Responsiveness: Mobile friendly UI/UX✅</li>
          <li className="text-white">Deployed on Vercel✅</li>
          <li className="text-white">Github-Repo and code review✅ 
            <a className="px-4 underline font-light font-serif" href="https://github.com/anujsolania/BookingList-assignment.git" target="_blank" rel="noopener noreferrer">visit</a>
          </li>
        </ul>
        </div>
        <div className="flex justify-center" >
          <button className="text-white text-xl border w-[40%] py-2" onClick={() => {signIn()}} >CLICK HERE TO EXPLORE </button>
        </div>
        </div>
      </div>
    </div>
  );
}
