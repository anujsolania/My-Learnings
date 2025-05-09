import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
    const [data,setdata] = useState("")

    async function getdata() {
        const response = axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`,{
            withCredentials: true
        })
        setdata((await response).data)
    }

    useEffect(() => {
        getdata()
    },[])

  console.log(import.meta.env.VITE_URL);
  return (
    <div>
        {data}
    </div>
  )
}