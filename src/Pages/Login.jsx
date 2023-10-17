import React from "react";
import "../Styles/Login.css";
import { useNavigate } from 'react-router-dom'
import logo from '../assets/afren-images/afren-logo.png'
import googleIcon from '../assets/afren-images/google-icon.png'
import pinkRoundImg from '../assets/afren-images/pink-roung-img.png'
import verified from '../assets/afren-images/verified.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


export default function Login() {
  const navigate = useNavigate()

  return (
    <>
      <section className="login">
        <section className="form_area" name="afren">
          <form action="">
            <img
              onClick={()=>navigate('/')}
              src={logo}
              alt=""
              className="logo-la-la"
            />
            <h1 className="loggy">Log in</h1>
            <p className="afren">Log in to Afren</p>
            <div className="email">
              <input type="email" id="email" placeholder="Email address" />
            </div>
            <div className="password2">
              <input type="password" id="password" placeholder="Password" />
              <figure>
                {/* <i className="fa-regular fa-eye"></i> */}
                <FontAwesomeIcon icon={faEye} size="s" style={{color: "#000000", fontWeight: 400 }} />
                <span id="sp"></span>
              </figure>
            </div>
            <div className="forget">
              <div className="remember">
                <input type="checkbox" />
                <p className="one">Remember me</p>
              </div>
              <a href="#" className="two">
                Forgot password?
              </a>
            </div>
            <input type="submit" value="Log in" />
            <div className="or2">
              <div className="line"></div>
              <h6>OR</h6>
              <div className="line"></div>
            </div>
            <button type="submit" className="google">
              <img src={googleIcon} alt="" />
              <p>Continue with Google</p>
            </button>
            <p className="quesy">
              Don't have an account?{" "}
              <a href="#" className="sign">
                Sign up
              </a>
            </p>
          </form>
        </section>
        <section className="welcome">
          <h3> Welcome to Afren dashboard</h3>
          <p className="welcome-text">
            Lorem ipsum dolor sit amet consectetur. Sit dui dolor morbi enim
            arcu ipsum venenatis.
          </p>
          <div className="wrapper2">
            <h1>See what our clients are saying</h1>
            <div className="outer">
              <div className="card" style={{"--delay":-1}}>
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat alias dolor neque ratione commodi praesentium nihil
                    ipsum, recusandae earum sapiente, cum nemo nesciunt sint
                    quis iste dolores suscipit illum tempora?
                  </p>
                </div>
                <div className="inner-bottom">
                  <div className="user-prof">
                    <div className="prof-pic">
                      <img src={pinkRoundImg} alt="" />
                    </div>
                    <div className="details">
                      <p>Mitchell Bronne1</p>
                      <p>
                        <b>CEO Malistack</b>
                      </p>
                      <p>
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>
                      </p>
                    </div>
                  </div>
                  <div className="client">
                    <small>
                      <img src={verified} alt="" /> verified
                      client
                    </small>
                  </div>
                </div>
              </div>
              {/* <div className="card" style="--delay:0;">
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat alias dolor neque ratione commodi praesentium nihil
                    ipsum, recusandae earum sapiente, cum nemo nesciunt sint
                    quis iste dolores suscipit illum tempora?
                  </p>
                </div>
                <div className="inner-bottom">
                  <div className="user-prof">
                    <div className="prof-pic">
                      <img src="afren-images/pink-roung-img.png" alt="" />
                    </div>
                    <div className="details">
                      <p>Mitchell Bronne2</p>
                      <p>
                        <b>CEO Malistack</b>
                      </p>
                      <p>
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>
                      </p>
                    </div>
                  </div>
                  <div className="client">
                    <small>
                      <img src="afren-images/verified.png" alt="" /> verified
                      client
                    </small>
                  </div>
                </div>
              </div>
              <div className="card" style="--delay:1;">
                <div className="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat alias dolor neque ratione commodi praesentium nihil
                    ipsum, recusandae earum sapiente, cum nemo nesciunt sint
                    quis iste dolores suscipit illum tempora?
                  </p>
                </div>
                <div className="inner-bottom">
                  <div className="user-prof">
                    <div className="prof-pic">
                      <img src="afren-images/pink-roung-img.png" alt="" />
                    </div>
                    <div className="details">
                      <p>Mitchell Bronne3</p>
                      <p>
                        <b>CEO Malistack</b>
                      </p>
                      <p>
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>{" "}
                        <i className="fa fa-star checked"></i>
                      </p>
                    </div>
                  </div>
                  <div className="client">
                    <small>
                      <img src="afren-images/verified.png" alt="" /> verified
                      client
                    </small>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
