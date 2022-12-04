import React from "react";
import { FiChevronsLeft } from "react-icons/fi";
import Button from "../Button";

const CartCount = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <FiChevronsLeft className="" />
          </div>
          <div>
            <h1>
              Your Cart
              <span>{items}</span>
            </h1>
          </div>
        </div>
        <div>
          <Button label=" " />
        </div>
      </div>
    </>
  );
};

export default CartCount;
