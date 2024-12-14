import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div className="login">
      <img src={logo} className='loginLogo' alt="" />
       <div className="loginForm">
        <h1>{signState}</h1>
        <form action="">
          {
            signState==='Sign Up'? <input type="text" name='name' placeholder='Username' /> : <> </>
          }
         
          <input type="text" name='email' placeholder='Email' />
          <input type="password"  placeholder='Password'/>
          <button>{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="formSwitch">
          {signState==='Sign In'?<p>New to Netflix? <span onClick={()=>setSignState('Sign Up')}>Sign Up Now</span></p> :  <p>Already have account? <span  onClick={()=>setSignState('Sign In')}>Sign In Now</span></p>  }
        </div>
       </div>
    </div>
  )
}

export default Login;