import React from 'react';
import Image from 'next/image';
import "@/app/style/content.css";


const Content = () => {
  return (
    <>
      <h1>Our Services</h1>
      <p className='para'>We offer a wide range of cakes to choose from.</p>
      <div className='container'>
        
      <div className='cak' data-aos="zoom-in">
          <Image src="/cake(2).jpg" alt="heros" width={300} height={300} />
         <div className='text'><h2>Chocolate Cake</h2>
          </div>
        </div>
        <div className='cak' data-aos="zoom-in">
        <Image src="/cake(5).jpeg" alt="heros" width={300} height={300} />
        <div className='text'>
          <h2>Pink delight cake</h2>
        </div>
        </div>
        <div className='cak' data-aos="zoom-in">
        <Image src="/cake(4).jpeg" alt="heros" width={300} height={300} />
        <div className='text'>
          <h2>Double velvet cake</h2>
          
        </div>
        </div>
        <div className='cak' data-aos="zoom-in">
        <Image src="/cake(6).jpeg" alt="heros" width={300} height={300} />
        <div className='text'>
          <h2>Pinky Butterfly cake</h2>
        </div>
        </div>
        <div className='cak' data-aos="zoom-in">
        <Image src="/cake(7).jpeg" alt="heros" width={300} height={300} />
        <div className='text'>
          <h2>Buntoo cake</h2>
        </div>
        </div>
        <div className='cak' data-aos="zoom-in">
        <Image src="/cake(1).jpeg" alt="heros" width={300} height={300} />
        <div className='text'>
          <h2>Vanilla Chocolate cake</h2>
        </div>
        </div>
    
      </div>
      </>
  )
}

export default Content