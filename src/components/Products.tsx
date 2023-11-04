import { FaShoppingCart, FaStar, FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import {
  IconsContainer,
  ProductCategory,
  ProductImage,
  ProductItem,
  ProductSubtitle,
  ProductTitle,
  ProductsContainer,
  ProductsList,
} from "../styled-components/Products.styled";
import { Product } from "./interfaces/Products";

export function Products({ products }: { products: Product[] }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((item: Product) => item.id === product.id);
  };

  const productsToShow = products.slice(0.1);

  return (
    <ProductsContainer>
      <ProductsList>
        {productsToShow.map((product: Product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <ProductItem key={product.id}>
              <ProductImage src={product.thumbnail} alt={product.title} />
              <div>
                <ProductTitle>{product.title}</ProductTitle> ${product.price}
                <ProductCategory>
                  {product.category.toUpperCase()}
                </ProductCategory>
                <ProductSubtitle>{product.description}</ProductSubtitle>
              </div>
              <IconsContainer
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product);
                }}
              >
                {isProductInCart ? <FaTrash /> : <FaShoppingCart />}
                <ProductSubtitle>
                  {product.rating} <FaStar />
                </ProductSubtitle>
                <ProductSubtitle>(Stock: {product.stock})</ProductSubtitle>
              </IconsContainer>
            </ProductItem>
          );
        })}
      </ProductsList>
    </ProductsContainer>
  );
}
