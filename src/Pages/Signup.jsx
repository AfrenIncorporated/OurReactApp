import React, { useState } from "react";
import "../Styles/Signup.css";
import googleIcon from '../assets/afren-images/google-icon.png'
import briana from '../assets/afren-images/Briana_Square_Web.jpg.png'
import verified from '../assets/afren-images/verified.png'
import dick from '../assets/afren-images/Dick_Square_Web.jpg.png'
import jason from '../assets/afren-images/JasonW_Square_Web.jpg.png'
import axios from "axios";
import Swal from "sweetalert2";


export default function Signup() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
    const [formObj, setFormObj] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    const {
      firstName,
      lastName,
      email,
      password,
    } = formObj;
  
    const [isFormActive, setIsFormActive] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleChange(e) {
      const { name, value } = e.target;
      setFormObj({
        ...formObj,
        [name]: value,
      });
    }
    function handlerSubmit(e) {
      e.preventDefault();
      setIsFormActive(false);
      setIsLoading(true);
  
      // Email validation
      if (!emailRegex.test(email)) {
        // Invalid email format
        setIsLoading(false);
        Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
        return;
      }
  
      const formData = new FormData(e.target);
      const formObject = {};
  
      formData.forEach((key, value) => {
        formObject[value] = key;
      });
      console.log(formObject);
      const endPoint = "http://localhost:3000/api/client";
  
      axios
        .post(endPoint, formObject)
        .then((response) => {
          setIsLoading(false);
          Swal.fire(
            "Thank you for joining the waitlist!",
            "Check your email for confirmation.",
            "success",
          ).then(() => {
            window.location.href = "/"
          })
          setFormObj({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
          console.log("submitted successfully", response);
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoading(false);
        });
    }

  return (
    <>
    <div id="wholediv">
        <div id="left">
            <a href=""  id="logo" style={{ fontFamily: 'poppins' }}><span style={{color: '#3ac3d6'}}>af</span><span style={{ color: '#015b7e' }}>ren</span></a>
            <form onSubmit={handlerSubmit} className="signup-form">
                <h2>Sign Up</h2>
                <p>Sign Up on afren to find work you love</p>
                <div className="form-innerdiv">
                    <input type="text" name="firstName" id="" placeholder="First name" required value={firstName} onChange={handleChange}/>
                    <input type="text" name="lastName" id="" placeholder="Last name" required value={lastName} onChange={handleChange}/>
                </div>
                <input type="email" className="form-text" name="email" id="" placeholder="Email address" required value={email} onChange={handleChange}/>
                <div className="password">
                    <input type="password" className="input-psw" name="password" id="" placeholder="Password" required value={password} onChange={handleChange}/>
                </div>
                <div className="password">
                    <input type="password" className="input-psw" name="confirmPassword" id="" placeholder="Confirm password" required/>
                </div>
                <div className="t-c">
                    <input type="checkbox" className="checkbox" name="" id="check"/>
                    <label htmlFor="check">I agree to the <a href="#" className="terms-cond"> <b>Terms and Conditions</b> </a></label>
                </div>
                <div>
                    {isLoading ? (
                    Swal.fire({
                        title: "Thank you for joining the waitlist!",
                        text: "We are confirming the validity of your email.",
                        icon:"info",
                        showConfirmButton: false,
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                    })
                    ) : (
                    <button
                        type="submit"
                        id="crt-btn"
                        disabled={!isFormActive}
                    >
                        Create my account
                    </button>
                    )}
                </div>                
                <p className="or"><span>OR</span></p>
                <button id="google-but"><img src={googleIcon} className="googleicon" alt=""/> Sign up with Google</button>
                <div className="bottom-content">
                    <h5>Already have an account?</h5>
                    <h5><a href="#" className="log-in-link">Log In</a></h5>
                </div>
            </form>
        </div>
        <div id="right">
            <div className="wrapper">
                <h2>Welcome to afren dashboard</h2>
                <p id="right-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi</p>
                <div className="outer">
                    <div className="card" style={{ '--delay': -1 }}>
                        <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic"><img src={briana} alt=""/></div>
                                <div className="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div className="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div className="card" style={{ '--delay': 0 }}>
                        <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic"><img src={dick} alt=""/></div>
                                <div className="details">
                                    <p>Mitchell Bronne2</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div className="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div className="card" style={{ '--delay': 1 }}>
                        <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic"><img src={jason} alt=""/></div>
                                <div className="details">
                                    <p>Mitchell Bronne3</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div className="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div className="card" style={{ '--delay': 2 }}>
                        <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic"><img src={briana} alt=""/></div>
                                <div className="details">
                                    <p>Mitchell Bronne4</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div className="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div className="card" style={{ '--delay': 2 }}>
                        <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div className="inner-bottom">
                            <div className="user-prof">
                                <div className="prof-pic"><img src={jason} alt=""/></div>
                                <div className="details">
                                    <p>Mitchell Bronne5</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div className="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
