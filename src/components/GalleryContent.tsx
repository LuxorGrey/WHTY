import React, { useState, useEffect } from "react";
import {
  GalleryWrapper,
  GalleryHeader,
  GalleryTitle,
  GalleryGrid,
  GalleryImage,
  ModalWrapper,
  ModalImage,
  CloseButton,
  PrevButton,
  NextButton,
} from "../styled-components/GalleryContent.styled";

interface GalleryContentProps {
  title: string;
  backgroundUrl: string;
  images: string[];
}

const GalleryContent: React.FC<GalleryContentProps> = ({
  title,
  backgroundUrl,
  images,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Función para pasar a la imagen anterior
  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Evitar que el click en la imagen cierre el modal
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  // Función para pasar a la imagen siguiente
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  // Función para manejar las teclas de flechas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <GalleryWrapper>
      {/* Header con título y fondo */}
      <GalleryHeader backgroundUrl={backgroundUrl}>
        <GalleryTitle>{title}</GalleryTitle>
      </GalleryHeader>

      {/* Grid de imágenes */}
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </GalleryGrid>

      {/* Modal de imagen ampliada */}
      {selectedImageIndex !== null && (
        <ModalWrapper isOpen={selectedImageIndex !== null} onClick={closeModal}>
          <PrevButton onClick={prevImage}>&#10094;</PrevButton>
          <NextButton onClick={nextImage}>&#10095;</NextButton>
          <ModalImage src={images[selectedImageIndex]} alt="Selected Image" />
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalWrapper>
      )}
    </GalleryWrapper>
  );
};

export default GalleryContent;
