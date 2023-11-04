import styled from "styled-components";

export const ProductsContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;
`;
export const IconsContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsList = styled.ul`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    opacity: 0.9;
    transform: scale(1.05);
    transition: box-shadow 0.3s, opacity 0.3s, transform 0.3s;
  }

  &:not(:hover) {
    transition: box-shadow 0.3s, opacity 0.3s, transform 0.3s;
    opacity: 1;
    transform: scale(1);
  }
`;

export const ProductTitle = styled.h3`
  text-align-last: center;
  margin: 0;
`;
export const ProductTitleCart = styled.h3`
  margin: 0;
  font-size: 0.75rem;
`;

export const ProductCategory = styled.h3`
  padding: 0.75em;
  font-size: 0.75rem;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.topHeader};
  color: ${({ theme }) => theme.colors.text};
`;
export const ProductSubtitle = styled.h3`
  margin: 0;
  font-size: 0.65rem;
`;

export const ProductSpan = styled.span`
  font-size: 1rem;
  opacity: 0.9;
`;

export const ProductImage = styled.img`
  border-radius: 4px;
  width: 100%;
  display: block;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.card};
`;
