import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { userContext } from '../Contaxt/TokenCounter'

export default function Layout() {
  let { setToken } = useContext(userContext)
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setToken(localStorage.getItem('token'))
    }
  })


  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
