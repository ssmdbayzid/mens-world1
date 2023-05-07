import React, { useState } from 'react'
// import bgImg from '../assets/cover.avif'
import profilePhoto from '../assets/pp_photo.jpg'
import useMediaQuery from '../hooks/useMediaQuery'
import logo from '../assets/mensLogo.png'

const Header = () => {
  const [isMenuToggle, setMenuToggle] = useState(false)
  const [isProfileMenuToggle, setProfileMenuToggle] = useState(false)

  const aboveMediumScreen = useMediaQuery("(min-width: 768px)")

  return (<nav className="fixed z-30 w-full border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl w-5/6 flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="">
      <img src={logo} className="h-12 " alt="Flowbite Logo" />     
  </a>

  {/* ------------- Profile Menu  --------------*/}

  <div className="flex items-center md:order-2">
      <button type="button" onClick={()=>setProfileMenuToggle(!isProfileMenuToggle)}
       className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={profilePhoto} alt="user photo" />
      </button>
      {/* <!----------- Profile Dropdown menu -----------> */}
      {isProfileMenuToggle && <div className="z-50 fixed top-12 w-2/6 right-3/9 md:right-2 bg-blue-200 bg-blur-lg my-4 text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>}

      {/* Main Menu Button  */}
      
  </div>
   

   {/* Above Medium Menu  */}
   
    { aboveMediumScreen ? (<div className="w-auto hidden md:flex order-1 items-center justify-between">
      <ul className="flex justify-between gap-8 font-sembold  ">
        <li className="hover:font-semibold hover:text-yellow-400 hover:scale-110 text-secondary transition duration-500">Home</li>
        <li className="hover:font-semibold hover:text-yellow-400 hover:scale-110 text-secondary transition duration-500">Blog</li>
        <l className="hover:font-semibold hover:text-yellow-400 hover:scale-110 text-secondary transition duration-500"i>Contact</l>
        <li className="hover:font-semibold hover:text-yellow-400 hover:scale-110 text-secondary transition duration-500">About</li>
        <li className="hover:font-semibold hover:text-yellow-400 hover:scale-110 text-secondary transition duration-500">Wrong</li>
      </ul>
    </div>) : ( !isMenuToggle ?
    
       <button data-collapse-toggle="mobile-menu-2" 
    onClick={()=>setMenuToggle(!isMenuToggle)}
    type="button" className="inline-flex items-center md:hidden p-2 ml-1 text-sm text-gray-500 rounded-l hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button> :  <button data-collapse-toggle="mobile-menu-2" 
    onClick={()=>setMenuToggle(!isMenuToggle)}
    type="button" className="inline-flex items-center md:hidden p-2 ml-1 text-sm text-gray-500 rounded-l hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>
  </button> )
  
}
        
    
    {/*----- Mobile Menu  ----------*/}
    { !aboveMediumScreen && isMenuToggle &&
      
    //   <div className="order-1 items-center justify-between">
    //   <ul className="flex justify-between gap-8 font-sembold ">
    //     <li className="hover:font-semibold hover:text-yellow-600 hover:scale-110">Home</li>
    //     <li className="hover:font-semibold hover:text-yellow-600 hover:scale-110">Blog</li>
    //     <l className="hover:font-semibold hover:text-yellow-600 hover:scale-110"i>Contact</l>
    //     <li className="hover:font-semibold hover:text-yellow-600 hover:scale-110">About</li>
    //     <li className="hover:font-semibold hover:text-yellow-600 hover:scale-110">About</li>
    //   </ul>
    // </div>
    <div className="fixed top-14 z-30 right-3 left-5 w-[95%]">
    <div  className="font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full  dark:bg-gray-700 dark:divide-gray-600">    
   <ul class="flex flex-col font-medium py-5 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
<li>
<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
</li>
<li>
<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</a>
</li>
<li>
<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
</li>
<li>
<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
</li>

</ul>
</div>
</div>
    
    }
  
  </div>
</nav>

  )
}

export default Header
