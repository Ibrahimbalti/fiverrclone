import "./App.css";
import Header from "./component/Header";
import HeroSelection from "./component/home/HeroSelection";
import Banner from "./component/home/Banner";
import PopularSlider from "./component/home/PopularSlider";

function App() {
  return (
    <div className="bg-white  bg-[url('https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80')]">
      <Header />

      <div>
        <HeroSelection />
      </div>

      <div className='h-full   bg-gray-300'>
        <Banner />
      </div>

      <div className='p-10 bg-white flex flex-col gap-8 '>
        <h1 className='text-4xl font-bold pl-11 '>
          Popular professional services
        </h1>
        <PopularSlider />
      </div>

      <div className='bg-[#F1FDF7] p-10 flex items-center w-full gap-20 justify-center '>
        <div className='w-4/12 flex flex-col gap-5'>
          <h1 className=' text-3xl font-bold text-[#404145]'>
            A whole world of freelance talent at your fingertips
          </h1>
          <div>
            <div className='flex items-center gap-1'>
              <p>Icon</p>
              <h1 className='text-lg font-bold text-[#404145]'>
                The best for every budget
              </h1>
            </div>
            <p className='text-sm font-medium text-[#404145]'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div>
            <div className='flex'>
              <p>Icon</p>
              <h1 className='text-lg font-bold text-[#404145]'>
                The best for every budget
              </h1>
            </div>
            <p className='text-sm font-medium text-[#404145]'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div>
            <div className='flex'>
              <p>Icon</p>
              <h1 className='text-lg font-bold text-[#404145]'>
                The best for every budget
              </h1>
            </div>
            <p className='text-sm font-medium text-[#404145]'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div>
            <div className='flex'>
              <p>Icon</p>
              <h1 className='text-lg font-bold text-[#404145]'>
                The best for every budget
              </h1>
            </div>
            <p className='text-sm font-medium text-[#404145]'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
        </div>
        <div className='w-auto flex flex-col items-end'>
          <iframe
            width='700'
            className='rounded-xl'
            height='380'
            src='https://www.youtube.com/embed/z9bZufPHFLU?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ'
            title='1. Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
