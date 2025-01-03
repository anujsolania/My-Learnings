// 3. Use context in the child components

import { useContext } from "react";
import { CounterContext } from "./Context";

export function CounterButton() {
    const { setCount } = useContext(CounterContext);
    return (
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    );
  }