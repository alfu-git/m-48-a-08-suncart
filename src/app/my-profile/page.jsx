import ProfileCard from "@/components/myProfile/profileCard/ProfileCard";
import React from "react";

export const metadata = {
  title: "SunCart | My-Profile",
  description: "SunCart user profile page",
};

const MyProfilePage = () => {
  return (
    <section className="py-20 bg-[#FCFBF8]">
      <div className="container mx-auto px-5 animate__animated animate__fadeIn">
        <ProfileCard />
      </div>
    </section>
  );
};

export default MyProfilePage;
