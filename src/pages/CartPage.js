import React from "react";
import Cart from "../features/cart/Cart";
import Navbar from "../features/navbar/Navbar";

const CartPage = () => {
  return (
    <div>
      <Navbar>
        <Cart />
      </Navbar>
    </div>
  );
};

export default CartPage;
