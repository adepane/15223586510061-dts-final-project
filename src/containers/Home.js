import React from "react";
import Banner from "../components/Banner/Banner";
import Deals from "../components/Deals/Deals";
import Discover from "../components/Discover/Discover";
import Loader from "../components/Loader/Loader";
import { useHotelDealsQuery } from "../services/hotelApi";

const Home = () => {
  const { data = [], isLoading, isError } = useHotelDealsQuery();
  const loaded = isLoading ? <Loader /> : <Deals data={data.data} />;
    return (
      <div className="h-full">
        <Banner />
        <div className="flex">{isError ? <div>Error</div> : loaded}</div>
        <Discover />
      </div>
    );
}

export default Home;