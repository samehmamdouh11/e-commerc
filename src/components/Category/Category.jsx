import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function Category() {
  const [categoryList, setcategory] = useState([])
  async function getCategory() {



    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setcategory(data.data)
  }
  useEffect(() => {
    getCategory()

  }, [])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>

        {categoryList.map((Category) => {
          return <>
            <img src={Category.image} className='w-100 ' alt='' height={300}  />
            <p>{Category.name}</p>
          </>



        })
        }



      </Slider>

    </div>
  )
}
