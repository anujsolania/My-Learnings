import { useState } from 'react'
import './App.css'
import { Component } from './components/Component'
import { Cards } from './components/Cards'

function App() {
  const[mode,setmode] = useState(0)
  const[name,setname] = useState("")

  return (
    <div>
    { mode == 0 ? 
     <Component setmode={setmode} setname={setname}></Component> :
     <Cards name={name} setmode={setmode}></Cards>
     }
    </div>
  )
}

export default App
