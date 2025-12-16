import styled from "styled-components";

// Contenedor principal de la galería
export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
`;

// Contenedor del header con la imagen de fondo y el título
export const GalleryHeader = styled.div<{ backgroundUrl: string }>`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Para evitar que la animación sobresalga */

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundUrl});
    background-size: cover;
    background-position: center;
    filter: blur(5px); /* Añadido blur solo al fondo */
    opacity: 0.8; /* Bajada de opacidad solo al fondo */
    animation: zoomInOut 20s ease-in-out infinite; /* Animación zoom */
    top: 0;
    left: 0;
    z-index: 1; /* Fondo detrás del contenido */
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    z-index: 2; /* Oscurecer el fondo pero debajo del texto */
  }

  @keyframes zoomInOut {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05); /* Zoom in */
    }
  }
`;

// Título que se mantiene sobre el fondo y no es afectado por el blur
export const GalleryTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 3; /* Encima del fondo y del overlay oscuro */
`;

// Contenedor de las imágenes en grid
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
`;

// Imagen en la galería
export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

// Contenedor del modal de imagen ampliada
export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${(props) => (props.isOpen ? "fadeIn 0.5s" : "fadeOut 0.5s")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

// Imagen ampliada dentro del modal
export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.3);
  animation: scaleUp 0.3s ease;

  @keyframes scaleUp {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;

// Botón para cerrar el modal
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 101;

  &:hover {
    color: #f00;
  }
`;

// Flechas para la navegación en el modal
export const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 2rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  transform: translateY(-50%);
`;

export const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 2rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  transform: translateY(-50%);
`;
