import React from 'react'
import '../Styles/Footer.css' 

export default function Footer() {
  return (
    <div id="foot-wrap">
    <div id="footer">
        <div className="footerhead">
            <a href=""  id="foot-logo"><span style={{color: "#3ac3d6"}}>af</span><span style={{color: "#015b7e"}}>ren</span></a>
        </div>
        <div  className="footercontent">
            <div className="footerhead">
                <h3 onclick="footTwo()">For technicians</h3>
                <div className="footerinnercontent" id="footerinnercontent2">
                    <a href="" className="footer-link">Overview</a>
                    <a href="" className="footer-link">Insurance</a>
                    <a href="" className="footer-link">Sign up</a>
                </div>
            </div> 
            <div className="footerhead">
                <h3 onclick="footThree()">Resources</h3>
                <div className="footerinnercontent" id="footerinnercontent3">
                    <a href="" className="footer-link">Blog</a>
                    <a href="" className="footer-link">Stories</a>
                    <a href="" className="footer-link">Reviews</a>
                    <a href="" className="footer-link">Platform status</a>
                    <a href="" className="footer-link">Support</a>
                    <a href="" className="footer-link">COVID-19 policy</a>
                </div>
            </div>
            <div className="footerhead">
                <h3 onclick="footFour()">Other</h3>
                <div className="footerinnercontent" id="footerinnercontent4">
                    <a href="" className="footer-link">Careers</a>
                    <a href="" className="footer-link">Webinars & events</a>
                    <a href="" className="footer-link">Our partners</a>
                    <a href="" className="footer-link">Privacy policy</a>
                    <a href="" className="footer-link">Non-descrimiatio policy</a>
                </div>
            </div>
            <div className="footerhead">
                <h3 onclick="footFive()">Connect with us</h3>
                <div className="footerinnercontent" id="footerinnercontent5">
                    <a href="" className="footer-link">+1 233-577-4855</a>
                    <a href="" className="footer-link">733 Marquette Avenue S</a>
                    <a href="" className="footer-link">Suite #800</a>
                    <a href="" className="footer-link">Minneapolis, MN 55402</a>
                </div>
            </div>
        </div>
    </div>
    <div id="copy">
        <p style={{margin: 0}}>&copy;2023 Afren &nbsp;LLC. All Rights Reserved.&nbsp;|&nbsp;Terms of Service </p>
    </div>
</div>
  )
}
