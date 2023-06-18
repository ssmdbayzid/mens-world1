import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios'

// Define api API endpoint URL
const apiURL = "https://dummyjson.com/"

// Fetch product from backend

export const fetchProducts = createAsyncThunk("products", async ()=> {
    const response = await axios.get(apiURL);
    return response.data;
});

// Create a new product

export const createProduct = createAsyncThunk("products/fetchProducts", async (newProduct)=> {
    const respons = await axios.post(apiURL, newProduct);
    return respons.data;
})

// Update a product

export const updateProduct = createAsyncThunk("products/updateProduct", async (updateProduct) => {
    const {id, ...rest} = updateProduct;
    const response = await axios.put(`${apiURL}/${id}`, rest)
    return response.data;
})

// Delete a product

export const deleteProduct = createAsyncThunk("products/updateProduct", async (productId) => {
    await axios.delete(`${apiURL}/${productId}`);
    return productId;
})

const productSlice = createSlice({
    name: "products",
    initialState:[],
    reducers:{},
    extraReducers: (builder) => {
        builder

        .addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(createProduct.fulfilled, (state, action)=>  {
            state.push(action.payload);
        })
        .addCase(updateProduct.fulfilled, (state, action)=> {
            const updateProduct = action.payload;

            const index = state.findIndex((product) => product.id === updateProduct.id)

            if(index !== -1) {
                state[index] = updateProduct;
            }
        })

        .addCase(deleteProduct.fulfilled, (state, action)=>{
            const deleteProductId = action.payload;
            return state.filter((product)=> product.id !== deleteProductId)
        })        
    }
})

export const productActions = {
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct    
}

export default productSlice.reducer;