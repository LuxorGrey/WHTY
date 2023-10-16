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
    logo: string;
    borderColor: string;
  };
}

export default function Card({ item }: CardProps) {
  const { id, title, body, image, logo, borderColor } = item;
  console.log(id);
  return (
    <StyledCard
      layout={id % 2 === 0 && "row-reverse"}
      borderColor={borderColor}
    >
      <ContainerCard>
        <ImageCardLogo src={logo} />
        <TextCardTitle borderColor={borderColor}>{title}</TextCardTitle>
        <TextCard>{body}</TextCard>
      </ContainerCard>

      <ImageCard src={image} alt="" />
    </StyledCard>
  );
}
