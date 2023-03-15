import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    title: "Caitlin Tormey,Chief Commercial Officer",
    subTitle: "NAADAM",
    description:
      ".We have use Fiverr for Shopify web developement ,grahpic,and backend web development.We have use Fiverr for Shopify web developement ,grahpic,and backend web development.",
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    description:
      ".We have use Fiverr for Shopify web developement ,grahpic,and backend web development.We have use Fiverr for Shopify web developement ,grahpic,and backend web development.",
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  },
  {
    title: "AI Artist",
    subTitle: "Add Talent to AI",
    description:
      ".We have use Fiverr for Shopify web developement ,grahpic,and backend web development.We have use Fiverr for Shopify web developement ,grahpic,and backend web development.",
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
  slidesToShow: 1,
  slidesToScroll: 1,
  dot: false,
  indicators: false,
  arrows: true,
  autoplay: false,
};

function VideoSlider() {
  return (
    <div>
      <Slide {...fadeProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='mx-0 relative w-full '>
            {/* <img src={fadeImage.url} className='w-auto h-[250px] rounded-lg ' /> */}
            <iframe
              width='400'
              className='rounded-lg'
              height='250'
              src='https://www.youtube.com/embed/v7nBtPIGDgw'
              title='Jab Bhe Aise Khayalat Ae Kisi Ko Bataen Mat ,Waswase | Tuaha Ibn Jalil |'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
            <div className='absolute top-2 right-[100px] flex flex-col gap-8  w-[650px]'>
              <div className='flex items-center gap-2'>
                <h2 className='text-gray-300 text-xl font-semibold'>
                  {fadeImage.title}
                </h2>
                <div className='h-[15px] w-[2px] bg-black'></div>
                <h3 className='text-black font-medium text-lg '>
                  {fadeImage.subTitle}
                </h3>
              </div>
              <p className='text-2xl break all font-semibold text-[#003912] w-11/12'>
                {fadeImage.description}
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default VideoSlider;
