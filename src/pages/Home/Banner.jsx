import React from 'react'

const Banner = () => {
  const bg = "https://images.pexels.com/photos/5917850/pexels-photo-5917850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <section id='home'>
     
      <img src={bg} alt="" className="w-full h-[100vh] bg-cover" />
      <div className="absolute top-0 left-0 h-full w-full bg-slate-500/40  ">
      <div className="justify-center items-center h-full p-5 flex flex-col ">
        <p className="text-5xl text-center">
            FASHION ALWAYS CHANGE
        </p>
        <p className="mt-10 text-lg text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, qui?
        </p>
      </div>
      </div>
    </section>
  )
}

export default Banner
