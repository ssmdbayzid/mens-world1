import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
// import { ShoppingCartIcon } from '@heroicons/react/outline';
import {ChevronRightIcon, XMarkIcon, ChevronLeftIcon} from "@heroicons/react/24/solid"
import { removeCartItem } from '../../store/features/cartSlice';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [increase, setIncreaseQty] = useState(1);



  let cart = useSelector((state)=> state.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
    let getCartItem = JSON.parse(localStorage.getItem("cartItems"))

    if(getCartItem){
      // setCartItems(getCartItem)

      console.log(getCartItem[0].name)
    }
  }, [])

  const handleIncreaseCartQty = (item) => {
    setIncreaseQty(increase + 1)
  }

  const handleRemoveCartItem = (item) => {
    dispatch(removeCartItem(item))
  }


  return (
    <div className="container mx-auto py-8 w-5/6 pt-16 h-screen">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {cart && cart.cartItems.map((item)=> <div className="md:col-span-3" >
        <div className="flex justify-between">
          <div className="w-28 mr-4">
            <img src={item.img} alt="itemImg" className="w-full" />
          </div>
          <div>
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p>${item.price}</p>

              <div className="flex border items-center justify-center mt-10">
              <ChevronLeftIcon className="w-6 cursor-pointer" onClick={()=>handleIncreaseCartQty(item)} />
                <p className="text-lg mx-2">{increase}</p>
                <ChevronRightIcon className="w-6 cursor-pointer" />
              </div>
            </div>
          <div className=''>
              <h1 onClick={()=>handleRemoveCartItem(item)} className="w-8 ml-auto font-semibold cursor-pointer hover:text-red-600"> <XMarkIcon /> </h1>
              <div className="flex items-center justify-center mt-16 font-bold">
              Total: ${item.price * item.cartQuantity}
              </div>
            </div>
        </div>
      </div>)}
      </div> 

    </div>
  );
};

export default ShoppingCart;
