import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hotel-api.blubit.xyz/api/",
  }),
  endpoints: (builder) => ({
    hotel: builder.query({
      query: () => `/hotels`,
    }),
    hotelById: builder.query({
      query: (id) => `/hotels/${id}`,
    }),
    hotelDeals: builder.query({
      query: () => `/hotels?size=4&starRating[gt]=4`,
    }),
    hotelSearch: builder.query({
      query: (param) => `/hotels?${param}`,
    }),
    hotelRate: builder.query({
      query: (id) => `/hotels/${id}/rate-plans`,
    }),
  }),
  overrideExisting: false,
});

export const  {
    useHotelQuery,
    useHotelByIdQuery,
    useHotelDealsQuery,
    useHotelRateQuery,
    useHotelSearchQuery,
} = hotelApi;