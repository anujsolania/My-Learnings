import { createContext, useState } from "react";

// 1. Create a Context
export const CounterContext = createContext()

export const Provider = ({children}) => {
    const [count, setCount] = useState(0)

    return (
    <CounterContext.Provider value={[count,setCount]}>
        {children}
    </CounterContext.Provider>
    )
}

