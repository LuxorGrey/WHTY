import { StyledCard, ImageCard } from "../styled-components/Card.styled";

export interface CardProps {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
}

export default function Card({ item }: CardProps) {
  const { id, title, body, image } = item;
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <ImageCard src={`src/images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
