import React from "react";
import Navbar from '../Components/Navbar'
import "../Styles/Signup.css";
import { useNavigate } from 'react-router-dom'
import signupHeader from '../assets/afren-images/signup-header-img.png'
import freelacnerPc from '../assets/afren-images/freelancer-pc.png'
import freelancerClient from '../assets/afren-images/freelancer&client.png'
import Footer from '../Components/Footer'


export default function Signup() {
  const navigate = useNavigate()

  return (
    <>
        <Navbar />
        <header className="header-signup">
            <div class="header-text">
                <h1>Sign up</h1>
                <p>
                    Start browsing job listings, submit proposals, and communicate with clients 
                    to win projects and deliver exceptional results. Get paid securely and easily, and build 
                    your reputation as a top-rated freelancer.
                </p>
            </div>
            <img src={signupHeader} alt="" class="header-img"/>
        </header>
        <h1 class="main-text">
            Join Afren as a client or freelancer
        </h1>
        <main>
            <div class="main-container mc-1">
                <img src={freelacnerPc} alt=""/>
                <p>I'm a freelancer looking for work</p>
                <p>Find a lot of suitable freelancing gigs on afren</p>
            </div>
            <div class="main-container mc-1">
                <img src={freelancerClient} alt=""/>
                <p>I'm a freelancer looking for work</p>
                <p>Find a lot of suitable freelancing gigs on afren</p>
            </div>
        </main>

        <a href="#" class="create-account">
            Create account
        </a>
        <Footer />
    </>
  );
}
