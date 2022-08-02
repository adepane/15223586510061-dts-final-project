import React from "react";
import { Link } from "react-router-dom";

const country = [
  {
    name: "United States",
    code: "USA",
    img: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  {
    name: "United Kingdom",
    code: "GBR",
    img: "https://images.unsplash.com/photo-1561234311-a9e16fa60b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Germany",
    code: "DEU",
    img: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "France",
    code: "FRA",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80",
  },
  {
    name: "Italy",
    code: "ITA",
    img: "https://images.unsplash.com/photo-1581876804153-74295c0f59e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const DiscoverCountry = () => {
    return (
      <div className="p-1 md:py-5 md:px-10 pt-3">
        <h2 className="md:w-full text-left px-8">
          <span className="bg-white text-2xl font-poppins font-extrabold">
            Browse by country
          </span>
        </h2>
        <div className="w-full h-full  pt-5 grid grid-cols-1 md:grid-cols-5 gap-2 -mt-4 px-5 md:border-t md:border-gray-400 md:rounded-md">
          {country.map((item, index) => {
            return (
              <Link
                className="mt-3"
                to={`/search?country[eq]=${item.code}`}
                key={index}
                state={item}
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-md max-w-full max-h-full"
                    title={item.name}
                  />
                  <div className="opacity-80 md:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold font-poppins bg-black bg-opacity-70 p-2 rounded-md">
                    {item.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
}
export default DiscoverCountry;