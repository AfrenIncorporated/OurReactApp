import React, { useState } from 'react'
// import "../Styles/sett-acc.css"
import "../style.css"
import axios from "axios"
import ellipse31 from "../assets/afren-images2/Ellipse 31.png"


const endPoint = "https://afren-main-server.onrender.com/api/updateClientDetails"

export default function ClientSettingsAcc() {
    const [token,setToken] = useState(sessionStorage.getItem("token"))
    const [formObj, setFormObj] = useState({
        firstName : "",
        lastName : "",
        email : "",
        country: "",
        residentialAddress : ""
    })

    const {
        firstName,
        lastName,
        email,
        country,
        residentialAddress
      } = formObj

    function handleChange(e){
        const {name,value} = e.target

        setFormObj({
            ...formObj,
            [name] : value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        try{
            const response = axios.put(endPoint,{
                updates: formObj
            },{
                headers : {
                    Authorization : token
                }
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div id="main">
    <div id="top-div">
        <h3>Account Settings</h3>
        <div id="av-switch">
            <h3>Availability</h3>
            <div id="switch">
                <label className="switch">
                <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    </div>
    <h3 id="user-name">Jane Doe</h3>
    <div id="prof">
        <div id="prof-pic">
            <div id="pic"><img src={ellipse31} alt=""/></div>
            {/* <button>Change Photo</button>  */}
            <input type="file" name="" id="photo-inp"/>
            <label for="photo-inp">Change Photo</label>
        </div>
        <div id="about">
            <form action="">
                <label for="about">About</label>
                <textarea name="" id="about-txtarea" cols="30" rows="9" placeholder="Tell us about you"></textarea>
            </form>
        </div>
    </div>
    <div className="form-box">
        <h3 className="form-heading">Basic info</h3>
        <form onSubmit={handleSubmit} action="">
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="name">First name</label>
                    <input 
                        type="text"
                        value={firstName} 
                        name="firstName"
                        onChange={handleChange} 
                        id="name" 
                        className="inp" 
                        placeholder="first name"
                    />
                </div>
                <div className="inp-inner-cov">
                    <label for="name">Last name</label>
                    <input 
                        type="text" 
                        value={lastName}
                        name="lastName"
                        onChange={handleChange}
                        id="name" 
                        className="inp" 
                        placeholder="last name"
                    />
                </div>
            </div>   
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="email">Email address</label>
                    <input 
                        type="email"
                        value={email} 
                        onChange={handleChange}
                        name="email" 
                        id="email" 
                        className="inp" 
                        placeholder="johndoe@gmail.com"
                    /> 
                </div>
                <div className="inp-inner-cov">
                    <label for="location">Country</label>
                    <input 
                        type="text" 
                        name="country"
                        value={country}
                        onChange={handleChange} 
                        id="location" 
                        className="inp" 
                        placeholder="your location"
                        />
                </div>
            </div>
            <div className="inp-cover">
                <div className="inp-inner-cov" style={{width: "100%"}}>
                    <label for="res-address1">Residential address</label>
                    <input 
                        type="text" 
                        name="residentialAddress"
                        value={residentialAddress}
                        onChange={handleChange} 
                        id="res-address1" 
                        className="inp" 
                        placeholder="enter address"
                    />
                </div>
                {/* <div className='inp-inner-cov'>
                    <label for="">Portfolio link <span id="optional">Optional</span></label> 
                    <input type="url" name="" id="p-link" className="inp" placeholder="Enter full url"/>
                </div> */}
                {/* <div className="inp-inner-cov">
                    <label for="res-address2">Residential address 2</label>
                    <input type="text" name="" id="res-address2" className="inp" placeholder="enter address"/>
                </div>
                <div className="inp-inner-cov">
                    <label for="res-address3">Residential address 3</label>
                    <input type="text" name="" id="res-address3" className="inp" placeholder="enter address"/>
                </div> */}
            </div>
            <input type="submit" name="" className="save-butt" id="" value="Save changes"/>
        </form>
    </div>
    <div className="form-box">
        <h3 className="form-heading">Social Profile</h3>
        <form action="">
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="">Linkedin</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
                <div className="inp-inner-cov">
                    <label for="">X</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
            </div>
            <div className="inp-cover">
                <div className="inp-inner-cov">
                    <label for="">Facebook</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
                <div className="inp-inner-cov">
                    <label for="">Instagram</label>
                    <input type="url" name="" id="" className="inp" placeholder="Enter full url"/>
                </div>
            </div>
            <input type="submit" name="" className="save-butt" id="" value="Save changes"/>
        </form>
    </div>
    <div className="form-hrly-rate">
        <h3>Change hourly rate</h3>
        <p>Please note that your new hourly rate will only apply to new contracts</p>
        <span id="profile-rate">Your profile rate: $25.00/hr</span>
        <form action="">
            <div id="hrly-cover">
                <label for="">Hourly Rate</label>
                <input type="number" name="" id="hrly-rate-inp" className="type-number" placeholder="$30.00"/><span>/hr</span>
            </div>
            <input type="submit" name="" className="save-butt" id="" value="Save changes"/>
        </form>
    </div>
    <div id="deactivation">
        <h3>Account Deactivation</h3>
        <p>What happens when you deactivate your account?</p>
        <div id="deactivate-opt">
            <ul>
                <li>Your profile and Gigs won’t be shown on Afren anymore.</li>
                <li>Active orders will be cancelled.</li>
                <li>You won’t be able to activate your Gigs</li>
            </ul>
        </div>
        <p>I’m leaving because.......</p>
        <form action="">
            <div id="reason-opt">
                <select name="" id="" disabled="disabled">
                    <option value="">Choose a reason</option>
                </select>
            </div>
            <input type="submit" name="" id="deactivate-but" value="Deactivate Account"/>
        </form>
    </div>
</div>
  )
}
