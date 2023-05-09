import { motion } from 'framer-motion'
import React from 'react'

const Offer = () => {
        // 
    return (
        <div className={`w-5/6 mx-auto `}>

            {/* <div class="flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 "> */}
            <div class="flex items-center justify-center bg-center bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] grayscale-[50%] bg-no-repeat bg-cover ">
                <div class="flex-col items-center justify-center text-white bg-secondary/30 w-full">
                    <div class="flex items-center justify-center">
                        <div class="h-40 text-center w-3/4 flex items-center justify-center  text-6xl font-bold">Best Deal Off The Day</div>
                    </div>
                    <div class="my-5 mx-auto text-center w-3/4 flex items-center justify-center  text-8xl font-bold animate-bounce"> <span className="text-yellow-200 animate-bounce">30%</span>
                        <br />
                        Discount

                    </div>

                    <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -80 },
              visible: { opacity: 1, y: -20 }
            }}
            className="z-10 flex justify-center space-x-6 mt-10 w-full">
            <button className="relative  border-2 px-5 py-3 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0  hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
              Start Shoping
            </button>
          </motion.div>
                    {/* <div class="flex">
                        <div class="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                            <div class="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4">
                                <div class="flex-col space-y-2 items-center px-0 md:px-6">
                                    <div class="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                                    <div class="text-5xl font-bold">69%</div>
                                    <div class="text-sm font-medium text-gray-200">Tailblocks has more than 15k+ visitors per month.</div>
                                </div>
                            </div>
                            <div class="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                                <div class="flex-col space-y-2">
                                    <div class="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                                    <div class="text-5xl font-bold">42%</div>
                                    <div class="text-sm font-medium text-gray-200">Tailblocks has more than 1.2M+ total users.</div>
                                </div>
                            </div>
                            <div class="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                                <div class="flex-col space-y-2">
                                    <div class="h-1.5 w-10 rounded-2xl bg-white bg-gradient-to-r from-sky-300 via-rose-200 to-lime-300"></div>
                                    <div class="text-5xl font-bold">71%</div>
                                    <div class="text-sm font-medium text-gray-200">Tailblocks has gained 69k+ users last month.</div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
            <script src="https://cdn.tailwindcss.com"></script>
        </div>
    )
}

export default Offer
