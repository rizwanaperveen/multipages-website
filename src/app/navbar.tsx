import React from 'react'
import '@/app/style/nav.css'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
      
 <h1>Cake Bake</h1>
 <Image src="/cake (5).jpeg" alt="logo" width={50} height={50}  className='logo'/> 
    <div className='menu'>
    <IoMenu />
      </div>
    <div className='links'>
      <div><Link href="/" className='li'>Home</Link></div>
      <div><Link href="/AboutUs" className='li'>About Us</Link></div>
      <div><Link href="/SignIn" className='li'>SignIn</Link></div>
      <div><Link href="/Login" className='li'>LogIn</Link></div>
      <div><Link href="/Order" className='li'>Order</Link></div>
    </div>
    </div>
  )
}

export default Navbar