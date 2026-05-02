import ProfileCard from '@/components/myProfile/profileCard/ProfileCard';
import React from 'react';

const MyProfilePage = () => {
  return (
    <section className='py-20 bg-[#FCFBF8]'>
      <div className='container mx-auto px-5'>
        <ProfileCard />
      </div>
    </section>
  );
};

export default MyProfilePage;