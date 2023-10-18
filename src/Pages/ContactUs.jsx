import React from 'react'
import Navbar from "../Components/Navbar"
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
// import "../Styles/contactUs.css"
import '../Styles/About.css'

export default function ContactUs() {
  return (
    <>
        <Navbar />
        <div id="top-div-contanct">
            <div id="testim-wrap2"><div id="contact-testim-tag">Contact us</div></div>
            <center>
                <div id="centered-text2">
                    <h1>We're <font id="colored-text">really excited</font> to hear from you!</h1>
                    <p>We value your thoughts and opinions, and we're genuinely interested in what you have to say. Your feedback is important to us and helps us improve our services. </p>
                </div>
            </center>
        </div>
        <div id="form-contact">
            <form action="">
                <label for="name">Name</label>
                <input type="text" name="" id="" class="form-inp" placeholder="Enyer full name"/>
    
                <label for="">Email</label>
                <input type="email" name="" id="" class="form-inp" placeholder="You@email.com"/>
    
                <label for="">Phone Number</label>
                <input type="tel" name="" id="" class="form-inp" placeholder="Enter phone number"/>
    
                <label for="">Inquiry</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Would like to know your thoughts about Rio"></textarea>
    
                <input type="submit" name="" value="Submit" id="submit-butt"/>
            </form>
        </div>
        <div id="middle"></div>
        <JoinUs />
        <Footer />
    </>
  )
}
