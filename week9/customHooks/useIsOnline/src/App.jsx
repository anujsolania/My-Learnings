import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  //custom hook
  function useIsOnline() {
    const [status,setstatus] = useState(navigator.onLine)

    useEffect(() => {
      window.addEventListener("online",() => {setstatus(true)})
      window.addEventListener("offline",() => {setstatus(false)})

      return () => {
        window.removeEventListener("online",() => {setstatus(true)})
        window.removeEventListener("offline",() => {setstatus(false)})
      }
    },[])

    return status
  }

function App() {
  const userOnline = useIsOnline()

  return (
    <>
    {userOnline ? "YOU ARE ONLINE" : "YOU ARE OFFLINE" }
    </>
  )
}

export default App
