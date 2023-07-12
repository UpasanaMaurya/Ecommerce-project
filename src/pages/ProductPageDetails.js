import React from "react";
import ProductDetails from "../features/product/ProductDitails";
import Navbar from "../features/navbar/Navbar";

const ProductPageDetails = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
};

export default ProductPageDetails;
