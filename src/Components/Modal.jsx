import React from 'react'
import "../../src/style.css"
import ellipseImg from "../assets/afren-images/Ellipse 31.png"


export default function Modal({setIsModalVisible}) {
  return (
    <div id="modal-container">
        <div id="pr-modal">
            <div id="modal-top">
                <h3>Dashboard Design <i className="fas fa-pen"></i></h3>
                <i className="fas fa-times" 
                onClick={()=>{setIsModalVisible(false)}}
                style={{cursor: "pointer"}}
                ></i>
            </div>
            <div id="modal-flexbox">
                <div id="modal-flexleft">
                    <h4 id="modal-desc">Description <i className="fas fa-pen"></i></h4>
                    <p id="modal-descinfo">Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra. Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra.Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra.Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra.</p>
                    <div id="modal-activity">
                        <h4>Activity</h4>
                        <button>+ Add</button>
                    </div>
                    <div id="modal-actv-body">
                        <div id="mod-acthead">
                            <a href="">Tasks</a>
                            <a href="">Assigned to</a>
                        </div>
                        <div className="modal-actv">
                            <input type="checkbox" name="" id="" />
                            <p>Do high-quality images give a website a professional look and feel</p>
                            <img className="model-actv-img" src={ellipseImg} alt=""/>
                        </div>
                        <div className="modal-actv">
                            <input type="checkbox" name="" id=""/>
                            <p>Do high-quality images give a website a professional look and feel</p>
                            <img className="model-actv-img" src={ellipseImg} alt=""/>
                        </div>
                        <div className="modal-actv">
                            <input type="checkbox" name="" id=""/>
                            <p>Do high-quality images give a website a professional look and feel</p>
                            <img className="model-actv-img" src={ellipseImg} alt=""/>
                        </div>
                    </div>
                    <h3 id="modal-comments">Comments</h3>
                    <div id="model-inp-cover">
                        <img className="model-inp-img" src={ellipseImg} alt=""/>
                        <div id="modal-inp">
                            <input type="text" name="" id="" placeholder="Write message here..." />
                            <div id="modal-inp-butts">
                            <i className="fas fa-paperclip"></i>
                            <i className="fas fa-paper-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modal-flexright">
                    <h3>Add to card</h3>
                    <button className="model-flxrgt-butt">+ <span>Join</span></button>
                    <button className="model-flxrgt-butt">+ <span>Members</span></button>
                    <button className="model-flxrgt-butt">+ <span>Labels</span></button>
                    <button className="model-flxrgt-butt">+ <span>Checklist</span></button>
                    <button className="model-flxrgt-butt">+ <span>Cover</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}
