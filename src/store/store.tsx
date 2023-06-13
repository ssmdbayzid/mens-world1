import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"
import  {contactsApi}  from "../services/userAPI.ts";
import { productApi } from "../services/productAPI.ts";




const store = configureStore({
    reducer: {
        cart: cartReducer,
        [contactsApi.reducerPath] : contactsApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
    },    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})

export default store;