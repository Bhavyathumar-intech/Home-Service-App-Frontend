// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"; // Import js-cookie
// import { jwtDecode } from "jwt-decode"; // Import jwt-decode
// import "react-toastify/dist/ReactToastify.css";
// import { createProviderDetails } from "../../action/serviceActions";

// const ProviderDetails = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   // State for form inputs
//   const [formData, setFormData] = useState({
//     userId: "", // Extracted from JWT
//     companyName: "",
//     experienceYears: "",
//     address: "",
    
//   });

 
// useEffect(()=>{
//   const token = Cookies.get('authToken');//get jwt token
//   if(token){
//     try{
//        const decode = jwtDecode(token)
//        console.log("jwt token decode",decode)
       
//        if (!decode.userId) {
//         console.error("User ID not found in token!");
//         return;
//       }
//        setFormData((prev)=>({...prev,userId:decode.userId}))

//     }catch(error){
//             console.log('inavalid token')
//     }
//   }
// },[])

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.companyName || !formData.experienceYears || !formData.address) {
//       toast.error("Please fill out all fields!");
//       return;
//     }

//     try {
//       // Here, you would dispatch an action to store provider details
//       console.log("Submitting Data:", formData);
//       await dispatch(createProviderDetails(formData)); 

//      // toast.success("Provider details added successfully!");

//       setTimeout(() => {
//         navigate("/dashboard"); // Redirect to provider list
//       }, 2000);
//     } catch (error) {
//       console.error("Error saving provider details:", error);
//     //  toast.error("Failed to save details. Try again.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-center">Add Provider Details</h2>

      

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Company Name */}
//         <div>
//           <label className="block text-gray-700 font-medium">Company Name</label>
//           <input
//             type="text"
//             name="companyName"
//             placeholder="Enter company name"
//             value={formData.companyName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         {/* Experience Years */}
//         <div>
//           <label className="block text-gray-700 font-medium">Years of Experience</label>
//           <input
//             type="number"
//             name="experienceYears"
//             placeholder="Enter experience years"
//             value={formData.experienceYears}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-gray-700 font-medium">Address</label>
//           <textarea
//             name="address"
//             placeholder="Enter address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="3"
//             required
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProviderDetails;


import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie
import { jwtDecode } from "jwt-decode"; // Import jwt-decode
import "react-toastify/dist/ReactToastify.css";
import { createProviderDetails } from "../../action/serviceActions";

const ProviderDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    userId: "", // Extracted from JWT
    companyName: "",
    experienceYears: "",
    address: "",
    profileImage: "", // Store base64 image
  });

  const [imagePreview, setImagePreview] = useState(null); // Preview selected image

  useEffect(() => {
    const token = Cookies.get("authToken"); // Get JWT token
    if (token) {
      try {
        const decode = jwtDecode(token);
        console.log("Decoded JWT:", decode);

        if (!decode.userId) {
          console.error("User ID not found in token!");
          return;
        }
        setFormData((prev) => ({ ...prev, userId: decode.userId }));
      } catch (error) {
        console.log("Invalid token");
      }
    }
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Show preview
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result, // Store as base64
        }));
      };
      reader.readAsDataURL(file);
      console.log(imagePreview);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.experienceYears || !formData.address) {
      toast.error("Please fill out all fields!");
      return;
    }

    try {
      console.log("Submitting Data:", formData);
      await dispatch(createProviderDetails(formData));

      setTimeout(() => {
        navigate("/dashboard"); // Redirect to provider list
      }, 2000);
    } catch (error) {
      console.error("Error saving provider details:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Provider Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Company Name */}
        <div>
          <label className="block text-gray-700 font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Experience Years */}
        <div>
          <label className="block text-gray-700 font-medium">Years of Experience</label>
          <input
            type="number"
            name="experienceYears"
            placeholder="Enter experience years"
            value={formData.experienceYears}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Profile Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="mt-2 w-32 h-32 rounded-full object-cover border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProviderDetails;

