// 3. Use context in the child components

import { useContext } from "react";
import { CounterContext } from "./Context";

export function CounterDisplay() {
  const [ count ] = useContext(CounterContext);
  return <p>Count: {count}</p>;
}