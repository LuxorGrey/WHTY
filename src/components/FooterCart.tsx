/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaCcPaypal, FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import { CartIconNumber } from "../styled-components/Cart.styled";
import {
  CartFooterContainer,
  ButtonCart,
} from "../styled-components/CartFooter.styled";

function FooterCart() {
  const { clearCart } = useCart();
  const onPay = () => {};
  return (
    <CartFooterContainer>
      <ButtonCart onClick={clearCart}>
        <FaTrash style={{ fontSize: "0.6em", paddingRight: "0.1em" }} />
        <CartIconNumber>Clean</CartIconNumber>
      </ButtonCart>
      <ButtonCart onClick={onPay}>
        <FaCcPaypal style={{ fontSize: "0.6em", paddingRight: "0.1em" }} />
        <CartIconNumber>Pay</CartIconNumber>
      </ButtonCart>
    </CartFooterContainer>
  );
}

export default FooterCart;
