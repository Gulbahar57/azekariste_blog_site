import React from "react";
import './Navbar.css';
import logoazekart from '../../assets/img/logoazekart.png'
import accountlogo from '../../assets/img/accountlogo.png'
import cartlogo from '../../assets/img/cartlogo.png'

function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logoazekart} alt="logoazekar't" className='logo'/>
            <div className='nav-links'>
                <a className="nav-link" href='/Accueil'>Accueil</a>
                <a className="nav-link" href='/Gallery'>Dessins</a>
                <a className="nav-link" href='/About'>A propos d'Azekar't</a>
                </div>
            <img src={accountlogo} alt='accountlogo' className='accountlogo'/>
            <img src={cartlogo} alt="cartlogo" className="cartlogo" />
        </nav>
    );
}

export default Navbar;