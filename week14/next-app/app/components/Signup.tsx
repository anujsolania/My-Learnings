

export default function Signup() {
    return (
        <div className="flex flex-col w-fit" >
            <input className="border p-2" placeholder="enter username" ></input>
            <input className="border p-2" placeholder="enter password"></input>
            <button className="border text-gray-300 bg-black p-2" >Signup</button>
        </div>
    )
}