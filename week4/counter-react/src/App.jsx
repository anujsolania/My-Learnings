import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setcount] = useState(0)

  return (
    <>
      <div>
       <Component count={count} setcount= {setcount}></Component>
      </div>
    </>
  )
}

function Component(props) {
  function clickfn() {
    props.setcount(props.count+1)
  }
  return createElement(
    "button",
    {onClick: clickfn},
    `COUNT ${props.count}`
  )
}

export default App
