import StarRating from "@/components/shared/starRating/StarRating";
import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProductDetailsCard = ({ expectedProduct }) => {
  const {
    name,
    brand,
    price,
    rating,
    stock,
    description,
    image,
    category,
    tag,
  } = expectedProduct;

  return (
    <div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-12 animate__animated animate__fadeInDown">
      {/* images */}
      <figure className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

        <span className="absolute left-5 top-5 bg-[#E46212] py-1 px-3 rounded-full text-white text-sm">
          {tag}
        </span>
      </figure>

      {/* details */}
      <div className="flex flex-col">
        <p className="text-[#E46212] font-medium">{category}</p>

        <h3 className="mt-2 text-3xl font-bold sm:text-4xl leading-relaxed">
          {name}
        </h3>

        <div className="mt-5 flex gap-5 items-center">
          <StarRating rating={rating} />

          <span>({rating})</span>
        </div>

        <div className="mt-5 flex items-center gap-2 text-lg">
          <span className="text-gray-500">Brand:</span>
          <span className="font-semibold text-black">{brand}</span>
        </div>

        <Separator className="my-6" />

        <p className="text-[#6E5F5D]">{description}</p>

        <div className="mt-6  flex flex-wrap items-center gap-7.5">
          <p className="text-3xl font-bold">${price}</p>

          <div className="flex items-center gap-2 text-xl">
            <span className="text-gray-500">Stock:</span>

            <span
              className={`font-semibold ${
                stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {stock > 0 ? `${stock} available` : "Out of stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
