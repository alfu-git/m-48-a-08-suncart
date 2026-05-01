"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { Sun, User } from "lucide-react";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLink = (
    <>
      <li>
        <Link
          href={"/"}
          className={`
        font-semibold text-sm
        ${pathname === "/" ? "text-[#1A1A1A] font-medium border-b border-[#E07A3C]" : "text-[#776867]"}
          `}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"/products"}
          className={`
        font-semibold text-sm
        ${pathname === "/products" ? "text-[#1A1A1A] font-medium border-b border-[#E07A3C]" : "text-[#776867]"}
          `}
        >
          Products
        </Link>
      </li>

      <li>
        <Link
          href={"/my-profile"}
          className={`
        font-semibold text-sm
        ${pathname === "/my-profile" ? "text-[#1A1A1A] font-medium border-b border-[#E07A3C]" : "text-[#776867]"}
          `}
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-[#E46212] py-2 px-4 text-white text-center text-sm font-medium">
        <span>
          Free shipping on orders over $75 | Summer Sale: Up to 50% off
        </span>
      </div>

      <nav className="sticky top-0 z-40 w-full bg-[#FCFBF8]/60 backdrop-blur-lg">
        <header className="container mx-auto px-5 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="p-1 md:hidden hover:bg-[#2D5A4A] hover:rounded-md hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <RxCross2 size={20} />
              ) : (
                <IoMenuOutline size={20} />
              )}
            </button>

            <h2 className="text-xl font-semibold flex gap-2 items-center">
              <span className="p-2 bg-[#E46212] rounded-full text-white">
                <Sun size={20} strokeWidth={1.75} />
              </span>

              <span>SunCart</span>
            </h2>
          </div>

          <ul className="hidden items-center gap-4 md:flex">{navLink}</ul>

          <div className="flex gap-3 items-center">
            <span className="hidden sm:block">
              <User size={18} />
            </span>

            <div className="flex gap-2 text-sm">
              <Link href={"/login"}>
                <Button
                  variant="outline"
                  className={"h-7 px-2.5 sm:px-4 rounded-xl"}
                >
                  Login
                </Button>
              </Link>

              <Link href={"/register"}>
                <Button
                  className={
                    "h-7 px-2.5 sm:px-4 bg-[#E46212] hover:bg-[#f46811] rounded-xl text-white font-medium"
                  }
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">{navLink}</ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
