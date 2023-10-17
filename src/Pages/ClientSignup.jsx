import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import TypeOfUser from '../Components/TypeOfUser'

export default function ClientSignup() {
  return (
    <>
        <Header />
        <TypeOfUser user={"Signup as a client"} />
        <Footer /> 
    </>
  )
}
