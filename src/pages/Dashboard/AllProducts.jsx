import React, { useEffect } from 'react'
// import { useProductsQuery } from '../../services/productAPI.ts'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../services/productSlice.js'
import { useProductsQuery } from '../../services/userAPI.ts'
import Loading from '../../Share/Loading.jsx'

const AllProducts = () => {
//   const {data, error, isLoading, isSuccess} = useProductsQuery()
    const {data, error, isLoading, isSucccess} = useProductsQuery()

    if(data){
        console.log(data)
    }
  



//   const products1 = useSelector((state)=> state.products)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productActions.fetchProducts())
    },[dispatch])


//   if(data){
//     console.log(data)
//   }
  return (
<div className="mt-6 overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
    {isLoading && <Loading />}
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {data && data.map((item, index)=>  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-20 p-4">
                    <img src={item.img} alt="Apple Watch"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.name}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>)}
           
        </tbody>
    </table>
</div>

  )
}

export default AllProducts