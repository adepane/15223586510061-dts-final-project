import React from "react";
import Banner from "../components/Banner/Banner";
import Loader from "../components/Loader/Loader";
import { useHotelDealsQuery } from "../services/hotelApi";

const Home = () => {
  const { data = [], isLoading, isError } = useHotelDealsQuery();
  const loaded = isLoading ? <Loader /> : console.log(data);
    return (
      <>
        <Banner />
        <div className="flex h-screen">
          {loaded}
        </div>
      </>
    );
}

export default Home;