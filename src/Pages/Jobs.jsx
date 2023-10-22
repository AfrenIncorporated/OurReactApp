import React, { useState } from 'react'
import Header from '../Components/Navbar'
import jobList from "../assets/afren-images/job-list-header-mockup.png"
import whiteSearchIcon from "../assets/afren-images/white-search-icon.png"
import Freelancer from "../Components/Freelancer"
import '../Styles/About.css'
import "../style.css"
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'


export default function Jobs() {
    const [count, setCount] = useState(1)

    return (
        <>
            <Header />
            <header className='jobss'>
                <div class="header-text">
                    <h1>
                        Discover Boundless Opportunities:<span> Find Your Dream Work and unleash your potential with Afren</span>
                    </h1>
                    <p>
                        We have 1,930 freelance jobs online. Send a quote now to get hired.
                    </p>
                </div>
                <img src={jobList} alt="" class="header-mockup" />
                <div class="search-space">
                    <input type="search" placeholder="Search" />
                    <figure>
                        <img src={whiteSearchIcon} alt="" />
                    </figure>
                </div>
            </header>
            <div class="selections">
                <select name="" id="">
                    <option selected value="">Categories of work</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Skills</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Country</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Location</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
                <select name="" id="">
                    <option selected value="">Hourly Rate</option>
                    <option value="">opt</option>
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option selected value="">Rating</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
            </div>
            <div class="selections-mobile">
                <select name="" id="">
                    <option value=""></option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                    <option value="">opt</option>
                </select>
            </div>

            <h1 class="jobs-h1">
                Jobs you might like
            </h1>
            <div class="jobs-pages-link">
                <a href="#" onClick={() => setCount(1)}>Best Matches</a>
                <a href="#" onClick={() => setCount(2)}>Saved Jobs<span>( 7 )</span></a>
            </div>
            <p class="jobs-description">
                Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.
            </p>

            {count == 1
                ?
                <main className='jobpage'>
                    <Freelancer />
                    <Freelancer />
                    <Freelancer />
                    <Freelancer />
                </main>
                : <main className='jobpage'>
                    <Freelancer />
                    <Freelancer />
                    <Freelancer />
                    <Freelancer />
                </main>
            }
            <div class="pagination">
                <a href="javascript:void(0)">First</a>
                <a class="page1" href="javascript:void(0)">1</a>
                <a href="javascript:void(0)">2</a>
                <a href="javascript:void(0)">3</a>
                <a href="javascript:void(0)">4</a>
                <a id="hide2" href="javascript:void(0)">5</a>
                <a id="hide2" href="javascript:void(0)">6</a>
                <a id="hide1" href="javascript:void(0)">7</a>
                <a id="hide1" href="javascript:void(0)">8</a>
                <a id="hide1" href="javascript:void(0)">9</a>
                <a id="hide1" href="javascript:void(0)">10</a>
                <a class="last" href="javascript:void(0)">Last</a>
            </div>
            <Testimonials />
            <Footer />
        </>
    )
}
