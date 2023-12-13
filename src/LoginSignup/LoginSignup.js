import React,{useState} from 'react'
import './LoginSignup.css'
import { ReactComponent as MySVG } from './google.svg';
import { ReactComponent as MySVG1 } from './mac.svg';
import { ReactComponent as MySVG2 } from './linkedin.svg';


const LoginSignup = () => {

    const[action,setAction] = useState("Log in to your Account");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          {action}
        </div>
        <div className='inputs'>
            {action === "Create new Account" ?<div><br></br><br></br>
            <label>Name</label><br></br>
          <div className='input'>
            <input type = "text" placeholder='Enter your Name'/>
          </div></div> : <div></div>}
          <br></br>
            <label>Email</label><br></br>
          <div className='input'>
            <input type = "email" placeholder='Enter your Email'/>
          </div><br></br>
            <label>Password</label><br></br>
          <div className='input'>
            <input type = "password" placeholder='Enter your password'/>
          </div>
        </div>
        {action === "Log in to your Account" ? <div className='forgot-password'><span>Forgot password!</span></div> : <div></div>}
        
        <div className='submit-container'>
            <div className={action === "Log in to your Account" ? "submit gray" : "submit"} onClick={() => {setAction("Create new Account")}}>Sign Up</div>
            <div className={action === "Create new Account" ? "submit gray" : "submit"} onClick={() => {setAction("Log in to your Account")}}>Log In</div>
        </div>
      </div>
        <div className='icon'>
            <MySVG />
            <MySVG1/>
            <MySVG2/>
        </div>
    </div>
  )
}

export default LoginSignup
