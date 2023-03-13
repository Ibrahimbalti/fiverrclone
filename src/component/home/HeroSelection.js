import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Header from "../Header";

// const fadeImages = [
//   {
//     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//   },
// ];

const fadeProperties = {
  duration: 1100,
  transitionDuration: 600,
  infinite: true,
  dot: false,
  indicators: false,
  arrows: false,
  autoplay: true,
};

function HeroSelection() {
  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80')] relative bg-cover"></div>
      <div className='  h-[600px]   '>
        <div className='absolute top-[25%] left-20 w-6/12 flex flex-col gap-6 '>
          <h1 className='text-[50px] text-white font-bold '>
            Find the perfect freelance services for your business
          </h1>
          <div className='flex  w-11/12  '>
            <div className='flex bg-white rounded-l-lg gap-1 w-full items-center pl-4'>
              <div>icon</div>
              <input
                placeholder={`Try "building mobile app"`}
                className='w-full py-3 px-4 outline-none'
              />
            </div>
            <button className='bg-green-500 text-white px-4 rounded-r-lg'>
              Search
            </button>
          </div>
          <div className='flex gap-2 items-center'>
            <p
              className='text-white font-me
                 text-lg'
            >
              Popular:
            </p>
            <div className='w-[130px] h-[30px] rounded-xl flex flex-cols items-center justify-center bg-transparent font-medium border border-white text-black'>
              <p className='text-sm text-white font-medium '>website design</p>:
            </div>
            <div className='w-[130px] h-[30px] rounded-xl flex flex-cols items-center justify-center bg-transparent font-medium border border-white text-black'>
              <p className='text-sm text-white font-medium '>logo design</p>
            </div>
            <div className='w-[130px] h-[30px] rounded-xl flex flex-cols items-center justify-center bg-transparent font-medium border border-white text-black'>
              <p className='text-sm text-white font-medium '> Woldpress </p>
            </div>
          </div>
        </div>

        {/* <Fade {...fadeProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} style={{ width: 2000, height: 600 }}>
            <div className='absolute top-[25%] left-20 w-6/12 flex flex-col gap-6 '>
              <h1 className='text-[50px] text-white font-bold '>
                Find the perfect freelance services for your business
              </h1>
              <div className='flex  w-11/12  '>
                <div className='flex bg-white rounded-l-lg gap-1 w-full items-center pl-4'>
                  <div>icon</div>
                  <input
                    placeholder={`Try "building mobile app"`}
                    className='w-full py-3 px-4 outline-none'
                  />
                </div>
                <button className='bg-green-500 text-white px-4 rounded-r-lg'>
                  Search
                </button>
              </div>
              <div className='flex gap-2 items-center'>
                <p
                  className='text-white font-me
                 text-lg'
                >
                  Popular:
                </p>
                <div className='w-[130px] h-[30px] rounded-xl flex flex-cols items-center justify-center bg-transparent font-medium border border-white text-black'>
                  <p className='text-sm text-white font-medium '>
                    website design
                  </p>
                  :
                </div>
                <div className='w-[130px] h-[30px] rounded-xl flex flex-cols items-center justify-center bg-transparent font-medium border border-white text-black'>
                  <p className='text-sm text-white font-medium '>logo design</p>
                </div>
                <div className='w-[130px] h-[30px] rounded-xl flex flex-cols items-center justify-center bg-transparent font-medium border border-white text-black'>
                  <p className='text-sm text-white font-medium '> Woldpress </p>
                </div>
              </div>
            </div>
            <img src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade> */}
      </div>
    </>
  );
}

export default HeroSelection;
