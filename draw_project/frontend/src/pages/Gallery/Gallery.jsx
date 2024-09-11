import React from "react";
import './Gallery.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

import shizuku from '../../assets/img/shizuku.jpg';
import gonkirua from '../../assets/img/gonkirua.jpg';
import nami from '../../assets/img/nami.jpg';

function Gallery() {
    // Définissez ici un tableau avec les chemins de vos images
    const images = [
    shizuku,
    gonkirua,
    nami

        // Ajoutez autant d'images que vous voulez
    ];

    return (
        <div className="gallery-page">
            <Navbar />
            <main className="gallery-content">
                <h1>Dessins</h1>
                <Carousel images={images} />
            </main>
            <Footer />
        </div>
    );
}

export default Gallery;