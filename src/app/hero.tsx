import React from 'react';
import "@/app/style/hero.css"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-side' data-aos="fade-right">
        <Image src="/cake(1).jpeg" alt="cake" width={600} height={400} />
      </div>
      <div className='right-side' data-aos="fade-left">
      <Image src="/cake(3).jpeg" alt="" width={600} height={400} />
      </div>
    </div>
  )
}

export default Hero