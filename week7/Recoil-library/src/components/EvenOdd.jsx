import { useRecoilValue } from "recoil"
import { EvenOddSelector } from "./StateManagement/Selector"



export const EvenOdd = () => {
   const EvenOdd = useRecoilValue(EvenOddSelector)

   return <h2>The number is {EvenOdd}</h2>
}