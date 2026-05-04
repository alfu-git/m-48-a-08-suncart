"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const BannerSlider = () => {
  const imageUrl = [
    "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP4737s2.jpg?im=Resize,width=750",
    "https://www.shopboxhill.com/cdn/shop/files/tupelo-tote_2_1000x1000.png?v=1739379180",
    "https://www.quiksilver.com/cdn/shop/files/QS000534M_NAL_OM-F.jpg?v=1775749365&width=825",
  ];

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {imageUrl.map((url, index) => {
          return (
            <div key={index}>
              <Image
                src={url}
                alt="Discounted Products"
                width={600}
                height={200}
                priority
                className="rounded-xl w-full h-80 sm:120 object-cover"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
