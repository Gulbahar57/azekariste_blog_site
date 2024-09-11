import React from "react";
import './Gallery.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

function Gallery(){
    return(
        <div>
            <Navbar />  {/* Ajout de la Navbar ici */}
            <Carousel /> {/* Ajout du carousel ici*/}
            <Footer /> {/* Ajout du footer ici */}
        </div>


    );
}

export default Gallery;