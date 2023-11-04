/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import {
  CartButton,
  CartButtonClose,
  CartContainer,
  CartFooter,
  CartImage,
  CartItemContainer,
  Separator,
} from "../styled-components/Cart.styled";
import {
  ProductSubtitle,
  ProductTitle,
  ProductTitleCart,
} from "../styled-components/Products.styled";
import FooterCart from "./FooterCart";
import StyledEmpty from "./EmptyCart";

interface CartItem {
  thumbnail: string;
  price: string | number;
  title: string;
  quantity: string | number;
  addToCart: () => void;
  removeFromCart: () => void;
}

function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeFromCart,
}: CartItem) {
  return (
    <CartItemContainer>
      <Separator />
      <CartImage src={thumbnail} alt={title} />
      <div>
        <ProductTitleCart>{title}</ProductTitleCart>
        <ProductTitleCart>${price}</ProductTitleCart>
      </div>

      <CartFooter>
        <ProductSubtitle>Qty: {quantity}</ProductSubtitle>
        <div style={{ cursor: "pointer" }} onClick={addToCart}>
          +
        </div>
        <div style={{ cursor: "pointer" }} onClick={removeFromCart}>
          -
        </div>
      </CartFooter>
    </CartItemContainer>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <CartButton htmlFor={cartCheckboxId}>
        <FaShoppingCart />
      </CartButton>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <CartContainer style={{ zIndex: 10000 }}>
        <CartButtonClose htmlFor={cartCheckboxId}>
          <FaWindowClose />
        </CartButtonClose>
        <ProductTitle>My Cart</ProductTitle>

        {cart.map((product: any) => (
          <CartItem
            style={{ zIndex: 10000 }}
            key={product.id}
            removeFromCart={() => removeFromCart(product)}
            addToCart={() => addToCart(product)}
            {...product}
          />
        ))}
        {cart.length === 0 ? <StyledEmpty /> : <FooterCart />}
      </CartContainer>
    </div>
  );
}

export default Cart;
