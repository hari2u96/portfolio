import "./FooterStyles.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Patson Pride Apartments</p>
                            <p>Pallavaram,Chennai-600117</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            91-9842030696</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            hari2u96@gmail.com</h4>
                    </div>
                </div>


                <div className="right">
                    <h4>About Me</h4>
                    <p>My Name is Hari Prasath and i am a React Developer</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer