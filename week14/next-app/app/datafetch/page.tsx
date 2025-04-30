
import axios from "axios"

// async function getdetails() {
//     await new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, 5000);
//     })
//     const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//     return response.data
// }


export default async function datapage() {
    const response = await axios.get("http://localhost:3000/api/user")
    const userdata = response.data

    return (
        <div className="flex h-screen w-screen" >
            <div className="flex w-full justify-center items-center" >
            <div className="border p-4" >
            Name: {userdata.name}<br></br>
            city: {userdata.email}
            </div>
            </div>
        </div>
    )
}