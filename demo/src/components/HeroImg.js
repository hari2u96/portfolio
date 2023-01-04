import "./HeroImgStyles.css";
import React from 'react'
import Project from "../assets/project.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="intro-img" src={Project} alt="Homebanner"/>
    </div>
    <div className="content">
        <p>Hi I'm a Freelancer</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default HeroImg