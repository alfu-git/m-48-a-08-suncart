import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

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
        <h3 className="text-lg font-bold">{product.name}</h3>

        <p className="my-2 flex gap-5 items-center">
          <span className="flex gap-1 items-center text-[#E46212]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>

          <span className="block text-[#6E5F5D]">({product.rating})</span>
        </p>

        <span className="text-lg font-semibold">${product.price}</span>

        <Button
          className={
            "mt-3 h-11 w-full bg-[#E46212] active:bg-[#d65200] flex gap-4 items-center"
          }
        >
          <span>View Details</span>
          
          <HiArrowLongRight className="transition-transform duration-500 group-hover:translate-x-2" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
