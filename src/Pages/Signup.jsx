import React from "react";
import "../Styles/Signup.css";
import { useNavigate } from 'react-router-dom'
import googleIcon from '../assets/afren-images/google-icon.png'
import briana from '../assets/afren-images/Briana_Square_Web.jpg.png'
import verified from '../assets/afren-images/verified.png'
import dick from '../assets/afren-images/Dick_Square_Web.jpg.png'
import jason from '../assets/afren-images/JasonW_Square_Web.jpg.png'


export default function Signup() {
  const navigate = useNavigate()

  return (
    <>
    <div id="wholediv">
        <div id="left">
            <a href=""  id="logo" style={{ fontFamily: 'poppins' }}><span style={{color: '#3ac3d6'}}>af</span><span style={{ color: '#015b7e' }}>ren</span></a>
            <form action="" className="signup-form">
                <h2>Sign Up</h2>
                <p>Sign Up on afren to find work you love</p>
                <div class="form-innerdiv">
                    <input type="text" name="" id="" placeholder="First name"/>
                    <input type="text" name="" id="" placeholder="Last name"/>
                </div>
                <input type="email" class="form-text" name="" id="" placeholder="Email address"/>
                <div class="password">
                    <input type="password" class="input-psw" name="" id="" placeholder="Password"/>
                </div>
                <div class="password">
                    <input type="password" class="input-psw" name="" id="" placeholder="Confirm password"/>
                </div>
                <div class="t-c">
                    <input type="checkbox" class="checkbox" name="" id="check"/>
                    <label for="check">I agree to the <a href="#" class="terms-cond"> <b>Terms and Conditions</b> </a></label>
                </div>
                <input type="submit" name="" id="crt-btn" value="Create my account"/>
                <p class="or"><span>OR</span></p>
                <button id="google-but"><img src={googleIcon} class="googleicon" alt=""/> Sign up with Google</button>
                <div class="bottom-content">
                    <h5>Already have an account?</h5>
                    <h5><a href="#" class="log-in-link">Log In</a></h5>
                </div>
            </form>
        </div>
        <div id="right">
            <div class="wrapper">
                <h2>Welcome to afren dashboard</h2>
                <p id="right-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi</p>
                <div class="outer">
                    <div class="card" style={{ '--delay': -1 }}>
                        <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div class="inner-bottom">
                            <div class="user-prof">
                                <div class="prof-pic"><img src={briana} alt=""/></div>
                                <div class="details">
                                    <p>Mitchell Bronne1</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div class="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div class="card" style={{ '--delay': 0 }}>
                        <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div class="inner-bottom">
                            <div class="user-prof">
                                <div class="prof-pic"><img src={dick} alt=""/></div>
                                <div class="details">
                                    <p>Mitchell Bronne2</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div class="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div class="card" style={{ '--delay': 1 }}>
                        <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div class="inner-bottom">
                            <div class="user-prof">
                                <div class="prof-pic"><img src={jason} alt=""/></div>
                                <div class="details">
                                    <p>Mitchell Bronne3</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div class="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div class="card" style={{ '--delay': 2 }}>
                        <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div class="inner-bottom">
                            <div class="user-prof">
                                <div class="prof-pic"><img src={briana} alt=""/></div>
                                <div class="details">
                                    <p>Mitchell Bronne4</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div class="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                    <div class="card" style={{ '--delay': 2 }}>
                        <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                        <div class="inner-bottom">
                            <div class="user-prof">
                                <div class="prof-pic"><img src={jason} alt=""/></div>
                                <div class="details">
                                    <p>Mitchell Bronne5</p>
                                    <p><b>CEO Malistack</b></p>
                                    <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                                </div>
                            </div>
                            <div class="client"><small><img src={verified} alt=""/> verified client</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
