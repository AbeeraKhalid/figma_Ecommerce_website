import React from 'react';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black max-w-7xl mx-auto ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-black rounded-lg w-full max-w-5xl">
        {/* Left Section */}
        <div className="text-white text-center lg:text-left space-y-6 lg:space-y-8 lg:mr-16 max-w-lg">
          <p className="text-[#00FF66] text-sm sm:text-base lg:text-lg">Categories</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Countdown Timer Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-center">
            <div className="border bg-white rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
              <h1 className="text-black text-lg sm:text-xl font-bold">23</h1>
              <p className="text-black text-xs sm:text-sm">Hours</p>
            </div>
            <div className="border bg-white rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
              <h1 className="text-black text-lg sm:text-xl font-bold">05</h1>
              <p className="text-black text-xs sm:text-sm">Days</p>
            </div>
            <div className="border bg-white rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
              <h1 className="text-black text-lg sm:text-xl font-bold">59</h1>
              <p className="text-black text-xs sm:text-sm">Minutes</p>
            </div>
            <div className="border bg-white rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
              <h1 className="text-black text-lg sm:text-xl font-bold">35</h1>
              <p className="text-black text-xs sm:text-sm">Seconds</p>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 bg-[#00FF66] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-[#00e65a] text-base sm:text-lg font-medium">
              Buy Now!
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="mb-12 lg:mb-0 max-w-sm sm:max-w-md w-full lg:max-w-lg">
          <Image
            width={500}
            height={500}
            src="/speaker.png" 
            alt="Speaker"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
