import LoginForm from "@/components/loginPage/loginForm/LoginForm";
import Image from "next/image";
import React from "react";
import LoginBanner from "@/assets/login-banner.avif";

const LoginPage = () => {
  return (
    <section className="pt-12 bg-[#FCFBF8]">
      <div className="container mx-auto px-5">
        <div className="flex min-h-screen">
          {/* form */}
          <div className="mx-auto w-full max-w-sm lg:min-w-96">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Welcome back</h2>

              <p className="mt-2 text-sm text-[#6E5F5D]">
                Log in to your account to continue shopping
              </p>
            </div>

            <div>
              <LoginForm />
            </div>
          </div>

          {/* image */}
          <div className="relative hidden w-full lg:max-w-xl flex-1 lg:block">
            <div className="relative w-full h-full min-h-screen">
              <Image
                src={LoginBanner}
                alt="A beach view with a sunglass"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-[#F1EBE0]/90 to-transparent">
                <p className="font-medium">
                  “The best summer shopping experience. Quality products and
                  fast delivery every time.”
                </p>

                <p className="mt-2 text-[#6E5F5D] text-sm">
                  - Sarah, SunCart Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
