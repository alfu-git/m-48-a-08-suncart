import { Button } from "@heroui/react";
import { ArrowRight, Sun } from "lucide-react";
import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/banner-img.png";

const Banner = () => {
  return (
    <section className="pt-25 pb-25 lg:pt-30 lg:pb-40 bg-linear-to-br from-[#FAEEE5] via-[#FDF9F5] to-[#E5ECE5]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          {/* banner details */}
          <div className="lg:min-w-100 xl:min-w-125">
            <p className="py-1 px-3 max-w-fit rounded-full bg-[#FAE5D8] flex gap-2 items-center text-[#E46212]">
              <span>
                <Sun size={18} />
              </span>

              <span>Summer Collection 2026</span>
            </p>

            <h1 className="my-6 text-5xl font-bold flex flex-col">
              <span>Embrace the</span>
              <span className="text-[#E46212]">Summer Glow</span>
            </h1>

            <p className="mb-7 max-w-125 text-[#6E5F5D]">
              Discover our curated collection of premium summer essentials. From
              sun protection to beach-ready fashion, elevate your sunny days
            </p>

            <div className="flex gap-3 items-center">
              <Button
                className={
                  "flex gap-4 bg-[#E46212] hover:bg-[#E46212]/95 rounded-xl text-white"
                }
              >
                <span>Shop Now</span>

                <span>
                  <ArrowRight />
                </span>
              </Button>

              <Button
                variant="outline"
                className={
                  "rounded-xl shadow-sm hover:bg-[#2D5A4A] hover:text-white"
                }
              >
                Explore Sunglasses
              </Button>
            </div>
          </div>

          {/* banner image */}
          <div className="relative w-full h-50 sm:h-110">
            <Image
              src={BannerImg}
              alt="A man enjoy the beach view"
              fill
              className="object-cover rounded-xl"
            />

            <div className="absolute -right-4 -top-12 lg:top-auto lg:right-auto lg:-bottom-15 lg:-left-15 bg-white rounded-xl p-2 sm:p-4 shadow-xl hover:scale-105 transition">
              <span className="text-xs sm:text-sm font-medium">Up to</span>

              <h2 className="lg:mb-1 text-[#E46212] text-2xl sm:text-5xl font-bold">
                50% off
              </h2>

              <span className="text-xs sm:text-sm">Summer Sale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
