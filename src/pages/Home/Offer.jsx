import { motion } from 'framer-motion'
import React from 'react'

const Offer = () => {
    // 
    return (
        <div className={`w-5/6 mx-auto `}>

            {/* <div class="flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 "> */}
            <div class="flex items-center justify-center bg-center bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] grayscale-[50%] bg-no-repeat bg-cover  ">
                <div class="flex-col items-center justify-center pt-20 text-white bg-secondary/30 w-full">
                    
                        <div class="text-center flex items-center justify-center  text-2xl  font-bold">Trending Collectionfor Fashion</div>
                    
                    <div class="mb-5 mx-auto text-center flex items-center justify-center m-10 text-4xl font-bold"><span className="text-yellow-200 animate-bounce">Up to 70% Off</span>
                        All T-shirt & Accessories
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}
                        variants={{
                            hidden: { opacity: 0, y: -80 },
                            visible: { opacity: 1, y: -20 }
                        }}
                        className="z-10 flex justify-center space-x-6 my-10 w-full">
                        <button className="relative  border-2 px-5 py-2 font-medium rounded-tr-[27px] text-white uppercase bg-transparent transition-colors before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 before:content-[''] before:rounded-tr-[25px] before:scale-x-0  hover:before:scale-x-100 before:transition-transform before:duration-300 hover:text-gray-900 before:z-[-1] ">
                            Explore More
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Offer
