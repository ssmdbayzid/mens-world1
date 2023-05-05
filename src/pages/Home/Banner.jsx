import { motion } from 'framer-motion'
import React from 'react'


const Banner = () => {
  const bg = "https://images.pexels.com/photos/5917850/pexels-photo-5917850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <section id='home' className="h-[100vh]">
     
      <img src={bg} alt="" className="w-full h-[100vh]  bg-cover" />
      <div className="absolute top-0 left-0  h-[100vh] w-full bg-slate-500/40  ">
      <div className="justify-center items-center h-full p-5 flex flex-col ">

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
        className="mt-10 text-xl text-center  text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, qui?
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
