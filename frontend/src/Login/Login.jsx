import React, { useState } from 'react'
import "./login.css"
import illustration from "../assets/Images/7178891.jpg"
import google from "../assets/Images/google.png"
import facebook from '../assets/Images/facebook.png'
import apple from '../assets/Images/apple-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbas'
import Footer from '../Footer/Footer'
import axios from "axios"
function Login() {
  const users={
    email:'',
    password:''
  }
  const [user, setUser] = useState(users)
  const navigate = useNavigate()
  const inputhandler = (e) => {
    const { name, value } = e.target
    setUser({...user,[name]:value})
  }
  const submitForm = async (e) => {
       e.preventDefault()
    await axios.post('http://localhost:7000/api/login', user)
      .then((res) => {
        console.log(res.data)
        if (res.data === "!exists") {
          alert("user does not exists")
        } else if(res.data==="!Success") {
          alert("invalid password")
          
        } else {
          alert("Login Successfully")
          navigate('/home')
        }
        
       })

      .catch((err) => {
      console.log(err)
    })
    
  }
  return (
    <>
      <Navbar/>
    <div className="login-page">
   
    <div className="left-section">
      <img src={illustration} alt="Illustration" className="illustration" />
    </div>

    
    <div className="right-section">
      <div className="form-container">
        <h2>Log in to your <br /> Code  With Smile account</h2>
          <form  >
          
         
          <input type="email" placeholder="Email" name='email'  onChange={inputhandler} required />
          <input type="password" placeholder="Password" name='password'   onChange={inputhandler} required/>
          <button onClick={submitForm} >Login</button>
        </form>
                  <a href="#" className="forgot-password"><span className='span'>Forgot Password?</span></a>
        <div className="other-options">
          <span>Other log in options</span>
          <div className="social-icons">
        <button className='btn'><img src={google} width='20px' height='20px' alt="" /></button>
            <button className='btn'><img src={facebook} width='20px' height='20px' alt="" /></button>
            <button className='btn'><img src={apple} width='20px' height='20px' alt="" /></button>
          </div>
        </div>
        <div className="signup-links">
          <p>
            Don’t have an account? <Link to={"/sign-up"}><span className='span'>Sign up</span></Link>
                      </p>
                      <br />
          <Link  to={"/login-bussiness"}> <span className="span" >Log in with your organization</span></Link>
        </div>
      </div>
    </div>
      </div>

      <Footer/>
      </>
  )
}

export default Login
