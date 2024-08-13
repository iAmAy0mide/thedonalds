import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL()})

export const apiSlice = createApi({
    baseQuery,
    // tagTypes: ['Album'],
    endpoints: () => ({}),
});