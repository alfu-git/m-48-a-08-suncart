import UpdateProfileForm from "@/components/updateProfilePage/updateProfileForm/UpdateProfileForm";
import React from "react";

export const metadata = {
  title: "SunCart | Update-Profile",
  description: "SunCart user profile update page",
};

const UpdateProfilePage = () => {
  return (
    <section className="py-20 bg-[#FCFBF8]">
      <div className="container mx-auto px-5">
        <UpdateProfileForm />
      </div>
    </section>
  );
};

export default UpdateProfilePage;
