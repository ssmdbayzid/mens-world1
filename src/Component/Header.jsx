import React, { useEffect, useState } from 'react'
// import bgImg from '../assets/cover.avif'
import profilePhoto from '../assets/pp_photo.jpg'
import useMediaQuery from '../hooks/useMediaQuery'
import logo from '../assets/mensLogo.png'
import { Link } from 'react-router-dom'
import ShoppingCartModal from './share/ShoppingCartModal'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth'

const Header = ({ isTopOfPage, setTopOfPage }) => {
  const [isMenuToggle, setMenuToggle] = useState(false)
  const [isProfileMenuToggle, setProfileMenuToggle] = useState(false)
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const [userImg, setUserImg] = useState("")

useEffect(()=>{
  if(user){
    console.log(user.photoURL)
    setUserImg(user.photoURL)
  }
},[user])

const handGoogleLogInSignOut = ()=> {
    signOut(auth)
}

  const aboveMediumScreen = useMediaQuery("(min-width: 768px)")

  return (<div>
    <nav className={`${isTopOfPage ? "bg-white" : "bg-slate-200 backdrop-filter backdrop-blur-[2px] "} fixed z-30 w-full border-gray-200 dark:bg-gray-900 text-white`}>
      <div className="max-w-screen-xl w-5/6 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/home" className="">
          <img src={logo} className="h-12 " alt="Logo" />
        </a>

        {/* ------------- Profile Menu  --------------*/}

        <div className="flex items-center md:order-2">
          {/* ---------------- Cart Icon  -----------  */}
          <div>
            <div onClick={() => setShow(!show)} className=" hover:shadow-xl rounded-full mr-3">
              <img src={"https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/favorit-card.png.webp"} alt=""
                className="w-10 h-10 cursor-pointer" />
            </div>
            {show && <ShoppingCartModal show={show} setShow={setShow} />}
          </div>

          {user && <button type="button" onClick={() => setProfileMenuToggle(!isProfileMenuToggle)}
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
           {userImg && <img className="w-10 h-10 rounded-full" src={userImg} alt="userPhoto" />}
          </button>}
          {/* <!----------- Profile Dropdown menu -----------> */}

          {isProfileMenuToggle && user && <div className="z-50 fixed top-12 w-2/6 right-3/9 md:right-2 bg-blue-200 bg-blur-lg my-4 text-base Linkst-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">{user.displayName}</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <Link to={"/dashboard"}>
                <a href="#" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard                              
                </a>
                
              </Link>
              <Link>
                <a href="#" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </Link>
              <Link>
                <a href="#" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </Link>
              <Link onClick={()=> handGoogleLogInSignOut()}>
                <a href="#" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </Link>
            </ul>
          </div>} 

          {/* Main Menu Button  */}

        </div>


        {/* Above Medium Menu  */}

        {aboveMediumScreen ? (<div className="w-auto hidden md:flex order-1 items-center justify-between">
          <ul className="flex justify-between gap-8 font-sembold  ">
            <Link to={"/home"} className="hover:font-semibold hover:text-blue-800 hover:scale-110 text-primary  text-lg transition duration-500 cursor-pointer">Home</Link>
            <Link to={"/shoppingCart"} className="hover:font-semibold hover:text-blue-800 hover:scale-110 text-primary  text-lg transition duration-500 cursor-pointer">Order</Link>
            {!user && <Link to={"log-in"} className="hover:font-semibold hover:text-blue-800 hover:scale-110 text-primary  text-lg transition duration-500 cursor-pointer">Log In</Link>}
            {!user && <Link to={"/sign-up"} className="hover:font-semibold hover:text-blue-800 hover:scale-110 text-primary  text-lg transition duration-500 cursor-pointer">Sign Up</Link>}
            <Link to={"/about"} className="hover:font-semibold hover:text-blue-800 hover:scale-110 text-primary  text-lg transition duration-500 cursor-pointer">About</Link>
          </ul>
        </div>) : (!isMenuToggle ?

          <button data-collapse-toggle="mobile-menu-2"
            onClick={() => setMenuToggle(!isMenuToggle)}
            type="button" className="inLinkne-flex items-center md:hidden p-2 ml-1 text-sm text-gray-500 rounded-l hover:bg-gray-100 focus:outLinkne-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button> : <button data-collapse-toggle="mobile-menu-2"
            onClick={() => setMenuToggle(!isMenuToggle)}
            type="button" className="inLinkne-flex items-center md:hidden p-2 ml-1 text-sm text-gray-500 rounded-l hover:bg-gray-100 focus:outLinkne-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>)

        }


        {/*----- Mobile Menu  ----------*/}
        {!aboveMediumScreen && isMenuToggle &&

          //   <div className="order-1 items-center justify-between">
          //   <ul className="flex justify-between gap-8 font-sembold ">
          //     <Link className="hover:font-semibold hover:text-yellow-600 hover:scale-110">Home</Link>
          //     <Link className="hover:font-semibold hover:text-yellow-600 hover:scale-110">Blog</Link>
          //     <l className="hover:font-semibold hover:text-yellow-600 hover:scale-110"i>Contact</l>
          //     <Link className="hover:font-semibold hover:text-yellow-600 hover:scale-110">About</Link>
          //     <Link className="hover:font-semibold hover:text-yellow-600 hover:scale-110">About</Link>
          //   </ul>
          // </div>
          <div className="fixed top-14 z-30 right-3 left-5 w-[95%]">
            <div className="font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full  dark:bg-gray-700 dark:divide-gray-600">
              <ul className="flex flex-col font-medium py-5 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link to={"/home"}>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Home</a>
                </Link>
                <Link to={"/shoppingCart"}>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Order</a>
                </Link>
               {!user && <Link to={"log-in"}>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Log In</a>
                </Link>}
                {!user && <Link to={"sign-up"}>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">Sign Up</a>
                </Link>}
                <Link to={"/about"}>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer">About</a>
                </Link>

              </ul>
            </div>
          </div>

        }

      </div>

    </nav>
    {/* {show && <ShoppingCartModal show={show} setShow={setShow} />} */}
  </div>
  )
}

export default Header
