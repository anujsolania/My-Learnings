import axios from 'axios';
import { useState } from "react";
import "../css/component.css"

export function Component() {
    const[userdata,setuserdata] = useState()

    const[username,setusername] = useState()

    async function APIreq(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            setuserdata(response.data)
        } catch (error) {
            console.error("Error while fetching use data", error)
        }
    }



    return (
        <>
        <div className='parentDiv' >

        <h1>Github Card</h1>

        <div className='inputDiv' >
        <input onChange={(e) => {setusername(e.target.value)}} type="text" placeholder="Enter Github Username"></input>
        <button onClick={() => {APIreq(username)}}>Search</button>
        </div>

        {userdata == null ? null :
            <div className="cardDiv" >
                <div className='profileDiv' >
                <img src={`${userdata.avatar_url}`}></img>

                <div className='nameDiv' >
                <h3>{userdata.name}</h3>
                <p>{userdata.location}</p>
                </div>
                </div>
 
                <div className='dataDiv'>

                <div className='repositories' >
                <p style={{textAlign: 'center'}} >{userdata.public_repos}</p>
                <p>Repositories</p>

                </div>
                <div className='followers' >
                <p style={{textAlign: 'center'}}>{userdata.followers}</p>
                <p>Followers</p>
                </div>

                <div className='following' >
                <p style={{textAlign: 'center'}}>{userdata.following}</p>
                <p>Following</p>
                </div>

                </div>
            </div>
        }
        </div>
        </>
    )
}