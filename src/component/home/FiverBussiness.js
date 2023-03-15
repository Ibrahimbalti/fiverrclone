import React from "react";

function FiverBussiness() {
  return (
    <div className='flex gap-5 '>
      <div className='flex flex-col gap-4 pl-10 '>
        <h1 className='text-lg font-bold text-white'>
          Fiverr <span className='font-medium'> Bussiness</span>
        </h1>
        <h1 className='text-xl font-bold text-white'>
          A business solution designed for{" "}
          <span className='font-medium'>teams</span>
        </h1>
        <p className='text-white font-normal text-lg'>
          Upgrade to a curated experience packed with tools and benefits,
          dedicated to businesse
        </p>
        <div className='text-white flex flex-col gap-3'>
          <div className='flex gap-2'>
            <p>icon</p>
            <p>Connect to freelancers with proven business experience</p>
          </div>
          <div className='flex gap-2'>
            <p>icon</p>
            <p>Connect to freelancers with proven business experience</p>
          </div>
          <div className='flex gap-2'>
            <p>icon</p>
            <p>Connect to freelancers with proven business experience</p>
          </div>
        </div>
        <button className='px-10 py-3 mt-8 bg-[#19A463] text-lg text-white w-7/12 rounded-lg font-bold'>
          Explore Fiverr Bussiness
        </button>
      </div>

      <div className='w-9/12'>
        <img
          src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png'
          alt='imge'
          className='h-full w-full'
        />
      </div>
    </div>
  );
}

export default FiverBussiness;
