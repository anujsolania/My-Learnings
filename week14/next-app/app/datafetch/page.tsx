
import axios from "axios"

export default async function datapage() {
    const response = await axios.get("http://localhost:3000/api/user")
    const userdata = response.data.user

    return (
        <div className="flex h-screen w-screen" >
            <div className="flex w-full justify-center items-center" >
            <div className="border p-4" >
            Name: {userdata.username}<br></br>
            city: {"hulucgaduc@gmail.com"}
            </div>
            </div>
        </div>
    )
}