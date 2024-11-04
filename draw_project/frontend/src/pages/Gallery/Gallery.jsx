import React from "react";
import './Gallery.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

import shizuku from '../../assets/img/shizuku.jpg';
import gonkirua from '../../assets/img/gonkirua.jpg';
import nami from '../../assets/img/nami.jpg';
import makii from '../../assets/img/makii.jpg';
import livairizze from '../../assets/img/livai rizze.jpg';
import erenff from '../../assets/img/erenff.jpg';

function Gallery() {
    // Définissez ici un tableau avec les chemins de vos images
    const images = [
        { src: shizuku, caption: 'Dessin de Shizuku' },
        { src: gonkirua, caption: 'Dessin de Gonkirua' },
        { src: nami, caption: 'Dessin de Nami' },
        { src: makii, caption: 'Dessin de Makii' },
        { src: livairizze, caption: 'Dessin de Livai Rizze' },
        { src: erenff, caption: 'Dessin d\'Eren' },
    ];

    return (
        <div className="gallery-page">
            <Navbar />
            <main className="gallery-content">
                <h1 className="dessintext">Dessins</h1>
                <Carousel images={images} />
            </main>
            <Footer />
        </div>
    );
}

export default Gallery;