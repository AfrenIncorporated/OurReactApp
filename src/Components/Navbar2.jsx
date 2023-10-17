import React from 'react'
import Ellipse31 from "../assets/afren-images/Ellipse31.png"
import "../Styles/navbar2.css"

export default function Navbar2() {
  return (
    <nav class="nav2">
        <i class="fa fa-qrcode" id="menu-icon" aria-hidden="true"></i>
        <a href="javascript:void(0)" class="logo"><span style={{color: "#3ac3d6"}}>af</span><span style={{color: "#015b7e"}}>ren</span></a>
        <div id="nav-flexdiv">
            <div id="overflow">
                <ul class="nav-links">
                    <i class="fa fa-times navCloseBtn"></i>
                    <div id="prof-cover">
                        <div id="profile">
                            <img src={Ellipse31} alt="" />
                            <div class="online-tag"></div>
                        </div>
                    </div>
                    <li><a href="find-talent.html">Find Talent</a></li>
                    <li class="dropdown">
                        <p class="dropbtn" id="droptn-one">Find Work <i class="fas fa-chevron-down nav-down"></i></p>
                        <div class="dropdown-content" id="drp-cont-one">
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <p class="dropbtn" id="droptn-two">Resources <i class="fas fa-chevron-down nav-down2"></i></p>
                        <div class="dropdown-content" id="drp-cont-two">
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <p class="dropbtn" id="droptn-three">Services category 
                        <i class="fas fa-chevron-down nav-down3"></i></p>
                        <div class="dropdown-content" id="drp-cont-three">
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <p class="dropbtn" id="droptn-four">About <i class="fas fa-chevron-down nav-down4"></i></p>
                        <div class="dropdown-content" id="drp-cont-four">
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                            <a href="javascript:void(0)">list</a>
                        </div>
                    </li>
                    <li id="bell-ic"><i class="fa fa-bell-o" aria-hidden="true"></i></li>
                </ul>
            </div>
            <i class="fa fa-search search-icon" id="searchIcon"></i>
            <div id="search-boxcover">
                <div class="search-box">
                    <i class="fa fa-search search-icon"></i>
                    <input type="text" placeholder="Search." />
                </div>
            </div>
        </div>
    </nav>
  )
}