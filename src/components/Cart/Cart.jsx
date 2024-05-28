import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Contaxt/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [data, setdata] = useState([])
  const [cartprice, setprice] = useState([])

  let { addTocart, setcart, updetcart, deletcart } = useContext(CartContext)

  useEffect(() => {
    (async () => {
      let data = await addTocart()
      setdata(data.data.data.products)
      setprice(data.data.data.totalCartPrice)
    })()
  }, [])

  async function removeitem(id) {
    let data = await deletcart(id)
    setdata(data.data.data.products)
    setcart(data.data.numOfCartItems)
    console.log(data)
  }
  async function updetcarts(id, count) {
    let data = await updetcart(id, count)
    if (count == 0) {
      deletcart(id)
    } else {
      setdata(data.data.data.products)
      setcart(data.data.numOfCartItems)
      console.log(data)
    }

  }
  return (
    <div className='container'>
      <h1>shopping cart</h1>
      <Link to='/checkout' >
        <button className='btn bg-success text-light'>onlinepayment</button>

      </Link>
      <div className="row">
        <div className="col-md-11 bg-main-light shadow p-5 m-auto my-5">
          <h3><span className='text-success fw-bold'>Total price</span>{cartprice}</h3>
          {data.map((product) => {

            return <div className="row border-bottom py-5">
              <div className="col-md-1">
                <img src={product.product.imageCover} className='w-100' alt="cover" />
              </div>
              <div className="col-md-11 d-flex justify-content-between align-items-center">
                <h5>{product.product.title}</h5>
                <p>{product.price}</p>
                <button onClick={() => { removeitem(product.product._id) }} className='btn btn-outline-danger'><i className='fa-regular fa-trash-can'></i>Remove</button>

              </div>
              <div>
                <button onClick={() => { updetcarts(product.product._id, product.count + 1) }} className='btn btn-outline-danger'>+</button>
                <span className='mx-2'>{product.count}</span>
                <button onClick={() => { updetcarts(product.product._id, product.count - 1) }} className='btn btn-outline-danger'>-</button>
              </div>
            </div>
          })}
        </div>
      </div>



    </div>
  )
}
