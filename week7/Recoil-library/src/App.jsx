import './App.css'
import { CountDisplay } from './components/CountDisplay'
import { CountBtns } from './components/CountBtns'
import { EvenOdd } from './components/EvenOdd'

function App() {
  

  return (
    <>

     <h2>Counter App with Recoil(state management library)</h2>
     <CountDisplay></CountDisplay>
     <EvenOdd></EvenOdd>
     <CountBtns></CountBtns>
   
    </>
  )
}

export default App
