import React from "react";
import SearchForm from "../SearchForm/SearchForm";

const Banner = () => {
    return (
      <header className="relative flex items-center justify-center h-screen overflow-hidden mt-[-4rem]">
        <div className="relative z-30 bg-black bg-opacity-50 h-full w-full">
          <div className="absolute inset-y-10 left-5 md:left-20 justify-center text-white w-full">
            <div className="flex flex-col items-center justify-center h-full font-poppins font-semibold	">
              <span className="text-5xl w-full">Spend your vacation</span>
              <span className="text-5xl w-full">with our service</span>
            </div>
          </div>
          <div className="absolute bottom-0 w-full p-10 px-20 h-2/6">
            <SearchForm className={'hidden md:flex'}/>
          </div>
        </div>
        <div className="absolute bg-slate-900 z-20 bg-cover h-full w-full backdrop-brightness-50">
          <video
            autoPlay
            loop
            muted
            className="z-10 w-auto min-w-full min-h-full max-h-none object-cover object-center backdrop-brightness-50"
          >
            <source src="../../assets/videos/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>
    );
}

export default Banner;