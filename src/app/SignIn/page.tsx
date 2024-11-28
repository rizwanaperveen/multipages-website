import React from 'react';
import '@/app/SignIn/sign.css'

const SignIn = () => {
  return (
    <div>
      <div className='card'> 
         <h1> SignIn</h1>
         
         <label htmlFor='name'>Full Name:</label>
         <input type='text'/>
         <label htmlFor='password'>Password</label>
         <input type="password"/>
         <label htmlFor="number">Phone Number:</label>
         <input type="number" />
         <br/>
         <button>SignIn</button>
         <br/>
         <button>Login with Facebook</button>
      <p>OR</p>
      <button>Continue with Google</button>

      </div>
    </div>
  )
}

export default SignIn