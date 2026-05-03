import AllProducts from "@/components/productsPage/allProducts/AllProducts";
import React from "react";

export const metadata = {
  title: "SunCart | All Products",
  description: "All products page",
};

const ProductsPage = () => {
  return (
    <>
      <AllProducts />
    </>
  );
};

export default ProductsPage;
