import React from "react";
import './Accueil.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Accueil(){
    return(
        <div>
            <Navbar />  {/* Ajout de la Navbar ici */}
            <Footer /> {/* Ajout du footer ici */}
            
        </div>


    );
}

export default Accueil;