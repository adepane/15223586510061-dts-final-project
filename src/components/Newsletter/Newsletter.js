import React from "react";

const NewsLetter = () => {
    return (
      <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl font-poppins font-bold leading-10 text-gray-800 mb-4 text-center md:mt-0 mt-4">
            Get Offers and Updates
          </h1>
          <div className="flex items-stretch mt-12 justify-center">
            <input
              className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-full md:w-2/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Your Email"
            />
            <button className="w-32 rounded-l-none hover:bg-sky-600 bg-sky-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700">
              subscribe
            </button>
          </div>
        </div>
      </div>
    );
}
export default NewsLetter;