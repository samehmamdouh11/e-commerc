
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../Contaxt/CartContext';








export default function Checkout() {

  let { checkoutpay, addTocart } = useContext(CartContext)
  const [isLoading, setLodaing] = useState(false)
  const [ismessage, setmessage] = useState(null)
  const [cartId, setcartId] = useState('')

  useEffect(() => {
    (async () => {
      let data = await addTocart()
      setcartId(data.data.data._id)
    })()
  }, [])










  async function payment(val) {



    let data = await checkoutpay(cartId, val)
    console.log(data)
    if (data.data.status == 'success') {
      window.location = data.data.session.url
    }



  }




  let formik = useFormik({
    initialValues: {

      details: '',

      city: '',
      phone: '',


    },
    // validate


    onSubmit: payment

  })
  return (
    <div className='my-5'>
      <h1 className='text-success'>payment Form</h1>
      <form onSubmit={formik.handleSubmit}>

        <div className="row m-auto w-75 shadow p-4">

          <div className="col-md-8">

            <div className="row">


              <div className="col-md-12">
                <label htmlFor='email'>details</label>
                <input type="text" id='email' name='details' value={formik.values.details} onChange={formik.handleChange} className='form-control' />

              </div>
              <div className="col-md-12">
                <label htmlFor='urcity'>city</label>
                <input type="text" id='urcity' name='city' value={formik.values.city} onChange={formik.handleChange} className='form-control' />

              </div>
              <div className="col-md-12">
                <label htmlFor='urphone'>phone</label>
                <input type="tel" id='urphone ' name='phone' value={formik.values.phone} onChange={formik.handleChange} className='form-control' />

              </div>



              <div className="col-md-12 text-end">
                <button type='submit' className='btn bg-success text-light'>pay


                </button>
              </div>

            </div>

          </div>

        </div>

      </form>

    </div>
  )
}
