import axios from "axios";
import { useState } from "react";

export default function Signin() {
    const [username,setusername] = useState("")
  const [password,setpassword] = useState("")

  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <div>
      <input placeholder='username' onChange={(e) => {setusername(e.target.value)}} ></input><br></br>
      <input placeholder='password'onChange={(e) => {setpassword(e.target.value)}}></input><br></br>
      <button onClick={async () => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signin`,{
          username,password
        },{ withCredentials: true}
        )
        alert("logged in")
      }} >SIGNIN</button><br></br>
      <button>LOGOUT</button>
    </div>
  )
}