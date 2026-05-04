"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";

const UpdateProfileForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries());

    setLoading(true);

    await authClient.updateUser({
      name: updateData.name,
      image: updateData.image,
    });

    setLoading(false);

    router.refresh();
    router.push("/my-profile");
  };

  const inputGroupClass =
    "bg-[#FCFBF8] rounded-lg overflow-hidden focus-within:border-[#E46212] focus-within:ring-2 focus-within:ring-[#E46212] focus-within:shadow-lg-[#E46212] focus-within:shadow-[0_0_15px_rgba(228,98,18,0.35)] transition-all duration-200";

  return (
    <div className="animate__animated animate__bounceInUp">
      <div className="p-5 bg-[#FCFBF8]/60 backdrop-blur-xl rounded-xl shadow-[0_0px_10px_-2px_#E46212] max-w-xl mx-auto">
        <Form className="space-y-6" onSubmit={handleUpdateProfile}>
          {/* name */}
          <TextField isRequired type="text">
            <Label>Full name</Label>

            <InputGroup className={inputGroupClass}>
              <InputGroup.Prefix>
                <User className="size-4 text-[#6E5F5D]" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="name"
                placeholder={user?.name}
                className={"pl-3"}
              />
            </InputGroup>

            <FieldError />
          </TextField>

          {/* image_url */}
          <TextField isRequired type="text">
            <Label>Image URL</Label>

            <InputGroup className={inputGroupClass}>
              <InputGroup.Prefix>
                <IoIosLink className="size-4 text-[#6E5F5D]" />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="image"
                placeholder="Enter update url"
                className={"pl-3"}
              />
            </InputGroup>

            <FieldError />
          </TextField>

          <div className="pt-3 space-y-3">
            <Button
              type="reset"
              variant="danger"
              className={"w-full rounded-xl"}
            >
              Reset
            </Button>

            <Button
              isDisabled={loading}
              type="submit"
              className={"w-full bg-[#E46212] rounded-xl"}
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
