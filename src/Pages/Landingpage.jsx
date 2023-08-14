import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Landingpage.css'
import star from '../assets/afren-images/rating-star.png'
import fujitsu_logo from '../assets/afren-images/fujitsu-logo.png'
import Pomeroy_Logo from '../assets/afren-images/Pomeroy-Logo.png'
import Service_Express_Logo from  '../assets/afren-images/Service-Express-Logo.png'
import Modis_Logo from '../assets/afren-images/Modis-Logo.png'
import Worldlink_Logo from'../assets/afren-images/Worldlink-Logo.png'
import search from '../assets/afren-images/search.png'
import box_workforce from '../assets/afren-images/box-workforce.png'
import workforce_badge from'../assets/afren-images/workforce-badge.png'
import pink_roung_img from '../assets/afren-images/pink-roung-img.png'
import verified from '../assets/afren-images/verified.png'
import Footer from '../Components/Footer'



export default function Landingpage() {
  return (
    <>
        <Navbar />
        <header>
        <div className="award-description">
            <img src="afren-images/medal.png" alt=""/>
            <p className="typr"></p>
        </div>
        <h1 className="header-description-text1">
            Unleash talent. Master any task.
        </h1>
        <h1 className="header-description-text2">
            Hire the <span>best freelancers.</span>
        </h1>
        <p className="header-description-text">
            Work with the best freelance talent from around the world on our secure,
            flexible and cost-effective platform.
        </p>
        <div className="search-space">
            <div className="search-bar">
                <img src={search} alt=""/>
                <input type="text" placeholder="search"/>
            </div>
            <select name="" id="">
                <option value="">Talent</option>
                <option value="">Talent</option>
                <option value="">Talent</option>
                <option value="">Talent</option>
            </select>
        </div>
        <div className="row">
            <div className="col-md-12">
                 <div className="center-item-slider">
                   <div className="holder slide1">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Mark Twell
                            </h1>
                            <p className="skill-set">
                                Product Designer
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide2">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Nsame Kirk
                            </h1>
                            <p className="skill-set">
                                Visual Artist
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide3">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Mesuth Brende
                            </h1>
                            <p className="skill-set">
                                Web Developer
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide4">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Marilyn Curt
                            </h1>
                            <p className="skill-set">
                                Product Manager
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide5">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Fikayomi Peter
                            </h1>
                            <p className="skill-set">
                                Software Engineer
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                   <div className="holder slide6">
                        <div className="slide-content">
                            <h1 className="full-name">
                                Abdul Basit
                            </h1>
                            <p className="skill-set">
                                CEO Afren
                            </p>
                            <figure>
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                                <img src={star} alt="" className="star" />
                            </figure>
                        </div>
                   </div>
                 </div>
              </div>
            </div>
        <div className="logos">
            <div className="logos-slide">
                <img src={fujitsu_logo} height="100" width="250" alt="" />
                <img src={Pomeroy_Logo} height="100" width="250" alt="" /> 
                <img src={Service_Express_Logo} height="100" width="250" alt=""/>
                <img src={Modis_Logo} height="100" width="250" alt="" /> 
                <img src={Worldlink_Logo} height="100" width="250" alt="" />
            </div>
        </div>
        </header>
        <div className="workforce-section">
        <figure>
            <img src={box_workforce} alt="" />
        </figure>
        <div className="workforce-text">
            <h1 className="workforce-description">
                Access an on-demand workforce that covers the 20+ sought-after skills and specialties.
            </h1>
            <div className="workforce-list">
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>Zero percent charge rate</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>Blockchain based payment system</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>Built-in project management tools</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>AI-powered matchmaking</p>
                </div>
                <div className="workforce-list-item">
                    <img src={workforce_badge} alt=""/>
                    <p>24/7 support system</p>
                </div>
            </div>
        </div>
        </div>
        <div className="jobs">
        <div className="main-text">
            <h1>
                Popular services for you
            </h1>
            <p>
                Access on-demand workforce that covers a wide range of sought after skills and specialties
            </p>
        </div>
        <main>
            <div>
                <a className="main-links" href="#">Software Development</a>
            </div>
            <div>
                <a className="main-links" href="#">UI/UX (Product Design)</a>
            </div>
            <div>
                <a className="main-links" href="#">Data Analysis</a>
            </div>
            <div>
                <a className="main-links" href="#">Music Production</a>
            </div>
            <div>
                <a className="main-links" href="#">Animation</a>
            </div>
            <div>
                <a className="main-links" href="#">Video Editing</a>
            </div>
        </main>
        <a href="#" className="view-all">
            View all
        </a>
        </div>
        <div className="wrapper">
        <h1>See what our clients are saying</h1>
        <div className="outer">
            <div className="card" style={{"--delay":-1}}>
                <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                <div className="inner-bottom">
                    <div className="user-prof">
                        <div className="prof-pic">
                        <img src={pink_roung_img} alt=""/>
                        </div>
                        <div className="details">
                            <p>Mitchell Bronne1</p>
                            <p><b>CEO Malistack</b></p>
                            <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                        </div>
                    </div>
                    <div className="client">
                        <img src={verified} alt=""/> <small>verified client</small></div>
                </div>
            </div>
            <div className="card" style={{"--delay":0}}>
                <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                <div className="inner-bottom">
                    <div className="user-prof">
                        <div className="prof-pic">
                            <img src={pink_roung_img} alt=""/>
                        </div>
                        <div className="details">
                            <p>Mitchell Bronne2</p>
                            <p><b>CEO Malistack</b></p>
                            <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                        </div>
                    </div>
                    <div className="client"><img src={verified} alt=""/> <small>verified client</small></div>
                </div>
            </div>
            <div className="card" style={{"--delay":1}}>
                <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                <div className="inner-bottom">
                    <div className="user-prof">
                        <div className="prof-pic">
                            <img src={pink_roung_img} alt=""/>
                        </div>
                        <div className="details">
                            <p>Mitchell Bronne3</p>
                            <p><b>CEO Malistack</b></p>
                            <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                        </div>
                    </div>
                    <div className="client">
                        <img src={verified} alt=""/> <small>verified client</small></div>
                </div>
            </div>
            <div className="card" style={{"--delay":2}}>
                <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                <div className="inner-bottom">
                    <div className="user-prof">
                        <div className="prof-pic">
                            <img src={pink_roung_img} alt=""/>

                            </div>
                        <div className="details">
                            <p>Mitchell Bronne4</p>
                            <p><b>CEO Malistack</b></p>
                            <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                        </div>
                    </div>
                    <div className="client"><img src={verified} alt=""/> <small>verified client</small></div>
                </div>
            </div>
            <div className="card" style={{"--delay":2}}>
                <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                <div className="inner-bottom">
                    <div className="user-prof">
                        <div className="prof-pic">
                            <img src={pink_roung_img} alt=""/>
                        </div>
                        <div className="details">
                            <p>Mitchell Bronne5</p>
                            <p><b>CEO Malistack</b></p>
                            <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                        </div>
                    </div>
                    <div className="client"><img src={verified} alt=""/> <small>verified client</small></div>
                </div>
            </div>
        </div>
        </div>
        <div className="last-item">
        <h1>
            Join Us at Afren
        </h1>
        <p>
            Get started today to get professionals dedicated to delivering high-quality work that exceeds your expectations, or finding the job of your dreams
        </p>
        <a href="#">
            Get Started
        </a>
        </div>
        <Footer />
    </>
  )
}
