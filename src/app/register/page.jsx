import RegisterForm from "@/components/registerPage/registerForm/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <section className="pt-12 bg-[#FCFBF8]">
      <div className="container mx-auto px-5">
        <div className="flex min-h-screen">
          {/* image */}
          <div className="relative hidden w-full lg:max-w-lg  flex-1 lg:block">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent-soft-hover to-primary/10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&auto=format&fit=crop&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Join the SunCart Community
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get exclusive access to new arrivals, special offers, and summer
                inspiration.
              </p>
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
