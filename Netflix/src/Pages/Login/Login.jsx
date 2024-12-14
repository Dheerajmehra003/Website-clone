import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../Firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userAuth = async(event) => {
    event.preventDefault();
    if(signState ==="Sign In") {
      await login(email, password)
    }
    else{
      await signup(name, email, password)
    }
  }

  return (
    <div className="login">
      <img src={logo} className='loginLogo' alt="" />
       <div className="loginForm">
        <h1>{signState}</h1>
        <form action="">
          {
            signState==='Sign Up'? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} 
            placeholder='Username' /> : <> </> }
          <input type="text" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} 
           placeholder='Email' />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} 
           placeholder='Password'/>
          <button onClick={userAuth}  type='submit'>{signState}</button>
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