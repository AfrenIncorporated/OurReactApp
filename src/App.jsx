import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landingpage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import ClientReg from './Pages/ClientReg'
import News from './Pages/News'
import HowItWorks from './Pages/HowItWorks'
import Privacy from './Pages/Privacy'
import RegThree from './Pages/RegThree'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Landing/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/client-registration' element={<ClientReg/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path="/regthree" element={<RegThree />} />
      </Routes>
    </Router>
  )
}

export default App
