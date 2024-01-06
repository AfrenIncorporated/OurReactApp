/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import rect2 from "../assets/afren-images3/Rectangle 34624273-2.png"
import rect from "../assets/afren-images3/Rectangle 34624273.png"
import rect1 from "../assets/afren-images3/Rectangle 34624273-1.png"
// import "../Styles/MyJobFreeOne.css"
import "../style.css"


const token = sessionStorage.getItem("token")

const API_URL = 'https://afren-main-server.onrender.com/api/getClientProjects';

export default function ClientJob({gigModal, setGigModal,getClientProjects,isProjectCreated}) {
    const [projects, setProjects] = useState([]);
    const [isProjectLoading, setIsProjectLoading] = useState(false)
    // fetch avaliable gigs
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setIsProjectLoading(true)
                setProjects(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects();
    }, [isProjectCreated]);


    return (
        <div id="main3">
            <h3 id="page-title">My Projects</h3>
            <div id="projects">
                { isProjectLoading
                &&
                <div class="add-prj" onClick={()=>{getClientProjects()}}>
                    <a href="javascript:void(0)" class="prj-add-btn">+</a>
                    <p>Add new project</p>
                </div>
                }
                {projects.map((project) => (
                    <div key={project._id} className="prj-card">
                        <div className="prj-top-head">
                            <div className={`prj-status ${project.gigStatus.toLowerCase()}`}>
                                {project.gigStatus}
                            </div>
                            <i className="fas fa-ellipsis-v"></i>
                        </div>
                        <p className="prj-title">{project.title}</p>
                        <p className="prj-description">{project.description}</p>
                        <div className="prj-prize">
                            <p>Prize</p>
                            <span>${project.budget}/hr</span>
                        </div>
                        <div className="prj-dvry-time">
                            <p>Delivery Time</p>
                            <span>{project.projectLength} days late</span>
                        </div>
                        <div className="prj-bttm-div">
                            <div className="prj-time-period">
                                <i className="far fa-calendar"></i>
                                <span>{project.createdAt} - {project.updatedAt}</span>
                            </div>
                            <div className="prj-client-prof">
                                {project.freelancerEmail.map((email, index) => (
                                    <div key={index} className={`prj-client ${index + 1}`}>
                                        <img src={`src/assets/afren-images/placeholder-image.png`} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Add the appropriate link for your project details */}
                        <a href={`/project/${project.id}`} className="prj-card-btn">
                            View Project
                        </a>
                    </div>
                ))}
                
                
            </div>
        </div>
    )
}
