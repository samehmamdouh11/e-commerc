import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Contaxt/TokenCounter'
import { CartContext } from '../Contaxt/CartContext'


export default function Navbar() {

  let { Cartnumber,addTocart,setcart } = useContext(CartContext)

  
 

  let { userToken, setToken } = useContext(userContext)
  // console.log(userToken)
  let navgiate = useNavigate()
  function logout() {
    localStorage.removeItem('token')
    setToken(null)
    navgiate('../Signin')
  }

  useEffect(() => {
    (async () => {
      let data = await addTocart();
      setcart(data.data.numOfCartItems)
      console.log(data.data.numOfCartItems)
    })()
  }, [])

  return (


    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" href="#">  <i className="  text-success fa-solid fa-cart-shopping"></i> <span> Freshcart </span>

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {


              userToken !== null ?


                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="product">product</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="category">category</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="brand">Brands</Link>
                  </li>



                </ul>



                : ''

            }

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {userToken == null ?
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="signup">register</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="signin">Login</Link>
                  </li>
                </> : ''

              }


              {userToken !== null ?
                <>

                  <li className="nav-item  d-flex align-items-center">
                    <i className="fa-brands fa-facebook mx-3"></i>
                    <i className="fa-brands fa-twitter  mx-3"></i>
                    <i className="fa-brands fa-instagram mx-3"></i>
                    <i className="fa-brands fa-linkedin mx-3"></i>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="cart">
                      <i className='fa-solid fa-shopping-cart text-success'></i> <span className='badge bg-success text-light'>
                        {Cartnumber}
                      </span>
                    </Link>
                  </li>


                  <li onClick={() => { logout() }} className="nav-item">
                    <Link className="nav-link" >Logout</Link>
                  </li>
                </> : ''


              }




            </ul>

          </div>
        </div>
      </nav>

    </>


  )
}
