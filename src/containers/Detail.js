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
  const { data } = useHotelByIdQuery(params.id);
  const {
    data: neighbourData,
  } = useHotelSearchQuery(
    `country[eq]=${params.country}&latitude=${latitude}&longitude=${longitude}&radius=10000`
  );
  const { data: countryData, isLoading, isError } = useHotelSearchQuery(`country[eq]=${params.country}`);
  const detailLoaded = isLoading ? (
    <Loader />
  ) : (
    (console.log(data, neighbourData),
    (
      <>
        <DetailBanner data={data} />
        <DetailCarousel data={data} />
        <DetailMaps latitude={latitude} longitude={longitude} />
        <Room rooms={data.roomTypes} />
        <div className="px-5">
          <Discover
            data={neighbourData.data.filter(
              (item) => item.hotelId !== params.id
            )}
            title={`There are ${
              neighbourData.data.length - 1
            } Hotels near ${data.name.replace("[SANDBOX]", "")}`}
          />
          <Discover
            data={countryData.data.filter((item) => item.hotelId !== params.id)}
            title={`These are Hotels in ${data.address.countryName}`}
          />
        </div>
      </>
    ))
  );
  return <>{isError ? <div>Sorry something wrong.</div> : detailLoaded}</>;
};

export default Detail;
