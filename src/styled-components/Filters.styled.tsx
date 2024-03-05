import styled from "styled-components";

export const FiltersContainer = styled.section`
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  margin-bottom: 40px;
  border-radius: 1em;
  padding: 1em 6em;
  background: ${({ theme }) => theme.colors.card};
`;

export const FilterSectionLeft = styled.div`
  display: flex;
  gap: 1rem;
  place-content: center;
  justify-content: flex-start; /* Alinea a la izquierda */
`;

export const FilterSectionRight = styled.div`
  display: flex;
  gap: 1rem;
  place-content: center;
  justify-content: flex-end; /* Alinea a la derecha */
`;

export const FilterLabel = styled.label`
  font-weight: 500;
`;

export const FilterInput = styled.input``;

export const FilterSelect = styled.select`
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5em;
`;
