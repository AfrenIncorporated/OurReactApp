import React from 'react'
import Navbar from "../Components/Navbar"
import "../Styles/freelancer.css"


export default function Freelancer() {
  return (
    <>
        <Navbar />
        <div class="menu-cover">
            <ul class="side-menu">
            <li class="menu-opt"><a class="active" href=""><i class="fa fa-qrcode icon" aria-hidden="true"></i>Dashboard</a></li>
            <li class="menu-opt"><a href=""><i class="fa fa-comment-o icon" aria-hidden="true"></i>Messages</a></li>
            <li class="menu-opt"><a href=""><i class="fas fa-suitcase icon"></i>My Jobs</a></li>
            <li class="menu-opt"><a href=""><i class="fas fa-award icon"></i>Leader board</a></li>
            <li class="menu-opt"><a href=""><i class="far fa-credit-card icon"></i>Billings</a></li>
            <li id="sett-divdrop">
                <p id="sett-btn"><i class="fas fa-cog icon"></i>Settings <i class="fas fa-caret-down sett-drpic"></i></p>
                <div id="settdrop-cover">
                    <div id="sett-drop">
                        <div id="settdrop-line"></div>
                        <ul id="sett-dropcontent">
                            <li><a href="">Profile</a></li>
                            <li><a href="">Account</a></li>
                            <li><a href="">Security</a></li>
                            <li><a href="">Bids</a></li>
                            <li><a href="">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu-opt"><a href=""><i class="far fa-question-circle icon"></i>Help Center</a></li>
            <li class="menu-opt"><a href=""><i class="fas fa-sign-out-alt icon"></i>Logout</a></li>
            </ul>
        </div>
        <div id="main">
            <div id="top-div">
                <div id="title">
                    <h3>Dashboard</h3>
                    <p>Saturday 2nd, June 2023 </p>
                </div>
                <div id="av-switch">
                    <h3>Availability</h3>
                    <div id="switch">
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div id="sec">
            <div id="sec-left">
                <img id="half-circle" src="src/assets/afren-images/Ellipse 179.png" alt=""/>
                <div id="sec-text">
                    <p>Welcome Back, <span id="name">Svetlana</span></p>
                    <span>You have 3 task due today, you’ve covered 50% of your projects. You have 3 task due today, you’ve covered 50% of your projects.</span>
                </div>
                <img id="woman-vector" src="src/assets/afren-images/Woman working on computer.png" alt=""/>
            </div>
            <div id="stats-div">
                <h3>Stats</h3>
                <div id="stats-crd-cover">
                    <div class="stats-card">
                        <i class="fas fa-award"></i> 
                        <small>Rank</small>
                        <span>20</span>
                        <small>In Top 10%</small>
                    </div>
                    <div class="stats-card">
                        <i class="fas fa-award"></i> 
                        <small>Rank</small>
                        <span>20</span>
                        <small>In Top 10%</small>
                    </div>
                    <div class="stats-card">
                        <i class="fas fa-award"></i> 
                        <small>Rank</small>
                        <span>20</span>
                        <small>In Top 10%</small>
                    </div>
                </div>
            </div>
        </div>
        <div id="third">
            <div id="earnings">
                <div id="chart"></div>
                <div class="earn-amount">
                    <p>Earnings</p>
                    <span>$15,000</span>
                </div>
                <div class="monthly-perc">+10% incrase in the last month</div>
            </div>
            <div id="invoice-cover">
                <h3>Quotes & Invoices</h3>
                <div id="inv-cds-cover">
                    <div class="inv-card">
                        <div class="inv-profile">
                            <div class="image">
                                <img src="src/assets/afren-images/Rectangle 34624273.png" alt=""/>
                            </div>
                            <div class="inv-name">
                                <p>Alexander willians</p>
                                <small>CEO of Techs</small>
                            </div>
                        </div>
                        <div class="inv-typ-pgrss">
                            <span class="type">Quote</span>
                            <div class="progress">In Revision</div>
                        </div>
                        <span class="amount">$1,222</span>
                    </div>
                    <div class="inv-card">
                        <div class="inv-profile">
                            <div class="image">
                                <img src="src/assets/afren-images/Rectangle 34624273-1.png" alt=""/>
                            </div>
                            <div class="inv-name">
                                <p>Alexander willians</p>
                                <small>CEO of Techs</small>
                            </div>
                        </div>
                        <div class="inv-typ-pgrss">
                            <span class="type">Invoice</span>
                            <div class="progress pending">Pending</div>
                        </div>
                        <span class="amount">$1,222</span>
                    </div>
                    <div class="inv-card">
                        <div class="inv-profile">
                            <div class="image">
                                
                                <img src="src/assets/afren-images/Rectangle 34624273-2.png" alt=""/></div>
                            <div class="inv-name">
                                <p>Alexander willians</p>
                                <small>CEO of Techs</small>
                            </div>
                        </div>
                        <div class="inv-typ-pgrss">
                            <span class="type">Invoice</span>
                            <div class="progress paid">Paid</div>
                        </div>
                        <span class="amount">$1,222</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="fourth">
            <h3>Active Gigs</h3>
            <div id="gigs">
                <div class="gigs-card">
                    <div class="gig-title">
                        <p>Mobile Application Design</p>
                        <span>=</span>
                    </div>
                    <p class="gig-description">This application is created to make users life easier</p>
                    <div class="gig-prize">
                        <p>Prize</p>
                        <span>$50/hr</span>
                    </div>
                    <div class="gig-dvry-time">
                        <p>Delivery Time</p>
                        <span>4 days late</span>
                    </div>
                    <div class="gig-bttm-div">
                        <div class="gig-progress">in progress</div>
                        <div class="gig-client-prof">
                            <div class="gig-client one">
                                <img src="src/assets/afren-images/Rectangle 34624273-2.png" alt=""/>
                            </div>
                            <div class="gig-client two">
                                <img src="src/assets/afren-images/Rectangle 34624273-2.png" alt="" />
                            </div>
                            <div class="gig-client three">
                                <img src="src/assets/afren-images/Rectangle 34624273-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gigs-card">
                    <div class="gig-title">
                        <p>Mobile Application Design</p>
                        <span>=</span>
                    </div>
                    <p class="gig-description">This application is created to make users life easier</p>
                    <div class="gig-prize">
                        <p>Prize</p>
                        <span>$50/hr</span>
                    </div>
                    <div class="gig-dvry-time">
                        <p>Delivery Time</p>
                        <span>4 days late</span>
                    </div>
                    <div class="gig-bttm-div">
                        <div class="gig-progress">in progress</div>
                        <div class="gig-client-prof">
                            <div class="gig-client one">
                                <img src="src/assets/afren-images/Rectangle 34624273-2.png" alt=""/>
                            </div>
                            <div class="gig-client two">
                                <img src="src/assets/afren-images/Rectangle 34624273.png" alt=""/>
                            </div>
                            <div class="gig-client three">
                                <img src="src/assets/afren-images/Rectangle 34624273.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gigs-card">
                    <div class="gig-title">
                        <p>Mobile Application Design</p>
                        <span>=</span>
                    </div>
                    <p class="gig-description">This application is created to make users life easier</p>
                    <div class="gig-prize">
                        <p>Prize</p>
                        <span>$50/hr</span>
                    </div>
                    <div class="gig-dvry-time">
                        <p>Delivery Time</p>
                        <span>4 days late</span>
                    </div>
                    <div class="gig-bttm-div">
                        <div class="gig-progress">in progress</div>
                        <div class="gig-client-prof">
                            <div class="gig-client one">
                                <img src="src/assets/afren-images/Rectangle 34624273-2.png" alt=""/>
                            </div>
                            <div class="gig-client two">
                                <img src="src/assets/afren-images/Rectangle 34624273.png" alt=""/>
                            </div>
                            <div class="gig-client three">
                                <img src="src/assets/afren-images/Rectangle 34624273-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="fifth">
            <div id="messages">
                <div id="msg-top">
                    <h3>Inbox</h3>
                    <a href="">View All</a>
                </div>
                <div id="messages-card">
                    <div class="individual-msg">
                        <div class="flex-lft">
                            <div class="msg-prf-pic">
                                <img src="src/assets/afren-images/Ellipse 32.png" alt="" />
                                <div class="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div class="flex-rgt">
                            <span>Today</span>
                            <i class="fas fa-star checked"></i>
                        </div>
                    </div>
                    <div class="individual-msg">
                        <div class="flex-lft">
                            <div class="msg-prf-pic">
                                <img src="src/assets/afren-images/Ellipse 32.png" alt="" />
                                <div class="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div class="flex-rgt">
                            <span>Today</span>
                            <i class="fas fa-star checked"></i>
                        </div>
                    </div>
                    <div class="individual-msg">
                        <div class="flex-lft">
                            <div class="msg-prf-pic">
                                <img src="src/assets/afren-images/Ellipse 32.png" alt=""/>
                                <div class="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div class="flex-rgt">
                            <span>Today</span>
                            <i class="fas fa-star checked"></i>
                        </div>
                    </div>
                    <div class="individual-msg">
                        <div class="flex-lft">
                            <div class="msg-prf-pic">
                                <img src="src/assets/afren-images/Ellipse 32.png" alt=""/>
                                <div class="msg-online-tag"></div>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Review the design on page...</span>
                            </div>
                        </div>
                        <div class="flex-rgt">
                            <span>Today</span>
                            <i class="fas fa-star checked"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div id="recommend-prj">
                <h3>Recommend Project</h3>
                <div class="prj-div">
                    <div class="prj-client-info">
                        <div class="prj-client-prf">
                            <div class="prj-client-pic">
                                <img src="src/assets/afren-images/Rectangle 34624273.png" alt=""/>
                            </div>
                            <div>
                                <p>Alexander willians</p>
                                <span>Updated 10m ago</span>
                            </div>
                        </div>
                        <div class="prj-skill">Design</div>
                    </div>
                    <p class="prj-title">Need a designer to form a design system for my business</p>
                    <p class="prj-desc">Looking for a talented product designer. Looking for a talented product designer, Looking for a talented product designer</p>
                    <div class="prize-rate">
                        <p>$8,700 <span>/month</span></p>
                        <div class="prj-eplmnt-type">Full time</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
