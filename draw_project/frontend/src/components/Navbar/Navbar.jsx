import React from "react";
import './Navbar.css';
import logoazekart from '../../assets/img/Logoazekart.svg'
import accountlogo from '../../assets/img/accountlogo.png'
import cartlogo from '../../assets/img/cartlogo.png'

function Navbar(){
    return(
        <nav className='navbar'>
            <a href="/Accueil">
            <img src={logoazekart} alt="logoazekar't" className='logo'/>
            </a>
            <div className='nav-links'>
                <a className="nav-link" href='/Accueil'>Accueil</a>
                <a className="nav-link" href='/Gallery'>Dessins</a>
                <a className="nav-link" href='/About'>A propos d'Azekar't</a>
                </div>
            <a href="/Account">
            <img src={accountlogo} alt='accountlogo' className='accountlogo'/>
                </a>
                <a href="/Cart">
            <img src={cartlogo} alt="cartlogo" className="cartlogo" />
            </a>
        </nav>
    );
}

export default Navbar;