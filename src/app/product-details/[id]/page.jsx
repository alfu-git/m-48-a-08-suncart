import ProductDetailsCard from "@/components/productDetailsPage/productDetailsCard/ProductDetailsCard";
import { getAllProducts } from "@/lib/dataFetch";
import { Button } from "@heroui/react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const allProducts = await getAllProducts();

  const expectedProduct = allProducts.find(
    (product) => product.id === Number(id),
  );

  return {
    title: `SunCart Product | ${expectedProduct.name}`,
    description: expectedProduct.description,
  };
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const allProducts = await getAllProducts();

  const expectedProduct = allProducts.find(
    (product) => product.id === Number(id),
  );
  return (
    <section>
      <div className="py-2 sm:py-4 bg-[#FAF7F2]">
        <div className="container mx-auto px-5">
          <Link href={"/products"}>
            <Button
              className={
                "text-lg text-[#6E5F5D] hover:text-[#1A1A1A] flex gap-2 items-center bg-transparent border-none"
              }
            >
              <ChevronLeft />
              <span>Back to products</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-5 py-15 border-y border-gray-300">
        <ProductDetailsCard expectedProduct={expectedProduct} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
