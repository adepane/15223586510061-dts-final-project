import React from "react";
import Banner from "../components/Banner/Banner";
import Deals from "../components/Deals/Deals";
import Discover from "../components/Discover/Discover";
import DiscoverCountry from "../components/Discover/DiscoverCountry";
import DiscoverType from "../components/Discover/DiscoverType";
import Loader from "../components/Loader/Loader";
import SearchForm from "../components/SearchForm/SearchForm";
import { useHotelDealsQuery, useHotelQuery } from "../services/hotelApi";

const Home = () => {
  const { data = [], isLoading, isError } = useHotelDealsQuery();
  const { data: allData = [], isLoading: allDataIsLoading, isError: allDataIsError } = useHotelQuery();
  const loadDeals = isLoading ? <Loader /> : <Deals data={data.data} />;
  const loadCarousel = allDataIsLoading ? <Loader /> : <Discover data={allData.data} />;
    return (
      <div className="h-full pb-5">
        <Banner />
        <SearchForm className={"visible m-4 md:m-0 pb-5 md:pb-0 md:invisible md:h-0"} />
        <div className="flex">
          {isError ? <div>Sorry something wrong.</div> : loadDeals}
        </div>
        <DiscoverCountry />
        <div className="flex">
          {allDataIsError ? <div>Sorry something wrong.</div> : loadCarousel}
        </div>
        <DiscoverType />
      </div>
    );
}

export default Home;