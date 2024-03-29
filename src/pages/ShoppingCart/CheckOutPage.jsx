import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { usePostOrderMutation } from '../../services/userAPI.ts';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js';
import { getTotals } from '../../store/features/cartSlice.jsx';


const CheckOutPage = () => {
  
  const [postOrder, result] = usePostOrderMutation()
    const {register, handleSubmit, formState: {error}} = useForm()
  const [user] = useAuthState(auth);


    let cart = useSelector((state)=> state.cart)

    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getTotals())
    },[cart, dispatch])


    let spinner;

      const handformSubmit = async (data, event) => {
        event.preventDefault()
        const {name, mobile, address, city, zip, country, currency} = data
        const totalPrice = (cart.cartTotalAmount + parseFloat((cart.cartTotalAmount / 100 * 5))).toFixed(2)
        const email = user.email;

        const order = {
          name,
          email, 
          mobile,
          address,
          city,
          zip,
          country,
          currency,
          totalPrice
      }
      
        await  postOrder(order)
          
          if(result.data?.url){
           return window.location.replace(result.data.url)
          }
      }

  return (
    <div>
        <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" className="text-2xl font-bold text-gray-800">sneekpeeks</a>
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          ></a>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">

  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      {cart && cart.cartItems.map((item, index)=> <div key={index} className="flex  rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.img} alt="" />
        <div className="px-4 py-4 w-full flex flex-col ">
         <div className="w-full flex justify-between">
         <p className="font-semibold">{item.name}</p>
         <p className="text-lg font-bold">${item.price}</p>
        </div> 
          <span className="float-right text-gray-400">{item.category}</span>
          <span className="float-right text-gray-400">{item.size}</span>
        </div>
      </div>)}

    </div>

  { /* <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  */}
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Shipping Address</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <form onSubmit={handleSubmit(handformSubmit)} >
      <div className="relative">
      <label for="name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
        <input 
        {...register('name', {required: true})}
        type="text" id="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="YOUR FULL NAME HERE" />

      </div>
      
      <div className="flex gap-3 pr-3">
        <div className="relative basis-1/3 flex-shrink-0">
      <label for="mobile" className="mt-4 mb-2 block text-sm font-medium">Mobile</label>
          <input
           {...register('mobile', {required: true, minLength: 11})} 
          type="number" id="mobile"  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your City" />

        </div>
        <div className="relative basis-2/3 flex-shrink-0">
        <label for="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
          <input
           {...register('address', {required: true, minLength: 11})} 
          type="text" id="address" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">     
          </div>
        </div>
        
      </div>
      <div className="flex gap-3 pr-3">
        <div className="relative basis-1/2 flex-shrink-0">
      <label for="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
          <input
           {...register('city', {required: true})} 
          type="text" id="city"  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your City" />

        </div>
        <div className="relative basis-1/2 flex-shrink-0">
        <label for="zip" className="mt-4 mb-2 block text-sm font-medium">Zip Code</label>
          <input
          {...register('zip', {required: true, minLength: 4})}
          type="number" id="zip" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Zip Code" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">     
          </div>
        </div>
        
      </div>
      <div className="flex items-center gap-3 pr-3">
        <div className="relative basis-1/2 flex-shrink-0">
        <label for="country" className="mt-4 mb-2 block text-sm font-medium">Country</label>
        <select
        {...register('country', {required: true})}
        id="country" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
        <option selected value="Bangladesh">Bangladesh</option>
        <option value="America">America</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Saudia">Saudia</option>
        </select>
        </div>
        <div className="relative basis-1/2 flex-shrink-0">
        <label for="currency" className="mt-4 mb-2 block text-sm font-medium">Currency</label>
        <select
        {...register('currency', {required: true})}
        id="currency" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
        
        <option selected value="BDT">BDT</option>
        <option value="USD">USD</option>
        <option value="PKR">RP</option>
        <option value="SAR">Saudia</option>
        </select>
        </div>
      
        
      </div>


      {/* <!-- Total --> */}
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">${(cart.cartTotalAmount).toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">${(cart.cartTotalAmount / 100 * 5).toFixed(2)} </p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">${(cart.cartTotalAmount + parseFloat((cart.cartTotalAmount / 100 * 5))).toFixed(2)}</p>
      </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"> Place Order</button>
    </form>
  </div>
</div>
    </div>)
}

export default CheckOutPage