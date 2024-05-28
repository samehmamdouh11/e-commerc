import { useFormik } from 'formik'
import React from 'react'


export default function ResetPassword() {
  function resetpass(val){

  }

  let formik = useFormik({
    initialValues: {

      email: '',

    newPassword: '',
   


    },
    // validate

    onSubmit: resetpass

  })
  return (
    <div>
      <form  onSubmit={formik.handleSubmit}>
      <div className="col-md-12">
                <label htmlFor='email'>email</label>
                <input type="email" id='email' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control' />
               
              </div>

              <div className="col-md-12">
                <label htmlFor='newPassword'>newpassword</label>
                <input type="password" autoComplete='on' id='newPassword' name='newPassword' onBlur={formik.handleBlur} value={formik.values.newPassword} onChange={formik.handleChange} className='form-control' />
              
                
              </div>




      </form>


    </div>
  )
}
