import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_IMPALA_KEY;
console.log(API_KEY);
export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sandbox.impala.travel/v1/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", API_KEY );
      headers.set("Access-Control-Allow-Origin", "*" );
      headers.set("Content-Type", "application/json" );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    hotelDeals: builder.query({
        
      query: () => `hotels`,
    }),
  }),
  overrideExisting: false,
});

export const  {
    useHotelDealsQuery,
} = hotelApi;