import React, { useEffect, useState } from "react";
import { entries } from "idb-keyval";
import hotelIdb from "../config/idb";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import SearchForm from "../components/SearchForm/SearchForm";

const WishlistContainer = ({data}) => {
    const newData = data.map(item => {
        return item[1];
    })
    return (
      <div className="py-10">
        <div className="flex grid grid-cols-1 md:grid-cols-4">
          {newData.map((item, index) => (
            <Link
              to={`/hotel/${item.address.country}/${item.hotelId}?lat=${item.location.latitude}&lon=${item.location.longitude}`}
              key={index}
              state={item}
            >
              <Card
                title={item.name.replace("[SANDBOX]", "")}
                img={item.images[0]?.url}
                desc={item.desc}
                rating={item.starRating}
                rooms={item.roomCount}
                roomType={item.roomTypes.length}
                country={item.address.city}
                currency={item.currency}
              />
            </Link>
          ))}
        </div>
      </div>
    );
}

const NoWishlist = () => {
    return (
      <div className="py-10">
        <h2 className="md:w-full text-left px-8 pb-4">
          <span className="bg-white text-3xl font-poppins font-extrabold flex justify-center">
            There is no properties found, lets start search one...
          </span>
        </h2>
        <SearchForm />
      </div>
    );
}

const Wishlist = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        const getHotel = async () => {
            entries(hotelIdb)
            .then(data => setHotels(data));
        }
        getHotel();
    }, []);

    const wishlistData =
      hotels.length > 0 ? <WishlistContainer data={hotels} /> : <NoWishlist />;
    return <div className="h-full pb-5 p-4 md:px-20">{wishlistData}</div>;
}

export default Wishlist;