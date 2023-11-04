import styled from "styled-components";

export const FiltersContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 40px;
  border-radius: 1em;
  padding: 1em 12em;
  background: ${({ theme }) => theme.colors.card};
`;

export const FilterSection = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  place-content: center;
`;

export const FilterLabel = styled.label`
  font-weight: 700;
`;

export const FilterInput = styled.input``;

export const FilterSelect = styled.select`
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5em;
`;
