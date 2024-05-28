import React from 'react'
import Product from '../Product/Product'
import Sliderss from '../Slider/Sliderss'

import Category from '../Category/Category'

export default function Home() {

 
  return (
    <>
    
      <Sliderss/>

      <h1>category</h1>
      <Category/>
      <div className='d-flex justify-content-center align-items-center py-5'>

        <h2 className='  d-flex justify-content-center  align-items-center  fw-bold text-info'>Product</h2>
      </div>
      <Product />
    </>
  )
}
