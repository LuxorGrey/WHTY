import { ReactNode, useState } from "react";
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
  };
}

export default function Card({ item }: CardProps) {
  const { id, title, body, image, logo, borderColor, buttonText, hoverImage } =
    item;
  const [isHover, setIsHover] = useState(false);
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
      <Button borderColor={borderColor}>{buttonText}</Button>

      <ImageCard
        src={isHover ? hoverImage ?? image : image}
        alt=""
        style={{
          transition: "opacity 0.3s",
          opacity: isHover ? 0.85 : 1, // Cambia la opacidad al hacer hover
        }}
      />
    </StyledCard>
  );
}
