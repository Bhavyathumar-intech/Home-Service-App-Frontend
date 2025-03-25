import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode
import { useGetUserDetailsQuery } from "../../api/userApi";
import { toast } from "react-toastify";
import { useUserDataQuery } from "../../api/authenticationApi";

function Me() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded JWT:", decoded);
        if (!decoded.userId) {
          toast.error("User Not Found");
        } else {
          setUserId(decoded.userId);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  }, []);

//   const { data: userData, error: userError, isLoading: userLoading } = useUserDataQuery(userId, {
//     skip: !userId,
//   });

  const { data: userDetails, error: detailsError, isLoading: detailsLoading } = useGetUserDetailsQuery(userId, {
    skip: !userId,
  });

//   if (userLoading || detailsLoading)
//     return <div className="text-center text-blue-500 text-lg font-semibold">Loading...</div>;

//   if (userError || detailsError)
//     return <div className="text-center text-red-500 text-lg font-semibold">Error fetching profile</div>;

  //  Merge Data
  const mergedUser = {
    //...userData,
    ...userDetails,
  };

  console.log("Merged User Data:", mergedUser);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>

      {mergedUser ? (
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          {/* <img
            src={mergedUser.profilePictureUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-md object-cover"
          /> */}

          <div className="mt-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Name:</span> {mergedUser.name}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Email:</span> {mergedUser.email}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Phone:</span> {mergedUser.phoneNumber}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Role:</span> {mergedUser.role}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Date of Birth:</span> {mergedUser.dateOfBirth}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Address:</span> {mergedUser.address}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">City:</span> {mergedUser.city}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">State:</span> {mergedUser.state}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Country:</span> {mergedUser.country}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-gray-900">Zip Code:</span> {mergedUser.zipCode}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No Profile Data</p>
      )}
    </div>
  );
}

export default Me;
