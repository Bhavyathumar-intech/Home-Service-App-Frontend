import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const providerApi = createApi({
    reducerPath: 'providerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/service-providers',
        prepareHeaders: (headers) => {
            const token = Cookies.get("authToken");
            console.log("token",token)
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        createProvider: builder.mutation({
            query: (providerData) => ({
                url: '/register',
                method: 'POST',
                body: providerData,
            }),
           
        }),
  
    
    getProviderDetails: builder.query({
        query: (userId) => ({
            url: `/user/${userId}`, 
            method: 'GET',
        }),
    }),
}),
})



export const { useCreateProviderMutation,useGetProviderDetailsQuery  } = providerApi;
