import React from "react";
import Card from "../Card/Card";

const Deals = ({data}) => {
    return (
      <div className="p-1 md:py-5 md:px-10 pt-3">
        <h2 class="md:w-full text-left md:ml-10">
          <span class="bg-white px-3 text-2xl font-poppins font-extrabold">
            Top Rated Hotel
          </span>
        </h2>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-2 -mt-4 px-5 pt-4 border-t border-gray-400 rounded-md">
          {data.map((item, index) => {
            return (
              <Card
                title={item.name.replace("[SANDBOX]", "")}
                img={item.images[0].url}
                desc={item.desc}
                rating={item.starRating}
                rooms={item.roomCount}
                roomType={item.roomTypes.length}
                country={item.address.city}
                currency={item.currency}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
}
export default Deals;