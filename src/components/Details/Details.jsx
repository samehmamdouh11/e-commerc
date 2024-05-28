import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Contaxt/CartContext'
import { toast } from 'react-toastify'

export default function Details() {
  let { addcart,setcart } = useContext(CartContext)

  const [ProductDetails, setDetails] = useState(null)
  let parm = useParams()
  let PRoductId = parm.id
  console.log(parm)
  async function getproducts() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${PRoductId}`)
    setDetails(data.data)
  }

  async function addTO(id) {
    let { data } = await addcart(id)
    if (data.status == 'success') {
      toast.success(data.message)
      setcart(data.numOfCartItems)
    }
    console.log(data)
  }
  useEffect(() => {
    getproducts()
  }, [])
  return (
    <div className='container my-5'>

      <div className="row">
        <div className="col-md-3">
          <img src={ProductDetails?.imageCover} alt='cover' className='w-100' />

        </div>
        <div className="col-md-9">
          <h2>{ProductDetails?.title}</h2>
          <p>{ProductDetails?.description}</p>
          <p>{ProductDetails?.category.name}</p>
          <p><span>price</span>{ProductDetails?.price}</p>
          <p><span><i className='fa-solid rating-color fa-star'></i> </span>{ProductDetails?.ratingsAverage}</p>
          <button  onClick={() => { addTO(ProductDetails._id) }} className='btn bg-success text-light' >add to cart</button>

        </div>
      </div>
    </div>
  )
}