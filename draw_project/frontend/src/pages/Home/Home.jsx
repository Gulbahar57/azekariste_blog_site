import React from "react";
import './Home.css';
import shizuku from '../../assets/img/shizuku.jpg';
import logoazekart from '../../assets/img/logoazekart.png'

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
                    <h1>Bienvenue sur Azekar't...</h1>
                </header>
            </div>

            {/* Bande Violette */}
            <div className="purple-band"></div>
        </div>
    );
}

export default Home;