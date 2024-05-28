import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectRoute(myprops) {
  if (localStorage.getItem ('token') !== null) {
   return myprops.children
  } else {
    return <Navigate to='/Signin'/>
  }
//   return (
//   // 
//   // <div>ProtectRoute</div>
//   // //
    
//   //   // 
// )
}
