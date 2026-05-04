"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/shared/spinner/Spinner";

const ProfileCard = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex justify-center">
      <div className="py-7.5 px-15 sm:px-30 bg-[#FCFBF8]/60 backdrop-blur-xl rounded-2xl shadow-[0_0px_20px_-2px_#E46212] max-w-fit">
        <div className="flex flex-col items-center">
          <figure className="mb-7">
            {isPending ? (
              <div className="mt-5">
                <Spinner size={35} />
              </div>
            ) : (
              <Image
                src={user?.image}
                alt={user?.name || "User Profile"}
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
            )}
          </figure>

          <h5 className="mb-2 text-2xl font-bold">{user?.name}</h5>
          <p className="text-[#6E5F5D] text-sm">{user?.email}</p>

          <Link href={"/update-profile"}>
            <Button
              className={
                "mt-4 flex gap-3 items-center h-8 bg-[#E46212] hover:bg-[#2D5A4A] hover:text-white"
              }
            >
              <UserPen />
              <span>Update Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
