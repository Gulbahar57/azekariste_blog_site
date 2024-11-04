import React, { useState } from 'react';
import './Carousel.css'; // Assurez-vous que le CSS est importé

const Carousel = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const imagesPerPage = 3; // Ajustez cela en fonction de vos besoins
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {visibleImages.map((image, index) => (
          <div key={startIndex + index} className="carousel-item"> {/* Nouveau conteneur pour l'image et la légende */}
            <img src={image.src} alt={`Drawing ${startIndex + index + 1}`} />
            <div className="carousel-caption">{image.caption}</div> {/* Légende de l'image */}
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevPage}>Précédent</button>
        <span>{`Page ${currentPage + 1} sur ${totalPages}`}</span>
        <button onClick={nextPage}>Suivant</button>
      </div>
    </div>
  );
};

export default Carousel;