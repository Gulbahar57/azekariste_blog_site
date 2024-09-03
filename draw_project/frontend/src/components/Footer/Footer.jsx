import React from "react";
import './Footer.css';
import instagramlogo from '../../assets/img/instagramlogo.svg'
import tiktoklogo from '../../assets/img/tiktoklogo.svg'

function Footer() {
    return(
        <footer>
            <div className="purple-band">
                <div className="social-links">
                    <img src={instagramlogo} alt="instagramlogo"/>
                    <img src={tiktoklogo} alt="tiktoklogo"/>
                </div>
                <div className ="site-informations">
                    <p>Copyright © 2024 - Tous droits réservés. </p>
                    <p>Contact</p>
                    <p>Conditions générales de vente</p>
                    <p>FAQ</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer;