import ProductCard from "@/components/shared/productCard/ProductCard";
import { getAllProducts } from "@/lib/dataFetch";
import React from "react";

const AllProducts = async () => {
  const allProducts = await getAllProducts();

  return (
    <section>
      <div className="py-4 sm:py-8 bg-[#FAF7F2]">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold">All Products</h2>
          <p className="mt-2 text-[#6E5F5D]">
            {allProducts.length} products found
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 py-15 border-y border-gray-300 animate__animated animate__fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-7">
          {allProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
