import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import DetailCarousel from "../components/Detail/DetailCarousel";
import DetailMaps from "../components/Detail/DetailMaps";
import Discover from "../components/Discover/Discover";
import Loader from "../components/Loader/Loader";
import Room from "../components/Rooms/Rooms";
import {
  useHotelByIdQuery,
  useHotelSearchQuery,
} from "../services/hotelApi";

const Detail = () => {
  const params = useParams();
  const [searchParam] = useSearchParams();
  const latitude = searchParam.get("lat");
  const longitude = searchParam.get("lon");
  const { data, isLoading, isError } = useHotelByIdQuery(params.id);
  const {
    data: neighbourData,
    isLoading: neighbourDataIsLoading,
    isError: neighbourDataIsError,
  } = useHotelSearchQuery(
    `country[eq]=${params.country}&latitude=${latitude}&longitude=${longitude}&radius=10000`
  );
  const {
    data: countryData,
    isLoading: countryDataIsLoading,
    isError: countryDataIsError,
  } = useHotelSearchQuery(`country[eq]=${params.country}`);
  const detailLoaded = isLoading ? (
    <Loader />
  ) : (
    <>
      <DetailBanner data={data} />
      <DetailCarousel data={data} />
      <DetailMaps latitude={latitude} longitude={longitude} />
      <Room rooms={data.roomTypes} />
    </>
  );
  const neighbourLoaded = neighbourDataIsLoading ? (
    <Loader />
  ) : (
    <div className="md:px-5">
      <Discover
        data={neighbourData.data}
        title={`There are ${
          neighbourData.data.length - 1
        } Hotels near ${data.name.replace("[SANDBOX]", "")}`}
      />
    </div>
  );
  const countryLoaded = countryDataIsLoading ? (
    <Loader />
  ) : (
    <div className="md:px-5">
      <Discover
        data={countryData.data}
        title={`These are Hotels in ${data.address.countryName}`}
      />
    </div>
  );
  return (
    <>
      {isError ? <div>Sorry something wrong.</div> : detailLoaded}
      {neighbourDataIsError ? <div>Sorry something wrong.</div> : neighbourLoaded}
      {countryDataIsError ? <div>Sorry something wrong.</div> : countryLoaded}
    </>
  );
};

export default Detail;
