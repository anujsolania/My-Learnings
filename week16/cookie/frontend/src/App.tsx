
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Signin from './components/signin';
import User from './components/user';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Signin></Signin>} ></Route>
      <Route path={"/user"} element={<User />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
