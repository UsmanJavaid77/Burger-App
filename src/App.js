import './App.css'
import Header from './Components/Header'
import Burger from './Components/Burger'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Burger />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
