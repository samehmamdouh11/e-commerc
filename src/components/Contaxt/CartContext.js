import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
export let CartContext = createContext();

export default function Cartcontextprovider(props) {
    const [Cartnumber, setcart] = useState()
    let header = { token: localStorage.getItem('token') }
    function addcart(id) {
        return axios.post('https://ecommerce.routemisr.com/api/v1/cart',

            {
                productId: id
            },
            {
                headers: header
            }
        )
    }
    function addTocart() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart',


            {
                headers: header
            }
        )
    }


    function updetcart(id, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

            {
                count: count
            },
            {
                headers: header
            }
        )
    }
    function deletcart(id) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                headers: header
            }
        )
    }
    function checkoutpay(id,formData) {
      
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,


            {
                shippingAddress: formData
            },
            
            {
                headers: header
            }
        )
    }
    

    return <CartContext.Provider value={{ addcart, Cartnumber, setcart, addTocart, deletcart, updetcart,checkoutpay }}>

        {props.children}

    </CartContext.Provider>
}