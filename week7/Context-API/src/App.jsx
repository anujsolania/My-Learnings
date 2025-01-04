import React from 'react';
import { Provider } from './components/Context';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterButton } from './components/CounterButton';

function App() {

  return (
    // 2. Provide the context value
    <Provider>
      <h1>Counter App with Context</h1>
      <CounterDisplay />
      <CounterButton />
    </Provider>
   
  );
}


export default App;
