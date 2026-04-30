import { Droplets, Leaf, Sun } from "lucide-react";
import React from "react";

const SummerTips = () => {
  return (
    <section className="my-20 sm:my-30 lg:my-40 container mx-auto px-5">
      <div>
        <div className="mb-15 text-center">
          <h2 className="text-3xl font-bold">Summer Care Tips</h2>
          <p className="mt-3 text-[#6E5F5D]">
            Keep your skin healthy and radiant during the summer season
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
          <div className="p-5 bg-[#FCFBF8] rounded-2xl shadow-sm group">
            <span className="mb-5 text-orange-600 flex gap-1">
              <Sun
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Sun
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Sun
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </span>

            <h5 className="mb-3 text-lg font-semibold">
              Daily Sunscreen Routine
            </h5>
            <p className="text-[#6E5F5D]">
              Apply SPF 30+ sunscreen every 2 hours, even on cloudy days.
              Sunscreen is your best defense against harmful UV rays.
            </p>
          </div>

          <div className="p-5 bg-[#FCFBF8] rounded-2xl shadow-sm group">
            <span className="mb-5 text-blue-600 flex gap-1">
              <Droplets
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Droplets
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Droplets
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </span>

            <h5 className="mb-3 text-lg font-semibold">Stay Hydrated</h5>
            <p className="text-[#6E5F5D]">
              Drink at least 8-10 glasses of water daily. Proper hydration keeps
              your skin glowing and your body refreshed during hot weather.
            </p>
          </div>

          <div className="p-5 bg-[#FCFBF8] rounded-2xl shadow-sm group">
            <span className="mb-5 text-green-600 flex gap-1">
              <Leaf
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Leaf
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Leaf
                size={18}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </span>

            <h5 className="mb-3 text-lg font-semibold">Moisturize Daily</h5>
            <p className="text-[#6E5F5D]">
              Use a lightweight, non-comedogenic moisturizer. Keep your skin
              balanced and protected from the harsh summer sun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerTips;
