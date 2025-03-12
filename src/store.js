// // src/store.js
import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import {newserviceReducer,getAdminServices,adminDetailsReducer} from "./reducers/serviceReducer";
import {thunk} from "redux-thunk";


const rootReducer = combineReducers({
  Newservice: newserviceReducer,
  services:getAdminServices,
  providerDetails:adminDetailsReducer,
});
// Enable Redux DevTools and Middleware properly
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
