import React from 'react'
import "./order.css"
import { BsCart3 } from "react-icons/bs";

const Order = () => {
  return (
    <div className='order'>
      <button>Order Now</button>
      <p><BsCart3 /></p>
    </div>
  )
}

export default Order