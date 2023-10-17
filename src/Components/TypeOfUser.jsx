import React from 'react'
import signup_header from "../assets/afren-images/signup-header-img.png"
import freelancer_pc from "../assets/afren-images/freelancer-pc.png"
import freelancer_client from "../assets/afren-images/freelancer&client.png"
import  styles from "../Styles/TypeOfUser.module.css"


export default function TypeOfUser({user}) {
  return (
    <>
        <header className={styles.signup}>
            <div className={styles.header_text}>
                <h1>Sign up</h1>
                <p>
                    Start browsing job listings, submit proposals, and communicate with clients 
                    to win projects and deliver exceptional results. Get paid securely and easily, and build 
                    your reputation as a top-rated freelancer.
                </p>
            </div>
            <img src={signup_header} alt="" className={`${styles.header_img}`}/>
        </header>
        <h1 className={`${styles.main_text}`}>
            Join Afren as a client or freelancer
        </h1>
        <main className='user'>
            <div className={`${styles.main_container} ${styles.mc-1}`}>
                <img src={freelancer_pc} alt=""/>
                <p>I'm a freelancer looking for work</p>
                <p>Find a lot of suitable freelancing gigs on afren</p>
            </div>
            <div className={`${styles.main_container} ${styles.mc-1}`}>
                <img src={freelancer_client} alt=""/>
                <p>I'm a freelancer looking for work</p>
                <p>Find a lot of suitable freelancing gigs on afren</p>
            </div>
        </main>

        <a href="#" className={styles.create_account_2}>
            {user}
        </a>
    </>
  )
}
