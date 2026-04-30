import ProductCard from "@/components/shared/productCard/ProductCard";
import { getAllProducts } from "@/lib/dataFetch";
import React from "react";

const PopularProducts = async () => {
  const allProducts = await getAllProducts();
  const popularProducts = allProducts.filter(
    (product) => product.tag === "Popular",
  );

  return (
    <section className="py-40 bg-linear-to-t from-[#FCFBF8] to-white">
      <div className="container mx-auto px-5">
        <div>
          <div className="mb-15 text-center">
            <h2 className="text-3xl font-bold">Popular Products</h2>
            <p className="mt-3 text-[#6E5F5D]">
              Top popular products loved by our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
