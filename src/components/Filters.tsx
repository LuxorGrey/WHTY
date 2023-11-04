import { ChangeEvent, useId } from "react";
import { useFilters } from "../hooks/useFilters";
import {
  FiltersContainer,
  FilterSection,
  FilterLabel,
  FilterInput,
  FilterSelect,
} from "../styled-components/Filters.styled";

type Filters = {
  minPrice: number;
  category: string;
  order: string;
};

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const orderFilterId = useId();

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: Filters) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: Filters) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleChangeOrder = (event: ChangeEvent<HTMLSelectElement>  ) => {
    console.log(event.target.value);
    setFilters((prevState: Filters) => ({
      ...prevState,
      order: event.target.value,
    }));
  };

  return (
    <FiltersContainer>
      <FilterSection>
        <FilterLabel htmlFor={minPriceFilterId}>Price</FilterLabel>
        <FilterInput
          type="range"
          id={minPriceFilterId}
          min="0"
          max="500"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </FilterSection>

      <FilterSection>
        <FilterLabel htmlFor={orderFilterId}>Ordenar</FilterLabel>
        <FilterSelect id={orderFilterId} onChange={handleChangeOrder}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="stock">Stock</option>
        </FilterSelect>
      </FilterSection>
      <FilterSection>
        <FilterLabel htmlFor={categoryFilterId}>Categoría</FilterLabel>
        <FilterSelect id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="artwork">Artwork</option>
          <option value="clothing">Clothing</option>
        </FilterSelect>
      </FilterSection>
    </FiltersContainer>
  );
}
