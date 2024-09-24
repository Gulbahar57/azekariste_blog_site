import React from "react";
import './About.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function About(){
    return (
        <div className="about-page">
            <Navbar />
        <div className="about-content">
            <h1 className="about-text">A propos d'Azekar't...</h1>
        </div>
            <Footer />
        </div>
    )
}

export default About;