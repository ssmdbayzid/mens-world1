
import React, { useEffect, useState } from "react";
import { XMarkIcon, ArrowRightIcon  } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from "react-redux";
import { getTotals, removeCartItem } from "../../store/features/cartSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ShoppingCartModal({show, setShow}) {
    const dispatch = useDispatch()
    
    const cart = useSelector((state)=>state.cart);
    
    useEffect(()=>{
        dispatch(getTotals())

    },[cart, dispatch])

    const handleRemoveCartItem = (item)=> {
        dispatch(removeCartItem(item))                     
    }   
    if(cart){
        console.log(cart)
    }


    return (
        <>
        <div className="fixed right-0 top-0 bg-white w-full md:w-1/3 p-4 h-screen overflow-x-hidden overflow-y-auto text-secondary rounded-sm shadow-md ">
            <div>
                <div className="flex justify-between items-center px-2 my-5 ">
                    <p className="text-xl font-semibold">Shopping Cart</p> 
                    <XMarkIcon
                    onClick={()=> setShow(!show)} 
                    className="w-6 h-6 cursor-pointer hover:scale-125 duration-200 transition hover:text-red-600" />

                </div>
                <div className="gap-3">

                
                {
                    cart && cart.cartItems.map((item, index)=>  <div key={index} className="flex justify-between m-3 ">
                        <div className="flex">
                            <div className="w-[100px] h-[100px] border p-2 mr-2">
                            <img src={item.img} alt="" className=" w-full h-full " />
                            </div>
                            <div>
                            <p className="font-bold mb-8">{item.name}</p>
                            <p className="mt-auto">Qty {item.cartQuantity}</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold mb-8">${(item.price * item.cartQuantity).toFixed(2)}</p>
                            <p
                            onClick={()=> handleRemoveCartItem(item)}
                            className="mt-auto text-red-600 cursor-pointer">remove</p>
                            </div>
                        </div>)
                }
                </div>
                <div className="relative left-0 bottom-0 px-2">
                <hr  />
                <div className="flex font-bold mt-3 justify-between mb-5">
                <p className="flex">Subtotal</p>
                <p>{cart.cartTotalAmount}</p>
                </div>  
                <p>Shipping and taxes calculated at checkout </p>
                <Link to={"/shoppingCart"}
                onClick={()=>setShow(!show)}
                >
                    <button className="w-full py-2.5 bg-primary text-white mt-3">Checkout</button> 
                </Link>
                <p className="flex mt-3 items-center flex-row justify-center">or &nbsp; 
                <Link to={"/home"} onClick={()=>setShow(!show)}
                 className="text-primary flex items-center font-semibold cursor-pointer">Continue Shopping  &nbsp; < ArrowRightIcon className="w-5  "/>  </Link></p> 

                </div>
            </div>

        </div>
        </>
    );
}

export default ShoppingCartModal;
