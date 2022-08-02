import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import DetailCarousel from "../components/Detail/DetailCarousel";
import DetailMaps from "../components/Detail/DetailMaps";
import Discover from "../components/Discover/Discover";
import Loader from "../components/Loader/Loader";
import Room from "../components/Rooms/Rooms";
import { useHotelByIdQuery, useHotelSearchQuery } from "../services/hotelApi";

const Detail = () => {
  const params = useParams();
  const [searchParam] = useSearchParams();
  const latitude = searchParam.get("lat");
  const longitude = searchParam.get("lon");
  const { data, isLoading, isSuccess, isError } = useHotelByIdQuery(params.id);
  const {
    data: neighbourData,
    isLoading: neighbourDataIsLoading,
    isError: neighbourDataIsError,
    isSuccess: neighbourDataIsSuccess,
  } = useHotelSearchQuery(
    `country[eq]=${params.country}&latitude=${latitude}&longitude=${longitude}&radius=10000`,
    { skip: !isSuccess }
  );
  const {
    data: countryData,
    isLoading: countryDataIsLoading,
    isError: countryDataIsError,
  } = useHotelSearchQuery(`country[eq]=${params.country}`, {
    skip: !neighbourDataIsSuccess,
  });
  const detailLoaded = isLoading ? (
    <Loader />
  ) : isSuccess ? (
    <>
      <DetailBanner data={data} />
      <DetailCarousel data={data} />
      <DetailMaps latitude={latitude} longitude={longitude} />
      <Room rooms={data.roomTypes} />
    </>
  ) : (
    <div>Something Wrong</div>
  );

  const neighbourLoaded =
    isLoading || neighbourDataIsLoading ? (
      <Loader />
    ) : (
      <div className="md:px-5">
        <Discover
          data={neighbourData.data.filter((item) => item.hotelId !== params.id)}
          title={`There are ${neighbourData.data.length - 1} Hotel${
            neighbourData.data.length - 1 > 1 ? "s" : ""
          } near ${data.name.replace("[SANDBOX]", "")}`}
        />
      </div>
    );
  const countryLoaded =
    isLoading || neighbourDataIsLoading || countryDataIsLoading ? (
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
      {neighbourDataIsError ? (
        <div>Sorry something wrong.</div>
      ) : (
        neighbourLoaded
      )}
      {countryDataIsError ? <div>Sorry something wrong.</div> : countryLoaded}
    </>
  );
};

export default Detail;
