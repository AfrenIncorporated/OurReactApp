import React from 'react'
import '../Styles/Navbar.css'

export default function Header() {
  return (
    <nav className="nav">
        <a href="#" className="logo"><span style={{color: "#3ac3d6"}}>af</span><span style={{color: "#015b7e"}}>ren</span></a>
        <div id="overflow">
            <ul className="nav-links">
                <i className="fa fa-times navCloseBtn"></i>
                <li><a href="">Find Talent</a></li>
                <li className="dropdown">
                    <p className="dropbtn" id="droptn-one">Find Work <i className="fas fa-caret-down"></i></p>
                    <div className="dropdown-content" id="drp-cont-one">
                        <a href="#">list</a>
                        <a href="#">list</a>
                        <a href="#">list</a>
                    </div>
                </li>
                <li className="dropdown">
                    <p className="dropbtn" id="droptn-two">Resources <i className="fas fa-caret-down"></i></p>
                    <div className="dropdown-content" id="drp-cont-two">
                        <a href="#">list</a>
                        <a href="#">list</a>
                        <a href="#">list</a>
                    </div>
                </li>
                <li className="dropdown">
                    <p className="dropbtn" id="droptn-three">Services category <i className="fas fa-caret-down"></i></p>
                    <div className="dropdown-content" id="drp-cont-three">
                        <a href="#">list</a>
                        <a href="#">list</a>
                        <a href="#">list</a>
                    </div>
                </li>
                <li><a href="">About</a></li>
                <div id="drp-nav-but">
                    <a href="" id="drp-strt-butt" className="butt-in-nav">Get Started</a>
                    <a href="" id="drp-sign-butt" className="butt-in-nav">Sign in</a>
                </div>
                 {/* <li><a href="" className="butt-in-nav">Sign in</a></li>
                <li><a href="" className="butt-in-nav">Get Started</a></li> */}
            </ul>
        </div>
        <div id="nav-buttons">
            <a href="" id="si-innav">Sign in</a>
            <a href="" id="start-navbut">Get Started</a>
        </div>
        <i className="fa fa-search search-icon" id="searchIcon"></i>
        <div className="search-box">
            <i className="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search here..." />
        </div>
        <i className="fas fa-bars navOpenBtn"></i>
    </nav>
  )
}
