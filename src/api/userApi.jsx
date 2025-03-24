import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie';

   const userApi  = createApi({
    reducerPath: 'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080/api/user-details/',
        credentials: "include", // Important: Ensures cookies are sent
         prepareHeaders: (headers) => {
                    const token = Cookies.get("authToken");
                    console.log("token",token)
                    if (token) {
                      headers.set('Authorization', `Bearer ${token}`);
                      
                    }
                    return headers;
                },
    }),
    endpoints:(builder)=>({
         createUserDetails:builder.mutation({
            query:(useDetails)=>({
                 url:"",
                method:"POST",
                body:useDetails

            }),
         }),
    })
})
// Ensure this export exists
export const { useCreateUserDetailsMutation } = userApi;
export default userApi;  // Make sure the default export exists

