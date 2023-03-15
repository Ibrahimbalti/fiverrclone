import React from "react";

const SocialMediaIcons = [
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
  {
    title: "Graphics & Design ",
    icons:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
  },
];
export default function MarketPlace() {
  return (
    <div className='w-full'>
      <h1 className='text-[#404145] text-4xl font-semibold'>
        Explore the marketplace
      </h1>
      <div className='grid grid-cols-4 mt-10 gap-10 place-items-center justify-center'>
        {SocialMediaIcons.map((item) => {
          return (
            <div className='flex flex-col items-center'>
              <img
                src={item.icons}
                alt='icons'
                className='border-b-2 border-gray-300 w-3/12'
              />

              <p className='text-lg font-medium'>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
