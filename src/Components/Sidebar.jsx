import React from 'react'

export default function Sidebar() {
  return (
    <>
      <ul class="side-menu">
        <li class="menu-opt2"><a class="active" href=""><i class="fa fa-qrcode icon" aria-hidden="true"></i>Dashboard</a></li>
        <li class="menu-opt2"><a href=""><i class="fa fa-comment-o icon" aria-hidden="true"></i>Messages</a></li>
        <li class="menu-opt2"><a href=""><i class="fas fa-suitcase icon"></i>My Jobs</a></li>
        <li class="menu-opt2"><a href=""><i class="fas fa-award icon"></i>Leader board</a></li>
        <li class="menu-opt2"><a href=""><i class="far fa-credit-card icon"></i>Billings</a></li>
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
        <li class="menu-opt2"><a href=""><i class="far fa-question-circle icon"></i>Help Center</a></li>
        <li class="menu-opt2"><a href=""><i class="fas fa-sign-out-alt icon"></i>Logout</a></li>
      </ul>
    </>
  )
}
