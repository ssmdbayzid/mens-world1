import React from 'react'
import Banner from './Banner'
import PopularItems from './PopularItems'
import Products from './Products'
import Offer from './Offer'
import Testimonial from './Testimonial'
import NewArrivalProducts from './NewArrivalProducts'

const Home = () => {
  return (
    <div>
      <Banner />
      < PopularItems
       />
       <Products />
       <Offer />
       <NewArrivalProducts />
       <Testimonial />

    </div>
  )
}

export default Home
