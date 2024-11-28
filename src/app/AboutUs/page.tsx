import React from 'react';
import "@/app/AboutUs/about.css"
import Image from 'next/image'

const page = () => {
  return (
    <div className='about'>
      <div className='box'>
      <div className='right' data-aos="fade-right">
        <Image src="/cack.png" alt="cake" width={400} height={300} />
      </div>
      <div className='left'>
      <h1>About Us</h1>
      <p>
We design & create custom birthday, wedding, party, anniversary, graduation cakes and religious festival and many more online cakes in all over Pakistan.

Life is full of events; everyone wants to celebrate these moments in a perfect and stylish way. These moments might be religious festivals like Eid, engagement, birthday, wedding ceremony, college result, office party, etc. Without having a delicious taste of cake celebration is incomplete.

Let get your cake online in Pakistan & Get you cakes at your door steps.

From fruit cakes to chocolate cakes, our cakes entice you back for one more slice. We offer a wide range of fresh and tempting cakes online at the economical price. We have been making cakes for many years and pride ourselves on a strong sense of tradition.

At cake.com.pk you will find an outstanding quality of ingredients and carefully prepared by the professional chefs.
We believe in customer satisfaction and offer the best online cake purchasing experience for ever. From booking to deliver we make sure that you will really appreciate our effort. We always strive hard to bring a uniqueness and innovation in our product and services.


Black Forest Cake Online in Pakistan
All our cakes are prepared according to the desire and the expectation of customers. We provide the custom cake solution.
Price is the major concern for everyone. But at cake.com.pk, no one can compete us in prices.
cake.com.pk is the best cake provider.
</p>
</div>
</div>
    </div>
  )
}

export default page