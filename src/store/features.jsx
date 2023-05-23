import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    cartItems : localStorage.getItems("cartItems") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducer: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1

                toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: "top-right"
                })
                localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
            }
            else{
                const newCartItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(newCartItem);

                toast.success(`Added ${action.payload.name} to cart`,{
                    position: "top-right"
                })

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(`Decreate ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: "top-center"
                })                
            }
            else if(state.cartItems[itemIndex].cartQuantity === 1){
                state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)

                toast.error(`${action.payload.name} remove from cart`,{
                    position: "top-right"
                })                
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    },
    removeCartItems(state, action){
        state.cartItems = state.cartItems.filter((item)=> item.id !== action.payload.id)

        toast.error(` ${action.payload.name} remove from cart`, {
            position: "top-right",
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    resetCartItems(state){
        state.cartItems = [];
        
        toast.error("Reset cart items",{
            position: "top-right"
        })

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
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
            quantity: 0,
        })

        state.cartTotalQty = quantity;
        state.cartTotalAmount = total;
    },
})

export const {addToCart, decreaseCart, removeCartItems, resetCartItems, getTotal} = cartSlice.action;

export default cartSlice.reducer;