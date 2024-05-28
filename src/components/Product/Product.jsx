
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contaxt/CartContext'
import { toast } from 'react-toastify'


export default function Product() {

  let { addcart, setcart } = useContext(CartContext)
  const [productlist, setproduct] = useState([])
  async function getproduct() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    console.log(data.data)
    // console.log(productlist)
    setproduct(data.data)
  }
  async function addTO(id) {
    let { data } = await addcart(id)
    if (data.status =='success') {
      toast.success(data.message)
      setcart(data.numOfCartItems)
    }
    console.log(data)
  }

  useEffect(() => {
    getproduct()
  }, [])
  return (

    <div className="row">
      {productlist.length > 0 ?
        <>
          {productlist.map((product) => {
            return <div className="col-md-3   shadow" key={product._id}>
              <div className="product p-5 ">
                <Link to={`/details/${product._id}`}>

                  <img src={product.imageCover} className='w-100' alt={product.title} />
                  <p className='fw-bold'>{product.category.name}</p>
                  <h6 className='fw-bold  text-info'>{product.title}</h6>
                  <div className='d-flex justify-content-between '>
                    <p>{product.price} Egp</p>
                    <p>{product.ratingsAverage}
                      <i className='fa-solid fa-star '></i></p>

                  </div>
                </Link>

                <button onClick={() => { addTO(product._id) }} className='btn bg-main text-bg-info sameh'>Add to cart</button>


              </div>

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




