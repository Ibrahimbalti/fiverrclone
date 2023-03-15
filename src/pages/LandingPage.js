import React from 'react';
import Header from '../component/Header';
import HeroSelection from '../component/home/HeroSelection';

const LandingPage = () => {
  return (
    <>
     <div className=" bg-[url('https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80')]">
      <Header/>

      <div>
        <HeroSelection/>
      </div>

      <div className='h-[800px] w-full bg-yellow-100'></div>
    </div> 
    </>
  );
}

export default LandingPage;
