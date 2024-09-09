    import React from "react";
    import './Footer.css';
    import instagramlogo from '../../assets/img/instagramlogo.svg'
    import tiktoklogo from '../../assets/img/tiktoklogo.svg'
    import { Link } from "react-router-dom";

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
                        <a className="contact" href="/Contact">Contact</a>
                        <a className="cgv" href="/Cgv">Conditions générales de vente</a>
                        <a className="FAQ" href="/FAQ">FAQ</a>
                    </div>
                </div>

            </footer>
        )
    }

    export default Footer;