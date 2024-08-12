import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = () => {
//     return process.env.environment === "dev" ? "http://localhost:3000" : "https://thedonalds.vercel.app";
// }

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL()})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Album'],
    endpoints: () => ({}),
});