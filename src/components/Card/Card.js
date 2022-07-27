import React from "react";
import StarRating from "../StarRating/StarRating";

const Card = ({title, img, desc, rating, rooms, roomType, country, currency}) => {
    return (
      <div className="antialiased text-gray-900 p-2">
        <div className="h-60 overflow-hidden flex flex-col justify-center">
          <img
            src={img}
            alt={title}
            className="object-cover h-full rounded-md items-center justify-center"
          />
        </div>
        <div className="relative px-4 -mt-14  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  capitalize font-semibold tracking-wide">
                {rooms} rooms
              </span>
              <div className="ml-2 text-gray-600 capitalize text-xs font-semibold tracking-wider">
                {roomType} types
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {title}
            </h4>

            <div className="mt-1">Location: {country}</div>
            <div className="text-gray-600 text-sm">Currency: {currency}</div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold flex justify-between">
                <StarRating rating={rating} />{" "}
                <span className="text-sm text-gray-600">
                  ({rating} Star Hotel)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;