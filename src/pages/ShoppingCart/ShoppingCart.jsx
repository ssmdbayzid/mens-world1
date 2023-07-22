import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
// import { ShoppingCartIcon } from '@heroicons/react/outline';
import {PlusIcon, MinusIcon, XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import { addToCart, decreaseCartQty, getTotals, removeCartItem } from '../../store/features/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  
    const navigate = useNavigate()

    let cart = useSelector((state)=> state.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotals())    
  }, [cart,dispatch])

      // ---------- Increase Cart Item --------

      const handleIncreaseCartQty = (item) => {
        dispatch(addToCart(item))
      }

    // ---------- Decrease Cart Item --------

  const handleDecreaseCartQty = (item) => {
    dispatch(decreaseCartQty(item))
  }

// ---------- Remove Item From Cart --------------
  const handleRemoveCartItem = (item) => {
    dispatch(removeCartItem(item))
  }

  const handlePlaceOrder = event => {
    navigate("/checkOut")
  }

  return (
    <div className="container mx-auto py-8 w-5/6 pt-16 h-full">
      <h1 className="text-2xl font-bold text-center my-10">Shopping Cart</h1>
      <div className="md:flex   ">
        <div className="bg-white shadow-md md:w-full p-4 mt-10 rounded-sm md:m-4">
      {cart && cart.cartItems.map((item)=> 
        <div className="flex justify-between mb-3 border-b pb-5 group">
          <div className="w-28 mr-4 border">
            <img src={item.img} alt="itemImg" className="w-full scale-90 group-hover:scale-100" />
          </div>
          <div>
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p>Price: ${item.price}</p>

              <div className="flex border items-center justify-center mt-10">
              <MinusIcon
              onClick={()=>handleDecreaseCartQty(item)}
              className="w-6 cursor-pointer"  />
                <p className="text-lg mx-2">{item.cartQuantity}</p>
                <PlusIcon
                onClick={()=>handleIncreaseCartQty(item)}
                className="w-6 cursor-pointer" />
              </div>
            </div>
          <div className=''>
              <h1 onClick={()=>handleRemoveCartItem(item)} className="w-8 ml-auto font-semibold cursor-pointer hover:text-red-600"> <XMarkIcon /> </h1>
              <div className="flex items-center justify-center mt-16 font-bold">
              Total: ${(item.price * item.cartQuantity).toFixed(2)}
              </div>
            </div>
        </div>
     )}
      
      </div>
       {/*  -------  --------  Shopping Cart Summary -------  -------  */}

       <div className="bg-slate-200 w-full md:w-5/12 p-4 rounded h-full mt-3">
        <h1 className="text-xl mb-5 font-bold">Order Summary</h1>
        <div className="flex justify-between items-center mt-5">
        <p className="text-lg font-semibold">Subtotal</p>
        <p className="text-lg font-semibold">${(cart.cartTotalAmount).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
        <p className="text-lg font-semibold">Shipping Charge</p>
        <p className="text-lg font-semibold">${ (cart.cartTotalAmount/100 * 5).toFixed(2) }</p>
        </div>
        <div className="flex justify-between items-center mt-20">
        <p className="text-lg font-semibold">Total Price</p>
        <p className="text-lg font-semibold">${(cart.cartTotalAmount + parseFloat((cart.cartTotalAmount/100 * 5))).toFixed(2) }</p>
        </div>
        <button onClick={()=> navigate("/checkOut")} className="w-full mx-auto mt-10 text-center py-2.5 bg-secondary text-white font-semibold ">Procees to checkout</button>

       <Link className="flex justify-center mt-5" to={"/home"}>or  <span className="text-blue-600 font-bold flex items-center ml-2 ">Continue Shopping <ArrowRightIcon className="w-5 ml-2" /></span> </Link>
       </div>
      </div> 

    </div>
  );
};

export default ShoppingCart;
