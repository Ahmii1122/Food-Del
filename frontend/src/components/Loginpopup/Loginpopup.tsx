import { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
interface Props {
  setshowlogin:()=>void
}
const Loginpopup = ({setshowlogin}:Props) => {
  const[currentstate,setcurrentstate]=useState('Login')
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
      <div className="login-popup-title">
      <h2>{currentstate}</h2>
      <img onClick={()=>setshowlogin()} src={assets.cross_icon} alt="Crss-icon" />
      </div>
      <div className="login-popup-input">
        {currentstate==='Login'?<></>:<input type="text" placeholder='Your Name' required />}
        
        <input type="email" placeholder='Your Email' required/>
        <input type="password" placeholder='Password' required/>
        <button>{currentstate === 'Sign Up'? "Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing,i agree to the terms of use and privacy policy</p>
        </div>
        {currentstate==='Login'?<p>Create a new account? <span onClick={()=>setcurrentstate('Sign Up')}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setcurrentstate('Login')}>Click here</span></p>}
        
        
      </div>
      </form>
      
    </div>
  )
}

export default Loginpopup