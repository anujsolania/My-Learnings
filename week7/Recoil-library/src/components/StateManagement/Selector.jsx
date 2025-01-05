import { selector, useRecoilValue } from "recoil";
import { countstate } from "./Atom";


export const EvenOddSelector = selector({
    key: 'EvenOddSelector',
    get: ({ get }) => {
        const count = get(countstate)
        return count%2 == 0? "EVEN" : "ODD"
    }
    //get : async ({get}) => async data query for fething data 
})