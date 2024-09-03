import React from "react";
import './Home.css';
import shizuku from '../../assets/img/shizuku.jpg';
import logoazekart from '../../assets/img/Logoazekart.svg'
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="home-container">

            {/* Ajout du logo */}
             <img src={logoazekart} alt="Logo Azekar't" className="logo" />
             
            <div className="home-content">
            <img src={shizuku} alt="Shizuku" className='home-image'/>
            </div>

            <div className='text-content'>
                <header className="home-header">
                    <h1>Bienvenue sur Azekar't</h1>
                    <p className='site-access'>Pour accéder au site, <Link to="/Accueil" className="welcome-link">cliquez ici</Link>.</p>
                </header>
            </div>

            {/* Bande Violette */}
            <div className="purple-band"></div>
        </div>
    );
}

export default Home;