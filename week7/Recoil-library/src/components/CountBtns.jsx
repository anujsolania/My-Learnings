import { useRecoilState, useSetRecoilState } from "recoil"
import { countstate } from "./StateManagement/Atom"

export function CountBtns() {
    const setcount = useSetRecoilState(countstate)

    return ( 
        <>
        <button onClick={() => setcount((prev) => prev+1)} >
            INCREMENT
        </button>
        <button onClick={() => setcount((prev) => prev-1)} >
            DECREMENT
        </button>
        </>
    )
}