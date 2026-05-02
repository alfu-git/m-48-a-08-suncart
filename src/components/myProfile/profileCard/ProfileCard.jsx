"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex justify-center">
      <div className="py-7.5 px-30 bg-[#FCFBF8]/60 backdrop-blur-xl rounded-2xl shadow-[0_0px_20px_-2px_#E46212] max-w-fit">
        <div className="flex flex-col items-center">
          <figure className="mb-7">
            <Image
              src={user?.image}
              alt={user?.name}
              width={100}
              height={100}
              className="rounded-full"
            />
          </figure>

          <h5 className="mb-2 text-2xl font-bold">{user?.name}</h5>
          <p className="text-[#6E5F5D] text-sm">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
