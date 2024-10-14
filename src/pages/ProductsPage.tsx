import productBackground from "../assets/image/backgrounds/productBackground.png";
import { Filters } from "../components/Filters";
import { Products } from "../components/Products";
import { useFilters } from "../hooks/useFilters";
import { products as initialProducts } from "../mock/products.json";
import { HeaderBackground } from "../styled-components/Gallery.styled";
import { BackgroundContainer } from "../styled-components/LandingImage.styled";
const ProductsPage = () => {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
      <BackgroundContainer>
        <Filters />
        <HeaderBackground src={productBackground} />
        <Products products={filteredProducts} />
      </BackgroundContainer>
    </>
  );
};
export default ProductsPage;
