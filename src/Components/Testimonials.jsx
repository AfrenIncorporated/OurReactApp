import React from 'react'
import '../Styles/Landingpage.css'
import pink_roung_img from '../assets/afren-images/pink-roung-img.png'
import verified from '../assets/afren-images/verified.png'

export default function Testimonials() {
  return (
    <div className="wrapper">
    <h1>See what our clients are saying</h1>
    <div className="outer">
        <div className="card" style={{"--delay":-1}}>
            <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                    <img src={pink_roung_img} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne1</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1">
                    <img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":0}}>
            <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={pink_roung_img} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne2</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1"><img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":1}}>
            <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={pink_roung_img} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne3</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1">
                    <img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":2}}>
            <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={pink_roung_img} alt=""/>

                        </div>
                    <div className="details">
                        <p>Mitchell Bronne4</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1"><img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
        <div className="card" style={{"--delay":2}}>
            <div className="content"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat alias dolor neque ratione commodi praesentium nihil ipsum, recusandae earum sapiente, cum nemo nesciunt sint quis iste dolores suscipit illum tempora?</p></div>
            <div className="inner-bottom">
                <div className="user-prof">
                    <div className="prof-pic1">
                        <img src={pink_roung_img} alt=""/>
                    </div>
                    <div className="details">
                        <p>Mitchell Bronne5</p>
                        <p><b>CEO Malistack</b></p>
                        <p><i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i> <i className="fa fa-star checked"></i></p>
                    </div>
                </div>
                <div className="client1"><img src={verified} alt=""/> <small>verified client</small></div>
            </div>
        </div>
    </div>
    </div>
  )
}
