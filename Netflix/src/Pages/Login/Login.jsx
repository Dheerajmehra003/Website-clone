import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className="login">
      <img src={logo} className='loginLogo' alt="" />
       <div className="loginForm">
        <h1>Sign In</h1>
        <form action="">
          <input type="text" name='name' placeholder='Username' />
          <input type="text" name='email' placeholder='Email' />
          <input type="password"  placeholder='Password'/>
          <button>Sign Up</button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="formSwitch">
          <p>New to Netflix? <span>Sign Up Now</span></p>
          <p>Already have account? <span>Sign In Now</span></p>
        </div>
       </div>
    </div>
  )
}

export default Login;