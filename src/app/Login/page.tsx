import React from 'react';
import "./log.css"

const login = () => {
  return (
    <div className='login' data-aos="zoom-in">
      <h1 className='heading'>Login</h1>
      <button>Login with Facebook</button>
      <p>OR</p>
      <button>Continue with Google</button>
      <div className='log'>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className='log'>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      </div>
  
  )
}

export default login