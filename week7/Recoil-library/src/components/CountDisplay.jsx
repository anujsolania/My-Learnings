import { useRecoilValue } from "recoil"
import { countstate } from "./StateManagement/Atom"


export function CountDisplay() {
    const count = useRecoilValue(countstate)
    return (
        <>
        <h1>Count: {count}</h1>
        </>
    )
}