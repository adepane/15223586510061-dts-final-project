import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import DetailBanner from "../components/Detail/DetailBanner";
import DetailCarousel from "../components/Detail/DetailCarousel";
import DetailMaps from "../components/Detail/DetailMaps";
import Loader from "../components/Loader/Loader";
import { useHotelByIdQuery, useHotelRateQuery, useHotelSearchQuery } from "../services/hotelApi";

const Detail = () => {
  const params = useParams();
  const [searchParam] = useSearchParams();
  const latitude = searchParam.get("lat");
  const longitude = searchParam.get("lon");
  const { data, isLoading, isError } = useHotelByIdQuery(params.id);
  const { data: neighbourData, isLoading: neighbourDataIsLoading, isError: neighbourDataIsError } = useHotelSearchQuery(`country[eq]=${params.country}`);
  const { data: countryData, isLoading: countryDataIsLoading, isError: countryDataIsError } = useHotelSearchQuery(`country[eq]=${params.country}&latitude=${latitude}&longitude=${longitude}&radius=10000`);
  const detailLoaded = isLoading ? (
    <Loader />
  ) : (
    <>
      <DetailBanner data={data} />
      <DetailCarousel data={data} />
      <DetailMaps latitude={latitude} longitude={longitude} />
    </>
  );
  return <>{isError ? <div>Sorry something wrong.</div> : detailLoaded}</>;
};

export default Detail;
