"use client"
import { useState } from "react"
import Appbar from "../components/Appbar"
import { PrismaClient } from "../generated/prisma";

export default function Admin() {
    const [name,setname] = useState("")
    const [address,setaddress] = useState("")
    const[pin,setpin] = useState("")
    const[phone,setphone] = useState("")

    const [show,setshow] = useState(false)

    // const {setfirstname,setlastname} = useContext(MyContext)

    return (
        <>
        {/* // style={{right: showupdateinfo ? "0px" : "-100vw"}}  */}
            <div style={{ padding: "2%"}} className=" bg-[#161B22]" >
        {/* <Navabar shownav={shownav} setshownav={setshownav} name={name}  ></Navabar> */}
        <div className="flex w-full" > 
        <div className="w-[50%] text-2xl font-extrabold" >
            <h1 className="text-white" >Forms Page</h1>
        </div>
        <div className="w-[50%] flex items-center justify-end gap-3" >
            <button className="border rounded px-4 bg-white"
            onClick={() => {
                setshow(true)
            }} >CREATE FORM</button>
        </div>
        </div> 
    </div>

    {show? 
           <div className="h-screen w-screen fixed flex justify-center items-center backdrop-blur-xs transition-all duration-1000 bg-[#161B22]" >
            <div className="h-fit w-fit sm:w-90 flex flex-col justify-center items-center border border-black rounded-lg p-6 bg-white/90" >

                <div className="w-full flex " >
                    {/* onClick={() => {setshowupdateinfo(false)}} */}
                <i className="ri-arrow-right-line border rounded p-1.5"  ></i>
                </div>
                
                <div className="w-1/2 sm:w-full flex flex-col justify-center items-center gap-8" >
                <h1 className="font-semibold text-2xl" >Form details </h1>
                <p className="" >Enter the following fields</p>

                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter firstname"
                value={name} onChange={(e) => {setname(e.target.value)}} ></input>
                
                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter address"
                value={address} onChange={(e) => {setaddress(e.target.value)}} ></input>

                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter PIN"
                value={pin} onChange={(e) => {setpin(e.target.value)}} ></input>

                <input className="border w-full p-[2%] rounded" type="text" placeholder="Enter Phone number"
                value={phone} onChange={(e) => {setphone(e.target.value)}} ></input>

                <button onClick={async ()=> { 
                try {
                    // const token = localStorage.getItem("token")
                    // const response = await axios.patch(`${import.meta.env.VITE_URL}/api/v1/user/updateinfo`,{
                    //     newfirstname,
                    //     newlastname,
                    //     newemail,
                    //     newpassword
                    // },{
                    //     headers: {
                    //         Authorization: token
                    //     }
                    // })
                    // toast.success(response.data.mssg)

                    // if (newfirstname) { setfirstname(newfirstname), setnewfirstname("") }
                    // if (newlastname) { setlastname(newlastname), setnewlastname("") }


                } catch (error) {
                    // toast.error(error.response.data.error)
                    }

                }} className="border bg-black text-white rounded border-black w-fit p-[2%]"  >Submit</button>
                </div>
                
            </div>
        </div> : <div className="bg-[#161B22] h-screen w-screen" > 
            <h1 className="text-5xl text-white text-center" ></h1></div>
    }
         </>
    )
}