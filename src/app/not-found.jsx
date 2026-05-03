import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export const metadata = {
  title: "Not available",
  description: "This page is not available in SunCart site",
};

const NotFoundPage = () => {
  return (
    <section className="pb-20 bg-[#FCFBF8]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col justify-center items-center text-center">
          <h6 className="text-[200px] font-semibold">404</h6>

          <p className="mt-7 mb-5 text-3xl font-semibold">
            It looks like you&apos;ve lost your way
          </p>

          <Link href={"/"}>
            <Button className={"bg-[#E46212] rounded-xl font-medium text-lg"}>
              Go To Homepage
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
