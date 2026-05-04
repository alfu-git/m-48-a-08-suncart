"use client";
import React from "react";
import RayBan from "@/assets/brands-logo/ray-ban.png";
import Adidas from "@/assets/brands-logo/adidas.png";
import Cosrx from "@/assets/brands-logo/cosrx.png";
import Nivea from "@/assets/brands-logo/nivea.png";
import LV from "@/assets/brands-logo/lv.png";
import Zara from "@/assets/brands-logo/zara.png";
import Nike from "@/assets/brands-logo/nike.png";
import Billabong from "@/assets/brands-logo/billabong.png";
import Careve from "@/assets/brands-logo/careve.png";
import Havaianas from "@/assets/brands-logo/havaianas.png";
import Levis from "@/assets/brands-logo/levi's.png";
import DockAndBay from "@/assets/brands-logo/dock-and-bay.png";
import Forever21 from "@/assets/brands-logo/forever-21.png";
import HAndM from "@/assets/brands-logo/h&m.png";
import Furtalk from "@/assets/brands-logo/furtalk.webp";
import Herschel from "@/assets/brands-logo/herschel.png";
import HydroFlask from "@/assets/brands-logo/hydro-flask.png";
import Jbl from "@/assets/brands-logo/jbl.png";
import LaRochePosay from "@/assets/brands-logo/la-roche-posay.jpg";
import Neutrogena from "@/assets/brands-logo/neutrogena.webp";
import Parada from "@/assets/brands-logo/parada.png";
import Quiksilver from "@/assets/brands-logo/quiksilver.png";
import Shein from "@/assets/brands-logo/shein.png";
import SunBum from "@/assets/brands-logo/sun-bum.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  const brands = [
    RayBan,
    Adidas,
    Cosrx,
    Nivea,
    LV,
    Zara,
    Nike,
    Billabong,
    Careve,
    Havaianas,
    Levis,
    DockAndBay,
    Forever21,
    HAndM,
    Furtalk,
    Herschel,
    HydroFlask,
    Jbl,
    LaRochePosay,
    Neutrogena,
    Parada,
    Quiksilver,
    Shein,
    SunBum,
  ];

  return (
    <div className="py-3 bg-linear-to-r from-[#2D5A4A]/20 via-white to-[#E46212]/20 overflow-hidden">
      <Marquee pauseOnHover={true} speed={100} gradient={false}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-10 hover:-translate-y-2 transition-all duration-300"
          >
            <Image src={brand?.src} alt="brand" width={80} height={80} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
