import React, { useState, useEffect } from "react";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });
  return (
    <div
      className={`${
        colorChange
          ? "sticky top-0 border border-b border-gray-300  bg-white  "
          : "bg-transparent"
      } z-50 `}
    >
      <nav
        className={`flex items-center justify-center  gap-[40px] py-3 px-6 `}
      >
        <div className='bg-red-500   mr-0 '>
          <span className='font-bold text-3xl tracking-tight text-black'>
            Fiverr
          </span>
        </div>

        {colorChange && (
          <div className='flex w-[500px] bg-yellow-300 border border-gray-300 h-[40px] items-center rounded-lg'>
            <input
              placeholder='What services are you today '
              className='w-full py-1 px-4 outline-none'
            />
            <button className='bg-black text-white h-[40px] rounded-r-lg  px-4'>
              icon
            </button>
          </div>
        )}
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover: hover:border-white'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block gap-3 lg:flex lg:items-center lg:w-auto ${
            colorChange ? "text-black hover:text-green-500 " : "text-white"
          }`}
        >
          <div className='text-lg  font-semibold lg:flex-grow gap-10'>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            >
              Fiverr Bussiness
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            >
              Explore
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            >
              Become a Seller
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 mr-4'
            >
              Sign In
            </a>
          </div>
          <div>
            <a
              href='#'
              className='inline-block text-lg px-4 py-2 leading-none font-semibold border rounded  border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
            >
              Join
            </a>
          </div>
        </div>
      </nav>
      {colorChange === true && (
        <div className='flex gap-2 font-lg font-medium px-6 py-2 text-gray-300  w-full'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 mr-4'
          >
            Graphic Designing
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 mr-4'
          >
            Digital Marketing
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 mr-4'
          >
            Video Animation
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
