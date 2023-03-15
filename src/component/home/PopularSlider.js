import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
];

const fadeProperties = {
  duration: 1100,
  transitionDuration: 600,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dot: false,
  indicators: false,
  arrows: true,
  autoplay: false,
};

function PopularSlider() {
  return (
    <Slide {...fadeProperties}>
      {fadeImages.map((fadeImage, index) => (
        <div key={index} className='mx-12 relative'>
          <img src={fadeImage.url} className='w-auto h-[300px] rounded-lg ' />
          <div className='absolute top-2 left-4'>
            <h3 className='text-gray-400 font-medium text-sm '>
              {fadeImage.subTitle}
            </h3>
            <h2 className='text-white text-xl font-semibold'>
              {fadeImage.title}
            </h2>
          </div>
        </div>
      ))}
    </Slide>
  );
}

export default PopularSlider;
