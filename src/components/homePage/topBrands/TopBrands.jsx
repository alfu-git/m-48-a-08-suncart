import Image from "next/image";
import React from "react";
import RayBan from "@/assets/brands-logo/ray-ban.svg";
import Adidas from "@/assets/brands-logo/adidas.png";
import LV from "@/assets/brands-logo/lv.png";
import Neutrogena from "@/assets/brands-logo/neutrogena.webp";
import Levis from "@/assets/brands-logo/levi's.png";
import Link from "next/link";

const TopBrands = () => {
  return (
    <section className="py-20 sm:py-30 bg-[#FCFBF8]">
      <div className="container mx-auto px-5">
        <div className="mb-15 text-center">
          <h2 className="text-3xl font-bold">Top Brands</h2>
          <p className="mt-3 text-[#6E5F5D]">
            Discover the most popular brands across our product lineup
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5  text-center">
          <Link
            href={"https://www.adidas.com/us"}
            className="p-6 bg-white rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <figure className="h-12 flex justify-center items-center">
              <Image
                src={Adidas}
                alt="Adidas brand logo"
                width={60}
                height={60}
              />
            </figure>

            <h5 className="mt-4 font-semibold">Adidas</h5>
            <p className="mt-1 text-sm"> Sportswear brand</p>
          </Link>

          <Link
            href={"https://www.ray-ban.com/usa"}
            className="p-6 bg-white rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <figure className="h-12 flex justify-center items-center">
              <Image
                src={RayBan}
                alt="Ray-Ban brand logo"
                width={60}
                height={60}
              />
            </figure>

            <h5 className="mt-4 font-semibold">Ray-ban</h5>
            <p className="mt-1 text-sm">Premium eyewear brand</p>
          </Link>

          <Link
            href={"https://sg.louisvuitton.com/eng-sg/homepage"}
            className="p-6 bg-white rounded-xl shadow-sm  transition-all hover:shadow-md hover:-translate-y-1"
          >
            <figure className="h-12 flex justify-center items-center">
              <Image src={LV} alt="Zara brand logo" width={90} height={90} />
            </figure>

            <h5 className="mt-4 font-semibold">Louis Vuitton</h5>
            <p className="mt-1 text-sm">Luxury fashion brand</p>
          </Link>

          <Link
            href={"https://www.neutrogena.com/"}
            className="p-6 bg-white rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <figure className="h-12 flex justify-center items-center">
              <Image
                src={Levis}
                alt="Levi's brand logo"
                width={70}
                height={70}
              />
            </figure>

            <h5 className="mt-4 font-semibold">Levi's</h5>
            <p className="mt-1 text-sm">Denim fashion brand</p>
          </Link>

          <Link
            href={
              "https://www.levi.com/US/en_US/?srsltid=AfmBOorTgPkE-1CRLGA-mCUpcWGNOngJgtG-4xuQtP5guiJkptayYBX0"
            }
            className="p-6 bg-white rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1 sm:col-span-2 lg:col-span-1"
          >
            <figure className="h-12 flex justify-center items-center">
              <Image
                src={Neutrogena}
                alt="Neutrogena brand logo"
                width={90}
                height={90}
              />
            </figure>

            <h5 className="mt-4 font-semibold">Neutrogena</h5>
            <p className="mt-1 text-sm">Skincare brand</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
