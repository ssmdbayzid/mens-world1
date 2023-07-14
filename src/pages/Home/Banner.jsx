import { motion } from 'framer-motion'
import React from 'react'


const Banner = () => {
  const bg = "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  return (
    <section id='home' className="h-[100vh]">
     
      {/* <img  alt="" className="w-full h-full bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]" /> */}
      <div className="absolute top-20 left-0  h-full w-full bg-slate-500/20  bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-no-repeat bg-cover bg-center">
      <div className="justify-center items-center h-full p-8 flex flex-col bg-slate-300/20 ">

        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{once:1, amount:0.5 }}
        transition={{duration: 0.9}}
        variants={{
          hidden:{opacity: 0, y: 80},
          visible: {opacity:1, y:0}
        }}
        className="text-5xl text-center text-white font-extrabold selection:bg-yellow-400 selection:text-white">
            FASHION ALWAYS CHANGE
        </motion.p>
        <motion.p
         initial="hidden"
        whileInView="visible"
        viewport={{once:1, amount:0.5 }}
        transition={{delay: 0.2, duration: 0.9}}
        variants={{
          hidden:{opacity: 0, y: 80},
          visible: {opacity:1, y:0}
        }}
        className="mt-10 text-2xl mx-auto md:w-3/5 text-center text-white">
          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
        </motion.p>
        <motion.div
         initial="hidden"
        whileInView="visible"
        viewport={{once:1, amount:0.5 }}
        transition={{delay: 0.4, duration: 0.9}}
        variants={{
          hidden:{opacity: 0, y: 80},
          visible: {opacity:1, y:0}
        }}
        className="z-10 space-x-6 mt-10">
          <button className="relative  border-2 px-10 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0 before:origin-top-left hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
          Start Shoping
          </button>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Banner
