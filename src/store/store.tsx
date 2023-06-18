import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"
import  {usersApi}  from "../services/userAPI.ts";
// import { productApi } from "../services/productAPI.js";




const store = configureStore({
    reducer: {
        cart: cartReducer,
        [usersApi.reducerPath] : usersApi.reducer,
        // [productApi.reducerPath] : productApi.reducer,
    },    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})

export default store;