
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner'

export default function Brands() {
  async function getbrand() {

    return await axios.get('https://ecommerce.routemisr.com/api/v1/brands')


  }
  let{ data, isLoading, isFetching } = useQuery('brands',getbrand)
 
  console.log(data?.data.data)
  return (
    <div className='row'>
      {
       !isLoading ?
          <>
            {
              data?.data.data.map((brands) => {
                return <div className="col-md-3">
                  <img className='w-100' src={brands.image} alt={brands.name} />
                  <p>{brands.name}</p>
                </div>
              })
            }
          </>

          :

          <div className='d-flex justify-content-center'>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>

      }




    </div>
  )
}
