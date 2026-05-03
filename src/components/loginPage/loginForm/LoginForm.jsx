"use client";
import React, { useState } from "react";
import { Envelope, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { Eye, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import Link from "next/link";
import { handleGoogleLogIn } from "@/lib/googleAuth";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: callbackUrl,
    });

    setLoading(false);

    if (error) {
      toast.error(<h6 className="font-bold text-black">{error.message}</h6>);
    }

    if (data) {
      toast.success(<h6 className="font-bold text-black">Login Successful</h6>);

      router.push(callbackUrl);
    }
  };

  const inputGroupClass =
    "bg-[#FCFBF8] rounded-lg overflow-hidden focus-within:border-[#E46212] focus-within:ring-2 focus-within:ring-[#E46212] focus-within:shadow-lg-[#E46212] focus-within:shadow-[0_0_15px_rgba(228,98,18,0.35)] transition-all duration-200";

  return (
    <div className="pb-12">
      <Form className="space-y-6" onSubmit={onSubmit}>
        {/* email */}
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email address</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <Envelope className="size-4 text-[#6E5F5D]" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="email"
              placeholder="you@example.com"
              className={"pl-3"}
            />
          </InputGroup>

          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <Lock className="size-4 text-[#6E5F5D]" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Create a password"
              className={"pl-3"}
            />

            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <Description>Must be at least 8 characters</Description>

          <FieldError />
        </TextField>

        <Button
          isDisabled={loading}
          type="submit"
          className={"w-full bg-[#E46212] rounded-xl"}
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </Form>

      <div className="my-6 flex items-center">
        <div className="grow border-t border-[#6E5F5D]"></div>

        <span className="mx-2 text-[#6E5F5D] text-sm uppercase">
          or Continue with
        </span>

        <div className="grow border-t border-[#6E5F5D]"></div>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => handleGoogleLogIn(callbackUrl)}
          variant="outline"
          className={
            "px-15 flex gap-4 rounded-lg hover:bg-[#2D5A4A] hover:text-white"
          }
        >
          <span>
            <FaGoogle />
          </span>

          <span className="font-light">Google</span>
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-[#E46212] hover:text-[#E46212]/80"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
