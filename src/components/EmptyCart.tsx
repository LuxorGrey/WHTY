import styled from "styled-components";
import Sad from "../assets/gifs/sad.gif";
import { ImageSad } from "../styled-components/StickyImage.styled";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
`;

const EmptyText = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

function StyledEmpty() {
  return (
    <EmptyContainer>
      <EmptyText>El carrito está vacío</EmptyText>
      <ImageSad src={Sad} alt="Gotas de agua" />
    </EmptyContainer>
  );
}

export default StyledEmpty;
