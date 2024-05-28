import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';


export default function Signup() {

const [isLoading,setLodaing] =useState(false)
const[ismessage,setmessage]= useState(null)

let navgate =useNavigate()


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
  name:Yup.string().min(3,'minlength is 3').max(15,'maxlength is 15').required('this is required'),
  email:Yup.string().required('email is required').email('enter avalid email'),
  phone:Yup.string().required('phone is rquired').matches(/^01[1250][0-9]{8}$/,'phone is required'),
  password:Yup.string().required('passwored is reqired').matches(/^[A-Z][a-z0-9]{6,8}$/,'enter availd passwored'),

rePassword:Yup.string().required('this is confirm password is reqired').oneOf([Yup.ref('password')],'not matched')
})


async function signUp(val){
  setLodaing(true)
  console.log(val)
 
 let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', val).catch((err)=>{
  console.log(err.response.data.message)
  setmessage(err.response.data.message)
  setLodaing(false)
 })
console.log(data)
if(data.message === 'success'){
  navgate('../Signin')
  setLodaing(false)
}
}




  let formik=useFormik({
initialValues:{
  name:'',
  email:'',
  phone:'',
  password:'',
  rePassword:'',

},
// validate

validationSchema:validationSchema
,
onSubmit:signUp


  })
  return (
    <div className='my-5'>
      <h1 className='text-success'>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>

    <div className="row m-auto w-75 shadow p-4">

      <div className="col-md-8">

<div className="row">

<div className="col-md-12">
        <label htmlFor='name'>name</label>
        <input type="text" id='name' name='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} className='form-control' />
        {formik.errors.name && formik.touched.name?
        <p className='text-danger'>{formik.errors.name}</p>:""
        }
      </div>
      <div className="col-md-12">
        <label htmlFor='email'>email</label>
        <input type="email" id='email' name='email'   onBlur={formik.handleBlur} value={formik.values.email}  onChange={formik.handleChange} className='form-control' />
        {formik.errors.email && formik.touched.email?
        <p className='text-danger'>{formik.errors.email}</p>:""
        }
      </div>
      <div className="col-md-12">
        <label htmlFor='phone'>phone</label>
        <input type="tel" id='phone' name='phone' onBlur={formik.handleBlur} value={formik.values.phone}  onChange={formik.handleChange} className='form-control' />
        {formik.errors.phone && formik.touched.phone?
        <p className='text-danger'>{formik.errors.phone}</p>:""
        }
      </div>
      <div className="col-md-12">
        <label htmlFor='password'>password</label>
        <input type="password"  autoComplete='on' id='password' name='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} className='form-control' />
        {formik.errors.password && formik.touched.password?
        <p className='text-danger'>{formik.errors.password}</p>:""

}
      </div>
      <div className="col-md-12">
        <label htmlFor='repassword'>rePassword</label>
       
        <input type="password"  autoComplete='on'  id='rePassword' name='rePassword' onBlur={formik.handleBlur} value={formik.values.rePassword} onChange={formik.handleChange} className='form-control' />
        {formik.errors.rePassword && formik.touched.rePassword?
        <p className='text-danger'>{formik.errors.rePassword}</p>:""
}
      </div>
      {ismessage !==null ?
      <p className='text-info'>{ismessage}</p>
      :
      ''
      }
      <div className="col-md-12 text-end">
       <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-success text-light'>Register
       {isLoading
       ?
       
     <span><i className='fa-solid text-light mx-2 fa-spinner fa-spin'></i></span>
       
       :
       ''
       }
       
       </button>
      </div>
      <p className='text-muted '> I have aleardy an account<Link to='../Signin' className='m-2 text-success' > login</Link></p>

</div>

      </div>
     
    </div>

      </form>

    </div>
  )
}
