import React from 'react'

const Banner = () => {
  return (
    <section id='home'
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
     }}
    className="pt-32 bg-cover h-[100vh] w-full pb-24 flex justify-center items-center">
      {/* <img src="" alt="" srcset="" className="cover w-full h-48" /> */}
      <div className=" absolute text-6xl flex justify-center items-center">
        <p>
            FASHION ALWAYS CHANGE
        </p>
      </div>
    </section>
  )
}

export default Banner
