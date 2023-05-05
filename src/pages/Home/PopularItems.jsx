import { motion } from 'framer-motion';
import React from 'react'


const PopularItems = () => {
  return (<div className="my-10 w-5/6 mx-auto">
    <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-5 ">
      {/* --------- Items 1 -------  */}

      <div className="relative max-w-[352px] h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full hover:scale-150 transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500  bg-primary bg-opacity-30 flex justify-center items-center flex-col gap-8 px-8" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: 1, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-10 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0 before:origin-top-left hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className="py-2 5 text-center bg-secondary bg-opacity-20 text-2xl relative bottom-[-100%] group-hover:bottom-[0] transition duration-500">

          </div>
        </div>
      </div>

      {/* --------- Items 2 -------  */}

      <div className="relative max-w-sm w-[352px] h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full hover:scale-150 transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500  bg-primary bg-opacity-30 flex justify-center items-center flex-col gap-8 px-8" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: 1, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-10 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0 before:origin-top-left hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className="py-2 5 text-center bg-secondary bg-opacity-20 text-2xl relative bottom-[-100%] group-hover:bottom-[0] transition duration-500">

          </div>
        </div>
      </div>

      {/* --------- Items 3 -------  */}

      <div className="relative max-w-[352px] w-[352px] h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-[352px] hover:scale-150 transition duration-500 ease-in-out  " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500  bg-primary bg-opacity-30 flex justify-center items-center flex-col gap-8 px-8" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: 1, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-10 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0 before:origin-top-left hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className="py-2 5 text-center bg-secondary bg-opacity-20 text-2xl relative bottom-[-100%] group-hover:bottom-[0] transition duration-500">

          </div>
        </div>
      </div>

      {/* --------- Items 4 -------  */}

      <div className="relative max-w-[352px] w-[352px] h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full hover:scale-150 transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500  bg-primary bg-opacity-30 flex justify-center items-center flex-col gap-8 px-8" >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: 1, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-10 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0 before:origin-top-left hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className="py-2 5 text-center bg-secondary bg-opacity-20 text-2xl relative bottom-[-100%] group-hover:bottom-[0] transition duration-500">

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PopularItems;