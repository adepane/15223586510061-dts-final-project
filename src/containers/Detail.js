import React from "react";
import { useLocation } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import DetailCarousel from "../components/Detail/DetailCarousel";
import DetailMaps from "../components/Detail/DetailMaps";
import Discover from "../components/Discover/Discover";
import Loader from "../components/Loader/Loader";
import Room from "../components/Rooms/Rooms";
import {
  useHotelSearchQuery,
} from "../services/hotelApi";

const Detail = () => {
  const location = useLocation();
  const state = location.state;
  const {
    data,
    isLoading,
    isError,
  } = useHotelSearchQuery(
    `country[eq]=${state.address.country}&latitude=${state.location.latitude}&longitude=${state.location.longitude}&radius=10000`
  );
  const {
    data: countryData,
    isLoading: countryDataIsLoading,
    isError: countryDataIsError,
  } = useHotelSearchQuery(`country[eq]=${state.address.country}`);
  const neighbourLoaded = isLoading ? (
    <Loader />
  ) : (
    (<div className="md:px-5">
      <Discover
        data={data.data.filter(item => item.hotelId !== state.hotelId)}
        title={`There are ${
          data.data.length - 1
        } Hotels near ${state.name.replace("[SANDBOX]", "")}`}
      />
    </div>)
  );
  const countryLoaded = countryDataIsLoading ? (
    <Loader />
  ) : (
    <div className="md:px-5">
      <Discover
        data={countryData.data}
        title={`These are Hotels in ${state.address.countryName}`}
      />
    </div>
  );
  return (
    <>
      <DetailBanner data={state} />
      <DetailCarousel data={state} />
      <DetailMaps
        latitude={state.location.latitude}
        longitude={state.location.longitude}
      />
      <Room rooms={state.roomTypes} />
      {isError ? <div>Sorry something wrong.</div> : neighbourLoaded}
      {countryDataIsError ? <div>Sorry something wrong.</div> : countryLoaded}
    </>
  );
};

export default Detail;
