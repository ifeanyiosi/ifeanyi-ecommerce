import React from "react";
import Button from "../Button";
import CartCount from "../cartComponents/CartCount";
import CartEmpty from "../cartComponents/CartEmpty";
import CartItem from "../cartComponents/CartItem";

const Cart = () => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250]`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
