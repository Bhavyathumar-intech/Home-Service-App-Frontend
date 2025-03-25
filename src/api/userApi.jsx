import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/user-details',
    credentials: "include", // Ensures cookies are sent
    prepareHeaders: (headers) => {
      const token = Cookies.get("authToken");
      console.log("token", token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUserDetails: builder.mutation({
      query: (userDetails) => ({
        url: "/addDetails",
        method: "POST",
        body: userDetails,
      }),
    }),

    getUserDetails: builder.query({
      query: (id) => ({
        url: `/${id}`, // Use the ID in the URL
        method: "GET",
      }),
    }),
  }),
});


export const { useCreateUserDetailsMutation, useGetUserDetailsQuery } = userApi;
export default userApi; 
