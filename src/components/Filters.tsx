import { ChangeEvent, useId } from "react";
import { useFilters } from "../hooks/useFilters";
import {
  FilterInput,
  FilterLabel,
  FilterSectionLeft,
  FilterSectionRight,
  FilterSelect,
  FiltersContainer,
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

  const handleChangeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: Filters) => ({
      ...prevState,
      order: event.target.value,
    }));
  };

  return (
    <FiltersContainer>
      <FilterSectionLeft>
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
      </FilterSectionLeft>
      <FilterSectionRight>
        <FilterLabel htmlFor={orderFilterId}>Order by</FilterLabel>
        <FilterSelect id={orderFilterId} onChange={handleChangeOrder}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="stock">Stock</option>
        </FilterSelect>
        <FilterLabel htmlFor={categoryFilterId}>Category</FilterLabel>
        <FilterSelect id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="artwork">Artwork</option>
          <option value="clothing">Clothing</option>
        </FilterSelect>
      </FilterSectionRight>
    </FiltersContainer>
  );
}
