import React from "react";
import { Link } from "react-router-dom";

const country = [
  {
    name: "Hotels",
    code: "hotel",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    name: "Apartments",
    code: "apartment",
    img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Villas",
    code: "villa",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Resorts",
    code: "resort",
    img: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

const DiscoverType = () => {
  return (
    <div className="p-1 md:py-5 md:px-10 pt-3">
      <h2 className="md:w-full text-left px-8">
        <span className="bg-white text-2xl font-poppins font-extrabold">
          Browse by type
        </span>
      </h2>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-2 -mt-4 px-5 pt-5 md:border-t md:border-gray-400 md:rounded-md">
        {country.map((item, index) => {
          return (
            <Link
              className="mt-3"
              to={`/search?name[like]=${item.code}`}
              key={index}
            >
              <div className="relative h-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-md max-h-full h-full"
                  title={item.name}
                />
                <div className="opacity-70 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-end items-center text-3xl text-white font-semibold font-poppins bg-black bg-opacity-60 p-2 rounded-md">
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default DiscoverType;
