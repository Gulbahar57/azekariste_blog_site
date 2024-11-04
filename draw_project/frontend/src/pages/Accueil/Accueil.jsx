import React from "react";
import './Accueil.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from "../../components/Carousel/Carousel";
import makii from '../../assets/img/makii.jpg';
import livairizze from '../../assets/img/livai rizze.jpg';

const images = [
    { src: makii, caption: 'Maki Zenin, 14.10.2015 Pour voir les détails...' },
    { src: livairizze, caption: 'Livai Sencho, 14.10.2016 Pour voir les détails...' },
    // Ajoutez d'autres images ici...
];

function Accueil(){

    return(
        <div className="accueil-container">
            <Navbar />  {/* Ajout de la Navbar ici */}
            {/* Rectangle central */}
        <div className="carousel-container">
            <Carousel images={images}/>
        </div>
        <Footer /> {/* Ajout du footer ici */}         
        </div>

    );
}

export default Accueil;