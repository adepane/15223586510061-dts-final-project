import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hotel-api.blubit.xyz/api/",
  }),
  endpoints: (builder) => ({
    hotel: builder.query({
        query: () => `/hotels`
    }),
    hotelDeals: builder.query({
      query: () => `/hotels?size=4&starRating[gt]=4`,
    }),
  }),
  overrideExisting: false,
});

export const  {
    useHotelQuery,
    useHotelDealsQuery,
} = hotelApi;