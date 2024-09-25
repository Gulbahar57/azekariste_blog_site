import React from "react";
import './About.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function About(){
    return (
        <div className="about-page">
            <Navbar />
        <main className="about-content">
            <div className="about-container">
            <h1 className="about-title">A propos de moi...</h1>
            <p className="text-introduction">
            Je m’appelle G, et je suis une artiste passionnée depuis l’âge de 8 ans. Mon aventure avec le dessin a commencé de façon plutôt inattendue. Tout est parti d’un garçon dans ma classe qui dessinait. Je me souviens encore d'être assise à côté de lui, totalement fascinée par son talent. Il m'a tellement inspirée que j’ai pris un crayon et un carnet pour essayer à mon tour. C’était le tout début d'une longue histoire entre moi et le dessin.
            </p>
            </div>
        </main>
            <Footer />
        </div>
    )
}

export default About;