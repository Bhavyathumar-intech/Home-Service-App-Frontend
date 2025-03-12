import{ADD_SERVICE_REQUEST,ADD_SERVICE_REQUEST_SUCCESS,ADD_SERVICE_REQUEST_FAIL,
       ADMIN_SERVICE_REQUEST,ADMIN_SERVICE_SUCCESS,ADMIN_SERVICE_FAIL,
       ADMIN_DETAILS_REQUEST,ADMIN_DETAILS_SUCCESS,ADMIN_DETAILS_FAIL  
}  from "../constants/ServiceContants"

// const initialState = {
//   Newservice: [],
//   success: false,
// };
// //admin add service
// export const newserviceReducer = (state =initialState, action) => {
//   switch (action.type) {
//     case ADD_SERVICE_REQUEST:
//       return {
//         ...state,
//         };

//     case ADD_SERVICE_REQUEST_SUCESS:
//         return {
//         success: action.payload,
//         service: [...state.Newservice, action.payload], 
//         };
    
//     case ADD_SERVICE_REQUEST_FAIL:
//           return {
//             ...state,
//           error: action.payload,
//         };

//     default:
//       return state;
//   }
// };


// const initialState = {
//   Newservice: [],
//   //success: false, 
//  // error: null

// };
 //admin add service
// export const newserviceReducer = (state =initialState, action) => {
//   switch (action.type) {
//     case ADD_SERVICE_REQUEST:
//       return {
//         ...state,
//         //success: false
//         };

//     case ADD_SERVICE_REQUEST_SUCESS:
//       return { ...state, Newservice: [...state.Newservice, action.payload] };
    
//     case ADD_SERVICE_REQUEST_FAIL:
//           return {
//             ...state,
//           //error: action.payload,
//         };

//     default:
//       return state;
//   }
// };  
const initialState = {
  Newservice: [],
  success: false,
  error: null,
};

export const newserviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        ...state,
        success: false,
      };

    case ADD_SERVICE_REQUEST_SUCCESS:
      return {
        ...state,
        Newservice: [...state.Newservice, action.payload],
        success: true, 
      };

    case ADD_SERVICE_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};




//get admin product
export const getAdminServices=(state={services:[]},action)=>{
  switch(action.type){
    case ADMIN_SERVICE_REQUEST:
      return{
        ...state
      }
    case ADMIN_SERVICE_SUCCESS:
      return{
        sucess:action.payload,
        //services:action.payload.data
        services:action.payload

      }
    case ADMIN_SERVICE_FAIL:
      return{
        ...state,
        error:action.payload
      };

      default:
        return state;
  }
}
//provider details
export const adminDetailsReducer = (state = {providerDetails:[]}, action) => {
  switch (action.type) {
    case ADMIN_DETAILS_REQUEST:
      return {
        ...state,
       
      };

    case ADMIN_DETAILS_SUCCESS:
      return {
        ...state,
      
        providerDetails: action.payload, // Saving provider details
        error: null,
      };

    case ADMIN_DETAILS_FAIL:
      return {
        ...state,
       
        error: action.payload, // Storing error message
      };

    default:
      return state;
  }
};

