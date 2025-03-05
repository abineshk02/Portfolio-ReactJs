/* eslint-disable no-unused-vars */
import React from "react"
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import mail_icon from "../../assets/assets/mail_icon.svg";
import location_icon from "../../assets/assets/location_icon.svg";
import call_icon from "../../assets/assets/call_icon.svg";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let&apos;s talk</h1>
            <p>I am eager to join a reputable organization where I can enhance my knowledge and skills while actively contributing to the company&apos;s growth and success.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="mail icon"/> <p>abineshk213@gmail.com</p>

                </div>
                <div className="contact-detail">
                <img src={call_icon} alt="call icon"/> <p>+91 7305930262</p>

                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="location icon"/> <p>Chennai, Tamilnadu</p>

                </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name"/>

            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter Your Email" name="email"/>

            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows= "8" placeholder="Enter your message"></textarea>

            <button type="submit" className="contact-submit">Submit now</button>
            


        </form>
    </div>
    </div>
  )
}

export default Contact