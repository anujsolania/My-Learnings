import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useMousePointer() {
  const[position,setposition] = useState({x: 0,y: 0})

  const handlemousemove = (e) => {
    setposition({x: e.clientX,y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove",handlemousemove)

    return () => {
      window.addEventListener("mousemove",handlemousemove)
    }
  },[])

  return position
}

function App() {
  const position = useMousePointer()

  return (
    <>
    Your mouse position is {position.x} {position.y}
    </>
  )
}

export default App
