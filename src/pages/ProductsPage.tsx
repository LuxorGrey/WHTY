import { ParallaxProvider } from "react-scroll-parallax";
import { Filters } from "../components/Filters";
import { Products } from "../components/Products";
import { useFilters } from "../hooks/useFilters";
import { products as initialProducts } from "./products.json";

export function ProductsPage() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <ParallaxProvider>
      <Filters />
      <Products products={filteredProducts} />
    </ParallaxProvider>
  );
}
