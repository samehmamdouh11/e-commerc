import axios from 'axios'
import { useFormik,  } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'





export default function Forgotpassword() {


  let validateSchema = Yup.object({
    email: Yup.string().required('email is required').email('enter availd email')

  })

  async function sendcode(val) {
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, val)
    console.log(data)
    if (data.statusMsg === 'success') {
      console.log('success')
      document.querySelector('.forget').classList.add('d-none')
      document.querySelector('.verfiycode').classList.remove('d-none')
    }
  }

  let formik = useFormik({

    initialValues: {
      email: ''
    },
    validationSchema: validateSchema

    ,
    onSubmit: sendcode

  })
  let validateSchema2 = Yup.object({
    resetCod: Yup.string().required('email is required')

  })


  let navgiate = useNavigate()

  async function senddata(val) {
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, val)
    console.log(data)

    if (data.status ==='Success' ) {
     
     
      navgiate('../resetPassword')

    }
  }

  let verfiy = useFormik({

    initialValues: {
      resetCod: ''
    },
    validationSchema: validateSchema2

    ,
    onSubmit: senddata

  })
  return (
    <>
      <div className='forget'>
        <h3>Forget password</h3>
        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto my-5'>

          <label htmlFor='email' >email:</label>
          <input type="email" id='email' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control' />
          {formik.touched.email && formik.errors.email ? <p className='text-danger my-3'>{formik.errors.email}</p> : ''}
          <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-success text-light my-3'>send code</button>
        </form>
      </div>

      <div className='verfiycode d-none'>
        <h3>verfiycode :</h3>
        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto my-5'>

          <label htmlFor='resetCod' >resetCod:</label>
          <input type="text" id='resetCod' name='resetCod' onBlur={formik.handleBlur} value={verfiy.values.resetCod} onChange={verfiy.handleChange} className='form-control' />
          {verfiy.touched.resetCod && verfiy.errors.resetCod ? <p className='text-danger my-3'>{verfiy.errors.required}</p> : ''}
          <button disabled={!(verfiy.isValid && formik.dirty)} type='submit' className='btn bg-success text-light my-3'>send code</button>
        </form>


      </div>


    </>

  )
}
