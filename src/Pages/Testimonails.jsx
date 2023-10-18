import React from 'react'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import Navbar from "../Components/Navbar"
// import "../Styles/testimonials.css"
import '../Styles/About.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



export default function Testiminails() {
  return (
    <>
     <Navbar />
     <div id="top-div2">
      <div id="testim-wrap"><div id="testim-tag">Testimonials</div></div>
      <center>
            <div id="centered-text">
                <h1>See what <font id="colored-text">our clients</font> are saying</h1>
                <p>Find out why our customers love us! Read their inspiring testimonials and see the impact our services have had on their lives. Join our satisfied community and experience the difference firsthand.</p>
            </div>
        </center>
        <div class="swiper2 mySwiper">
            <Swiper 
              className="swiper-wrapper2"
              modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
              autoplay
              spaceBetween={300}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}  
            >
                <SwiperSlide className="card2 swiper-slide2">
                    <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                    <div class="inner-bottom">
                        <div class="user-prof">
                            <div class="prof-pic">
                              <img src="src/assets/afren-images/Briana_Square_Web.jpg.png" alt=""/>
                            </div>
                            <div class="details">
                                <p>Mitchell Bronne1</p>
                                <p><b>CEO Malistack</b></p>
                                <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                            </div>
                        </div>
                        <div class="client"><small>
                          <img src="src/assets/afren-images/verified.png" alt=""/>verified client</small></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card2 swiper-slide2">
                    <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                    <div class="inner-bottom">
                        <div class="user-prof">
                            <div class="prof-pic">
                              <img src="src/assets/afren-images/Dick_Square_Web.jpg.png" alt=""/>
                              </div>
                            <div class="details">
                                <p>Mitchell Bronne2</p>
                                <p><b>CEO Malistack</b></p>
                                <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                            </div>
                        </div>
                        <div class="client"><small>
                          <img src="src/assets/afren-images/verified.png" alt=""/> verified client</small></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card2 swiper-slide2">
                    <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                    <div class="inner-bottom">
                        <div class="user-prof">
                            <div class="prof-pic">
                              <img src="src/assets/afren-images/JasonW_Square_Web.jpg.png" alt=""/>
                            </div>
                            <div class="details">
                                <p>Mitchell Bronne3</p>
                                <p><b>CEO Malistack</b></p>
                                <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                            </div>
                        </div>
                        <div class="client"><small>
                          <img src="src/assets/afren-images/verified.png" alt=""/> verified client</small></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card2 swiper-slide2">
                    <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                    <div class="inner-bottom">
                        <div class="user-prof">
                            <div class="prof-pic">
                              <img src="src/assets/afren-images/Mynul_Square_Web.jpg.png" alt=""/>
                            </div>
                            <div class="details">
                                <p>Mitchell Bronne4</p>
                                <p><b>CEO Malistack</b></p>
                                <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                            </div>
                        </div>
                        <div class="client"><small>
                          <img src="src/assets/afren-images/verified.png" alt=""/> verified client</small></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card2 swiper-slide2">
                    <div class="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
                    <div class="inner-bottom">
                        <div class="user-prof">
                            <div class="prof-pic">
                              <img src="src/assets/afren-images/NicoleG_Square_Web.jpg.png" alt=""/>
                            </div>
                            <div class="details">
                                <p>Mitchell Bronne5</p>
                                <p><b>CEO Malistack</b></p>
                                <p><i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i> <i class="fa fa-star checked"></i></p>
                            </div>
                        </div>
                        <div class="client"><small>
                          <img src="src/assets/afren-images/verified.png" alt=""/> verified client</small></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
     <JoinUs />
     <Footer />
    </>
  )
}
