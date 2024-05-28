// import logo from './logo.svg';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Category from './components/Category/Category'
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Notfound from './components/Notfound/Notfound';
import Product from './components/Product/Product';
import Brands from './components/Brands/Brands';
import Details from './components/Details/Details';
import UserContextProvider from './components/Contaxt/TokenCounter'
import ProtectRoute from './components/protectRoute/protectRoute'
import Cartcontextprovider from './components/Contaxt/CartContext';
import Allorders from './components/Allorders/Allorders';
import { ToastContainer } from 'react-toastify';
import Checkout from './components/checkout/checkout';
import Forgotpassword from './components/forgotpassword/forgotpassword';
import ResetPassword from './components/resetPassword/resetPassword';

// import { Component } from 'react';


const router = createBrowserRouter(

  [
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <ProtectRoute><Home /></ProtectRoute> },
        { path: 'home', element: <ProtectRoute><Home /></ProtectRoute> },
        { path: 'cart', element: <ProtectRoute><Cart /></ProtectRoute> },
        { path: 'category', element: <ProtectRoute><Category /></ProtectRoute> },
        { path: 'signin', element: <Signin /> },
        { path: 'signup', element: <Signup /> },
        { path: '*', element: <Notfound /> },
        { path: 'product', element: <ProtectRoute><Product /></ProtectRoute> },
        { path: 'brand', element: <ProtectRoute><Brands /></ProtectRoute> },
        { path: 'details/:id', element: <ProtectRoute><Details /></ProtectRoute> },
        { path: 'checkout', element: <ProtectRoute><Checkout /></ProtectRoute> },
        { path: 'allorders', element: <ProtectRoute><Allorders /></ProtectRoute> },
        { path: 'forgetpassword', element: <Forgotpassword /> },
        { path: 'resetpassword', element: <ResetPassword /> },
      ]

    }
  ]
)



function App() {
  return (
    <Cartcontextprovider>
      <UserContextProvider >
        <RouterProvider router={router}></RouterProvider>
      </UserContextProvider>
      <ToastContainer />
    </Cartcontextprovider>

  );
}

export default App;
