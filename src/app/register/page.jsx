import RegisterForm from "@/components/registerPage/registerForm/RegisterForm";
import Image from "next/image";
import React from "react";
import RegisterBanner from "@/assets/register-banner.avif";

export const metadata = {
  title: "SunCart | Register",
  description: "SunCart user account registering page",
};

const RegisterPage = () => {
  return (
    <section className="pt-12 bg-[#FCFBF8]">
      <div className="container mx-auto px-5 animate__animated animate__fadeIn">
        <div className="flex min-h-screen">
          {/* image */}
          <div className="relative hidden w-full lg:max-w-lg xl:max-w-xl flex-1 lg:block">
            <div className="relative w-full h-full min-h-screen">
              <Image
                src={RegisterBanner}
                alt="A beach view with a sunglass"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-[#F1EBE0]/90 to-transparent">
                <h2 className="text-3xl font-bold text-black">
                  Join the SunCart Community
                </h2>

                <p className="mt-4 text-[#6E5F5D]">
                  Get exclusive access to new arrivals, special offers, and
                  summer inspiration.
                </p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="mx-auto w-full max-w-sm lg:min-w-96">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Create an account</h2>

              <p className="mt-2 text-sm text-[#6E5F5D]">
                Start your summer shopping journey today
              </p>
            </div>

            <div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
