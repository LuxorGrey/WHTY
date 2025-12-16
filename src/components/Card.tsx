import { ReactNode, useEffect, useState } from "react";
import Button from "../styled-components/Button.styled";
import {
  ContainerCard,
  ImageCard,
  ImageCardLogo,
  StyledCard,
  TextCard,
  TextCardTitle,
} from "../styled-components/Card.styled";

export interface CardProps {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
    logo: ReactNode;
    borderColor: string;
    buttonText: string;
    hoverImage: string;
    urlButton: string;
  };
}

export default function Card({ item }: CardProps) {
  const {
    id,
    title,
    body,
    image,
    logo,
    borderColor,
    buttonText,
    hoverImage,
    urlButton,
  } = item;
  const [isHover, setIsHover] = useState(false);
  const [isRandomActive, setIsRandomActive] = useState(false);

  // Efecto para activar la imagen de hover aleatoriamente entre 1 y 7 segundos
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const triggerRandomHover = () => {
      const randomTime = Math.random() * (7000 - 1000) + 1000; // 1 to 7 seconds

      timeoutId = setTimeout(() => {
        // Solo activar si no se está haciendo hover manualmente
        if (!isHover) {
          setIsRandomActive(true);
          // Mantener la imagen activa por 0.5 segundos
          setTimeout(() => {
            setIsRandomActive(false);
            triggerRandomHover(); // Programar el siguiente
          }, 500);
        } else {
          // Si está en hover, esperar y probar de nuevo
          triggerRandomHover();
        }
      }, randomTime);
    };

    triggerRandomHover();

    return () => clearTimeout(timeoutId);
  }, [isHover]);

  return (
    <StyledCard
      onMouseEnter={() => setIsHover(true)} // Cuando el ratón entra en el contenedor, establece isHover en true
      onMouseLeave={() => setIsHover(false)} // Cuando el ratón sale del contenedor, establece isHover en false
      layout={id % 2 === 0 ? "row-reverse" : ""}
      borderColor={borderColor}
    >
      <ContainerCard>
        <ImageCardLogo>{logo}</ImageCardLogo>
        <TextCardTitle borderColor={borderColor}>{title}</TextCardTitle>
        <TextCard>{body}</TextCard>
      </ContainerCard>
      <Button
        borderColor={borderColor}
        onClick={() => window.open(urlButton, "_blank")}
      >
        {buttonText}
      </Button>

      <ImageCard
        src={isHover || isRandomActive ? hoverImage : image}
        style={{
          transition: "opacity 0.3s",
          opacity: isHover || isRandomActive ? 0.85 : 1, // Cambia la opacidad al hacer hover o random
        }}
      />
    </StyledCard>
  );
}
