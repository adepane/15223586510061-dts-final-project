import React, { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import { get, set, del } from "idb-keyval";
import hotelIdb from "../../config/idb";

const DetailBanner = ({ data }) => {
  const [hotel, setHotel] = useState([]); 
  const [wishlist, setWishlist] = useState("");
  const [withlistClass, setWishlistClass] = useState(
    "bg-sky hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded w-full"
  );

  useEffect(() => {
    const hotelWishlist = async () => {
      const dataExist = await get(data.hotelId, hotelIdb);
      setHotel(dataExist);
    };
    hotelWishlist();
  }, [data.hotelId, wishlist, withlistClass]);

  useEffect(() => {
    if (hotel) {
      setWishlist("Remove from Wishlist");
      setWishlistClass(
        "bg-red-500 text-white py-2 px-4 font-poppins font-bold hover:bg-red-700 rounded w-full"
      );
    } else {
      setWishlist("Add to Wishlist");
      setWishlistClass(
        "bg-sky-500 text-white py-2 px-4 font-poppins font-bold hover:bg-sky-700 rounded w-full"
      );
    }
  }, [hotel]);

  const handleClick = async () => {
    if (hotel) {
      del(data.hotelId, hotelIdb);
      setWishlist("Add to Wishlist");
    } else {
      set(data.hotelId, data, hotelIdb);
      setWishlist("Remove from Wishlist");
    }
  };

  return (
    <div className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="flex px-4 md:px-20 py-5 mx-auto">
        <div className="w-full mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200"
            src={data.images[0].url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              <StarRating rating={data.starRating} />
            </h2>
            <h1 className="text-sky-700 text-3xl title-font font-medium mb-10">
              {data.name.replace("[SANDBOX]", "")}
            </h1>

            <p className="leading-relaxed">{data.description.short}</p>
            <div className="block w-full mt-5 mb-4">
              <span className="flex w-full py-1">
                <span className="text-gray-400 ml-3">Address</span>
                <span className="flex-1 text-gray-600 ml-3">
                  {data.address.line1}
                </span>
              </span>
              <span className="flex w-full py-1">
                <span className="text-gray-400 ml-3">City</span>
                <span className="flex-1 text-gray-600 ml-3">
                  {data.address.city}
                </span>
              </span>
              <span className="flex w-full py-1">
                <span className="text-gray-400 ml-3">Country</span>
                <span className="flex-1 text-gray-600 ml-3">
                  {data.address.countryName}
                  <span className="text-gray-400 ml-3">Postal Code </span>
                  {data.address.postalCode}
                </span>
              </span>
              <span className="flex w-full py-1">
                <span className="text-gray-400 ml-3">Phone</span>
                <span className="flex-1 text-gray-600 ml-3">
                  <a href={"tel:" + data.phoneNumbers[0]}>
                    {data.phoneNumbers[0]}
                  </a>
                </span>
              </span>
              <span className="flex w-full py-1">
                <span className="text-gray-400 ml-3">CheckIn</span>
                <span className="flex-1 text-gray-600 ml-3">
                  {data.checkIn.from}
                  <span className="text-gray-400 ml-3">CheckOut </span>
                  {data.checkOut.to}
                </span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <button className={withlistClass} onClick={handleClick}>
                {wishlist}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBanner;
