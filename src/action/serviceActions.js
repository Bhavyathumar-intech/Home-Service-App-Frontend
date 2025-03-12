import {ADD_SERVICE_REQUEST,ADD_SERVICE_REQUEST_SUCCESS,ADD_SERVICE_REQUEST_FAIL,
        ADMIN_SERVICE_REQUEST,ADMIN_SERVICE_SUCCESS,ADMIN_SERVICE_FAIL,
        ADMIN_DETAILS_REQUEST,ADMIN_DETAILS_SUCCESS,ADMIN_DETAILS_FAIL
} from "../constants/ServiceContants.jsx"
import axios from "axios"
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//add prover details
export const createProviderDetails=(formData)=>async(dispatch)=>{
  try{
      dispatch({type:ADMIN_DETAILS_REQUEST})

      const token = Cookies.get("authToken"); // Retrieve token from cookies
      console.log("token from createProviderDetails",token)
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add Bearer token
        },
        withCredentials: true, // Ensure cookies are sent with the request
      };

      console.log("enter the reducer")

      const {data}=await axios.post(
         `http://localhost:8081/api/service-providers/register`,
         //JSON.stringify(formData), // Convert formData to JSON
         formData,
         config
      )

      console.log("add provider details",data.provider);

      dispatch({
      type: ADMIN_DETAILS_SUCCESS,
      payload: data.provider,
   
    });
    toast.success("Provider details added successfully!");
  }catch(error){
    console.log("error during API call")
    dispatch({
            type: ADMIN_DETAILS_FAIL,
            payload: error.response.data.message || "Something went wrong",
          });
          toast.error(error.response?.data?.error || "Failed to save details.");
  }
}

//admin add service
// export const createService = ({formData}) =>  (dispatch) =>{
//   try {
//     dispatch({ type: ADD_SERVICE_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.post(
//       `http://localhost:8081/service/new`,
//       formData,
//       config
//     );
//     console.log("add new service data",data);

//     dispatch({
//       type: ADD_SERVICE_REQUEST_SUCESS,
//       payload: data,
//    
//     });
//   } catch (error) {
//     dispatch({
//       type: ADD_SERVICE_REQUEST_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };



export const createService = (service) => async (dispatch) => {
  try {
    dispatch({ type: ADD_SERVICE_REQUEST });

    console.log("Dispatching ADD_SERVICE_REQUEST with:", service);

    // Simulating API call (replace with real API call)
    setTimeout(() => {
      dispatch({
        type: ADD_SERVICE_REQUEST_SUCCESS,
        payload: service,
      });
      console.log("Service added successfully:", service);
    }, 1000);
  } catch (error) {
    dispatch({
      type: ADD_SERVICE_REQUEST_FAIL,
      payload: error.message || "Service creation failed",
    });
  }
};

//get admin product
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_SERVICE_REQUEST });

    const { data } = await axios.get("http://localhost:8081/admin/products");

    dispatch({
      type: ADMIN_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_SERVICE_FAIL,
      payload: error.response.data.message || "failed to get backend data",
    });
  }
};

