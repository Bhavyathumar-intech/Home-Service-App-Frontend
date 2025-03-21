// import React, { useEffect, useState } from 'react'
// import Cookies from 'js-cookie';
// import { jwtDecode } from "jwt-decode"; // Import jwt-decode
// import  {useGetProviderDetailsQuery}  from "../../api/providerApi"
// export const MyProfile = () => {

//     const[userId,setUserId] = useState();
//     useEffect(() => {
//         const token = Cookies.get("authToken"); 
//         if (token) {
//             try {
//                 const decoded = jwtDecode(token);
//                 console.log("Decoded JWT:", decoded);

//                 if (!decoded.userId) {
//                     console.error("User ID not found in token!");
//                     return;
//                 }
//                 setUserId(decoded.userId); 
//                 //setUserId(41)
                
//             } catch (error) {
//                 console.error("Invalid Token");
               
//             }
//         }
//     }, []);
//     // Fetch provider details only when userId is available
//     const { data: provider, error, isLoading } = useGetProviderDetailsQuery(userId, {
//         skip: !userId, //  Skip API call if userId is null
//     });
//     console.log("provider",provider)
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error fetching profile</div>;

//   return (
//    <div>
//             <h2>My Profile</h2>
//             {provider ? (
//                 <div>
//                     <p><strong>Name:</strong> {provider.name}</p>
//                     <p><strong>Email:</strong> {provider.email}</p>
//                     <p><strong>Company:</strong> {provider.companyName}</p>
//                     <p><strong>Experience:</strong> {provider.experienceYears} years</p>
//                     <p><strong>Address:</strong> {provider.address}</p>
//                     <p><strong>Phone:</strong> {provider.phoneNumber}</p>
//                     <img src={`http://localhost:8081/${provider.imageUrl}`} alt="Profile" width="150" />
                
//                 </div>
//             ) : (
//                 <p>No Profile Data</p>
//             )}
//         </div>
//   )
// }
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode
import { useGetProviderDetailsQuery } from "../../api/providerApi";

export const MyProfile = () => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded JWT:", decoded);

        if (!decoded.userId) {
          console.error("User ID not found in token!");
          return;
        }
        setUserId(decoded.userId);
      } catch (error) {
        console.error("Invalid Token");
      }
    }
  }, []);

  // Fetch provider details only when userId is available
  const { data: provider, error, isLoading } = useGetProviderDetailsQuery(userId, {
    skip: !userId, // Skip API call if userId is null
  });
  console.log("provider",provider)
  if (isLoading) return <div className="text-center text-blue-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error fetching profile</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">My Profile</h2>
      {provider ? (
        <div className="flex flex-col items-center">
          {/* <img
            src={`http://localhost:8081/${provider.imageUrl}`}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md object-cover"
            onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
          /> */}
          <div className="mt-4 w-full">
            <p className="text-gray-700 text-lg">
              <span className="font-medium text-gray-900">Name:</span> {provider.name}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-medium text-gray-900">Email:</span> {provider.email}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-medium text-gray-900">Company:</span> {provider.companyName}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-medium text-gray-900">Experience:</span> {provider.experienceYears} years
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-medium text-gray-900">Address:</span> {provider.address}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-medium text-gray-900">Phone:</span> {provider.phoneNumber}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No Profile Data</p>
      )}
    </div>
  );
};
