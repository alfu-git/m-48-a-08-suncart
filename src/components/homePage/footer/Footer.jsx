import { Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="mt-20 container mx-auto px-5">
      <div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="text-xl font-semibold flex gap-2 items-center">
              <span className="p-2 bg-[#E46212] rounded-full text-white">
                <Sun size={20} strokeWidth={1.75} />
              </span>

              <span>SunCart</span>
            </h2>

            <p className="text-[#6E5F5D] max-w-100">
              Your destination for premium summer essentials. From beach days to
              rooftop nights, we have got you covered.
            </p>

            <div className="flex gap-5 items-center text-[#6E5F5D]">
              <Link
                href={"https://www.instagram.com/_alfaz_76/"}
                className="hover:text-[#1A1A1A] font-bold transition"
              >
                <FaInstagram size={24} />{" "}
              </Link>

              <Link
                href={"/"}
                className="hover:text-[#1A1A1A] font-bold transition"
              >
                <FiTwitter size={24} />{" "}
              </Link>

              <Link
                href={"https://www.facebook.com/m.a.faz.495430"}
                className="hover:text-[#1A1A1A] font-bold transition"
              >
                <FiFacebook size={24} />{" "}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Shop</h4>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Fashion
                </Link>
              </li>

              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Skincare
                </Link>
              </li>

              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Beach Gear
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href={"/"}
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Support</h4>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Shipping
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Returns
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-sm text-[#6E5F5D] hover:text-[#1A1A1A]"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t py-8 sm:flex-row">
          <p className="text-sm text-[#6E5F5D]">
            &copy; SunCart. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-[#6E5F5D]">
            <Link href="/" className="hover:text-[#1A1A1A]">
              Privacy
            </Link>

            <Link href="/" className="hover:text-[#1A1A1A]">
              Terms
            </Link>

            <Link href="/" className="hover:text-[#1A1A1A]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
