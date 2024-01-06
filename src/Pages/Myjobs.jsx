import React, { useEffect } from 'react'
// import "../Styles/my-jobs.css";
import "../style.css"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import blueArrowLeft from "../assets/afren-images3/blue-arrow-left.png"
import calenderIcon from "../assets/afren-images3/calendar-icon.png"
import janeDoe from "../assets/afren-images3/jane-doee.png"
import pinkRound from "../assets/afren-images3/pink-roung-img.png"
import bluesendPlane from "../assets/afren-images3/blue-love-image.png"
import plus from "../assets/afren-images3/plus.png"
import commentIcon from "../assets/afren-images3/comment-icon.png"
import attachmentLogo from "../assets/afren-images3/attachment-logo.png"
import dashboardDesign from "../assets/afren-images3/dasboard-design-preview.png"
import completedChecked from  "../assets/afren-images3/completed-checked.png"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../Components/Modal';


import { Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend);


const endPoint =  "https://afren-main-server.onrender.com/api/getGig"
const token = sessionStorage.getItem("token")

export default function Myjobs({setMyjobs,isVisibleSection,setVisibleSection}) {
    const [count,setCount] = useState(0)
    const [gig, setGig] = useState({})
    const [gigValue, setGigValue] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const {id} = useParams()
    const data = {
        labels: ["In progress","Up coming","Completed","In Total"],
        datasets: [{
            label: "poll",
            data: [5,10,23,70],
            backgroundColor: ["#dadada","#50b4fc","#32da5f","#015b7e"],
            borderColor: ["transparent","transparent","transparent","transparent"],
            
        }]
    }

    const options = {
        plugins: {
            legend: {
              position: 'left',
              ltr : true,
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 30 ,
              }
            }
          },
    }
    
    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart,args, pluginOptions) {
            const {ctx} = chart;
            ctx.save();
            ctx.font = "900 25px sans-serif";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(`${data.datasets[0].data[3]}%`, chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y + 15)
        }
    }

    async function getAgig(){
        try{
            const response = await axios.post(endPoint,{
                gigId : id
            },{
                headers :{
                    Authorization : token
                }
            })
            if(response.status === 200){
                setGig(response.data)
                setGigValue(true)
            }
            else{
                setGig({})
                setGigValue(false)
            }
        }catch(error){
            console.log(error)
            setGigValue(false)
        }
    }

    useEffect(()=>{
        getAgig()
    },[])

  return (
    <div className="myJobs-major-container">
    <header className="myJobs-mc-header">
        <div className="myJobs-tabs-nav-space">
            <div 
                style={{cursor: "pointer"}}
                className="myJobs-back-space"
                onClick={() =>window.history.go(-1)}> 
                <img src={blueArrowLeft} alt=""/>
                <p>Back</p>
            </div>
            <div className="myJobs-tabs-nav">
                <span 
                    className={count == 0 ? "myJobs-tab1-btn active" : "myJobs-tab1-btn"} 
                    onClick={()=>setCount(0)}
                >
                Project Overview
                </span>
                <span 
                    className={count == 1 ? "myJobs-tab2-btn active" : "myJobs-tab2-btn" } 
                    onClick={()=>setCount(1)}
                >
                    Tasks
                </span>
                <span className={count == 2 ? "myJobs-tab3-btn active" : "myJobs-tab3-btn"} onClick={()=>setCount(2)} >Calendar</span>
            </div>
        </div>
        <div className="myJobs-header-calendar">
            <img src={calenderIcon} alt=""/>
            <p>19th of July 2023</p>
        </div>
    </header>
    <section className="myJobs-tabs-space">
        {
            count == 0
            &&
        <div className="myJobs-tab-1">
            <div className="myJobs-web-app-desg-space">
                <div className="myJobs-wads-subheading">
                    <section className="myJobs-ws-side2">
                        <span>
                            {gig.gigStatus}
                        </span>
                        <span>
                            {gig.title}
                        </span>
                    </section>
                    <section className="myJobs-ws-side2 mws2">
                        <span>
                            Project Timeline
                        </span>
                        <span>
                            <img src={calenderIcon} alt=""/>
                            <small>
                                5th Aug 2023 - 8th Aug 2023
                            </small>
                        </span>
                    </section>
                </div>
                <p className="myJobs-wads-text">
                    {gig.description}
                </p>
                <div className="myJobs-wads-price">
                    <p>
                        Price
                    </p>
                    <p>
                        ${gig.budget}/hr
                    </p>
                </div>
                <div className="myJobs-wads-delivery-span">
                    <p>Delivery Time</p>
                    <p>2 days, 7 hours</p>
                </div>
            </div>
            <div className="myJobs-members-space">
                <p className="myJobs-ms-subheading">
                    Members
                </p>
                <div className="myJobs-members">
                    {
                        gigValue
                        ?
                        gig.freelancerEmail.map((freelancer,index)=>{
                            return (
                                <section className="myJobs-members-profile">
                                    <figure>
                                        <img src={janeDoe} alt=""/>
                                    </figure>
                                    <p className="myJobs-mp-name">Alexander Williams</p>
                                </section>
                            )
                        })
                        : null
    
                    }
                    {/* <section className="myJobs-members-profile">
                        <figure>
                            <img src={janeDoe} alt=""/>
                        </figure>
                        <p className="myJobs-mp-name">Alexander Williams</p>
                    </section>
                    <section className="myJobs-members-profile">
                        <figure>
                            <img src={pinkRound} alt=""/>
                        </figure>
                        <p className="myJobs-mp-name">Bridget White</p>
                    </section>
                    <section className="myJobs-members-profile">
                        <figure>
                            <img src={janeDoe} alt=""/>
                        </figure>
                        <p className="myJobs-mp-name">Alexander Williams</p>
                    </section>
                    <section className="myJobs-members-profile">
                        <figure>
                            <img src={janeDoe} alt=""/>
                        </figure>
                        <p className="myJobs-mp-name">Alexander Williams</p>
                    </section>
                    <section className="myJobs-members-profile">
                        <figure>
                            <img src={janeDoe} alt=""/>
                        </figure>
                        <p className="myJobs-mp-name">Alexander Williams</p>
                    </section> */}
                </div>
            </div>
            {/* <div className="myJobs-project-summary"></div> */}
            <div className="myJobs-progress-chart">
                <p className="myjobs-pc-subheading">
                    Progress chart
                </p>
                <div className="myjobs-progress-chart-spacee">
                <Doughnut data={data} options={options} plugins={[textCenter]}/>
                </div>
            </div>
            <div className="myJobs-comments-space">
                <p className="myJobs-comments-subheading">
                    Comments
                </p>
                <div className="myJobs-comments-section">
                    <section className="myJobs-comment-sender">
                        <img src={janeDoe} alt=""/>
                        <p>Hi Rosemary,</p>
                        <time>
                            9:07pm
                        </time>
                    </section>
                    <section className="myJobs-comment-sender">
                        <img src={janeDoe} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est beatae in earum dolore autem!</p>
                        <time>
                            9:07pm
                        </time>
                    </section>
                    <section className="myJobs-comment-sender">
                        <img src={janeDoe} alt=""/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At perspiciatis esse cupiditate quasi ipsum reprehenderit, vel voluptates minus nobis! Facere hic accusamus sequi consequatur autem voluptatem tempore laudantium id vero eligendi, temporibus aperiam laboriosam recusandae dolor ex dignissimos veniam error.
                        </p>
                        <time>
                            9:07pm
                        </time>
                    </section>
                    <section className="myJobs-comment-sender">
                        <img src={janeDoe} alt=""/>
                        <p>ok</p>
                        <time>
                            9:07pm
                        </time>
                    </section>
                    <section className="myJobs-comment-replyer">
                        <time>
                            9:07pm
                        </time>
                        <p>ok</p>
                        <img src={pinkRound} alt=""/>
                    </section>
                </div>
                <div className="myJobs-input-area">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter message.." className="myJobs-texxt" autocapitalize="on"></textarea>
                    <figure className="myJobs-reply-btn">
                        <img src={bluesendPlane} alt=""/>
                    </figure>
                </div>
            </div>
        </div>
        }
        {
            count == 1
            &&
        <div className="myjobs-tasks-space">
            <select name="" id="" className='choose-tab'>
                <option value="">Upcoming tasks</option>
                <option value="">Work in progress</option>
                <option value="">Completed Tasks</option>
                <option value="">In review</option>
            </select>
            <div className="mts-section">
                <section className="myjobs-upcoming-tasks">
                    <div className="mts-subheading" onClick={()=>{setIsModalVisible(true)}}>
                        <div className='mts-sh-leftside'>
                            <span></span>
                            <p>Upcoming Task</p>
                        </div>
                        <figure><img src={plus} alt="" /></figure>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dignissimos earum maxime ?</p>
                        </div>
                        <span className='myjobs-card-date'>
                            <img src={calenderIcon} alt=""/>
                            <small>
                                5th Aug 2023 - 8th Aug 2023
                            </small>
                        </span>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-progress-bar">
                            <div className="mcp-indicator">
                                <p>Progress</p>
                                <p>40%</p>
                            </div>
                            <div className="mcp-progress-bar">
                                <span style={{width: "40%"}} className='progress-bar-line'></span>
                            </div>
                        </div>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dignissimos earum maxime ?</p>
                        </div>
                        <span className='myjobs-card-date'>
                            <img src={calenderIcon} alt=""/>
                            <small>
                                5th Aug 2023 - 8th Aug 2023
                            </small>
                        </span>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dignissimos earum maxime ?</p>
                        </div>
                        <span className='myjobs-card-date'>
                            <img src={commentIcon} alt=""/>
                            <small>
                                5th Aug 2023 - 8th Aug 2023
                            </small>
                        </span>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="myjobs-work-in-progress">
                    <div className="mts-subheading">
                        <div className='mts-sh-leftside'>
                            <span></span>
                            <p>Work in progress</p>
                        </div>
                        <figure><img src={plus} alt="" /></figure>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>Lorem ipsum dolor sit amet con?, dignissimos earum maxime ?</p>
                        </div>
                        <figure className="project-preview-card">
                            <img src={dashboardDesign} alt="" />
                        </figure>
                        <div className="myjobs-card-progress-bar">
                            <div className="mcp-indicator">
                                <p>Progress</p>
                                <p>40%</p>
                            </div>
                            <div className="mcp-progress-bar">
                                <span style={{width: "40%"}} className='progress-bar-line'></span>
                            </div>
                        </div>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dignissimos earum maxime ?</p>
                        </div>
                        <div className="myjobs-card-progress-bar">
                            <div className="mcp-indicator">
                                <p>Progress</p>
                                <p>40%</p>
                            </div>
                            <div className="mcp-progress-bar">
                                <span style={{width: "40%"}} className='progress-bar-line'></span>
                            </div>
                        </div>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                        </div>
                        <div className="myjobs-card-progress-bar">
                            <div className="mcp-indicator">
                                <p>Progress</p>
                                <p>10%</p>
                            </div>
                            <div className="mcp-progress-bar">
                                <span style={{width: "10%"}} className='progress-bar-line'></span>
                            </div>
                        </div>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <section className="myjobs-completed-tasks">
                    <div className="mts-subheading">
                        <div className='mts-sh-leftside'>
                            <span></span>
                            <p>Completed Tasks</p>
                        </div>
                        <figure><img src={plus} alt="" /></figure>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                        </div>
                        <div className="completed-tasks-details">
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            
                        </div>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                        </div>
                        <div className="completed-tasks-details">
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            
                        </div>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                        </div>
                        <div className="completed-tasks-details">
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="ctd">
                                <img src={completedChecked} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            
                        </div>
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="myjobs-in-review">
                    <div className="mts-subheading">
                        <div className='mts-sh-leftside'>
                            <span></span>
                            <p>In review</p>
                        </div>
                        <figure><img src={plus} alt="" /></figure>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia amet.
                            </p>
                        </div>
                        
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia amet.
                            </p>
                        </div>
                        
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-task-card">
                        <div className="utc-details">
                            <span>Design</span>
                            <span>Web Dev</span>
                        </div>
                        <div className="utc-summary">
                            <p>Dashboard Design</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia amet.
                            </p>
                        </div>
                        
                        <hr className='myjobs-card-line'/>
                        <div className="myjobs-card-interactions">
                            <div className="card-connect">
                                <a href="#" className='myjobs-card cc1'></a>
                                <a href="#" className='myjobs-card cc2'></a>
                                <a href="#" className='myjobs-card cc3'></a>
                            </div>
                            <div className="mci-details">
                                <a href="#">
                                    <img src={commentIcon} alt="" />
                                    <p>2</p>
                                </a>
                                <a href="#">
                                    <img src={attachmentLogo} alt="" />
                                    <p>8</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        }
        { count == 2
        &&
        <div className="myjobs-calendar-space">
            <FullCalendar 
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                initialview={'dayGridMonth'}
                headerToolbar={{
                    start: "prev",
                    center: "title",
                    end: "next"
                }}
            />
        </div>
        }
    </section>
    {
        isModalVisible
        &&
        <Modal 
            setIsModalVisible={setIsModalVisible}
        />
    }
</div>
  )
}
