import React from "react";

function Banner() {
  return (
    <div className='bg-[#FAFAFA] flex justify-center items-center gap-10 h-[100px]'>
      <p className='text-xl font-bold text-gray-400'>Trusted by :</p>
      <div className='flex gap-10'>
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/meta.7a1cdec.png'
          alt='image'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png'
          alt='image'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png'
          alt='image'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png'
          alt='image'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png'
          alt='image'
        />
      </div>
    </div>
  );
}

export default Banner;
