import React, { useState } from 'react'
import Header from '../Components/Navbar'
import plus from "../assets/afren-images/Plus.svg"
import '../Styles/regthree.css'
export default function RegThree({func}) {
  const [formObj,setFormObj] = useState({
    occupation : "",
    skill : "",
    years : "",
    addSkills : "",
    url : "",
    url2: "",
    url3: ""
  })

  const {
          occupation, 
          skill, 
          addSkills, 
          years, 
          url, 
          url2, 
          url3} = formObj

  function changeHandler(e){
    const {value,name} = e.target;
    setFormObj({
      ...formObj,
      [name] : value
    })
  
  }

  return (
    <>
            <form action="">
                <h4>Professional Info</h4>
                <select onChange={changeHandler} value={occupation} name={occupation} class="form-control dropdown" id="occupation">
                    <option value="" selected="selected" disabled="disabled">--select one--</option>
                    <optgroup label="Healthcare Practitioners and Technical Occupations:">
                      <option value="1">-  Chiropractor</option>
                      <option value="2">-  Dentist</option>
                      <option value="3">-  Dietitian or Nutritionist</option>
                      <option value="4">-  Optometrist</option>
                      <option value="5">-  Pharmacist</option>
                      <option value="6">-  Physician</option>
                      <option value="7">-  Physician Assistant</option>
                      <option value="8">-  Podiatrist</option>
                      <option value="9">-  Registered Nurse</option>
                      <option value="10">-  Therapist</option>
                      <option value="11">-  Veterinarian</option>
                      <option value="12">-  Health Technologist or Technician</option>
                      <option value="13">-  Other Healthcare Practitioners and Technical Occupation</option>
                    </optgroup>
                    <optgroup label="Healthcare Support Occupations:">
                      <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
                      <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
                      <option value="16">-  Other Healthcare Support Occupation</option>
                    </optgroup>
                    <optgroup label="Business, Executive, Management, and Financial Occupations:">
                      <option value="17">-  Chief Executive</option>
                      <option value="18">-  General and Operations Manager</option>
                      <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
                      <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
                      <option value="21">-  Construction Manager</option>
                      <option value="22">-  Engineering Manager</option>
                      <option value="23">-  Accountant, Auditor</option>
                      <option value="24">-  Business Operations or Financial Specialist</option>
                      <option value="25">-  Business Owner</option>
                      <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
                    </optgroup>
                    <optgroup label="Architecture and Engineering Occupations:">
                      <option value="27">-  Architect, Surveyor, or Cartographer</option>
                      <option value="28">-  Engineer</option>
                      <option value="29">-  Other Architecture and Engineering Occupation</option>
                    </optgroup>
                    <optgroup label="Education, Training, and Library Occupations:">
                      <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
                      <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
                      <option value="32">-  Other Teacher or Instructor</option>
                      <option value="33">-  Other Education, Training, and Library Occupation</option>
                    </optgroup>
                    <optgroup label="Other Professional Occupations:">
                      <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
                      <option value="35">-  Computer Specialist, Mathematical Science</option>
                      <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
                      <option value="37">-  Lawyer, Judge</option>
                      <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
                      <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
                      <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
                      <option value="41">-  Social Scientist and Related Worker</option>
                      <option value="42">-  Other Professional Occupation</option>
                    </optgroup>
                    <optgroup label="Office and Administrative Support Occupations:">
                      <option value="43">-  Supervisor of Administrative Support Workers</option>
                      <option value="44">-  Financial Clerk</option>
                      <option value="45">-  Secretary or Administrative Assistant</option>
                      <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
                      <option value="47">-  Other Office and Administrative Support Occupation</option>
                    </optgroup>
                    <optgroup label="Services Occupations:">
                      <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
                      <option value="49">-  Chef or Head Cook</option>
                      <option value="50">-  Cook or Food Preparation Worker</option>
                      <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
                      <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
                      <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
                      <option value="54">-  Sales Supervisor, Retail Sales</option>
                      <option value="55">-  Retail Sales Worker</option>
                      <option value="56">-  Insurance Sales Agent</option>
                      <option value="57">-  Sales Representative</option>
                      <option value="58">-  Real Estate Sales Agent</option>
                      <option value="59">-  Other Services Occupation</option>
                    </optgroup>
                    <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
                      <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
                      <option value="61">-  Farming, Fishing, and Forestry</option>
                      <option value="62">-  Installation, Maintenance, and Repair</option>
                      <option value="63">-  Production Occupations</option>
                      <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
                    </optgroup>
                    <optgroup label="Transportation Occupations:">
                      <option value="65">-  Aircraft Pilot or Flight Engineer</option>
                      <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
                      <option value="67">-  Other Transportation Occupation</option>
                    </optgroup>
                    <optgroup label="Other Occupations:">
                      <option value="68">-  Military</option>
                      <option value="69">-  Homemaker</option>
                      <option value="70">-  Other Occupation</option>
                      <option value="71">-  Don't Know</option>
                      <option value="72">-  Not Applicable</option>
                    </optgroup>
                </select>
                <select onChange={changeHandler} value={skill} name='skill'>
                    <option value="" disabled="disabled">Skill Level</option>
                    <option value="">Expert</option>
                    <option value="">Proficient</option>
                    <option value="">Novice</option>
                </select>
                <input 
                  type="text"
                  value={years}
                  name="years" id=""
                  onChange={changeHandler} 
                  class="form-text" 
                  placeholder="Years of experience"
                  ></input>
                <h4>Additional skills</h4>
                <div id="add-sk">
                    <input 
                      type="text" 
                      id="ski-text" 
                      placeholder="Add skills"
                      value={addSkills}
                      name='addSkills'
                      onChange={changeHandler}
                    ></input>
                    <div id="skill-add">Add</div>
                </div>
                <div class="skills">
                    <section>
                        <p>Selected Skills</p>
                        <div class="select s1" id="selected"></div>
                    </section>
                    <section>
                        <p>Popular Skills</p>
                        <div class="select s2" id="popular-sk">
                            <div class="skill pl">
                                <p>Wordpress</p>
                                <img class="plus" src={plus} alt=""/>
                            </div>
                            <div class="skill pl">
                                <p>javascript</p>
                                <img class="plus" src={plus} alt="" />
                            </div>
                            <div class="skill pl">
                                <p>jquery</p>
                                <img class="plus" src={plus} alt="" />
                            </div>
                            <div class="skill pl">
                                <p>python</p>
                                <img class="plus" src={plus} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <h4>Certifications</h4>
                <p id="cert-text">This helps you build trust with your clients</p>
                <input type="file" multiple="true" name="" id="file-upload"></input>
                <div id="cert-div"></div>
                <h4>Portfolio Link (optional)</h4>
                <input 
                  type="url" 
                  name="url" id=""
                  value={url}
                  onChange={changeHandler} 
                  class="form-text" 
                  placeholder="Enter full URL"
                ></input>
                <h4>Social Media</h4>
                <input 
                  type="url" 
                  name="url2" id=""
                  value={url2}
                  onChange={changeHandler} 
                  class="form-text" 
                  placeholder="Enter full URL"></input>
                <div id="extra-url"></div>
                <div class="form-innerdiv">
                    <input 
                      type="url" 
                      name="url3"
                      value={url3}
                      onChange={changeHandler} 
                      id="last-url" 
                      class="form-text" 
                      placeholder="Enter full URL"></input>
                    <div id="add-url">+</div>
                </div>
                <div id="next-but">
                    <a href="#" onClick={()=>func(2)}>Back</a>
                    <div id="complete-but">Complete my registration</div>
                </div>
            </form>
    </>
  )
}
