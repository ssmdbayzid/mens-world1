import { motion } from 'framer-motion';
import React from 'react'


const PopularItems = () => {
  return (<div className="my-10 w-5/6 mx-auto">
    <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-4 gap-5 ">
      {/* --------- Items 1 -------  */}

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: 1, amount: 0.5 }}
      transition={{ delay: 0, duration: 0.9 }}
      variants={{
       hidden: { opacity: 0, y: 80 },
       visible: { opacity: 1, y: 0 }
      }}
      className="relative max-w-sm h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full scale-95 group-hover:scale-125  transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular1.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500   bg-secondary/50 flex justify-center items-center flex-col px-8" >

          {/* Button Animation  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: -20 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-5 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0  hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className=" py-2 5 text-center mt-10 bg-secondary bg-opacity-20 absolute w-full text-white text-3xl -bottom-full group-hover:bottom-0 uppercase transition duration-500">
              Glasses
          </div>
        </div>
      </motion.div>

      {/* --------- Items 2 -------  */}

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: 1, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.9 }}
      variants={{
       hidden: { opacity: 0, y: 80 },
       visible: { opacity: 1, y: 0 }
      }}
      className="relative max-w-sm h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full scale-95 group-hover:scale-125  transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500   bg-secondary/50 flex justify-center items-center flex-col px-8" >

          {/* Button Animation  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: -20 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-5 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0  hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className=" py-2 5 text-center mt-10 bg-secondary bg-opacity-20 absolute w-full text-white text-3xl -bottom-full group-hover:bottom-0 uppercase transition duration-500">
              Watches
          </div>
        </div>
      </motion.div>

      {/* --------- Items 3 -------  */}

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: 1, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.9 }}
      variants={{
       hidden: { opacity: 0, y: 80 },
       visible: { opacity: 1, y: 0 }
      }}
      className="relative max-w-sm h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full scale-95 group-hover:scale-125  transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular3.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500   bg-secondary/50 flex justify-center items-center flex-col px-8" >

          {/* Button Animation  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: -20 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-5 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0  hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className=" py-2 5 text-center mt-10 bg-secondary bg-opacity-20 absolute w-full text-white text-3xl -bottom-full group-hover:bottom-0 uppercase transition duration-500">
             Jackets
          </div>
        </div>
      </motion.div>

      {/* --------- Items 4 -------  */}

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: 1, amount: 0.5 }}
      transition={{ delay: 0.6, duration: 0.9 }}
      variants={{
       hidden: { opacity: 0, y: 80 },
       visible: { opacity: 1, y: 0 }
      }}
      className="relative max-w-sm h-96 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group">
        <img className="rounded-t-lg h-full w-full scale-95 group-hover:scale-125  transition duration-500 ease-in-out " src="https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular4.png.webp" alt="" />
        <div className="absolute h-full w-full bottom-[-100%] group-hover:bottom-0 left-0 transition-all duration-500   bg-secondary/50 flex justify-center items-center flex-col px-8" >

          {/* Button Animation  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: -20 }
            }}
            className="z-10 space-x-6 mt-10">
            <button className="relative  border-2 px-5 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0  hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
          <div className=" py-2 5 text-center mt-10 bg-secondary bg-opacity-20 absolute w-full text-white text-3xl -bottom-full group-hover:bottom-0 uppercase transition duration-500">
              Clothes
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  )
}

export default PopularItems;