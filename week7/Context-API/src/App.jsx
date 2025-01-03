import React, { useState, useContext } from 'react';
import { CounterContext } from './components/Context';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterButton } from './components/CounterButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    // 2. Provide the context value
    <CounterContext.Provider value={{ count, setCount }}>
      <h1>Counter App with Context</h1>
      <CounterDisplay />
      <CounterButton />
    </CounterContext.Provider>
  );
}


export default App;
