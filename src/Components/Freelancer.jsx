import React from 'react'
import love from "../assets/afren-images/love.png"
import janeDoe from "../assets/afren-images/jane-doee.png"
import dollar from "../assets/afren-images/dollar.png"
import verified from "../assets/afren-images/verified.png"
import fullBlueStar from "../assets/afren-images/full-blue-star.svg"
import blueStarHalf from "../assets/afren-images/blue-star-half.png"

export default function Freelancer() {
  return (
    <section className='freelancer'>
        <div class="time">
            <div>Posted <a href="#">1 hr ago<b>· </b>26 Quotes</a> Received</div>
            <p>Send before: Apr 01, 2023</p>
        </div>
        <div class="profession">
                <div class="profession-description">
                    <h2>UI/UX Designer</h2>
                    <p>Fixed Price | Under $250</p>
                </div>
                <div class="p-d2">
                    <div class="love">
                        <img class="love-img" src={love} alt="love-img" />
                    </div>
                    <a class="quote" href="javascript:void(0)">Send a Quote</a>
                </div>
        </div>
        <p class="freelancer-text">
            We are seeking a talented mobile app designer with proficiency in Figma to work on a 4 Day project for 25 USD. The successful candidate will be responsible for designing visually appealing and user-fr …
        </p>
        <div class="job-types">
            <a href="javascript:void(0)">UI/UX Prototyping</a>
            <a href="javascript:void(0)">Prototyping</a>
            <a href="javascript:void(0)">Interaction Design</a>
            <a href="javascript:void(0)">UI/UX Wireframing</a>
            <a href="javascript:void(0)">Figma</a>
            <a href="javascript:void(0)">Motion Graphics</a>
            <a href="javascript:void(0)">Motion Graphics</a>
            <a href="javascript:void(0)">Motion Graphics</a>
            <a href="javascript:void(0)">Motion Graphics</a>
        </div>
        <div class="freelancer-profile">
            <img src={janeDoe} alt="profile-img" />
            <div class="profile-text">
                <a class="name" href="javascript:void(0)">
                    Jane Doe
                </a>
                <p>United Kingdom</p>
                <div class="profile-info">
                    <p>
                        <img src={verified} alt="" />
                        Payment Verified
                    </p>
                    <p>
                        <img src={dollar} alt="" />
                        1,250 Spent
                    </p>
                    <div class="rating-star">
                        <img src={fullBlueStar} alt="" />
                        <img src={fullBlueStar} alt="" />
                        <img src={fullBlueStar} alt="" />
                        <img src={fullBlueStar} alt="" />
                        <img src={blueStarHalf} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
