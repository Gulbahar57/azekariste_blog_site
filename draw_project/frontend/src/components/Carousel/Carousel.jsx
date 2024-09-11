import React, { useState } from 'react';
import './Carousel.css'; // Nous créerons ce fichier CSS plus tard

const Carousel = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const imagesPerPage = 3;
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
          <img key={startIndex + index} src={image} alt={`Drawing ${startIndex + index + 1}`} />
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