import React, {useState} from 'react'
import "../../src/style.css"
import ellipseImg from "../assets/afren-images/Ellipse 31.png"
import AddToCard from './AddToCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

export default function Modal({setIsModalVisible}) {
    const {id} = useParams()
    // console.log(id)
    const [editDescription, setEditDescription] = useState(true)
    const [inputText, setInputText] = useState("")
    const [isActivityBoxViisible, setIsActivityBoxVisible] = useState(false)
    const [Activity, setActivity] = useState([])
    const [act, setAct] =useState("")
    const [AddToCardObj, setAddToCardObj] = useState({
        Join : "",
        Members : "",
        Labels : "",
        Checklist: "",
        Cover: ""
    })

    function changeHandler(e){
        setInputText(e.target.value)
    }

    function changeHandler2(e){
        setAct(e.target.value)        
    }

    function clickHandler(){
        setActivity([
            ...Activity,
            act
        ])
        setAct("")
        setIsActivityBoxVisible(false)
    }

    async function postATasks(){
        const enpoint = "https://afren-main-server.onrender.com/api/createTask"
        const token = sessionStorage.getItem("token")
        const Payload = {
            gigId : id,
            members: AddToCardObj.Members,
            description: inputText,
            name: "test",
            image : "",
            tags : [AddToCardObj.Labels],
            activities: Activity.map((act,index)=>{
                return {
                    name : act
                }
            }) 
        }
        try{
            const response =  await axios.post(enpoint,Payload, {
                headers : {
                    Authorization : token 
                }
            })
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
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
                    <h4 id="modal-desc">Description 
                    <i className="fas fa-pen" onClick={()=>{setEditDescription((prev)=>!prev)}}></i></h4>
                    {
                        editDescription
                        ? (
                            <p id="modal-descinfo">
                                Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra. Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra.Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar 
                                congue viverra.Lorem ipsum dolor sit amet consectetur. Id congue fames pulvinar congue viverra.
                            </p>
                        ) 
                        : <input 
                            type='text' 
                            value={inputText}
                            onChange={changeHandler}    
                        />
                    }
                    <div id="modal-activity">
                        <h4>Activity</h4>
                        <button onClick={()=> setIsActivityBoxVisible(prev => !prev)}>+ Add</button>
                        {
                            isActivityBoxViisible
                            &&
                            <div className='pop-up-modal'>
                            <input 
                                type='text' 
                                value={act}
                                onChange={changeHandler2}
                                />
                            <button onClick={clickHandler}>Add Activity</button>
                        </div>
                        }
                    </div>
                    <div id="modal-actv-body">
                        <div id="mod-acthead">
                            <a href="">Tasks</a>
                            <a href="">Assigned to</a>
                        </div>
                        {
                            Activity.map((act, index)=>{
                                return (
                                    <div className="modal-actv">
                                        <input type="checkbox" name="" id="" />
                                        <p>{act}</p>
                                        <img className="model-actv-img" src={ellipseImg} alt=""/>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="modal-actv">
                            <input type="checkbox" name="" id=""/>
                            <p>Do high-quality images give a website a professional look and feel</p>
                            <img className="model-actv-img" src={ellipseImg} alt=""/>
                        </div>
                        <div className="modal-actv">
                            <input type="checkbox" name="" id=""/>
                            <p>Do high-quality images give a website a professional look and feel</p>
                            <img className="model-actv-img" src={ellipseImg} alt=""/>
                        </div> */}
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
                    <AddToCard  text={"Join"} AddToCardObj={AddToCardObj} setAddToCardObj={setAddToCardObj}/>
                    <AddToCard text={"Members"} AddToCardObj={AddToCardObj} setAddToCardObj={setAddToCardObj} />
                    <AddToCard text={"Labels"}  AddToCardObj={AddToCardObj} setAddToCardObj={setAddToCardObj} />
                    <AddToCard text={"Checklist"} AddToCardObj={AddToCardObj} setAddToCardObj={setAddToCardObj} />
                    <AddToCard text={"Cover"} AddToCardObj={AddToCardObj} setAddToCardObj={setAddToCardObj} />
                    {/* <button className="model-flxrgt-butt">+ <span>Join</span></button>
                    <button className="model-flxrgt-butt">+ <span>Members</span></button>
                    <button className="model-flxrgt-butt">+ <span>Labels</span></button>
                    <button className="model-flxrgt-butt">+ <span>Checklist</span></button>
                    <button className="model-flxrgt-butt">+ <span>Cover</span></button> */}
                </div>
            </div>
            <div style={{textAlign:"end"}}>

            <button onClick={postATasks} style={
                {padding:"10px 20px", 
                background:"#015B7E", color:"#fff" , border: "none", borderRadius: "5px"}}>
                    Add a Task
                </button>
            </div>
        </div>
    </div>
  )
}
