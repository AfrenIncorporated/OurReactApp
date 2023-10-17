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
import RegTwo from './Pages/RegTwo'
import RegOne from './Pages/RegOne'
import Terms from './Pages/Terms'
import BuyerReg from './Pages/BuyerReg'
import ContactUs from './Pages/ContactUs'
import Freelancer from './Pages/Freelancer'
import Testimonails from './Pages/Testimonails'
import FreelancerSignup from './Pages/FreelancerSignup'
import ClientSignup from './Pages/ClientSignup'
import Leaderboard from './Pages/Leaderboard'
import Help from './Pages/Help'
import HelpDispute from './Pages/helpDispute'
import Faq from './Pages/Faq'
import Jobs from './Pages/Jobs'
import WorkingOnIt from './Pages/WorkingOnIt'

function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/blog" element={<WorkingOnIt />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/freelancersignup" element={<FreelancerSignup />} />
        <Route path='/clientsignup' element={<ClientSignup />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/client-registration' element={<ClientReg/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/privacy' element={<Privacy />} />
        {/* <Route path="/regthree" element={<RegThree />} /> */}
        {/* <Route path="/regtwo" element={<RegTwo />} /> */}
        <Route path="/reg" element={<RegOne />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/buyerreg" element={<BuyerReg />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/freelancerdash" element={<Freelancer />} />
        <Route path="/testimonails" element={<Testimonails />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/help' element={<Help />} />
        <Route path='/helpdispute' element={<HelpDispute />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </Router>
  )
}

export default App
