import { skipToken } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import SearchForm from "../components/SearchForm/SearchForm";
import { useHotelSearchQuery } from "../services/hotelApi";

const SearchContainer = ({data, location, country}) => {
    return (
      <div className="py-10">
        <h2 className="md:w-full text-left px-8 pb-4">
          <span className="bg-white text-2xl font-poppins font-extrabold">
            {location
              ? `Result of ${location} has ${data.length} hotels`
              : `Top Rated Hotel in ${country}`}
          </span>
        </h2>
        <div className="flex grid grid-cols-1 md:grid-cols-4">
          {data.map(
            (item, index) => (
              (
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
              )
            )
          )}
        </div>
      </div>
    );
}

const Search = () => {
    const [queryParams] = useSearchParams();
    const locationName = queryParams.get('name[like]');
    const countryName = queryParams.get('country[eq]')

    const { data, isLoading, isSuccess, isError } = useHotelSearchQuery(
      locationName
        ? `name[like]=${locationName}`
        : countryName
        ? `country[eq]=${countryName}`
        : skipToken
    );

    const searchLoaded = isLoading ? (
      <Loader />
    ) : isSuccess ? (
        (data.data.length > 0) ? (<SearchContainer data={data.data} location={locationName} country={countryName} />) : <>Nothing found</>
    ) : (
      <div>Something Wrong</div>
    );
    return(
        <div className="h-full pb-5 p-4 md:px-20">
            <SearchForm />
            {isError ? <div>Something Wrong</div> : searchLoaded}
        </div>
    )
}
export default Search;