import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landingpage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import ClientReg from './Pages/ClientReg'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Landing/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/client-registration' element={<ClientReg/>}/>
      </Routes>
    </Router>
  )
}

export default App
