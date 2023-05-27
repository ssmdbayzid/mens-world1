import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
// import { ShoppingCartIcon } from '@heroicons/react/outline';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  let cart = useSelector((state)=> state.cart)

  if(cart){
    console.log(cart.cartItems[0].name)
  }

  useEffect(()=>{
    let getCartItem = JSON.parse(localStorage.getItem("cartItems"))

    if(getCartItem){
      // setCartItems(getCartItem)

      console.log(getCartItem[0].name)
    }
  }, [])

  // const toggleCart = () => {
  //   setIsOpen(!isOpen);
  // };

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  // const removeFromCart = (itemId) => {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  //   setCartItems(updatedCartItems);
  // };

  return (
    <div className="container mx-auto py-8 w-5/6 pt-16 h-screen">
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <button
          className="flex items-center text-blue-500 focus:outline-none"
          // onClick={toggleCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>

          <span className="text-lg">{cart.cartItems.length}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Your product cards go here */}
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className=" items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                // onClick={toggleCart}
              >
                Close
              </button>
            </div>

            {cart.cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="mt-16"> 
                gdfgd
                sdsafd
                {cart.cartItems && cart.cartItems.map((item) => (
                  <table className="w-full border mt-16">
                  <thead>
                    <tr>
                      <th className="border">Item</th>
                      <th className="border">Price</th>
                      <th className="border">Quantity</th>
                      <th className="border">Subtotal</th>
                      <th className="border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                      <tr key={item.id}>
                        <td className="border">{item.name}</td>
                        <td className="border">${item.price}</td>
                        <td className="border">
                          <button
                            className="text-blue-500 hover:text-blue-700 focus:outline-none"
                            // onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="text-blue-500 hover:text-blue-700 focus:outline-none"
                            // onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </td>
                        <td className="border">${item.price * item.quantity}</td>
                        <td className="border">
                          <button
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                            // onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>

                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-right font-bold">Total:</td>
                      {/* <td colSpan="2" className="font-bold">${calculateTotal()}</td> */}
                      <td colSpan="2" className="font-bold">calculateTotal</td>
                    </tr>
                  </tfoot>
                </table>
                ))}
              </div>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ShoppingCart;
