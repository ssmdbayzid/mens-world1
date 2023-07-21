import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";


const initialState = {
cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
cartTotalQty : 0,
cartTotalAmount : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // ---------------- Add to cart - Start  ---------

        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item._id === action.payload._id)

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;

                // ------- Toast  ---------

                toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: "top-right",
                })

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
            else{
                const newCartItem = {...action.payload, cartQuantity: 1}

                state.cartItems.push(newCartItem)

                // ------------- Toast ------------

                toast.success(`${action.payload.name} added tio cart`, {
                    position: "top-right"
                })

                // ---------- Add cart date to localStorage--------
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
        },
        // ---------------- Increase cart items - Start  ---------
        decreaseCartQty(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item._id === action.payload._id);
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;

                // ------------- Toast ----------

                toast.error(`Decrease ${state.cartItems[itemIndex].name} cart quantity`,{
                    position: "top-right",
                })
            }
            else if(state.cartItems[itemIndex].cartQuantity === 1){
                state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id)

                // ------------ Toast ------------
                toast.error(`${action.payload.name} remove from cart`, {
                    position: "top-right",
                })                
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))            
        },
        removeCartItem(state, action){
            state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id)

            // --------------Toast -----------------

            toast.error(`${action.payload.name} removed from cart`,{
                position: "top-right"
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        resetCartItems(state){
            state.cartItems = [];

            // ------------ Toast -----------

            toast.error(`Reset cart items`,{
                position: "top-right"
            })
        },
        getTotals(state){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity} = cartItem;
                const itemTotalPrice = price * cartQuantity;

                cartTotal.total += itemTotalPrice;
                cartTotal.quantity += cartQuantity;   
                
                return cartTotal;
            }, {
                total: 0,
                quantity : 0,
            })

            state.cartTotalQty = quantity;
            state.cartTotalAmount = total;
        }
    }
});

export const {addToCart, decreaseCartQty, removeCartItem, resetCartItems, getTotals} = cartSlice.actions;

export default cartSlice.reducer;