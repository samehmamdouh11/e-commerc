// import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useContext } from 'react';


import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../Contaxt/TokenCounter';

export default function Signin() {
  let { setToken } = useContext(userContext)


  const [isLoading, setLodaing] = useState(false)
  const [ismessage, setmessage] = useState(null)

  let navgate = useNavigate()


  // function validate(values){
  //   let errors= {}
  //   if(!values.Name){
  //     errors.Name='name is required'
  //   }else if(values.Name.length < 3){
  //     errors.Name= 'min lenght is 3'
  //   }else if(values.Name.lengtg >10){
  //     errors.Name= 'max lenghtis 10'
  //   }


  //   if(!values.phone){
  //     errors.phone='phone is required'
  //   }else if(!/^01[1250][0-9]{8}$/.test(values.phone)){
  //   errors.phone ='enter a vaild phone number'

  //   }


  //   if (!values.Email) {
  //     errors.Email =' Email is Required';
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
  //   ) {
  //     errors.Email = 'Invalid email address';
  //   }
  //   if (!values.password) {
  //     errors.password =' passwoed is Required';
  //   } else if (
  //     !/^[A-Z][a-z0-9]{6,8}$/.test(values.password)
  //   ) {
  //     errors.password = 'Invalid password address';
  //   }

  //   if(!values.repasswordpassword){
  //     errors.repassword='repasswored is required'
  //   }else if(values.password!==values.repassword){
  //     errors.repassword='not matched'
  //   }
  //   return errors
  // }

  let validationSchema = Yup.object({

    email: Yup.string().required('email is required').email('enter valid email'),

    password: Yup.string().required('passwored is reqired').matches(/^[A-Z][a-z0-9]{6,8}$/, 'enter availd passwored'),


  })


  async function signIn(val) {
    setLodaing(true)
    console.log(val)

    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', val).catch((err) => {
      console.log(err.response.data.message)
      setmessage(err.response.data.message)
      setLodaing(false)
    })
    console.log(data)
    if (data.message === 'success') {
      navgate('../Home')
      localStorage.setItem('token', data.token)
      setToken(data.token)
      // console.log(userToken)
      setLodaing(false)
    }
  }




  let formik = useFormik({
    initialValues: {

      email: '',

      password: '',


    },
    // validate

    validationSchema: validationSchema
    ,
    onSubmit: signIn

  })
  return (
    <div className='my-5'>
      <h1 className='text-success'>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>

        <div className="row m-auto w-75 shadow p-4">

          <div className="col-md-8">

            <div className="row">


              <div className="col-md-12">
                <label htmlFor='email'>email</label>
                <input type="email" id='email' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control' />
                {formik.errors.email && formik.touched.email ?
                  <p className='text-danger'>{formik.errors.email}</p> : ""
                }
              </div>

              <div className="col-md-12">
                <label htmlFor='password'>password</label>
                <input type="password" autoComplete='on' id='password' name='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} className='form-control' />
                {formik.errors.password && formik.touched.password ?
                  <p className='text-danger'>{formik.errors.password}</p> : ""

                }
              </div>

              {ismessage !== null ?
                <p className='text-info'>{ismessage}</p>
                :
                ''
              }
              <div className="col-md-12 text-end">
                <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-success text-light'>Login
                  {isLoading
                    ?

                    <span><i className='fa-solid text-light mx-2 fa-spinner fa-spin'></i></span>

                    :
                    ''
                  }

                </button>
              </div>
              <p className='text-muted '> <Link to='../Signup' className='m-2 text-success' > Sign up</Link></p>
              <p className='text-muted '> <Link to='/forgetpassword' className='m-2 text-success' > Forgetpassword</Link></p>

            </div>

          </div>

        </div>

      </form>

    </div>
  )
}

