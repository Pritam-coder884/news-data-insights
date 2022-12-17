import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./Reducer/RootReducer/RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from './Slices/StoreSlice'
import registerReducer from './Slices/RegisterSlice'
import loginReducer from './Slices/LoginSlice'
import FiterReducer from './Slices/FilterSlice'
import getFilterSlice from "./Slices/getFilterSlice";



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: {
    storedata: StoreReducer,
    registerUser: registerReducer,
    loginUser: loginReducer,
    filter: FiterReducer,
    getData: getFilterSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // composeEnhancers(applyMiddleware(thunk))
  devtools: true,
});

export default store;
