import React from "react";
import Banner from "../components/Banner/Banner";
import { useHotelDealsQuery } from "../services/hotelApi";

const Home = () => {
  const { data = [], isLoading, isError } = useHotelDealsQuery();
  const loaded = isLoading ? console.log("Loading...") : console.log(data);
    return (
      <>
      {loaded}
        <Banner />
      </>
    );
}

export default Home;