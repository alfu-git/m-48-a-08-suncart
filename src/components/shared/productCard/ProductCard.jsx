import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import StarRating from "../starRating/StarRating";

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <figure>
        <Image
          src={product.image}
          width={500}
          height={500}
          alt={product.name}
          className="w-full h-110 rounded-xl object-cover transition-transform duration-500 group-hover:scale-102"
        />
      </figure>

      <div className="mt-6">
        <h3 className="text-lg font-bold line-clamp-1">{product.name}</h3>

        <div className="my-2 flex gap-5 items-center">
          <StarRating rating={product.rating} />

          <span className="block text-[#6E5F5D]">({product.rating})</span>
        </div>

        <span className="text-lg font-semibold">${product.price}</span>

        <Link href={`/product-details/${product.id}`}>
          <Button
            className={
              "mt-3 h-11 w-full bg-[#E46212] active:bg-[#d65200] flex gap-4 items-center"
            }
          >
            <span>View Details</span>

            <HiArrowLongRight className="transition-transform duration-500 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
