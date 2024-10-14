import React, { useEffect, useState } from "react";
import {
  CloseButton,
  GalleryHeader,
  GalleryTitle,
  GalleryWrapper,
  ModalWrapper,
  NextButton,
  PrevButton,
} from "../styled-components/GalleryContent.styled";
import {
  GalleryGridVideo,
  ModalVideoIframe,
  VideoWrapper,
} from "../styled-components/GalleryContentVideo.styled";

interface GalleryContentVideoProps {
  title: string;
  backgroundUrl: string;
  videos: string[]; // Lista de URLs de videos, incluyendo URLs de YouTube
}

const GalleryContentVideo: React.FC<GalleryContentVideoProps> = ({
  title,
  backgroundUrl,
  videos,
}) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(
    null
  );

  // Función para abrir el modal con el video seleccionado
  const openModal = (index: number) => {
    setSelectedVideoIndex(index);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedVideoIndex(null);
  };

  // Función para pasar al video anterior
  const prevVideo = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Evitar que el click en el video cierre el modal
    if (selectedVideoIndex !== null) {
      setSelectedVideoIndex(
        selectedVideoIndex === 0 ? videos.length - 1 : selectedVideoIndex - 1
      );
    }
  };

  // Función para pasar al siguiente video
  const nextVideo = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedVideoIndex !== null) {
      setSelectedVideoIndex(
        selectedVideoIndex === videos.length - 1 ? 0 : selectedVideoIndex + 1
      );
    }
  };

  // Función para manejar las teclas de flechas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedVideoIndex !== null) {
        if (e.key === "ArrowRight") {
          nextVideo();
        } else if (e.key === "ArrowLeft") {
          prevVideo();
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideoIndex]);

  // Función para convertir la URL de YouTube en la URL de embed
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/
    );
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // En caso de no ser un video de YouTube, se devuelve la URL tal cual
  };

  return (
    <GalleryWrapper>
      {/* Header con título y fondo */}
      <GalleryHeader backgroundUrl={backgroundUrl}>
        <GalleryTitle>{title}</GalleryTitle>
      </GalleryHeader>

      {/* Grid de videos */}
      <GalleryGridVideo>
        {videos.map((video, index) => (
          <VideoWrapper key={index} onClick={() => openModal(index)}>
            {/* Usamos iframe para mostrar videos de YouTube */}
            <iframe
              width="100%"
              height="720"
              src={getYouTubeEmbedUrl(video)}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        ))}
      </GalleryGridVideo>

      {/* Modal de video ampliado */}
      {selectedVideoIndex !== null && (
        <ModalWrapper isOpen={selectedVideoIndex !== null} onClick={closeModal}>
          <PrevButton onClick={prevVideo}>&#10094;</PrevButton>
          <NextButton onClick={nextVideo}>&#10095;</NextButton>
          <ModalVideoIframe
            src={getYouTubeEmbedUrl(videos[selectedVideoIndex])}
            title={`Video ${selectedVideoIndex + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalWrapper>
      )}
    </GalleryWrapper>
  );
};

export default GalleryContentVideo;
