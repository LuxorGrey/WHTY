import { ParallaxProvider } from "react-scroll-parallax";
import { Filters } from "../components/Filters";
import { Products } from "../components/Products";
import { useFilters } from "../hooks/useFilters";
import { products as initialProducts } from "../mock/products.json";
import { HeaderBackground } from "../styled-components/Bio.styled";
import productBackground from "../assets/image/productBackground.png";
import { BackgroundContainer } from "../styled-components/LandingImage.styled";
export function ProductsPage() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <ParallaxProvider>
      <BackgroundContainer>
        <Filters />
        <HeaderBackground src={productBackground} />
        <Products products={filteredProducts} />
      </BackgroundContainer>
    </ParallaxProvider>
  );
}
