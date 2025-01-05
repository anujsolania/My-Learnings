
import './App.css'
import { useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { TodosAtomFamily } from './components/StateManagement/AtomFamily'
import { Suspense } from 'react'

function App() {
  

  return (
    <>
    <Suspense fallback={"loadinggg..."} >

    <Todo id={1} ></Todo>
    <Todo id={2} ></Todo>
    
    </Suspense>
    </>
  )
}

function Todo({id}) {

  const todo = useRecoilValue(TodosAtomFamily(id))
  
  return (
    <>
    {todo.title}
    <br></br>
    </>
  )
}

export default App
